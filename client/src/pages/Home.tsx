import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import HeroCarousel from "@/components/HeroCarousel";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>PDKS Sistemleri | Mika Teknoloji - 30+ Yıl</title>
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        <meta name="description" content="Türkiye'nin lider PDKS sistemi! Parmak izi, yüz tanıma, QR kod. 20.000 kapasite, TCP/IP, Wi-Fi desteği. Binlerce referans!" />
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
      <section className="relative">
        <div className="absolute top-4 right-4 z-20 text-xs font-semibold text-pink-600 bg-white/80 px-2 py-1 rounded">S1</div>
        <HeroCarousel />
      </section>

      {/* Project Videos Section */}
      <section className="relative py-20 bg-white">
        <div className="absolute top-4 right-4 text-xs font-semibold text-pink-600 bg-pink-50 px-2 py-1 rounded">S2</div>
        <div className="container mx-auto px-4">
          {/* Tamamlanmış Proje Referanslarımız */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 text-center">
              Tamamlanmış Proje Referanslarımız
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12 text-center">
              30 yılı aşkın deneyimimiz ile Türkiye'nin önde gelen kurumlarına sunduğumuz PDKS ve güvenlik çözümlerinden örnekler
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {[
                { 
                  title: "Turnike Montajımız", 
                  description: "Profesyonel ekibimiz tarafından gerçekleştirilen turnike kurulum ve montaj çalışması",
                  videoUrl: "/turnike-montaj.mp4"
                },
                { 
                  title: "Yüz Tanıma Montajı", 
                  description: "Profesyonel ekibimiz tarafından gerçekleştirilen yüz tanıma cihazı kurulum ve montaj çalışması",
                  videoUrl: "/yuz-tanima-montaj.mp4"
                },
                { 
                  title: "Bariyer Sistemi Montajı", 
                  description: "Profesyonel ekibimiz tarafından gerçekleştirilen bariyer sistemi kurulum ve montaj çalışması",
                  videoUrl: "/bariyer-montaj.mp4"
                },
                { 
                  title: "Hastane PDKS Çözümü", 
                  description: "Sağlık Sektöründe 7/24 Personel Takip ve Mesai Yönetimi",
                  videoUrl: null
                },
                { 
                  title: "Kamu QR-Patrol", 
                  description: "Kamu Binası Güvenlik Devriye ve Kontrol Sistemi",
                  videoUrl: null
                }
              ].map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-transparent border-0">
                    {video.videoUrl ? (
                      <div className="relative aspect-video bg-black rounded-2xl overflow-hidden border-4 border-pink-600 group-hover:border-pink-500 transition-all duration-300">
                        <video 
                          className="w-full h-full object-cover"
                          controls
                          preload="metadata"
                        >
                          <source src={video.videoUrl} type="video/mp4" />
                          Tarayıcınız video etiketini desteklemiyor.
                        </video>
                        <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                          2min 5s
                        </div>
                      </div>
                    ) : (
                      <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-600 rounded-2xl overflow-hidden border-4 border-pink-600 group-hover:border-pink-500 flex items-center justify-center cursor-pointer transition-all duration-300">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                        <div className="relative z-10 bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-12 h-12 text-white fill-white" />
                        </div>
                        <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                          Yakında
                        </div>
                      </div>
                    )}
                    <CardContent className="p-4 bg-white rounded-b-lg">
                      <h3 className="font-semibold text-slate-800 mb-1">{video.title}</h3>
                      <p className="text-sm text-slate-600">{video.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reference Section - Following Meyer's approach */}
      <section className="relative py-20 bg-gray-50">
        <div className="absolute top-4 right-4 text-xs font-semibold text-pink-600 bg-white px-2 py-1 rounded">S3</div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Mika Teknoloji PDKS - Sektörün En İyi Markalarının Tercihi
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

      {/* Detailed Content Section - For SEO */}
      <section className="relative py-20 bg-white">
        <div className="absolute top-4 right-4 text-xs font-semibold text-pink-600 bg-pink-50 px-2 py-1 rounded">S4</div>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">
              PDKS Sistemleri - Personel Devam Kontrol Çözümleri
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Neden Mika Teknoloji PDKS?</h3>
                <div className="space-y-4 text-slate-600">
                  <p>
                    <strong>1990'dan bu yana</strong> Türkiye'nin en güvenilir PDKS sistemi sağlayıcısıyız. 
                    Personel devam kontrol sistemi alanında 30+ yıllık deneyimimiz ile her büyüklükteki işletmeye 
                    özel çözümler sunmaktayız.
                  </p>
                  <p>
                    <strong>Parmak izi takip sistemi, yüz tanıma sistem ve QR kod</strong> teknolojilerini 
                    birleştiren hibrit çözümlerimiz ile %99.9 doğruluk oranına ulaşabilirsiniz. 
                    MT1100, MTP50, MTFDP200, MTFD15 serisi cihazlarımız ISO 27001 güvenlik standartlarına uygun üretilmiştir.
                  </p>
                  <p>
                    <strong>20.000 kullanıcı kapasitesi, TCP/IP ve Wi-Fi desteği</strong> ile ölçeklenebilir 
                    altyapı sağlıyoruz. Bordro entegrasyonu, mesai hesaplama, vardiya takibi ve 
                    detaylı raporlama özellikleri ile tam bir personel yönetim sistemi.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Teknik Özellikler ve Avantajlar</h3>
                <div className="space-y-4 text-slate-600">
                  <p>
                    <strong>Web tabanlı PDKS programı</strong> sayesinde kurulum gerektirmeden 
                    herhangi bir internet bağlantısı bulunan yerden sisteminizi yönetebilirsiniz. 
                    Mobil cihazlardan takip, evden çalışma desteği ve bulut tabanlı yedekleme hizmetlerimiz mevcuttur.
                  </p>
                  <p>
                    <strong>Biyometrik güvenlik sistemleri</strong> kategorisinde sunduğumuz çözümler:
                    RFID kart sistemi, turnike sistemleri entegrasyonu, geçiş kontrol sistemleri, 
                    güvenlik sistemleri bağlantısı ve access control panel desteği.
                  </p>
                  <p>
                    <strong>Sektör çözümleri:</strong> Hastane PDKS, okul personel takip sistemi, 
                    fabrika vardiya takibi, otel personel yönetimi, AVM güvenlik sistemleri, 
                    banka şube kontrol sistemleri ve kamu kurumu personel takip uygulamaları.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Technical Specifications */}
            <div className="bg-slate-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Sistem Özellikleri</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-pink-600 font-bold text-lg mb-2">Kapasite</div>
                  <div className="text-slate-600 text-sm">
                    20.000 kullanıcı, 500.000 kayıt, Sınırsız rapor
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-pink-600 font-bold text-lg mb-2">Bağlantı</div>
                  <div className="text-slate-600 text-sm">
                    TCP/IP, Wi-Fi, USB, RS485 desteği
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-pink-600 font-bold text-lg mb-2">Güvenlik</div>
                  <div className="text-slate-600 text-sm">
                    SSL şifreleme, ISO 27001 uyumlu, KVKK uygun
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-pink-600 font-bold text-lg mb-2">Entegrasyon</div>
                  <div className="text-slate-600 text-sm">
                    Bordro, ERP, Active Directory, API desteği
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-pink-600 font-bold text-lg mb-2">Platform</div>
                  <div className="text-slate-600 text-sm">
                    Web, Mobil, Desktop uygulamaları
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-pink-600 font-bold text-lg mb-2">Destek</div>
                  <div className="text-slate-600 text-sm">
                    7/24 teknik destek, ücretsiz güncelleme
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-slate-800 text-white">
        <div className="absolute top-4 right-4 text-xs font-semibold text-pink-600 bg-white px-2 py-1 rounded">S5</div>
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

      {/* WhatsApp Widget */}
      <WhatsAppWidget />
    </div>
  );
}
