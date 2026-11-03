// Derleme sonrası ön-render (SSG): her statik rotanın HTML'ini üretir.
// Sıra: `vite build` (istemci, dist/public) -> bu betik -> dist/public/<rota>/index.html.
// Yöntem Vite'ın resmi SSR/ön-render desenidir (ek paket yok): entry-server.tsx SSR olarak
// paketlenir, react-dom/server ile render edilir, react-helmet-async başlık/meta'yı verir.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { execFileSync } from "node:child_process";
import { build } from "vite";

process.env.NODE_ENV = "production";

const kok = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const istemciCikti = path.join(kok, "dist", "public");
const ssrCikti = path.join(kok, "dist", "ssr");

// Rotalar App.tsx'teki <Route ...> etiketlerinden okunur; yeni rota eklenince kendiliğinden girer.
// `path` özniteliği etiketin herhangi bir yerinde olabilir. Parametreli rotalar ve dosya uzantılı
// adresler (ör. .php) ön-render edilmez, SPA kabuğuyla kalır. Her <Route sayılır; ön-render dışı
// kalan her etiket nedeniyle raporlanır, açıklanamayan fark derlemeyi düşürmeden uyarır.
const rotaBileseni = new Map(); // rota -> App.tsx'teki component adı (site haritası lastmod için)

function rotalariOku() {
  const kaynak = fs.readFileSync(path.join(kok, "client", "src", "App.tsx"), "utf8");
  const toplam = [...kaynak.matchAll(/<Route\b/g)].length;
  const rotalar = new Set();
  const say = { yolsuz: 0, atlanan: [], tekrar: [], okunamayan: [] };
  for (const m of kaynak.matchAll(/<Route\b([^>]*)>/g)) {
    const oz = m[1];
    const p = /\bpath\s*=\s*(?:"([^"]+)"|'([^']+)'|\{\s*["'`]([^"'`]+)["'`]\s*\})/.exec(oz);
    if (!p) {
      if (/\bpath\b/.test(oz)) say.okunamayan.push(oz.trim().slice(0, 80));
      else say.yolsuz++; // 404 yedeği
      continue;
    }
    const r = p[1] ?? p[2] ?? p[3];
    if (r.includes(":") || r.includes("*") || /\.[a-z0-9]+$/i.test(r)) { say.atlanan.push(r); continue; }
    if (rotalar.has(r)) { say.tekrar.push(r); continue; }
    rotalar.add(r);
    // Yalnız `component={X}` biçimi okunur. Children biçimindeki (<Route path=..>{...}</Route>)
    // rotanın bileşeni bilinmez; haritada o rotanın <lastmod> satırı yazılmaz (güvenli geri dönüş).
    const b = /\bcomponent\s*=\s*\{\s*([A-Za-z_$][\w$]*)\s*\}/.exec(oz);
    if (b) rotaBileseni.set(r, b[1]);
  }
  const islenen = rotalar.size + say.yolsuz + say.atlanan.length + say.tekrar.length + say.okunamayan.length;
  const acik = toplam - islenen + say.okunamayan.length;
  console.log(
    `[on-render] App.tsx: ${toplam} <Route>, ${rotalar.size} ön-render; fark ${toplam - rotalar.size} ` +
      `(${say.yolsuz} yolsuz/404, ${say.atlanan.length} atlanan [${say.atlanan.join(", ")}], ` +
      `${say.tekrar.length} tekrar, ${say.okunamayan.length + (toplam - islenen)} okunamayan).`,
  );
  if (acik > 0) {
    console.warn(
      `[on-render] UYARI: ${acik} <Route> etiketi okunamadı, ön-render edilmedi. Kontrol edin:\n  ` +
        (say.okunamayan.join("\n  ") || "(etiket içinde '>' olabilir)"),
    );
  }
  return [...rotalar];
}

// Menü süzgecinin rota listesi (client/src/lib/rotalar.ts) App.tsx'teki path'lerle birebir aynı olmalı;
// aksi halde menü var olan sayfayı gizler ya da kırık adres gösterir. Fark varsa derleme durur.
function menuRotalariniDenetle() {
  const app = fs.readFileSync(path.join(kok, "client", "src", "App.tsx"), "utf8");
  const liste = fs.readFileSync(path.join(kok, "client", "src", "lib", "rotalar.ts"), "utf8");
  const appYollari = new Set([...app.matchAll(/<Route\b[^>]*\bpath\s*=\s*"([^"]+)"/g)].map((m) => m[1]));
  const blok = /TANIMLI_ROTALAR[^=]*=\s*\[([\s\S]*?)\]/.exec(liste);
  const listeYollari = new Set(blok ? [...blok[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]) : []);
  const eksik = [...appYollari].filter((r) => !listeYollari.has(r));
  const fazla = [...listeYollari].filter((r) => !appYollari.has(r));
  if (eksik.length || fazla.length) {
    throw new Error(
      `rotalar.ts App.tsx ile uyuşmuyor. Listede eksik: [${eksik.join(", ")}]; listede fazla: [${fazla.join(", ")}]`,
    );
  }
  console.log(`[on-render] Menü rota listesi App.tsx ile aynı (${listeYollari.size} adres).`);
}

// ---- Site haritası + robots.txt (el yazması liste yok; ön-render edilen rotalardan üretilir) ----

const SITE_HARITASI_ADRESI = "https://mikateknoloji.com/sitemap.xml";

// App.tsx import'larından component adı -> sayfa kaynak dosyası (ör. PDKSPage -> client/src/pages/PDKSPage.tsx).
function bilesenDosyalari() {
  const srcKok = path.join(kok, "client", "src");
  const kaynak = fs.readFileSync(path.join(srcKok, "App.tsx"), "utf8");
  const harita = new Map();
  for (const m of kaynak.matchAll(/^import\s+([^;]+?)\s+from\s+["']([^"']+)["']/gm)) {
    const yol = m[2].replace(/^@\//, "./");
    if (!yol.startsWith("./")) continue;
    const dosya = [".tsx", ".ts", "/index.tsx"].map((u) => path.join(srcKok, yol + u)).find((d) => fs.existsSync(d));
    if (!dosya) continue;
    for (const ad of m[1].replace(/[{}]/g, " ").split(/[\s,]+/).filter(Boolean)) harita.set(ad, dosya);
  }
  return harita;
}

function git(args) {
  return execFileSync("git", ["-c", "core.longpaths=true", ...args], {
    cwd: kok,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  }).trim();
}

// lastmod = sayfa kaynak dosyasının GERÇEK son commit tarihi; bilinmiyorsa null döner ve o adresin
// <lastmod> satırı HİÇ yazılmaz (uydurma tarih yok). Geçmiş güvenilmez sayılır: git yok, depo değil,
// sığ klon (`rev-parse --is-shallow-repository` != "false"; ör. Vercel --depth klonu). Aynı güven
// kuralıyla: commit'lenmemiş (kirli/izlenmeyen) dosyanın gerçek değişiklik günü bilinmez -> yazılmaz.
// SITE_HARITASI_GIT_GUVENILMEZ=1 güvenilmez geçmişi zorlar (yalnız doğrulama için).
function sonDegisiklikTarihi() {
  let guvenilir = false;
  try {
    guvenilir = git(["rev-parse", "--is-shallow-repository"]) === "false";
  } catch {}
  if (process.env.SITE_HARITASI_GIT_GUVENILMEZ === "1") guvenilir = false;
  if (!guvenilir) console.warn("[site-haritası] UYARI: tam git geçmişi yok (sığ klon/git yok); lastmod yazılmaz.");
  const onbellek = new Map();
  return (dosya) => {
    if (!dosya || !guvenilir) return null;
    if (onbellek.has(dosya)) return onbellek.get(dosya);
    let t = null;
    try {
      if (!git(["status", "--porcelain", "--", dosya])) t = git(["log", "-1", "--format=%cs", "--", dosya]) || null;
    } catch {}
    if (t !== null && !/^\d{4}-\d{2}-\d{2}$/.test(t)) t = null;
    onbellek.set(dosya, t);
    return t;
  };
}

// kayitlar: [{ rota, kanonik, noindex }] (ön-render çıktısından). Haritaya yalnız canonical'ı
// KENDİSİ olan, noindex olmayan adresler girer; diğer her adresin canonical'ı haritadaki bir adresi
// göstermek zorundadır, göstermiyorsa derleme düşer.
function siteHaritasiYaz(kayitlar, kanonikAdres) {
  const dosyasi = bilesenDosyalari();
  const tarih = sonDegisiklikTarihi();
  const girenler = kayitlar.filter((k) => !k.noindex && k.kanonik === kanonikAdres(k.rota));
  const girenAdres = new Set(girenler.map((k) => k.kanonik));
  const sorun = kayitlar
    .filter((k) => !k.noindex && !girenAdres.has(k.kanonik))
    .map((k) => `${k.rota} -> canonical ${k.kanonik || "(yok)"}`);
  if (sorun.length) throw new Error("Canonical'ı site haritasında olmayan adres:\n  " + sorun.join("\n  "));
  const satirlar = girenler.map((k) => {
    const lastmod = tarih(dosyasi.get(rotaBileseni.get(k.rota)));
    const lm = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : "";
    return `  <url>\n    <loc>${k.kanonik}</loc>${lm}\n  </url>`;
  });
  const lastmodSayisi = satirlar.filter((s) => s.includes("<lastmod>")).length;
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<!-- Derlemede scripts/prerender.mjs üretir; elle düzenlemeyin. -->\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${satirlar.join("\n")}\n</urlset>\n`;
  fs.writeFileSync(path.join(istemciCikti, "sitemap.xml"), xml);

  // robots.txt: client/public/robots.txt kuralları korunur, Sitemap satırı tek ve üretilen adres olur.
  const robotsKaynak = fs.readFileSync(path.join(kok, "client", "public", "robots.txt"), "utf8");
  const robots =
    robotsKaynak
      .split(/\r?\n/)
      .filter((s) => !/^\s*sitemap\s*:/i.test(s))
      .join("\n")
      .replace(/\s+$/, () => "") + `\n\nSitemap: ${SITE_HARITASI_ADRESI}\n`;
  fs.writeFileSync(path.join(istemciCikti, "robots.txt"), robots);

  const disarida = kayitlar.length - girenler.length;
  console.log(
    `[site-haritası] ${girenler.length} adres yazıldı (${lastmodSayisi} lastmod); ${disarida} adres dışarıda ` +
      `(canonical başka adres ya da noindex). robots.txt Sitemap: ${SITE_HARITASI_ADRESI}`,
  );
}

function hedefDosya(rota) {
  if (rota === "/") return path.join(istemciCikti, "index.html");
  return path.join(istemciCikti, ...rota.replace(/^\/+|\/+$/g, () => "").split("/"), "index.html");
}

async function main() {
  const sablonYolu = path.join(istemciCikti, "index.html");
  const kabukYolu = path.join(istemciCikti, "spa.html");
  const BOS_KOK = '<div id="root"></div>';
  if (!fs.existsSync(sablonYolu)) throw new Error("dist/public/index.html yok; önce vite build çalışmalı.");
  let sablon = fs.readFileSync(sablonYolu, "utf8");
  if (sablon.includes(BOS_KOK)) {
    // Ön-render edilmeyen adresler (404, .php) için temiz SPA kabuğu.
    fs.writeFileSync(kabukYolu, sablon);
  } else if (fs.existsSync(kabukYolu) && fs.readFileSync(kabukYolu, "utf8").includes(BOS_KOK)) {
    // Betik ikinci kez koşuyor: index.html zaten ön-render edilmiş, temiz kabuktan devam edilir.
    sablon = fs.readFileSync(kabukYolu, "utf8");
  } else {
    throw new Error("Temiz HTML şablonu bulunamadı; önce vite build çalışmalı.");
  }

  await build({
    configFile: path.join(kok, "vite.config.ts"),
    logLevel: "warn",
    // Node ESM'de adlı dışa aktarımı olmayan CommonJS paketleri SSR paketine gömülür.
    ssr: { noExternal: ["react-helmet-async"] },
    build: {
      ssr: "src/entry-server.tsx",
      outDir: ssrCikti,
      emptyOutDir: true,
      // public/ (~1 GB görsel) SSR çıktısına kopyalanmaz; yalnız dist/public'te gerekir.
      copyPublicDir: false,
      rollupOptions: { output: { format: "esm", entryFileNames: "entry-server.mjs" } },
    },
  });

  const { render, kanonikAdres } = await import(pathToFileURL(path.join(ssrCikti, "entry-server.mjs")).href);

  menuRotalariniDenetle();
  const rotalar = rotalariOku();
  const hatalar = [];
  const kayitlar = []; // site haritası için: her rotanın canonical'ı ve noindex durumu
  for (const rota of rotalar) {
    try {
      const { html, helmet } = render(rota);
      const bas = helmet
        ? [helmet.title, helmet.meta, helmet.link, helmet.script].map((p) => p.toString()).join("\n    ")
        : "";
      let sayfa = sablon;
      if (helmet && helmet.title.toString().includes("</title>")) {
        sayfa = sayfa.replace(/<title>[\s\S]*?<\/title>\s*/i, () => "");
      }
      if (helmet && /name="description"/.test(helmet.meta.toString())) {
        sayfa = sayfa.replace(/<meta\s+name="description"[^>]*>\s*/i, () => "");
      }
      sayfa = sayfa
        // Değiştirme metni FONKSİYONLA verilir: düz metinde `$$`, `$&`, `$'` özel kalıptır ve
        // JSON-LD içindeki "priceRange":"$$" gibi değerleri bozar.
        .replace("</head>", () => `    ${bas}\n  </head>`)
        // data-rota: istemci (main.tsx) yalnız adres bu rotaysa hydrate eder, değilse yeniden çizer.
        .replace(BOS_KOK, () => `<div id="root" data-rota="${rota}">${html}</div>`);
      const hedef = hedefDosya(rota);
      fs.mkdirSync(path.dirname(hedef), { recursive: true });
      fs.writeFileSync(hedef, sayfa);
      const linkler = helmet ? helmet.link.toString() : "";
      const kanonik = /<link[^>]*rel="canonical"[^>]*href="([^"]+)"/.exec(linkler);
      kayitlar.push({
        rota,
        kanonik: kanonik ? kanonik[1] : "",
        noindex: helmet ? /name="robots"[^>]*noindex/i.test(helmet.meta.toString()) : false,
      });
    } catch (e) {
      hatalar.push(`${rota}: ${e && e.message ? e.message : e}`);
    }
  }

  // 404: tanımsız bir adres çizilir ve dist/public/404.html'e yazılır (site haritasına girmez).
  // vercel.json yakalama rotası bu dosyayı 404 durum koduyla döner; ilk açılışta sekme başlığı doğru gelir.
  // data-rota boş: istemci adres eşleşmediği için hydrate etmez, aynı içeriği yeniden çizer.
  try {
    const { html, helmet } = render("/__mika-404__");
    const bas = [helmet.title, helmet.meta, helmet.link, helmet.script]
      .map((p) => p.toString())
      .join("\n    ")
      .replace(/<link[^>]*rel="canonical"[^>]*>\s*/gi, () => "")
      .replace(/<meta[^>]*property="og:url"[^>]*>\s*/gi, () => "");
    const sayfa = sablon
      .replace(/<title>[\s\S]*?<\/title>\s*/i, () => "")
      .replace(/<meta\s+name="description"[^>]*>\s*/i, () => "")
      .replace("</head>", () => `    ${bas}\n  </head>`)
      .replace(BOS_KOK, () => `<div id="root" data-rota="">${html}</div>`);
    if (!sayfa.includes("Sayfa bulunamadı")) throw new Error("404 içeriği çizilmedi");
    fs.writeFileSync(path.join(istemciCikti, "404.html"), sayfa);
  } catch (e) {
    hatalar.push(`404: ${e && e.message ? e.message : e}`);
  }

  console.log(`[on-render] ${rotalar.length - hatalar.length}/${rotalar.length} rota üretildi.`);
  if (hatalar.length) {
    console.error("[on-render] Hatalı rotalar:\n  " + hatalar.join("\n  "));
    process.exit(1);
  }
  siteHaritasiYaz(kayitlar, kanonikAdres);
}

main().catch((e) => {
  console.error("[on-render] Hata:", e);
  process.exit(1);
});
