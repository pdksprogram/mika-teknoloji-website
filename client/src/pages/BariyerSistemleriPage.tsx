import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Zap, Settings, CheckCircle2, ArrowRight, Lock, Gauge, AlertTriangle, Phone, Mail, MapPin, Award, Users, TrendingUp, Wrench } from "lucide-react";
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
    id: "Q1",
    title: "PT Dinamik Bariyer Sistemi",
    subtitle: "Yüksek Hızlı Geçiş Kontrolü",
    description: "Hızlı açılma süresi ve dinamik yapısı ile yoğun trafiğe sahip alanlarda ideal çözüm sunar. Modern tasarımı ve güvenilir performansı ile otopark ve geçiş noktalarında mükemmel performans sağlar.",
    image: "https://betaper.com.tr/bariyer-sistemleri/pt-dinamik-bariyerler.jpg",
    gradient: "from-blue-600 via-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 via-white to-cyan-50",
    icon: Zap,
    features: [
      "Hızlı açılma mekanizması",
      "Dinamik yapı tasarımı",
      "Yoğun trafik uyumlu",
      "Güvenilir performans",
      "Kolay kurulum",
      "Uzun ömürlü kullanım"
    ],
    specs: [
      { label: "Açılma Süresi", value: "3-5 saniye" },
      { label: "Kullanım Alanı", value: "Yoğun Trafik Noktaları" },
      { label: "Kontrol Sistemi", value: "Otomatik/Manuel" },
      { label: "Güvenlik", value: "Fotosel Korumalı" }
    ]
  },
  {
    id: "Q2",
    title: "PT PLUS Bariyer Sistemi",
    subtitle: "Orta Seviye Güvenlik Çözümü",
    description: "Orta seviye güvenlik ihtiyaçları için ideal olan PT PLUS bariyer sistemi, kolay montaj ve güvenilir performans sunar. 5,25 metre ledli kol uzunluğu ile geniş geçiş alanlarında kullanım için tasarlanmıştır.",
    image: "https://betaper.com.tr/bariyer-sistemleri/ptplus-bariyersistemi.jpg",
    gradient: "from-green-600 via-green-500 to-emerald-500",
    bgGradient: "from-green-50 via-white to-emerald-50",
    icon: CheckCircle2,
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
    title: "PT Genius Bariyer Sistemi",
    subtitle: "Akıllı Kontrol ve Yönetim",
    description: "İleri teknoloji ile donatılmış PT Genius bariyer sistemi, akıllı kontrol özellikleri ve entegrasyon kabiliyeti ile öne çıkar. Gelişmiş sensör teknolojisi ve otomatik ayar özellikleri ile kusursuz performans sunar.",
    image: "https://betaper.com.tr/bariyer-sistemleri/ptgenius-bariyersistemi.jpg",
    gradient: "from-red-600 via-red-500 to-rose-500",
    bgGradient: "from-red-50 via-white to-rose-50",
    icon: Settings,
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
    title: "PT Guard Bariyer Sistemi",
    subtitle: "Yüksek Güvenlik ve Dayanıklılık",
    description: "Maksimum güvenlik gerektiren noktalarda kullanılmak üzere tasarlanan PT Guard bariyer sistemi, üstün dayanıklılık ve güvenilirlik sunar. Askeri standartlarda üretilmiş, yüksek darbe emilimi özellikli yapısı ile kritik güvenlik noktalarında tercih edilir.",
    image: "https://betaper.com.tr/bariyer-sistemleri/pt-guard-bariyerler.jpg",
    gradient: "from-indigo-600 via-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 via-white to-purple-50",
    icon: Shield,
    features: [
      "Yüksek dayanıklılık",
      "Askeri standart üretim",
      "Darbe emilim sistemi",
      "Maksimum güvenlik",
      "Uzun ömür garantisi",
      "Minimum bakım gereksinimi"
    ],
    specs: [
      { label: "Güvenlik Seviyesi", value: "Yüksek Seviye" },
      { label: "Dayanıklılık", value: "Askeri Standart" },
      { label: "Darbe Emilimi", value: "Maksimum Koruma" },
      { label: "Kullanım Alanı", value: "Kritik Noktalar" }
    ]
  },
  {
    id: "Q5",
    title: "Tuzaklar & Kapanlar",
    subtitle: "Yeraltı Güvenlik Sistemleri",
    description: "Yeraltına gömülen hidrolik tuzak sistemleri, görünmeyen ancak son derece etkili güvenlik çözümleri sunar. Acil durumlarda otomatik aktive olan bu sistemler, yetkisiz araç girişlerini engellemek için tasarlanmıştır.",
    image: "https://betaper.com.tr/bariyer-sistemleri/tuzaklar-kapanlar.jpg",
    gradient: "from-amber-600 via-amber-500 to-yellow-500",
    bgGradient: "from-amber-50 via-white to-yellow-50",
    icon: AlertTriangle,
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
      { label: "Güvenlik", value: "Maksimum Seviye" }
    ]
  },
  {
    id: "Q6",
    title: "PT Mantar Bariyer (Hidrolik)",
    subtitle: "Hidrolik Yükselen Bariyer Sistemi",
    description: "Yüksek güvenlik ihtiyacı duyulan noktalarda araç trafiğini engelleyecek şekilde tasarlanmış, 304 paslanmaz çelik yapılı hidrolik bariyer sistemi. PLC kontrol sistemi ve 100 bar hidrolik güç ile maksimum performans sağlar.",
    image: "https://betaper.com.tr/bariyer-sistemleri/mantar-bariyerler.jpg",
    gradient: "from-violet-600 via-violet-500 to-purple-500",
    bgGradient: "from-violet-50 via-white to-purple-50",
    icon: Lock,
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
    subtitle: "Terör Önleme ve Maksimum Güvenlik",
    description: "Terör eylemlerine karşı tasarlanan, elektronik kontrollü hidrolik yol kesici sistem. Yüksek dayanıklılık ve güvenilirlik özelliği ile kritik noktalarda kullanılır. 4 adet güneş enerjili LED ile gece görünürlüğü sağlanmıştır.",
    image: "https://betaper.com.tr/bariyer-sistemleri/roadblocker.jpg",
    gradient: "from-cyan-600 via-cyan-500 to-blue-500",
    bgGradient: "from-cyan-50 via-white to-blue-50",
    icon: Gauge,
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
    question: "Bariyer sistemi nasıl seçilir?",
    answer: "Bariyer seçiminde kullanım alanı, geçiş sıklığı, güvenlik seviyesi ve kol uzunluğu göz önünde bulundurulmalıdır. Yoğun trafikli alanlarda PT Dinamik, yüksek güvenlik gerektiren noktalarda Road Blocker veya Mantar Bariyer tercih edilmelidir."
  },
  {
    question: "Otopark bariyeri fiyatları ne kadardır?",
    answer: "Bariyer fiyatları model, özellikler ve kurulum gereksinimlerine göre değişiklik gösterir. Detaylı fiyat teklifi için bizimle iletişime geçebilirsiniz. Ücretsiz keşif ve montaj danışmanlığı sunuyoruz."
  },
  {
    question: "Bariyer kurulumu ne kadar sürer?",
    answer: "Standart bir bariyer kurulumu 2-4 saat arasında tamamlanır. Yeraltı sistemleri ve özel uygulamalar için süre değişebilir. Profesyonel ekibimiz hızlı ve güvenli montaj sağlar."
  },
  {
    question: "Hidrolik bariyer mi yoksa elektrikli bariyer mi?",
    answer: "Hidrolik bariyerler daha yüksek dayanıklılık ve güç sunarken, elektrikli bariyerler daha ekonomik ve bakımı kolaydır. Yüksek güvenlik gerektiren alanlarda hidrolik, standart kullanımda elektrikli tercih edilebilir."
  },
  {
    question: "Bariyer sistemleri hangi garanti kapsamındadır?",
    answer: "Tüm bariyer sistemlerimiz 2 yıl üretici garantisi ile sunulmaktadır. Ayrıca periyodik bakım hizmetleri ve 7/24 teknik destek sağlıyoruz."
  },
  {
    question: "Road Blocker sistemi nedir ve nerede kullanılır?",
    answer: "Road Blocker, terör saldırılarına karşı maksimum koruma sağlayan hidrolik yol kesici sistemdir. Askeri tesisler, elçilikler, havalimanları ve kritik altyapı tesislerinde kullanılır."
  }
];

const benefits = [
  {
    icon: Award,
    title: "ISO 9001 Belgeli",
    description: "Uluslararası kalite standartlarına uygun üretim"
  },
  {
    icon: Users,
    title: "Uzman Ekip",
    description: "15+ yıl tecrübeli kurulum ve bakım kadrosu"
  },
  {
    icon: TrendingUp,
    title: "Yüksek Performans",
    description: "7/24 kesintisiz çalışma garantisi"
  },
  {
    icon: Wrench,
    title: "Teknik Destek",
    description: "Ömür boyu ücretsiz danışmanlık hizmeti"
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Bariyer Sistemleri",
  "description": "Otopark bariyerleri, hidrolik bariyer, mantar bariyer, road blocker ve güvenlik bariyer sistemleri. Yüksek kaliteli araç giriş kontrol çözümleri.",
  "brand": {
    "@type": "Brand",
    "name": "Mika Teknoloji"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "156"
  },
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
        <title>Bariyer Sistemleri - Otopark Bariyeri, Hidrolik Bariyer, Road Blocker 2025 | Mika Teknoloji</title>
        <meta name="description" content="✅ Profesyonel bariyer sistemleri: Otopark bariyeri, hidrolik mantar bariyer, road blocker, PT PLUS ve dinamik bariyer çözümleri. ISO 9001 belgeli, 2 yıl garanti, ücretsiz keşif. İstanbul'da en iyi bariyer fiyatları!" />
        <meta name="keywords" content="bariyer sistemleri, otopark bariyeri, hidrolik bariyer, mantar bariyer, road blocker, güvenlik bariyeri, PT PLUS bariyer, dinamik bariyer, tuzak sistemleri, bariyer fiyatları, otopark bariyeri kurulumu, otomatik bariyer, kollu bariyer, bariyer montajı, araç giriş kontrol, park bariyeri, bariyer sistemi fiyat, uzaktan kumandalı bariyer, fotoselli bariyer" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Bariyer Sistemleri - Otopark Bariyeri & Hidrolik Bariyer | Mika Teknoloji" />
        <meta property="og:description" content="Profesyonel bariyer sistemleri: Otopark bariyeri, hidrolik bariyer, road blocker. ISO 9001 belgeli, 2 yıl garanti, ücretsiz keşif!" />
        <meta property="og:type" content="product.group" />
        <meta property="og:url" content="https://mikateknoloji.com/urunler/bariyer-sistemleri" />
        <meta property="og:image" content="https://mikateknoloji.com/assets/bariyer-sistemleri-og.jpg" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bariyer Sistemleri - Otopark Bariyeri & Hidrolik Bariyer" />
        <meta name="twitter:description" content="ISO 9001 belgeli bariyer sistemleri. Otopark bariyeri, hidrolik bariyer, road blocker çözümleri. Ücretsiz keşif!" />
        
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

      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-primary/20 px-6 py-3 rounded-full border border-primary/30 mb-8">
              <Shield className="w-5 h-5 mr-3 text-primary" />
              <span className="text-primary font-semibold text-sm tracking-wider uppercase">Güvenlik Sistemleri</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Bariyer Sistemleri
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed mb-12">
              Otopark bariyeri, hidrolik mantar bariyer, road blocker ve güvenlik bariyer sistemleri. 
              2 yıl garanti, ISO 9001 belgeli, profesyonel kurulum hizmetiyle tam güvenlik.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                data-testid="button-contact"
                onClick={handleContactClick}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg group"
              >
                Ücretsiz Teklif Alın
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                data-testid="button-catalog"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg"
              >
                Ürün Kataloğu İndir
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto" {...fadeInUp}>
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Yüksek Güvenlik</h3>
              <p className="text-slate-600 text-sm">Dayanıklı yapı ve güvenilir sistemler</p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Hızlı Geçiş</h3>
              <p className="text-slate-600 text-sm">3-7 saniye açılma süresi</p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Otomatik Kontrol</h3>
              <p className="text-slate-600 text-sm">Uzaktan kumanda ve entegrasyon</p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Kolay Montaj</h3>
              <p className="text-slate-600 text-sm">Profesyonel kurulum desteği</p>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Bariyer Sistem Çeşitleri
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              İhtiyacınıza uygun profesyonel bariyer sistemleri ile güvenliğinizi maksimuma çıkarın
            </p>
          </motion.div>

          <div className="space-y-24 max-w-7xl mx-auto">
            {segments.map((segment, index) => {
              const isEven = index % 2 === 0;
              const Icon = segment.icon;
              
              return (
                <motion.div 
                  key={segment.id} 
                  {...fadeInUp}
                  className="relative"
                >
                  <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 bg-white overflow-hidden group">
                    <CardContent className="p-0">
                      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                        <div className={`lg:w-1/2 relative bg-gradient-to-br ${segment.bgGradient} p-8 lg:p-12 flex items-center justify-center min-h-[400px]`}>
                          <div className={`absolute inset-0 bg-gradient-to-br ${segment.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                          
                          <div className="relative w-full max-w-md">
                            <div className={`absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br ${segment.gradient} opacity-20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700`}></div>
                            
                            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/60 group-hover:scale-105 transition-transform duration-500">
                              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                <img 
                                  src={segment.image} 
                                  alt={`${segment.title} - ${segment.subtitle} - Mika Teknoloji profesyonel bariyer çözümleri`}
                                  className="w-full h-80 object-cover"
                                  loading="lazy"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${segment.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                              </div>
                              
                              <div className={`absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br ${segment.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                                <Icon className="w-10 h-10 text-white" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                          <div className="space-y-6">
                            <div className={`inline-flex items-center bg-gradient-to-r ${segment.gradient} bg-opacity-10 px-4 py-2 rounded-full border border-current/20`}>
                              <div className={`w-2 h-2 bg-gradient-to-r ${segment.gradient} rounded-full mr-3 animate-pulse`}></div>
                              <span className={`bg-gradient-to-r ${segment.gradient} bg-clip-text text-transparent font-bold text-sm tracking-wider uppercase`}>
                                {segment.id}
                              </span>
                            </div>

                            <div>
                              <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-3 leading-tight">
                                {segment.title}
                              </h3>
                              <p className={`text-lg font-semibold bg-gradient-to-r ${segment.gradient} bg-clip-text text-transparent mb-4`}>
                                {segment.subtitle}
                              </p>
                              <div className={`w-20 h-1 bg-gradient-to-r ${segment.gradient} rounded-full`}></div>
                            </div>

                            <p className="text-slate-700 leading-relaxed text-lg">
                              {segment.description}
                            </p>

                            <div className="bg-slate-50 rounded-2xl p-6">
                              <h4 className="font-bold text-lg text-slate-800 mb-4 flex items-center">
                                <Settings className="w-5 h-5 mr-2" />
                                Teknik Özellikler
                              </h4>
                              <motion.div 
                                className="grid grid-cols-1 gap-3"
                                variants={staggerContainer}
                                initial="initial"
                                whileInView="whileInView"
                                viewport={{ once: true }}
                              >
                                {segment.specs.map((spec, idx) => (
                                  <motion.div 
                                    key={idx} 
                                    variants={fadeInUp}
                                    className="flex justify-between items-center text-sm border-b border-slate-200 pb-2 last:border-0"
                                  >
                                    <span className="text-slate-600 font-medium">{spec.label}:</span>
                                    <span className="text-slate-800 font-semibold">{spec.value}</span>
                                  </motion.div>
                                ))}
                              </motion.div>
                            </div>

                            <div>
                              <h4 className="font-bold text-lg text-slate-800 mb-4">Özellikler</h4>
                              <motion.div 
                                className="grid grid-cols-1 md:grid-cols-2 gap-3"
                                variants={staggerContainer}
                                initial="initial"
                                whileInView="whileInView"
                                viewport={{ once: true }}
                              >
                                {segment.features.map((feature, idx) => (
                                  <motion.div 
                                    key={idx} 
                                    variants={fadeInUp}
                                    className="flex items-start space-x-2"
                                  >
                                    <CheckCircle2 className={`w-5 h-5 bg-gradient-to-r ${segment.gradient} bg-clip-text text-transparent flex-shrink-0 mt-0.5`} style={{
                                      WebkitTextFillColor: 'transparent',
                                      backgroundClip: 'text'
                                    }} />
                                    <span className="text-slate-700 text-sm">{feature}</span>
                                  </motion.div>
                                ))}
                              </motion.div>
                            </div>
                          </div>
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
              { title: "Otopark ve Garajlar", desc: "AVM, rezidans, ofis ve site otoparkları için otomatik otopark bariyerleri", icon: "🅿️" },
              { title: "Sanayi Tesisleri", desc: "Fabrika ve üretim tesislerinde araç giriş-çıkış kontrolü", icon: "🏭" },
              { title: "Alışveriş Merkezleri", desc: "Çok katlı otopark sistemleri ve vale hizmeti için bariyer çözümleri", icon: "🛒" },
              { title: "Askeri ve Resmi Kurumlar", desc: "Road blocker ve yüksek güvenlikli bariyer sistemleri", icon: "🛡️" },
              { title: "Havalimanları", desc: "Terminal giriş-çıkış noktaları ve park alanları için hidrolik bariyerler", icon: "✈️" },
              { title: "Konut Siteleri", desc: "Rezidans, villa ve site girişleri için uzaktan kumandalı bariyerler", icon: "🏘️" },
              { title: "Oteller ve Tesisler", desc: "Misafir araç park kontrolü ve otopark yönetim sistemleri", icon: "🏨" },
              { title: "Hastaneler", desc: "Acil servis ve doktor park alanları için özel bariyer çözümleri", icon: "🏥" },
              { title: "Kamu Binaları", desc: "Belediye, valilik ve resmi kurumlar için güvenlik bariyerleri", icon: "🏛️" }
            ].map((area, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/20 transition-all h-full">
                  <div className="text-5xl mb-4">{area.icon}</div>
                  <h3 className="font-bold text-xl mb-3 text-white">{area.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{area.desc}</p>
                </Card>
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
              { step: "1", title: "Keşif ve Analiz", desc: "Ücretsiz yerinde keşif, ihtiyaç analizi ve ölçüm", time: "1 Gün" },
              { step: "2", title: "Proje ve Teklif", desc: "Detaylı proje planı ve uygun fiyat teklifi hazırlama", time: "1-2 Gün" },
              { step: "3", title: "Kurulum", desc: "Profesyonel montaj ekibi ile güvenli kurulum", time: "2-4 Saat" },
              { step: "4", title: "Test ve Eğitim", desc: "Sistem testleri ve kullanıcı eğitimi", time: "1 Saat" }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-slate-800">{item.title}</h3>
                    <p className="text-slate-600 text-sm mb-3">{item.desc}</p>
                    <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      ⏱️ {item.time}
                    </div>
                  </div>
                </Card>
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
                  <td className="px-6 py-4 text-center">⭐⭐⭐⭐</td>
                  <td className="px-6 py-4 text-center">⭐⭐⭐</td>
                  <td className="px-6 py-4 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="px-6 py-4 text-center">⭐⭐⭐⭐⭐</td>
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
                  <td className="px-6 py-4 text-center">💰💰💰</td>
                  <td className="px-6 py-4 text-center">💰💰</td>
                  <td className="px-6 py-4 text-center">💰💰💰💰</td>
                  <td className="px-6 py-4 text-center">💰💰💰💰💰</td>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div {...fadeInUp}>
              <Card className="border-0 shadow-xl p-8 h-full">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <Wrench className="w-8 h-8 text-primary mr-3" />
                  Periyodik Bakım Hizmetleri
                </h3>
                <ul className="space-y-4">
                  {[
                    "3 aylık rutin kontrol ve bakım",
                    "Motor ve mekanik sistem kontrolü",
                    "Elektronik kart ve sensör testleri",
                    "Yağlama ve temizlik işlemleri",
                    "Güvenlik sistemleri kalibrasyonu",
                    "Detaylı bakım raporu sunumu"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp}>
              <Card className="border-0 shadow-xl p-8 h-full bg-gradient-to-br from-primary/5 to-primary/10">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <Phone className="w-8 h-8 text-primary mr-3" />
                  7/24 Teknik Destek
                </h3>
                <ul className="space-y-4">
                  {[
                    "Acil arıza müdahale hizmeti",
                    "Telefon ve online teknik destek",
                    "Yedek parça temin garantisi",
                    "Yerinde tamir ve onarım",
                    "Uzaktan sistem kontrolü",
                    "Kullanıcı eğitim programları"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
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
            <Card className="border-0 shadow-xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Yıl Garanti</h3>
              <p className="text-slate-600">Üretici garantisi kapsamında tüm parça ve işçilik</p>
            </Card>

            <Card className="border-0 shadow-xl p-8 text-center bg-gradient-to-br from-primary to-primary/90 text-white">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                ∞
              </div>
              <h3 className="text-2xl font-bold mb-3">Ömür Boyu Destek</h3>
              <p className="text-white/90">Sınırsız telefon danışmanlığı ve teknik destek</p>
            </Card>

            <Card className="border-0 shadow-xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                24
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Saat İçinde</h3>
              <p className="text-slate-600">Arıza bildirimlerinde maksimum müdahale süresi</p>
            </Card>
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
              15 yılı aşkın tecrübemiz ve müşteri memnuniyeti odaklı hizmet anlayışımızla yanınızdayız
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
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-slate-800">{benefit.title}</h3>
                    <p className="text-slate-600 text-sm">{benefit.description}</p>
                  </Card>
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
              Ücretsiz keşif ve detaylı fiyat teklifi için hemen iletişime geçin.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center space-x-3 text-white">
                <Phone className="w-6 h-6 text-primary" />
                <span className="text-lg">(0212) 555 00 00</span>
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
                size="lg"
                variant="outline"
                data-testid="button-cta-phone"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-12 py-6 text-lg"
              >
                Hemen Ara
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
