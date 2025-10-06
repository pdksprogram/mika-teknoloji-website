import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Zap, Settings, CheckCircle2, ArrowRight, Lock, Gauge, AlertTriangle } from "lucide-react";
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

export default function BariyerSistemleriPage() {
  const handleContactClick = () => {
    trackEvent('Contact Request', 'bariyer_contact', 'Bariyer Sistemleri Page - Contact Button');
    window.location.href = '/iletisim';
  };

  return (
    <>
      <Helmet>
        <title>Bariyer Sistemleri - Otopark Bariyerleri ve Güvenlik Sistemleri | Mika Teknoloji</title>
        <meta name="description" content="Hidrolik bariyer, mantar bariyer, road blocker ve otopark bariyer sistemleri. Yüksek güvenlikli araç giriş kontrol çözümleri. ISO 9001 belgeli Mika Teknoloji kalitesi." />
        <meta name="keywords" content="bariyer sistemleri, otopark bariyeri, hidrolik bariyer, mantar bariyer, road blocker, araç giriş kontrol, güvenlik bariyeri, PT PLUS bariyer, dinamik bariyer, tuzak sistemleri" />
        
        <meta property="og:title" content="Bariyer Sistemleri - Otopark Bariyerleri ve Güvenlik Sistemleri | Mika Teknoloji" />
        <meta property="og:description" content="Hidrolik bariyer, mantar bariyer, road blocker ve otopark bariyer sistemleri. Yüksek güvenlikli araç giriş kontrol çözümleri." />
        <meta property="og:type" content="product" />
        
        <link rel="canonical" href="https://mikateknoloji.com/urunler/bariyer-sistemleri" />
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
              Otopark ve güvenlik alanları için profesyonel bariyer çözümleri. 
              Hidrolik, elektrikli ve road blocker sistemleri ile tam güvenlik.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                data-testid="button-contact"
                onClick={handleContactClick}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg group"
              >
                Teklif Alın
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                data-testid="button-catalog"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg"
              >
                Ürün Kataloğu
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
                                  alt={segment.title}
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

      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="max-w-4xl mx-auto text-center" {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Bariyer Sistemi Kurulumu için Teklif Alın
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Profesyonel ekibimiz, size en uygun bariyer sistemini seçmenizde ve kurulumunda yardımcı olmaya hazır. 
              Ücretsiz keşif ve teklif için hemen iletişime geçin.
            </p>
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
                (0212) 555 00 00
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
