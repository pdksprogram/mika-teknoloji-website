import React from 'react';
import { Link } from 'wouter';
import SEO from "@/seo/SEO";
import { Button } from "@/components/ui/button";
import { Kirinti, kirintiJsonLd, type KirintiMaddesi } from "@/components/PdksIcerik";

interface Musteri {
  // gorselin dogal boyutu: kucuk gorsel buyutulmez
  en: number;
  boy: number;
  id: number;
  name: string;
  logo: string;
  sector: string;
  solutions: string[];
  // false: referans belgesi yok, sayfada gösterilmez (logo yerine stok foto kullanılıyordu)
  dogrulandi?: boolean;
}

const customers: Musteri[] = [
  {
    id: 1,
    name: "Lufian",
    logo: "/images/logos/lufian.jpg",
    en: 259,
    boy: 194,
    sector: "Tekstil & Moda",
    solutions: ["WebPDKS", "QR Personel Takip", "Vardiya Yönetimi"]
  },
  {
    id: 2,
    name: "Adore Mobilya",
    logo: "/images/logos/adore.jpeg",
    en: 728,
    boy: 340,
    sector: "Mobilya & Dekorasyon",
    solutions: ["Mobil PDKS", "Shift Yönetimi", "Vardiya Planlama"]
  },
  {
    id: 3,
    name: "Koluman Mercedes",
    logo: "/images/logos/koluman.jpg",
    en: 1920,
    boy: 1080,
    sector: "Otomotiv",
    solutions: ["Turnike Sistemleri", "Güvenlik Guard Kontrol", "PDKS"]
  },
  {
    id: 4,
    name: "Antalya Şehir Hastanesi",
    logo: "/images/logos/hastane-antalya.jpg",
    en: 864,
    boy: 486,
    sector: "Sağlık",
    solutions: ["X-Ray Güvenlik", "PDKS", "Güvenlik Kontrol"]
  },
  {
    id: 5,
    name: "Cerrahpaşa Üniversite Hastanesi",
    logo: "/images/logos/istanbul-cerrahpasa.jpg",
    en: 259,
    boy: 194,
    sector: "Sağlık & Eğitim",
    solutions: ["Yemekhane Sistemi", "Kartlı Ödeme", "Entegre Çözümler"]
  },
  {
    id: 6,
    dogrulandi: false,
    name: "Teknosa",
    logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    en: 0,
    boy: 0,
    sector: "Teknoloji Perakende",
    solutions: ["Turnike Sistemleri", "Güvenlik Kontrol", "PDKS"]
  },
  {
    id: 7,
    dogrulandi: false,
    name: "Koton",
    logo: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=300&fit=crop",
    en: 0,
    boy: 0,
    sector: "Tekstil & Moda",
    solutions: ["WebPDKS", "Merkezi Yönetim", "Raporlama"]
  },
  {
    id: 8,
    dogrulandi: false,
    name: "Bim Market",
    logo: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=400&h=300&fit=crop",
    en: 0,
    boy: 0,
    sector: "Perakende",
    solutions: ["RFID Sistem", "PDKS", "Çoklu Lokasyon"]
  },
  {
    id: 9,
    dogrulandi: false,
    name: "Akbank",
    logo: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=400&h=300&fit=crop",
    en: 0,
    boy: 0,
    sector: "Bankacılık",
    solutions: ["X-Ray Güvenlik", "Guard Kontrol", "Güvenlik Yönetimi"]
  },
  {
    id: 10,
    dogrulandi: false,
    name: "Turkcell",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    en: 0,
    boy: 0,
    sector: "Telekomünikasyon",
    solutions: ["QR Personel Takip", "Mobil PDKS", "Dijital Çözümler"]
  }
];

const gorunenMusteriler = customers.filter((c) => c.dogrulandi !== false);

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

      <section className="bg-slate-900 border-b-4 border-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Referanslarımız</h1>
          <p className="text-slate-300 max-w-2xl">
            Farklı sektörlerden, sistemlerimizi kullanan kurumlar.
          </p>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gorunenMusteriler.map((customer) => (
              <li key={customer.id} className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col">
                <div className="h-48 bg-slate-100 flex items-center justify-center">
                  <img
                    src={customer.logo}
                    alt={`${customer.name} referans görseli`}
                    width={customer.en}
                    height={customer.boy}
                    loading="lazy"
                    className="w-auto h-auto max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="p-5 flex-1">
                  <h2 className="text-lg font-bold text-slate-900">{customer.name}</h2>
                  <p className="text-sm text-primary font-medium mb-3">{customer.sector}</p>
                  <ul className="flex flex-wrap gap-2">
                    {customer.solutions.map((solution) => (
                      <li key={solution} className="text-xs text-slate-700 bg-slate-100 border border-slate-200 rounded px-2 py-1">
                        {solution}
                      </li>
                    ))}
                  </ul>
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
            Ücretsiz demo talebi oluşturun; ihtiyacınıza uygun kurulumu birlikte belirleyelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/iletisim">Ücretsiz Demo Talebi</Link>
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
