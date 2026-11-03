import { Link } from "wouter";
import { REFERANSLAR } from "@/lib/referanslar";
import { boyut } from "@/lib/gorselBoyut";

// Turnike sayfalarının ortak referans bölümü: veri Referanslar sayfasıyla aynı tek listeden gelir
// (lib/referanslar.ts). Yapay zekâ ile üretilmiş görsel kullanılmaz.
const TURNIKE_REFERANSLARI = ["Koluman Mercedes", "Lufian", "Adore Mobilya"]
  .map((ad) => REFERANSLAR.find((r) => r.ad === ad))
  .filter((r): r is (typeof REFERANSLAR)[number] => Boolean(r));

export default function TurnikeReferanslari() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Referanslarımız</h2>
          <Link href="/referanslar" className="text-sm font-medium text-primary hover:underline">
            Tüm referanslar
          </Link>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TURNIKE_REFERANSLARI.map((r) => (
            <li key={r.ad} className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <div className="aspect-video bg-slate-100">
                <img {...boyut(r.foto ?? r.gorsel)} src={r.foto ?? r.gorsel} alt={r.alt} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-900">{r.ad}</h3>
                <p className="text-sm text-slate-600">{r.sektor}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Ana sayfa için sıkı şerit: küçük görsel + ad, tek satır başlık ve "Tüm referanslar" bağlantısı.
export function ReferansSeridi() {
  return (
    <section className="py-10 bg-white border-b border-slate-200" aria-labelledby="referans-seridi-baslik">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-baseline justify-between gap-3 mb-5">
          <h2 id="referans-seridi-baslik" className="text-2xl font-bold text-slate-900">Referanslarımız</h2>
          <Link href="/referanslar" className="text-sm font-medium text-primary hover:underline">
            Tüm referanslar
          </Link>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {REFERANSLAR.map((r) => (
            <li key={r.ad} className="min-w-0">
              <div className="aspect-video bg-slate-100 rounded-md overflow-hidden border border-slate-200">
                <img src={r.gorsel} alt={r.alt} width={r.en} height={r.boy} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="mt-2 text-sm font-semibold text-slate-900 leading-snug">{r.ad}</div>
              <div className="text-xs text-slate-500">{r.sektor}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
