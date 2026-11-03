import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SEO, { kanonikAdres } from "@/seo/SEO";
import { DemoTalebi, IlgiliSayfalar, Kirinti, kirintiJsonLd } from "@/components/PdksIcerik";
import type { KirintiMaddesi } from "@/components/PdksIcerik";
import { BLOG_YAZILARI, BLOG_YOLU } from "@/components/BlogIcerik";

const KIRINTI: KirintiMaddesi[] = [
  { ad: "Ana Sayfa", yol: "/" },
  { ad: "Blog", yol: BLOG_YOLU },
];

export default function BlogListesiPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Blog: PDKS, Puantaj ve Vardiya Rehberleri | Mika Teknoloji"
        description="PDKS sistemleri, puantaj hazırlama, vardiya planı ve QR kodla personel giriş-çıkışı üzerine adım adım uygulama yazıları ve rehberler."
        canonical={kanonikAdres(BLOG_YOLU)}
        jsonLd={[kirintiJsonLd(KIRINTI)]}
      />
      <Kirinti maddeler={KIRINTI} icSinif="max-w-4xl mx-auto" />
      <section className="container mx-auto px-4 pt-10 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Blog</h1>
          <p className="text-xl text-slate-600 mb-10">Puantaj, vardiya ve giriş-çıkış takibinde adım adım uygulama.</p>
          <ul className="space-y-6">
            {BLOG_YAZILARI.map((y) => (
              <li key={y.yol}>
                <Card className="border-2 border-slate-200 shadow-none hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <p className="text-sm text-slate-500 mb-2">
                      <time dateTime={y.yayin}>{y.yayinGorunen}</time>
                    </p>
                    <h2 className="text-2xl font-bold text-slate-800 mb-3">
                      <Link href={y.yol} className="hover:text-primary transition-colors">
                        {y.baslik}
                      </Link>
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">{y.ozet}</p>
                    <Link href={y.yol} className="inline-flex items-center font-semibold text-primary hover:underline">
                      Yazıyı oku
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <IlgiliSayfalar mevcutYol={BLOG_YOLU} />
      <DemoTalebi />
    </div>
  );
}
