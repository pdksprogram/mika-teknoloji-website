import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Settings, CheckCircle2, CheckCircle, ArrowRight, Lock, Gauge, AlertTriangle, Phone, Mail, MapPin, Award, Users, TrendingUp, Wrench, SquareParking, Factory, ShoppingCart, ShieldCheck, Plane, Home, Hotel, Hospital, Landmark } from "lucide-react";
import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

const segments = [
  {
    id: "Q2",
    title: "MT PLUS Bariyer Sistemi",
    subtitle: "Orta Seviye Güvenlik Çözümü",
    description: "Orta seviye güvenlik ihtiyaçları için ideal olan MT PLUS bariyer sistemi, kolay montaj ve güvenilir performans sunar. 5,25 metre ledli kol uzunluğu ile geniş geçiş alanlarında kullanım için tasarlanmıştır.",
    image: "https://betaper.com.tr/bariyer-sistemleri/ptplus-bariyersistemi.jpg",
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
    image: "https://betaper.com.tr/bariyer-sistemleri/ptgenius-bariyersistemi.jpg",
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
      { label: "Kontrol Tipi", value: "Akıllı PLC Kontrol" },
      { label: "Entegrasyon", value: "Tüm Sistemler" },
      { label: "Sensör", value: "Gelişmiş Algılama" },
      { label: "Yönetim", value: "Uzaktan Erişim" }
    ]
  },
  {
    id: "Q4",
    title: "MT Guard Bariyer Sistemi",
    subtitle: "Yüksek Güvenlik ve Dayanıklılık",
    description: "Yüksek güvenlik gerektiren noktalarda kullanılmak üzere tasarlanan MT Guard bariyer sistemi, üstün dayanıklılık ve güvenilirlik sunar. Yüksek darbe emilimi özellikli yapısı ile kritik güvenlik noktalarında tercih edilir.",
    image: "https://betaper.com.tr/bariyer-sistemleri/pt-guard-bariyerler.jpg",
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
    specs: [
      { label: "Güvenlik Seviyesi", value: "Yüksek Seviye" },
      { label: "Dayanıklılık", value: "Ağır Hizmet Tipi" },
      { label: "Darbe Emilimi", value: "Yüksek Koruma" },
      { label: "Kullanım Alanı", value: "Kritik Noktalar" }
    ]
  },
  {
    id: "Q5",
    title: "Tuzaklar & Kapanlar",
    subtitle: "Yeraltı Güvenlik Sistemleri",
    description: "Yeraltına gömülen hidrolik tuzak sistemleri, görünmeyen ancak son derece etkili güvenlik çözümleri sunar. Acil durumlarda otomatik aktive olan bu sistemler, yetkisiz araç girişlerini engellemek için tasarlanmıştır.",
    image: "https://betaper.com.tr/bariyer-sistemleri/tuzaklar-kapanlar.jpg",
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
      { label: "Tepki Süresi", value: "Anlık" },
      { label: "Güvenlik", value: "Yüksek" }
    ]
  },
  {
    id: "Q6",
    title: "MT Mantar Bariyer (Hidrolik)",
    subtitle: "Hidrolik Yükselen Bariyer Sistemi",
    description: "Yüksek güvenlik ihtiyacı duyulan noktalarda araç trafiğini engelleyecek şekilde tasarlanmış, 304 paslanmaz çelik yapılı hidrolik bariyer sistemi. PLC kontrol sistemi ve 100 bar hidrolik güç ile maksimum performans sağlar.",
    image: "https://betaper.com.tr/bariyer-sistemleri/mantar-bariyerler.jpg",
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
    image: "https://betaper.com.tr/bariyer-sistemleri/roadblocker.jpg",
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
      { label: "Kontrol", value: "Elektronik Kontrollü" },
      { label: "Yapı", value: "Yüksek Dayanıklılık" },
      { label: "Aydınlatma", value: "4 Adet Güneş Enerjili LED" },
      { label: "Koruma Seviyesi", value: "Terör Önleme" },
      { label: "Görünürlük", value: "Gece Görünürlüğü" }
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

const benefits = [
  {
    icon: Award,
    title: "2 Yıl Garanti",
    description: "Tüm bariyer sistemlerinde üretici garantisi"
  },
  {
    icon: Users,
    title: "Uzman Ekip",
    description: "Kurulum ve devreye alma desteği sağlanır"
  },
  {
    icon: TrendingUp,
    title: "Yüksek Performans",
    description: "Hidrolik ve elektromekanik bariyer seçenekleri"
  },
  {
    icon: Wrench,
    title: "Teknik Destek",
    description: "Kurulum sonrası teknik destek ve danışmanlık"
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
        <title>Bariyer Sistemleri: Mantar Bariyer, Road Blocker, Tuzak Kapanlar | Mika Teknoloji 2025</title>
        <meta name="description" content="Profesyonel bariyer sistemleri: Mantar bariyer, road blocker, tuzak kapanlar, otopark bariyeri ve hidrolik güvenlik sistemleri. 2 yıl garanti. Keşif için bize ulaşın." />
        <meta name="keywords" content="bariyer sistemleri, otopark bariyeri, hidrolik bariyer, mantar bariyer, road blocker, güvenlik bariyeri, PT PLUS bariyer, dinamik bariyer, tuzak sistemleri, bariyer fiyatları, otopark bariyeri kurulumu, otomatik bariyer, kollu bariyer, bariyer montajı, araç giriş kontrol, park bariyeri, bariyer sistemi fiyat, uzaktan kumandalı bariyer, fotoselli bariyer" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Mantar Bariyer, Road Blocker ve Tuzak Kapanlar | Mika Teknoloji Bariyer Sistemleri" />
        <meta property="og:description" content="Profesyonel bariyer sistemleri: Otopark bariyeri, hidrolik bariyer, road blocker. 2 yıl garanti. Keşif için bize ulaşın." />
        <meta property="og:type" content="product.group" />
        <meta property="og:url" content="https://mikateknoloji.com/urunler/bariyer-sistemleri" />
        <meta property="og:image" content="https://mikateknoloji.com/assets/bariyer-sistemleri-og.jpg" />
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

      <section className="pt-32 pb-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            {...fadeInUp}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-white/60 bg-white/50 backdrop-blur-sm p-3">
              <div className="aspect-video rounded-xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  disablePictureInPicture
                  poster="/test-frame.jpg"
                >
                  <source src="/bariyer-sistemleri.mp4" type="video/mp4" />
                  Tarayıcınız video oynatmayı desteklemiyor.
                </video>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Mantar Bariyer, Road Blocker ve Tuzak Kapan Sistemleri
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Hidrolik mantar bariyer, road blocker yol kesici ve tuzak kapan sistemleri ile yüksek güvenlik
            </p>
          </motion.div>

          <div className="space-y-16 max-w-7xl mx-auto">
            {segments.map((segment, index) => {
              const isEven = index % 2 === 0;
              const Icon = segment.icon;
              
              return (
                <motion.div 
                  key={segment.id} 
                  {...fadeInUp}
                  className="relative"
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 relative">
                    {/* Icon Badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <div className="relative">
                        <div className={`bg-gradient-to-r ${segment.gradient} text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl`}>
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4" />
                            <span>{segment.id}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}>
                        {/* Görsel */}
                        <div className="lg:w-1/2">
                          <div className="bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden border border-gray-200">
                            <img 
                              src={segment.image} 
                              alt={`${segment.title} - ${segment.subtitle}`}
                              className="w-full h-[400px] object-contain"
                              style={{ backgroundColor: '#ffffff', padding: '16px' }}
                              loading="lazy"
                            />
                          </div>
                        </div>

                        {/* İçerik */}
                        <div className="lg:w-1/2">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{segment.title}</h3>
                          <p className={`font-semibold mb-4 bg-gradient-to-r ${segment.gradient} bg-clip-text text-transparent`}>
                            {segment.subtitle}
                          </p>
                          <p className="text-gray-600 mb-6 leading-relaxed">{segment.description}</p>

                          {/* Teknik Özellikler */}
                          <div className="bg-gray-50 rounded-lg p-4 mb-6">
                            <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                              <Settings className="w-5 h-5 mr-2 text-primary" />
                              Teknik Özellikler
                            </h4>
                            <div className="space-y-2">
                              {segment.specs.map((spec, idx) => (
                                <div key={idx} className="flex justify-between text-sm">
                                  <span className="text-gray-600">{spec.label}:</span>
                                  <span className="font-semibold text-gray-900">{spec.value}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Özellikler */}
                          <ul className="space-y-2 mb-6">
                            {segment.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>

                          {/* Detay Butonu */}
                          <Link href={segment.detailUrl}>
                            <Button className="w-full" variant="default">
                              Detaylı Bilgi
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Bariyer Sistemleri Uygulama Alanları
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Profesyonel bariyer çözümlerimiz, farklı sektör ve alanlarda güvenli geçiş kontrolü sağlar
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              { title: "Otopark ve Garajlar", desc: "AVM, rezidans, ofis ve site otoparkları için otomatik otopark bariyerleri", icon: SquareParking, gradient: "from-slate-900 to-slate-800" },
              { title: "Sanayi Tesisleri", desc: "Fabrika ve üretim tesislerinde araç giriş-çıkış kontrolü", icon: Factory, gradient: "from-slate-900 to-slate-800" },
              { title: "Alışveriş Merkezleri", desc: "Çok katlı otopark sistemleri ve vale hizmeti için bariyer çözümleri", icon: ShoppingCart, gradient: "from-slate-900 to-slate-800" },
              { title: "Askeri ve Resmi Kurumlar", desc: "Road blocker ve yüksek güvenlikli bariyer sistemleri", icon: ShieldCheck, gradient: "from-slate-900 to-slate-800" },
              { title: "Havalimanları", desc: "Terminal giriş-çıkış noktaları ve park alanları için hidrolik bariyerler", icon: Plane, gradient: "from-slate-900 to-slate-800" },
              { title: "Konut Siteleri", desc: "Rezidans, villa ve site girişleri için uzaktan kumandalı bariyerler", icon: Home, gradient: "from-slate-900 to-slate-800" },
              { title: "Oteller ve Tesisler", desc: "Misafir araç park kontrolü ve otopark yönetim sistemleri", icon: Hotel, gradient: "from-slate-900 to-slate-800" },
              { title: "Hastaneler", desc: "Acil servis ve doktor park alanları için özel bariyer çözümleri", icon: Hospital, gradient: "from-primary to-slate-800" },
              { title: "Kamu Binaları", desc: "Belediye, valilik ve resmi kurumlar için güvenlik bariyerleri", icon: Landmark, gradient: "from-slate-500 to-slate-600" }
            ].map((area, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="group relative">
                  <Card className="relative bg-white border border-slate-200 p-8 h-full rounded-2xl hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <area.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-slate-800">
                      {area.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{area.desc}</p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Kurulum ve Montaj Süreci
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Profesyonel ekibimiz ile 4 adımda hızlı ve güvenli bariyer kurulumu
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              { step: "1", title: "Keşif ve Analiz", desc: "Yerinde keşif, ihtiyaç analizi ve ölçüm", time: "1 Gün", color: "blue" },
              { step: "2", title: "Proje ve Teklif", desc: "Detaylı proje planı ve uygun fiyat teklifi hazırlama", time: "1-2 Gün", color: "purple" },
              { step: "3", title: "Kurulum", desc: "Profesyonel montaj ekibi ile güvenli kurulum", time: "2-4 Saat", color: "green" },
              { step: "4", title: "Test ve Eğitim", desc: "Sistem testleri ve kullanıcı eğitimi", time: "1 Saat", color: "orange" }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="group relative h-full">
                  <div className={`absolute -inset-1 bg-gradient-to-br from-${item.color}-400 to-${item.color}-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500`}></div>
                  <Card className="relative bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200/50 p-8 hover:border-primary/30 transition-all duration-500 h-full rounded-3xl group-hover:-translate-y-2">
                    <div className="text-center relative">
                      <div className={`relative inline-block mb-6`}>
                        <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                        <div className={`relative w-20 h-20 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                          <span className="text-white text-3xl font-bold">{item.step}</span>
                        </div>
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-slate-800">{item.title}</h3>
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed">{item.desc}</p>
                      <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-${item.color}-50 to-${item.color}-100 text-${item.color}-700 px-4 py-2 rounded-full text-sm font-semibold border border-${item.color}-200`}>
                        <Clock className="w-4 h-4" />
                        {item.time}
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Bariyer Sistemleri Karşılaştırma Tablosu
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              İhtiyacınıza en uygun bariyer sistemini seçmenize yardımcı olacak detaylı karşılaştırma
            </p>
          </motion.div>

          <motion.div className="max-w-6xl mx-auto overflow-x-auto" {...fadeInUp}>
            <table className="w-full bg-white shadow-2xl rounded-2xl overflow-hidden">
              <thead className="bg-gradient-to-r from-slate-800 to-slate-700">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-bold">Özellik</th>
                  <th className="px-6 py-4 text-center text-white font-bold">PT Dinamik</th>
                  <th className="px-6 py-4 text-center text-white font-bold">PT PLUS</th>
                  <th className="px-6 py-4 text-center text-white font-bold">Mantar Bariyer</th>
                  <th className="px-6 py-4 text-center text-white font-bold">Road Blocker</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-700">Açılma Süresi</td>
                  <td className="px-6 py-4 text-center">3-5 sn</td>
                  <td className="px-6 py-4 text-center">7 sn</td>
                  <td className="px-6 py-4 text-center">3-5 sn</td>
                  <td className="px-6 py-4 text-center">Değişken</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-700">Güvenlik Seviyesi</td>
                  <td className="px-6 py-4 text-center">4/5</td>
                  <td className="px-6 py-4 text-center">3/5</td>
                  <td className="px-6 py-4 text-center">5/5</td>
                  <td className="px-6 py-4 text-center">5/5</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-700">Kullanım Alanı</td>
                  <td className="px-6 py-4 text-center text-sm">Yoğun Trafik</td>
                  <td className="px-6 py-4 text-center text-sm">Standart</td>
                  <td className="px-6 py-4 text-center text-sm">Yüksek Güvenlik</td>
                  <td className="px-6 py-4 text-center text-sm">Kritik Noktalar</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-700">Kol Uzunluğu</td>
                  <td className="px-6 py-4 text-center">Değişken</td>
                  <td className="px-6 py-4 text-center">5,25 m</td>
                  <td className="px-6 py-4 text-center">-</td>
                  <td className="px-6 py-4 text-center">-</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-700">Tahrik Sistemi</td>
                  <td className="px-6 py-4 text-center text-sm">Elektrikli</td>
                  <td className="px-6 py-4 text-center text-sm">Elektrikli</td>
                  <td className="px-6 py-4 text-center text-sm">Hidrolik</td>
                  <td className="px-6 py-4 text-center text-sm">Hidrolik</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-700">Fiyat Aralığı</td>
                  <td className="px-6 py-4 text-center">Orta</td>
                  <td className="px-6 py-4 text-center">Düşük</td>
                  <td className="px-6 py-4 text-center">Yüksek</td>
                  <td className="px-6 py-4 text-center">Çok yüksek</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-700">Önerilen Kullanım</td>
                  <td className="px-6 py-4 text-center text-sm">AVM, Fabrika</td>
                  <td className="px-6 py-4 text-center text-sm">Site, Ofis</td>
                  <td className="px-6 py-4 text-center text-sm">Askeri, Resmi</td>
                  <td className="px-6 py-4 text-center text-sm">Havalimanı, Elçilik</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Bakım ve Teknik Destek
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Bariyer sistemlerinizin uzun ömürlü ve kesintisiz çalışması için profesyonel destek
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div {...fadeInUp}>
              <div className="group relative h-full">
                <div className="absolute -inset-1 bg-slate-900 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <Card className="relative border-2 border-green-100 hover:border-green-200 p-10 h-full rounded-3xl bg-white group-hover:-translate-y-1 transition-all duration-500">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Wrench className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 ml-4">Periyodik Bakım Hizmetleri</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "3 aylık rutin kontrol ve bakım",
                      "Motor ve mekanik sistem kontrolü",
                      "Elektronik kart ve sensör testleri",
                      "Yağlama ve temizlik işlemleri",
                      "Güvenlik sistemleri kalibrasyonu",
                      "Detaylı bakım raporu sunumu"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3 group/item">
                        <div className="w-6 h-6 bg-slate-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-slate-700 group-hover/item:text-slate-900 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </motion.div>

            <motion.div {...fadeInUp}>
              <div className="group relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary to-slate-800 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-500"></div>
                <Card className="relative border-0 p-10 h-full rounded-3xl bg-gradient-to-br from-primary via-primary to-slate-800 text-white group-hover:-translate-y-1 transition-all duration-500 shadow-2xl">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-white/30">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold ml-4">Teknik Destek</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Acil arıza müdahale hizmeti",
                      "Telefon ve online teknik destek",
                      "Yedek parça temin garantisi",
                      "Yerinde tamir ve onarım",
                      "Uzaktan sistem kontrolü",
                      "Kullanıcı eğitim programları"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3 group/item">
                        <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/30 group-hover/item:scale-110 transition-transform">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white/95 group-hover/item:text-white transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Garanti ve Servis Kapsamı
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tüm bariyer sistemlerimiz kapsamlı garanti ve servis hizmetleri ile birlikte sunulmaktadır
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" {...fadeInUp}>
            <div className="group relative">
              <div className="absolute -inset-1 bg-slate-900 rounded-3xl blur-xl opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <Card className="relative border-0 p-10 text-center bg-white rounded-3xl group-hover:-translate-y-2 transition-all duration-500 shadow-xl">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-slate-900 rounded-3xl blur-2xl opacity-40"></div>
                  <div className="relative w-24 h-24 bg-slate-900 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <span className="text-white text-4xl font-bold">2</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-3">Yıl Garanti</h3>
                <p className="text-slate-600">Üretici garantisi kapsamında tüm parça ve işçilik</p>
                <div className="absolute bottom-0 left-0 h-2 bg-primary w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl"></div>
              </Card>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary to-slate-800 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <Card className="relative border-0 p-10 text-center bg-gradient-to-br from-primary via-primary to-slate-800 rounded-3xl text-white group-hover:scale-105 transition-all duration-500 shadow-2xl">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl"></div>
                  <div className="relative w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-2xl border-2 border-white/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <span className="text-5xl font-bold">∞</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-3">Satış Sonrası Destek</h3>
                <p className="text-white/95">Telefon danışmanlığı ve teknik destek</p>
              </Card>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-slate-900 rounded-3xl blur-xl opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <Card className="relative border-0 p-10 text-center bg-white rounded-3xl group-hover:-translate-y-2 transition-all duration-500 shadow-xl">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-slate-900 rounded-3xl blur-2xl opacity-40"></div>
                  <div className="relative w-24 h-24 bg-slate-900 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <span className="text-white text-4xl font-bold">24</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-3">Saat İçinde</h3>
                <p className="text-slate-600">Arıza bildirimlerinde maksimum müdahale süresi</p>
                <div className="absolute bottom-0 left-0 h-2 bg-primary w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl"></div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Neden Mika Teknoloji?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Keşiften bakıma kadar müşteri odaklı hizmet anlayışımızla yanınızdayız
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const gradients = [
                "from-slate-900 to-slate-800",
                "from-slate-900 to-slate-800", 
                "from-slate-900 to-slate-800",
                "from-slate-900 to-slate-800"
              ];
              const gradient = gradients[index % gradients.length];
              
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <div className="group relative h-full">
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>
                    <Card className="relative bg-white border-0 p-8 hover:bg-slate-50 transition-all duration-500 h-full rounded-3xl group-hover:-translate-y-1">
                      <div className="text-center">
                        <div className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-slate-800">{benefit.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                      <div className={`absolute bottom-0 left-0 h-1.5 bg-gradient-to-r ${gradient} w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl`}></div>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Bariyer sistemleri hakkında merak ettikleriniz
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-start">
                      <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                        ?
                      </span>
                      {faq.question}
                    </h3>
                    <p className="text-slate-600 leading-relaxed ml-12">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="max-w-4xl mx-auto text-center" {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Bariyer Sistemi Kurulumu İçin Ücretsiz Teklif Alın
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Profesyonel ekibimiz, size en uygun bariyer sistemini seçmenizde ve kurulumunda yardımcı olmaya hazır. 
              Keşif ve detaylı fiyat teklifi için bize ulaşın.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center space-x-3 text-white">
                <Phone className="w-6 h-6 text-primary" />
                <a href="tel:+905467122296" className="text-lg hover:underline">0546 712 22 96</a>
              </div>
              <div className="flex items-center justify-center space-x-3 text-white">
                <Mail className="w-6 h-6 text-primary" />
                <span className="text-lg">info@mikateknoloji.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-white">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="text-lg">İstanbul</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                data-testid="button-cta-contact"
                onClick={handleContactClick}
                className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg group"
              >
                İletişime Geçin
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outlineLight"
                data-testid="button-cta-phone"
                className="px-12 py-6 text-lg"
              >
                <a href="tel:+905467122296">Hemen Ara</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
