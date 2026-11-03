import type { ReactNode } from "react";
import { Link } from "wouter";
import { ArrowRight, Calculator } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SEO, { kanonikAdres } from "@/seo/SEO";
import { DemoTalebi, IlgiliSayfalar, Kirinti, kirintiJsonLd } from "@/components/PdksIcerik";
import type { KirintiMaddesi } from "@/components/PdksIcerik";
import CtaDugmeleri from "@/components/CtaDugmeleri";

// Blog yazılarının ortak parçaları. Görsel dil PDKS konu sayfalarından (PdksIcerik) gelir.
// Tarihler sabit metindir (ön-render ile tarayıcı aynı çıktıyı üretsin diye Date/Intl kullanılmaz);
// yayın ve güncelleme günü yazının dosyasının gerçek commit günüdür.

export const BLOG_YOLU = "/blog";

const KURUM = {
  "@type": "Organization",
  name: "Mika Teknoloji",
  url: "https://mikateknoloji.com",
} as const;

const KURUM_LOGOSU = "https://mikateknoloji.com/images/logos/mika-logo.jpg";

export interface BlogYazisi {
  yol: string;
  baslik: string; // H1 ve JSON-LD headline
  seoBaslik: string; // <title>
  aciklama: string; // meta description
  ozet: string; // liste kartındaki kısa metin
  yayin: string; // YYYY-AA-GG
  guncelleme: string; // YYYY-AA-GG
  yayinGorunen: string; // ekranda görünen tarih
}

export const BLOG_YAZILARI: BlogYazisi[] = [
  {
    yol: "/blog/puantaj-nasil-tutulur",
    baslik: "Puantaj Nasıl Tutulur? Adım Adım Aylık Puantaj",
    seoBaslik: "Puantaj Nasıl Tutulur? Adım Adım Aylık Puantaj | Mika",
    aciklama:
      "Giriş-çıkış kayıtlarından aylık puantaja giden yol: tanımlar, kayıt aktarımı, hareket düzeltme, hesaplama, kontrol, ay kilidi ve Excel çıktısı.",
    ozet: "Tanımlardan ay kilidine kadar, giriş-çıkış kayıtlarından aylık puantajı hazırlamanın sırası.",
    yayin: "2026-11-03",
    guncelleme: "2026-11-03",
    yayinGorunen: "3 Kasım 2026",
  },
  {
    yol: "/blog/vardiya-plani-nasil-hazirlanir",
    baslik: "Vardiya Planı Nasıl Hazırlanır? Pratik Adımlar",
    seoBaslik: "Vardiya Planı Nasıl Hazırlanır? Pratik Adımlar | Mika",
    aciklama:
      "Haftalık vardiya planının sırası: ihtiyacı çıkarın, kalıpları tanımlayın, planı yazın, paylaşın, onaya gönderin ve gerçekleşenle karşılaştırın.",
    ozet: "Saat saat ihtiyaçtan onaylı plana, haftalık vardiyayı hazırlarken izlenecek adımlar.",
    yayin: "2026-11-03",
    guncelleme: "2026-11-03",
    yayinGorunen: "3 Kasım 2026",
  },
  {
    yol: "/blog/qr-kod-ile-personel-giris-cikis",
    baslik: "QR Kodla Personel Giriş-Çıkış Nasıl Çalışır?",
    seoBaslik: "QR Kodla Personel Giriş-Çıkış Nasıl Çalışır? | Mika",
    aciklama:
      "Telefonla QR giriş-çıkışın iki yolu, konum doğrulama, mola kayıtları, arka arkaya okutma ve kayıtların puantaja ulaşması adım adım.",
    ozet: "Kodu okutmak ya da kodu göstermek: telefonla giriş-çıkışın kurulumu ve sahada dikkat edilecekler.",
    yayin: "2026-11-03",
    guncelleme: "2026-11-03",
    yayinGorunen: "3 Kasım 2026",
  },
  {
    yol: "/blog/pdks-sistemleri-nedir-2025-rehberi",
    baslik: "PDKS Sistemleri Nedir? Kapsamlı Rehber",
    seoBaslik: "PDKS Sistemleri Nedir? Kapsamlı Rehber | Mika Teknoloji",
    aciklama:
      "Personel Devam Kontrol Sistemi (PDKS) nedir? Parmak izi, yüz tanıma ve kartlı PDKS türleri, avantajları, fiyatları ve kurulum adımları rehberi.",
    ozet: "PDKS nedir, nasıl çalışır: parmak izi, yüz tanıma, kartlı ve mobil PDKS türleri, avantajları ve kurulum adımları.",
    yayin: "2025-01-15",
    guncelleme: "2026-11-03",
    yayinGorunen: "15 Ocak 2025",
  },
];

export function blogYazisi(yol: string): BlogYazisi {
  const y = BLOG_YAZILARI.find((b) => b.yol === yol);
  if (!y) throw new Error(`[Blog] tanımsız yazı: ${yol}`);
  return y;
}

export function makaleJsonLd(yazi: BlogYazisi) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: yazi.baslik,
    description: yazi.aciklama,
    inLanguage: "tr-TR",
    datePublished: yazi.yayin,
    dateModified: yazi.guncelleme,
    image: KURUM_LOGOSU,
    mainEntityOfPage: { "@type": "WebPage", "@id": kanonikAdres(yazi.yol) },
    author: KURUM,
    publisher: { ...KURUM, logo: { "@type": "ImageObject", url: KURUM_LOGOSU } },
  };
}

export function YaziBolumu({ baslik, children }: { baslik: string; children: ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-5">{baslik}</h2>
      {children}
    </section>
  );
}

export function Paragraf({ children }: { children: ReactNode }) {
  return <p className="text-lg text-slate-700 leading-relaxed mb-5">{children}</p>;
}

export function Liste({ maddeler }: { maddeler: ReactNode[] }) {
  return (
    <ul className="list-disc pl-6 space-y-3 mb-5 text-lg text-slate-700 leading-relaxed">
      {maddeler.map((m, i) => (
        <li key={i}>{m}</li>
      ))}
    </ul>
  );
}

export function IcLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-primary font-semibold underline underline-offset-4 hover:text-slate-800">
      {children}
    </Link>
  );
}

export function FazlaMesaiKutusu({ metin }: { metin: string }) {
  return (
    <Card className="my-8 border-2 border-slate-200 shadow-none">
      <CardContent className="p-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <Calculator className="h-8 w-8 text-primary flex-shrink-0" />
        <p className="text-slate-700 leading-relaxed flex-1">{metin}</p>
        <Link
          href="/fazla-mesai-hesaplama"
          className="inline-flex items-center font-semibold text-primary hover:underline whitespace-nowrap"
        >
          Fazla Mesai Hesaplama
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}

export function BlogYaziSablonu({ yazi, giris, children }: { yazi: BlogYazisi; giris: string; children: ReactNode }) {
  const kirinti: KirintiMaddesi[] = [
    { ad: "Ana Sayfa", yol: "/" },
    { ad: "Blog", yol: BLOG_YOLU },
    { ad: yazi.baslik, yol: yazi.yol },
  ];
  const digerYazilar = BLOG_YAZILARI.filter((b) => b.yol !== yazi.yol).map((b) => ({ ad: b.baslik, yol: b.yol }));
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={yazi.seoBaslik}
        description={yazi.aciklama}
        canonical={kanonikAdres(yazi.yol)}
        jsonLd={[makaleJsonLd(yazi), kirintiJsonLd(kirinti)]}
      />
      <Kirinti maddeler={kirinti} icSinif="max-w-3xl mx-auto" />
      <article className="container mx-auto px-4 pt-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <header className="border-b border-slate-200 pb-6">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight mb-3">{yazi.baslik}</h1>
            <p className="text-sm text-slate-500">
              <time dateTime={yazi.yayin}>{yazi.yayinGorunen}</time> · Mika Teknoloji
            </p>
            <CtaDugmeleri tur="yazilim" boyut="default" sinif="mt-5" />
          </header>
          <p className="text-xl text-slate-700 leading-relaxed mt-8">{giris}</p>
          {children}
        </div>
      </article>
      <IlgiliSayfalar mevcutYol={yazi.yol} ekler={digerYazilar} />
      <DemoTalebi />
    </div>
  );
}
