import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { CheckCircle, Shield, CreditCard, Eye, Fingerprint, Smartphone, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

// Device images - using placeholders for now
const facialRecognitionDevice = "https://images.unsplash.com/photo-1553672825-24ec37ac1af1?w=400&h=400&fit=crop&crop=center";
const qrPdksDevice1 = "https://images.unsplash.com/photo-1581092336223-69e7c1f11673?w=400&h=400&fit=crop&crop=center";
const qrPdksDevice2 = "https://images.unsplash.com/photo-1581092336223-69e7c1f11673?w=400&h=400&fit=crop&crop=center";
const fingerprintDevice = "https://images.unsplash.com/photo-1564519219525-4d3f0be51b1b?w=400&h=400&fit=crop&crop=center";

export default function PDKSPage() {
  const { selectedLanguage } = useLanguage();

  const pdksTranslations = {
    tr: {
      title: "Personel Devam Kontrol Sistemleri (PDKS)",
      subtitle: "Modern İşgücü Yönetimi için Kapsamlı Çözümler",
      description: "Mika Teknoloji olarak, işletmenizin personel takip ihtiyaçlarını karşılamak için en son teknoloji ürünlerini sunuyoruz. PDKS sistemlerimiz ile çalışan giriş-çıkış kontrolü, mesai takibi ve vardiya yönetimini dijital platformda gerçekleştirebilirsiniz.",
      seoDescription: "Türkiye'nin önde gelen PDKS sistemleri ve personel devam kontrol çözümleri. Yüz tanıma, parmak izi, QR kod ve RFID kart teknolojileri ile modern işgücü yönetimi.",
      whatIsPdks: {
        title: "PDKS Nedir?",
        content: "Personel Devam Kontrol Sistemi (PDKS), çalışanların iş yerindeki giriş-çıkış saatlerini, mesai sürelerini ve vardiya bilgilerini otomatik olarak kaydeden dijital sistemlerdir. Modern PDKS çözümleri, sadece basit puantaj kayıtları tutmakla kalmaz, aynı zamanda bordro entegrasyonu, raporlama, analiz ve insan kaynakları yönetimi için kapsamlı veriler sunar."
      },
      systems: {
        facial: {
          title: "Yüz Tanıma PDKS Sistemi",
          description: "Temassız ve hijyenik yüz tanıma teknolojisi ile güvenli personel takibi",
          features: [
            "Temassız giriş-çıkış kontrolü",
            "Yüksek doğruluk oranı (%99.9)",
            "Hızlı tanıma süresi (< 1 saniye)",
            "Maske takılı tanıma özelliği",
            "Çoklu yüz kayıt desteği",
            "Işık koşullarından bağımsız çalışma",
            "Anti-spoofing güvenlik teknolojisi",
            "Canlı yüz algılama sistemi"
          ],
          benefits: [
            "Hijyenik ve güvenli kullanım",
            "Hızlı ve doğru personel tanıma",
            "Proxy (vekil) giriş önleme",
            "Modern ve estetik görünüm",
            "Kolay kurulum ve entegrasyon"
          ]
        },
        qr: {
          title: "QR Tabanlı PDKS Sistemi",
          description: "Mobil uygulama destekli QR kod teknolojisi ile esnek personel takip çözümü",
          features: [
            "Dinamik QR kod oluşturma",
            "Mobil uygulama entegrasyonu",
            "GPS lokasyon doğrulama",
            "Offline çalışma kapasitesi",
            "Çoklu lokasyon desteği",
            "Anlık bildirim sistemi",
            "Güvenli şifreleme teknolojisi",
            "Bulut tabanlı veri senkronizasyonu"
          ],
          benefits: [
            "Maliyet etkin çözüm",
            "Hızlı kurulum ve devreye alma",
            "Uzaktan çalışma desteği",
            "Esnek kullanım senaryoları",
            "Yüksek güvenlik seviyesi"
          ]
        },
        fingerprint: {
          title: "Parmak İzi PDKS Sistemi",
          description: "Biyometrik parmak izi teknolojisi ile yüksek güvenlikli personel kontrol sistemi",
          features: [
            "Kapasitif parmak izi sensörü",
            "Yüksek çözünürlük tarama",
            "Hızlı doğrulama (< 1 saniye)",
            "Çok sayıda parmak izi kayıt desteği",
            "Kuru/yaş parmak tanıma",
            "360° parmak izi okuma",
            "Sahte parmak izi önleme",
            "Düşük hata oranı"
          ],
          benefits: [
            "Benzersiz biyometrik tanıma",
            "Yüksek güvenlik seviyesi",
            "Hızlı ve doğru işlem",
            "Dayanıklı ve güvenilir",
            "Maliyet etkin işletme"
          ]
        },
        rfid: {
          title: "RFID Kartlı PDKS Sistemi",
          description: "Temassız kart teknolojisi ile pratik ve hızlı personel giriş-çıkış kontrolü",
          features: [
            "125 kHz / 13.56 MHz frekans desteği",
            "Temassız kart okuma",
            "Hızlı işlem süresi",
            "Çoklu kart format desteği",
            "Yüksek okuma mesafesi",
            "Dayanıklı kart teknolojisi",
            "Şifreleme ve güvenlik",
            "Kolay yedek kart yönetimi"
          ],
          benefits: [
            "Kullanım kolaylığı",
            "Hızlı işlem süresi",
            "Düşük işletme maliyeti",
            "Yüksek güvenilirlik",
            "Geniş kullanım alanı"
          ]
        }
      },
      whyChoose: {
        title: "Neden Mika Teknoloji PDKS?",
        reasons: [
          {
            title: "30+ Yıllık Deneyim",
            description: "Sektörde 30 yılı aşkın deneyimimizle güvenilir çözümler sunuyoruz"
          },
          {
            title: "100.000+ Kullanıcı",
            description: "Türkiye genelinde 100.000'den fazla kullanıcının tercihi"
          },
          {
            title: "7/24 Teknik Destek",
            description: "Kesintisiz teknik destek ve bakım hizmetlerimiz"
          },
          {
            title: "Özelleştirilebilir Çözümler",
            description: "İşletmenizin ihtiyaçlarına özel çözüm geliştirme"
          },
          {
            title: "Güvenli Altyapı",
            description: "ISO sertifikalı güvenlik standartları ve veri koruması"
          },
          {
            title: "Kolay Entegrasyon",
            description: "Mevcut sistemlerinizle uyumlu entegrasyon desteği"
          }
        ]
      },
      features: {
        title: "PDKS Sistemi Özellikleri",
        list: [
          "Web tabanlı yönetim paneli",
          "Gerçek zamanlı raporlama",
          "Mobil uygulama desteği",
          "Bordro entegrasyonu",
          "Vardiya yönetimi",
          "İzin ve rapor takibi",
          "Esnek mesai hesaplama",
          "Çoklu lokasyon yönetimi",
          "API entegrasyon desteği",
          "Otomatik yedekleme sistemi"
        ]
      },
      cta: {
        title: "PDKS Sisteminizi Hemen Kurun",
        subtitle: "Ücretsiz danışmanlık ve demo için bizimle iletişime geçin",
        buttons: {
          demo: "Ücretsiz Demo İsteyin",
          contact: "Teknik Bilgi Alın"
        }
      }
    },
    en: {
      title: "Personnel Attendance Control Systems (PDKS)",
      subtitle: "Comprehensive Solutions for Modern Workforce Management",
      description: "As Mika Technology, we offer the latest technology products to meet your business personnel tracking needs. With our PDKS systems, you can perform employee entry-exit control, shift tracking and shift management on a digital platform.",
      seoDescription: "Turkey's leading PDKS systems and personnel attendance control solutions. Modern workforce management with facial recognition, fingerprint, QR code and RFID card technologies.",
      whatIsPdks: {
        title: "What is PDKS?",
        content: "Personnel Attendance Control System (PDKS) is a digital system that automatically records employees' entry-exit times, working hours and shift information at the workplace. Modern PDKS solutions not only keep simple time tracking records, but also provide comprehensive data for payroll integration, reporting, analysis and human resources management."
      },
      systems: {
        facial: {
          title: "Facial Recognition PDKS System",
          description: "Secure personnel tracking with contactless and hygienic facial recognition technology",
          features: [
            "Contactless entry-exit control",
            "High accuracy rate (99.9%)",
            "Fast recognition time (< 1 second)",
            "Mask recognition feature",
            "Multiple face record support",
            "Light condition independent operation",
            "Anti-spoofing security technology",
            "Live face detection system"
          ],
          benefits: [
            "Hygienic and safe use",
            "Fast and accurate personnel recognition",
            "Proxy entry prevention",
            "Modern and aesthetic appearance",
            "Easy installation and integration"
          ]
        },
        qr: {
          title: "QR-Based PDKS System",
          description: "Flexible personnel tracking solution with mobile application supported QR code technology",
          features: [
            "Dynamic QR code generation",
            "Mobile application integration",
            "GPS location verification",
            "Offline working capacity",
            "Multi-location support",
            "Instant notification system",
            "Secure encryption technology",
            "Cloud-based data synchronization"
          ],
          benefits: [
            "Cost-effective solution",
            "Fast installation and commissioning",
            "Remote work support",
            "Flexible usage scenarios",
            "High security level"
          ]
        },
        fingerprint: {
          title: "Fingerprint PDKS System",
          description: "High security personnel control system with biometric fingerprint technology",
          features: [
            "Capacitive fingerprint sensor",
            "High resolution scanning",
            "Fast verification (< 1 second)",
            "Multiple fingerprint record support",
            "Dry/wet finger recognition",
            "360° fingerprint reading",
            "Fake fingerprint prevention",
            "Low error rate"
          ],
          benefits: [
            "Unique biometric recognition",
            "High security level",
            "Fast and accurate processing",
            "Durable and reliable",
            "Cost-effective operation"
          ]
        },
        rfid: {
          title: "RFID Card PDKS System",
          description: "Practical and fast personnel entry-exit control with contactless card technology",
          features: [
            "125 kHz / 13.56 MHz frequency support",
            "Contactless card reading",
            "Fast processing time",
            "Multiple card format support",
            "High reading distance",
            "Durable card technology",
            "Encryption and security",
            "Easy backup card management"
          ],
          benefits: [
            "Ease of use",
            "Fast processing time",
            "Low operating cost",
            "High reliability",
            "Wide usage area"
          ]
        }
      },
      whyChoose: {
        title: "Why Choose Mika Technology PDKS?",
        reasons: [
          {
            title: "30+ Years Experience",
            description: "We provide reliable solutions with over 30 years of experience in the industry"
          },
          {
            title: "100,000+ Users",
            description: "The choice of more than 100,000 users throughout Turkey"
          },
          {
            title: "24/7 Technical Support",
            description: "Our uninterrupted technical support and maintenance services"
          },
          {
            title: "Customizable Solutions",
            description: "Custom solution development for your business needs"
          },
          {
            title: "Secure Infrastructure",
            description: "ISO certified security standards and data protection"
          },
          {
            title: "Easy Integration",
            description: "Integration support compatible with your existing systems"
          }
        ]
      },
      features: {
        title: "PDKS System Features",
        list: [
          "Web-based management panel",
          "Real-time reporting",
          "Mobile application support",
          "Payroll integration",
          "Shift management",
          "Leave and report tracking",
          "Flexible working time calculation",
          "Multi-location management",
          "API integration support",
          "Automatic backup system"
        ]
      },
      cta: {
        title: "Set Up Your PDKS System Now",
        subtitle: "Contact us for free consultation and demo",
        buttons: {
          demo: "Request Free Demo",
          contact: "Get Technical Information"
        }
      }
    }
  };

  const currentLang = (selectedLanguage as 'tr' | 'en') || 'tr';
  const pdks = pdksTranslations[currentLang];

  const systems = [
    {
      id: 'facial',
      icon: Eye,
      image: facialRecognitionDevice,
      data: pdks.systems.facial
    },
    {
      id: 'qr',
      icon: Smartphone,
      image: qrPdksDevice1,
      data: pdks.systems.qr
    },
    {
      id: 'fingerprint',
      icon: Fingerprint,
      image: fingerprintDevice,
      data: pdks.systems.fingerprint
    },
    {
      id: 'rfid',
      icon: CreditCard,
      image: qrPdksDevice2,
      data: pdks.systems.rfid
    }
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* SEO Head would go here in a real implementation */}
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              {pdks.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              {pdks.subtitle}
            </p>
            <p className="text-lg text-slate-700 mb-12 max-w-3xl mx-auto">
              {pdks.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
                data-testid="pdks-demo-button"
              >
                <Link href="/iletisim">{pdks.cta.buttons.demo}</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg"
                data-testid="pdks-contact-button"
              >
                <Link href="/iletisim">{pdks.cta.buttons.contact}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is PDKS Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                {pdks.whatIsPdks.title}
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {pdks.whatIsPdks.content}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PDKS Systems Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              PDKS Sistemleri
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              En son teknoloji ile donatılmış PDKS çözümlerimizi keşfedin
            </p>
          </motion.div>

          <motion.div 
            className="grid gap-12 lg:gap-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {systems.map((system, index) => (
              <motion.div 
                key={system.id} 
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                variants={fadeInUp}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300" />
                    <div className="relative bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-lg">
                        <img 
                          src={system.image} 
                          alt={system.data.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                        <system.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                        {system.data.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {system.data.description}
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-slate-800">Özellikler:</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {system.data.features.slice(0, 6).map((feature: string, idx: number) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-slate-800">Avantajlar:</h4>
                      <div className="space-y-2">
                        {system.data.benefits.map((benefit: string, idx: number) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Star className="h-4 w-4 text-amber-500 flex-shrink-0" />
                            <span className="text-sm text-slate-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              {pdks.whyChoose.title}
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {pdks.whyChoose.reasons.map((reason: any, index: number) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800">
                      {reason.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                {pdks.features.title}
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {pdks.features.list.map((feature: string, index: number) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {pdks.cta.title}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {pdks.cta.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg"
                data-testid="pdks-cta-demo"
              >
                <Link href="/iletisim" className="flex items-center">
                  {pdks.cta.buttons.demo}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
                data-testid="pdks-cta-contact"
              >
                <Link href="/iletisim">{pdks.cta.buttons.contact}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}