import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";

const kok = document.getElementById("root")!;

// Ön-render edilmiş sayfada #root dolu gelir: yükleme ekranı gösterilmez, içerik yerinde kalır.
// Boş SPA kabuğunda (404, .php) eski davranış sürer.
const onRenderli = kok.hasChildNodes();

// Ön-render Türkçe üretilir. Kayıtlı dil Türkçe değilse ilk çizim farklı olacağından
// hydrate edilmez; içerik doğrudan seçili dille yeniden çizilir (yükleyicisiz).
let kayitliDil: string | null = null;
try {
  kayitliDil = localStorage.getItem("language");
} catch {
  kayitliDil = null;
}

const uygulama = (
  <HelmetProvider>
    <App onRenderli={onRenderli} />
  </HelmetProvider>
);

if (onRenderli && (kayitliDil === null || kayitliDil === "tr")) {
  hydrateRoot(kok, uygulama);
} else {
  createRoot(kok).render(uygulama);
}
