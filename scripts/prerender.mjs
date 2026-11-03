// Derleme sonrası ön-render (SSG): her statik rotanın HTML'ini üretir.
// Sıra: `vite build` (istemci, dist/public) -> bu betik -> dist/public/<rota>/index.html.
// Yöntem Vite'ın resmi SSR/ön-render desenidir (ek paket yok): entry-server.tsx SSR olarak
// paketlenir, react-dom/server ile render edilir, react-helmet-async başlık/meta'yı verir.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "vite";

process.env.NODE_ENV = "production";

const kok = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const istemciCikti = path.join(kok, "dist", "public");
const ssrCikti = path.join(kok, "dist", "ssr");

// Rotalar App.tsx'teki <Route path="..."> satırlarından okunur; yeni rota eklenince kendiliğinden girer.
// Parametreli rotalar ve dosya uzantılı adresler (ör. .php) ön-render edilmez, SPA kabuğuyla kalır.
function rotalariOku() {
  const kaynak = fs.readFileSync(path.join(kok, "client", "src", "App.tsx"), "utf8");
  const rotalar = new Set();
  for (const m of kaynak.matchAll(/<Route\s+path="([^"]+)"/g)) {
    const r = m[1];
    if (r.includes(":") || r.includes("*") || /\.[a-z0-9]+$/i.test(r)) continue;
    rotalar.add(r);
  }
  return [...rotalar];
}

function hedefDosya(rota) {
  if (rota === "/") return path.join(istemciCikti, "index.html");
  return path.join(istemciCikti, ...rota.replace(/^\/+|\/+$/g, "").split("/"), "index.html");
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
      rollupOptions: { output: { format: "esm", entryFileNames: "entry-server.mjs" } },
    },
  });

  const { render } = await import(pathToFileURL(path.join(ssrCikti, "entry-server.mjs")).href);

  const rotalar = rotalariOku();
  const hatalar = [];
  for (const rota of rotalar) {
    try {
      const { html, helmet } = render(rota);
      const bas = helmet
        ? [helmet.title, helmet.meta, helmet.link, helmet.script].map((p) => p.toString()).join("\n    ")
        : "";
      let sayfa = sablon;
      if (helmet && helmet.title.toString().includes("</title>")) {
        sayfa = sayfa.replace(/<title>[\s\S]*?<\/title>\s*/i, "");
      }
      if (helmet && /name="description"/.test(helmet.meta.toString())) {
        sayfa = sayfa.replace(/<meta\s+name="description"[^>]*>\s*/i, "");
      }
      sayfa = sayfa
        .replace("</head>", `    ${bas}\n  </head>`)
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
      const hedef = hedefDosya(rota);
      fs.mkdirSync(path.dirname(hedef), { recursive: true });
      fs.writeFileSync(hedef, sayfa);
    } catch (e) {
      hatalar.push(`${rota}: ${e && e.message ? e.message : e}`);
    }
  }

  console.log(`[on-render] ${rotalar.length - hatalar.length}/${rotalar.length} rota üretildi.`);
  if (hatalar.length) {
    console.error("[on-render] Hatalı rotalar:\n  " + hatalar.join("\n  "));
    process.exit(1);
  }
}

main().catch((e) => {
  console.error("[on-render] Hata:", e);
  process.exit(1);
});
