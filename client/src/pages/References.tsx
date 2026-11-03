import React from 'react';
import { Link } from 'wouter';
import SEO from "@/seo/SEO";
import { Button } from "@/components/ui/button";
import { Kirinti, kirintiJsonLd, type KirintiMaddesi } from "@/components/PdksIcerik";
import CtaDugmeleri from "@/components/CtaDugmeleri";
import { REFERANSLAR } from "@/lib/referanslar";
import { CTA_DONANIM } from "@/lib/iletisim";

const KIRINTI: KirintiMaddesi[] = [
  { ad: "Ana Sayfa", yol: "/" },
  { ad: "Referanslar", yol: "/referanslar" },
];

const References: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Referanslar | Mika Teknoloji"
        description="PDKS, turnike ve kartlı geçiş sistemlerimizi kullanan kurumlar."
        jsonLd={kirintiJsonLd(KIRINTI)}
      />
      <Kirinti maddeler={KIRINTI} icSinif="pb-4" />

      <section className="bg-slate-900 border-b-4 border-primary text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Referanslarımız</h1>
          <p className="text-slate-300 max-w-2xl">
            Farklı sektörlerden, sistemlerimizi kullanan kurumlar.
          </p>
          <CtaDugmeleri tur="donanim" koyu sinif="mt-6" />
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REFERANSLAR.map((r) => (
              <li key={r.ad} className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col">
                <div className="aspect-[16/9] bg-white border-b border-slate-200 overflow-hidden">
                  <img
                    src={r.gorsel}
                    alt={r.alt}
                    width={r.en}
                    height={r.boy}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex-1">
                  <h2 className="text-lg font-bold text-slate-900">{r.ad}</h2>
                  <p className="text-sm text-slate-500 mb-2">{r.sektor}</p>
                  <p className="text-sm text-slate-700">{r.cozumler.join(" · ")}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Sisteminizi Birlikte Planlayalım</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            İhtiyacınıza uygun kurulumu birlikte belirleyelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/iletisim">{CTA_DONANIM}</Link>
            </Button>
            <Button asChild size="lg" variant="outlineLight">
              <Link href="/urunler">Ürünleri İnceleyin</Link>
            </Button>
          </div>
          <p className="text-slate-400 text-sm mt-8">Teknik destek · Kurulum ve eğitim · 2 yıl garanti</p>
        </div>
      </section>
    </div>
  );
};

export default References;
