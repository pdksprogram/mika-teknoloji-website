import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { kayitliDiliOku } from "./hooks/useLanguage";
import "./index.css";

const kok = document.getElementById("root")!;

// Sondaki eğik çizgiler atılır ("/hakkimizda/" = "/hakkimizda"), kök "/" kalır.
function rotaNormalize(yol: string): string {
  const temiz = yol.replace(/\/+$/, "");
  return temiz === "" ? "/" : temiz;
}

// Ön-render betiği (scripts/prerender.mjs) kökün `data-rota` özniteliğine sayfanın rotasını yazar.
// İçerik yalnız bu adrese aitse ön-render sayılır (yükleme ekranı yok, içerik yerinde kalır).
// Başka adresin HTML'i gelmişse (yedek yönlendirme, bilinmeyen adres) ya da kök boşsa
// (spa.html: 404, .php) eski güvenli yol sürer: yükleme ekranı + yeniden çizim.
const onRenderRota = kok.hasChildNodes() ? kok.getAttribute("data-rota") : null;
const onRenderli =
  onRenderRota !== null && rotaNormalize(onRenderRota) === rotaNormalize(window.location.pathname);

const uygulama = (
  <HelmetProvider>
    <App onRenderli={onRenderli} />
  </HelmetProvider>
);

// Ön-render Türkçe üretilir. Kayıtlı dil Türkçe değilse ilk çizim farklı olacağından hydrate
// edilmez; içerik doğrudan seçili dille yeniden çizilir (yükleyicisiz).
// Boş ya da sözlükte olmayan kayıtlı dil Türkçe sayılır (kayitliDiliOku).
// Ana sayfanın dili kayıtlı dilden değil adresten gelir (/ İngilizce, /tr Türkçe): her zaman hydrate edilir.
const anaSayfa = ["/", "/tr"].includes(rotaNormalize(window.location.pathname));
if (onRenderli && (anaSayfa || kayitliDiliOku() === "tr")) {
  hydrateRoot(kok, uygulama);
} else {
  createRoot(kok).render(uygulama);
}
