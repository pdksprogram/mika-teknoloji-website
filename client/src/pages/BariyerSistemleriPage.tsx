import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Settings, CheckCircle2, CheckCircle, ArrowRight, Lock, Gauge, AlertTriangle, Phone, Wrench, SquareParking, Factory, ShoppingCart, ShieldCheck, Plane, Home, Hotel, Hospital, Landmark } from "lucide-react";
import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";

const segments = [
  {
    id: "Q2",
    title: "MT PLUS Bariyer Sistemi",
    subtitle: "Orta Seviye Güvenlik Çözümü",
    description: "Orta seviye güvenlik ihtiyaçları için ideal olan MT PLUS bariyer sistemi, kolay montaj ve güvenilir performans sunar. 5,25 metre ledli kol uzunluğu ile geniş geçiş alanlarında kullanım için tasarlanmıştır.",
    image: "/images/bariyer/pt-plus-bariyer.jpg",
    gradient: "from-slate-900 to-slate-800",
    bgGradient: "from-slate-50 to-white",
    icon: CheckCircle2,
    detailUrl: "/urunler/pt-plus-bariyer",
    features: [
      "Ledli 5,25 mt kol",
      "Anti-Shock Rubber",
      "Reflektif etiket sistemi",
      "Flaşör güvenlik",
      "Fotosel koruma",
      "Uzaktan kumanda desteği"
    ],
    specs: [
      { label: "Kontrol Voltajı", value: "220 V 50 Hz" },
      { label: "Güç Tüketimi", value: "24 V DC" },
      { label: "Açılma Süresi", value: "7 saniye" },
      { label: "Kol Uzunluğu", value: "5,25 metre" },
      { label: "Koruma Derecesi", value: "IP 54" },
      { label: "Çalışma Sıcaklığı", value: "-20°C - +60°C" },
      { label: "Boyutlar", value: "324x320x1010 mm" },
      { label: "Ağırlık", value: "40 kg" }
    ]
  },
  {
    id: "Q3",
    title: "MT Genius Bariyer Sistemi",
    subtitle: "Akıllı Kontrol ve Yönetim",
    description: "İleri teknoloji ile donatılmış MT Genius bariyer sistemi, akıllı kontrol özellikleri ve entegrasyon kabiliyeti ile öne çıkar. Gelişmiş sensör teknolojisi ve otomatik ayar özellikleri ile kusursuz performans sunar.",
    image: "/images/bariyer/pt-genius-bariyer.jpg",
    gradient: "from-primary via-primary to-slate-800",
    bgGradient: "from-slate-50 via-white to-slate-100",
    icon: Settings,
    detailUrl: "/urunler/pt-genius-bariyer",
    features: [
      "Akıllı kontrol sistemi",
      "Otomatik ayar özelliği",
      "Gelişmiş sensör teknolojisi",
      "Çoklu entegrasyon desteği",
      "Uzaktan izleme ve kontrol",
      "Enerji tasarruflu çalışma"
    ],
    specs: [
      { label: "Max. Kol Boyu", value: "5,50 metre" },
      { label: "Koruma Sınıfı", value: "IP44" },
      { label: "Çalışma Ortamı", value: "-20°C / +55°C" },
      { label: "Montaj Tipi", value: "Yere/Duvara Montaj" }
    ]
  },
  {
    id: "Q4",
    title: "MT Guard Bariyer Sistemi",
    subtitle: "Yüksek Güvenlik ve Dayanıklılık",
    description: "Yüksek güvenlik gerektiren noktalarda kullanılmak üzere tasarlanan MT Guard bariyer sistemi, üstün dayanıklılık ve güvenilirlik sunar. Yüksek darbe emilimi özellikli yapısı ile kritik güvenlik noktalarında tercih edilir.",
    image: "/images/bariyer/pt-guard-bariyer.jpg",
    gradient: "from-slate-900 to-slate-800",
    bgGradient: "from-slate-50 to-white",
    icon: Shield,
    detailUrl: "/urunler/pt-guard-bariyer",
    features: [
      "Yüksek dayanıklılık",
      "Darbe emilim sistemi",
      "Yüksek güvenlik",
      "Uzun ömürlü yapı",
      "Minimum bakım gereksinimi"
    ],
    specs: [] as { label: string; value: string }[]
  },
  {
    id: "Q5",
    title: "Tuzaklar & Kapanlar",
    subtitle: "Yeraltı Güvenlik Sistemleri",
    description: "Yeraltına gömülen hidrolik tuzak sistemleri, görünmeyen ancak son derece etkili güvenlik çözümleri sunar. Acil durumlarda otomatik aktive olan bu sistemler, yetkisiz araç girişlerini engellemek için tasarlanmıştır.",
    image: "/images/bariyer/tuzak-kapan.jpg",
    gradient: "from-slate-900 to-slate-800",
    bgGradient: "from-slate-50 to-white",
    icon: AlertTriangle,
    detailUrl: "/urunler/tuzaklar-kapanlar",
    features: [
      "Yeraltı gömme sistemi",
      "Görünmez güvenlik",
      "Otomatik aktivasyon",
      "Acil durum tepkisi",
      "Hidrolik güç sistemi",
      "Yetkisiz giriş engelleme"
    ],
    specs: [
      { label: "Sistem Tipi", value: "Yeraltı Hidrolik" },
      { label: "Aktivasyon", value: "Otomatik/Manuel" },
      { label: "Standart Kapama Genişliği", value: "4 metre" }
    ]
  },
  {
    id: "Q6",
    title: "MT Mantar Bariyer (Hidrolik)",
    subtitle: "Hidrolik Yükselen Bariyer Sistemi",
    description: "Yüksek güvenlik ihtiyacı duyulan noktalarda araç trafiğini engelleyecek şekilde tasarlanmış, 304 paslanmaz çelik yapılı hidrolik bariyer sistemi. PLC kontrol sistemi ve 100 bar hidrolik güç ile maksimum performans sağlar.",
    image: "/images/bariyer/mantar-bariyer.jpg",
    gradient: "from-slate-900 to-slate-800",
    bgGradient: "from-slate-50 to-white",
    icon: Lock,
    detailUrl: "/urunler/mantar-bariyer",
    features: [
      "304 paslanmaz çelik yapı",
      "Galvaniz alt kısım",
      "Yatay yataklama sistemi",
      "PLC kontrol sistemi",
      "El krikosu (elektrik kesintisinde)",
      "Geçiş kontrol sistemleri uyumlu"
    ],
    specs: [
      { label: "Kontrol Voltajı", value: "380 V 50-60 Hz" },
      { label: "Açılma Süresi", value: "3-5 saniye" },
      { label: "Kompresör", value: "30 Lt 50 Bar" },
      { label: "Kontrol", value: "PLC Logic" },
      { label: "Emniyet", value: "Fotosel/Loop Sensör" },
      { label: "Koruma Derecesi", value: "IP 67" },
      { label: "Yerden Yükseklik", value: "50 cm" },
      { label: "Çalışma Sıcaklığı", value: "-20°C - +60°C" },
      { label: "Ağırlık", value: "80 kg" },
      { label: "Tahrik Grubu", value: "100 bar Hidrolik" }
    ]
  },
  {
    id: "Q7",
    title: "Road Blocker Sistemler",
    subtitle: "Terör Önleme ve Yüksek Güvenlik",
    description: "Terör eylemlerine karşı tasarlanan, elektronik kontrollü hidrolik yol kesici sistem. Yüksek dayanıklılık ve güvenilirlik özelliği ile kritik noktalarda kullanılır. 4 adet güneş enerjili LED ile gece görünürlüğü sağlanmıştır.",
    image: "/images/bariyer/road-blocker.jpg",
    gradient: "from-slate-900 to-slate-800",
    bgGradient: "from-slate-50 to-white",
    icon: Gauge,
    detailUrl: "/urunler/road-blocker",
    features: [
      "Terör eylemlerine karşı tasarım",
      "Yüksek dayanıklılık yapısı",
      "Güneş enerjili LED aydınlatma",
      "Elektronik kontrol sistemi",
      "Gece görünürlük özelliği",
      "Üstün koruma seviyesi"
    ],
    specs: [
      { label: "Sistem Tipi", value: "Hidrolik Yol Kesici" },
      { label: "Uzunluk", value: "2-6 metre" },
      { label: "Çalışma Basıncı", value: "20-100 bar" },
      { label: "Güç Kaynağı", value: "380 V 50-60 Hz" },
      { label: "Açma/Kapama", value: "4-6 saniye" },
      { label: "Aydınlatma", value: "4 Adet Güneş Enerjili LED" }
    ]
  }
];

const faqs = [
  {
    question: "Mantar bariyer, road blocker ve tuzak kapanlar arasındaki fark nedir?",
    answer: "Mantar bariyer hidrolik sistemle yükselen silindirik bariyer, road blocker araç geçişini tamamen kesen, yüksek güvenlikli yol kesici sistem, tuzak kapanlar ise yeraltına gömülen acil durum güvenlik sistemleridir. Her biri farklı güvenlik seviyesi ve kullanım alanı için tasarlanmıştır."
  },
  {
    question: "Otopark bariyeri fiyatları ne kadardır?",
    answer: "Bariyer fiyatları model, özellikler ve kurulum gereksinimlerine göre değişiklik gösterir. Detaylı fiyat teklifi ve keşif için bize ulaşın."
  },
  {
    question: "Road blocker sistemler nerede kullanılır?",
    answer: "Road blocker sistemler havalimanları, askeri tesisler, devlet binaları, büyükelçilikler ve yüksek güvenlik gerektiren kritik noktalarda kullanılır. Terör saldırılarına karşı maksimum koruma sağlar ve araç trafiğini tamamen engelleyebilir."
  },
  {
    question: "Mantar bariyer fiyatları nasıl belirlenir?",
    answer: "Mantar bariyer fiyatları hidrolik sistem kapasitesi, malzeme kalitesi (304 paslanmaz çelik), kontrol sistemi özellikleri ve kurulum gereksinimlerine göre değişir. PLC kontrollü modeller ve özel entegrasyonlar fiyatı etkileyen faktörlerdir."
  },
  {
    question: "Tuzak kapanlar nasıl çalışır?",
    answer: "Tuzak kapanlar yeraltına gömülen hidrolik sistemlerdir. Normal durumda görünmez haldedir, acil durumlarda otomatik veya manuel olarak aktive edilir ve yerden yükselerek yetkisiz araç girişlerini anında engeller. Maksimum güvenlik için ideal bir çözümdür."
  },
  {
    question: "Hidrolik bariyer mi yoksa elektrikli bariyer mi?",
    answer: "Hidrolik bariyerler daha yüksek dayanıklılık ve güç sunarken, elektrikli bariyerler daha ekonomik ve bakımı kolaydır. Yüksek güvenlik gerektiren alanlarda hidrolik, standart kullanımda elektrikli tercih edilebilir."
  },
  {
    question: "Bariyer sistemleri hangi garanti kapsamındadır?",
    answer: "Tüm bariyer sistemlerimiz 2 yıl üretici garantisi ile sunulmaktadır. Ayrıca periyodik bakım ve teknik destek hizmeti sağlıyoruz."
  },
  {
    question: "Road Blocker sistemi nedir ve nerede kullanılır?",
    answer: "Road Blocker, terör saldırılarına karşı yüksek koruma sağlayan hidrolik yol kesici sistemdir. Askeri tesisler, elçilikler, havalimanları ve kritik altyapı tesislerinde kullanılır."
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Bariyer Sistemleri - Mantar Bariyer, Road Blocker, Tuzak Kapanlar",
  "description": "Profesyonel güvenlik çözümleri: Hidrolik mantar bariyer, road blocker yol kesici sistemler, tuzak kapanlar, otopark bariyerleri ve araç giriş kontrol sistemleri.",
  "brand": {
    "@type": "Brand",
    "name": "Mika Teknoloji"
  },
  "category": "Güvenlik Sistemleri",
  "keywords": "mantar bariyer, road blocker, tuzak kapanlar, hidrolik bariyer, otopark bariyeri, güvenlik sistemleri",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "TRY",
    "availability": "https://schema.org/InStock"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Ana Sayfa",
      "item": "https://mikateknoloji.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Ürünler",
      "item": "https://mikateknoloji.com/urunler"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Bariyer Sistemleri",
      "item": "https://mikateknoloji.com/urunler/bariyer-sistemleri"
    }
  ]
};

const faqSchema = {
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

export default function BariyerSistemleriPage() {
  const handleContactClick = () => {
    trackEvent('Contact Request', 'bariyer_contact', 'Bariyer Sistemleri Page - Contact Button');
    window.location.href = '/iletisim';
  };

  return (
    <>
      <Helmet>
        <title>Bariyer Sistemleri: Mantar Bariyer, Road Blocker, Tuzak Kapanlar | Mika Teknoloji</title>
        <meta name="description" content="Profesyonel bariyer sistemleri: Mantar bariyer, road blocker, tuzak kapanlar, otopark bariyeri ve hidrolik güvenlik sistemleri. 2 yıl garanti. Keşif için bize ulaşın." />
        <meta name="keywords" content="bariyer sistemleri, otopark bariyeri, hidrolik bariyer, mantar bariyer, road blocker, güvenlik bariyeri, PT PLUS bariyer, dinamik bariyer, tuzak sistemleri, bariyer fiyatları, otopark bariyeri kurulumu, otomatik bariyer, kollu bariyer, bariyer montajı, araç giriş kontrol, park bariyeri, bariyer sistemi fiyat, uzaktan kumandalı bariyer, fotoselli bariyer" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Mantar Bariyer, Road Blocker ve Tuzak Kapanlar | Mika Teknoloji Bariyer Sistemleri" />
        <meta property="og:description" content="Profesyonel bariyer sistemleri: Otopark bariyeri, hidrolik bariyer, road blocker. 2 yıl garanti. Keşif için bize ulaşın." />
        <meta property="og:type" content="product.group" />
        <meta property="og:url" content="https://mikateknoloji.com/urunler/bariyer-sistemleri" />
        <meta property="og:image" content="https://mikateknoloji.com/images/logos/mika-logo.jpg" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bariyer Sistemleri - Otopark Bariyeri & Hidrolik Bariyer" />
        <meta name="twitter:description" content="Bariyer sistemleri: otopark bariyeri, hidrolik bariyer, road blocker çözümleri. Keşif için bize ulaşın." />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Mika Teknoloji" />
        <meta name="publisher" content="Mika Teknoloji" />
        <meta name="geo.region" content="TR" />
        <meta name="geo.placename" content="İstanbul" />
        
        <link rel="canonical" href="https://mikateknoloji.com/urunler/bariyer-sistemleri" />
        
        {/* Structured Data - Product Schema */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        {/* Structured Data - Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        
        {/* Structured Data - FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Giris bandi: duz lacivert, yerel gercek urun gorseli */}
      <section className="bg-slate-900 pt-28 pb-12 lg:pt-32 lg:pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Mantar Bariyer, Road Blocker ve Tuzak Kapan Sistemleri
              </h1>
              <p className="text-lg text-slate-300 mb-8">
                Hidrolik mantar bariyer, road blocker yol kesici ve tuzak kapan sistemleri ile yüksek güvenlik
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" data-testid="button-hero-contact" onClick={handleContactClick}>
                  Teklif Alın
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button asChild size="lg" variant="outlineLight">
                  <a href="tel:+905467122296">0546 712 22 96</a>
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src="/images/bariyer/pt-dinamik-bariyer.jpg"
                alt="MT Dinamik otopark bariyeri ve ölçü çizimi"
                className="w-full h-56 sm:h-72 lg:h-80 object-contain p-4"
                width={800}
                height={569}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto divide-y divide-slate-200">
            {segments.map((segment, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={segment.id} className="py-10 first:pt-0 last:pb-0">
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 lg:gap-10`}>
                    {/* Görsel */}
                    <div className="lg:w-5/12">
                      <div className="bg-white rounded-lg flex items-center justify-center overflow-hidden border border-slate-200">
                        <img
                          src={segment.image}
                          alt={`${segment.title} - ${segment.subtitle}`}
                          className="w-full h-56 lg:h-72 object-contain p-4"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* İçerik */}
                    <div className="lg:w-7/12">
                      <h2 className="text-2xl font-bold text-slate-900 mb-1">{segment.title}</h2>
                      <p className="font-medium mb-3 text-slate-500">{segment.subtitle}</p>
                      <p className="text-slate-600 mb-5 leading-relaxed">{segment.description}</p>

                      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5 mb-6">
                        {/* Teknik Özellikler */}
                        {segment.specs.length > 0 && (
                          <div>
                            <h3 className="text-sm font-semibold text-slate-900 mb-2">Teknik Özellikler</h3>
                            <dl className="divide-y divide-slate-100 text-sm">
                              {segment.specs.map((spec, idx) => (
                                <div key={idx} className="flex justify-between gap-4 py-1.5">
                                  <dt className="text-slate-500">{spec.label}</dt>
                                  <dd className="font-semibold text-slate-900 text-right">{spec.value}</dd>
                                </div>
                              ))}
                            </dl>
                          </div>
                        )}

                        {/* Özellikler */}
                        <div>
                          <h3 className="text-sm font-semibold text-slate-900 mb-2">Özellikler</h3>
                          <ul className="space-y-1.5">
                            {segment.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm text-slate-600">
                                <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Detay Butonu */}
                      <Button asChild variant="default">
                        <Link href={segment.detailUrl}>
                          Detaylı Bilgi
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
              Bariyer Sistemleri Uygulama Alanları
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Profesyonel bariyer çözümlerimiz, farklı sektör ve alanlarda güvenli geçiş kontrolü sağlar
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
              {[
                { title: "Otopark ve Garajlar", desc: "AVM, rezidans, ofis ve site otoparkları için otomatik otopark bariyerleri", icon: SquareParking },
                { title: "Sanayi Tesisleri", desc: "Fabrika ve üretim tesislerinde araç giriş-çıkış kontrolü", icon: Factory },
                { title: "Alışveriş Merkezleri", desc: "Çok katlı otopark sistemleri ve vale hizmeti için bariyer çözümleri", icon: ShoppingCart },
                { title: "Askeri ve Resmi Kurumlar", desc: "Road blocker ve yüksek güvenlikli bariyer sistemleri", icon: ShieldCheck },
                { title: "Havalimanları", desc: "Terminal giriş-çıkış noktaları ve park alanları için hidrolik bariyerler", icon: Plane },
                { title: "Konut Siteleri", desc: "Rezidans, villa ve site girişleri için uzaktan kumandalı bariyerler", icon: Home },
                { title: "Oteller ve Tesisler", desc: "Misafir araç park kontrolü ve otopark yönetim sistemleri", icon: Hotel },
                { title: "Hastaneler", desc: "Acil servis ve doktor park alanları için özel bariyer çözümleri", icon: Hospital },
                { title: "Kamu Binaları", desc: "Belediye, valilik ve resmi kurumlar için güvenlik bariyerleri", icon: Landmark }
              ].map((area, index) => (
                <li key={index} className="flex gap-3">
                  <area.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-slate-900">{area.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{area.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
              Kurulum ve Montaj Süreci
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Profesyonel ekibimiz ile 4 adımda hızlı ve güvenli bariyer kurulumu
            </p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden">
              {[
                { step: "1", title: "Keşif ve Analiz", desc: "Yerinde keşif, ihtiyaç analizi ve ölçüm", time: "1 Gün" },
                { step: "2", title: "Proje ve Teklif", desc: "Detaylı proje planı ve uygun fiyat teklifi hazırlama", time: "1-2 Gün" },
                { step: "3", title: "Kurulum", desc: "Profesyonel montaj ekibi ile güvenli kurulum", time: "2-4 Saat" },
                { step: "4", title: "Test ve Eğitim", desc: "Sistem testleri ve kullanıcı eğitimi", time: "1 Saat" }
              ].map((item, index) => (
                <li key={index} className="bg-white p-5">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-400">{item.step}</span>
                    <span className="inline-flex items-center gap-1.5 text-slate-700 text-sm font-semibold">
                      <Clock className="w-4 h-4 text-primary" />
                      {item.time}
                    </span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
              Bariyer Sistemleri Karşılaştırma Tablosu
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              İhtiyacınıza en uygun bariyer sistemini seçmenize yardımcı olacak detaylı karşılaştırma
            </p>
            <div className="overflow-x-auto border border-slate-200 rounded-lg bg-white">
              <table className="w-full min-w-[640px] text-sm">
                <thead className="bg-slate-900">
                  <tr>
                    <th className="px-4 py-3 text-left text-white font-semibold">Özellik</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">PT Dinamik</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">PT PLUS</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Mantar Bariyer</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Road Blocker</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-700">Açılma Süresi</td>
                    <td className="px-4 py-3 text-center">3-5 sn</td>
                    <td className="px-4 py-3 text-center">7 sn</td>
                    <td className="px-4 py-3 text-center">3-5 sn</td>
                    <td className="px-4 py-3 text-center">4-6 sn</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-700">Kullanım Alanı</td>
                    <td className="px-4 py-3 text-center">Yoğun Trafik</td>
                    <td className="px-4 py-3 text-center">Standart</td>
                    <td className="px-4 py-3 text-center">Yüksek Güvenlik</td>
                    <td className="px-4 py-3 text-center">Kritik Noktalar</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-700">Kol Uzunluğu</td>
                    <td className="px-4 py-3 text-center">Değişken</td>
                    <td className="px-4 py-3 text-center">5,25 m</td>
                    <td className="px-4 py-3 text-center">-</td>
                    <td className="px-4 py-3 text-center">-</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-700">Tahrik Sistemi</td>
                    <td className="px-4 py-3 text-center">Elektrikli</td>
                    <td className="px-4 py-3 text-center">Elektrikli</td>
                    <td className="px-4 py-3 text-center">Hidrolik</td>
                    <td className="px-4 py-3 text-center">Hidrolik</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-700">Fiyat Aralığı</td>
                    <td className="px-4 py-3 text-center">Orta</td>
                    <td className="px-4 py-3 text-center">Düşük</td>
                    <td className="px-4 py-3 text-center">Yüksek</td>
                    <td className="px-4 py-3 text-center">Çok yüksek</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-700">Önerilen Kullanım</td>
                    <td className="px-4 py-3 text-center">AVM, Fabrika</td>
                    <td className="px-4 py-3 text-center">Site, Ofis</td>
                    <td className="px-4 py-3 text-center">Askeri, Resmi</td>
                    <td className="px-4 py-3 text-center">Havalimanı, Elçilik</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Bakım, destek ve garanti tek bölümde (eski "Neden Mika" kartları bu bilgilerin tekrarıydı) */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
              Garanti, Bakım ve Teknik Destek
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Bariyer sistemlerinizin uzun ömürlü ve kesintisiz çalışması için profesyonel destek
            </p>

            <dl className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden mb-10">
              {[
                { deger: "2 Yıl", baslik: "Garanti", metin: "Üretici garantisi kapsamında tüm parça ve işçilik" },
                { deger: "Satış Sonrası", baslik: "Destek", metin: "Telefon danışmanlığı ve teknik destek" },
                { deger: "24 Saat", baslik: "Müdahale", metin: "Arıza bildirimlerinde maksimum müdahale süresi" },
              ].map((g) => (
                <div key={g.baslik} className="bg-white p-6">
                  <dt className="text-sm font-semibold text-slate-500 mb-1">{g.baslik}</dt>
                  <dd className="text-2xl font-bold text-slate-900 mb-1">{g.deger}</dd>
                  <dd className="text-slate-600 text-sm">{g.metin}</dd>
                </div>
              ))}
            </dl>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-primary" />
                  Periyodik Bakım Hizmetleri
                </h3>
                <ul className="space-y-2">
                  {[
                    "3 aylık rutin kontrol ve bakım",
                    "Motor ve mekanik sistem kontrolü",
                    "Elektronik kart ve sensör testleri",
                    "Yağlama ve temizlik işlemleri",
                    "Güvenlik sistemleri kalibrasyonu",
                    "Detaylı bakım raporu sunumu"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Teknik Destek
                </h3>
                <ul className="space-y-2">
                  {[
                    "Acil arıza müdahale hizmeti",
                    "Telefon ve online teknik destek",
                    "Yedek parça temin garantisi",
                    "Yerinde tamir ve onarım",
                    "Uzaktan sistem kontrolü",
                    "Kullanıcı eğitim programları"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Bariyer sistemleri hakkında merak ettikleriniz
            </p>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map((faq, index) => (
                <div key={index} className="py-5">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Bariyer Sistemi Kurulumu İçin Teklif Alın
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Size en uygun bariyer sistemini seçmenizde ve kurulumunda yardımcı oluyoruz. Keşif ve detaylı fiyat teklifi için bize ulaşın.
            </p>
            <p className="text-slate-300 mb-8">
              <a href="tel:+905467122296" className="text-white font-semibold hover:underline">0546 712 22 96</a>
              <span className="mx-2 text-slate-500">·</span>
              <a href="mailto:info@mikateknoloji.com" className="hover:underline">info@mikateknoloji.com</a>
              <span className="mx-2 text-slate-500">·</span>
              İstanbul
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                data-testid="button-cta-contact"
                onClick={handleContactClick}
              >
                İletişime Geçin
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outlineLight"
                data-testid="button-cta-phone"
              >
                <a href="tel:+905467122296">Hemen Ara</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
