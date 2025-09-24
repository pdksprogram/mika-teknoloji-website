import { motion } from "framer-motion";
import { Calendar, User, Clock, Share2, ChevronRight, CheckCircle, Users, Building, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function BlogArticlePDKS() {
  const articleData = {
    title: "PDKS Sistemleri Nedir? 2025 Rehberi - Personel Devam Kontrol",
    description: "Personel Devam Kontrol Sistemi (PDKS) ile çalışan takibinde devrim yaratın. 50.000+ kurumun tercih ettiği modern PDKS çözümlerinin tüm detayları, fiyatları ve kurulum rehberi.",
    author: "PDKS Uzmanı - Mika Teknoloji",
    publishDate: "15 Ocak 2025",
    readTime: "8 dk okuma",
    category: "PDKS",
    keywords: "PDKS sistemleri, personel devam kontrol sistemi, PDKS nedir, personel takip sistemi, biyometrik PDKS, web PDKS",
    image: "/images/blog/pdks-1.png"
  };

  const tableOfContents = [
    { id: "pdks-nedir", title: "PDKS Nedir?", level: 1 },
    { id: "pdks-turleri", title: "PDKS Türleri ve Teknolojileri", level: 1 },
    { id: "parmak-izi-pdks", title: "Parmak İzi PDKS Sistemleri", level: 2 },
    { id: "yuz-tanima-pdks", title: "Yüz Tanıma PDKS Sistemleri", level: 2 },
    { id: "kartli-pdks", title: "Kartlı PDKS Sistemleri", level: 2 },
    { id: "webpdks", title: "Web Tabanlı PDKS (WebPDKS)", level: 2 },
    { id: "pdks-avantajlari", title: "İşletmelere Sağladığı Avantajlar", level: 1 },
    { id: "pdks-kurulum", title: "PDKS Kurulum Süreci", level: 1 },
    { id: "pdks-fiyatlari", title: "PDKS Sistemleri Fiyatları", level: 1 },
    { id: "pdks-secimi", title: "İşletmeniz İçin Doğru PDKS Seçimi", level: 1 }
  ];

  const pdksAdvantages = [
    { icon: TrendingUp, title: "Verimlilik Artışı", description: "Otomatik devam kontrolü ile %40'a kadar zaman tasarrufu" },
    { icon: Users, title: "Adil Çalışma", description: "Objektif ölçümlerle çalışanlar arası adalet sağlama" },
    { icon: Building, title: "Maliyet Kontrolü", description: "Manuel süreçlerin elimine edilmesi ve operasyonel tasarruf" },
    { icon: CheckCircle, title: "Güvenilirlik", description: "Biyometrik teknoloji ile %99.9 doğruluk oranı" }
  ];

  const pdksStats = [
    { number: "50,000+", label: "Kurum Kullanıyor", description: "Türkiye genelinde" },
    { number: "4M+", label: "Çalışan", description: "Aktif sistem kullanıcısı" },
    { number: "20+", label: "Yıl Deneyim", description: "Sektörde öncülük" },
    { number: "%99.9", label: "Doğruluk", description: "Biyometrik tanıma" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>PDKS Sistemleri Nedir? 2025 Kapsamlı Rehberi | Mika Teknoloji</title>
        <meta name="description" content="Personel Devam Kontrol Sistemi (PDKS) nedir? Parmak izi, yüz tanıma, kartlı PDKS türleri, fiyatları ve kurulum rehberi. 50.000+ kurumun tercih ettiği çözümler." />
        <meta name="keywords" content="PDKS nedir, PDKS sistemleri, personel devam kontrol sistemi, personel takip sistemi, biyometrik PDKS, web PDKS, parmak izi PDKS, yüz tanıma PDKS, kartlı PDKS, PDKS fiyatları" />
        
        {/* Open Graph */}
        <meta property="og:title" content="PDKS Sistemleri Nedir? Personel Devam Kontrol Rehberi 2025" />
        <meta property="og:description" content="PDKS sistemleri ile personel takibinde modern çözümler. Biyometrik teknoloji, web tabanlı erişim ve otomatik raporlama özellikleri." />
        <meta property="og:image" content="https://mikateknoloji.com/images/blog/pdks-1.png" />
        <meta property="og:url" content="https://mikateknoloji.com/blog/pdks-sistemleri-nedir-2025-rehberi" />
        <meta property="og:type" content="article" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PDKS Sistemleri Nedir? 2025 Kapsamlı Rehberi" />
        <meta name="twitter:description" content="Modern personel devam kontrol sistemlerinin tüm detayları. Biyometrik teknoloji ile %99.9 doğruluk." />
        <meta name="twitter:image" content="https://mikateknoloji.com/images/blog/pdks-1.png" />
        
        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "PDKS Sistemleri Nedir? 2025 Rehberi - Personel Devam Kontrol",
          "description": "Personel Devam Kontrol Sistemi (PDKS) ile çalışan takibinde devrim yaratın. Modern PDKS çözümlerinin tüm detayları.",
          "image": "https://mikateknoloji.com/images/blog/pdks-1.png",
          "author": {
            "@type": "Person",
            "name": "PDKS Uzmanı - Mika Teknoloji"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Mika Teknoloji",
            "logo": {
              "@type": "ImageObject",
              "url": "https://mikateknoloji.com/mika-logo.jpg"
            }
          },
          "datePublished": "2025-01-15",
          "dateModified": "2025-01-15",
          "wordCount": "2500",
          "articleSection": "Teknoloji",
          "keywords": ["PDKS", "personel devam kontrol", "biyometrik sistem", "personel takip"]
        })}
        </script>
        
        <link rel="canonical" href="https://mikateknoloji.com/blog/pdks-sistemleri-nedir-2025-rehberi" />
      </Helmet>

      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-primary via-primary to-pink-600 text-white py-16"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <Badge className="bg-white/20 text-white mb-4 px-4 py-2">
                {articleData.category}
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                PDKS Sistemleri Nedir? 2025 Kapsamlı Rehberi
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Personel Devam Kontrol Sistemi ile modern çalışan takibi. Biyometrik teknoloji, 
                web tabanlı erişim ve otomatik raporlamanın tüm avantajları.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm"
            >
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {articleData.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {articleData.publishDate}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {articleData.readTime}
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Paylaş
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Statistics Section */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-white py-16 border-b"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {pdksStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Table of Contents - Sidebar */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">İçindekiler</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <nav className="space-y-2">
                      {tableOfContents.map((item, index) => (
                        <a
                          key={index}
                          href={`#${item.id}`}
                          className={`block text-sm hover:text-primary transition-colors py-1 ${
                            item.level === 2 ? 'pl-4 text-gray-600' : 'font-medium text-gray-900'
                          }`}
                        >
                          {item.title}
                        </a>
                      ))}
                    </nav>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl shadow-sm border p-8 lg:p-12">
                
                {/* Article Content */}
                <article className="prose prose-lg max-w-none">
                  
                  <section id="pdks-nedir" className="mb-12">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                      PDKS Nedir? Personel Devam Kontrol Sistemi
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      <strong>Personel Devam Kontrol Sistemi (PDKS)</strong>, işletmelerde çalışanların giriş-çıkış 
                      saatlerinin otomatik olarak takip edildiği, devamsızlık ve mesai sürelerinin kayıt altına 
                      alındığı elektronik sistemlerdir. Modern PDKS çözümleri, geleneksel kağıt tabanlı devam 
                      kontrol yöntemlerinin yerine geçerek, %100 doğruluk ve güvenilirlikle çalışan takibi sağlar.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Günümüzde <strong>50.000'den fazla kurum</strong> ve <strong>4 milyon çalışan</strong> 
                      tarafından aktif olarak kullanılan PDKS sistemleri, işletmelerin insan kaynakları 
                      yönetiminde vazgeçilmez bir araç haline gelmiştir. 20+ yıllık sektörel deneyim ile 
                      sürekli gelişen teknolojiler sayesinde, artık sadece zaman takibi değil, kapsamlı 
                      personel yönetimi çözümleri sunmaktadır.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                      <h4 className="font-semibold text-gray-900 mb-2">💡 Önemli Bilgi</h4>
                      <p className="text-gray-700 text-sm">
                        Modern PDKS sistemleri sadece giriş-çıkış takibi yapmaz. Aynı zamanda vardiya yönetimi, 
                        izin takibi, fazla mesai hesaplamaları, departman bazlı raporlama ve bordro entegrasyonu 
                        gibi kapsamlı özellikler sunar.
                      </p>
                    </div>
                  </section>

                  <Separator className="my-8" />

                  <section id="pdks-turleri" className="mb-12">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                      PDKS Türleri ve Teknolojileri
                    </h2>

                    <div id="parmak-izi-pdks" className="mb-10">
                      <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
                        🔒 Parmak İzi PDKS Sistemleri
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Biyometrik teknolojinin en yaygın kullanım alanılarından biri olan <strong>parmak izi 
                        PDKS sistemleri</strong>, her bireyin benzersiz parmak izi desenini kullanarak 
                        %99.9 doğrulukla personel tanıma işlemi gerçekleştirir. Modern cihazlar şu özellikleri sunar:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                        <li><strong>WiFi Bağlantı:</strong> Kablosuz network üzerinden merkezi veri aktarımı</li>
                        <li><strong>Türkçe Sesli Geri Bildirim:</strong> Kullanıcı dostu arayüz</li>
                        <li><strong>Hızlı Tanıma:</strong> 1 saniyeden kısa sürede doğrulama</li>
                        <li><strong>Dahili Batarya:</strong> Elektrik kesintilerinde kesintisiz çalışma</li>
                        <li><strong>TCP/IP Protokolü:</strong> Network tabanlı veri iletimi</li>
                      </ul>
                    </div>

                    <div id="yuz-tanima-pdks" className="mb-10">
                      <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
                        👤 Yüz Tanıma PDKS Sistemleri
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        COVID-19 pandemisi sonrası popülerliği artan <strong>yüz tanıma PDKS sistemleri</strong>, 
                        temassız teknoloji ile hijyenik personel takibi sağlar. Gelişmiş 3D yüz tanıma teknolojisi şu avantajları sunar:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                        <li><strong>3D Canlılık Tespiti:</strong> Fotoğraf veya video manipülasyonunu engeller</li>
                        <li><strong>30-150 cm Okuma Mesafesi:</strong> Esnek kullanım imkanı</li>
                        <li><strong>Temassız Teknoloji:</strong> Hijyen ve sağlık açısından güvenli</li>
                        <li><strong>Hızlı Tanıma:</strong> 0.5 saniyede yüz analizi</li>
                        <li><strong>Çoklu Yüz Desteği:</strong> Aynı anda birden fazla kişi tanıma</li>
                      </ul>
                    </div>

                    <div id="kartli-pdks" className="mb-10">
                      <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
                        💳 Kartlı PDKS Sistemleri
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Geleneksel ve güvenilir çözüm olan <strong>kartlı PDKS sistemleri</strong>, 
                        proximity ve RFID teknolojileri kullanarak pratik personel takibi sağlar:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                        <li><strong>Proximity Teknoloji:</strong> 5-10 cm mesafeden temassız okuma</li>
                        <li><strong>RFID Desteği:</strong> HID, Mifare, UHF ve Smart Card uyumluluğu</li>
                        <li><strong>Personalized Kartlar:</strong> Kredi kartı ebadında özel tasarım</li>
                        <li><strong>Düşük Maliyet:</strong> Uygun fiyatlı kurulum ve işletme</li>
                        <li><strong>Kolay Yönetim:</strong> Kart verme/alma süreçlerinin basitliği</li>
                      </ul>
                    </div>

                    <div id="webpdks" className="mb-10">
                      <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
                        🌐 Web Tabanlı PDKS (WebPDKS)
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Bulut teknolojisinin avantajlarını PDKS sistemlerine taşıyan <strong>WebPDKS çözümleri</strong>, 
                        her yerden erişilebilir personel yönetimi sunar:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                        <li><strong>Cloud Teknolojisi:</strong> Internet üzerinden her yerden erişim</li>
                        <li><strong>Mobil Uyumluluk:</strong> Tablet ve smartphone desteği</li>
                        <li><strong>Dashboard Yönetimi:</strong> Anlık raporlar ve grafiksel analizler</li>
                        <li><strong>Otomatik Yedekleme:</strong> Veri güvenliği ve kayıp önleme</li>
                        <li><strong>7/24 Erişim:</strong> Kesintisiz personel takibi</li>
                      </ul>
                    </div>
                  </section>

                  <Separator className="my-8" />

                  <section id="pdks-avantajlari" className="mb-12">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                      İşletmelere Sağladığı Avantajlar
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {pdksAdvantages.map((advantage, index) => (
                        <Card key={index} className="border-l-4 border-l-primary">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <advantage.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2">{advantage.title}</h4>
                                <p className="text-gray-600 text-sm">{advantage.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">📊 ROI (Yatırım Geri Dönüşü) Analizi</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Ortalama 100 çalışanlı bir işletmede PDKS sistemi kurulumu:
                        <br />• Manuel süreç maliyeti: Aylık ~15.000 TL
                        <br />• PDKS sistem maliyeti: Aylık ~3.000 TL  
                        <br />• <strong>Aylık tasarruf: ~12.000 TL (%80 maliyet azaltım)</strong>
                        <br />• Yatırım geri dönüş süresi: 3-6 ay
                      </p>
                    </div>
                  </section>

                  <Separator className="my-8" />

                  <section id="pdks-kurulum" className="mb-12">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                      PDKS Kurulum Süreci
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">İhtiyaç Analizi ve Keşif</h4>
                          <p className="text-gray-700 text-sm">İşletme gereksinimlerinin belirlenmesi, mevcut altyapı analizi ve teknoloji seçimi</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Cihaz Montajı ve Network Kurulumu</h4>
                          <p className="text-gray-700 text-sm">PDKS cihazlarının stratejik noktalara montajı ve network bağlantılarının kurulması</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Yazılım Kurulumu ve Konfigürasyon</h4>
                          <p className="text-gray-700 text-sm">PDKS yazılımının kurulması, veritabanı ayarları ve sistem konfigürasyonu</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Personel Kaydı ve Test</h4>
                          <p className="text-gray-700 text-sm">Çalışanların sisteme kaydedilmesi, biyometrik verilerin alınması ve test süreçleri</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Eğitim ve Devreye Alma</h4>
                          <p className="text-gray-700 text-sm">Kullanıcı eğitimleri, sistem entegrasyonları ve canlı ortamda devreye alma</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <Separator className="my-8" />

                  <section id="pdks-fiyatlari" className="mb-12">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                      PDKS Sistemleri Fiyatları 2025
                    </h2>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                      <p className="text-gray-700 text-sm">
                        <strong>Not:</strong> PDKS sistem fiyatları, seçilen teknoloji, çalışan sayısı, özel gereksinimler ve 
                        kurulum karmaşıklığına göre değişiklik gösterir. Aşağıdaki fiyatlar 2025 yılı ortalama piyasa fiyatlarıdır.
                      </p>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-3 text-left font-semibold">PDKS Türü</th>
                            <th className="border border-gray-300 p-3 text-left font-semibold">Cihaz Fiyatı</th>
                            <th className="border border-gray-300 p-3 text-left font-semibold">Yazılım</th>
                            <th className="border border-gray-300 p-3 text-left font-semibold">Toplam Maliyet*</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3">Kartlı PDKS Sistemi</td>
                            <td className="border border-gray-300 p-3">15.000 - 25.000 TL</td>
                            <td className="border border-gray-300 p-3">5.000 - 15.000 TL</td>
                            <td className="border border-gray-300 p-3"><strong>20.000 - 40.000 TL</strong></td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-3">Parmak İzi PDKS</td>
                            <td className="border border-gray-300 p-3">25.000 - 45.000 TL</td>
                            <td className="border border-gray-300 p-3">8.000 - 20.000 TL</td>
                            <td className="border border-gray-300 p-3"><strong>33.000 - 65.000 TL</strong></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3">Yüz Tanıma PDKS</td>
                            <td className="border border-gray-300 p-3">35.000 - 65.000 TL</td>
                            <td className="border border-gray-300 p-3">10.000 - 25.000 TL</td>
                            <td className="border border-gray-300 p-3"><strong>45.000 - 90.000 TL</strong></td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-3">WebPDKS (Cloud)</td>
                            <td className="border border-gray-300 p-3">Aylık 50-200 TL/kullanıcı</td>
                            <td className="border border-gray-300 p-3">Dahil</td>
                            <td className="border border-gray-300 p-3"><strong>Aylık abonelik</strong></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <p className="text-sm text-gray-600 mt-4">
                      *Kurulum, eğitim ve 1 yıl teknik destek dahil. Çoklu lokasyon ve özel entegrasyonlar için ek ücret uygulanabilir.
                    </p>
                  </section>

                  <Separator className="my-8" />

                  <section id="pdks-secimi" className="mb-12">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                      İşletmeniz İçin Doğru PDKS Seçimi
                    </h2>
                    
                    <div className="space-y-6">
                      <Card className="border-l-4 border-l-blue-500">
                        <CardContent className="p-6">
                          <h4 className="font-semibold text-gray-900 mb-3">🏭 Endüstriyel İşletmeler (100+ Çalışan)</h4>
                          <p className="text-gray-700 text-sm mb-3">
                            <strong>Önerilen:</strong> Parmak İzi veya Yüz Tanıma PDKS + Turnike Entegrasyonu
                          </p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Yüksek güvenlik gereksinimleri</li>
                            <li>• Vardiyalı çalışma sistemi</li>
                            <li>• Zorlu çevre koşulları</li>
                            <li>• Detaylı raporlama ihtiyacı</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-l-4 border-l-green-500">
                        <CardContent className="p-6">
                          <h4 className="font-semibold text-gray-900 mb-3">🏢 Ofis ve Hizmet Sektörü (50-100 Çalışan)</h4>
                          <p className="text-gray-700 text-sm mb-3">
                            <strong>Önerilen:</strong> WebPDKS + Kartlı Sistem veya Yüz Tanıma
                          </p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Esnek çalışma saatleri</li>
                            <li>• Uzaktan erişim ihtiyacı</li>
                            <li>• Temiz çevre koşulları</li>
                            <li>• Maliyet optimizasyonu</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-l-4 border-l-purple-500">
                        <CardContent className="p-6">
                          <h4 className="font-semibold text-gray-900 mb-3">🏪 KOBİ ve Küçük İşletmeler (10-50 Çalışan)</h4>
                          <p className="text-gray-700 text-sm mb-3">
                            <strong>Önerilen:</strong> Kartlı PDKS veya WebPDKS Abonelik
                          </p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Düşük ilk yatırım maliyeti</li>
                            <li>• Basit kullanım arayüzü</li>
                            <li>• Minimal bakım gereksinimleri</li>
                            <li>• Kolay kurulum ve eğitim</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-l-4 border-l-red-500">
                        <CardContent className="p-6">
                          <h4 className="font-semibold text-gray-900 mb-3">🏥 Sağlık ve Güvenlik Önceliği</h4>
                          <p className="text-gray-700 text-sm mb-3">
                            <strong>Önerilen:</strong> Yüz Tanıma PDKS (Temassız Teknoloji)
                          </p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• COVID-19 ve hijyen önlemleri</li>
                            <li>• Temassız teknoloji tercihi</li>
                            <li>• Yüksek kullanıcı trafiği</li>
                            <li>• Sağlık sektörü standartları</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </section>

                </article>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-primary to-pink-600 rounded-2xl p-8 text-white text-center mt-12">
                  <h3 className="text-2xl font-bold mb-4">PDKS Sisteminde Uzman Desteği Alın</h3>
                  <p className="text-lg mb-6 opacity-90">
                    20+ yıllık deneyimimiz ile işletmeniz için en uygun PDKS çözümünü belirleyelim. 
                    Ücretsiz keşif ve detaylı teklif için hemen iletişime geçin.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                      <Link href="/iletisim">
                        Ücretsiz Keşif Talep Et
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      <Link href="/urunler">
                        Tüm PDKS Ürünleri
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}