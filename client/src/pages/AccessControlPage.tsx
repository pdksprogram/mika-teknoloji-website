import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { CheckCircle, Shield, Eye, ArrowRight, Users, Lock, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

// Access Control Panel images
const accessControlPanel = "/attached_assets/image_1756893802044.png";

export default function AccessControlPage() {
  const { selectedLanguage } = useLanguage();

  const accessControlTranslations = {
    tr: {
      title: "Kartlı Geçiş Sistemleri",
      subtitle: "Kart Okuyucular ile Kartlı Geçiş Sistemi",
      description: "Mika Teknoloji kartlı geçiş sisteminde dünya lideri teknoloji ile RFID Personel Kart Okuyucular tercih etmektedir. Çoklu platform desteği ile personel kartlarının cinsine göre cihazlar HID, EM, Mifare, Desfire, Iclass özellikli kartları okuyabilmektedir. Kart okuyucu cihazlar; turnike geçişlerini ve kapı kilitlerini kontrol eden röleler içermektedir.",
      breadcrumb: "Anasayfa > Kartlı Geçiş Sistemleri",
      devices: {
        title: "Access Kontrol Panelleri",
        items: [
          {
            title: "16'lı Access Kontrol Paneli",
            subtitle: "Profesyonel kart okuyucu + NFC + BLE + Şifre + Mobil Giriş",
            image: accessControlPanel,
            href: "/access-kontrol-paneli"
          },
          {
            title: "16'lı Access Kontrol Paneli Kutusu", 
            subtitle: "Access Kontrol Paneli ile Kutu Sistemi",
            image: accessControlPanel,
            href: "/access-kontrol-kutu"
          },
          {
            title: "Access Kontrol Paneli QR",
            subtitle: "Access Kontrol Paneli + QR okuyucu + Mobil giriş", 
            image: accessControlPanel,
            href: "/access-kontrol-qr"
          },
          {
            title: "Access Kontrol Paneli Slim",
            subtitle: "Kompakt Access Kontrol Paneli Cihazı",
            image: accessControlPanel,
            href: "/access-kontrol-slim"
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
        description: "İşe giriş çıkış noktalarına, tespit edilen kapı, turnike yada geçiş noktası gibi alanlara yerleştirilen kart okuyucu personelin kartını okutmasıyla birlikte personel kart ID'ler zaman damgalı şekilde yazılıma aktarılmaktadır. Bu zaman damgaları ile gelen kart ID'leri PDKS \"personel devam kontrol sistemi\" ve GKS \"geçiş kontrol sistemi\" yazılımlarına aktarılır.",
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
      otherSystems: {
        title: "Personel Geçiş Kontrol Sistemleri",
        description: "Kartla geçiş sistemi şeklinde olduğu gibi farklı biyometrik çözümlerle de geçiş kontrolü yapılabilir.",
        description2: "Personel Geçiş Sistemleri : Parmak izi tanıma, Yüz tanıma, Yüz + Parmak İzi Tanıma, Damar Tanıma, Göz İrisi Tanıma ve QR okuyucu / Mobil giriş entegrasyonu olabilmektedir. Mika PDKS ve GKS yazılımı ile çalışan bu cihazlar piyasada bilinen tüm ERP, CRM yazılımlarıyla tam entegre şekilde çalışabilmektedir."
      },
      advantages: {
        title: "Kartlı Geçiş Teknolojisi ve Avantajları",
        description: "Kartlı geçiş sistemi, bir kurum veya kuruluşta çalışanların erişimini kontrol etmek için kullanılan kart tabanlı geçiş sistemleri teknolojisidir.",
        items: [
          {
            title: "Erişim Kontrolü",
            description: "Kartlı geçiş, yetkisiz erişimi engellemek için etkili bir erişim kontrolü sağlar."
          },
          {
            title: "Kimlik Doğrulama",
            description: "Kartlı giriş sistemi, kullanıcıların kimliklerini doğrulamak için kullanılır."
          },
          {
            title: "Geçiş İzinleri",
            description: "Kartlı personel geçiş, personellere özelleştirilmiş geçiş izinleri tanımlamayı sağlar."
          },
          {
            title: "İzleme ve Kayıt Tutma",
            description: "Geçiş kayıtlarını tutarak izleme ve kayıt süreçlerini sağlar."
          }
        ]
      },
      contact: {
        title: "Hemen bizimle iletişime geçerek en uygun kartlı geçiş sistemini belirleyelim.",
        button: "MIKA İLETİŞİM"
      }
    },
    en: {
      title: "Card Access Systems",
      subtitle: "Card Readers for Card Access System",
      description: "Mika Technology prefers world-leading RFID Personnel Card Readers in card access systems. With multi-platform support, devices can read HID, EM, Mifare, Desfire, Iclass cards according to personnel card types. Card reader devices contain relays that control turnstile passages and door locks.",
      breadcrumb: "Home > Card Access Systems",
      devices: {
        title: "Access Control Panels",
        items: [
          {
            title: "16-Channel Access Control Panel",
            subtitle: "Professional card reader + NFC + BLE + Password + Mobile Entry",
            image: accessControlPanel,
            href: "/access-control-panel"
          },
          {
            title: "16-Channel Access Control Panel Box", 
            subtitle: "Access Control Panel with Box System",
            image: accessControlPanel,
            href: "/access-control-box"
          },
          {
            title: "Access Control Panel QR",
            subtitle: "Access Control Panel + QR reader + Mobile entry", 
            image: accessControlPanel,
            href: "/access-control-qr"
          },
          {
            title: "Access Control Panel Slim",
            subtitle: "Compact Access Control Panel Device",
            image: accessControlPanel,
            href: "/access-control-slim"
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
      otherSystems: {
        title: "Personnel Access Control Systems",
        description: "Access control can also be performed with different biometric solutions, just like card access systems.",
        description2: "Personnel Access Systems: Fingerprint recognition, Face recognition, Face + Fingerprint Recognition, Vein Recognition, Eye Iris Recognition and QR reader / Mobile entry integration. These devices working with Mika PDKS and GKS software can work fully integrated with all known ERP and CRM software in the market."
      },
      advantages: {
        title: "Card Access Technology and Advantages",
        description: "Card access system is card-based access systems technology used to control employees' access in an institution or organization.",
        items: [
          {
            title: "Access Control",
            description: "Card access provides effective access control to prevent unauthorized access."
          },
          {
            title: "Identity Verification",
            description: "Card entry system is used to verify users' identities."
          },
          {
            title: "Access Permissions",
            description: "Card personnel access enables defining customized access permissions for personnel."
          },
          {
            title: "Monitoring and Record Keeping",
            description: "Provides monitoring and recording processes by keeping access records."
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
      {/* Breadcrumb & Header */}
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-slate-600 mb-6">
            {t.breadcrumb}
          </nav>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              {t.title}
            </h1>
            
            <h2 className="text-xl md:text-2xl text-slate-700 font-medium mb-4">
              {t.subtitle}
            </h2>

            <p className="text-lg text-slate-600 max-w-4xl leading-relaxed mb-4">
              {t.description}
            </p>
            
            <p className="text-lg text-slate-600 max-w-4xl leading-relaxed">
              Access kontrol panelleri ile kapsamlı güvenlik sistemleri kurabilirsiniz. Türkiye'deki ilk 500 şirketin %80'nin kullandığı Mika PDKS yazılımı, piyasada bilinen tüm Kurumsal Kaynak Planlama (ERP) ve İnsan Kaynakları yazılımları ile entegre çalışabilmektedir.
            </p>
          </motion.div>
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
      
      {/* Other Systems */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
              {t.otherSystems.title}
            </h2>
            
            <div className="max-w-4xl space-y-6">
              <p className="text-slate-700 leading-relaxed text-lg">
                {t.otherSystems.description}
              </p>
              
              <p className="text-slate-700 leading-relaxed text-lg">
                {t.otherSystems.description2}
              </p>
              
              <p className="text-lg font-semibold text-slate-800 mt-8">
                Hemen bizimle iletişime geçerek en uygun kartlı geçiş sistemini belirleyelim.
              </p>
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