import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronDown, ChevronRight, MessageCircle, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { kanonikAdres } from "@/seo/SEO";
import { videos, VideoCard } from "@/pages/VideolarPage";

// PDKS konu sayfalarının (/puantaj-programi, /vardiya-takip-programi, /qr-pdks) ve
// /pdks-programi ek bölümlerinin ortak parçaları. Görsel dil PersonelTakipPage'den alınır:
// py-20 bölümler, text-3xl md:text-4xl başlıklar, Card + yuvarlak ikon kutusu, details/summary SSS.

export interface SssMaddesi {
  soru: string;
  cevap: string;
}

export interface KirintiMaddesi {
  ad: string;
  yol: string;
}

export interface OzellikMaddesi {
  ikon: LucideIcon;
  baslik: string;
  metin: string;
}

export const DEMO_TELEFON = "+905467122296";
export const DEMO_TELEFON_GORUNEN = "0546 712 22 96";
export const DEMO_WHATSAPP = "https://wa.me/905467122296";

// PDKS konu sayfaları arası iç bağlantılar; her sayfa kendisi dışındakileri gösterir.
export const PDKS_KONU_SAYFALARI: KirintiMaddesi[] = [
  { ad: "PDKS Programı", yol: "/pdks-programi" },
  { ad: "Puantaj Programı", yol: "/puantaj-programi" },
  { ad: "Vardiya Takip Programı", yol: "/vardiya-takip-programi" },
  { ad: "QR Kodlu Personel Takibi", yol: "/qr-pdks" },
  { ad: "Fazla Mesai Hesaplama", yol: "/fazla-mesai-hesaplama" },
];

export function sssJsonLd(maddeler: SssMaddesi[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: maddeler.map((m) => ({
      "@type": "Question",
      name: m.soru,
      acceptedAnswer: { "@type": "Answer", text: m.cevap },
    })),
  };
}

export function kirintiJsonLd(maddeler: KirintiMaddesi[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: maddeler.map((m, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: m.ad,
      item: kanonikAdres(m.yol),
    })),
  };
}

// icSinif: yol çubuğunu içerik sütunuyla hizalamak için (ör. blog yazısında "max-w-3xl mx-auto").
export function Kirinti({ maddeler, icSinif = "" }: { maddeler: KirintiMaddesi[]; icSinif?: string }) {
  return (
    <nav aria-label="Sayfa yolu" className="container mx-auto px-4 pt-6">
      <ol className={`flex flex-wrap items-center gap-1 text-sm text-slate-500 ${icSinif}`}>
        {maddeler.map((m, i) => {
          const son = i === maddeler.length - 1;
          return (
            <li key={m.yol} className="flex items-center gap-1">
              {son ? (
                <span aria-current="page" className="text-slate-700 font-medium">{m.ad}</span>
              ) : (
                <Link href={m.yol} className="hover:text-primary transition-colors">{m.ad}</Link>
              )}
              {!son && <ChevronRight className="h-4 w-4" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

// sikisik: araç sayfaları için kısa giriş; araç ilk ekranda görünsün diye düğmeler gösterilmez.
export function KonuGiris({ ust, baslik, giris, sikisik = false }: { ust: string; baslik: string; giris: string; sikisik?: boolean }) {
  return (
    <section className={`relative ${sikisik ? "pt-4 pb-6" : "pt-12 pb-20"} px-4 bg-slate-50`}>
      <div className="container mx-auto text-center max-w-4xl">
        <div className={`inline-flex items-center bg-primary/10 px-6 py-2 rounded-full ${sikisik ? "mb-3" : "mb-6"}`}>
          <span className="text-primary font-medium text-sm tracking-wider uppercase">{ust}</span>
        </div>
        <h1 className={sikisik ? "text-3xl md:text-4xl font-bold text-slate-800 mb-2 leading-tight" : "text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight"}>{baslik}</h1>
        <p className={sikisik ? "text-base md:text-lg text-slate-600" : "text-xl md:text-2xl text-slate-600 font-light mb-10"}>{giris}</p>
        {!sikisik && (
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <a href="#demo">
              Demo Talep Edin
              <ArrowRight className="ml-3 h-5 w-5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/pdks-programi">PDKS Programı</Link>
          </Button>
        </div>
        )}
      </div>
    </section>
  );
}

export function BolumBasligi({ baslik, alt }: { baslik: string; alt?: string }) {
  return (
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{baslik}</h2>
      {alt && <p className="text-xl text-slate-600 max-w-3xl mx-auto">{alt}</p>}
    </div>
  );
}

export function OzellikIzgarasi({ baslik, alt, maddeler }: { baslik: string; alt?: string; maddeler: OzellikMaddesi[] }) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <BolumBasligi baslik={baslik} alt={alt} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {maddeler.map((m) => (
            <Card key={m.baslik} className="h-full border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-6">
                  <m.ikon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{m.baslik}</h3>
                <p className="text-slate-600 leading-relaxed">{m.metin}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Adimlar({ baslik, alt, maddeler }: { baslik: string; alt?: string; maddeler: { baslik: string; metin: string }[] }) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <BolumBasligi baslik={baslik} alt={alt} />
        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {maddeler.map((m, i) => (
            <li key={m.baslik}>
              <Card className="h-full border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-4">{i + 1}</div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{m.baslik}</h3>
                  <p className="text-slate-600 leading-relaxed">{m.metin}</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function SssBolumu({ baslik = "Sık Sorulan Sorular", maddeler }: { baslik?: string; maddeler: SssMaddesi[] }) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <BolumBasligi baslik={baslik} />
        <div className="max-w-4xl mx-auto space-y-4">
          {maddeler.map((m) => (
            <Card key={m.soru} className="border-0 shadow-md">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-slate-800 group-open:text-primary">{m.soru}</h3>
                  <ChevronDown className="h-5 w-5 text-slate-500 group-open:rotate-180 transition-transform duration-200 flex-shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 pt-2">
                  <p className="text-slate-600 leading-relaxed">{m.cevap}</p>
                </div>
              </details>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Videolar yalnız /videolar sayfasındaki mevcut listeden id ile seçilir; yeni video eklenmez.
export function VideoBolumu({ baslik, alt, videoIdleri }: { baslik: string; alt?: string; videoIdleri: string[] }) {
  const secilen = videoIdleri
    .map((id) => videos.find((v) => v.id === id))
    .filter((v): v is (typeof videos)[number] => Boolean(v));
  if (secilen.length === 0) return null;
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <BolumBasligi baslik={baslik} alt={alt} />
        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {secilen.map((v) => (
            <VideoCard key={v.id} video={v} tema="mavi" />
          ))}
        </motion.div>
        <div className="text-center mt-10">
          <Link href="/videolar" className="inline-flex items-center text-primary font-semibold hover:text-primary/80">
            Tüm eğitim videoları
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function IlgiliSayfalar({ mevcutYol, ekler = [] }: { mevcutYol: string; ekler?: KirintiMaddesi[] }) {
  const liste = [...PDKS_KONU_SAYFALARI.filter((s) => s.yol !== mevcutYol), ...ekler];
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <BolumBasligi baslik="İlgili Sayfalar" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {liste.map((s) => (
            <Link
              key={s.yol}
              href={s.yol}
              className="flex items-center justify-between rounded-xl border-2 border-slate-200 bg-white px-5 py-4 font-semibold text-slate-800 hover:border-primary hover:text-primary transition-colors"
            >
              {s.ad}
              <ArrowRight className="h-4 w-4 flex-shrink-0 ml-3" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Sitedeki iletişim formu bir yere göndermediği için demo talebi çalışan kanallardan alınır:
// WhatsApp, telefon ve İletişim sayfası.
export function DemoTalebi({ baslik = "Demo Talep Edin" }: { baslik?: string }) {
  return (
    <section id="demo" className="py-20 bg-slate-900 border-t-4 border-primary scroll-mt-24">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{baslik}</h2>
        <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
          Programı kendi iş yerinizin düzeniyle birlikte gösterelim. WhatsApp'tan yazın ya da arayın.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="default" className="px-8 py-4 text-lg">
            <a href={DEMO_WHATSAPP} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp ile Yazın
            </a>
          </Button>
          <Button asChild size="lg" variant="outlineLight" className="px-8 py-4 text-lg">
            <a href={`tel:${DEMO_TELEFON}`}>
              <Phone className="mr-2 h-5 w-5" />
              {DEMO_TELEFON_GORUNEN}
            </a>
          </Button>
          <Button asChild size="lg" variant="outlineLight" className="px-8 py-4 text-lg">
            <Link href="/iletisim">İletişim Sayfası</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
