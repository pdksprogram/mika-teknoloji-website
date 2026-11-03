import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";
import type { Karsilastirma, Sss } from "@/lib/urunEkIcerik";

// Ürün sayfalarının alt bölümü: kullanım alanları, karşılaştırma tablosu ve sık sorulan sorular.
// SSS hem ekranda hem FAQPage şemasında aynı diziden üretilir.
// aktifYol verilirse tablodaki o satır vurgulanır ve bağlantı olmaz.
export default function UrunEkIcerik({
  kullanim,
  tablolar = [],
  sss = [],
  aktifYol,
  genislik = "max-w-3xl",
  zemin = "bg-white",
}: {
  kullanim?: string[];
  tablolar?: Karsilastirma[];
  sss?: Sss[];
  aktifYol?: string;
  genislik?: string;
  zemin?: string;
}) {
  const sema = sss.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: sss.map((s) => ({
          "@type": "Question",
          name: s.soru,
          acceptedAnswer: { "@type": "Answer", text: s.cevap },
        })),
      }
    : null;

  return (
    <section className={`py-12 lg:py-16 border-t border-slate-200 ${zemin}`}>
      {sema && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(sema)}</script>
        </Helmet>
      )}
      <div className="container mx-auto px-4">
        <div className={`${genislik} space-y-12`}>
          {kullanim && kullanim.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-5">Kullanım Alanları</h2>
              <ul className="grid md:grid-cols-2 gap-3">
                {kullanim.map((k) => (
                  <li key={k} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {k}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {tablolar.map((t) => (
            <div key={t.baslik}>
              <h2 className="text-2xl font-bold text-slate-900 mb-5">{t.baslik}</h2>
              <div className="overflow-x-auto border border-slate-200 rounded-lg">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-600">
                    <tr>
                      {t.sutunlar.map((s) => (
                        <th key={s} scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">
                          {s}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {t.satirlar.map((r) => {
                      const aktif = r.yol === aktifYol;
                      return (
                        <tr key={r.ad} className={aktif ? "bg-slate-50" : "bg-white"} aria-current={aktif ? "page" : undefined}>
                          <th scope="row" className="px-4 py-3 font-semibold text-slate-900 whitespace-nowrap">
                            {r.yol && !aktif ? (
                              <Link href={r.yol} className="text-primary hover:underline">
                                {r.ad}
                              </Link>
                            ) : (
                              r.ad
                            )}
                          </th>
                          {r.hucreler.map((h, i) => (
                            <td key={i} className="px-4 py-3 text-slate-700">
                              {h}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {sss.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Sıkça Sorulan Sorular</h2>
              <div className="divide-y divide-slate-200 border-y border-slate-200">
                {sss.map((s) => (
                  <div key={s.soru} className="py-5">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{s.soru}</h3>
                    <p className="text-slate-600 leading-relaxed">{s.cevap}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
