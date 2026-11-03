import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import {
  CheckCircle,
  QrCode,
  Shield,
  Cloud,
  Globe,
  HeadphonesIcon,
  Zap,
  Lock,
  MapPin,
  Settings,
  FileText,
  Calendar,
  DollarSign,
  UserCheck,
  MessageSquare,
  Phone,
  BookOpen,
  Video,
  MessageCircle,
  HelpCircle,
  Database,
  ChevronDown,
} from "lucide-react";
import { Link } from "wouter";
import vardiyaYonetimiImage from "@assets/vardiya-yonetimi-interface.png";
import maasHesaplamaImage from "@assets/maas-hesaplama-interface.png";
import personelBilgileriImage from "@assets/personel-bilgileri-interface.png";
import personelTalepleriImage from "@assets/personel-talepleri-interface.png";
import CtaDugmeleri from "@/components/CtaDugmeleri";
import { boyut } from "@/lib/gorselBoyut";

// /urunler/personel-takip SSS (FAQPage) şeması. Gövdeye konan <script> ön-render'da &quot; ile kaçıp geçersiz
// oluyordu; Helmet içinde verilir (SEO bileşeninin jsonLd deseniyle aynı mekanizma).
const SSS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "PDKS (Personel Devam Kontrol Sistemi) nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PDKS, çalışanların işyerine giriş-çıkış saatlerini dijital olarak takip eden bir sistemdir. QR kod, kart okuyucu, parmak izi gibi yöntemlerle personelin mesai saatlerini otomatik olarak kaydeder ve aylık puantajı hazırlar."
      }
    },
    {
      "@type": "Question", 
      "name": "Personel takip sistemi yasal mı? Hangi şartlarda kullanılabilir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet, KVKK ve İş Kanunu'na uygun olarak kullanılabilir. Çalışanları önceden bilgilendirmek, aydınlatma metni vermek ve sadece mesai takibi amacıyla kullanmak koşuluyla kullanılabilir."
      }
    },
    {
      "@type": "Question",
      "name": "Vardiya yönetimi nasıl çalışır?", 
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vardiya yönetimi modülü ile farklı mesai saatleri tanımlayabilir, çalışanları vardiyalara atayabilir ve otomatik mesai hesaplamaları yapabilirsiniz. Gece vardiyası, hafta sonu çalışması, fazla mesai hesaplamaları otomatik olarak gerçekleştirilir."
      }
    },
    {
      "@type": "Question",
      "name": "Mobil uygulama ile hangi işlemler yapılabilir?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Mobil uygulama ile QR kod okutarak giriş-çıkış yapabilir, mesai saatlerini görüntüleyebilir, izin taleplerinde bulunabilir, bordro bilgilerinizi inceleyebilir ve lokasyon bazlı kontrolleri gerçekleştirebilirsiniz."
      }
    },
    {
      "@type": "Question",
      "name": "Puantaj raporunda neler yer alır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aylık puantajda çalışma saatleri, fazla mesai ve izin bilgileri gösterilir. Puantaj Excel (.xlsx) dosyası olarak indirilir."
      }
    },
    {
      "@type": "Question",
      "name": "Çoklu lokasyon desteği var mı?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet, farklı şubelerde, fabrika birimlerinde veya lokasyonlarda çalışan personeli tek sistemden yönetebilirsiniz. Her lokasyon için ayrı ayarlar yapabilir, merkezi raporlama alabilirsiniz."
      }
    },
    {
      "@type": "Question", 
      "name": "Teknik destek hizmeti nasıl alınır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WhatsApp, telefon ve e-posta ile destek alabilirsiniz. Kurulum, eğitim ve teknik destek hizmetlerimiz mevcuttur."
      }
    },
    {
      "@type": "Question",
      "name": "Veri güvenliği nasıl sağlanır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bağlantılar SSL ile şifrelenir. Mobil kayıtlara eklenen konum bilgisi KVKK gereği raporlarda gizlenebilir."
      }
    }
  ]
};

export default function PersonelTakipPage() {

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
        <title>Personel Takip Programı – Bulut Tabanlı PDKS | Mika</title>
        <meta 
          name="description" 
          content="Bulut tabanlı personel takip programı: PDKS, vardiya yönetimi, QR kod ile giriş-çıkış, mobil uygulama ve aylık puantaj tek sistemde." 
        />
        <meta name="keywords" content="personel takip sistemi, bulut tabanlı pdks, vardiya yönetimi yazılımı, insan kaynakları sistemi, çalışan takip programı, pdks sistemi, personel devam kontrol sistemi, mesai takip sistemi, QR kod personel takip, mobil personel takip uygulaması, işçi takip sistemi, personel giriş çıkış sistemi, puantaj sistemi, shift yönetimi, çalışan zaman takibi, bordro hazırlama sistemi, iş gücü yönetimi, hr yazılımı türkiye" />
        <meta name="author" content="Mika Teknoloji" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="language" content="tr" />
        <meta name="geo.region" content="TR" />
        <meta name="geo.country" content="Turkey" />
        <meta name="geo.placename" content="Türkiye" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Personel Takip Programı – Bulut Tabanlı PDKS | Mika" />
        <meta property="og:description" content="Bulut tabanlı personel takip programı: PDKS, vardiya yönetimi, QR kod ile giriş-çıkış, mobil uygulama ve aylık puantaj tek sistemde." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mikateknoloji.com/urunler/personel-takip" />
        <meta property="og:image" content="https://mikateknoloji.com/images/slayt/bulut-pdks-paneli.jpg" />
        <meta property="og:image:width" content="1400" />
        <meta property="og:image:height" content="603" />
        <meta property="og:image:alt" content="Mika Teknoloji Personel Takip Sistemi - Bulut Tabanlı PDKS" />
        <meta property="og:site_name" content="Mika Teknoloji" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:locale:alternate" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Personel Takip Sistemi | Mika Teknoloji - Bulut Tabanlı PDKS" />
        <meta name="twitter:description" content="Bulut tabanlı personel takip sistemi: PDKS, vardiya yönetimi, QR kod ile giriş-çıkış ve mobil uygulama." />
        <meta name="twitter:image" content="https://mikateknoloji.com/images/slayt/bulut-pdks-paneli.jpg" />
        <meta name="twitter:image:alt" content="Mika Teknoloji Personel Takip Sistemi" />
        <meta name="twitter:creator" content="@mikateknoloji" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#EC4899" />
        <meta name="apple-mobile-web-app-title" content="Mika Teknoloji PDKS" />
        <meta name="application-name" content="Mika Teknoloji Personel Takip Sistemi" />
        <meta name="msapplication-TileColor" content="#EC4899" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://mikateknoloji.com/urunler/personel-takip" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://mikateknoloji.com/#organization",
                "name": "Mika Teknoloji Kontrol Sistemleri",
                "url": "https://mikateknoloji.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://mikateknoloji.com/images/logos/mika-logo.jpg",
                  "width": 300,
                  "height": 100
                },
                "description": "PDKS ve güvenlik teknolojileri şirketi. Personel takip sistemleri, access control, QR-Patrol çözümleri.",
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
                "@type": "SoftwareApplication",
                "@id": "https://mikateknoloji.com/urunler/personel-takip/#product",
                "name": "Mika Teknoloji Personel Takip Sistemi",
                "description": "Bulut tabanlı personel devam kontrol sistemi (PDKS) ile kapsamlı vardiya yönetimi, QR kod takip ve mobil uygulama desteği.",
                "url": "https://mikateknoloji.com/urunler/personel-takip",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web, iOS, Android",
                "provider": {
                  "@id": "https://mikateknoloji.com/#organization"
                },
                "featureList": [
                  "Bulut tabanlı altyapı",
                  "QR kod ile giriş-çıkış",
                  "Mobil uygulama",
                  "Vardiya yönetimi",
                  "Aylık puantaj ve Excel raporları",
                  "Çoklu lokasyon desteği",
                  "Gerçek zamanlı takip"
                ],
                "screenshot": "https://mikateknoloji.com/images/slayt/bulut-pdks-paneli.jpg"
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
                    "name": "Personel Takip Sistemi",
                    "item": "https://mikateknoloji.com/urunler/personel-takip"
                  }
                ]
              }
            ]
          })}
        </script>

        {/* SSS (FAQPage) şeması */}
        <script type="application/ld+json">{JSON.stringify(SSS_JSON_LD)}</script>
      </Helmet>
      {/* Hero Section */}
      <section data-testid="P1" className="relative py-20 px-4 bg-slate-50">
        <div className="container mx-auto text-center">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Personel Takip Programı ve Bulut Tabanlı İK Yönetimi
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 font-light mb-8">
              Vardiya, mesai ve izin takibi tek bulut panelde.
            </p>
            
            <CtaDugmeleri tur="yazilim" sinif="justify-center mb-12" sayfa="Personel Takip Page" olayOnek="personel_takip" />

            {/* Ürün görseli: gerçek bulut PDKS paneli (kişisel veriler maskeli) */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-xl p-2 max-w-4xl mx-auto">
              <img
                src="/images/slayt/bulut-pdks-paneli.jpg"
                alt="Mika bulut PDKS paneli giriş-çıkış kayıtları ekranı"
                width={1400}
                height={603}
                className="w-full h-auto rounded"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Geçiş Çözümleri */}
      <section data-testid="P3" className="relative py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp} initial={false}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Güvenli ve Modern Geçiş Çözümleri
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              İşletmenizin personel giriş ve çıkışlarını güvenilir ve hassas bir şekilde takip etmek mi istiyorsunuz? 
              Kart okuyucu, QR kod okutma ve sanal cihaz çözümlerimizle tanışın.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial={false}
            whileInView="whileInView"
          >
            {/* QR Kod Okutma */}
            <motion.div variants={staggerItem}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <img width={873} height={957} loading="lazy" 
                      src="/qr-hand-mockup.png" 
                      alt="QR kod mobil okutma sistemi" 
                      className="w-32 h-32 mx-auto object-contain rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">QR Kod Okutma</h3>
                  <p className="text-primary font-semibold mb-4">Modern ve Hızlı Giriş-Çıkış Takibi</p>
                  <p className="text-slate-600 mb-6">
                    QR kod okutma çözümlerimiz, personel devam takibinde modern ve pratik bir yol sunar. 
                    Mobil cihazlar üzerinden çalışanların giriş ve çıkışlarını hızlıca kaydedebilirsiniz. 
                    Özellikle büyük ve hareketli işyerleri için idealdir.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/qr-bekci">Detayları İncele</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Kart Okuyucu */}
            <motion.div variants={staggerItem}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <img width={252} height={252} loading="lazy" 
                      src="/images/urun/erisim-kontrol-paneli-kart.jpg" 
                      alt="Geçiş kontrol paneli kartı" 
                      className="w-32 h-32 mx-auto object-contain rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Kart Okuyucu</h3>
                  <p className="text-primary font-semibold mb-4">Güvenilir Giriş ve Çıkış Kontrolü</p>
                  <p className="text-slate-600 mb-6">
                    Kart okuyucularımız, personel giriş ve çıkışlarının hassas bir şekilde takip edilmesini sağlar. 
                    Çalışanlarınızın kartlarını kolayca okutarak, çalışma saatlerini doğru bir şekilde kaydedebilir 
                    ve analiz edebilirsiniz.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/access-control">Detayları İncele</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Parmak İzi */}
            <motion.div variants={staggerItem}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <img width={734} height={532} loading="lazy" 
                      src="/images/urun/parmak-izi-cihazi.jpg" 
                      alt="Parmak izi okuyucu biyometrik sistemi" 
                      className="w-32 h-32 mx-auto object-contain rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Parmak İzi</h3>
                  <p className="text-primary font-semibold mb-4">Biyometrik Güvenli Tanımlama</p>
                  <p className="text-slate-600 mb-6">
                    Parmak izi okuyucu sistemlerimiz, biyometrik doğrulama ile personel tanımlaması yapar. 
                    Biyometrik teknoloji ile kartlı sistemlere göre çok daha güvenli ve pratik bir 
                    giriş-çıkış kontrolü sağlar.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/urunler/parmak-izi-tanima">Detayları İncele</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Avantajlar */}
      <section data-testid="P4" className="relative py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp} initial={false}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Kesintisiz ve Güvenilir Hizmet
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Yüksek performans, kesintisiz hizmet ve kullanıcı odaklı iyileştirme ile işletmenizi bir adım öteye taşıyoruz.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 lg:grid-cols-6 gap-8"
            variants={staggerContainer}
            initial={false}
            whileInView="whileInView"
          >
            {[
              { icon: Cloud, title: "Bulut Tabanlı Altyapı", desc: "Esneklik ve ölçeklenebilirlik sunan güvenilir bulut tabanlı altyapı ile işletmenizi büyütün." },
              { icon: HeadphonesIcon, title: "Destek Hizmetleri", desc: "Çok kanallı müşteri desteği ile her an yanınızdayız. Sorunlarınıza hızlı çözümler sunuyoruz." },
              { icon: Globe, title: "Web ve Mobil Erişim", desc: "Duyarlı tasarım ve optimize edilmiş mobil uygulama ile her yerden kolayca erişim sağlayın." },
              { icon: Shield, title: "Performans ve Güvenilirlik", desc: "Yüksek performans ve sürekli izleme ile kesintisiz hizmet sunarak verimliliğinizi artırıyoruz." },
              { icon: Zap, title: "Sürekli İyileştirme", desc: "Geri bildirim toplama ve sürekli iyileştirme ile kullanıcı odaklı gelişim sağlıyoruz." },
              { icon: QrCode, title: "Cihazlı veya Cihazsız", desc: "Çoklu cihaz desteği ve QR kod okutma ile esnek kullanım seçenekleri sunuyoruz." }
            ].map((item, index) => (
              <motion.div key={index} variants={staggerItem} className="lg:col-span-2">
                <div className="h-full border-t border-slate-200 pt-6">
                  <item.icon className="h-7 w-7 text-primary mb-4" aria-hidden="true" />
                  <h3 className="font-bold text-slate-800 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mobil Uygulama */}
      <section data-testid="P5" className="relative py-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp} initial={false}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Mika Teknoloji Mobil Uygulaması
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Mika Teknoloji mobil uygulamamız, iş yeri yönetimini ve çalışan deneyimini yeni bir seviyeye taşıyor.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mobil Uygulama Özellikleri */}
            <motion.div {...fadeInUp} initial={false}>
              <h3 className="text-2xl font-bold text-slate-800 mb-8">Mobil Uygulama Özellikleri</h3>
              <div className="space-y-4">
                {[
                  { title: "Düzeltme Giriş Çıkışlar", desc: "Personelin giriş/çıkış saatlerinde hata veya eksik olduğunda düzeltme yapılır. Örneğin kart basmayı unutan çalışan için manuel giriş ekleme." },
                  { title: "Shift Plan Kart", desc: "Personelin vardiya/çalışma kartlarını gösterir. Hangi tarihte hangi vardiyada olduklarını görürler." },
                  { title: "Shift Plan Onay", desc: "Hazırlanan vardiya planlarının yöneticiler tarafından onaylandığı ekran. Onaylanmadan vardiya planı kesinleşmez." },
                  { title: "Avans", desc: "Personelin maaş avans taleplerini oluşturduğu ve takip ettiği bölüm. Yöneticiler de buradan onay/ret verebilir." },
                  { title: "İzin", desc: "Günlük ya da belirli tarihler için izin talep etme alanı. İzinler yönetici onayına düşer." },
                  { title: "Vardiya", desc: "Detaylı vardiya planlaması ve çalışanların vardiyalarını listeleme alanı. Özellikle üretim veya vardiyalı sistemlerde yoğun kullanılır." },
                  { title: "Yıllık İzin", desc: "Yıllık ücretli izinlerin takibi ve talep süreci. Kalan izin günleri, kullanılan izinler burada görünür." },
                  { title: "Şikayet ve Öneri", desc: "Personelin kuruma yönelik öneri ve şikayetlerini ilettiği bölüm. Yöneticiler geri bildirimleri buradan takip eder." },
                  { title: "Anket Portal", desc: "Kurum içi memnuniyet veya değerlendirme anketlerinin yayınlandığı alan. Çalışanlar anketleri doldurur, sonuçlar yönetime raporlanır." },
                  { title: "Bordro Portal", desc: "Çalışanların maaş bordrolarını görüntüleyebildiği bölüm. Genellikle PDF olarak indirilebilen bordrolar bulunur." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mobil App Mockup */}
            <motion.div 
              className="relative"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              
              <div className="relative">
                <div className="max-w-sm mx-auto">
                  {/* Phone Frame */}
                  <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-2 border-slate-700/50">
                    {/* Phone Notch */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20"></div>
                    
                    {/* Screen Container */}
                    <div className="relative bg-black rounded-[2.5rem] p-1 overflow-hidden">
                      {/* Screen Content */}
                      <div className="relative rounded-[2rem] overflow-hidden">
                        <img 
                          src="/images/urun/mobil-giris-cikis.jpg"
                          alt="Mika PDKS mobil uygulama giriş-çıkış kayıtları ekranı"
                          width={780}
                          height={1584}
                          loading="lazy"
                          className="w-full h-auto object-cover rounded-[2rem]"
                        />
                        
                        {/* Screen Reflection */}
                      </div>
                    </div>
                    
                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </div>
              
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
            {/* Yönetici Mobil Mockup */}
            <motion.div 
              className="relative order-2 lg:order-1"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              
              <div className="relative">
                <div className="max-w-sm mx-auto">
                  {/* Phone Frame */}
                  <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-2 border-slate-700/50">
                    {/* Phone Notch */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20"></div>
                    
                    {/* Screen Container */}
                    <div className="relative bg-black rounded-[2.5rem] p-1 overflow-hidden">
                      {/* Screen Content */}
                      <div className="relative rounded-[2rem] overflow-hidden">
                        <img 
                          src="/images/urun/mobil-yonetici-paneli.jpg"
                          alt="Mika PDKS mobil uygulama yönetici paneli ekranı"
                          width={780}
                          height={1584}
                          loading="lazy"
                          className="w-full h-auto object-cover rounded-[2rem]"
                        />
                        
                        {/* Screen Reflection */}
                      </div>
                    </div>
                    
                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </div>
              
            </motion.div>

            {/* Yönetici Özellikleri */}
            <motion.div className="order-1 lg:order-2" {...fadeInUp} initial={false}>
              <h3 className="text-2xl font-bold text-slate-800 mb-8">Yönetici Panel Özellikleri</h3>
              <div className="space-y-4">
                {[
                  { title: "Tarih Seçim Alanı", desc: "Başlangıç Tarihi / Bitiş Tarihi: Raporların hangi tarih aralığında gösterileceğini seçersin. Örn. 01.09.2025 – 30.09.2025 arası tüm giriş-çıkış, izin, devamsızlık verileri gelir." },
                  { title: "Personel Bilgileri Kartı", desc: "Aktif Çalışan: O an sisteme göre iş başında olan çalışan sayısı. İzinli / Raporlu: O gün izinli ya da raporlu görünen çalışan sayısı. Devamsız: O gün işe gelmeyen çalışan sayısı. Toplam: Sisteme kayıtlı toplam çalışan sayısı." },
                  { title: "Bekleyen İşlemler", desc: "Bekleyen İzin: Onay bekleyen izin talepleri. Bekleyen Saatlik İzin: Saatlik (kısa süreli) izinler için onay bekleyen talepler. Bekleyen Avans: Çalışanların talep ettiği ve onay sürecinde olan maaş avansları." },
                  { title: "Personel Durum Bilgileri", desc: "Geç Gelen: O gün belirlenen mesai saatinden sonra giriş yapan çalışan sayısı. Erken Çıkan: Çalışma saatinden önce çıkış yapan çalışan sayısı. İçerdekiler: O anda işyerinde, sistemde içeride görünüp aktif çalışan kişi sayısı. Dışardakiler: O anda işyeri dışında olan, çıkış yapmış veya hiç giriş yapmamış kişi sayısı." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PDKS Teknolojileri */}
      <section data-testid="P6" className="relative py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp} initial={false}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              PDKS Teknolojisini Keşfedin
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Otomotiv, tekstil, gıda, üretim, perakende, lojistik ve inşaat sektörlerinde kullanılan teknoloji ile çalışma gücünüzün tüm yönlerini yönetin. <Link href="/cozumler" className="text-primary hover:text-primary/80 underline font-medium">Sektörel çözümlerimizi</Link> keşfedin ve operasyonları basitleştirin.
            </p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-16"
            variants={staggerContainer}
            initial={false}
            whileInView="whileInView"
          >
            {[
              {
                icon: Calendar,
                title: "Vardiya Yönetimi",
                desc: "Vardiya yönetimini kolay ve eksiksiz yapın, karışıklığa izin vermeyin.",
                image: vardiyaYonetimiImage,
                features: [
                  "Toplu Personel Vardiya Planlama",
                  "Akıllı Vardiya Planı",
                  "Personel Vardiya Yönetimi",
                  "Vardiya Çakışma Yönetimi",
                  "Geçerli Vardiya Görüntüleme",
                  "Vardiya Listesi Yönetimi",
                  "Vardiya Arası ve Mola Süreleri",
                  "Raporlama",
                  "Toplu Hafta Tatili Yönetimi"
                ]
              },
              {
                icon: DollarSign,
                title: "Maaş Hesaplama",
                desc: "Maaş hesaplamalarının zahmetinden ve karışıklığından kurtulun.",
                image: maasHesaplamaImage,
                features: [
                  "Özelleştirebilir Parametreler",
                  "Otomatik Maaş Hesaplama",
                  "Hesap Detaylarını Görüntüleme"
                ]
              },
              {
                icon: UserCheck,
                title: "Personel Bilgileri Yönetimi",
                desc: "Personel bilgilerini tek bir ekranda toplayın, tüm detaylara kolayca erişin.",
                image: personelBilgileriImage,
                features: [
                  "Personel Listeleme",
                  "Ekleme - Düzenleme - Silme",
                  "İzin Yönetimi",
                  "Avans Yönetimi",
                  "Vardiya Yönetimi",
                  "Ücret Yönetimi",
                  "Saatlik İzin Yönetimi",
                  "Giriş-Çıkış Yönetimi"
                ]
              },
              {
                icon: MessageSquare,
                title: "Personel Talepleri Yönetimi",
                desc: "Personel taleplerini kolayca yönetin, izinler ve avansları kontrol altına alın.",
                image: personelTalepleriImage,
                features: [
                  "Saatlik İzin Talepleri",
                  "Genel İzin Talepleri",
                  "Avans Talepleri",
                  "Personel Mobil İşlemleri",
                  "Yetkili Mobil İşlemleri"
                ]
              }
            ].map((item, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="h-full p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                      <p className="text-slate-600 mb-4">{item.desc}</p>
                    </div>
                  </div>
                  
                  {/* Image for Vardiya Yönetimi */}
                  {item.image && (
                    <div className="mb-6">
                      <img {...boyut(item.image)} loading="lazy" 
                        src={item.image} 
                        alt={`${item.title} - PDKS sistem ekranı`}
                        className="w-full h-auto rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                      />
                    </div>
                  )}
                  
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Kurumsal Güvenlik ve Güvenilirlik */}
      <section data-testid="P7" className="relative py-20 bg-slate-900 border-t-4 border-primary text-white overflow-hidden">

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center mb-20"
            {...fadeInUp} initial={false}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-primary font-semibold">Kurumsal Güvenilirlik</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Güvenilir PDKS Altyapısı
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              İstanbul merkezli ekibimizle Türkiye genelindeki işletmelere hizmet veriyoruz. Çalıştığımız kurumları <Link href="/referanslar" className="text-primary hover:text-white underline">referanslar</Link> sayfasında görebilirsiniz.
            </p>
          </motion.div>

          {/* Premium Features */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            variants={staggerContainer}
            initial={false}
            whileInView="whileInView"
          >
            {[
              {
                icon: MapPin,
                title: "GPS Konum Doğrulama",
                desc: "Mobil kayda konum eklenir; sahte konum (Fake GPS) tespit edilirse kayıt alınmaz"
              },
              {
                icon: Settings,
                title: "Esnek Parametreler",
                desc: "Sektörünüze özel tolerans ayarları ve özelleştirilebilir iş kuralları"
              },
              {
                icon: Database,
                title: "Kurumsal Veri Güvenliği",
                desc: "SSL şifreleme ve yetkiye göre erişim"
              },
              {
                icon: Lock,
                title: "Yasal Uyumluluk",
                desc: "K.V.K.K.'ya uygun veri işleme; konum bilgisi raporlarda gizlenebilir"
              }
            ].map((item, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="bg-slate-800 border-slate-700 text-center p-8 h-full">
                  <div className={"w-16 h-16 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center mx-auto mb-6"}>
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Certificates & Compliance */}
          <motion.div 
            className="bg-slate-800 rounded-lg p-8 border border-slate-700"
            {...fadeInUp} initial={false}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">Güvenlik ve Uyumluluk</h3>
              <p className="text-slate-400">Veri koruma ve şifreleme</p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                { name: "K.V.K.K.", desc: "Kişisel Verilerin Korunması" },
                { name: "SSL", desc: "Şifreleme Güvenliği" }
              ].map((cert, index) => (
                <div key={index} className={"border border-slate-700 rounded-md px-4 py-3 text-center"}>
                  <div className={"text-slate-200 font-bold text-sm mb-1"}>{cert.name}</div>
                  <div className="text-slate-500 text-xs">{cert.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-testid="P8" className="relative py-20 bg-slate-900 border-t-4 border-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            className="max-w-4xl mx-auto"
            {...fadeInUp} initial={false}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Demo ile görün
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Mika Teknoloji PDKS'nin gücünü bizzat deneyimleyin. Size özel hazırlanmış bir demo ile 
              sistemimizin nasıl çalıştığını görün ve işletmenize nasıl değer katabileceğinizi keşfedin.
            </p>
            <CtaDugmeleri tur="yazilim" koyu sinif="justify-center" sayfa="Personel Takip Page" olayOnek="personel_takip" />
          </motion.div>
        </div>
      </section>

      {/* Destek Bölümü */}
      <section data-testid="P9" className="relative py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp} initial={false}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Destek ve iletişim
            </h2>
            <p className="text-lg text-slate-600">
              Personel takip sistemi, <Link href="/qr-bekci" className="text-primary hover:text-primary/80 underline font-medium">QR-Patrol güvenlik sistemi</Link>, <Link href="/urunler/turnike" className="text-primary hover:text-primary/80 underline font-medium">turnike sistemleri</Link> ve tüm teknoloji çözümlerimiz için destek ve bilgi sunuyoruz.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial={false}
            whileInView="whileInView"
          >
            {[
              { icon: BookOpen, title: "Dokümantasyon", desc: "Kapsamlı kılavuzlarımız ve teknik belgelerimizle, ürünlerimizi verimli kullanmanıza yardımcı oluyoruz.", link: "/blog" },
              { icon: Video, title: "Eğitim Videoları", desc: "Görsel öğrenmeyi tercih edenler için adım adım eğitim videoları sunuyoruz. Karmaşık konuları basitleştiriyoruz.", link: "/blog" },
              { icon: FileText, title: "Blog", desc: "Güncel trendler, ipuçları ve sektör haberleri için blogumuzu takip edin. Bilginizi sürekli güncel tutun.", link: "/blog" },
              { icon: HelpCircle, title: "S.S.S.", desc: "En sık sorulan sorulara hızlı ve net cevaplar. Zamandan tasarruf edin, çözümlere anında ulaşın.", link: "/blog" },
              { icon: MessageCircle, title: "WhatsApp", desc: "Anlık destek için WhatsApp hattımız hizmetinizde. Sorularınızı hızlıca yanıtlıyoruz.", link: "/iletisim" },
              { icon: Phone, title: "İletişim", desc: "Size bir tık uzaktayız. E-posta, telefon veya sosyal medya aracılığıyla bize ulaşın.", link: "/iletisim" }
            ].map((item, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="h-full p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <Link href={item.link}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section data-testid="P10" className="relative py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="text-center mb-12"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Sık Sorulan Sorular
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Personel takip sistemi hakkında merak ettiğiniz tüm soruların cevapları burada
            </p>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              {
                question: "PDKS (Personel Devam Kontrol Sistemi) nedir?",
                answer: "PDKS, çalışanların işyerine giriş-çıkış saatlerini dijital olarak takip eden bir sistemdir. QR kod, kart okuyucu, parmak izi gibi yöntemlerle personelin mesai saatlerini otomatik olarak kaydeder ve aylık puantajı hazırlar."
              },
              {
                question: "Personel takip sistemi yasal mı? Hangi şartlarda kullanılabilir?",
                answer: "Evet, KVKK ve İş Kanunu'na uygun olarak kullanılabilir. Çalışanları önceden bilgilendirmek, aydınlatma metni vermek ve sadece mesai takibi amacıyla kullanmak koşuluyla kullanılabilir."
              },
              {
                question: "Vardiya yönetimi nasıl çalışır?",
                answer: "Vardiya yönetimi modülü ile farklı mesai saatleri tanımlayabilir, çalışanları vardiyalara atayabilir ve otomatik mesai hesaplamaları yapabilirsiniz. Gece vardiyası, hafta sonu çalışması, fazla mesai hesaplamaları otomatik olarak gerçekleştirilir."
              },
              {
                question: "Mobil uygulama ile hangi işlemler yapılabilir?",
                answer: "Mobil uygulama ile QR kod okutarak giriş-çıkış yapabilir, mesai saatlerini görüntüleyebilir, izin taleplerinde bulunabilir, bordro bilgilerinizi inceleyebilir ve lokasyon bazlı kontrolleri gerçekleştirebilirsiniz."
              },
              {
                question: "Puantaj raporunda neler yer alır?",
                answer: "Aylık puantajda çalışma saatleri, fazla mesai ve izin bilgileri gösterilir. Puantaj Excel (.xlsx) dosyası olarak indirilir."
              },
              {
                question: "Çoklu lokasyon desteği var mı?",
                answer: "Evet, farklı şubelerde, fabrika birimlerinde veya lokasyonlarda çalışan personeli tek sistemden yönetebilirsiniz. Her lokasyon için ayrı ayarlar yapabilir, merkezi raporlama alabilirsiniz."
              },
              {
                question: "Teknik destek hizmeti nasıl alınır?",
                answer: "WhatsApp, telefon ve e-posta ile destek alabilirsiniz. Kurulum, eğitim ve teknik destek hizmetlerimiz mevcuttur."
              },
              {
                question: "Veri güvenliği nasıl sağlanır?",
                answer: "Bağlantılar SSL ile şifrelenir. Mobil kayıtlara eklenen konum bilgisi KVKK gereği raporlarda gizlenebilir."
              }
            ].map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-slate-800 group-open:text-primary transition-colors">
                      {faq.question}
                    </h3>
                    <ChevronDown className="h-5 w-5 text-slate-500 group-open:rotate-180 transition-transform duration-200" />
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </Card>
            ))}
          </motion.div>
          <p className="max-w-4xl mx-auto mt-10 text-sm text-slate-500">
            İstanbul, İzmir, Ankara, Bursa ve tüm Türkiye'deki fabrika, üretim tesisi, ofis ve perakende mağazalarına <Link href="/urunler" className="text-primary hover:underline">bulut tabanlı personel takip</Link> hizmeti veriyoruz.
          </p>
        </div>
      </section>
    </div>
  );
}