import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Shield, Users, Clock } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/seo/SEO";

// Real product images paths  
const controlPanelImage = "/attached_assets/image_1757935900507.png";
const controlCardImage = "/attached_assets/image_1757935911490.png";

const components = [
  "Sisteme entegre edilmiş kart okuyucular",
  "Elektrikli kilit karşılıkları ve manyetik kilitler",
  "Biyometrik okuyucu ve kontrol paneli",
  "İzleme ve kontrol etme üzerine yazılımlar",
  "Çeşitli boyutlardaki bariyer ve turnikeler"
];

const benefits = [
  "Giriş kapılarında hızlı ve kolay geçiş imkanı",
  "Pratik ve kontrollü şekilde yetki kontrolü",
  "Yetki genişletilmesi ve kısıtlanması tanımlama olanağı",
  "Personelin işe geliş-gidiş takibi",
  "Mobil cihazlara kolay entegre edilebilir",
  "Sağlık ve hijyen gereksinimlerini karşılama",
  "Uzaktan kontrol ve izleme imkanı",
  "Güvenlik ve takip ön planda olan sistem"
];

const technicalFeatures = [
  "Son teknolojik destekli veri tabanı",
  "Kanun değişikliklerine karşı otomatik güncelleme",
  "İnternet üzerinden kolay erişim",
  "Çoklu programa entegre kurulum",
  "Kolay ve hızlı bakım-onarım"
];

const features = [
  {
    icon: Shield,
    title: "Güvenli Erişim Kontrolü",
    description: "İşyerleri, AVM ve binalarda güvenliği sağlama işlevinin yanı sıra giriş-çıkışların kontrol edilmesi"
  },
  {
    icon: Users,
    title: "Pratik Kurulum",
    description: "En çok faydanın alınacağı yerin tespiti sonrası uzman çalışanlarla hızlı kurulum"
  },
  {
    icon: Clock,
    title: "7/24 İzleme",
    description: "Uzaktan basit şekilde izleme ve kontrol edilebilir sirkülasyon takibi"
  }
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
                      src={controlPanelImage} 
                      alt="Güvenlik Kontrol Paneli - Metal Kasa"
                      className="w-full h-auto object-contain rounded-lg"
                      width="400"
                      height="400"
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
                      src={controlCardImage} 
                      alt="Geçiş Kontrol Kartı - Çoklu Bağlantı Noktası"
                      className="w-full h-auto object-contain rounded-lg"
                      width="400"
                      height="400"
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

      {/* Components Section */}
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
              Geçiş Kontrol Panellerinin Bileşenleri
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Geçiş kontrol panelleri pratik ve hızlı bir kurulum imkanına sahiptir. 
              En çok faydanın alınacağı yerin tespitinden sonra uzman çalışanların gerekli kontrolleri 
              sağlayarak kurulmasının ardından hemen kullanımına başlanmaktadır.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {components.map((component, index) => (
              <motion.div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="h-4 w-4 text-pink-600" />
                </div>
                <span className="text-slate-700 font-medium">{component}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                Teknik Özellikler ve Program Desteği
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Geçiş kontrol panellerinin genel olarak teknik özellikleri, 
                sistem problem oluşturmadan çalışması ile aksaklıkların önüne geçmekte 
                ve bakım onarım maliyetlerini en az seviyeye indirmektedir.
              </p>
              <ul className="space-y-4">
                {technicalFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                Kullanımının Sağladığı Faydalar
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Geçiş kontrol panelleri kurulacağı alanda amacına en uygun şekilde çalışmaktadır. 
                İstenen verimin yükselmesini sağlayan panellerin kullanılması ile sağlanan faydalar:
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
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