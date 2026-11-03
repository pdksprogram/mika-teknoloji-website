import { CalendarCheck, Clock, Coffee, FileSpreadsheet, Lock, Smartphone, Wallet, CalendarDays } from "lucide-react";
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

const YOL = "/puantaj-programi";

const KIRINTI: KirintiMaddesi[] = [
  { ad: "Ana Sayfa", yol: "/" },
  { ad: "PDKS Programı", yol: "/pdks-programi" },
  { ad: "Puantaj Programı", yol: YOL },
];

const OZELLIKLER: OzellikMaddesi[] = [
  {
    ikon: CalendarCheck,
    baslik: "Aylık Puantaj Tablosu",
    metin: "Her personel için normal çalışma, hafta tatili, fazla mesai, ücretli ve ücretsiz izin, yıllık izin ve devamsızlık günleri aynı tabloda toplanır.",
  },
  {
    ikon: Clock,
    baslik: "Fazla Mesai Kuralı",
    metin: "Fazla mesai, çalışma grubunda seçtiğiniz kurala göre ayrılır; haftalık 45 saat kuralı açıksa 45 saati aşan süre fazla mesai sayılır ve ayrı sütuna yazılır.",
  },
  {
    ikon: Coffee,
    baslik: "Mola Düşümü",
    metin: "Mola süresi personelin vardiya tanımına göre çalışma süresinden düşülür.",
  },
  {
    ikon: Lock,
    baslik: "Puantaj Kilidi",
    metin: "Kontrol edilen ay kilitlenir; kilitli ay yeniden hesaplamada değişmez.",
  },
  {
    ikon: Wallet,
    baslik: "Avans, Kesinti ve Kazanç",
    metin: "Avans, taksitli kesinti ve ek kazançlar tanımlanır, aylık puantajda personelin satırına işlenir.",
  },
  {
    ikon: CalendarDays,
    baslik: "Resmi Tatiller ve İzinler",
    metin: "Resmi tatiller programda önceden planlanır; izin tanımları yapılır, onaylanan izin talepleri puantaja yansır.",
  },
  {
    ikon: FileSpreadsheet,
    baslik: "Excel Çıktısı",
    metin: "Puantaj ve raporlar Excel (.xlsx) dosyası olarak indirilir.",
  },
  {
    ikon: Smartphone,
    baslik: "Mobil Puantaj Kartı",
    metin: "Personel kendi aylık puantajını Esoft Pdks mobil uygulamasından görür.",
  },
];

const ADIMLAR = [
  { baslik: "Kayıt Aktar", metin: "Kart, parmak izi, yüz tanıma ve QR cihazlarındaki giriş-çıkış kayıtları programa aktarılır." },
  { baslik: "Hareket Düzenle", metin: "Kayıtlar vardiya planıyla eşleşir; eksik ya da hatalı hareketler düzeltilir." },
  { baslik: "Aylık Puantaj", metin: "Ay sonunda puantaj hesaplanır: normal çalışma, fazla mesai, izin ve devamsızlık ayrılır." },
  { baslik: "Kilit ve Çıktı", metin: "Kontrol edilen ay kilitlenir, puantaj Excel olarak bordroya hazırlanır." },
];

const SSS: SssMaddesi[] = [
  {
    soru: "Puantaj programı ne işe yarar?",
    cevap: "Personelin giriş-çıkış kayıtlarından aylık çalışma özetini çıkarır: kaç gün çalışıldığı, hafta tatilleri, fazla mesai, izinler ve devamsızlık tek tabloda görünür. Bu tablo bordro hazırlığının temelidir.",
  },
  {
    soru: "Fazla mesai nasıl hesaplanır?",
    cevap: "Fazla mesai, çalışma grubunda seçtiğiniz kurala göre ayrılır. Haftalık 45 saat kuralı açıksa 45 saati aşan süre fazla mesai sayılır; fazla mesai puantajda kendi sütununda gösterilir.",
  },
  {
    soru: "Mola süresi çalışma süresinden düşülür mü?",
    cevap: "Evet. Mola süresi personelin bağlı olduğu vardiya tanımında belirlenir ve hesapta çalışma süresinden düşülür.",
  },
  {
    soru: "Hesaplanmış bir ay sonradan değişebilir mi?",
    cevap: "Ay kilitlenmediği sürece hareketler düzeltilip puantaj yeniden hesaplanabilir. Kilitlenen ay yeniden hesaplamada değişmez.",
  },
  {
    soru: "Puantaj Excel'e aktarılabilir mi?",
    cevap: "Evet. Puantaj ve raporlar Excel (.xlsx) dosyası olarak indirilir.",
  },
];

export default function PuantajProgramiPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Puantaj Programı – Aylık Puantaj ve Fazla Mesai | Mika"
        description="Giriş-çıkış kayıtlarından aylık puantaj: normal çalışma, hafta tatili, fazla mesai, izin ve devamsızlık tek tabloda. Ay kilidi ve Excel (.xlsx) çıktısı."
        canonical={kanonikAdres(YOL)}
        jsonLd={[sssJsonLd(SSS), kirintiJsonLd(KIRINTI)]}
      />
      <Kirinti maddeler={KIRINTI} />
      <KonuGiris
        ust="PDKS · Puantaj"
        baslik="Puantaj Programı"
        giris="Mika PDKS, personelin giriş-çıkış kayıtlarından aylık puantajı hazırlar. Fazla mesai, izin ve devamsızlık ayrı ayrı hesaplanır; kontrol edilen ay kilitlenir."
      />
      <OzellikIzgarasi
        baslik="Puantajda Neler Hesaplanır?"
        alt="Aylık puantaj, giriş-çıkış kayıtları ile vardiya ve izin tanımlarından oluşur."
        maddeler={OZELLIKLER}
      />
      <Adimlar baslik="Puantaj Nasıl Hazırlanır?" maddeler={ADIMLAR} />
      <VideoBolumu
        baslik="Puantaj Eğitim Videoları"
        videoIdleri={["pdks-aylik-puantaj-olusturma", "pdks-aylik-puantaj-raporlar"]}
      />
      <SssBolumu maddeler={SSS} />
      <IlgiliSayfalar mevcutYol={YOL} ekler={[{ ad: "Puantaj Nasıl Tutulur?", yol: "/blog/puantaj-nasil-tutulur" }]} />
      <DemoTalebi />
    </div>
  );
}
