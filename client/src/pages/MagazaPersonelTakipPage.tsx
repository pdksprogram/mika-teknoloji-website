import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, TrendingUp, Smartphone, 
  BarChart3, FileText, Database,
  Phone, Mail, MapPin, CheckCircle2,
  Play, Shield, Timer, DollarSign, LineChart
} from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15
    }
  },
  viewport: { once: true }
};

export default function MagazaPersonelTakipPage() {
  const [videoError, setVideoError] = useState(false);
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Mağaza Personel Takip Programı",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "TRY"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "250"
    },
    "description": "Mağaza ve perakende sektörü için özel geliştirilmiş vardiya planlama, shift yönetimi, izin takibi, prim hesaplama ve mobil PDKS özellikleri sunan personel takip programı.",
    "featureList": [
      "Vardiya Planlama ve Shift Yönetimi",
      "Vardiya Optimizasyonu",
      "Personel Planlama",
      "İzin Yönetimi",
      "Prim Yönetimi",
      "Mobil PDKS",
      "Giriş-Çıkış Takibi",
      "KPI ve Analitik Raporlama",
      "Entegrasyon Desteği"
    ]
  };

  const features = [
    {
      icon: Calendar,
      title: "Vardiya Planlama ve Shift Yönetimi",
      description: "Mağaza ihtiyaçlarına göre otomatik vardiya planlama, shift yönetimi ve personel rotasyon sistemi. Sabah, öğle, akşam vardiyalarını kolayca planlayın ve çakışmaları önleyin.",
      gradient: "from-blue-500 to-cyan-500",
      keywords: "vardiya planlama, shift planlama, personel rotasyon",
      imagePlaceholder: "vardiya-planlama.jpg"
    },
    {
      icon: TrendingUp,
      title: "Vardiya Optimizasyonu ve Personel Planlama",
      description: "Müşteri yoğunluğuna göre vardiya optimizasyonu, personel ihtiyaç analizi ve akıllı planlama algoritmaları. Doğru zamanda doğru sayıda personel ile maliyet tasarrufu sağlayın.",
      gradient: "from-purple-500 to-pink-500",
      keywords: "vardiya optimizasyonu, personel planlama, maliyet optimizasyonu",
      imagePlaceholder: "vardiya-optimizasyon.jpg"
    },
    {
      icon: FileText,
      title: "İzin Yönetimi ve Prim Sistemi",
      description: "Yıllık izin, hastalık izni, mazeret izni yönetimi ve performansa dayalı prim hesaplama sistemi. Otomatik izin hakediş hesaplama ve bordro entegrasyonu.",
      gradient: "from-green-500 to-emerald-500",
      keywords: "izin yönetimi, prim yönetimi, performans primleri",
      imagePlaceholder: "izin-prim-yonetimi.jpg"
    },
    {
      icon: Smartphone,
      title: "Mobil PDKS ve Giriş-Çıkış Takibi",
      description: "Mobil uygulama ile personel giriş-çıkış takibi, QR kod ile PDKS, GPS tabanlı konum doğrulama ve anlık bildirimler. Her yerden erişim imkanı.",
      gradient: "from-orange-500 to-red-500",
      keywords: "mobil pdks, giriş çıkış takibi, mobil personel takip",
      imagePlaceholder: "mobil-pdks.jpg"
    },
    {
      icon: BarChart3,
      title: "KPI ve Analitik Raporlama",
      description: "Detaylı KPI raporları, performans analitiği, çalışma saati istatistikleri ve yönetici dashboard'u. Excel ve PDF formatında raporlar alın, grafiklerle analiz edin.",
      gradient: "from-indigo-500 to-purple-500",
      keywords: "kpi raporlama, analitik, performans takibi",
      imagePlaceholder: "kpi-analitik.jpg"
    },
    {
      icon: Database,
      title: "Entegrasyon ve Otomasyon",
      description: "Bordro sistemi entegrasyonu, muhasebe yazılımı bağlantısı, API desteği ve otomatik veri aktarımı. Popüler ERP sistemleri ile uyumlu çalışır.",
      gradient: "from-teal-500 to-cyan-500",
      keywords: "sistem entegrasyonu, bordro entegrasyonu, api",
      imagePlaceholder: "entegrasyon-otomasyon.jpg"
    }
  ];

  const benefits = [
    {
      icon: Timer,
      title: "Vardiya Çakışmalarını Önleyin",
      description: "Akıllı vardiya planlama sistemi ile çift görevlendirme ve vardiya çakışmalarını otomatik engelleyin."
    },
    {
      icon: DollarSign,
      title: "Fazla Mesai Kontrolü",
      description: "Fazla mesai saatlerini otomatik hesaplayın, prim ve ek ücret hesaplamalarını kolaylaştırın."
    },
    {
      icon: LineChart,
      title: "Performans Bazlı Prim",
      description: "Satış hedefleri, çalışma saatleri ve performans kriterlerine göre otomatik prim hesaplama."
    },
    {
      icon: Shield,
      title: "Yasal Uyumluluk",
      description: "İş kanunu ve SGK mevzuatına uyumlu çalışma saati takibi ve raporlama sistemi."
    }
  ];

  const faqs = [
    {
      question: "Mağaza Personel Takip Programı ile vardiya planlama nasıl yapılır?",
      answer: "Programımız ile haftalık, aylık vardiya planları oluşturabilir, shift değişikliklerini takip edebilir ve personel rotasyonunu otomatik olarak yönetebilirsiniz. Sistem, çalışan müsaitlik durumlarını ve iş yükünü dikkate alarak en optimal vardiya planını önerir."
    },
    {
      question: "Vardiya optimizasyonu ve personel planlama nasıl çalışır?",
      answer: "Sistemimiz, mağaza yoğunluk saatlerini analiz ederek personel ihtiyacını hesaplar. Müşteri trafiğine göre vardiya optimizasyonu yapar ve gereksiz personel maliyetlerini azaltır. Akıllı algoritma ile doğru zamanda doğru sayıda personel planlaması yapabilirsiniz."
    },
    {
      question: "İzin yönetimi ve prim hesaplama sistemi nasıl işler?",
      answer: "Personellerin yıllık izin hakları otomatik hesaplanır, izin talepleri onay akışından geçer. Prim yönetimi modülü ile satış hedeflerine ulaşma, çalışma performansı ve mesai saatlerine göre prim hesaplamaları otomatik yapılır ve bordro sistemine aktarılır."
    },
    {
      question: "Mobil PDKS ile giriş-çıkış takibi nasıl yapılır?",
      answer: "Personeller mobil uygulama ile QR kod okutarak veya GPS konum doğrulama ile giriş-çıkış yapabilir. Mağaza dışı çalışan personel için konum bazlı mobil PDKS özelliği mevcuttur. Tüm giriş çıkışlar anlık olarak sisteme kaydedilir ve yöneticiler tarafından takip edilebilir."
    },
    {
      question: "KPI ve analitik raporlama özellikleri nelerdir?",
      answer: "Dashboard üzerinden çalışma saatleri, devamsızlık oranları, fazla mesai istatistikleri, personel performans KPI'ları görüntülenebilir. Excel ve PDF formatında detaylı analitik raporlar alınabilir. Grafik ve tablolarla görsel raporlama yapılır."
    },
    {
      question: "Hangi sistemlerle entegrasyon sağlanabilir?",
      answer: "Bordro ve muhasebe yazılımları ile entegrasyon, e-fatura sistemleri ile bağlantı, API desteği ile kendi yazılımınıza entegrasyon sağlanabilir. Popüler ERP sistemleri ile uyumlu çalışır ve otomatik veri senkronizasyonu yapılabilir."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mağaza Personel Takip Programı | Vardiya Planlama ve Shift Yönetimi Sistemi 2025</title>
        <meta name="description" content="Mağaza ve perakende için vardiya planlama, shift yönetimi, izin takibi, prim hesaplama ve mobil PDKS özellikleri sunan personel takip programı. Vardiya optimizasyonu ve KPI analitik raporlama ile işletmenizi yönetin." />
        <meta name="keywords" content="mağaza personel takip, vardiya planlama, shift planlama, vardiya optimizasyonu, personel planlama, izin yönetimi, prim yönetimi, mobil pdks, giriş çıkış takibi, kpi analitik, perakende personel takip" />
        <link rel="canonical" href="https://mikateknoloji.com/urunler/magaza-personel-takip" />
        
        <meta property="og:title" content="Mağaza Personel Takip Programı | Vardiya Planlama ve Shift Yönetimi" />
        <meta property="og:description" content="Vardiya planlama, shift yönetimi, izin takibi, prim hesaplama ve mobil PDKS özellikleri ile mağaza personel yönetimini kolaylaştırın." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://mikateknoloji.com/urunler/magaza-personel-takip" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mağaza Personel Takip Programı | Vardiya Planlama Sistemi" />
        <meta name="twitter:description" content="Vardiya planlama, shift yönetimi ve mobil PDKS ile mağaza personel takibi" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
          <div className="absolute inset-0 bg-black/20"></div>
          <motion.div 
            className="container mx-auto px-4 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-block mb-4"
              >
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  🏪 Perakende ve Mağaza Çözümü
                </span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Mağaza Personel Takip Programı
              </h1>
              <p className="text-xl mb-6 text-white/90">
                Vardiya Planlama, Shift Yönetimi ve Mobil PDKS ile Mağaza Personelini Kolayca Yönetin
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-white/90 font-semibold px-6"
                  data-testid="hero-demo-button"
                >
                  <Link href="/iletisim">📞 Ücretsiz Demo</Link>
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold px-6"
                  data-testid="hero-call-button"
                >
                  <a href="tel:+908503051986">Hemen Ara</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Video Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-800">
                  Mağaza Personel Takip Programı Nasıl Çalışır?
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Vardiya planlama, izin yönetimi ve mobil PDKS özelliklerini videomuzda keşfedin
                </p>
              </div>

              <Card className="overflow-hidden shadow-2xl border-0 bg-white">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center group">
                    {!videoError ? (
                      <>
                        <video
                          className="w-full h-full object-cover"
                          controls
                          muted
                          playsInline
                          poster="/placeholder-video.jpg"
                          onError={() => setVideoError(true)}
                          data-testid="magaza-video"
                        >
                          <source src="/magaza-personel-takip.mp4" type="video/mp4" />
                          Tarayıcınız video oynatmayı desteklemiyor.
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      </>
                    ) : (
                      <div className="text-center p-12 text-white">
                        <div className="inline-flex p-6 rounded-full bg-white/10 backdrop-blur-sm mb-4">
                          <Play className="h-16 w-16" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Tanıtım Videosu</h3>
                        <p className="text-white/80 text-lg">
                          Mağaza Personel Takip Programı özelliklerini keşfedin
                        </p>
                        <p className="text-white/60 text-sm mt-4">
                          Video dosyası yükleniyor...
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-4 gap-4 mt-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="text-center hover:shadow-lg transition-all duration-300 border-t-4 border-primary/20 hover:border-primary bg-white">
                        <CardContent className="p-4">
                          <div className="inline-flex p-3 rounded-full bg-primary/10 mb-3">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="font-semibold text-sm mb-1 text-slate-800">{benefit.title}</h3>
                          <p className="text-xs text-slate-600">{benefit.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ana Özellikler Kartları */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              {...fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
                Mağaza Personel Takip Programı Özellikleri
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Vardiya planlama, shift yönetimi, izin takibi, prim hesaplama ve mobil PDKS ile kapsamlı personel yönetimi
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden group bg-white">
                      <CardContent className="p-0">
                        {/* Resim Alanı */}
                        <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                          <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-80`}></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-white">
                              <Icon className="h-16 w-16 mx-auto mb-2 drop-shadow-lg" />
                              <p className="text-xs font-medium px-4 opacity-90">
                                {feature.imagePlaceholder}
                              </p>
                            </div>
                          </div>
                          <div className="absolute top-3 right-3">
                            <div className={`p-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg`}>
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                          </div>
                        </div>

                        {/* İçerik Alanı */}
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-primary transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-slate-600 mb-3 leading-relaxed">
                            {feature.description}
                          </p>
                          <div className="pt-3 border-t border-slate-100">
                            <p className="text-xs text-slate-400 italic">
                              🔍 {feature.keywords}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Kullanım Alanları */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              {...fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
                Hangi Sektörlerde Kullanılır?
              </h2>
              <p className="text-lg text-slate-600">
                Perakende, mağaza ve hizmet sektörlerinde yaygın kullanım
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {[
                { title: "🏪 Perakende Mağazalar", items: ["Giyim Mağazaları", "Süpermarketler", "Elektronik Mağazaları", "Ayakkabı Mağazaları"] },
                { title: "🏬 Zincir Marketler", items: ["AVM Mağazaları", "Franchise İşletmeler", "Zincir Restoranlar", "Fast Food"] },
                { title: "☕ Hizmet Sektörü", items: ["Otel ve Restoranlar", "Cafe ve Pastaneler", "Kafe Zincirleri", "Güzellik Salonları"] }
              ].map((sector, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-t-4 border-primary/30 bg-white">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-primary">{sector.title}</h3>
                      <ul className="space-y-2">
                        {sector.items.map((item, i) => (
                          <li key={i} className="flex items-center text-slate-700">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span className="font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              {...fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
                Sıkça Sorulan Sorular
              </h2>
              <p className="text-lg text-slate-600">
                Vardiya planlama, shift yönetimi ve mobil PDKS hakkında merak edilenler
              </p>
            </motion.div>

            <motion.div 
              className="max-w-4xl mx-auto space-y-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-l-4 border-primary/30 hover:border-primary bg-white">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-3 text-slate-800 flex items-start">
                        <span className="text-primary mr-2 text-xl">❓</span>
                        {faq.question}
                      </h3>
                      <p className="text-slate-600 pl-7 leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Mağaza Personel Takip Programını Hemen Deneyin
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Vardiya planlama, shift yönetimi ve mobil PDKS ile personel yönetimini kolaylaştırın. Ücretsiz demo için hemen iletişime geçin!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-white/90 font-semibold px-8"
                  data-testid="cta-demo-button"
                >
                  <Link href="/iletisim">📞 Ücretsiz Demo Talep Et</Link>
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8"
                  data-testid="cta-phone-button"
                >
                  <a href="tel:+908503051986">
                    <Phone className="mr-2 h-5 w-5" />
                    0850 305 1986
                  </a>
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8"
                  data-testid="cta-whatsapp-button"
                >
                  <a href="https://wa.me/905467122296" target="_blank" rel="noopener noreferrer">
                    💬 WhatsApp Destek
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* İletişim Bilgileri */}
        <section className="py-8 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 text-slate-600">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span className="font-medium">0850 305 1986</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span className="font-medium">info@mikateknoloji.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">İstanbul, Türkiye</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
