import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Zap, Settings, CheckCircle2, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const products = [
  {
    id: 1,
    name: "PT PLUS Bariyer Sistemi",
    description: "Orta seviye güvenlik ihtiyaçları için ideal olan PT PLUS bariyer sistemi, kolay montaj ve güvenilir performans sunar.",
    specs: [
      { label: "Kontrol/Çalışma Voltajı", value: "220 V 50 Hz" },
      { label: "Güç Tüketimi", value: "24 V DC" },
      { label: "Açılma Süresi", value: "7 saniye" },
      { label: "Kol Uzunluğu", value: "5,25 metre" },
      { label: "Koruma Derecesi", value: "IP 54" },
      { label: "Çalışma Sıcaklığı", value: "-20°C - +60°C" },
      { label: "Boyutlar", value: "324 x 320 x 1010 mm" },
      { label: "Ağırlık", value: "40 kg" }
    ],
    features: [
      "Ledli 5,25 mt kol",
      "Anti-Shock Rubber",
      "Reflektif etiket",
      "Flaşör sistemi",
      "Fotosel güvenlik",
      "Uzaktan kumanda"
    ],
    color: "blue"
  },
  {
    id: 2,
    name: "Hidrolik Mantar Bariyer",
    description: "Yüksek güvenlik ihtiyacı duyulan noktalarda araç trafiğini engelleyecek şekilde tasarlanmış, 304 paslanmaz çelik yapılı hidrolik bariyer sistemi.",
    specs: [
      { label: "Kontrol/Çalışma Voltajı", value: "380 V 50-60 Hz" },
      { label: "Açılma Süresi", value: "3-5 saniye (opsiyonel)" },
      { label: "Kompresör", value: "30 Lt 50 Bar" },
      { label: "Kontrol", value: "PLC Logic" },
      { label: "Emniyet", value: "Fotosel/Loop sensör" },
      { label: "Koruma Derecesi", value: "IP 67" },
      { label: "Yerden Yüksekliği", value: "50 cm" },
      { label: "Çalışma Sıcaklığı", value: "-20°C - +60°C" },
      { label: "Ağırlık", value: "80 kg" },
      { label: "Tahrik Grubu", value: "100 bar Hidrolik" }
    ],
    features: [
      "304 paslanmaz çelik yapı",
      "Galvaniz alt kısım",
      "Yatay yataklama sistemi",
      "PLC kontrol sistemi",
      "El krikosu (elektrik kesintisinde)",
      "Geçiş kontrol sistemleri uyumlu"
    ],
    color: "orange"
  },
  {
    id: 3,
    name: "Road Blocker Sistemler",
    description: "Terör eylemlerine karşı tasarlanan, elektronik kontrollü hidrolik yol kesici sistem. Yüksek dayanıklılık ve güvenilirlik özelliği ile kritik noktalarda kullanılır.",
    specs: [
      { label: "Sistem Tipi", value: "Hidrolik Yol Kesici" },
      { label: "Kontrol", value: "Elektronik Kontrollü" },
      { label: "Yapı", value: "Yüksek Dayanıklılık" },
      { label: "Aydınlatma", value: "4 Adet Güneş Enerjili LED" },
      { label: "Koruma Seviyesi", value: "Terör Önleme" },
      { label: "Görünürlük", value: "Gece Görünürlüğü Sağlanmış" }
    ],
    features: [
      "Terör eylemlerine karşı tasarım",
      "Yüksek dayanıklılık",
      "Güneş enerjili LED aydınlatma",
      "Elektronik kontrol sistemi",
      "Gece görünürlüğü",
      "Üstün koruma özelliği"
    ],
    color: "red"
  },
  {
    id: 4,
    name: "PT Dinamik Bariyer Sistemi",
    description: "Hızlı açılma süresi ve dinamik yapısı ile yoğun trafiğe sahip alanlarda ideal çözüm sunar.",
    specs: [
      { label: "Sistem Tipi", value: "Dinamik Bariyer" },
      { label: "Kullanım Alanı", value: "Yoğun Trafik" },
      { label: "Montaj", value: "Kolay ve Hızlı" }
    ],
    features: [
      "Hızlı açılma",
      "Dinamik yapı",
      "Yoğun trafik uyumlu",
      "Güvenilir performans"
    ],
    color: "green"
  }
];

const colorSchemes = {
  blue: {
    gradient: "from-blue-500 to-cyan-500",
    bg: "from-blue-50 via-white to-cyan-50",
    badge: "from-blue-500/20 to-cyan-500/20",
    badgeBorder: "border-blue-500/30",
    badgeText: "text-blue-600",
    dot: "bg-blue-500",
    iconBg: "bg-blue-100",
    iconText: "text-blue-600"
  },
  orange: {
    gradient: "from-orange-500 to-amber-500",
    bg: "from-orange-50 via-white to-amber-50",
    badge: "from-orange-500/20 to-amber-500/20",
    badgeBorder: "border-orange-500/30",
    badgeText: "text-orange-600",
    dot: "bg-orange-500",
    iconBg: "bg-orange-100",
    iconText: "text-orange-600"
  },
  red: {
    gradient: "from-red-500 to-rose-500",
    bg: "from-red-50 via-white to-rose-50",
    badge: "from-red-500/20 to-rose-500/20",
    badgeBorder: "border-red-500/30",
    badgeText: "text-red-600",
    dot: "bg-red-500",
    iconBg: "bg-red-100",
    iconText: "text-red-600"
  },
  green: {
    gradient: "from-green-500 to-emerald-500",
    bg: "from-green-50 via-white to-emerald-50",
    badge: "from-green-500/20 to-emerald-500/20",
    badgeBorder: "border-green-500/30",
    badgeText: "text-green-600",
    dot: "bg-green-500",
    iconBg: "bg-green-100",
    iconText: "text-green-600"
  }
};

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
        <meta name="keywords" content="bariyer sistemleri, otopark bariyeri, hidrolik bariyer, mantar bariyer, road blocker, araç giriş kontrol, güvenlik bariyeri, PT PLUS bariyer, dinamik bariyer" />
        
        <meta property="og:title" content="Bariyer Sistemleri - Otopark Bariyerleri ve Güvenlik Sistemleri | Mika Teknoloji" />
        <meta property="og:description" content="Hidrolik bariyer, mantar bariyer, road blocker ve otopark bariyer sistemleri. Yüksek güvenlikli araç giriş kontrol çözümleri." />
        <meta property="og:type" content="product" />
        
        <link rel="canonical" href="https://mikateknoloji.com/urunler/bariyer-sistemleri" />
      </Helmet>

      {/* Hero Section */}
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

      {/* Features Section */}
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

      {/* Products Section */}
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

          <div className="space-y-12 max-w-7xl mx-auto">
            {products.map((product, index) => {
              const scheme = colorSchemes[product.color as keyof typeof colorSchemes];
              const isEven = index % 2 === 0;
              
              return (
                <motion.div key={product.id} {...fadeInUp}>
                  <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 bg-white overflow-hidden">
                    <CardContent className="p-0">
                      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[500px]`}>
                        {/* Image Section - Gradient with Icon */}
                        <div className={`lg:w-2/5 relative bg-gradient-to-br ${scheme.bg}`}>
                          <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent"></div>
                          <div className="relative h-full flex items-center justify-center p-8">
                            <div className={`w-64 h-64 rounded-full bg-gradient-to-br ${scheme.gradient} opacity-20 absolute blur-3xl`}></div>
                            <div className={`relative w-48 h-48 rounded-3xl bg-gradient-to-br ${scheme.gradient} flex items-center justify-center shadow-2xl`}>
                              <Shield className="w-24 h-24 text-white" strokeWidth={1.5} />
                            </div>
                          </div>
                          <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${scheme.gradient}`}></div>
                        </div>

                        {/* Content Section */}
                        <div className="lg:w-3/5 p-12 lg:p-16 flex flex-col justify-center">
                          <div className="space-y-8">
                            {/* Badge */}
                            <div className={`inline-flex items-center bg-gradient-to-r ${scheme.badge} px-6 py-3 rounded-full border ${scheme.badgeBorder}`}>
                              <div className={`w-2 h-2 ${scheme.dot} rounded-full mr-3 animate-pulse`}></div>
                              <span className={`${scheme.badgeText} font-semibold text-sm tracking-wider uppercase`}>
                                Profesyonel Sistem
                              </span>
                            </div>

                            {/* Title */}
                            <div>
                              <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6 leading-tight">
                                {product.name}
                              </h3>
                              <div className={`w-24 h-1 bg-gradient-to-r ${scheme.gradient} rounded-full mb-8`}></div>
                            </div>

                            {/* Description */}
                            <p className="text-xl text-slate-700 leading-relaxed">
                              {product.description}
                            </p>

                            {/* Technical Specs */}
                            <div className="bg-slate-50 rounded-2xl p-6">
                              <h4 className="font-bold text-lg text-slate-800 mb-4 flex items-center">
                                <Settings className="w-5 h-5 mr-2" />
                                Teknik Özellikler
                              </h4>
                              <div className="grid grid-cols-1 gap-3">
                                {product.specs.map((spec, idx) => (
                                  <div key={idx} className="flex justify-between text-sm border-b border-slate-200 pb-2">
                                    <span className="text-slate-600 font-medium">{spec.label}:</span>
                                    <span className="text-slate-800 font-semibold">{spec.value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Features */}
                            <div>
                              <h4 className="font-bold text-lg text-slate-800 mb-4">Özellikler</h4>
                              <div className="grid grid-cols-2 gap-3">
                                {product.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-start space-x-2">
                                    <CheckCircle2 className={`w-5 h-5 ${scheme.badgeText} flex-shrink-0 mt-0.5`} />
                                    <span className="text-slate-700 text-sm">{feature}</span>
                                  </div>
                                ))}
                              </div>
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

      {/* CTA Section */}
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
