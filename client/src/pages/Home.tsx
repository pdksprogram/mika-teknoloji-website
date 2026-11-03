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
        <title>PDKS Sistemleri | Mika Teknoloji</title>
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        <meta name="description" content="Mika Teknoloji PDKS sistemi: parmak izi, yüz tanıma, QR kod ve kartlı personel devam kontrol. 20.000 kapasite, TCP/IP, Wi-Fi desteği." />
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
        <meta property="og:description" content="Mika Teknoloji PDKS sistemi: parmak izi, yüz tanıma, QR kod. 20.000 kapasite, TCP/IP, Wi-Fi desteği." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mikateknoloji.com/" />
        <meta property="og:image" content="https://mikateknoloji.com/mika-logo.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MikaTeklonogi" />
        <meta name="twitter:title" content="PDKS - Personel Devam Kontrol Sistemi | Mika Teknoloji" />
        <meta name="twitter:description" content="Mika Teknoloji PDKS sistemi: parmak izi, yüz tanıma, QR kod. 20.000 kapasite, TCP/IP, Wi-Fi desteği." />
        
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
              "description": "PDKS sistemi sağlayıcısı. Personel devam kontrol, parmak izi takip, yüz tanıma çözümleri.",
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

      {/* Sayfanın tek H1'i: görsel tasarımı değiştirmez, arama motoru ve ekran okuyucu içindir. */}
      <h1 className="sr-only">PDKS ve Kartlı Geçiş Sistemleri | Mika Teknoloji</h1>

      {/* Hero Carousel Section */}
      <section className="relative">
        <HeroCarousel />
      </section>

      {/* Reference Section - Following Meyer's approach */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Mika Teknoloji PDKS
            </h2>
            <p className="text-lg text-slate-600">
              Büyük şirketlerden KOBİ'lere kadar PDKS, geçiş kontrol ve güvenlik projeleri
            </p>
          </motion.div>

          {/* Hizmetler: tek sade şerit */}
          <dl className="grid md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden max-w-5xl mx-auto">
            {[
              { baslik: "Kurulum ve Montaj", metin: "Turnike, yüz tanıma ve bariyer için kurulum ve devreye alma desteği" },
              { baslik: "Danışmanlık", metin: "PDKS, parmak izi ve yüz tanıma konusunda proje danışmanlığı" },
              { baslik: "Müşteri Desteği", metin: "Teknik destek ve sistem bakım hizmetleri" },
            ].map((h) => (
              <div key={h.baslik} className="bg-white px-6 py-5">
                <dt className="font-semibold text-slate-900 mb-1">{h.baslik}</dt>
                <dd className="text-sm text-slate-600">{h.metin}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Detailed Content Section - For SEO */}
      <section className="relative py-20 bg-white">
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
                    Personel devam kontrol sistemi alanında her büyüklükteki işletmeye
                    özel çözümler sunmaktayız.
                  </p>
                  <p>
                    <strong>Parmak izi takip sistemi, yüz tanıma sistem ve QR kod</strong> teknolojilerini 
                    birleştiren hibrit çözümler: MT1100, MTP50, MTFDP200, MTFD15 serisi cihazlar.
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
                    Mobil cihazlardan takip ve evden çalışma desteği mevcuttur.
                  </p>
                  <p>
                    <strong>Biyometrik güvenlik sistemleri</strong> kategorisinde sunduğumuz çözümler:
                    RFID kart sistemi, turnike sistemleri entegrasyonu, geçiş kontrol sistemleri, 
                    güvenlik sistemleri bağlantısı ve access control panel desteği.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Technical Specifications */}
            <div className="bg-slate-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Sistem Özellikleri</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-primary font-bold text-lg mb-2">Kapasite</div>
                  <div className="text-slate-600 text-sm">
                    20.000 kullanıcı, 500.000 kayıt
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-bold text-lg mb-2">Bağlantı</div>
                  <div className="text-slate-600 text-sm">
                    TCP/IP, Wi-Fi, USB, RS485 desteği
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-bold text-lg mb-2">Güvenlik</div>
                  <div className="text-slate-600 text-sm">
                    SSL şifreleme, KVKK uygun
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-bold text-lg mb-2">Entegrasyon</div>
                  <div className="text-slate-600 text-sm">
                    Bordroya hazır puantaj, Excel (.xlsx) çıktısı
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-bold text-lg mb-2">Platform</div>
                  <div className="text-slate-600 text-sm">
                    Web, Mobil, Desktop uygulamaları
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-bold text-lg mb-2">Destek</div>
                  <div className="text-slate-600 text-sm">
                    Teknik destek ve bakım
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-500 text-center">Sektör çözümleri: Hastane PDKS, okul personel takip sistemi, fabrika vardiya takibi, otel personel yönetimi, AVM güvenlik sistemleri, banka şube kontrol sistemleri ve kamu kurumu personel takip uygulamaları.</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-slate-800 text-white">
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
            MT serisi cihazlarımız ile 20.000 kapasite, TCP/IP ve Wi-Fi destekli çözümler.
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
              className="px-8"
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
