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

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
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

      {/* Features Section */}
      <section data-testid="features-section" className="relative py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              QR Kod PDKS Avantajları
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Mobil teknoloji ile personel takibini kolaylaştıran QR kod PDKS sistemi, 
              işletmenize hız ve güvenlik katıyor.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                icon: QrCode,
                title: "QR Kod Okutma",
                description: "Akıllı telefonlarla hızlı ve kolay QR kod okutarak giriş-çıkış işlemleri"
              },
              {
                icon: Smartphone,
                title: "Mobil Uygulama",
                description: "iOS ve Android uyumlu mobil uygulama ile her yerden erişim"
              },
              {
                icon: Shield,
                title: "Temassız Sistem",
                description: "Hijyen ve güvenlik odaklı temassız personel takip çözümü"
              },
              {
                icon: Cloud,
                title: "Bulut Tabanlı",
                description: "Güvenli bulut altyapısı ile verileriniz her zaman korunur"
              },
              {
                icon: Settings,
                title: "Kolay Kurulum",
                description: "Hızlı kurulum, minimum donanım gereksinimi"
              },
              {
                icon: Lock,
                title: "SGK Uyumlu",
                description: "SGK mevzuatına uygun raporlama ve veri aktarımı"
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <feature.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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