import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { trackEvent } from "@/lib/analytics";
import { 
  ArrowRight, 
  QrCode, 
  Shield, 
  Cloud, 
  Smartphone,
  Settings,
  Lock,
  Phone,
  Video
} from "lucide-react";
import { Link } from "wouter";

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

            {/* Video Header Section - User will add video here */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-2 max-w-4xl mx-auto">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-center" data-testid="video-placeholder">
                  <Video className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600 font-medium text-lg mb-2">QR Kod PDKS Demo Videosu</p>
                  <p className="text-slate-500 text-sm">Video yükleme alanı - Buraya demo videosu eklenecek</p>
                </div>
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
                    <div className="relative h-full flex items-center justify-center p-12">
                      <div className="relative">
                        {/* Main Icon Container */}
                        <div className="w-48 h-48 bg-gradient-to-br from-primary to-primary/80 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                          <QrCode className="h-24 w-24 text-white" />
                        </div>
                        {/* Floating Elements */}
                        <div className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                          <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-primary to-pink-400 rounded-full shadow-lg opacity-80"></div>
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
                          QR Kod Okutma Sistemi
                        </h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-pink-400 rounded-full mb-8"></div>
                      </div>
                      
                      {/* Premium Description */}
                      <div className="space-y-6">
                        <p className="text-xl text-slate-700 leading-relaxed font-light">
                          En gelişmiş <strong className="text-slate-800 font-semibold">QR kod teknolojisi</strong> ile 
                          personel giriş-çıkış işlemlerini saniyeler içinde gerçekleştirin.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                          Akıllı telefon kamerası ile personel kartındaki benzersiz QR kodu okutarak, 
                          gerçek zamanlı veri işleme altyapısı sayesinde anında giriş-çıkış kaydı oluşturun. 
                          <span className="text-primary font-medium"> %99.9 doğruluk oranı</span> ile sektörde lider performans.
                        </p>
                      </div>
                      
                      {/* Premium Features */}
                      <div className="grid grid-cols-2 gap-6 pt-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">Saniye İçinde Okuma</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">Yüksek Doğruluk Oranı</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">Tüm Kamera Türleri</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                          <span className="text-slate-600 font-medium">Çoklu Format Desteği</span>
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
      <section data-testid="Q2" className="relative py-12 bg-white">
        {/* Segment Code */}
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">Q2</div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-5xl mx-auto"
            {...fadeInUp}
          >
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Resim Alanı */}
                  <div className="md:w-1/3 bg-gradient-to-br from-primary/5 to-primary/20 p-8 flex items-center justify-center">
                    <div className="w-32 h-32 bg-primary/10 rounded-2xl flex items-center justify-center border-2 border-primary/20">
                      <Smartphone className="h-16 w-16 text-primary" />
                    </div>
                  </div>
                  {/* İçerik Alanı */}
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-start space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">
                          Mobil Uygulama
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-lg">
                          iOS ve Android uyumlu mobil uygulama ile her yerden erişim. Personel ve yöneticiler için ayrı arayüzler, offline çalışma desteği ve senkronizasyon özellikleri.
                        </p>
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
      <section data-testid="Q3" className="relative py-12 bg-slate-50">
        {/* Segment Code */}
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">Q3</div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-5xl mx-auto"
            {...fadeInUp}
          >
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Resim Alanı */}
                  <div className="md:w-1/3 bg-gradient-to-br from-primary/5 to-primary/20 p-8 flex items-center justify-center">
                    <div className="w-32 h-32 bg-primary/10 rounded-2xl flex items-center justify-center border-2 border-primary/20">
                      <Shield className="h-16 w-16 text-primary" />
                    </div>
                  </div>
                  {/* İçerik Alanı */}
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-start space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">
                          Temassız Sistem
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-lg">
                          Hijyen ve güvenlik odaklı temassız personel takip çözümü. COVID-19 sonrası yeni normalde güvenli mesafe kurallarına uygun personel kontrolü sağlayın.
                        </p>
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
      <section data-testid="Q4" className="relative py-12 bg-white">
        {/* Segment Code */}
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">Q4</div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-5xl mx-auto"
            {...fadeInUp}
          >
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Resim Alanı */}
                  <div className="md:w-1/3 bg-gradient-to-br from-primary/5 to-primary/20 p-8 flex items-center justify-center">
                    <div className="w-32 h-32 bg-primary/10 rounded-2xl flex items-center justify-center border-2 border-primary/20">
                      <Cloud className="h-16 w-16 text-primary" />
                    </div>
                  </div>
                  {/* İçerik Alanı */}
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-start space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">
                          Bulut Tabanlı Altyapı
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-lg">
                          Güvenli bulut altyapısı ile verileriniz her zaman korunur. 7/24 erişim, otomatik yedekleme, multi-lokasyon desteği ve yüksek güvenlik protokolleri.
                        </p>
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
      <section data-testid="Q5" className="relative py-12 bg-slate-50">
        {/* Segment Code */}
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">Q5</div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-5xl mx-auto"
            {...fadeInUp}
          >
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Resim Alanı */}
                  <div className="md:w-1/3 bg-gradient-to-br from-primary/5 to-primary/20 p-8 flex items-center justify-center">
                    <div className="w-32 h-32 bg-primary/10 rounded-2xl flex items-center justify-center border-2 border-primary/20">
                      <Settings className="h-16 w-16 text-primary" />
                    </div>
                  </div>
                  {/* İçerik Alanı */}
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-start space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">
                          Kolay Kurulum
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-lg">
                          Hızlı kurulum, minimum donanım gereksinimi. Mevcut sistemlerinizle entegrasyon, uzaktan kurulum desteği ve 1 saatte hizmete alım imkanı.
                        </p>
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
      <section data-testid="Q6" className="relative py-12 bg-white">
        {/* Segment Code */}
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">Q6</div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-5xl mx-auto"
            {...fadeInUp}
          >
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Resim Alanı */}
                  <div className="md:w-1/3 bg-gradient-to-br from-primary/5 to-primary/20 p-8 flex items-center justify-center">
                    <div className="w-32 h-32 bg-primary/10 rounded-2xl flex items-center justify-center border-2 border-primary/20">
                      <Lock className="h-16 w-16 text-primary" />
                    </div>
                  </div>
                  {/* İçerik Alanı */}
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-start space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">
                          SGK Uyumlu Raporlama
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-lg">
                          SGK mevzuatına uygun raporlama ve veri aktarımı. Yasal raporlar, bordro entegrasyonu, mesai hesaplamaları ve otomatik SGK bildirimleri.
                        </p>
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