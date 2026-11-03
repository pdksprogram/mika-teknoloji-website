import { Link } from "wouter";
import { DEMO_TELEFON, DEMO_TELEFON_GORUNEN } from "@/components/PdksIcerik";

// Yasal işletme bilgisi şeridi — tüm sayfalarda görünür.
// Meta işletme doğrulaması + PayTR canlı mod: yasal ad ve adres (TC kimlik = VKN sitede GOSTERILMEZ, Deniz 23.09) sitede birebir yazmalı (Deniz 23.09).
const YASAL = [
  { ad: "KVKK Aydınlatma", yol: "/kvkk" },
  { ad: "Gizlilik", yol: "/mobil-gizlilik-sozlesmesi.php" },
  { ad: "Hizmet Şartları", yol: "/hizmet-sartlari" },
  { ad: "Veri Silme", yol: "/veri-silme" },
];

// Ürün bağlantıları — her sayfadan ana ürün sayfalarına taranabilir iç bağlantı.
const URUNLER = [
  { ad: "PDKS Programı", yol: "/pdks-programi" },
  { ad: "QR PDKS", yol: "/qr-pdks" },
  { ad: "Personel Takip", yol: "/urunler/personel-takip" },
  { ad: "Turnike", yol: "/urunler/turnike" },
  { ad: "Bariyer", yol: "/urunler/bariyer-sistemleri" },
  { ad: "Yüz Tanıma", yol: "/urunler/yuz-tanima" },
  { ad: "Geçiş Kontrol", yol: "/urunler/gecis-kontrol" },
  { ad: "Puantaj", yol: "/puantaj-programi" },
  { ad: "Vardiya", yol: "/vardiya-takip-programi" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-4 text-center text-xs leading-relaxed text-slate-600">
        <nav aria-label="Ürünler" className="mb-2 border-b border-slate-200 pb-2">
          <span className="font-semibold text-slate-800">Ürünler</span>
          {URUNLER.map((u) => (
            <span key={u.yol}>
              <span className="mx-2 text-slate-300">·</span>
              <Link href={u.yol} className="hover:text-slate-900 hover:underline underline-offset-2">{u.ad}</Link>
            </span>
          ))}
        </nav>
        <div>
          <span className="font-semibold text-slate-800">Mika Teknoloji — Ercan Toksoy</span>
          <span className="mx-2 text-slate-300">·</span>
          Perpa Ticaret Merkezi A Blok 4-5. Kat No:0158, Şişli / İstanbul
          <span className="mx-2 text-slate-300">·</span>
          <a href={`tel:${DEMO_TELEFON}`} className="hover:text-slate-900">{DEMO_TELEFON_GORUNEN}</a>
          <span className="mx-2 text-slate-300">·</span>
          <a href="mailto:info@mikateknoloji.com" className="hover:text-slate-900">info@mikateknoloji.com</a>
        </div>
        <nav aria-label="Yasal metinler" className="mt-2">
          {YASAL.map((y, i) => (
            <span key={y.yol}>
              {i > 0 && <span className="mx-2 text-slate-300">·</span>}
              <Link href={y.yol} className="hover:text-slate-900 hover:underline underline-offset-2">{y.ad}</Link>
            </span>
          ))}
        </nav>
      </div>
    </footer>
  );
}
