// Derleme anında ön-render (SSG) girişi: scripts/prerender.mjs bu dosyayı
// Vite SSR derlemesiyle paketler ve her statik rota için HTML üretir.
// Tarayıcı paketine girmez; istemci girişi main.tsx'tir.
import { renderToString } from "react-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { Router } from "wouter";
import App from "./App";

// Site haritası üretimi asıl adresi istemciyle AYNI fonksiyonla kurar (tek kaynak).
export { kanonikAdres } from "./seo/SEO";

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <Router ssrPath={url}>
        <App onRenderli />
      </Router>
    </HelmetProvider>,
  );
  return { html, helmet: helmetContext.helmet };
}
