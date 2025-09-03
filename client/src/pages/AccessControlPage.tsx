import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { CheckCircle, Shield, Eye, ArrowRight, Users, Lock, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

// Device images (using same PDKS images for now, can be updated with access control specific images)
const accessDevice1 = "/facial-device.png";
const accessDevice2 = "/qr-hand-mockup.png";
const accessDevice3 = "/fingerprint-device.png";
const accessDevice4 = "/rfid-turnstile-system.png";

export default function AccessControlPage() {
  const { selectedLanguage } = useLanguage();

  const accessControlTranslations = {
    tr: {
      title: "Access Geçiş Kontrol Sistemleri - Kurumsal Güvenlik Çözümleri",
      subtitle: "RFID Kartlı, Biyometrik ve QR Kod Destekli Geçiş Kontrol Sistemleri",
      description: "Mika Teknoloji olarak, işletmenizin güvenliğini maksimum seviyeye çıkarmak için en gelişmiş access geçiş kontrol sistemlerini sunuyoruz. RFID kartlı geçiş, yüz tanıma, parmak izi ve QR kod teknolojileri ile personel erişim kontrolü, ziyaretçi takibi ve alan güvenliği sağlayan profesyonel çözümler.",
      hero: {
        badge: "Kurumsal Güvenlik",
        title: "Access Geçiş Kontrol Sistemleri",
        subtitle: "Güvenlik ve Erişim Kontrolünde Yeni Nesil Teknoloji",
        description: "İşletmenizin güvenliğini sağlamak ve yetkisiz erişimleri engellemek için tasarlanmış profesyonel geçiş kontrol sistemleri. Kartlı geçiş, biyometrik tanıma ve mobil erişim teknolojileri ile kapsamlı güvenlik çözümleri.",
        cta: "Ücretsiz Keşif Talep Edin",
        info: "Teknik Bilgi Alın"
      },
      devices: {
        title: "Access Kontrol Cihazları",
        subtitle: "Güvenlik İhtiyaçlarınıza Uygun Çözümler",
        items: [
          {
            id: "rfid-access",
            title: "RFID Kartlı Access Sistemi", 
            description: "Temassız kart teknolojisi ile hızlı ve güvenli geçiş kontrolü",
            image: accessDevice4,
            features: ["RFID/Mifare kart desteği", "IP65 dayanıklılık", "TCP/IP bağlantı", "Yerel kayıt"]
          },
          {
            id: "facial-access",
            title: "Yüz Tanıma Access Sistemi",
            description: "Temassız biyometrik teknoloji ile yüksek güvenlik seviyesi", 
            image: accessDevice1,
            features: ["Anti-spoofing teknoloji", "Maske ile tanıma", "Hızlı doğrulama", "Gece görüş"]
          },
          {
            id: "fingerprint-access", 
            title: "Parmak İzi Access Sistemi",
            description: "Biyometrik parmak izi ile eşsiz güvenlik çözümü",
            image: accessDevice3,
            features: ["Canlı parmak algılama", "Yüksek doğruluk", "Hızlı tanıma", "Sahte engelleme"]
          },
          {
            id: "qr-mobile-access",
            title: "QR Kod Mobil Access Sistemi", 
            description: "Smartphone destekli dinamik QR kod ile esnek erişim",
            image: accessDevice2,
            features: ["Dinamik QR üretimi", "Mobil uygulama", "GPS doğrulama", "Zaman sınırlı erişim"]
          }
        ]
      },
      features: {
        title: "Access Kontrol Sistemi Özellikleri",
        subtitle: "Kapsamlı Güvenlik ve Yönetim İmkanları",
        items: [
          {
            icon: Shield,
            title: "Çoklu Güvenlik Katmanları",
            description: "Kart + PIN, biyometrik + kart gibi çoklu doğrulama seçenekleri ile maksimum güvenlik"
          },
          {
            icon: Users,
            title: "Kullanıcı Yönetimi",
            description: "Departman bazlı yetkilendirme, zaman dilimi kontrolü ve grup yönetimi"
          },
          {
            icon: Lock,
            title: "Alan Bazlı Erişim",
            description: "Farklı güvenlik seviyelerinde alanlar için özelleştirilmiş erişim izinleri"
          },
          {
            icon: Clock,
            title: "Zaman Kontrolü",
            description: "Mesai saatleri, vardiya değişimleri ve tatil günleri için özel erişim kuralları"
          },
          {
            icon: Zap,
            title: "Anlık Bildirimler",
            description: "Yetkisiz erişim denemeleri, acil durum uyarıları ve sistem durumu bildirimleri"
          },
          {
            icon: Eye,
            title: "Detaylı Raporlama",
            description: "Geçiş logları, kullanıcı aktiviteleri ve güvenlik raporları ile tam görünürlük"
          }
        ]
      },
      advantages: {
        title: "Neden Mika Access Kontrol?",
        subtitle: "Sektördeki Deneyimimiz ve Teknoloji Liderliğimiz",
        items: [
          {
            number: "500+",
            title: "Kurumsal Proje",
            description: "Türkiye'nin önde gelen şirketlerinde başarılı uygulamalar"
          },
          {
            number: "50.000+",
            title: "Aktif Kullanıcı", 
            description: "Günlük güvenli geçiş sağlanan personel sayısı"
          },
          {
            number: "7/24",
            title: "Teknik Destek",
            description: "Kesintisiz hizmet için sürekli destek"
          },
          {
            number: "%99.9",
            title: "Sistem Güvenilirliği",
            description: "Yüksek performans ve kararlı çalışma garantisi"
          }
        ]
      },
      integrations: {
        title: "Entegrasyon İmkanları", 
        subtitle: "Mevcut Sistemlerinizle Uyumlu Çalışma",
        items: [
          "ERP Sistemleri Entegrasyonu",
          "İnsan Kaynakları Yazılımları",
          "PDKS Sistemi Senkronizasyonu", 
          "Güvenlik Kamera Sistemleri",
          "Fire Alarm Sistemleri",
          "Bina Otomasyon Sistemleri",
          "Ziyaretçi Yönetim Sistemleri",
          "Otopark Yönetim Sistemleri"
        ]
      },
      references: {
        title: "Referans Projelerimiz",
        subtitle: "Güvenilir Çözümler Sunan Deneyimli Ekip",
        description: "Türkiye'nin lider şirketleri güvenlik ihtiyaçları için Mika Teknoloji'yi tercih ediyor."
      },
      cta: {
        title: "Access Kontrol Sisteminizi Planlayalım",
        description: "İşletmenizin güvenlik ihtiyaçlarını analiz ederek size özel access kontrol çözümü tasarlıyoruz.",
        button: "Ücretsiz Keşif Talep Et",
        contact: "Hemen Arayın: +90 555 123 45 67"
      }
    },
    en: {
      title: "Access Control Systems - Corporate Security Solutions",
      subtitle: "RFID Card, Biometric and QR Code Supported Access Control Systems",
      description: "As Mika Technology, we offer the most advanced access control systems to maximize your business security. Professional solutions providing personnel access control, visitor tracking and area security with RFID card access, facial recognition, fingerprint and QR code technologies.",
      hero: {
        badge: "Corporate Security",
        title: "Access Control Systems",
        subtitle: "Next Generation Technology in Security and Access Control",
        description: "Professional access control systems designed to ensure your business security and prevent unauthorized access. Comprehensive security solutions with card access, biometric recognition and mobile access technologies.",
        cta: "Request Free Consultation",
        info: "Get Technical Information"
      },
      devices: {
        title: "Access Control Devices",
        subtitle: "Solutions Suitable for Your Security Needs",
        items: [
          {
            id: "rfid-access",
            title: "RFID Card Access System", 
            description: "Fast and secure access control with contactless card technology",
            image: accessDevice4,
            features: ["RFID/Mifare card support", "IP65 durability", "TCP/IP connection", "Local recording"]
          },
          {
            id: "facial-access",
            title: "Facial Recognition Access System",
            description: "High security level with contactless biometric technology", 
            image: accessDevice1,
            features: ["Anti-spoofing technology", "Mask recognition", "Fast verification", "Night vision"]
          },
          {
            id: "fingerprint-access", 
            title: "Fingerprint Access System",
            description: "Unique security solution with biometric fingerprint",
            image: accessDevice3,
            features: ["Live finger detection", "High accuracy", "Fast recognition", "Fake prevention"]
          },
          {
            id: "qr-mobile-access",
            title: "QR Code Mobile Access System", 
            description: "Flexible access with smartphone supported dynamic QR code",
            image: accessDevice2,
            features: ["Dynamic QR generation", "Mobile application", "GPS verification", "Time-limited access"]
          }
        ]
      },
      features: {
        title: "Access Control System Features",
        subtitle: "Comprehensive Security and Management Capabilities",
        items: [
          {
            icon: Shield,
            title: "Multi-Layer Security",
            description: "Maximum security with multi-authentication options like card + PIN, biometric + card"
          },
          {
            icon: Users,
            title: "User Management",
            description: "Department-based authorization, time zone control and group management"
          },
          {
            icon: Lock,
            title: "Area-Based Access",
            description: "Customized access permissions for areas with different security levels"
          },
          {
            icon: Clock,
            title: "Time Control",
            description: "Special access rules for working hours, shift changes and holidays"
          },
          {
            icon: Zap,
            title: "Real-time Notifications",
            description: "Unauthorized access attempts, emergency alerts and system status notifications"
          },
          {
            icon: Eye,
            title: "Detailed Reporting",
            description: "Complete visibility with access logs, user activities and security reports"
          }
        ]
      },
      advantages: {
        title: "Why Mika Access Control?",
        subtitle: "Our Industry Experience and Technology Leadership",
        items: [
          {
            number: "500+",
            title: "Corporate Projects",
            description: "Successful implementations in Turkey's leading companies"
          },
          {
            number: "50,000+",
            title: "Active Users", 
            description: "Number of personnel provided with daily secure access"
          },
          {
            number: "7/24",
            title: "Technical Support",
            description: "Continuous support for uninterrupted service"
          },
          {
            number: "99.9%",
            title: "System Reliability",
            description: "High performance and stable operation guarantee"
          }
        ]
      },
      integrations: {
        title: "Integration Capabilities", 
        subtitle: "Compatible Operation with Your Existing Systems",
        items: [
          "ERP Systems Integration",
          "Human Resources Software",
          "PDKS System Synchronization", 
          "Security Camera Systems",
          "Fire Alarm Systems",
          "Building Automation Systems",
          "Visitor Management Systems",
          "Parking Management Systems"
        ]
      },
      references: {
        title: "Our Reference Projects",
        subtitle: "Experienced Team Providing Reliable Solutions",
        description: "Turkey's leading companies prefer Mika Technology for their security needs."
      },
      cta: {
        title: "Let's Plan Your Access Control System",
        description: "We design a custom access control solution by analyzing your business security needs.",
        button: "Request Free Consultation",
        contact: "Call Now: +90 555 123 45 67"
      }
    }
  };

  const t = accessControlTranslations[selectedLanguage];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              {t.hero.badge}
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              {t.hero.title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-600 font-medium mb-8">
              {t.hero.subtitle}
            </p>

            {/* Description */}
            <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
              >
                <Link href="/iletisim">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary/5 px-8 py-3"
              >
                {t.hero.info}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Devices Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {t.devices.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t.devices.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.devices.items.map((device, index) => (
              <motion.div
                key={device.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 group">
                  <CardHeader className="p-0">
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <img 
                        src={device.image} 
                        alt={device.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-lg font-bold text-slate-800 mb-3">
                      {device.title}
                    </CardTitle>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {device.description}
                    </p>
                    <ul className="space-y-2">
                      {device.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {t.features.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t.features.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.items.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {t.advantages.title}
            </h2>
            <p className="text-xl text-slate-600">
              {t.advantages.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.advantages.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  {item.number}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {t.integrations.title}
              </h2>
              <p className="text-xl text-slate-600">
                {t.integrations.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {t.integrations.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-slate-50 rounded-lg"
                >
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.cta.title}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t.cta.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 px-8 py-3"
              >
                <Link href="/iletisim">
                  {t.cta.button}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-white/90 font-medium">
                {t.cta.contact}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}