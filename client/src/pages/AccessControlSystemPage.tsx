import { Database, Share2, Mail, MessageSquare, Lock, Timer, Users, Smartphone, Zap, Printer, DoorOpen, Shield } from "lucide-react";
import SEO from "@/seo/SEO";
import CtaDugmeleri from "@/components/CtaDugmeleri";
import { Kirinti, kirintiJsonLd, type KirintiMaddesi } from "@/components/PdksIcerik";

const KIRINTI: KirintiMaddesi[] = [
  { ad: "Ana Sayfa", yol: "/" },
  { ad: "Ürünler", yol: "/urunler" },
  { ad: "Geçiş Kontrol", yol: "/urunler/gecis-kontrol" },
];

const faqs = [
  {
    question: "Geçiş kontrol paneli nedir ve ne işe yarar?",
    answer: "Geçiş kontrol panelleri, işyerleri, AVM ve binalarda ilk olarak güvenliği sağlama işlevinin yanı sıra giriş ve çıkışların kontrol edilmesi ve uzaktan basit bir şekilde izlenmesini sağlayan sistemlerdir. Kontrolü elden bırakmadan sirkülasyon takip edilir."
  },
  {
    question: "Geçiş kontrol panellerinin temel bileşenleri nelerdir?",
    answer: "Sisteme entegre edilmiş kart okuyucular, elektrikli kilit karşılıkları ve manyetik kilitler, biyometrik okuyucu ve kontrol paneli, izleme-kontrol yazılımları ve çeşitli boyutlardaki bariyer ve turnikeler bulunur."
  },
  {
    question: "Hangi alanlarda kullanım avantajı sağlar?",
    answer: "Giriş kapılarında hızlı geçiş, pratik yetki kontrolü, personel takibi, mobil entegrasyon, sağlık-hijyen gereksinimleri ve uzaktan kontrol gibi birçok alanda fayda sağlar."
  },
  {
    question: "Teknik özellikleri nelerdir?",
    answer: "Son teknolojik veri tabanı, kanun değişikliklerine otomatik güncelleme, internet üzerinden kolay erişim, çoklu program entegrasyonu ve kolay bakım-onarım özelliklerine sahiptir."
  },
  {
    question: "Kurulum ve bakım süreci nasıl işler?",
    answer: "Pratik ve hızlı kurulum imkanına sahiptir. En verimli yerin tespiti sonrası uzman çalışanlarla kurulum yapılır. Bakım ve onarımı kolay ve hızlı şekilde gerçekleştirilir."
  }
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Geçiş Kontrol Sistemleri",
  "description": "RFID kartlı geçiş, biyometrik parmak izi, yüz tanıma ve QR kod teknolojileri ile profesyonel access control çözümleri.",
  "brand": "Mika Teknoloji",
  "category": "Access Control System"
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const TEMEL = [
  { ikon: Lock, baslik: "Global Antipassback", metin: "Bir kapı kapanmadan diğer kapıdan geçişi engeller." },
  { ikon: Timer, baslik: "Saat Aralığı Kontrolü", metin: "Belirli saatlerde geçiş izni; mesai dışında otomatik kısıtlama." },
  { ikon: Users, baslik: "Yetki Seviyeli Erişim", metin: "Personele ve departmana göre kapı yetkisi." },
];

const ILERI = [
  { ikon: Database, baslik: "SQL Raporlar", metin: "Giriş-çıkış raporları, vardiya analizleri ve özelleştirilebilen SQL sorguları." },
  { ikon: Share2, baslik: "Entegrasyon", metin: "Mevcut ERP, İK ve bordro sistemlerinizle entegrasyon desteği." },
  { ikon: Mail, baslik: "E-posta Bildirimi", metin: "Giriş-çıkış durumları, geç kalma uyarıları ve periyodik raporlar ilgili birime gider." },
  { ikon: MessageSquare, baslik: "SMS Bildirimi", metin: "Acil durum uyarıları, vardiya değişiklikleri ve duyurular personele hızla ulaşır." },
  { ikon: Shield, baslik: "Güvenli Erişim", metin: "SSL şifreli bağlantı." },
  { ikon: Users, baslik: "Merkezi Yönetim", metin: "Tüm lokasyonlar tek arayüzden yönetilir." },
];

const OKUYUCU = [
  { ikon: Smartphone, baslik: "Bluetooth ve NFC", metin: "Çoklu bağlantı seçeneği" },
  { ikon: Lock, baslik: "QR Kod", metin: "Hızlı ve güvenli geçiş" },
  { ikon: Zap, baslik: "Dijital Kimlik", metin: "Akıllı telefon ile geçiş" },
];

const ZIYARETCI = [
  { ikon: Printer, baslik: "Tek Kullanımlık QR", metin: "Anında basılabilen geçici erişim kodu" },
  { ikon: Smartphone, baslik: "SMS ile QR Gönderimi", metin: "Ziyaretçiye otomatik QR kod gönderimi" },
  { ikon: DoorOpen, baslik: "Turnike Entegrasyonu", metin: "Geçişlerin anlık takibi" },
];

type Madde = { ikon: typeof Lock; baslik: string; metin: string };

function MaddeListesi({ maddeler, sinif = "" }: { maddeler: Madde[]; sinif?: string }) {
  return (
    <ul className={`grid gap-x-8 gap-y-5 ${sinif}`}>
      {maddeler.map(({ ikon: Ikon, baslik, metin }) => (
        <li key={baslik} className="flex items-start gap-3">
          <Ikon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
          <div>
            <h3 className="font-semibold text-gray-900">{baslik}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{metin}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function AccessControlSystemPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Geçiş Kontrol Sistemleri – Access Control Panelleri | Mika"
        description="RFID kartlı geçiş, parmak izi, yüz tanıma ve QR kod ile geçiş kontrol (access control) çözümleri. PDKS entegrasyonu ve güvenli erişim kontrolü."
        canonical="https://mikateknoloji.com/urunler/gecis-kontrol"
        jsonLd={[productJsonLd, faqJsonLd, kirintiJsonLd(KIRINTI)]}
      />

      <Kirinti maddeler={KIRINTI} />

      {/* Ürün hero: solda gerçek yazılım ekranı, sağda bilgi */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <figure className="order-2 lg:order-1 rounded-lg border border-slate-200 overflow-hidden bg-white">
              <img
                src="/images/slayt/bulut-pdks-paneli.jpg"
                alt="MikaPass geçiş kayıtları ekranı: kapı, panel, tarih ve geçiş durumu"
                className="w-full h-auto"
                width={1400}
                height={603}
              />
              <figcaption className="px-4 py-3 text-sm text-slate-600 border-t border-slate-200">
                Geçiş kayıtları ekranı (kişisel veriler maskelenmiştir)
              </figcaption>
            </figure>

            <div className="order-1 lg:order-2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                <span className="text-primary">MikaPass</span>{" "}Akıllı Erişim Kontrol Sistemi
              </h1>
              <p className="text-lg text-gray-600 mb-5">
                Bina içindeki kapıları yetki seviyesine göre kontrol edin.
              </p>
              <CtaDugmeleri tur="yazilim" sinif="mb-6" />
              <p className="text-gray-700 leading-relaxed mb-6">
                Antipassback ve Global Antipassback ile bir kapı kapanmadan diğer kapıdan geçiş engellenir.
                Limit kontör ve saat aralıkları ile geçişler tam kontrol altında kalır.
              </p>
              <MaddeListesi maddeler={TEMEL} />
            </div>
          </div>
        </div>
      </section>

      {/* Bulut tabanlı yönetim ve ileri özellikler */}
      <section className="py-12 md:py-16 bg-gray-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Bulut Tabanlı Geçiş Kontrol Sistemi</h2>
            <p className="text-gray-600 leading-relaxed">
              Binalarınızı, çalışanlarınızı, ziyaretçilerinizi ve bina sakinlerinizi Mika bulut yazılımları ile
              BT altyapı maliyetine gerek duymadan yönetin.
            </p>
          </div>
          <MaddeListesi maddeler={ILERI} sinif="sm:grid-cols-2 lg:grid-cols-3" />
        </div>
      </section>

      {/* Donanımlar */}
      <section className="py-12 md:py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Donanımlar</h2>
            <p className="text-gray-600 leading-relaxed">
              Mika donanımları ile çok sayıda geçiş noktası tek arayüzden yönetilir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="flex gap-5 items-start border border-slate-200 rounded-lg p-5">
              <img
                src="/access-control-panels.png"
                alt="Metal kasalı geçiş kontrol paneli"
                className="w-32 h-auto object-contain flex-shrink-0"
                width={291}
                height={173}
                loading="lazy"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Güvenlik Kontrol Paneli</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  İşyeri, AVM ve binalar için metal kasalı, anahtarlı kilit sistemli geçiş kontrol paneli.
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-start border border-slate-200 rounded-lg p-5">
              <img
                src="/images/urun/erisim-kontrol-paneli-kart.jpg"
                alt="Geçiş kontrol paneli kartı"
                className="w-32 h-auto object-contain flex-shrink-0"
                width={252}
                height={252}
                loading="lazy"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Akıllı Kontrol Kartı</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Çoklu bağlantı portlu, LCD ekranlı, modüler ve genişletilebilir kontrol kartı.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">Mika Serisi Okuyucular</h3>
          <p className="text-gray-600 leading-relaxed mb-5 max-w-3xl">
            Cep telefonuna tanımlanan dijital kimlik ile kart taşıma gereksinimi ortadan kalkar.
          </p>
          <MaddeListesi maddeler={OKUYUCU} sinif="sm:grid-cols-3" />
        </div>
      </section>

      {/* Ziyaretçi QR */}
      <section className="py-12 md:py-16 bg-gray-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <img
              src="/qr-visitor-system.png"
              alt="Ziyaretçi QR kod oluşturma ekranı"
              className="w-full max-w-sm mx-auto h-auto rounded-lg border border-slate-200 bg-white"
              width={685}
              height={819}
              loading="lazy"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Ziyaretçi Takip QR Sistemi</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Yazıcıdan basılan ya da SMS ile gönderilen tek kullanımlık QR kodlarla ziyaretçiler takip edilir.
                Turnikeden geçen her ziyaretçi anında sisteme kaydedilir.
              </p>
              <MaddeListesi maddeler={ZIYARETCI} />
            </div>
          </div>
        </div>
      </section>

      {/* Sık sorulan sorular: metinler faqJsonLd ile aynı kaynaktan */}
      <section className="py-12 md:py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Sık Sorulan Sorular</h2>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-4">
                <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-4 font-semibold text-gray-900">
                  {faq.question}
                  <span aria-hidden="true" className="text-primary text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Sayfa sonu talep */}
      <section className="py-12 md:py-16 bg-slate-900 border-t-4 border-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Hızlı ve Basit Geçiş Kontrolü</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            MikaPass ile akıllı telefon dijital anahtara dönüşür: temassız, güvenli ve hızlı geçiş.
          </p>
          <CtaDugmeleri tur="yazilim" koyu sinif="justify-center" />
        </div>
      </section>
    </div>
  );
}
