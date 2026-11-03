import { Link } from "wouter";

// Turnike sayfalarının ortak referans bölümü: yalnız gerçek müşteri fotoğrafları
// (Referanslar sayfasındaki kurumlarla aynı). Yapay zekâ ile üretilmiş görsel kullanılmaz.
const REFERANSLAR = [
  { ad: "Koluman Mercedes", sektor: "Otomotiv", resim: "/images/logos/koluman.jpg", alt: "Koluman Mercedes tesisi" },
  { ad: "Lufian", sektor: "Tekstil ve Moda", resim: "/images/referans/lufian-magaza.jpg", alt: "Lufian mağaza binası" },
  { ad: "Adore Mobilya", sektor: "Mobilya ve Dekorasyon", resim: "/images/logos/adore.jpeg", alt: "Adore Mobilya fabrika satış mağazası" },
];

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
          {REFERANSLAR.map((r) => (
            <li key={r.ad} className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <div className="aspect-video bg-slate-100">
                <img src={r.resim} alt={r.alt} loading="lazy" className="w-full h-full object-cover" />
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
