import { CalendarRange, CheckCircle, Coffee, FileText, Layers, Smartphone, Users, Calculator } from "lucide-react";
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

const YOL = "/vardiya-takip-programi";

const KIRINTI: KirintiMaddesi[] = [
  { ad: "Ana Sayfa", yol: "/" },
  { ad: "PDKS Programı", yol: "/pdks-programi" },
  { ad: "Vardiya Takip Programı", yol: YOL },
];

const OZELLIKLER: OzellikMaddesi[] = [
  {
    ikon: CalendarRange,
    baslik: "Vardiya Planlama",
    metin: "Personelin hangi gün hangi vardiyada çalışacağı plan ekranında belirlenir.",
  },
  {
    ikon: Layers,
    baslik: "Çalışma Planları",
    metin: "Vardiya saatleri ve mola süreleri çalışma planı olarak tanımlanır, personel gruplarına atanır.",
  },
  {
    ikon: Users,
    baslik: "Haftalık Plan Tablosu",
    metin: "Plancı, örneğin mağaza müdürü, ekibinin haftalık vardiyasını tek tabloda hazırlar.",
  },
  {
    ikon: CheckCircle,
    baslik: "Plan Onayı",
    metin: "Onaycı planı onaylar, reddeder ya da düzeltme ister. Onaylanan plan istenirse kilitlenir.",
  },
  {
    ikon: Smartphone,
    baslik: "Mobilde Vardiya",
    metin: "Personel kendi vardiyasını Esoft Pdks mobil uygulamasından görür.",
  },
  {
    ikon: FileText,
    baslik: "Vardiya Planı PDF",
    metin: "Hazırlanan vardiya planı PDF olarak alınır.",
  },
  {
    ikon: Coffee,
    baslik: "Vardiyaya Bağlı Mola",
    metin: "Mola süresi vardiya tanımından gelir ve çalışma süresinden düşülür.",
  },
  {
    ikon: Calculator,
    baslik: "Puantaja Aktarım",
    metin: "Giriş-çıkışlar vardiya planına göre değerlendirilir ve aylık puantaja yansır.",
  },
];

const ADIMLAR = [
  { baslik: "Plan Hazırlanır", metin: "Plancı haftalık vardiyayı personel bazında hazırlar." },
  { baslik: "Personel Görür", metin: "Plan girildiği andan itibaren personel vardiyasını Esoft Pdks mobil uygulamasında görür; onay ya da kilit beklenmez." },
  { baslik: "Onaya Gider", metin: "Onaycı planı onaylar, reddeder ya da düzeltme ister; onaylanan plan istenirse kilitlenir." },
  { baslik: "Puantaja Yansır", metin: "Giriş-çıkışlar plana göre değerlendirilir, ay sonunda puantaj hesaplanır." },
];

const SSS: SssMaddesi[] = [
  {
    soru: "Vardiya takip programı ne işe yarar?",
    cevap: "Personelin hangi gün hangi saatlerde çalışacağını planlar ve giriş-çıkış kayıtlarını bu plana göre değerlendirir. Böylece çalışma süresi ve fazla mesai vardiyaya göre hesaplanır.",
  },
  {
    soru: "Vardiya planını kim hazırlar, kim onaylar?",
    cevap: "Plan yetkili kullanıcı tarafından hazırlanır; örneğin mağaza müdürü kendi ekibinin haftalık planını yapar. Onaycı planı onaylar, reddeder ya da düzeltme ister. Onaylanan plan istenirse kilitlenir.",
  },
  {
    soru: "Personel vardiyasını nereden görür?",
    cevap: "Personel kendi vardiyasını Esoft Pdks mobil uygulamasından görür. Plan ayrıca PDF olarak alınabilir.",
  },
  {
    soru: "Mola süresi vardiyaya göre mi düşülür?",
    cevap: "Evet. Mola süresi vardiya tanımında belirlenir ve puantaj hesabında çalışma süresinden düşülür.",
  },
  {
    soru: "Vardiya planı puantajı nasıl etkiler?",
    cevap: "Giriş-çıkış kayıtları vardiya planıyla eşleştirilir. Ay sonunda aylık puantaj bu eşleşmeye göre hesaplanır. Fazla mesai, çalışma grubunda seçtiğiniz kurala göre ayrılır; haftalık 45 saat kuralı açıksa 45 saati aşan süre fazla mesai sayılır.",
  },
];

export default function VardiyaTakipProgramiPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Vardiya Takip Programı | Vardiya Planlama ve Onay - Mika Teknoloji"
        description="Haftalık vardiya planı hazırlayın ve onaycıya gönderin. Personel vardiyasını mobil uygulamada görür; giriş-çıkışlar plana göre puantaja yansır."
        canonical={kanonikAdres(YOL)}
        jsonLd={[sssJsonLd(SSS), kirintiJsonLd(KIRINTI)]}
      />
      <Kirinti maddeler={KIRINTI} />
      <KonuGiris
        ust="PDKS · Vardiya"
        baslik="Vardiya Takip Programı"
        giris="Mika PDKS ile vardiya planı hazırlanır; personel vardiyasını mobil uygulamada hemen görür. Plan onaya gider, istenirse kilitlenir; giriş-çıkışlar plana göre puantaja yansır."
      />
      <OzellikIzgarasi
        baslik="Vardiya Yönetiminde Neler Var?"
        alt="Planlama, onay ve puantaj aynı programda birbirine bağlıdır."
        maddeler={OZELLIKLER}
      />
      <Adimlar baslik="Vardiya Planı Nasıl İlerler?" maddeler={ADIMLAR} />
      <VideoBolumu
        baslik="Vardiya Eğitim Videoları"
        videoIdleri={["vardiya-planlama-pdks", "shift-plan-kart-tanitim"]}
      />
      <SssBolumu maddeler={SSS} />
      <IlgiliSayfalar mevcutYol={YOL} />
      <DemoTalebi />
    </div>
  );
}
