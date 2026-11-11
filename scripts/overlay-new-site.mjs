import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const kok = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const kaynak = path.join(kok, "new-site-static");
const hedef = path.join(kok, "dist", "public");

if (!fs.existsSync(path.join(kaynak, "index.html"))) {
  throw new Error("new-site-static/index.html bulunamadı");
}
if (!fs.existsSync(path.join(hedef, "plaka", "video", "soru-aktivasyon-nasil-yapilir.mp4"))) {
  throw new Error("PlateVision yardım videoları Vite çıktısında yok");
}
if (!fs.existsSync(path.join(hedef, "plaka", "surum", "surum.json"))) {
  throw new Error("PlateVision sürüm manifesti Vite çıktısında yok");
}
if (!fs.existsSync(path.join(hedef, "kvkk", "index.html"))) {
  throw new Error("KVKK ön-render çıktısı yok");
}

fs.cpSync(kaynak, hedef, { recursive: true, force: true });

// 8106 görünür önizlemesinde sayfalar data-taslak adreslerine geçer. Üretimde kanonik
// URL'ler kullanılır; bu takma dosyalar yerel kullanıcı akışını da eksiksiz tutar.
const taslakTakmaAdlari = {
  "anasayfa.html": "index.html",
  "bekci.html": "qr-bekci.html",
  "bekci_en.html": "en/guard-tour.html",
  "en_anasayfa.html": "en.html",
  "en_hakkimizda.html": "en/about.html",
  "en_iletisim.html": "en/contact.html",
  "en_referanslar.html": "en/references.html",
  "plaka.html": "plaka-okuma.html",
  "plaka_en.html": "en/anpr.html",
  "taslak.html": "pdks-programi.html",
  "taslak_en.html": "en/time-attendance.html",
  "turnike.html": "urunler/turnike.html",
  "turnike_en.html": "en/turnstiles.html",
};
for (const [takma, asil] of Object.entries(taslakTakmaAdlari)) {
  fs.copyFileSync(path.join(hedef, asil), path.join(hedef, takma));
}

const turkceEski = '<div><strong>Yasal</strong><a href="https://mikateknoloji.com/kvkk">KVKK metni</a><a href="https://mikateknoloji.com/mobil-gizlilik-sozlesmesi.php">Gizlilik</a></div>';
const turkceYeni = '<div><strong>Destek ve Yasal</strong><a href="/videolar">Eğitim Videoları</a><a href="/kvkk">KVKK metni</a><a href="/mobil-gizlilik-sozlesmesi.php">Gizlilik</a><a href="/hizmet-sartlari">Hizmet Şartları</a><a href="/veri-silme">Veri Silme</a></div>';
const ingilizceKalıp = /<div><strong>Legal<\/strong><a href="https:\/\/mikateknoloji\.com\/kvkk"(?: hreflang="tr")?>[^<]+<\/a><a href="https:\/\/mikateknoloji\.com\/mobil-gizlilik-sozlesmesi\.php"(?: hreflang="tr")?>[^<]+<\/a><\/div>/g;
const ingilizceYeni = '<div><strong>Support &amp; Legal</strong><a href="/videolar">Training Videos</a><a href="/en/student-data-notice">Data Protection</a><a href="/en/privacy">Privacy</a><a href="/en/terms">Terms</a><a href="/en/data-deletion">Data Deletion</a></div>';
const disServisBaslik = `
<meta name="facebook-domain-verification" content="dwux5052kpdh354kzulbtorrtnxezc">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-P2PBHE77CY"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-P2PBHE77CY');</script>`;
const whatsapp = "https://wa.me/905467122296";

let htmlSayisi = 0;
let footerSayisi = 0;
for (const dosya of fs.readdirSync(hedef, { recursive: true })) {
  if (typeof dosya !== "string" || !dosya.endsWith(".html")) continue;
  const tam = path.join(hedef, dosya);
  let icerik = fs.readFileSync(tam, "utf8");
  const onceki = icerik;
  icerik = icerik.replaceAll(turkceEski, turkceYeni).replace(ingilizceKalıp, ingilizceYeni);
  if (!icerik.includes("facebook-domain-verification")) {
    icerik = icerik.replace("</head>", `${disServisBaslik}\n</head>`);
  }
  if (!icerik.includes("G-P2PBHE77CY")) {
    icerik = icerik.replace("</head>", `${disServisBaslik}\n</head>`);
  }
  if (dosya.replaceAll("\\", "/") === "iletisim.html" && !icerik.includes(whatsapp)) {
    icerik = icerik.replace(
      '<a class="btn ikincil" href="mailto:info@mikateknoloji.com">info@mikateknoloji.com</a>',
      `<a class="btn ikincil" href="${whatsapp}" target="_blank" rel="noopener">WhatsApp</a><a class="btn ikincil" href="mailto:info@mikateknoloji.com">info@mikateknoloji.com</a>`,
    );
  }
  if (["en/contact.html", "en_iletisim.html"].includes(dosya.replaceAll("\\", "/")) && !icerik.includes(whatsapp)) {
    icerik = icerik.replace(
      '<a class="btn ikincil" href="mailto:info@mikateknoloji.com">info@mikateknoloji.com</a>',
      `<a class="btn ikincil" href="${whatsapp}" target="_blank" rel="noopener">WhatsApp</a><a class="btn ikincil" href="mailto:info@mikateknoloji.com">info@mikateknoloji.com</a>`,
    );
  }
  if (icerik !== onceki) {
    fs.writeFileSync(tam, icerik);
    footerSayisi++;
  }
  htmlSayisi++;
}

for (const gerekli of [
  "index.html",
  "plaka-okuma.html",
  "videolar/index.html",
  "kvkk/index.html",
  "hizmet-sartlari/index.html",
  "veri-silme/index.html",
  "en/privacy/index.html",
  "en/terms/index.html",
  "en/data-deletion/index.html",
  "plaka/surum/surum.json",
  ...Object.keys(taslakTakmaAdlari),
]) {
  if (!fs.existsSync(path.join(hedef, gerekli))) throw new Error(`Yayın çıktısında eksik: ${gerekli}`);
}

console.log(`[yeni-site] Yeni arayüz bindirildi; ${htmlSayisi} HTML tarandı, ${footerSayisi} footer güncellendi.`);
