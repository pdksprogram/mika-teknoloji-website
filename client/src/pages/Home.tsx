import { ArrowRight, Shield, Clock, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Helmet } from "react-helmet-async";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Shield,
      title: t.home.services.webpdks.title,
      description: t.home.services.webpdks.description,
      href: "/cozumler/webpdks"
    },
    {
      icon: Clock,
      title: t.home.services.qrPatrol.title,
      description: t.home.services.qrPatrol.description,
      href: "/cozumler/qr-patrol"
    },
    {
      icon: Users,
      title: t.home.services.accessControl.title,
      description: t.home.services.accessControl.description,
      href: "/cozumler/access-kontrol"
    }
  ];

  const features = t.home.features;

  // Animation variants

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>PDKS - Personel Devam Kontrol Sistemi | Mika Teknoloji - 30+ Yıl Deneyim, 50.000+ Kullanıcı</title>
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        <meta name="description" content="1990'dan beri Türkiye'nin lider PDKS sistemi! Personel devam kontrol sistemi, parmak izi takip sistemi, yüz tanıma sistem. 20.000 kapasite, TCP/IP, Wi-Fi desteği. Binlerce referans!" />
        <meta name="keywords" content="PDKS, personel devam kontrol sistemi, parmak izi takip sistemi, yüz tanıma sistem, pdks programı, PDKS yazılımı, personel takip sistemi, biyometrik güvenlik sistemleri, QR kod PDKS, RFID kart sistemi, mesai hesaplama, vardiya takibi, bordro entegrasyonu, zaman kontrol sistemi, geçiş kontrol sistemi, turnike sistemleri, güvenlik sistemleri" />
        
        {/* Technical SEO following Meyer/ZKTeco approach */}
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        <link rel="canonical" href="https://mikateknoloji.com/" />
        <meta name="language" content="Turkish" />
        <meta name="geo.region" content="TR" />
        <meta name="geo.placename" content="Turkey" />
        
        {/* Open Graph Meta Tags - Enhanced like ZKTeco */}
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:site_name" content="Mika Teknoloji" />
        <meta property="og:title" content="PDKS - Personel Devam Kontrol Sistemi | Mika Teknoloji" />
        <meta property="og:description" content="1990'dan beri Türkiye'nin lider PDKS sistemi! 20.000 kapasite, TCP/IP, Wi-Fi desteği. Binlerce referans!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mikateknoloji.com" />
        <meta property="og:image" content="https://mikateknoloji.com/mika-logo.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MikaTeklonogi" />
        <meta name="twitter:title" content="PDKS - Personel Devam Kontrol Sistemi | Mika Teknoloji" />
        <meta name="twitter:description" content="1990'dan beri Türkiye'nin lider PDKS sistemi! 20.000 kapasite, TCP/IP, Wi-Fi desteği." />
        
        {/* Enhanced JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://mikateknoloji.com/#organization",
              "name": "Mika Teknoloji Kontrol Sistemleri",
              "alternateName": "Mika Teknoloji",
              "url": "https://mikateknoloji.com",
              "logo": "https://mikateknoloji.com/mika-logo.jpg",
              "image": "https://mikateknoloji.com/mika-logo.jpg",
              "description": "1990'dan beri PDKS sistemi sağlayıcısı. Personel devam kontrol, parmak izi takip, yüz tanıma çözümleri.",
              "foundingDate": "1990",
              "industry": "Security Systems",
              "email": "info@mikateknoloji.com",
              "telephone": "+90-546-712-22-96",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Perpa Ticaret Merkezi A Blok 4-5.Kat No:0158",
                "addressLocality": "Şişli",
                "addressRegion": "İstanbul",
                "postalCode": "34384",
                "addressCountry": "TR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "41.0602",
                "longitude": "28.9847"
              },
              "openingHours": ["Mo-Fr 09:00-18:00"],
              "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
              "priceRange": "$$",
              "areaServed": {
                "@type": "Country",
                "name": "Turkey"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "PDKS ve Güvenlik Sistemleri",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "PDKS Sistemleri"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Güvenlik Sistemleri"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://www.linkedin.com/company/mika-teknoloji",
                "https://www.facebook.com/mikateknoloji"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://mikateknoloji.com/",
              "name": "Mika Teknoloji",
              "description": "PDKS, Personel Devam Kontrol Sistemi ve Güvenlik Çözümleri",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://mikateknoloji.com/search?q={query}",
                "query-input": "required name=query"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Mika PDKS - Personel Devam Kontrol Sistemi",
              "description": "Web tabanlı PDKS sistemi. Parmak izi, yüz tanıma, QR kod desteği.",
              "applicationCategory": "SecurityApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "availability": "InStock",
                "priceCurrency": "TRY"
              }
            }
          ])}
        </script>
      </Helmet>
      
      {/* Hero Carousel Section */}
      <HeroCarousel />

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
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6" data-testid="main-heading">
              1990'dan Beri Türkiye'nin Lider PDKS Sistemi
            </h1>
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <div className="bg-pink-50 px-4 py-2 rounded-full">
                <span className="text-pink-600 font-semibold">50.000+ Kullanıcı</span>
              </div>
              <div className="bg-pink-50 px-4 py-2 rounded-full">
                <span className="text-pink-600 font-semibold">30+ Yıl Deneyim</span>
              </div>
              <div className="bg-pink-50 px-4 py-2 rounded-full">
                <span className="text-pink-600 font-semibold">%99.9 Güvenilirlik</span>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4" data-testid="features-title">
              Personel Devam Kontrol Sistemi, Parmak İzi Takip ve Yüz Tanıma Çözümleri
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
              MT1100, MTP50, MTFDP200, MTFD15 serisi cihazlarımız ile 20.000 kapasite, TCP/IP, Wi-Fi desteği. 
              ISO 27001 sertifikalı, bordro entegrasyonu, mesai hesaplama ve vardiya takibi.
            </p>
            
            {/* Technical Specifications like ZKTeco */}
            <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="text-2xl font-bold text-pink-600">20.000</div>
                <div className="text-sm text-slate-600">Kullanıcı Kapasitesi</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="text-2xl font-bold text-pink-600">0.3s</div>
                <div className="text-sm text-slate-600">Yüz Tanıma Hızı</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="text-2xl font-bold text-pink-600">TCP/IP</div>
                <div className="text-sm text-slate-600">Ağ Bağlantısı</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="text-2xl font-bold text-pink-600">Wi-Fi</div>
                <div className="text-sm text-slate-600">Kablosuz Destek</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 40 },
                  animate: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 mb-4">
                      {service.description}
                    </CardDescription>
                    <Button 
                      asChild 
                      variant="ghost" 
                      className="p-0 h-auto text-primary hover:text-primary/80 group-hover:translate-x-2 transition-transform duration-200"
                      data-testid={`service-link-${service.title.toLowerCase()}`}
                    >
                      <Link href={service.href}>
                        Detayları öğrenin <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Key Features */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature: string, index: number) => (
              <motion.div 
                key={index} 
                className="flex items-center space-x-3 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors duration-200"
                variants={{
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-slate-700">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reference Section - Following Meyer's approach */}
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
              Sektörün En İyi Markalarının Tercihi
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              30 yıllık tecrübemiz, sunduğu ürün ve hizmet kalitesi ile Türkiye'nin en büyük şirketlerinden KOBİ'lere kadar binlerce başarılı proje
            </p>
            <div className="text-pink-600 font-semibold text-sm mb-8">
              500+ BAŞARILI REFERANS • 50.000+ KULLANICI • %99.9 GÜVENİLİRLİK
            </div>
          </motion.div>
          
          {/* Success Statistics */}
          <motion.div 
            className="grid md:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">500+</div>
              <div className="text-slate-600">Başarılı Proje</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">50.000+</div>
              <div className="text-slate-600">Aktif Kullanıcı</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">30+</div>
              <div className="text-slate-600">Yıl Deneyim</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">%99.9</div>
              <div className="text-slate-600">Sistem Güvenilirliği</div>
            </div>
          </motion.div>

          {/* Advantages Section like Meyer */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg transition-shadow duration-200">
              <h3 className="font-bold text-lg mb-4 text-slate-800">En Fazla Tamamlanmış Proje</h3>
              <p className="text-slate-600">Holdinglerden KOBİ'lere kadar 500+ başarılı PDKS projesi</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg transition-shadow duration-200">
              <h3 className="font-bold text-lg mb-4 text-slate-800">Ücretsiz Danışmanlık</h3>
              <p className="text-slate-600">PDKS, parmak izi ve yüz tanıma konusunda profesyonel destek</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg transition-shadow duration-200">
              <h3 className="font-bold text-lg mb-4 text-slate-800">7/24 Müşteri Desteği</h3>
              <p className="text-slate-600">Kesintisiz teknik destek ve sistem bakım hizmetleri</p>
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
              Profesyonel Access Control Ürünlerimiz
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Yüksek kaliteli güvenlik sistemleri ile işletmenizin güvenliğini sağlayın
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Access Control Panel */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="mb-6">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl relative shadow-2xl overflow-hidden">
                    <div className="absolute inset-6 border-2 border-gray-700 rounded-lg"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gray-300 rounded-full border-4 border-gray-600 flex items-center justify-center">
                      <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm font-mono">
                      ACCESS CONTROL
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800 mb-4">
                    Access Control Panel
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-slate-600 space-y-3 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>Merkezi kontrol ünitesi</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>TCP/IP iletişim desteği</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>Güvenli metal kasa yapısı</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>Acil durum bypass sistemi</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Access Control Board */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="mb-6">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-br from-gray-900 to-black rounded-xl relative shadow-2xl overflow-hidden p-4">
                    <div className="absolute inset-4 border-2 border-gray-700 rounded"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-12 bg-gray-300 rounded-full border-4 border-blue-500 flex items-center justify-center">
                      <div className="w-16 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                        <div className="text-xs text-white font-bold">LCD</div>
                      </div>
                    </div>
                    <div className="absolute left-4 top-12 space-y-2">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-6 h-6 bg-green-500 rounded-full border-2 border-green-400 shadow-lg">
                          <div className="w-2 h-2 bg-green-300 rounded-full mx-auto mt-2"></div>
                        </div>
                      ))}
                    </div>
                    <div className="absolute right-4 top-12 space-y-2">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-6 h-6 bg-green-500 rounded-full border-2 border-green-400 shadow-lg">
                          <div className="w-2 h-2 bg-green-300 rounded-full mx-auto mt-2"></div>
                        </div>
                      ))}
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-xs font-mono">
                      ACCESS 16'LI PANEL
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800 mb-4">
                    Access 16'lı Panel Kartı
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-slate-600 space-y-3 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>16 kapı kontrol kapasitesi</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>Modüler genişleme imkanı</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>Yüksek kalite PCB kartı</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>RS-485 iletişim protokolü</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* CTA for Products */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/kartli-gecis-sistemi">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 transform hover:scale-105 transition-all duration-200"
              >
                Tüm Access Control Ürünleri
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4" 
            data-testid="cta-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Tüm PDKS Çözümlerimiz İçin Ücretsiz Danışmanlık Alabilirsiniz
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Personel devam kontrol sistemi, parmak izi takip sistemi ve yüz tanıma çözümleriniz için hemen iletişime geçin. 
            MT serisi cihazlarımız ile 20.000 kapasite, TCP/IP ve Wi-Fi desteği garantili çözümler.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 transform hover:scale-105 transition-transform duration-200"
              data-testid="cta-detail-button"
            >
              <Link href="/iletisim">
                Hemen Detaylı Bilgi Alın! <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
