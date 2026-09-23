// Yasal işletme bilgisi şeridi — tüm sayfalarda görünür.
// Meta işletme doğrulaması + PayTR canlı mod: yasal ad, vergi no ve adres sitede birebir yazmalı (Deniz 23.09).
export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-4 text-center text-xs leading-relaxed text-slate-600">
        <span className="font-semibold text-slate-800">Mika Teknoloji — Ercan Toksoy</span>
        <span className="mx-2 text-slate-300">·</span>
        Şişli V.D. 31660980104
        <span className="mx-2 text-slate-300">·</span>
        Perpa Ticaret Merkezi A Blok 4-5. Kat No:0158, Şişli / İstanbul
        <span className="mx-2 text-slate-300">·</span>
        <a href="mailto:info@mikateknoloji.com" className="hover:text-slate-900">info@mikateknoloji.com</a>
      </div>
    </footer>
  );
}
