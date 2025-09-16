import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock, Smartphone, AlertTriangle, BarChart3, CheckCircle, Download } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/seo/SEO";

// Images
const securityPatrolImage = "/security-guard-patrol-tracking.png";

const features = [
  {
    icon: MapPin,
    title: "Canlı Konum Takibi",
    description: "Güvenlik personelinin gerçek zamanlı konum bilgisi ve hareket rotaları"
  },
  {
    icon: Clock,
    title: "Otomatik Rapor Oluşturma", 
    description: "Tur başlangıç, bitiş saatleri ve geçilen noktaların otomatik kaydı"
  },
  {
    icon: AlertTriangle,
    title: "Acil Durum Alarmı",
    description: "Güvenlik personeli için panik butonu ve anlık alarm sistemi"
  },
  {
    icon: Smartphone,
    title: "Mobil Uygulama",
    description: "iOS ve Android uyumlu, kullanıcı dostu arayüz"
  }
];

const benefits = [
  "Güvenlik rondlarının dijital takibi",
  "Kontrolsüz alan kalmasını engeller", 
  "Personel performans analizi",
  "Yasal raporlama kolaylığı",
  "7/24 gerçek zamanlı izleme",
  "Maliyet optimizasyonu"
];

const faqs = [
  {
    question: "QR-Patrol sistemi nasıl çalışır?",
    answer: "Güvenlik personeli belirlenen noktalardaki QR kodları mobil uygulama ile okutarak tur kaydı oluşturur. Sistem otomatik olarak konum, saat bilgisi ve fotoğraf kaydı alır."
  },
  {
    question: "Hangi cihazlarda kullanılabilir?",
    answer: "iOS ve Android işletim sistemli tüm akıllı telefonlarda çalışır. İnternet bağlantısı olmadığında bile çevrimdışı kayıt alabilir."
  },
  {
    question: "Raporlama özellikleri nelerdir?",
    answer: "Günlük, haftalık, aylık tur raporları, personel performans analizleri, eksik kontrol noktaları, geç kalma bildirimleri ve Excel çıktısı alabilirsiniz."
  },
  {
    question: "Kurulum süreci nasıldır?",
    answer: "QR etiketleri kontrol noktalarına yerleştirilir, mobil uygulama personel telefonlarına kurulur ve web panelinden sistem konfigürasyonu yapılır. Kurulum 1-2 gün içinde tamamlanır."
  }
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "QR-Patrol Bekçi Kontrol Sistemi", 
  "description": "Güvenlik personeli için QR kod tabanlı mobil devriye takip sistemi. Gerçek zamanlı konum izleme, otomatik raporlama ve acil durum alarm özellikleri.",
  "brand": "Mika Teknoloji",
  "category": "Security Control System",
  "offers": {
    "@type": "Offer",
    "availability": "InStock",
    "priceCurrency": "TRY"
  }
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

export default function QRPatrolPage() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="QR-Patrol Bekçi Kontrol Sistemi - Mobil Devriye Takibi | Mika Teknoloji"
        description="Güvenlik personeli için QR kod tabanlı mobil devriye takip sistemi. Gerçek zamanlı konum izleme, otomatik raporlama ve acil durum alarm özellikleri ile güvenlik operasyonlarınızı dijitalleştirin."
        canonical="https://mikateknoloji.com/qr-bekci"
        jsonLd={[productJsonLd, faqJsonLd]}
      />
      
      {/* [S1] Hero Section */}
      <section id="s1" data-section="S1" className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
        <div className="pointer-events-none select-none absolute top-4 left-4 z-20 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">S1</div>
        
        <div className="container mx-auto px-4 py-20">
          {/* Main Hero Content */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                <span className="text-purple-600">QR-Patrol</span><br />
                <span className="text-gray-800">Bekçi Kontrol Sistemi</span>
              </h1>
              <p className="text-2xl text-gray-700 mb-6 max-w-4xl mx-auto leading-relaxed">
                Güvenlik personeli için akıllı mobil devriye takip sistemi
              </p>
              <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                QR kod teknolojisi ile gerçek zamanlı konum izleme, otomatik raporlama ve acil durum alarm sistemi. 
                Güvenlik operasyonlarınızı tamamen dijitalleştirin.
              </p>
            </motion.div>

            {/* Features Tags */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white shadow-lg text-purple-700 px-6 py-3 rounded-full text-base font-semibold border border-purple-100">
                📱 Mobil Uygulama
              </div>
              <div className="bg-white shadow-lg text-purple-700 px-6 py-3 rounded-full text-base font-semibold border border-purple-100">
                📍 Canlı Konum Takibi
              </div>
              <div className="bg-white shadow-lg text-purple-700 px-6 py-3 rounded-full text-base font-semibold border border-purple-100">
                📊 Otomatik Raporlama
              </div>
            </motion.div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Demo Image/Features */}
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Güvenlik Devriye Takibi</h3>
                  <p className="text-gray-600">QR kod okutma ile otomatik tur kaydı ve raporlama</p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 text-center">
                  <img 
                    src={securityPatrolImage}
                    alt="QR-Patrol Güvenlik Devriye Takip Sistemi"
                    className="w-full h-auto rounded-xl object-cover shadow-lg mb-4"
                  />
                  <p className="text-sm text-gray-600 font-medium">Gerçek Zamanlı Devriye Takibi</p>
                </div>
              </div>
            </motion.div>

            {/* Right - Key Features */}
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-xl border border-purple-50">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                        <feature.icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* [S2] Benefits Section */}
      <section id="s2" data-section="S2" className="relative py-32 bg-gray-50">
        <div className="pointer-events-none select-none absolute top-4 left-4 z-20 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">S2</div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sistemin Avantajları
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              QR-Patrol sistemi ile güvenlik operasyonlarınızı modernleştirin ve 
              kontrolsüz alan bırakmayın.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <p className="text-lg font-semibold text-gray-900">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* [S3] How It Works Section */}
      <section id="s3" data-section="S3" className="relative py-32 bg-white">
        <div className="pointer-events-none select-none absolute top-4 left-4 z-20 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">S3</div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nasıl Çalışır?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Basit 3 adımda güvenlik devriye sisteminizi kurun ve kullanmaya başlayın.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "QR Kodları Yerleştirin",
                description: "Kontrol edilmesi gereken noktalara QR etiketlerini yerleştirin. Her QR kod benzersiz konum bilgisi içerir.",
                icon: MapPin
              },
              {
                step: "02", 
                title: "Mobil Uygulamayı İndirin",
                description: "Güvenlik personeli QR-Patrol uygulamasını telefonlarına indirir ve hesap bilgileri ile giriş yapar.",
                icon: Smartphone
              },
              {
                step: "03",
                title: "Devriye Başlatın",
                description: "Personel tur boyunca QR kodları okutarak otomatik kayıt oluşturur. Sistem canlı izleme ve raporlama yapar.",
                icon: BarChart3
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <step.icon className="h-10 w-10 text-purple-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-purple-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* [S4] FAQ Section */}
      <section id="s4" data-section="S4" className="relative py-32 bg-gray-50">
        <div className="pointer-events-none select-none absolute top-4 left-4 z-20 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">S4</div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sık Sorulan Sorular
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              QR-Patrol sistemi hakkında merak edilen konular ve detaylı cevaplar.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* [S5] CTA Section */}
      <section id="s5" data-section="S5" className="relative py-32 bg-gradient-to-br from-purple-600 via-pink-600 to-violet-500">
        <div className="pointer-events-none select-none absolute top-4 left-4 z-20 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">S5</div>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Güvenlik Operasyonlarınızı Dijitalleştirin
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              QR-Patrol sistemi ile güvenlik personelini daha etkili yönetin. 
              Ücretsiz demo talep edin ve farkı hemen görün.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-4 text-lg"
              >
                <Link href="/iletisim">
                  Ücretsiz Demo İsteyin <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-4 text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Ürün Kataloğu İndir
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}