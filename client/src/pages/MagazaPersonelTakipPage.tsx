import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, TrendingUp, Smartphone, 
  BarChart3, CheckCircle2, Shield, 
  Phone, Mail, MapPin, FileText, Timer, 
  DollarSign, LineChart, Database
} from "lucide-react";
import { Link } from "wouter";

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
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

export default function MagazaPersonelTakipPage() {
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
      description: "Mağaza ihtiyaçlarına göre otomatik vardiya planlama, shift yönetimi ve personel rotasyon sistemi. Sabah, öğle, akşam vardiyalarını kolayca planlayın.",
      gradient: "from-blue-500 to-cyan-500",
      keywords: "vardiya planlama, shift planlama, personel rotasyon"
    },
    {
      icon: TrendingUp,
      title: "Vardiya Optimizasyonu ve Personel Planlama",
      description: "Müşteri yoğunluğuna göre vardiya optimizasyonu, personel ihtiyaç analizi ve akıllı planlama algoritmaları ile maliyet tasarrufu sağlayın.",
      gradient: "from-purple-500 to-pink-500",
      keywords: "vardiya optimizasyonu, personel planlama, maliyet optimizasyonu"
    },
    {
      icon: FileText,
      title: "İzin Yönetimi ve Prim Sistemi",
      description: "Yıllık izin, hastalık izni, mazeret izni yönetimi ve performansa dayalı prim hesaplama sistemi. Otomatik izin hakediş hesaplama.",
      gradient: "from-green-500 to-emerald-500",
      keywords: "izin yönetimi, prim yönetimi, performans primleri"
    },
    {
      icon: Smartphone,
      title: "Mobil PDKS ve Giriş-Çıkış Takibi",
      description: "Mobil uygulama ile personel giriş-çıkış takibi, QR kod ile pdks, GPS tabanlı konum doğrulama ve anlık bildirimler.",
      gradient: "from-orange-500 to-red-500",
      keywords: "mobil pdks, giriş çıkış takibi, mobil personel takip"
    },
    {
      icon: BarChart3,
      title: "KPI ve Analitik Raporlama",
      description: "Detaylı KPI raporları, performans analitiği, çalışma saati istatistikleri ve yönetici dashboard'u ile işletmenizi analiz edin.",
      gradient: "from-indigo-500 to-purple-500",
      keywords: "kpi raporlama, analitik, performans takibi"
    },
    {
      icon: Database,
      title: "Entegrasyon ve Otomasyon",
      description: "Bordro sistemi entegrasyonu, muhasebe yazılımı bağlantısı, API desteği ve otomatik veri aktarımı özellikleri.",
      gradient: "from-teal-500 to-cyan-500",
      keywords: "sistem entegrasyonu, bordro entegrasyonu, api"
    }
  ];

  const benefits = [
    {
      icon: Timer,
      title: "Vardiya Çakışmalarını Önleyin",
      description: "Akıllı vardiya planlama sistemi ile çift görevlendirme ve vardiya çakışmalarını otomatik olarak engelleyin."
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
      answer: "Personeller mobil uygulama ile QR kod okutarak veya GPS konum doğrulama ile giriş-çıkış yapabilir. Mağaza dışı çalışan personel için konum bazlı mobil pdks özelliği mevcuttur. Tüm giriş çıkışlar anlık olarak sisteme kaydedilir ve yöneticiler tarafından takip edilebilir."
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
        
        {/* Open Graph */}
        <meta property="og:title" content="Mağaza Personel Takip Programı | Vardiya Planlama ve Shift Yönetimi" />
        <meta property="og:description" content="Vardiya planlama, shift yönetimi, izin takibi, prim hesaplama ve mobil PDKS özellikleri ile mağaza personel yönetimini kolaylaştırın." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://mikateknoloji.com/urunler/magaza-personel-takip" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mağaza Personel Takip Programı | Vardiya Planlama Sistemi" />
        <meta name="twitter:description" content="Vardiya planlama, shift yönetimi ve mobil PDKS ile mağaza personel takibi" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
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
                className="inline-block mb-6"
              >
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  Perakende ve Mağaza Çözümü
                </span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Mağaza Personel Takip Programı
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Vardiya Planlama, Shift Yönetimi ve Mobil PDKS ile Mağaza Personelini Kolayca Yönetin
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-white/90 text-lg px-8"
                >
                  <Link href="/iletisim">Ücretsiz Demo</Link>
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8"
                >
                  <a href="tel:+908503051986">Hemen Ara</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Ana Özellikler */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              {...fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Mağaza Personel Takip Programı Özellikleri
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Vardiya planlama, shift yönetimi, izin takibi, prim hesaplama ve mobil PDKS ile kapsamlı personel yönetimi
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-t-primary group">
                      <CardContent className="p-6">
                        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-slate-800">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 mb-3">
                          {feature.description}
                        </p>
                        <p className="text-xs text-slate-400 italic">
                          {feature.keywords}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Avantajlar */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              {...fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Vardiya Planlama ve Personel Yönetimi Avantajları
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Mağaza operasyonlarınızı optimize edin, maliyetleri düşürün
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="text-center h-full hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-2 text-slate-800">{benefit.title}</h3>
                        <p className="text-sm text-slate-600">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Kullanım Alanları */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              {...fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Hangi Sektörlerde Kullanılır?
              </h2>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {[
                { title: "Perakende Mağazalar", items: ["Giyim Mağazaları", "Süpermarketler", "Elektronik Mağazaları", "Ayakkabı Mağazaları"] },
                { title: "Zincir Marketler", items: ["AVM Mağazaları", "Franchise İşletmeler", "Zincir Restoranlar", "Fast Food"] },
                { title: "Hizmet Sektörü", items: ["Otel ve Restoranlar", "Cafe ve Pastaneler", "Kafe Zincirleri", "Güzellik Salonları"] }
              ].map((sector, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-primary">{sector.title}</h3>
                      <ul className="space-y-2">
                        {sector.items.map((item, i) => (
                          <li key={i} className="flex items-center text-slate-600">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            {item}
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
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              {...fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sıkça Sorulan Sorular
              </h2>
              <p className="text-xl text-slate-600">
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
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-3 text-slate-800 flex items-start">
                        <span className="text-primary mr-2">S:</span>
                        {faq.question}
                      </h3>
                      <p className="text-slate-600 pl-6">
                        <span className="font-semibold text-slate-700">C:</span> {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Mağaza Personel Takip Programını Hemen Deneyin
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
                Vardiya planlama, shift yönetimi ve mobil PDKS ile personel yönetimini kolaylaştırın. Ücretsiz demo için hemen iletişime geçin!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-white/90 text-lg px-8"
                >
                  <Link href="/iletisim">Ücretsiz Demo Talep Et</Link>
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8"
                >
                  <a href="tel:+908503051986">
                    <Phone className="mr-2 h-5 w-5" />
                    0850 305 1986
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* İletişim Bilgileri */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 text-slate-600">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>0850 305 1986</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@mikateknoloji.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>İstanbul, Türkiye</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
