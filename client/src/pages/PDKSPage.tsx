import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { CheckCircle, Shield, CreditCard, Eye, Fingerprint, Smartphone, Star } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { useEffect } from "react";
import { trackPDKSView, trackProductView } from "@/lib/analytics";
import SEO, { ASIL_ADRES, kanonikAdres } from "@/seo/SEO";
import { IlgiliSayfalar, VideoBolumu, DEMO_TELEFON, DEMO_TELEFON_GORUNEN, DEMO_WHATSAPP, kirintiJsonLd, sssJsonLd } from "@/components/PdksIcerik";
import type { SssMaddesi } from "@/components/PdksIcerik";
import CtaDugmeleri from "@/components/CtaDugmeleri";
import { boyut } from "@/lib/gorselBoyut";

// Doğrulanmış SSS: EPDKS menüleri ve hesap kuralları, Esoft Pdks mobil uygulama ekranları.
const PDKS_SSS: SssMaddesi[] = [
  {
    soru: "PDKS nedir?",
    cevap: "PDKS (Personel Devam Kontrol Sistemi), personelin iş yerine giriş-çıkış saatlerini kart, parmak izi, yüz tanıma ya da QR kod ile kaydeder. Bu kayıtlardan vardiya, fazla mesai, izin ve aylık puantaj hesaplanır.",
  },
  {
    soru: "PDKS programında puantaj nasıl hesaplanır?",
    cevap: "Hesap üç adımda ilerler: cihazlardaki kayıtlar aktarılır, hareketler düzenlenir, aylık puantaj hesaplanır. Fazla mesai, çalışma grubunda seçtiğiniz kurala göre ayrılır; haftalık 45 saat kuralı açıksa 45 saati aşan süre fazla mesai sayılır. Kontrol edilen ay kilitlenir.",
  },
  {
    soru: "Vardiya planlaması yapılabilir mi?",
    cevap: "Evet. Haftalık vardiya planı hazırlanır, onaycıya gönderilir; onaycı onaylar, reddeder ya da düzeltme ister. Onaylanan plan istenirse kilitlenir. Personel vardiyasını mobil uygulamada görür.",
  },
  {
    soru: "Personel cep telefonuyla giriş-çıkış yapabilir mi?",
    cevap: "Evet. Personel iş yerindeki QR kodu Esoft Pdks mobil uygulamasıyla okutur ya da uygulamadaki QR kodu iş yerindeki okuyucuya gösterir. Mobil kayda konum bilgisi eklenir; KVKK gereği konum raporlarda gizlenebilir.",
  },
  {
    soru: "Personel izin ve fazla mesai talebini nereden gönderir?",
    cevap: "Personel izin ve fazla mesai taleplerini mobil uygulamadan gönderir. Talepler yönetim panelindeki İzin Talepleri ve Mesai Talepleri ekranlarında onaylanır.",
  },
  {
    soru: "Raporlar Excel'e alınabilir mi?",
    cevap: "Evet. Puantaj ve raporlar Excel (.xlsx) dosyası olarak indirilir.",
  },
];

// Real device images
const facialRecognitionDevice = "/images/urun/proper-yuz-tanima.jpg";
const qrPdksDevice1 = "/qr-hand-mockup.png";
const qrPdksDevice2 = "/rfid-turnstile-system.webp";
const fingerprintDevice = "/fingerprint-device.png";

export default function PDKSPage() {
  const { selectedLanguage } = useLanguage();

  // Track PDKS page view
  useEffect(() => {
    trackPDKSView('pdks_sistemleri_ana_sayfa');
    trackProductView('PDKS Personel Devam Kontrol Sistemi', 'pdks_sistemleri');
  }, []);

  // SEO başlık/açıklama: <SEO> (Helmet) ile yazılır; ön-render ham HTML'e de girer.
    const title = selectedLanguage === 'tr'
      ? 'PDKS Programı – Personel Devam Kontrol | Mika'
      : 'Professional PDKS Systems | Mika Technology - Personnel Attendance Control Solutions';

    const description = selectedLanguage === 'tr'
      ? 'Mika Teknoloji PDKS: yüz tanıma, parmak izi, QR kod ve RFID kartlı personel devam kontrol sistemleri; web tabanlı puantaj ve vardiya yönetimi.'
      : 'Mika Technology PDKS: facial recognition, fingerprint, QR code and RFID card personnel attendance control systems; web-based timesheet and shift management.';

  // Keywords
  useEffect(() => {
    const keywords = selectedLanguage === 'tr'
      ? 'PDKS, personel devam kontrol sistemi, yüz tanıma PDKS, parmak izi sistemi, QR kod personel takip, RFID kart sistemi, mesai hesaplama, vardiya yönetimi, bordro entegrasyonu'
      : 'PDKS, personnel attendance control system, facial recognition PDKS, fingerprint system, QR code personnel tracking, RFID card system, working time calculation, shift management, payroll integration';
    
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
          "description": "PDKS, kartlı geçiş ve turnike sistemleri",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "TR"
          }
        },
        {
          "@type": "SoftwareApplication",
          "name": "Mika PDKS Sistemi",
          "description": "Personel devam kontrol sistemi - Yüz tanıma, parmak izi, QR kod, RFID teknolojileri",
          "operatingSystem": "Web-based, iOS, Android",
          "applicationCategory": "BusinessApplication"
        }
        // SSS (FAQPage) şeması ön-render'a girsin diye <SEO jsonLd> ile veriliyor (PDKS_SSS).
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [selectedLanguage]);

  const pdksTranslations = {
    tr: {
      title: "PDKS Programı ve Devam Kontrol Sistemleri",
      subtitle: "Modern İşgücü Yönetimi için Kapsamlı Çözümler",
      brandMessage: "Mika Teknoloji PDKS",
      description: "Mika Teknoloji; fabrika, hastane, okul ve KOBİ'ler için biyometrik personel giriş çıkış takip sistemi, mesai hesaplama, vardiya yönetimi ve bordroya hazır puantaj sunan PDKS yazılımı geliştirir. Bulut tabanlı ve mobil destekli personel devam kontrol sistemi.",
      seoDescription: "PDKS sistemleri ve personel devam kontrol çözümleri. Yüz tanıma, parmak izi, QR kod ve RFID kart teknolojileri ile işgücü yönetimi.",
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
            "Yüksek doğruluk oranı",
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
          title: "RFID Kartlı Ve QR Turnike PDKS Sistemi",
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
            title: "Teknik Destek",
            description: "Kurulum, eğitim ve bakım hizmetleri"
          },
          {
            title: "Özelleştirilebilir Çözümler",
            description: "İşletmenizin ihtiyaçlarına özel çözüm geliştirme"
          },
          {
            title: "Güvenli Altyapı",
            description: "Veri koruması ve yetkiye göre erişim"
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
          "Entegrasyon desteği için bize ulaşın",
          "Excel (.xlsx) puantaj çıktısı"
        ]
      },
      cta: {
        title: "PDKS Sisteminizi Hemen Kurun",
        subtitle: "Kurulumu iş yerinizin düzenine göre birlikte planlayalım.",
        buttons: {
          demo: "Demo ve Keşif Talep Edin",
          contact: "Hemen Ara"
        }
      }
    },
    en: {
      title: "Professional PDKS Systems",
      subtitle: "Comprehensive Solutions for Modern Workforce Management",
      brandMessage: "Mika Technology PDKS",
      description: "As Mika Technology, we offer the latest technology products to meet your business personnel tracking needs. With our PDKS systems, you can perform employee entry-exit control, shift tracking and shift management on a digital platform.",
      seoDescription: "PDKS systems and personnel attendance control solutions. Workforce management with facial recognition, fingerprint, QR code and RFID card technologies.",
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
            "High accuracy rate",
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
            title: "Technical Support",
            description: "Installation, training and maintenance services"
          },
          {
            title: "Customizable Solutions",
            description: "Custom solution development for your business needs"
          },
          {
            title: "Secure Infrastructure",
            description: "Data protection and role-based access"
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
          "Contact us for integration support",
          "Excel (.xlsx) timesheet export"
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
    <div className="min-h-screen bg-white">
      <SEO
        title={title}
        description={description}
        canonical={kanonikAdres(ASIL_ADRES.pdks)}
        jsonLd={[
          sssJsonLd(PDKS_SSS),
          kirintiJsonLd([
            { ad: "Ana Sayfa", yol: "/" },
            { ad: "PDKS Programı", yol: ASIL_ADRES.pdks },
          ]),
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              {pdks.title}
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-600 font-light mb-8 leading-relaxed">
              {pdks.subtitle}
            </h2>
            <p className="text-lg text-slate-700 mb-12 max-w-3xl mx-auto">
              {pdks.description}
            </p>
            
            <CtaDugmeleri tur="yazilim" sinif="justify-center" />
            
            {/* Trust Signals */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-8 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span>Web Tabanlı</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Mobil Uygulama</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Kurulum ve Eğitim</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is PDKS Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-50 rounded-xl p-8 border-l-4 border-primary">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4" aria-hidden="true">
                  <span className="text-white text-lg font-bold">?</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">{pdks.whatIsPdks.title}</h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                <strong>Personel Devam Kontrol Sistemi (PDKS)</strong>, çalışanların iş yerindeki giriş-çıkış saatlerini, mesai sürelerini ve vardiya bilgilerini otomatik olarak kaydeden dijital sistemlerdir. Modern PDKS çözümleri, sadece basit puantaj kayıtları tutmakla kalmaz, aynı zamanda <strong>bordro entegrasyonu, raporlama, analiz ve insan kaynakları yönetimi</strong> için kapsamlı veriler sunar.
              </p>
            </div>
            
            {/* Cross-linking to related services */}
            <div className="mt-8 p-6 bg-slate-50 rounded-lg">
              <p className="text-slate-600 text-center">
                <strong>İlgili Çözümlerimiz:</strong> 
                <Link href="/access-control" className="text-primary hover:underline ml-2">Access Control Sistemleri</Link> |
                <Link href="/urunler/turnike" className="text-primary hover:underline ml-2">Turnike Sistemleri</Link> |
                <Link href="/qr-bekci" className="text-primary hover:underline ml-2">Bekçi Kontrol</Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PDKS Systems Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={false}
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
            initial={false}
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
                    <div className="relative bg-white p-8 rounded-lg border border-slate-200">
                      <div className={`${system.id === 'qr' ? 'aspect-[3/4] max-w-xs' : system.id === 'rfid' ? 'aspect-[4/3] max-w-lg' : 'aspect-square max-w-md'} mx-auto overflow-hidden rounded-lg`}>
                        <img {...boyut(system.image)} loading="lazy" 
                          src={system.image} 
                          alt={system.data.title}
                          className={`w-full h-full ${system.id === 'qr' || system.id === 'rfid' ? 'object-contain' : 'object-cover'} transform group-hover:scale-105 transition-transform duration-300`}
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
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
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
                            <Star className="h-4 w-4 text-primary flex-shrink-0" />
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
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              {pdks.whyChoose.title}
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial={false}
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
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={false}
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
                  initial={false}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-slate-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <VideoBolumu
        baslik="PDKS Eğitim Videoları"
        videoIdleri={["pdks-genel-anlatim", "vardiya-planlama-pdks"]}
      />

      <IlgiliSayfalar mevcutYol={ASIL_ADRES.pdks} />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
              Sık Sorulan Sorular
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {PDKS_SSS.map((m) => (
                <div key={m.soru} className="bg-slate-50 rounded-xl p-6 border-l-4 border-primary">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">{m.soru}</h3>
                  <p className="text-slate-600">{m.cevap}</p>
                </div>
              ))}

              <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-primary">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  Hangi PDKS sistemi işletmem için en uygun?
                </h3>
                <p className="text-slate-600">
                  İşletmenizin büyüklüğü, güvenlik ihtiyaçları ve bütçesine göre yüz tanıma (hijyenik), parmak izi (güvenli), QR kod (maliyet etkin) veya RFID kart (praktik) sistemlerinden birini önerebiliriz.
                </p>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-primary">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  PDKS sistemi mevcut bordro yazılımımla entegre olur mu?
                </h3>
                <p className="text-slate-600">
                  Puantaj sonuçları Excel olarak alınır ve bordro programınıza aktarılabilir. Aktarım biçimini kullandığınız bordro programına göre birlikte belirleriz.
                </p>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-primary">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  Kurulum süreci ne kadar sürer?
                </h3>
                <p className="text-slate-600">
                  Kurulum süresi cihaz sayısına ve sistem büyüklüğüne göre değişir; kurulumda kullanım eğitimi verilir.
                </p>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-primary">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  KVKK uyumluluğu nasıl sağlanıyor?
                </h3>
                <p className="text-slate-600">
                  Mika PDKS, KVKK kapsamında aydınlatma, açık rıza ve erişim yetkilendirmesi süreçlerine uygun kullanılabilir. Kullanıcılar yalnız yetkili oldukları kayıtları görür; mobil kayıtlara eklenen konum bilgisi istenirse raporlarda gizlenir.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="demo" className="py-20 bg-slate-900 border-t-4 border-primary scroll-mt-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center text-white"
            initial={false}
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
            
            <CtaDugmeleri tur="yazilim" koyu sinif="justify-center" />
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-lg">
              <a href={DEMO_WHATSAPP} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-80">
                WhatsApp ile demo isteyin
              </a>
              <a href={`tel:${DEMO_TELEFON}`} className="underline underline-offset-4 hover:opacity-80">
                {DEMO_TELEFON_GORUNEN}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}