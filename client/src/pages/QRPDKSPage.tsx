import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { trackEvent } from "@/lib/analytics";
import { 
  ArrowRight, 
  QrCode, 
  Cloud, 
  Settings,
  Lock,
  Phone
} from "lucide-react";
import { Link } from "wouter";
import qrKodOkumaImage from "@assets/image_1758816518741.png";
import qrPdksDemoVideo from "@assets/Untitled Video_1759323015173.mp4";
import giriscikisListesiImage from "@assets/IMG_4251_1759436174932.png";
import talepOlusturImage from "@assets/IMG_4252_1759436659395.png";
import avansTalepImage from "@assets/IMG_4253_1759436694818.png";

export default function QRPDKSPage() {
  const handleDemoRequest = () => {
    trackEvent('Demo Request', 'qr_pdks_demo', 'QR PDKS Page - Demo Button');
  };

  const handleContactRequest = () => {
    trackEvent('Contact Request', 'qr_pdks_contact', 'QR PDKS Page - Contact Button');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };


  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>QR Kod PDKS | Mika Teknoloji - Mobil Personel Takip Sistemi</title>
        <meta 
          name="description" 
          content="QR kod tabanlı personel devam kontrol sistemi (PDKS). Mobil uygulama ile QR kod okutma, personel giriş çıkış takibi, vardiya yönetimi. SGK uyumlu, bulut tabanlı QR PDKS çözümü." 
        />
        <meta name="keywords" content="qr kod pdks, qr personel takip, mobil pdks, qr kod personel giriş çıkış, qr tabanlı personel takip sistemi, mobil personel kontrol sistemi, qr kod okuyucu pdks, akıllı telefon pdks, mobil vardiya takip, contactless pdks, temassız personel takip, qr code personnel tracking" />
        <meta name="author" content="Mika Teknoloji" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="language" content="tr" />
        <meta name="geo.region" content="TR" />
        <meta name="geo.country" content="Turkey" />
        <meta name="geo.placename" content="Türkiye" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="QR Kod PDKS | Mika Teknoloji - Mobil Personel Takip Sistemi" />
        <meta property="og:description" content="QR kod tabanlı personel devam kontrol sistemi (PDKS). Mobil uygulama ile QR kod okutma, personel giriş çıkış takibi, vardiya yönetimi. SGK uyumlu, bulut tabanlı QR PDKS çözümü." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mikateknoloji.com/urunler/qr-pdks" />
        <meta property="og:image" content="https://mikateknoloji.com/images/qr-pdks-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Mika Teknoloji QR Kod PDKS - Mobil Personel Takip Sistemi" />
        <meta property="og:site_name" content="Mika Teknoloji" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:locale:alternate" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="QR Kod PDKS | Mika Teknoloji - Mobil Personel Takip Sistemi" />
        <meta name="twitter:description" content="QR kod tabanlı personel devam kontrol sistemi (PDKS). Mobil uygulama ile QR kod okutma, personel giriş çıkış takibi, vardiya yönetimi." />
        <meta name="twitter:image" content="https://mikateknoloji.com/images/qr-pdks-twitter.jpg" />
        <meta name="twitter:image:alt" content="Mika Teknoloji QR Kod PDKS" />
        <meta name="twitter:site" content="@mikateknoloji" />
        <meta name="twitter:creator" content="@mikateknoloji" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#EC4899" />
        <meta name="apple-mobile-web-app-title" content="Mika QR PDKS" />
        <meta name="application-name" content="Mika Teknoloji QR Kod PDKS" />
        <meta name="msapplication-TileColor" content="#EC4899" />
        
        {/* Canonical and Hreflang */}
        <link rel="canonical" href="https://mikateknoloji.com/urunler/qr-pdks" />
        <link rel="alternate" hrefLang="tr" href="https://mikateknoloji.com/urunler/qr-pdks" />
        <link rel="alternate" hrefLang="en" href="https://mikateknoloji.com/en/products/qr-pdks" />
        <link rel="alternate" hrefLang="x-default" href="https://mikateknoloji.com/urunler/qr-pdks" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://mikateknoloji.com/#organization",
              "name": "Mika Teknoloji Kontrol Sistemleri",
              "url": "https://mikateknoloji.com",
              "logo": "https://mikateknoloji.com/images/mikateknoloji-logo.png",
              "description": "Türkiye'de 20+ yıldır personel takip sistemleri, PDKS, güvenlik çözümleri ve turnike sistemleri üretiminde lider teknoloji şirketi.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "TR",
                "addressRegion": "Türkiye"
              },
              "sameAs": [
                "https://www.linkedin.com/company/mikateknoloji",
                "https://twitter.com/mikateknoloji"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "QR Kod PDKS - Mobil Personel Takip Sistemi",
              "description": "QR kod tabanlı personel devam kontrol sistemi. Mobil uygulama ile QR kod okutma, personel giriş çıkış takibi, vardiya yönetimi ve SGK uyumlu bulut tabanlı çözüm.",
              "url": "https://mikateknoloji.com/urunler/qr-pdks",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web, iOS, Android",
              "provider": {
                "@id": "https://mikateknoloji.com/#organization"
              },
              "featureList": [
                "QR kod okutma ile giriş çıkış",
                "Mobil uygulama desteği",
                "Bulut tabanlı altyapı",
                "SGK uyumlu raporlama",
                "Vardiya yönetimi",
                "Gerçek zamanlı takip",
                "Temassız personel kontrolü",
                "Çoklu lokasyon desteği"
              ],
              "screenshot": "https://mikateknoloji.com/images/qr-pdks-screenshot.jpg"
            },
            {
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
                  "name": "QR Kod PDKS",
                  "item": "https://mikateknoloji.com/urunler/qr-pdks"
                }
              ]
            }
          ])}
        </script>
      </Helmet>

      {/* Hero Section with Video Header */}
      <section data-testid="hero-section" className="relative py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto text-center">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center bg-primary/10 px-6 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <QrCode className="w-4 h-4 text-primary mr-3" />
              <span className="text-primary font-medium text-sm tracking-wider uppercase">
                QR Kod Teknolojisi
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              QR Kod PDKS - Mobil Personel Takip Sistemi
            </h1>
            
            <h2 className="text-xl md:text-2xl text-slate-600 font-light mb-8">
              Akıllı telefonlarla QR kod okutarak personel giriş-çıkış takibi yapın. 
              <Link href="/urunler" className="text-primary hover:text-primary/80 font-medium underline"> Temassız PDKS çözümü</Link> ile 
              İstanbul, İzmir, Ankara ve tüm Türkiye'deki işletmeler için güvenli personel kontrolü.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={handleDemoRequest}
                data-testid="button-demo-request"
              >
                <Link href="/iletisim">
                  <span>Ücretsiz Demo Talep Et</span>
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-xl font-semibold text-lg"
                onClick={handleContactRequest}
                data-testid="button-contact-request"
              >
                <Link href="/iletisim">
                  <span>Online Sunum Talep Et</span>
                </Link>
              </Button>
            </div>

            {/* Video Header Section */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-2 max-w-4xl mx-auto">
              <div className="aspect-video rounded-xl overflow-hidden bg-black">
                <video 
                  src={qrPdksDemoVideo}
                  autoPlay
                  muted={false}
                  loop
                  playsInline
                  controls
                  className="w-full h-full object-contain"
                  data-testid="qr-pdks-demo-video"
                >
                  Tarayıcınız video etiketini desteklemiyor.
                </video>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section Header */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-6xl mx-auto"
            {...fadeInUp}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-primary/20 to-pink-500/20 backdrop-blur-sm border border-primary/30 px-8 py-4 rounded-full mb-10">
              <div className="w-3 h-3 bg-primary rounded-full mr-4 animate-pulse"></div>
              <span className="text-primary font-bold text-sm tracking-widest uppercase">Kurumsal Teknoloji Çözümleri</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              QR Kod PDKS 
              <span className="text-transparent bg-gradient-to-r from-primary via-pink-400 to-primary bg-clip-text animate-pulse">
                Avantajları
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-5xl mx-auto leading-relaxed mb-12">
              Fortune 500 şirketlerinin tercih ettiği kurumsal düzeyde mobil teknoloji ile 
              personel takibini kolaylaştıran QR kod PDKS sistemi, işletmenize dijital dönüşüm, 
              operasyonel verimlilik ve güvenlik katıyor.
            </p>
            
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="w-8 h-1 bg-primary rounded-full"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-pink-400 rounded-full"></div>
              <div className="w-8 h-1 bg-pink-400 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Q1 - QR Kod Okutma */}
      <section data-testid="Q1" className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Segment Code */}
        <div className="absolute top-6 left-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full text-lg font-bold z-20 shadow-xl">Q1</div>
        
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-7xl mx-auto"
            {...fadeInUp}
          >
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row min-h-[400px]">
                  {/* Resim Alanı - Büyük ve Premium */}
                  <div className="lg:w-2/5 relative bg-gradient-to-br from-primary/10 via-primary/5 to-pink-500/10">
                    {/* Premium Image Container */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent"></div>
                    <div className="relative h-full flex items-center justify-center p-8">
                      <div className="relative w-full max-w-[200px] mx-auto">
                        {/* iPhone Çerçevesi */}
                        <div className="relative">
                          {/* iPhone Dış Çerçeve */}
                          <div className="bg-gray-900 rounded-[2.5rem] p-1 shadow-2xl">
                            {/* iPhone İç Ekran */}
                            <div className="bg-white rounded-[2.2rem] overflow-hidden relative" style={{aspectRatio: '375/812'}}>
                              {/* Üst çentik (notch) */}
                              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-xl z-10"></div>
                              {/* QR Kod Okuma Resmi */}
                              <img 
                                src={qrKodOkumaImage} 
                                alt="QR Kod Okuma Mobil Uygulama - Mika Teknoloji PDKS"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          {/* Home Indicator */}
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    {/* Decorative Corner */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-pink-400 to-primary"></div>
                  </div>
                  
                  {/* İçerik Alanı - Premium Typography */}
                  <div className="lg:w-3/5 p-12 lg:p-16 flex flex-col justify-center">
                    <div className="space-y-8">
                      {/* Premium Badge */}
                      <div className="inline-flex items-center bg-gradient-to-r from-primary/20 to-pink-400/20 px-6 py-3 rounded-full border border-primary/30">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
                        <span className="text-primary font-semibold text-sm tracking-wider uppercase">Teknolojik Üstünlük</span>
                      </div>
                      
                      {/* Premium Title */}
                      <div>
                        <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6 leading-tight">
                          QR Kod PDKS + Güvenlik Sistemi
                        </h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-pink-400 rounded-full mb-8"></div>
                      </div>
                      
                      {/* Premium Description */}
                      <div className="space-y-6">
                        <p className="text-xl text-slate-700 leading-relaxed font-light">
                          <strong className="text-slate-800 font-semibold">Fake GPS engelleme ve konum doğrulama</strong> ile 
                          sahte konumu, kopya kimlikleri ve riskli cihazları anında tespit edin.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                          Çok katmanlı güvenlik sistemiyle mükerrer ID önleme, gerçek zamanlı konum doğrulama ve 
                          jeofencing kombinasyonu. Evden sahte QR okutmayı engelleyen 
                          <span className="text-primary font-medium"> %100 güvenli PDKS</span> çözümü.
                        </p>
                      </div>
                      
                      {/* Premium Features */}
                      <div className="grid grid-cols-2 gap-6 pt-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">Fake GPS Engelleme</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">Konum Doğrulama</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">Mükerrer ID Önleme</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">Jeofencing</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">Root/Jailbreak Tespiti</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">VPN/Proxy Kontrolü</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Q2 - Mobil Uygulama */}
      <section data-testid="Q2" className="relative py-20 bg-gradient-to-br from-slate-100 via-white to-slate-100">
        {/* Segment Code */}
        <div className="absolute top-6 left-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full text-lg font-bold z-20 shadow-xl">Q2</div>
        
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-7xl mx-auto"
            {...fadeInUp}
          >
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row-reverse min-h-[400px]">
                  {/* Resim Alanı - Büyük ve Premium */}
                  <div className="lg:w-2/5 relative bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-purple-500/10">
                    {/* Premium Image Container */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent"></div>
                    <div className="relative h-full flex items-center justify-center p-8">
                      <div className="relative w-full max-w-[200px] mx-auto">
                        {/* iPhone Çerçevesi */}
                        <div className="relative">
                          {/* iPhone Dış Çerçeve */}
                          <div className="bg-gray-900 rounded-[2.5rem] p-1 shadow-2xl">
                            {/* iPhone İç Ekran */}
                            <div className="bg-white rounded-[2.2rem] overflow-hidden relative" style={{aspectRatio: '375/812'}}>
                              {/* Üst çentik (notch) */}
                              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-xl z-10"></div>
                              {/* Giriş-Çıkış Listesi Resmi */}
                              <img 
                                src={giriscikisListesiImage} 
                                alt="Giriş Çıkış Listesi - Mika Teknoloji PDKS"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          {/* Home Indicator */}
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    {/* Decorative Corner */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-400 to-blue-600"></div>
                  </div>
                  
                  {/* İçerik Alanı - Premium Typography */}
                  <div className="lg:w-3/5 p-12 lg:p-16 flex flex-col justify-center">
                    <div className="space-y-8">
                      {/* Premium Badge */}
                      <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-6 py-3 rounded-full border border-blue-500/30">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                        <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Akıllı Onay Sistemi</span>
                      </div>
                      
                      {/* Premium Title */}
                      <div>
                        <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6 leading-tight">
                          Bulut Tabanlı Otomatik Düzeltme ve Onay Akışı
                        </h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
                      </div>
                      
                      {/* Premium Description */}
                      <div className="space-y-6">
                        <p className="text-xl text-slate-700 leading-relaxed font-light">
                          <strong className="text-slate-800 font-semibold">Klasik PDKS sistemlerinde</strong> personel çıkış yapmayı unuttuğunda, 
                          yöneticiler personeli arayıp kaçta çıktığını öğrenip elle müdahale etmek zorunda kalıyordu.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                          <strong className="text-slate-800 font-semibold">QR Kod PDKS bulut sistemimizde</strong> artık bu iş yükü ortadan kalkıyor! 
                          Personel düzeltme kaydını mobil uygulamadan girer, amirine otomatik bildirim gider. 
                          Amir onayladıktan sonra kayıt İK'ya düşer. İK kimin onayladığını görür ve 
                          onaylayınca <span className="text-blue-600 font-medium">hareket otomatik olarak düzenlenir</span>.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                          İş yükünüzü azaltıyor, süreçlerinizi disipline sokuyoruz.
                        </p>
                      </div>
                      
                      {/* Premium Features */}
                      <div className="grid grid-cols-2 gap-6 pt-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">Personel Düzeltme Talebi</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">Amir Onay Sistemi</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">İK Kontrol Paneli</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">Otomatik Düzeltme</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">Anlık Bildirimler</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">Onay Geçmişi</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Q3 - Temassız Sistem */}
      <section data-testid="Q3" className="relative py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        {/* Segment Code */}
        <div className="absolute top-6 left-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full text-lg font-bold z-20 shadow-xl">Q3</div>
        
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/5 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-7xl mx-auto"
            {...fadeInUp}
          >
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row min-h-[400px]">
                  {/* Resim Alanı - İki iPhone Yan Yana */}
                  <div className="lg:w-2/5 relative bg-gradient-to-br from-emerald-500/10 via-green-400/5 to-teal-500/10">
                    {/* Premium Image Container */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent"></div>
                    <div className="relative h-full flex items-center justify-center p-6">
                      <div className="flex gap-4 items-center">
                        {/* İlk iPhone - Talep Oluştur */}
                        <div className="relative w-[140px]">
                          <div className="relative">
                            {/* iPhone Dış Çerçeve */}
                            <div className="bg-gray-900 rounded-[2rem] p-[3px] shadow-2xl">
                              {/* iPhone İç Ekran */}
                              <div className="bg-white rounded-[1.8rem] overflow-hidden relative" style={{aspectRatio: '375/812'}}>
                                {/* Üst çentik (notch) */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-b-lg z-10"></div>
                                {/* Talep Oluştur Resmi */}
                                <img 
                                  src={talepOlusturImage} 
                                  alt="Talep Oluşturma Ekranı - Mika Teknoloji PDKS"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                            {/* Home Indicator */}
                            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-14 h-[3px] bg-white rounded-full"></div>
                          </div>
                        </div>

                        {/* İkinci iPhone - Avans Talep */}
                        <div className="relative w-[140px]">
                          <div className="relative">
                            {/* iPhone Dış Çerçeve */}
                            <div className="bg-gray-900 rounded-[2rem] p-[3px] shadow-2xl">
                              {/* iPhone İç Ekran */}
                              <div className="bg-white rounded-[1.8rem] overflow-hidden relative" style={{aspectRatio: '375/812'}}>
                                {/* Üst çentik (notch) */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-b-lg z-10"></div>
                                {/* Avans Talep Resmi */}
                                <img 
                                  src={avansTalepImage} 
                                  alt="Avans Talep Ekranı - Mika Teknoloji PDKS"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                            {/* Home Indicator */}
                            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-14 h-[3px] bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Decorative Corner */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-green-400 to-teal-500"></div>
                  </div>
                  
                  {/* İçerik Alanı - Premium Typography */}
                  <div className="lg:w-3/5 p-12 lg:p-16 flex flex-col justify-center">
                    <div className="space-y-8">
                      {/* Premium Badge */}
                      <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/20 to-teal-500/20 px-6 py-3 rounded-full border border-emerald-500/30">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
                        <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase">Hijyen & Güvenlik</span>
                      </div>
                      
                      {/* Premium Title */}
                      <div>
                        <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6 leading-tight">
                          Temassız Güvenlik Sistemi
                        </h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-8"></div>
                      </div>
                      
                      {/* Premium Description */}
                      <div className="space-y-6">
                        <p className="text-xl text-slate-700 leading-relaxed font-light">
                          <strong className="text-slate-800 font-semibold">Yeni nesil temassız teknoloji</strong> ile 
                          hijyen ve güvenlik standartlarını en üst seviyeye çıkarın.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                          COVID-19 sonrası yeni normalde güvenli mesafe kurallarına uygun personel kontrolü. 
                          Fiziksel temasın tamamen ortadan kalktığı bu sistemle 
                          <span className="text-emerald-600 font-medium"> %100 hijyenik</span> personel takip deneyimi.
                        </p>
                      </div>
                      
                      {/* Premium Features */}
                      <div className="grid grid-cols-2 gap-6 pt-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">Fiziksel Temassız</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">Hijyen Odaklı</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">Güvenli Mesafe</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">Antimikrobiyal</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Q4 - Bulut Tabanlı Altyapı */}
      <section data-testid="Q4" className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Segment Code */}
        <div className="absolute top-6 left-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full text-lg font-bold z-20 shadow-xl">Q4</div>
        
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-7xl mx-auto"
            {...fadeInUp}
          >
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row-reverse min-h-[400px]">
                  {/* Resim Alanı - Büyük ve Premium */}
                  <div className="lg:w-2/5 relative bg-gradient-to-br from-indigo-500/10 via-blue-400/5 to-cyan-500/10">
                    {/* Premium Image Container */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent"></div>
                    <div className="relative h-full flex items-center justify-center p-12">
                      <div className="relative">
                        {/* Main Icon Container */}
                        <div className="w-48 h-48 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                          <Cloud className="h-24 w-24 text-white" />
                        </div>
                        {/* Floating Elements */}
                        <div className="absolute -top-6 -left-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                          <div className="w-3 h-3 bg-indigo-500 rounded-full animate-spin"></div>
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full shadow-lg opacity-80"></div>
                      </div>
                    </div>
                    {/* Decorative Corner */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-blue-400 to-cyan-500"></div>
                  </div>
                  
                  {/* İçerik Alanı - Premium Typography */}
                  <div className="lg:w-3/5 p-12 lg:p-16 flex flex-col justify-center">
                    <div className="space-y-8">
                      {/* Premium Badge */}
                      <div className="inline-flex items-center bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 px-6 py-3 rounded-full border border-indigo-500/30">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 animate-pulse"></div>
                        <span className="text-indigo-600 font-semibold text-sm tracking-wider uppercase">Kurumsal Bulut</span>
                      </div>
                      
                      {/* Premium Title */}
                      <div>
                        <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6 leading-tight">
                          Bulut Tabanlı Altyapı
                        </h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mb-8"></div>
                      </div>
                      
                      {/* Premium Description */}
                      <div className="space-y-6">
                        <p className="text-xl text-slate-700 leading-relaxed font-light">
                          <strong className="text-slate-800 font-semibold">Enterprise sınıfı bulut altyapısı</strong> ile 
                          verileriniz maksimum güvenlik ve performansla korunur.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                          AWS ve Microsoft Azure üzerinde çalışan altyapı ile 7/24 erişim, otomatik yedekleme, 
                          çoklu coğrafi lokasyon desteği ve 
                          <span className="text-indigo-600 font-medium"> ISO 27001 sertifikalı</span> güvenlik protokolleri.
                        </p>
                      </div>
                      
                      {/* Premium Features */}
                      <div className="grid grid-cols-2 gap-6 pt-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">7/24 Erişim</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">Otomatik Yedekleme</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">Multi-Lokasyon</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">ISO 27001</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Q5 - Kolay Kurulum */}
      <section data-testid="Q5" className="relative py-20 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        {/* Segment Code */}
        <div className="absolute top-6 left-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full text-lg font-bold z-20 shadow-xl">Q5</div>
        
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/5 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-7xl mx-auto"
            {...fadeInUp}
          >
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row min-h-[400px]">
                  {/* Resim Alanı - Büyük ve Premium */}
                  <div className="lg:w-2/5 relative bg-gradient-to-br from-amber-500/10 via-orange-400/5 to-yellow-500/10">
                    {/* Premium Image Container */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent"></div>
                    <div className="relative h-full flex items-center justify-center p-12">
                      <div className="relative">
                        {/* Main Icon Container */}
                        <div className="w-48 h-48 bg-gradient-to-br from-amber-600 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                          <Settings className="h-24 w-24 text-white" />
                        </div>
                        {/* Floating Elements */}
                        <div className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                          <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full shadow-lg opacity-80"></div>
                      </div>
                    </div>
                    {/* Decorative Corner */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 via-orange-400 to-yellow-500"></div>
                  </div>
                  
                  {/* İçerik Alanı - Premium Typography */}
                  <div className="lg:w-3/5 p-12 lg:p-16 flex flex-col justify-center">
                    <div className="space-y-8">
                      {/* Premium Badge */}
                      <div className="inline-flex items-center bg-gradient-to-r from-amber-500/20 to-yellow-500/20 px-6 py-3 rounded-full border border-amber-500/30">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 animate-pulse"></div>
                        <span className="text-amber-600 font-semibold text-sm tracking-wider uppercase">Hızlı & Kolay</span>
                      </div>
                      
                      {/* Premium Title */}
                      <div>
                        <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6 leading-tight">
                          Express Kurulum Sistemi
                        </h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mb-8"></div>
                      </div>
                      
                      {/* Premium Description */}
                      <div className="space-y-6">
                        <p className="text-xl text-slate-700 leading-relaxed font-light">
                          <strong className="text-slate-800 font-semibold">Dünyada bir ilk</strong> olan 1 saatlik 
                          kurulum süreci ile sistem hemen çalışmaya başlar.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                          Plug-and-play teknolojisi sayesinde minimum donanım gereksinimi. 
                          Mevcut sistemlerinizle tam entegrasyon, uzaktan kurulum desteği ve 
                          <span className="text-amber-600 font-medium"> %0 kesinti</span> ile geçiş.
                        </p>
                      </div>
                      
                      {/* Premium Features */}
                      <div className="grid grid-cols-2 gap-6 pt-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">1 Saat Kurulum</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">Plug & Play</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">Uzaktan Destek</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">Sıfır Kesinti</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Q6 - SGK Uyumlu Raporlama */}
      <section data-testid="Q6" className="relative py-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        {/* Segment Code */}
        <div className="absolute top-6 left-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full text-lg font-bold z-20 shadow-xl">Q6</div>
        
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-violet-500/5 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-7xl mx-auto"
            {...fadeInUp}
          >
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row-reverse min-h-[400px]">
                  {/* Resim Alanı - Büyük ve Premium */}
                  <div className="lg:w-2/5 relative bg-gradient-to-br from-violet-500/10 via-purple-400/5 to-indigo-500/10">
                    {/* Premium Image Container */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent"></div>
                    <div className="relative h-full flex items-center justify-center p-12">
                      <div className="relative">
                        {/* Main Icon Container */}
                        <div className="w-48 h-48 bg-gradient-to-br from-violet-600 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                          <Lock className="h-24 w-24 text-white" />
                        </div>
                        {/* Floating Elements */}
                        <div className="absolute -top-6 -left-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                          <div className="w-3 h-3 bg-violet-500 rounded-full animate-pulse"></div>
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full shadow-lg opacity-80"></div>
                      </div>
                    </div>
                    {/* Decorative Corner */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-violet-500 via-purple-400 to-indigo-500"></div>
                  </div>
                  
                  {/* İçerik Alanı - Premium Typography */}
                  <div className="lg:w-3/5 p-12 lg:p-16 flex flex-col justify-center">
                    <div className="space-y-8">
                      {/* Premium Badge */}
                      <div className="inline-flex items-center bg-gradient-to-r from-violet-500/20 to-indigo-500/20 px-6 py-3 rounded-full border border-violet-500/30">
                        <div className="w-2 h-2 bg-violet-500 rounded-full mr-3 animate-pulse"></div>
                        <span className="text-violet-600 font-semibold text-sm tracking-wider uppercase">Yasal Uyumluluk</span>
                      </div>
                      
                      {/* Premium Title */}
                      <div>
                        <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6 leading-tight">
                          SGK Uyumlu Raporlama
                        </h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mb-8"></div>
                      </div>
                      
                      {/* Premium Description */}
                      <div className="space-y-6">
                        <p className="text-xl text-slate-700 leading-relaxed font-light">
                          <strong className="text-slate-800 font-semibold">Türkiye mevzuatına %100 uyumlu</strong> 
                          raporlama sistemi ile yasal yümlülüklerinizi eksiksiz yerine getirin.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                          SGK bildirimleri, bordro entegrasyonu, mesai hesaplamaları ve otomatik ücretsiz izin takibi. 
                          Çalışma ve Sosyal Güvenlik Bakanlığı tarafından 
                          <span className="text-violet-600 font-medium"> sertifikalı sistem</span>.
                        </p>
                      </div>
                      
                      {/* Premium Features */}
                      <div className="grid grid-cols-2 gap-6 pt-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">SGK Entegrasyonu</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">Bordro Sistemi</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">Mesai Hesaplama</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">Otomatik Bildirim</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section data-testid="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              QR Kod PDKS Nasıl Çalışır?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              3 basit adımda QR kod ile personel takip sistemini kullanmaya başlayın
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "QR Kod Oluşturma",
                description: "Her personel için benzersiz QR kod oluşturun ve personel kartlarına basın"
              },
              {
                step: "2", 
                title: "Mobil Uygulama",
                description: "iOS/Android mobil uygulamayı indirin ve giriş-çıkış noktalarına yerleştirin"
              },
              {
                step: "3",
                title: "Takip ve Raporlama",
                description: "Gerçek zamanlı personel hareketlerini izleyin, SGK uyumlu raporlar alın"
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-testid="cta-section" className="py-20 bg-gradient-to-r from-primary to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            className="max-w-3xl mx-auto"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              QR Kod PDKS ile Personel Takibini Modernize Edin
            </h2>
            <p className="text-xl mb-8 text-pink-100">
              Ücretsiz demo ile QR kod PDKS sisteminin avantajlarını keşfedin. 
              Kurulum ve kullanım desteği dahil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-slate-50 px-8 py-4 rounded-xl font-semibold text-lg"
                data-testid="button-cta-demo"
              >
                <Link href="/iletisim">
                  <Phone className="mr-3 h-5 w-5" />
                  <span>Hemen Demo Talep Et</span>
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg"
                data-testid="button-cta-products"
              >
                <Link href="/urunler">
                  <span>Tüm Ürünleri İncele</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}