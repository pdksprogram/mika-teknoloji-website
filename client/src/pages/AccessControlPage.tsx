import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect } from "react";

// Access Control Panel images  
const accessControlPanel = "/access-control-panel.png";
const accessControlProfessional = "/access-control-professional.png";
const qrMobileAccess = "/qr-mobile-access.png";
const mikaQRApp = "/mika-qr-app.png";

export default function AccessControlPage() {
  const { selectedLanguage } = useLanguage();

  // SEO Meta Tags
  useEffect(() => {
    const title = selectedLanguage === 'tr' 
      ? 'Profesyonel Access Control Sistemleri | Mika Teknoloji - Kurumsal Güvenlik Teknolojileri'
      : 'Professional Access Control Systems | Mika Technology - Corporate Security Technologies';
    
    const description = selectedLanguage === 'tr'
      ? 'Mika Teknoloji RFID kartlı geçiş, biyometrik parmak izi, yüz tanıma ve QR kodlu mobil erişim sistemleri ile kapsamlı access control çözümleri. PDKS entegrasyonu, turnike sistemleri.'
      : 'Mika Technology comprehensive access control solutions with RFID card access, biometric fingerprint, face recognition and QR mobile access systems. PDKS integration, turnstile systems.';
      
    document.title = title;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', description);
      document.head.appendChild(metaDesc);
    }

    // Keywords
    const keywords = selectedLanguage === 'tr'
      ? 'access control, geçiş kontrol sistemleri, RFID kartlı geçiş, parmak izi sistemi, yüz tanıma, QR mobil erişim, PDKS, turnike sistemleri, güvenlik sistemleri, personel takip'
      : 'access control systems, RFID card access, fingerprint systems, face recognition, QR mobile access, PDKS, turnstile systems, security systems, personnel tracking';
    
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', keywords);
      document.head.appendChild(metaKeywords);
    }
  }, [selectedLanguage]);

  // Schema Markup for SEO
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "name": "Mika Teknoloji",
          "url": "https://mikateknoloji.com",
          "description": "Profesyonel access control sistemleri ve güvenlik teknolojileri uzmanı",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "TR"
          }
        },
        {
          "@type": "Product",
          "name": "Access Control Sistemleri",
          "description": "RFID kartlı geçiş, biyometrik parmak izi, yüz tanıma ve QR kodlu mobil erişim sistemleri",
          "brand": {
            "@type": "Brand",
            "name": "Mika Teknoloji"
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2025-12-31"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "Geçiş Kontrol Sistemi Nedir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Geçiş kontrol sistemi; kimlerin, ne zaman, hangi kapıdan geçiş yapabileceğini belirleyen, elektronik cihazlar ve yazılımlar bütünüdür."
            }
          }]
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [selectedLanguage]);

  const accessControlTranslations = {
    tr: {
      title: "Profesyonel Access Control Sistemleri",
      subtitle: "Kurumsal Güvenlik Teknolojilerinde İleri Çözümler",
      brandMessage: "Mika Teknoloji - Türkiye'nin Güvenilir Teknoloji Ortağı",
      description: "Mika Teknoloji olarak RFID kartlı geçiş, biyometrik parmak izi, yüz tanıma ve QR kodlu mobil erişim sistemleri ile kapsamlı access control çözümleri sunuyoruz. HID, EM, Mifare, Desfire, Iclass kart teknolojileri ve PDKS entegrasyonu ile işletmenizin güvenliğini maksimum seviyeye çıkarıyoruz.",
      breadcrumb: "Anasayfa > Geçiş Kontrol Sistemleri > Access Control",
      devices: {
        title: "Mika Teknoloji Access Kontrol Panelleri",
        items: [
          {
            title: "2'li Access Kontrol Paneli",
            subtitle: "Mika Teknoloji Üretimi - Profesyonel 2 Kanal Kart Okuyucu",
            image: accessControlProfessional,
            href: "/2li-access-kontrol-paneli"
          },
          {
            title: "4'lü Access Kontrol Paneli", 
            subtitle: "Mika Teknoloji Üretimi - 4 Kanal Access Kontrol Sistemi",
            image: accessControlPanel,
            href: "/4lu-access-kontrol-paneli"
          },
          {
            title: "QR Mobil Access Sistemi",
            subtitle: "Mika Teknoloji Üretimi - QR Kod + Mobil Giriş Sistemi", 
            image: qrMobileAccess,
            href: "/qr-mobil-access"
          },
          {
            title: "Access Kontrol Paneli Kutusu",
            subtitle: "Mika Teknoloji Üretimi - Korumalı Kutu Sistemi",
            image: accessControlPanel,
            href: "/access-kontrol-kutu"
          }
        ]
      },
      generalFeatures: {
        title: "Access Kontrol Paneli Genel Özellikleri",
        items: [
          "Proje özelliklerine göre IP65 standartında suya ve toza dayanıklı dış ortam ve iç ortam cihaz seçenekleri.",
          "Access kontrol paneli lokalde turnike yada kapı açmak için kullanılabilir. Lokalde yapılan bu işlemler cihazların içinde zaman damgaları ile birlikte loglanır istenildiği zaman yazılım aracılığı ile incelenebilir, ayar değişiklikleri yapılabilir.",
          "Online kullanılacak sistemlerde PDKS ve GKS yazılımlarına direk entegrasyon yapılabilir turnike, kapı geçişleri direk röleye verilebilir.",
          "ERP ve İK programları ile entegrasyon.",
          "Mika access kontrol panelleri; PDKS, geçiş kontrol, yemekhane takip, ziyaretçi takibi ve kantin sistemlerimizde kullanılmaktadır.",
          "Yüksek kalite, Yedek parça, 2 yıl garanti ve Hızlı destek"
        ]
      },
      systemProgram: {
        title: "Kartlı Geçiş Sistemi Programı",
        description: "İşe giriş çıkış noktalarına, tespit edilen kapı, turnike yada geçiş noktası gibi alanlara yerleştirilen kart okuyucu personelin kartını okutmasıyla birlikte personel kart ID'ler zaman damgalı şekilde yazılıma aktarılmaktadır. Bu zaman damgaları ile gelen kart ID'leri PDKS 'personel devam kontrol sistemi' ve GKS 'geçiş kontrol sistemi' yazılımlarına aktarılır.",
        description2: "Mika Kartlı geçiş sistemi üstün performanslı kart okuyucu, Mika PDKS ve personel geçiş takip sistemi yazılımları ile entegre olarak çalışmaktadır. Aynı zamanda piyasada bilinen tüm insan kaynakları ile entegre olabilmektedir.",
        image: "/rfid-turnstile-system.png"
      },
      references: {
        title: "Referanslar",
        logos: [
          { name: "Starbucks", logo: "/logo-placeholder.png" },
          { name: "Koç Holding", logo: "/logo-placeholder.png" },
          { name: "Türk Hava Yolları", logo: "/logo-placeholder.png" },
          { name: "Teknosa", logo: "/logo-placeholder.png" },
          { name: "Yıldız Holding", logo: "/logo-placeholder.png" },
          { name: "TAV Holding", logo: "/logo-placeholder.png" },
          { name: "Watsons", logo: "/logo-placeholder.png" },
          { name: "Yataş", logo: "/logo-placeholder.png" }
        ]
      },
      technologies: {
        title: "Geçiş Kontrol Teknolojileri Nelerdir?",
        items: [
          "RFID Kartlı Geçiş Sistemi",
          "Parmak İzli Geçiş Sistemi", 
          "Yüz Tanımalı Sistemler",
          "QR Kodu & Mobil Girişe Dayalı Geçiş Kontrolü",
          "Turnike Sistemleri",
          "Access Control Panelleri"
        ]
      },
      usageAreas: {
        title: "Geçiş Kontrol Sistemleri Kullanılan Alanlar",
        description: "Access control sistemleri her alanda kullanılmaktadır. Bunlardan bazıları ise;",
        areas: [
          "Plaza, İş Yeri ve Ofis Binaları",
          "Hastane / Sağlık Merkezleri", 
          "Üniversite ve Okullar",
          "Oteller ve Tatil Köyleri",
          "Alışveriş Merkezi ve Mağazalar",
          "Banka / Finans Kuruluşları",
          "Sanayi, Üretim ve Endüstriyel Tesisler",
          "Lojistik / Depolama Merkezleri",
          "Araştırma / Geliştirme Laboratuvarları",
          "Yüksek Güvenlikli Tesisler",
          "Veri Merkezi ve Bulut Hizmet Sağlayıcıları",
          "Spor ve Fitness Tesisleri"
        ]
      },
      benefits: {
        title: "Access Control Sistemlerinin Faydaları",
        items: [
          "Yetkisiz girişleri engeller",
          "Personel hareketlerini izler ve raporlar",
          "Kurumsal verimliliği artırır",
          "Güvenlik seviyesi yüksek tutulur",
          "PDKS entegrasyonu ile devam kontrolü",
          "Gerçek zamanlı izleme ve raporlama",
          "Coğrafi ve zamansal erişim kısıtlamaları",
          "Maliyet etkili güvenlik çözümü"
        ]
      },
      process: {
        title: "Mika Access Control Süreci",
        steps: [
          {
            title: "Keşif ve İhtiyaç Analizi",
            description: "Projenize özel alan ve ihtiyaç analizi yapılır."
          },
          {
            title: "Sistem Tasarımı",
            description: "Cihaz tipi, yazılım modülleri ve entegrasyonlar belirlenir."
          },
          {
            title: "Montaj ve Devreye Alma",
            description: "Profesyonel ekibimizce kurulum yapılır."
          },
          {
            title: "Eğitim ve Destek",
            description: "Kullanıcı eğitimi ve sürekli teknik destek sağlanır."
          }
        ]
      },
      advantages: {
        title: "Neden Mika Access Control Sistemleri?",
        description: "Türkiye'nin önde gelen access control uzmanı olarak sektördeki deneyimimiz ve teknoloji liderliğimizle öne çıkıyoruz.",
        items: [
          {
            title: "500+ Başarılı Proje",
            description: "Türkiye'nin önde gelen şirketlerinde başarılı access control uygulamaları."
          },
          {
            title: "50.000+ Aktif Kullanıcı",
            description: "Günlük güvenli geçiş sağlanan personel sayısı ile kanıtlanmış güvenilirlik."
          },
          {
            title: "7/24 Teknik Destek",
            description: "Kesintisiz hizmet için sürekli teknik destek ve bakım hizmeti."
          },
          {
            title: "%99.9 Sistem Güvenilirliği",
            description: "Yüksek performans ve kararlı çalışma garantisi ile iş sürekliği."
          }
        ]
      },
      contact: {
        title: "Hemen bizimle iletişime geçerek en uygun kartlı geçiş sistemini belirleyelim.",
        button: "MIKA İLETİŞİM"
      }
    },
    en: {
      title: "Professional Access Control Systems",
      subtitle: "Advanced Solutions in Corporate Security Technologies",
      brandMessage: "Mika Technology - Turkey's Trusted Technology Partner",
      description: "Mika Technology offers comprehensive access control solutions with RFID card access, biometric fingerprint, face recognition and QR mobile access systems. With HID, EM, Mifare, Desfire, Iclass card technologies and PDKS integration, we maximize your business security.",
      breadcrumb: "Home > Access Control Systems > Professional Solutions",
      devices: {
        title: "Mika Technology Access Control Panels",
        items: [
          {
            title: "2-Channel Access Control Panel",
            subtitle: "Mika Technology Production - Professional 2 Channel Card Reader",
            image: accessControlProfessional,
            href: "/2-channel-access-control"
          },
          {
            title: "4-Channel Access Control Panel", 
            subtitle: "Mika Technology Production - 4 Channel Access Control System",
            image: accessControlPanel,
            href: "/4-channel-access-control"
          },
          {
            title: "QR Mobile Access System",
            subtitle: "Mika Technology Production - QR Code + Mobile Entry System", 
            image: qrMobileAccess,
            href: "/qr-mobile-access"
          },
          {
            title: "Access Control Panel Box",
            subtitle: "Mika Technology Production - Protected Box System",
            image: accessControlPanel,
            href: "/access-control-box"
          }
        ]
      },
      generalFeatures: {
        title: "Access Control Panel General Features",
        items: [
          "IP65 standard water and dust resistant outdoor and indoor device options according to project features.",
          "Access control panel can be used locally to open turnstiles or doors. These local operations are logged in the devices with timestamps and can be examined and settings changed via software when desired.",
          "In systems to be used online, direct integration can be made to PDKS and GKS software, turnstile and door passages can be given directly to the relay.",
          "Integration with ERP and HR programs.",
          "Mika access control panels are used in our PDKS, access control, cafeteria tracking, visitor tracking and canteen systems.",
          "High quality, Spare parts, 2-year warranty and Fast support"
        ]
      },
      systemProgram: {
        title: "Card Access System Program",
        description: "Personnel card IDs are transferred to software with timestamps when personnel swipe their cards through card readers placed at work entry-exit points, doors, turnstiles or passage points. These card IDs with timestamps are transferred to PDKS \"personnel attendance control system\" and GKS \"access control system\" software.",
        description2: "Mika Card access system works integrated with high-performance card readers, Mika PDKS and personnel access tracking system software. It can also be integrated with all known human resources in the market.",
        image: "/rfid-turnstile-system.png"
      },
      references: {
        title: "References",
        logos: [
          { name: "Starbucks", logo: "/logo-placeholder.png" },
          { name: "Koç Holding", logo: "/logo-placeholder.png" },
          { name: "Turkish Airlines", logo: "/logo-placeholder.png" },
          { name: "Teknosa", logo: "/logo-placeholder.png" },
          { name: "Yıldız Holding", logo: "/logo-placeholder.png" },
          { name: "TAV Holding", logo: "/logo-placeholder.png" },
          { name: "Watsons", logo: "/logo-placeholder.png" },
          { name: "Yataş", logo: "/logo-placeholder.png" }
        ]
      },
      technologies: {
        title: "What Are Access Control Technologies?",
        items: [
          "RFID Card Access System",
          "Fingerprint Access System", 
          "Face Recognition Systems",
          "QR Code & Mobile Entry Based Access Control",
          "Turnstile Systems",
          "Access Control Panels"
        ]
      },
      usageAreas: {
        title: "Access Control Systems Usage Areas",
        description: "Access control systems are used in every field. Some of these are;",
        areas: [
          "Plaza, Business and Office Buildings",
          "Hospital / Health Centers", 
          "Universities and Schools",
          "Hotels and Holiday Villages",
          "Shopping Centers and Stores",
          "Bank / Financial Institutions",
          "Industrial, Manufacturing and Industrial Facilities",
          "Logistics / Storage Centers",
          "Research / Development Laboratories",
          "High Security Facilities",
          "Data Centers and Cloud Service Providers",
          "Sports and Fitness Facilities"
        ]
      },
      benefits: {
        title: "Benefits of Access Control Systems",
        items: [
          "Prevents unauthorized access",
          "Tracks and reports personnel movements",
          "Increases corporate efficiency",
          "Maintains high security level",
          "PDKS integration for attendance control",
          "Real-time monitoring and reporting",
          "Geographic and temporal access restrictions",
          "Cost-effective security solution"
        ]
      },
      process: {
        title: "Mika Access Control Process",
        steps: [
          {
            title: "Discovery and Needs Analysis",
            description: "Project-specific area and needs analysis is performed."
          },
          {
            title: "System Design",
            description: "Device type, software modules and integrations are determined."
          },
          {
            title: "Installation and Commissioning",
            description: "Installation is carried out by our professional team."
          },
          {
            title: "Training and Support",
            description: "User training and continuous technical support are provided."
          }
        ]
      },
      advantages: {
        title: "Why Mika Access Control Systems?",
        description: "As Turkey's leading access control expert, we stand out with our industry experience and technology leadership.",
        items: [
          {
            title: "500+ Successful Projects",
            description: "Successful access control implementations in Turkey's leading companies."
          },
          {
            title: "50,000+ Active Users",
            description: "Proven reliability with the number of personnel provided with daily secure access."
          },
          {
            title: "7/24 Technical Support",
            description: "Continuous technical support and maintenance service for uninterrupted service."
          },
          {
            title: "99.9% System Reliability",
            description: "Business continuity with high performance and stable operation guarantee."
          }
        ]
      },
      contact: {
        title: "Contact us immediately to determine the most suitable card access system.",
        button: "MIKA CONTACT"
      }
    }
  };

  const t = accessControlTranslations[selectedLanguage];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Animation */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-white to-primary/10 overflow-hidden">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-slate-600 mb-8">
            {t.breadcrumb}
          </nav>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wide">
                  {t.brandMessage}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                {t.title}
              </h1>
              
              <h2 className="text-xl md:text-2xl text-slate-600 font-light mb-6 leading-relaxed">
                {t.subtitle}
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {t.description}
              </p>
              
              <div className="space-y-6 mb-8">
                <p className="text-lg text-slate-600 leading-relaxed">
                  Access kontrol panelleri ile kapsamlı güvenlik sistemleri kurabilirsiniz. Mika PDKS yazılımı, tüm ERP ve İK yazılımları ile entegre çalışmaktadır.
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border-l-4 border-primary">
                  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">?</span>
                    </div>
                    Geçiş Kontrol Sistemi Nedir?
                  </h3>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Geçiş kontrol sistemi; <strong>kimlerin, ne zaman, hangi kapıdan geçiş yapabileceğini</strong> belirleyen elektronik cihazlar ve yazılımlar bütünüdür. Bireylerin veya araçların belirli bir alana giriş ve çıkış yetkisini sınırlandırmak, izlemek ve yönetmek amacıyla kullanılır.
                  </p>
                </div>
              </div>"

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
                >
                  <Link href="/iletisim">
                    Ücretsiz Keşif Talep Edin
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/5 px-8 py-3"
                >
                  Teknik Bilgi Alın
                </Button>
              </div>
            </motion.div>

            {/* Right Side - Professional Demo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Clean Demo Container */}
              <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-8 max-w-lg mx-auto">
                
                {/* Access Control Panel Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center mb-8"
                >
                  <div className="relative inline-block">
                    {/* Clean Panel Representation */}
                    <div className="w-48 h-32 bg-slate-800 rounded-lg mx-auto relative overflow-hidden">
                      <div className="absolute inset-3 bg-slate-700 rounded-md">
                        {/* Clean Interface */}
                        <div className="p-3">
                          <div className="flex justify-between items-center mb-2">
                            <div className="text-green-400 text-xs font-mono">MIKA</div>
                            <motion.div
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="w-2 h-2 bg-green-400 rounded-full"
                            ></motion.div>
                          </div>
                          <div className="space-y-1">
                            <div className="h-1 bg-slate-600 rounded w-3/4"></div>
                            <div className="h-1 bg-slate-600 rounded w-1/2"></div>
                          </div>
                          {/* Card Reader Slot */}
                          <div className="mt-3 h-3 bg-slate-900 rounded-sm mx-auto w-16 relative">
                            <motion.div
                              animate={{ x: [-20, 0, -20] }}
                              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                              className="absolute inset-y-0 right-0 w-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-sm"
                            ></motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 mt-3 font-medium">Access Control Panel</p>
                  </div>
                </motion.div>

                {/* Connection Indicator */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  className="flex items-center justify-center mb-8"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="w-8 h-0.5 bg-primary"></div>
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="w-8 h-0.5 bg-primary"></div>
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                </motion.div>

                {/* Mobile App Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2 }}
                  className="text-center"
                >
                  <div className="relative inline-block">
                    {/* Real Mika QR App Photo */}
                    <div className="relative">
                      <img 
                        src={mikaQRApp} 
                        alt="Mika QR Mobile App"
                        className="w-48 h-auto mx-auto rounded-2xl shadow-xl"
                      />
                      
                      {/* QR Scan Animation Overlay */}
                      <motion.div
                        animate={{ opacity: [0, 0.8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
                          className="w-24 h-24 border-4 border-primary rounded-lg bg-primary/10"
                        ></motion.div>
                      </motion.div>
                    </div>
                    <p className="text-sm text-slate-600 mt-3 font-medium">Mika Mobile App</p>
                    
                    {/* Success Badge */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 5, type: "spring" }}
                      className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm"
                    >
                      ✓
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Device Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
              {t.devices.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.devices.items.map((device, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Link href={device.href}>
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 group">
                    <img 
                      src={device.image} 
                      alt={device.title}
                      className="w-full h-40 object-contain mb-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    <h3 className="font-bold text-primary text-lg mb-2">
                      {device.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {device.subtitle}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* General Features */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
              {t.generalFeatures.title}
            </h2>
            
            <div className="max-w-4xl">
              <ul className="space-y-4">
                {t.generalFeatures.items.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-slate-700 leading-relaxed">{feature}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* System Program */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
              {t.systemProgram.title}
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-slate-700 leading-relaxed text-lg">
                  {t.systemProgram.description}
                </p>
                
                <p className="text-slate-700 leading-relaxed text-lg">
                  Bu zaman damgaları ile gelen kart ID'leri PDKS "personel devam kontrol sistemi" ve GKS "geçiş kontrol sistemi" yazılımlarına aktarılır. Bu yazılımlar aracılığı ile personelin yetkileri, işe giriş çıkış zamanları, mola zamanları, hakedişleri ve mesai ücretleri hesaplanabilir. Yazılımlarımız masaüstü yada internet ortamından online olarak çalışabilmektedir.
                </p>
                
                <p className="text-slate-700 leading-relaxed text-lg">
                  {t.systemProgram.description2}
                </p>
              </div>
              
              <div>
                <img 
                  src={t.systemProgram.image} 
                  alt="Kartlı Geçiş Sistemi"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* References */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
              {t.references.title}
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {t.references.logos.map((ref, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-16 flex items-center justify-center">
                    <div className="text-xs text-slate-500 font-medium text-center">
                      {ref.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
              {t.technologies.title}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.technologies.items.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-primary rounded"></div>
                  </div>
                  <h3 className="font-semibold text-slate-800 text-lg">{tech}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Usage Areas */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
              {t.usageAreas.title}
            </h2>
            
            <p className="text-lg text-slate-600 mb-8">
              {t.usageAreas.description}
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.usageAreas.areas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-slate-700">{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
              {t.benefits.title}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {t.benefits.items.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-700 leading-relaxed">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-12 text-center">
              {t.process.title}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.process.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-slate-800 text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
              Sık Sorulan Sorular
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-primary">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  Access control sistemleri hangi kartları okuyabilir?
                </h3>
                <p className="text-slate-600">
                  Mika access control panelleri HID, EM, Mifare, Desfire, Iclass teknolojilerini destekler. Çoklu platform desteği ile farklı kart türlerini okuyabilir.
                </p>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-primary">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  PDKS yazılımı ile entegrasyon nasıl çalışır?
                </h3>
                <p className="text-slate-600">
                  Mika PDKS yazılımı tüm ERP ve İK programları ile entegre çalışır. Online sistemlerde direk entegrasyon yapılabilir ve geçiş kayıtları anlık aktarılır.
                </p>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-primary">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  Garanti süresi ve teknik destek nasıl?
                </h3>
                <p className="text-slate-600">
                  2 yıl tam garanti, 7/24 teknik destek ve ücretsiz kurulum hizmetimiz bulunmaktadır. Profesyonel ekibimiz kurulum sonrası eğitim de vermektedir.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
              {t.advantages.title}
            </h2>
            
            <div className="max-w-4xl mb-8">
              <p className="text-slate-700 leading-relaxed text-lg mb-6">
                {t.advantages.description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {t.advantages.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <h3 className="font-bold text-slate-800 text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl mb-8">
              {t.contact.title}
            </p>
            
            <Button 
              asChild
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 px-8 py-3 font-semibold"
            >
              <Link href="/iletisim">
                {t.contact.button}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}