import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Shield, Users, Clock } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/seo/SEO";

const benefits = [
  "RFID kartlı geçiş sistemi",
  "Biyometrik parmak izi okuma", 
  "Yüz tanıma teknolojisi",
  "QR kod mobil erişim",
  "Zaman bazlı erişim kontrolü",
  "Anti-passback sistemi",
  "Çoklu kart formatı desteği",
  "TCP/IP ağ bağlantısı",
  "Kapı kontrol rölesi",
  "Alarm entegrasyonu",
  "Video kamera senkronizasyonu",
  "Merkezi yönetim yazılımı"
];

const features = [
  {
    icon: Shield,
    title: "Güvenli Erişim Kontrolü",
    description: "Yetkisiz girişlere karşı maksimum güvenlik sağlayan access control panelleri"
  },
  {
    icon: Users,
    title: "Çoklu Kullanıcı Yönetimi",
    description: "Binlerce kullanıcı ve farklı yetki seviyelerini rahatlıkla yönetin"
  },
  {
    icon: Clock,
    title: "7/24 Sürekli İzleme",
    description: "Tüm giriş-çıkışları anlık takip edin ve detaylı raporlar alın"
  }
];

const faqs = [
  {
    question: "Geçiş kontrol sistemi nedir?",
    answer: "Belirli alanlara girişi kontrol eden, yetkili kişilerin güvenli geçişini sağlayan elektronik sistemlerdir. Kartlı geçiş, biyometrik okuma veya QR kod teknolojileri kullanır."
  },
  {
    question: "Hangi kart türlerini destekler?",
    answer: "RFID Proximity (125kHz), MIFARE (13.56MHz), UHF RFID ve tüm standart kartlar desteklenir. Ayrıca mobil QR kod erişimi de mevcuttur."
  },
  {
    question: "PDKS ile entegrasyon mümkün mü?",
    answer: "Evet, geçiş kontrol sistemlerimiz PDKS yazılımları ile tam entegre çalışır. Personel giriş-çıkışları otomatik olarak PDKS'ye aktarılır."
  },
  {
    question: "Kaç kullanıcıyı destekler?",
    answer: "Sistemimiz 100.000'e kadar kullanıcıyı destekler. Modüler yapısı sayesinde ihtiyaca göre genişletilebilir."
  },
  {
    question: "Uzaktan yönetim imkanı var mı?",
    answer: "TCP/IP bağlantısı ile uzaktan yönetim, kart tanımları ve sistem ayarları web üzerinden yapılabilir. Mobil uygulama desteği mevcuttur."
  }
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product", 
  "name": "Geçiş Kontrol Sistemleri",
  "description": "RFID kartlı geçiş, biyometrik parmak izi, yüz tanıma ve QR kod teknolojileri ile profesyonel access control çözümleri.",
  "brand": "Mika Teknoloji",
  "category": "Access Control System",
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

export default function AccessControlSystemPage() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Geçiş Kontrol Sistemleri - Access Control Panelleri | Mika Teknoloji"
        description="RFID kartlı geçiş, biyometrik parmak izi, yüz tanıma ve QR kod teknolojileri ile profesyonel access control çözümleri. PDKS entegrasyonu ve güvenli erişim kontrolü."
        canonical="https://mikateknoloji.com/urunler/gecis-kontrol"
        jsonLd={[productJsonLd, faqJsonLd]}
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Geçiş Kontrol Sistemleri
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              RFID kartlı geçiş, biyometrik parmak izi, yüz tanıma ve QR kod teknolojileri ile 
              profesyonel access control çözümleri. Güvenli erişim kontrolü ve PDKS entegrasyonu.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-pink-600 px-4 py-2 rounded-full">
                <span className="font-semibold">RFID Teknolojisi</span>
              </div>
              <div className="bg-pink-600 px-4 py-2 rounded-full">
                <span className="font-semibold">Biyometrik Okuma</span>
              </div>
              <div className="bg-pink-600 px-4 py-2 rounded-full">
                <span className="font-semibold">PDKS Entegrasyonu</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Access Control Sistem Bileşenleri
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Profesyonel güvenlik sistemlerimizin ana bileşenleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Güvenlik Kontrol Paneli */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-white to-gray-50">
                <div className="mb-8">
                  <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
                    <img 
                      src="/api/assets/attached_assets/image_1757935900507.png" 
                      alt="Güvenlik Kontrol Paneli - Metal Kasa"
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-slate-800 mb-3">
                    Güvenlik Kontrol Paneli
                  </CardTitle>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    İşyerleri, AVM ve binalarda güvenliği sağlama işlevinin yanı sıra 
                    giriş-çıkışların kontrol edilmesi ve uzaktan izlenmesini sağlayan panel sistemi.
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="text-slate-600 space-y-3 text-left">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Güvenli metal kasa yapısı</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Anahtarlı güvenlik kilidi</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Dış etkenlere dayanıklı yapı</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Kolay montaj ve bakım</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Geçiş Kontrol Kartı */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-white to-gray-50">
                <div className="mb-8">
                  <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
                    <img 
                      src="/api/assets/attached_assets/image_1757935911490.png" 
                      alt="Geçiş Kontrol Kartı - Çoklu Bağlantı Noktası"
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-slate-800 mb-3">
                    Geçiş Kontrol Kartı
                  </CardTitle>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Çoklu bağlantı noktalarına sahip profesyonel kontrol kartı. 
                    Entegre LCD ekran ve genişleme imkanı sunan modüler yapı.
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="text-slate-600 space-y-3 text-left">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Çoklu yeşil bağlantı portları</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>LCD ekran ve kontrol paneli</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Modüler genişleme desteği</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Profesyonel PCB tasarımı</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Geçiş Kontrol Sistem Özellikleri
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Güvenlik ihtiyaçlarınıza uygun çözümler
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-8 w-8 text-gray-600" />
                    </div>
                    <CardTitle className="text-xl text-slate-800">{feature.title}</CardTitle>
                    <p className="text-slate-600">{feature.description}</p>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Access Control Sistem Avantajları
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Shield className="h-5 w-5 text-gray-600 flex-shrink-0" />
                <span className="text-slate-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-lg text-slate-600">
              Geçiş kontrol sistemleri hakkında merak edilenler
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bold text-lg text-slate-800 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Geçiş Kontrol Sistemi İçin Teklif Alın
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              RFID kartlı geçiş ve biyometrik teknolojiler ile güvenli erişim kontrolü için ücretsiz keşif ve teklif hizmeti
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-gray-600 hover:bg-gray-50"
                >
                  Ücretsiz Teklif Al
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/kartli-gecis-sistemi">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-600"
                >
                  Kartlı Geçiş Sistemleri
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}