import { Coffee, MapPin, QrCode, RefreshCw, ScanFace, ShieldCheck } from "lucide-react";
import SEO, { kanonikAdres } from "@/seo/SEO";
import {
  Adimlar,
  DemoTalebi,
  IlgiliSayfalar,
  Kirinti,
  KonuGiris,
  OzellikIzgarasi,
  SssBolumu,
  VideoBolumu,
  kirintiJsonLd,
  sssJsonLd,
} from "@/components/PdksIcerik";
import type { KirintiMaddesi, OzellikMaddesi, SssMaddesi } from "@/components/PdksIcerik";

const YOL = "/qr-pdks";

const KIRINTI: KirintiMaddesi[] = [
  { ad: "Ana Sayfa", yol: "/" },
  { ad: "PDKS Programı", yol: "/pdks-programi" },
  { ad: "QR Kodlu Personel Takibi", yol: YOL },
];

const OZELLIKLER: OzellikMaddesi[] = [
  {
    ikon: QrCode,
    baslik: "Telefonla QR Okutma",
    metin: "Personel iş yerindeki QR kodu Esoft Pdks mobil uygulamasıyla okutur; kayıt giriş ya da çıkış olarak düşer.",
  },
  {
    ikon: RefreshCw,
    baslik: "Uygulamada QR Üretme",
    metin: "Konum doğrulandıktan sonra uygulamanın QR Üret ekranı bir kod gösterir; iş yerindeki QR okuyucu bu kodu okur. Kod ekranda 30 saniye görünür, ardından kapanır.",
  },
  {
    ikon: MapPin,
    baslik: "Konum Bilgisi",
    metin: "Mobil uygulamadan atılan kayda konum bilgisi eklenir.",
  },
  {
    ikon: ShieldCheck,
    baslik: "Konum Gizleme",
    metin: "KVKK gereği istenirse konum raporlarda gösterilmez; bu bir ayarla açılıp kapatılır.",
  },
  {
    ikon: Coffee,
    baslik: "Mola ve Görev Çıkışı",
    metin: "Kahve, yemek molası ve görev çıkışı ayrı türlerde kaydedilir.",
  },
  {
    ikon: ScanFace,
    baslik: "Yüz Doğrulama Seçeneği",
    metin: "Cihaz ayarında açılırsa QR ya da barkod okutmanın ardından yüz doğrulaması istenir.",
  },
];

const ADIMLAR = [
  { baslik: "QR Kod Yerleştirilir", metin: "İş yerinin giriş noktasına QR kod ya da QR okuyucu konur." },
  { baslik: "Personel Okutur", metin: "Personel mobil uygulamayla QR kodu okutur ya da uygulamadaki kodu okuyucuya gösterir." },
  { baslik: "Kayıt Düşer", metin: "Giriş-çıkış saati programa kaydedilir." },
  { baslik: "Puantaja Yansır", metin: "Kayıtlar vardiya planıyla değerlendirilir, aylık puantaj hesaplanır." },
];

const SSS: SssMaddesi[] = [
  {
    soru: "QR kodlu personel takibi nasıl çalışır?",
    cevap: "İki yol vardır. Personel iş yerindeki QR kodu Esoft Pdks mobil uygulamasıyla okutur ya da uygulamanın QR Üret ekranındaki kodu iş yerindeki QR okuyucuya gösterir. Her iki yolda da giriş-çıkış saati programa kaydedilir.",
  },
  {
    soru: "QR ile giriş-çıkışta konum kaydedilir mi?",
    cevap: "Mobil uygulamadan atılan kayda konum bilgisi eklenir. KVKK gereği istenirse Konum Gizle ayarıyla konum raporlarda gösterilmez.",
  },
  {
    soru: "Uygulamadaki QR kod ekranda ne kadar süre kalır?",
    cevap: "QR Üret ekranı önce konumu doğrular, ardından kodu gösterir. Kod ekranda 30 saniye görünür, ardından kapanır; gerekirse Yeni QR Üret düğmesiyle yenisi üretilir.",
  },
  {
    soru: "Molalar QR ile takip edilebilir mi?",
    cevap: "Evet. Mobil uygulamada kahve, yemek molası ve görev çıkışı ayrı türlerde kaydedilir.",
  },
  {
    soru: "QR kayıtları puantaja nasıl yansır?",
    cevap: "QR ile atılan kayıtlar diğer cihazlardan gelen kayıtlar gibi vardiya planına göre değerlendirilir ve aylık puantajda hesaplanır.",
  },
];

export default function QRPersonelTakipPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="QR Kodlu Personel Takibi | Telefonla Giriş-Çıkış - Mika Teknoloji"
        description="Personel iş yerindeki QR kodu mobil uygulamayla okutur ya da uygulamadaki kodu okuyucuya gösterir. Konum bilgisi, mola kaydı ve puantaja aktarım."
        canonical={kanonikAdres(YOL)}
        jsonLd={[sssJsonLd(SSS), kirintiJsonLd(KIRINTI)]}
      />
      <Kirinti maddeler={KIRINTI} />
      <KonuGiris
        ust="PDKS · QR Kod"
        baslik="QR Kodlu Personel Takibi"
        giris="Personel giriş-çıkışını cep telefonuyla QR kod okutarak yapar. Kayıtlar Mika PDKS'e düşer, vardiya planına göre değerlendirilir ve puantaja yansır."
      />
      <OzellikIzgarasi
        baslik="QR ile Takipte Neler Var?"
        alt="Giriş-çıkış personelin cep telefonundaki mobil uygulamayla yapılır."
        maddeler={OZELLIKLER}
      />
      <Adimlar baslik="QR ile Giriş-Çıkış Nasıl Yapılır?" maddeler={ADIMLAR} />
      <VideoBolumu baslik="PDKS Tanıtım Videosu" videoIdleri={["pdks-genel-anlatim"]} />
      <SssBolumu maddeler={SSS} />
      <IlgiliSayfalar mevcutYol={YOL} ekler={[{ ad: "QR Kod PDKS Ürünü", yol: "/urunler/qr-pdks" }]} />
      <DemoTalebi />
    </div>
  );
}
