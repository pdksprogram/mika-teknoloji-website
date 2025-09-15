import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/seo/SEO";

// Real product images paths  
const controlPanelImage = "/control-panel.png";
const controlCardImage = "/control-card.png";
const dashboardImage = "/dashboard-panel.png";
const phoneQrImage = "/phone-qr-system.png";
const mikaPassPhoneImage = "/mikapass-phone.png";
const mobileAppImage = "/mika-mobile-app-qr.png";


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
      
      {/* Hero Section - Armongate Style */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <motion.div 
              className="text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="text-blue-600">MikaPass</span><br />
                  Akıllı Erişim<br />
                  Kontrol Sistemi
                </h1>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Bina içindeki kapıları yetki seviyesine göre geçiş kontrol yapabilirsiniz. 
                  Antipassback ve Global Antipassback özelliği ile bir kapı kapanmadan 
                  diğer kapıdan geçiş engellenebilir.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Üstelik limit kontör ve saat aralıkları tanımlayarak, Mika Teknoloji 
                  üretimi profesyonel access kontrol panelleri ile tam güvenlik kontrolü 
                  sağlayabilirsiniz.
                </p>
              </div>


              {/* Features Tags */}
              <div className="flex flex-wrap gap-3">
                <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  🏢 Yetki Seviyeli Kontrol
                </div>
                <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  🚪 Antipassback Sistemi
                </div>
                <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  ⏰ Saat Aralığı Kontrolü
                </div>
              </div>
            </motion.div>

            {/* Right Content - Professional Phone Images */}
            <motion.div 
              className="relative flex justify-center items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Main MikaPass Phone */}
                <div className="relative z-10">
                  <img 
                    src={mikaPassPhoneImage} 
                    alt="MikaPass Dijital Anahtar Uygulaması"
                    className="w-80 h-auto object-contain drop-shadow-2xl"
                    width="320"
                    height="600"
                  />
                </div>

                {/* Secondary Mobile App Image - Floating */}
                <motion.div 
                  className="absolute -top-8 -right-12 z-20 w-48"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <img 
                    src={mobileAppImage} 
                    alt="Mika Mobile App QR Kod"
                    className="w-full h-auto object-contain drop-shadow-xl"
                    width="200"
                    height="240"
                  />
                </motion.div>

                {/* Floating Security Badge */}
                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 z-10"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <Shield className="h-8 w-8 text-blue-600" />
                </motion.div>

                {/* Floating Users Badge */}
                <motion.div 
                  className="absolute top-12 -left-8 bg-blue-600 rounded-2xl shadow-xl p-4 z-10"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  <Users className="h-8 w-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cloud Based Access Control Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-blue-600">Bulut Tabanlı</span><br />
                  Geçiş Kontrol Sistemi
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Binalarınızı, çalışanlarınızı, ziyaretçilerinizi, müşterilerinizi, bina 
                  sakinlerinizi ve tüm varlıklarınızı Mika bulut yazılımları ile 
                  koruyabilirsiniz.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                  <p className="text-gray-700 font-medium">
                    Tüm yaşam alanlarınızı BT altyapı maliyetine gereksinim duymadan 
                    güvenle yönetebilirsiniz.
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Güvenli Erişim</h4>
                  <p className="text-sm text-gray-600">SSL şifreleme ile güvenli bağlantı</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Merkezi Yönetim</h4>
                  <p className="text-sm text-gray-600">Tüm lokasyonları tek arayüzden kontrol</p>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Dashboard and Phone */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Dashboard Screen */}
                <div className="bg-white rounded-2xl shadow-2xl p-4 mb-8">
                  <div className="bg-gray-100 rounded-xl p-8 min-h-80">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-orange-100 rounded-lg p-4 h-20"></div>
                      <div className="bg-pink-100 rounded-lg p-4 h-20"></div>
                      <div className="bg-blue-100 rounded-lg p-4 h-20"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 h-32 shadow-sm"></div>
                      <div className="bg-white rounded-lg p-4 h-32 shadow-sm"></div>
                    </div>
                  </div>
                </div>
                
                {/* Phone with QR Code */}
                <div className="absolute -bottom-8 -right-8 w-32 h-56 bg-gray-900 rounded-2xl shadow-xl p-1">
                  <div className="w-full h-full bg-white rounded-xl p-3 flex flex-col justify-center items-center">
                    <div className="w-16 h-16 bg-gray-900 rounded-lg mb-2"></div>
                    <div className="text-xs text-center text-gray-600">QR Kod</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Digital Key Section - New Design */}
      <section className="py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-blue-500 px-4 py-2 rounded-lg inline-block mb-4">
                    Akıllı Telefonunuz
                  </span><br />
                  <span className="bg-blue-500 px-4 py-2 rounded-lg inline-block">
                    Dijital Anahtarınız
                  </span>
                </h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Akıllı telefonlarınız ile hızlı, güvenli, kartsız geçiş sağlayın.
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg">
                    Daha Fazla Bilgi
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Large Phone Mockup */}
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Main Phone */}
                <div className="w-72 h-[500px] bg-gray-900 rounded-[3rem] shadow-2xl p-2">
                  <div className="w-full h-full bg-white rounded-[2.5rem] p-6 flex flex-col">
                    {/* Phone Header */}
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">MT</span>
                      </div>
                      <h4 className="font-bold text-gray-900 text-lg">MikaPass</h4>
                    </div>
                    
                    {/* QR Code Area */}
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-32 h-32 bg-gray-900 rounded-2xl flex items-center justify-center">
                        <div className="w-24 h-24 bg-white rounded-xl p-3 flex items-center justify-center">
                          <div className="w-full h-full bg-gray-900 rounded-lg relative">
                            <div className="absolute inset-2 bg-white rounded-sm"></div>
                            <div className="absolute top-3 left-3 w-3 h-3 bg-gray-900 rounded-sm"></div>
                            <div className="absolute top-3 right-3 w-3 h-3 bg-gray-900 rounded-sm"></div>
                            <div className="absolute bottom-3 left-3 w-3 h-3 bg-gray-900 rounded-sm"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Status */}
                    <div className="text-center">
                      <div className="bg-green-100 text-green-800 px-6 py-3 rounded-full text-sm font-medium inline-block mb-2">
                        ✓ Aktif
                      </div>
                      <div className="text-gray-500 text-sm">Hazır</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hardware Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Donanımlar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Eşi görülmemiş bir geçiş kontrol deneyimi yaşarken sınırları aşın. 
              Mika donanımları ile yüksek sayıda noktayı tek bir arayüz ile kontrol edebilir.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Control Panel */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                <div className="mb-8">
                  <div className="w-full max-w-sm mx-auto bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl">
                    <img 
                      src={controlPanelImage} 
                      alt="Güvenlik Kontrol Paneli"
                      className="w-full h-auto object-contain"
                      width="300"
                      height="300"
                    />
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Güvenlik Kontrol Paneli
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    İşyerleri, AVM ve binalarda güvenli geçiş kontrolü sağlayan 
                    profesyonel metal kasa sistemi.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-blue-50 p-3 rounded-xl">
                      <div className="font-semibold text-blue-900">Metal Kasa</div>
                      <div className="text-blue-700">Güvenli Yapı</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-xl">
                      <div className="font-semibold text-blue-900">Kilit Sistemi</div>
                      <div className="text-blue-700">Anahtarlı Güvenlik</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Control Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                <div className="mb-8">
                  <div className="w-full max-w-sm mx-auto bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl">
                    <img 
                      src={controlCardImage} 
                      alt="Geçiş Kontrol Kartı"
                      className="w-full h-auto object-contain"
                      width="300"
                      height="300"
                    />
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Akıllı Kontrol Kartı
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Çoklu bağlantı portları ve LCD ekran ile 
                    gelişmiş kontrol kartı teknolojisi.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-blue-50 p-3 rounded-xl">
                      <div className="font-semibold text-blue-900">LCD Ekran</div>
                      <div className="text-blue-700">Anlık Bilgi</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-xl">
                      <div className="font-semibold text-blue-900">Modüler</div>
                      <div className="text-blue-700">Genişletilebilir</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tech Specs */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Mika Serisi Okuyucular</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Mika okuyucuları üstün güvenlik standartlarına uygunlukla birlikte kullanıcı deneyimini 
                hızlı ve kullanışlı bir alışkanlığa çevirir. Cep telefonuna tanımlanan dijital kimlik 
                ile kart taşıma gereksinimini rafa kaldırabilirsiniz.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-2xl">
                  <div className="text-3xl mb-3">📱</div>
                  <div className="font-semibold text-gray-900">Bluetooth & NFC</div>
                  <div className="text-sm text-gray-600 mt-2">Çoklu bağlantı seçeneği</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-2xl">
                  <div className="text-3xl mb-3">🔐</div>
                  <div className="font-semibold text-gray-900">QR Kod</div>
                  <div className="text-sm text-gray-600 mt-2">Hızlı ve güvenli geçiş</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-2xl">
                  <div className="text-3xl mb-3">⚡</div>
                  <div className="font-semibold text-gray-900">Dijital Kimlik</div>
                  <div className="text-sm text-gray-600 mt-2">Akıllı telefon entegrasyonu</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cloud Based System */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Dashboard Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <img 
                    src={dashboardImage} 
                    alt="Bulut Tabanlı Yönetim Dashboard"
                    className="w-full h-auto object-contain"
                    width="800"
                    height="600"
                  />
                </div>
                {/* Phone QR Image - Floating */}
                <motion.div 
                  className="absolute -bottom-8 -right-8 w-64 h-auto"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <img 
                    src={phoneQrImage} 
                    alt="QR Kod ile Mobil Geçiş"
                    className="w-full h-auto object-contain drop-shadow-2xl"
                    width="300"
                    height="200"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  <span className="text-blue-600">Bulut Tabanlı</span><br />
                  Geçiş Kontrol Sistemi
                </h2>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Binalarınızı, çalışanlarınızı, ziyaretçilerinizi, müşterilerinizi, bina sakinlerinizi 
                  ve tüm varlıklarınızı Mika bulut yazılımları ile koruyabilirsiniz.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    Tüm yaşam alanlarınızı BT altyapı maliyetine gereksinim duymadan güvenle yönetebilirsiniz.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-2xl">
                  <Shield className="h-8 w-8 text-blue-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Güvenli Erişim</h4>
                  <p className="text-sm text-gray-600">SSL şifreleme ile güvenli bağlantı</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl">
                  <Users className="h-8 w-8 text-blue-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Merkezi Yönetim</h4>
                  <p className="text-sm text-gray-600">Tüm lokasyonları tek arayüzden kontrol</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fast and Secure Access */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mika ile hızlı, güvenli,<br />
              <span className="text-blue-600">kontrollü geçiş</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Günlük hayatın her alanında rahat geçiş. Mika okuyucularının yer aldığı 
              tüm yaşam alanlarında kolaylıkla mobil uygulama ile geçiş sağlayabilirsiniz.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <div className="text-2xl">👥</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Ziyaretçi Yönetimi</h3>
              <p className="text-gray-600 text-sm">Misafir erişim kontrolleri</p>
            </motion.div>

            <motion.div
              className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <div className="text-2xl">💳</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Ödemeli Geçiş</h3>
              <p className="text-gray-600 text-sm">Ücret tabanlı erişim</p>
            </motion.div>

            <motion.div
              className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <div className="text-2xl">📱</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Mobil İnterkom</h3>
              <p className="text-gray-600 text-sm">Görüntülü konuşma sistemi</p>
            </motion.div>

            <motion.div
              className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <div className="text-2xl">🔐</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Geçiş Kontrol</h3>
              <p className="text-gray-600 text-sm">Akıllı erişim yönetimi</p>
            </motion.div>
          </div>

          {/* Architecture Info */}
          <motion.div 
            className="text-center mt-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-12">
              <p className="text-gray-600 text-lg leading-relaxed">
                Mika, bulutta ve tesiste barındırılan çözümleri ile her türlü mimariye uyarlanabilir. 
                İstemci sertifikasyonu ve SSL şifreleme ile VPN gerektirmeksizin güvenli ve merkezi bir altyapı sağlar. 
                Geçiş kontrolün yanında sunulan modülleri ile kullanıcı ihtiyaçlarına göre şekillenebilen uygulamalar sunar.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Armongate Style */}
      <section className="py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Hızlı ve Basit<br />
              <span className="text-blue-200">Geçiş Kontrolü</span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              MikaPass ile akıllı telefonunuzu dijital anahtarınız haline getirin. 
              Temassız, güvenli ve hızlı geçiş deneyimi.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/iletisim">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50 px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl border-0"
                  >
                    Ücretsiz Demo
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-12 py-6 text-xl font-bold rounded-2xl"
                >
                  Daha Fazla Bilgi
                </Button>
              </motion.div>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-4">🚀</div>
                <div className="font-bold text-lg text-white mb-2">Anında Kurulum</div>
                <div className="text-blue-200 text-sm">15 dakikada kurulum tamamlanır</div>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-4">💰</div>
                <div className="font-bold text-lg text-white mb-2">Düşük Maliyet</div>
                <div className="text-blue-200 text-sm">BT altyapı yatırımı gerektirmez</div>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-4">🔒</div>
                <div className="font-bold text-lg text-white mb-2">KVKK Uyumlu</div>
                <div className="text-blue-200 text-sm">Tam güvenlik ve gizlilik</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}