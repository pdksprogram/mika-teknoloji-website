import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, TrendingUp, Smartphone, 
  BarChart3, FileText, Database,
  Phone, Mail, MapPin, CheckCircle2
} from "lucide-react";
import { Link } from "wouter";
import { DEMO_TELEFON, DEMO_TELEFON_GORUNEN } from "@/components/PdksIcerik";
import vardiyaPlanlama from "@assets/IMG_4278_1759780466857.png";
import vardiyaOnay from "@assets/IMG_4279_1759780771668.png";
import vardiyaBildirim from "@assets/IMG_4280_1759781022450.png";
import izinAvans from "@assets/IMG_4281_1759781338557.png";
import belgeYonetimi from "@assets/IMG_4283_1759781625259.png";
import toplulukPlus from "@assets/IMG_4285_1759782715899.jpeg";

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
      gradient: "from-slate-900 to-slate-800",
      keywords: "vardiya planlama, shift planlama, personel rotasyon",
      imagePlaceholder: "vardiya-planlama.jpg"
    },
    {
      icon: TrendingUp,
      title: "Hiyerarşik Onay Sistemi ve Plan Takibi",
      description: "Mağaza müdürleri haftalık vardiya planlarını oluşturur ve bu planlar bölge müdürleri tarafından onaylanır. Haftalık 45 saat kuralı açıksa (4857 sayılı İş Kanunu m.63: haftada en çok 45 saat) 45 saati aşan süre puantajda fazla mesai olarak ayrılır. Mobil uygulama üzerinden onaylı ve onay bekleyen planların durumu anlık olarak takip edilebilir. Detaylı raporlama özellikleri sayesinde bölge müdürleri tüm süreçleri kontrol altında tutar ve mağaza müdürlerine etkin bir yönetim avantajı sağlar.",
      gradient: "from-slate-900 to-slate-800",
      keywords: "plan onay sistemi, bölge müdürü kontrolü, vardiya onaylama, hiyerarşik yönetim",
      imagePlaceholder: "plan-onay-sistemi.jpg"
    },
    {
      icon: FileText,
      title: "Personel Vardiya Bildirimleri ve Mobil Takip",
      description: "Mağaza müdürü tarafından oluşturulan ve bölge müdürü tarafından onaylanan vardiya planları sistematik olarak personele iletilir. Çalışanlar hafta boyunca hangi vardiyaya geleceğini, çalışma saatlerini ve shift detaylarını mobil uygulama üzerinden anlık olarak görüntüler. Push bildirim sistemi sayesinde personel, vardiya değişikliklerinden ve çalışma programından anında haberdar olur. Bu çift yönlü sistem hem hiyerarşik onay yapısını güçlendirir hem de personellerin planlama sürecine aktif katılımını sağlar.",
      gradient: "from-slate-900 to-slate-800",
      keywords: "vardiya bildirimleri, push notification, mobil personel takip, shift uyarıları",
      imagePlaceholder: "vardiya-bildirim.jpg"
    },
    {
      icon: Smartphone,
      title: "İzin ve Avans Talep Yönetim Sistemi",
      description: "Mağaza personeli, izin talepleri ve avans ücret taleplerini mobil uygulama üzerinden kolayca başlatır. Talepler önce mağaza müdürüne iletilir ve onaylanır. Ardından merkez İnsan Kaynakları departmanına düşer ve nihai onay alınır. Onay sürecinin her aşamasında personele push bildirim gönderilir. İzin veya avans talebinin onaylandığı, reddedildiği ve ret nedenleri anında çalışana iletilir. Bu çok katmanlı onay süreci hem hiyerarşik yapıyı güçlendirir hem de şeffaf bir talep yönetimi sağlar.",
      gradient: "from-slate-900 to-slate-800",
      keywords: "izin talebi, avans talebi, çok katmanlı onay, İK yönetimi, talep bildirimleri",
      imagePlaceholder: "izin-avans-yonetimi.jpg"
    },
    {
      icon: BarChart3,
      title: "Dijital Belge ve Evrak Yönetim Sistemi",
      description: "Personeller raporlu izin, sağlık raporu, sertifika, diploma ve diğer resmi evraklarını mobil uygulama üzerinden kolayca yükleyebilir ve merkez sisteme iletebilir. Tüm belgeler dijital ortamda güvenli şekilde saklanır ve gerektiğinde yöneticiler tarafından anında erişilebilir. Bu dijital belge yönetim sistemi, kağıt kullanımını ortadan kaldırır, evrak kaybını önler ve kurumsal bir dokümantasyon yapısı oluşturur. İnsan Kaynakları ve yöneticiler tüm personel belgelerini merkezi sistemden takip edebilir, arşivleme ve raporlama süreçlerini otomatikleştirebilir.",
      gradient: "from-slate-900 to-slate-800",
      keywords: "dijital belge yönetimi, evrak sistemi, raporlu izin belgesi, QR kod sistemi, dijital arşiv",
      imagePlaceholder: "belge-yonetimi.jpg"
    },
    {
      icon: Database,
      title: "Topluluk+ Kurumsal Sosyal Medya Platformu",
      description: "Mika Teknoloji tarafından geliştirilen Topluluk+, kurum içi çalışanlar için özel tasarlanmış Twitter tarzı bir sosyal medya platformudur. Personeller mobil uygulama üzerinden anlık fotoğraf ve video paylaşımları yapabilir. Tüm paylaşımlar moderatör onayından geçerek yayınlanır ve kurum içinde güvenli bir iletişim ortamı sağlanır. Çalışanlar birbirlerinin paylaşımlarını beğenebilir, yorum yapabilir ve etkileşimde bulunabilir. Platform, oyunlaşma sistemi ile rozetler, başarı ödülleri ve prim mekanizması içerir. Performansa dayalı ödüller, aktif katılım ve pozitif davranışlar üzerinden hesaplanır. Topluluk+, çalışan bağlılığını artırır, kurum kültürünü güçlendirir ve şirket içi iletişimi dijitalleştirir.",
      gradient: "from-slate-900 to-slate-800",
      keywords: "kurumsal sosyal medya, topluluk+, oyunlaşma, personel rozetleri, prim sistemi, moderasyon",
      imagePlaceholder: "topluluk-plus.jpg"
    }
  ];

  const faqs = [
    {
      question: "Mağaza Personel Takip Programı ile vardiya planlama nasıl yapılır?",
      answer: "Programımız ile haftalık, aylık vardiya planları oluşturabilir, shift değişikliklerini takip edebilir ve personel rotasyonunu otomatik olarak yönetebilirsiniz. Sistem, çalışan müsaitlik durumlarını ve iş yükünü dikkate alarak en optimal vardiya planını önerir."
    },
    {
      question: "Hiyerarşik onay sistemi nasıl çalışır?",
      answer: "Mağaza müdürleri haftalık vardiya planlarını mobil uygulama üzerinden oluşturur. Bu planlar bölge müdürleri tarafından incelenir ve onaylanır. Haftalık 45 saat kuralı açıksa 45 saati aşan süre puantajda fazla mesai olarak ayrılır. Sistemde hangi planların onaylandığı, hangilerinin onay beklendiği anlık olarak görülebilir. Detaylı raporlama sayesinde tüm süreç şeffaf şekilde yönetilir."
    },
    {
      question: "Personel vardiya bildirimlerini nasıl alır?",
      answer: "Mağaza müdürü tarafından oluşturulan ve bölge müdürü tarafından onaylanan vardiya planları, mobil uygulama üzerinden personele otomatik olarak iletilir. Push bildirim sistemi sayesinde çalışanlar hangi gün, hangi saatte ve hangi vardiyada çalışacaklarını anlık olarak öğrenir. Vardiya değişikliklerinde de anında bilgilendirme yapılır."
    },
    {
      question: "İzin ve avans talep süreci nasıl işler?",
      answer: "Personel mobil uygulama üzerinden izin veya avans talebini başlatır. Talep önce mağaza müdürüne düşer ve incelenir. Mağaza müdürü onayladıktan sonra merkez İnsan Kaynakları departmanına iletilir. İK nihai onayı verdikten sonra personele push bildirim olarak sonuç bildirilir. Red durumunda ret nedeni de detaylı şekilde paylaşılır. Tüm süreç şeffaf ve takip edilebilirdir."
    },
    {
      question: "Dijital belge yönetimi nasıl çalışır?",
      answer: "Personeller raporlu izin belgelerini, sağlık raporlarını, sertifikalarını, diplomalarını ve diğer resmi evraklarını mobil uygulama üzerinden fotoğraflayarak veya PDF olarak yükleyebilir. Belgeler otomatik olarak personel dosyasına eklenir ve yöneticiler tarafından onaylanır. Tüm evraklar dijital ortamda güvenli şekilde arşivlenir. QR kod sistemi ile giriş-çıkış işlemleri de mobil uygulama üzerinden gerçekleştirilebilir."
    },
    {
      question: "Topluluk+ sosyal medya platformu nasıl çalışır?",
      answer: "Topluluk+, Mika Teknoloji tarafından geliştirilen kurum içi sosyal medya platformudur. Personeller mobil uygulama üzerinden fotoğraf ve video paylaşımı yapar. Tüm içerikler moderatör onayından geçer ve ardından yayınlanır. Çalışanlar beğeni ve yorum yapabilir. Platform oyunlaşma sistemi ile rozetler, başarı ödülleri ve prim mekanizması içerir. Aktif katılım ve pozitif davranışlar ödüllendirilir."
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
        {/* SEGMENT 1: Hero */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-slate-50 relative">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Mağaza Personel Takip Programı
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Vardiya planlama, shift yönetimi, izin takibi ve mobil PDKS özellikleri ile mağaza personelinizi etkili şekilde yönetin
            </motion.p>
          </div>
        </section>

        {/* SEGMENT 2: Video */}
        <section className="py-16 bg-white relative">
          
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="relative aspect-video bg-slate-900 rounded-lg overflow-hidden shadow-2xl border-4 border-primary">
                <video
                  className="w-full h-full"
                  controls
                  preload="auto"
                  playsInline
                  style={{ objectFit: 'contain' }}
                  data-testid="magaza-video"
                >
                  <source src="/magaza-video.mp4" type="video/mp4" />
                  <p className="text-white p-4">Tarayıcınız video oynatmayı desteklemiyor.</p>
                </video>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEGMENT 3: Ana Özellikler Kartları */}
        <section className="py-16 bg-slate-50 relative">
          {/* Segment İşareti - Sağ Üst Köşe */}
          
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 border-slate-200 overflow-hidden group bg-white relative">
                      {/* Numara Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                          <span className="text-white text-xl font-bold">{index + 1}</span>
                        </div>
                      </div>
                      
                      <CardContent className="p-0">
                        {/* Resim Alanı */}
                        <div className="relative h-56 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden border-b border-slate-200">
                          {index >= 0 && index <= 5 ? (
                            <div className="absolute inset-0 flex items-center justify-center p-6">
                              {/* Telefon Çerçevesi */}
                              <div className="relative bg-slate-900 rounded-[32px] p-3 shadow-2xl" style={{ width: '180px', height: '360px' }}>
                                {/* Telefon Ekranı */}
                                <div className="relative w-full h-full bg-white rounded-[24px] overflow-hidden">
                                  {/* Notch */}
                                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl z-10 flex items-center justify-center gap-2">
                                    <div className="w-12 h-1 bg-slate-700 rounded-full"></div>
                                  </div>
                                  
                                  {/* Ekran İçeriği */}
                                  <img 
                                    src={index === 0 ? vardiyaPlanlama : index === 1 ? vardiyaOnay : index === 2 ? vardiyaBildirim : index === 3 ? izinAvans : index === 4 ? belgeYonetimi : toplulukPlus} 
                                    alt={feature.title} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <div className="inline-flex p-6 rounded-2xl bg-white shadow-md mb-3">
                                  <Icon className="h-14 w-14 text-primary" />
                                </div>
                                <p className="text-sm font-medium px-4 text-slate-600">
                                  {feature.imagePlaceholder}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* İçerik Alanı */}
                        <div className="p-6">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <span className="text-primary text-sm font-bold">{index + 1}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 flex-1">
                              {feature.title}
                            </h3>
                          </div>
                          <p className="text-slate-600 mb-4 leading-relaxed text-[15px]">
                            {feature.description}
                          </p>
                          <div className="pt-3 border-t border-slate-100">
                            <p className="text-xs text-slate-500 font-medium">
                              {feature.keywords}
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

        {/* SEGMENT 4: Kullanım Alanları */}
        <section className="py-16 bg-white relative">
          {/* Segment İşareti - Sağ Üst Köşe */}
          
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              {...fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
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
                { title: "Perakende Mağazalar", items: ["Giyim Mağazaları", "Süpermarketler", "Elektronik Mağazaları", "Ayakkabı Mağazaları"] },
                { title: "Zincir Marketler", items: ["AVM Mağazaları", "Franchise İşletmeler", "Zincir Restoranlar", "Fast Food"] },
                { title: "Hizmet Sektörü", items: ["Otel ve Restoranlar", "Cafe ve Pastaneler", "Kafe Zincirleri", "Güzellik Salonları"] }
              ].map((sector, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-md transition-all duration-300 border border-slate-200 bg-white">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-5 text-slate-900">{sector.title}</h3>
                      <ul className="space-y-3">
                        {sector.items.map((item, i) => (
                          <li key={i} className="flex items-center text-slate-700">
                            <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
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

        {/* SEGMENT 5: FAQ */}
        <section className="py-16 bg-slate-50 relative">
          {/* Segment İşareti - Sağ Üst Köşe */}
          
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              {...fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
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
                  <Card className="overflow-hidden hover:shadow-md transition-all duration-300 border border-slate-200 bg-white">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-3 text-slate-900 flex items-start">
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-slate-600 pl-8 leading-relaxed text-[15px]">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SEGMENT 6: CTA (Çağrı) */}
        <section className="py-16 bg-slate-900 text-white relative">
          {/* Segment İşareti - Sağ Üst Köşe */}
          
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
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
                  data-testid="cta-demo-button"
                >
                  <Link href="/iletisim">Ücretsiz Demo Talep Et</Link>
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outlineLight" 
                  className="font-semibold px-8"
                  data-testid="cta-phone-button"
                >
                  <a href={`tel:${DEMO_TELEFON}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    {DEMO_TELEFON_GORUNEN}
                  </a>
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outlineLight" 
                  className="font-semibold px-8"
                  data-testid="cta-whatsapp-button"
                >
                  <a href="https://wa.me/905467122296" target="_blank" rel="noopener noreferrer">
                    WhatsApp Destek
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
                <span className="font-medium">{DEMO_TELEFON_GORUNEN}</span>
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
