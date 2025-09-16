import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Database, Share2, Mail, MessageSquare } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/seo/SEO";

// Simple section numbering for clear identification

// Real product images paths  
const dashboardImage = "/new-dashboard-table.png";
const cardAccessSystem = "/card-access-system.png";


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
      
      {/* [S1] Hero Section - Corporate Style */}
      <section id="s1" data-section="S1" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
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
                <span className="text-blue-600">MikaPass</span><br />
                <span className="text-gray-800">Akıllı Erişim Kontrol Sistemi</span>
              </h1>
              <p className="text-2xl text-gray-700 mb-6 max-w-4xl mx-auto leading-relaxed">
                Bina içindeki kapıları yetki seviyesine göre geçiş kontrol yapın.
              </p>
              <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                Antipassback ve Global Antipassback özelliği ile bir kapı kapanmadan diğer kapıdan geçiş engelleyin. 
                Limit kontör ve saat aralıkları ile tam güvenlik kontrolü sağlayın.
              </p>
            </motion.div>

            {/* Features Tags */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white shadow-lg text-blue-700 px-6 py-3 rounded-full text-base font-semibold border border-blue-100">
                🏢 Yetki Seviyeli Kontrol
              </div>
              <div className="bg-white shadow-lg text-blue-700 px-6 py-3 rounded-full text-base font-semibold border border-blue-100">
                🚪 Antipassback Sistemi
              </div>
              <div className="bg-white shadow-lg text-blue-700 px-6 py-3 rounded-full text-base font-semibold border border-blue-100">
                ⏰ Saat Aralığı Kontrolü
              </div>
            </motion.div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Video Demo */}
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Canlı Demo</h3>
                  <p className="text-gray-600">MikaPass sisteminin gerçek zamanlı çalışmasını izleyin</p>
                </div>
                <video
                  autoPlay
                  loop
                  muted={false}
                  controls={true}
                  playsInline
                  preload="auto"
                  className="w-full h-auto rounded-2xl object-cover shadow-lg"
                  onError={(e) => console.log('Video yükleme hatası:', e)}
                  onLoad={() => console.log('Video yüklendi')}
                >
                  <source src="/access-hero-video.mp4" type="video/mp4" />
                  <p className="text-center text-gray-600 p-4">Video yüklenemiyor...</p>
                </video>
              </div>
            </motion.div>

            {/* Right - Professional Features */}
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="space-y-8">
                {/* Feature Cards */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-blue-50">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-2xl">🔐</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Global Antipassback</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Bir kapı kapanmadan diğer kapıdan geçişi engeller. Güvenlik açıklarını tamamen kapatır.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-xl border border-blue-50">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-2xl">⏱️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Saat Aralığı Kontrolü</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Belirli saatlerde geçiş izinleri tanımlayın. Mesai saatleri dışında otomatik kısıtlama.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-xl border border-blue-50">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-2xl">👥</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Yetki Seviyeli Erişim</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Her personele özel yetki tanımlaması. Departman bazlı erişim kontrolü ve izleme.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* [S2] Cloud Based Access Control Section */}
      <section id="s2" data-section="S2" className="relative py-32 bg-gray-50">
        <div className="pointer-events-none select-none absolute top-4 left-4 z-20 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">S2</div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
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
                {/* Real Dashboard Image */}
                <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <img 
                    src={dashboardImage} 
                    alt="Bulut Tabanlı Yönetim Dashboard"
                    className="w-full h-auto object-contain"
                    width="800"
                    height="600"
                  />
                </div>
                {/* Card Access System - Floating with Animation */}
                <motion.div 
                  className="absolute -bottom-8 -right-8 w-64 h-auto"
                  animate={{ 
                    y: [0, -10, 0],
                    rotateY: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <img 
                    src={cardAccessSystem} 
                    alt="Kartlı Geçiş Kontrol Sistemi"
                    className="w-full h-auto object-contain drop-shadow-2xl rounded-xl"
                    width="300"
                    height="200"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* [S3] Advanced Features Section */}
      <section id="s3" data-section="S3" className="relative py-32 bg-white">
        <div className="pointer-events-none select-none absolute top-4 left-4 z-20 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">S3</div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Advanced Dashboard */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mika Teknoloji PDKS Dashboard</h3>
                  <p className="text-gray-600 text-sm">Personel takip ve güvenlik kontrol sistemleri canlı raporlama paneli</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-50 to-white">
                  <img 
                    src="/pdks-dashboard-interface.png" 
                    alt="Mika Teknoloji PDKS Dashboard - Personel Takip ve Güvenlik Kontrol Sistemi"
                    className="w-full h-auto object-contain rounded-xl shadow-lg"
                    width="800"
                    height="600"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Content - Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Kurumsal Düzeyde<br />
                  <span className="text-blue-600">İleri Özellikler</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Mika Teknoloji'nin bulut tabanlı geçiş kontrol sistemi, kurumsal 
                  ihtiyaçlarınıza yönelik gelişmiş raporlama ve iletişim altyapısı sunar.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start p-6 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl mr-4 flex items-center justify-center flex-shrink-0">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">SQL Raporlar</h4>
                    <p className="text-sm text-gray-600">Detaylı personel giriş-çıkış raporları, vardiya analizleri ve özelleştirilebilen SQL sorguları ile kapsamlı veri analizi imkanı.</p>
                  </div>
                </div>
                
                <div className="flex items-start p-6 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl mr-4 flex items-center justify-center flex-shrink-0">
                    <Share2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">API Paylaşım</h4>
                    <p className="text-sm text-gray-600">RESTful API entegrasyonu ile mevcut ERP, İK ve bordro sistemlerinize sorunsuz bağlantı ve veri senkronizasyonu sağlama.</p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl mr-4 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Mail Atma</h4>
                    <p className="text-sm text-gray-600">Otomatik e-posta bildirimleri ile personel giriş-çıkış durumları, geç kalma uyarıları ve periyodik raporların ilgili birimlere iletimi.</p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl mr-4 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">SMS Atma</h4>
                    <p className="text-sm text-gray-600">Anlık SMS bildirimleri ile acil durum uyarıları, vardiya değişiklikleri ve önemli duyuruların personele hızlı ulaştırılması.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* [S4] Hardware Section */}
      <section id="s4" data-section="S4" className="relative py-32 bg-gray-50">
        <div className="pointer-events-none select-none absolute top-4 left-4 z-20 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">S4</div>
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
                  <div className="w-full max-w-sm mx-auto bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl h-80 flex items-center justify-center">
                    <img 
                      src="/access-control-panels.png" 
                      alt="Access Kontrol Panelleri"
                      className="max-w-full max-h-full object-contain"
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
                  <div className="w-full max-w-sm mx-auto bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl h-80 flex items-center justify-center">
                    <img 
                      src="/professional-access-panel.png" 
                      alt="Professional Access Control Panel"
                      className="max-w-full max-h-full object-contain"
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


      {/* [S5] Cloud Based System */}
      <section id="s5" data-section="S5" className="relative py-32 bg-white">
        <div className="pointer-events-none select-none absolute top-4 left-4 z-20 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">S5</div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - QR Visitor System */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img 
                  src="/qr-visitor-system.png" 
                  alt="Ziyaretçi QR Kod Takip Sistemi"
                  className="w-full h-auto object-contain"
                  width="600"
                  height="800"
                />
              </div>
            </motion.div>

            {/* Right - Visitor Tracking Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Ziyaretçi Takip<br />
                  <span className="text-blue-600">QR Sistemi</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Tek kullanımlık printer veya SMS ile gönderilen QR kodlar ile 
                  ziyaretçilerinizi kolayca takip edin. Turnikelerden başarıyla 
                  geçen her ziyaretçi anında sisteme kaydedilir.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <div className="text-2xl">🖨️</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Tek Kullanımlık QR Printer</h4>
                    <p className="text-gray-600 text-sm">Anında basılabilen geçici erişim kodları</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <div className="text-2xl">📱</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">SMS ile QR Gönderimi</h4>
                    <p className="text-gray-600 text-sm">Ziyaretçilere otomatik QR kod gönderimi</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <div className="text-2xl">🚪</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Turnike Entegrasyonu</h4>
                    <p className="text-gray-600 text-sm">Başarıyla geçişlerin anlık takibi</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* [S6] Fast and Secure Access - TEMPORARILY DISABLED */}
      {/* S6 content will be re-added properly after design approval */}

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