import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Car, ArrowRight, Camera } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/seo/SEO";
import UrunEkIcerik from "@/components/UrunEkIcerik";
import { EK, OTOPARK_TABLOSU } from "@/lib/urunEkIcerik";
import CtaDugmeleri from "@/components/CtaDugmeleri";

const parkingFeatures = [
  {
    id: 1,
    title: "Plaka Tanıma Sistemi",
    description: "Otomatik plaka okuma ve tanıma teknolojisi",
    icon: Camera,
    features: [
      "HD kamera teknolojisi",
      "Gece görüş özelliği",
      "Otomatik plaka tanıma",
      "Hızlı işlem süresi",
      "Yüksek doğruluk oranı"
    ]
  },
  {
    id: 2,
    title: "Bariyer Sistemi",
    description: "Otomatik açılır kapanır bariyer kontrolü",
    icon: Car,
    features: [
      "Hızlı açılma kapanma",
      "Güvenlik sensörleri",
      "Manuel kontrol imkanı",
      "LED uyarı sistemi",
      "Dayanıklı mekanizma"
    ]
  }
];

const benefits = [
  "Otomatik plaka tanıma",
  "Hızlı giriş-çıkış",
  "Otopark kapasitesi takibi",
  "Ücretlendirme sistemi",
  "Güvenlik kamerası entegrasyonu",
  "Abone kartı yönetimi",
  "Ziyaretçi yönetimi",
  "Raporlama ve analiz"
];

const faqs = [
  {
    question: "Otopark otomasyon sistemi nasıl çalışır?",
    answer: "Sistem plaka tanıma kamerası ile araçları tanır, veritabanından kontrol eder ve yetkili ise bariyeri otomatik açar. Tüm giriş-çıkışlar kayıt altına alınır."
  },
  {
    question: "Plaka tanıma doğruluk oranı nedir?",
    answer: "Plaka tanıma sistemlerimiz farklı hava koşullarında ve gece-gündüz çalışabilir."
  },
  {
    question: "Abone kartı sistemi nasıl çalışır?",
    answer: "Sakinlere RFID kartlar verilir. Kart okuyucu kartı tanıyınca bariyer otomatik açılır. Kayıp kart durumunda anında iptal edilebilir."
  },
  {
    question: "Ücretlendirme sistemi var mı?",
    answer: "Evet, saatlik, günlük veya abonelik bazında esnek ücretlendirme yapılabilir. Ödeme sistemi entegrasyonu mevcuttur."
  },
  {
    question: "Sistem kaç araç kapasitesini destekler?",
    answer: "Araç kaydı otopark büyüklüğüne göre yapılandırılır. Otopark kapasitesi takibi ile doluluk durumu anlık olarak izlenebilir."
  }
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product", 
  "name": "Otopark Otomasyon Sistemi",
  "description": "Plaka tanıma, bariyer kontrol ve ücretlendirme sistemi ile tam otomatik otopark yönetimi. RFID kart desteği ve güvenlik kamerası entegrasyonu.",
  "brand": "Mika Teknoloji",
  "category": "Parking Management System"
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function ParkingAutomationPage() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Otopark Otomasyon Sistemi – Plaka Tanıma, Bariyer | Mika"
        description="Plaka tanıma, bariyer kontrol ve ücretlendirme sistemi ile tam otomatik otopark yönetimi. RFID kart desteği ve güvenlik kamerası entegrasyonu."
        canonical="https://mikateknoloji.com/otopark-otomasyon"
        jsonLd={[productJsonLd, faqJsonLd]}
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-slate-900 border-b-4 border-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Otopark Otomasyon Sistemi
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Plaka tanıma teknolojisi ile tam otomatik otopark yönetimi. 
              Bariyer kontrolü, ücretlendirme sistemi ve güvenlik kamerası entegrasyonu.
            </p>
            <p className="text-base text-white/80 mb-8">Plaka Tanıma · Otomatik Bariyer · Ücretlendirme</p>
            <CtaDugmeleri tur="donanim" koyu sinif="justify-center" sayfa="Otopark Otomasyon Page" olayOnek="otopark_otomasyon" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Otopark Sistemi Özellikleri
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Modern teknoloji ile donatılmış otopark otomasyon çözümleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {parkingFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-slate-800">{feature.title}</CardTitle>
                    <p className="text-slate-600">{feature.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-slate-700">{item}</span>
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Otopark Otomasyon Avantajları
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm"
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Car className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-slate-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-lg text-slate-600">
              Otopark otomasyon sistemi hakkında merak edilenler
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bold text-lg text-slate-800 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <UrunEkIcerik kullanim={EK["/otopark-otomasyon"].kullanim} tablolar={[OTOPARK_TABLOSU]} aktifYol="/otopark-otomasyon" />

      <section className="py-20 bg-slate-900 border-t-4 border-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Otopark Otomasyon Sistemi İçin Teklif Alın
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Plaka tanıma ile otopark yönetimi için keşif ve teklif almak üzere bize ulaşın
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim">
                <Button 
                  size="lg" 
                  variant="default"
                >
                  Teklif Alın
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/urunler/turnike">
                <Button 
                  size="lg" 
                  variant="outlineLight"
                >
                  Turnike Sistemleri
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}