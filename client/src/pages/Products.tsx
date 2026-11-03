import { Link } from "wouter";
import SEO from "@/seo/SEO";
import { Button } from "@/components/ui/button";
import { Kirinti, kirintiJsonLd, type KirintiMaddesi } from "@/components/PdksIcerik";
import CtaDugmeleri from "@/components/CtaDugmeleri";

const KIRINTI: KirintiMaddesi[] = [
  { ad: "Ana Sayfa", yol: "/" },
  { ad: "Ürünler", yol: "/urunler" },
];

type Kalem = { ad: string; yol: string; dis?: boolean };

// Yalnız sitede tanımlı adresler (lib/rotalar.ts); dış bağlantı ayrıca işaretlenir.
const KATEGORILER: { baslik: string; gorsel: string; gorselAlt: string; kalemler: Kalem[] }[] = [
  {
    baslik: "Çözümler",
    gorsel: "/images/slayt/turnike-t345.jpg",
    gorselAlt: "Turnike ile geçiş kontrol",
    kalemler: [
      { ad: "PDKS (Personel Devam Kontrol)", yol: "/pdks-programi" },
      { ad: "Geçiş Kontrol Sistemleri", yol: "/access-control" },
      { ad: "Bekçi Tur Kontrol Sistemi", yol: "/qr-bekci" },
      { ad: "QR Kod Geçiş Sistemi", yol: "/qr-gecis" },
      { ad: "Otopark Otomasyonu", yol: "/otopark-otomasyon" },
      { ad: "Mağaza Personel Takibi", yol: "/urunler/magaza-personel-takip" },
    ],
  },
  {
    baslik: "Donanımlar",
    gorsel: "/images/urun/proper-yuz-tanima.jpg",
    gorselAlt: "Yüz tanıma PDKS cihazı",
    kalemler: [
      { ad: "Yüz Tanıma Cihazları", yol: "/urunler/yuz-tanima" },
      { ad: "Parmak İzi Okuyucular", yol: "/urunler/parmak-izi-tanima" },
      { ad: "Kartlı Geçiş Sistemi (RFID)", yol: "/kartli-gecis-sistemi" },
      { ad: "Bekçi Tur Kontrol Cihazı", yol: "/urunler/bekci-tur-kontrol" },
      { ad: "Turnike Sistemleri", yol: "/turnike-sistemleri" },
      { ad: "Bariyer Sistemleri", yol: "/urunler/bariyer-sistemleri" },
    ],
  },
  {
    baslik: "Yazılımlar",
    gorsel: "/images/slayt/qr-pdks-mobil.jpg",
    gorselAlt: "QR PDKS mobil uygulaması",
    kalemler: [
      { ad: "Personel Takip Programı", yol: "/urunler/personel-takip" },
      { ad: "QR PDKS Uygulaması", yol: "/urunler/qr-pdks" },
      { ad: "Personel Devam Kontrol Sistemi", yol: "/personel-devam-kontrol-sistemi" },
      { ad: "Web PDKS", yol: "https://pdkspersoneltakip.com/", dis: true },
    ],
  },
  {
    baslik: "Tüm Programlar",
    gorsel: "/images/slayt/bulut-pdks-paneli.jpg",
    gorselAlt: "Bulut PDKS paneli",
    kalemler: [
      { ad: "Puantaj Programı", yol: "/puantaj-programi" },
      { ad: "Vardiya Takip Programı", yol: "/vardiya-takip-programi" },
      { ad: "Fazla Mesai Hesaplama", yol: "/fazla-mesai-hesaplama" },
      { ad: "QR ile Personel Giriş-Çıkış", yol: "/qr-pdks" },
    ],
  },
];

const POPULER: Kalem[] = [
  { ad: "Kartlı PDKS", yol: "/kartli-gecis-sistemi" },
  { ad: "Personel Takip Programı", yol: "/urunler/personel-takip" },
  { ad: "Bel Tipi Turnike", yol: "/urunler/bel-tipi-turnike" },
  { ad: "Boy Tipi Turnike", yol: "/urunler/boy-tipi-turnike" },
  { ad: "Hızlı Geçiş Turnike", yol: "/urunler/hizli-gecis-turnike" },
  { ad: "Engelli Turnikesi", yol: "/urunler/engelli-turnike" },
  { ad: "Geçiş Kontrol Paneli", yol: "/urunler/gecis-kontrol" },
  { ad: "PDKS Programı", yol: "/pdks-programi" },
];

const BAGLANTI = "text-slate-700 hover:text-primary transition-colors text-sm leading-relaxed block py-1";

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Ürünler | Turnike, Bariyer, PDKS Cihazları | Mika Teknoloji"
        description="Turnike, bariyer, yüz tanıma ve parmak izi PDKS cihazları, kartlı ve QR geçiş ürünleri: Mika Teknoloji ürün kataloğu."
        jsonLd={kirintiJsonLd(KIRINTI)}
      />
      <div className="bg-white">
        <Kirinti maddeler={KIRINTI} icSinif="pb-4" />
      </div>

      <section className="bg-slate-900 border-b-4 border-primary text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Ürünler</h1>
          <p className="text-slate-300 max-w-2xl">
            PDKS yazılımı, geçiş kontrol cihazları, turnike ve bariyer sistemleri.
          </p>
          <CtaDugmeleri tur="donanim" koyu sinif="mt-6" />
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KATEGORILER.map((k) => (
            <div key={k.baslik} className="bg-white border border-slate-200 rounded-lg">
              <h2 className="text-lg font-bold text-slate-800 p-4 bg-slate-100 border-b border-slate-200 rounded-t-lg">
                {k.baslik}
              </h2>
              <div className="h-32 bg-white border-b border-slate-200 flex items-center justify-center p-3">
                <img src={k.gorsel} alt={k.gorselAlt} className="max-h-full max-w-full object-contain" loading="lazy" width="200" height="104" />
              </div>
              <ul className="p-4 space-y-2">
                {k.kalemler.map((m) => (
                  <li key={m.yol}>
                    {m.dis ? (
                      <a href={m.yol} target="_blank" rel="noopener noreferrer" className={BAGLANTI}>{m.ad}</a>
                    ) : (
                      <Link href={m.yol} className={BAGLANTI}>{m.ad}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg border border-slate-200">
          <h2 className="text-sm font-semibold text-slate-800 mb-3">Popüler Ürünler</h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {POPULER.map((m) => (
              <li key={m.yol}>
                <Link href={m.yol} className="text-sm text-slate-600 hover:text-primary transition-colors">{m.ad}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 bg-slate-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">İhtiyacınıza Uygun Çözümü Birlikte Bulalım</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Uzman ekibimizle size uygun ürünü seçmenizde yardımcı oluyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" data-testid="products-contact-button">
              <Link href="/iletisim">İletişime Geçin</Link>
            </Button>
            <Button asChild size="lg" variant="outlineLight" data-testid="products-catalog-button">
              <Link href="/iletisim">Katalog İsteyin</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
