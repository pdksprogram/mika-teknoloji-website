import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, QrCode, ArrowRight, Smartphone } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/seo/SEO";

const qrFeatures = [
  {
    id: 1,
    title: "Temassız QR Kod Okuma",
    description: "Kamera tabanlı QR kod okuyucu teknolojisi",
    icon: QrCode,
    features: [
      "Yüksek hızlı QR kod okuma",
      "Farklı boyutlarda kod desteği",
      "Düşük ışık performansı",
      "Anti-glare özelliği",
      "Otomatik odaklama"
    ]
  },
  {
    id: 2,
    title: "Mobil Uygulama Entegrasyonu",
    description: "Akıllı telefon uygulaması ile QR kod üretimi",
    icon: Smartphone,
    features: [
      "iOS ve Android destek",
      "Dinamik QR kod üretimi",
      "Zaman sınırlı kodlar",
      "Offline çalışma modu",
      "Push notification"
    ]
  }
];

const benefits = [
  "Temassız hijyenik geçiş",
  "Akıllı telefon entegrasyonu", 
  "Dinamik güvenlik kodları",
  "Ziyaretçi yönetimi",
  "Geçici erişim yetkisi",
  "Real-time bildirimler",
  "PDKS sistemi entegrasyonu",
  "Maliyet etkin çözüm"
];

const useCases = [
  {
    title: "Ziyaretçi Yönetimi",
    description: "Misafirlere geçici QR kod ile güvenli erişim"
  },
  {
    title: "Etkinlik Geçiş Kontrolü",
    description: "Konferans, seminer ve etkinliklerde hızlı giriş"
  },
  {
    title: "Geçici Personel",
    description: "Stajyer ve taşeron personel için sınırlı erişim"
  },
  {
    title: "COVID-19 Uyumlu",
    description: "Temassız geçiş ile hijyen korunması"
  }
];

const faqs = [
  {
    question: "QR kod geçiş sistemi nasıl çalışır?",
    answer: "Kullanıcılar mobil uygulamadan kişisel QR kodlarını üretir. QR kod okuyucu bu kodları tarayarak kimlik doğrulaması yapar ve geçişe izin verir."
  },
  {
    question: "QR kodlar ne kadar süre geçerlidir?",
    answer: "QR kodların geçerlilik süresi ihtiyaca göre ayarlanabilir. 1 dakikadan 24 saate kadar esnek süre tanımlaması yapılabilir."
  },
  {
    question: "İnternet bağlantısı olmadan çalışır mı?",
    answer: "Evet, sistem offline modda çalışabilir. QR kodlar önceden indirilir ve internet olmadan da doğrulanabilir."
  },
  {
    question: "Mobil uygulama hangi cihazlarda çalışır?",
    answer: "iOS 12.0+ ve Android 8.0+ sürümlerini destekleyen tüm akıllı telefon ve tabletlerde çalışır."
  },
  {
    question: "QR kod kopyalanabilir mi?",
    answer: "QR kodlar dinamik şifreleme ile korunur ve belirli süre aralıklarında yenilenir, bu nedenle kopyalanması imkansızdır."
  }
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "QR Kod Geçiş Sistemi",
  "description": "QR kod teknolojisi ile temassız geçiş kontrol sistemi. Mobil uygulama entegrasyonu, dinamik kodlar ve PDKS sistemi uyumluluğu.",
  "applicationCategory": "SecurityApplication",
  "operatingSystem": "iOS, Android, Web Browser",
  "offers": {
    "@type": "Offer",
    "availability": "InStock",
    "priceCurrency": "TRY"
  }
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

export default function QRAccessPage() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="QR Kod Geçiş Sistemi - Temassız Erişim Kontrolü | Mika Teknoloji"
        description="QR kod teknolojisi ile temassız geçiş kontrol sistemi. Mobil uygulama entegrasyonu, dinamik kodlar ve PDKS sistemi uyumluluğu."
        canonical="https://mikateknoloji.com/qr-gecis"
        jsonLd={[productJsonLd, faqJsonLd]}
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              QR Kod Geçiş Sistemi
            </h1>
            <p className="text-xl text-purple-200 mb-8">
              QR kod teknolojisi ile temassız, hijyenik ve güvenli geçiş kontrol sistemi. 
              Mobil uygulama entegrasyonu ve dinamik güvenlik kodları.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-pink-600 px-4 py-2 rounded-full">
                <span className="font-semibold">Temassız Geçiş</span>
              </div>
              <div className="bg-pink-600 px-4 py-2 rounded-full">
                <span className="font-semibold">Mobil Uygulama</span>
              </div>
              <div className="bg-pink-600 px-4 py-2 rounded-full">
                <span className="font-semibold">Dinamik Kodlar</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              QR Kod Sistemi Özellikleri
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Modern QR kod teknolojisi ile hızlı, güvenli ve hijyenik geçiş kontrol çözümleri.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {qrFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl text-slate-800">{feature.title}</CardTitle>
                    <p className="text-slate-600">{feature.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
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

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Kullanım Alanları
            </h2>
            <p className="text-lg text-slate-600">
              QR kod geçiş sisteminin ideal kullanım senaryoları
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bold text-lg text-slate-800 mb-3">{useCase.title}</h3>
                <p className="text-slate-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              QR Kod Sistemi Avantajları
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <QrCode className="h-5 w-5 text-purple-600 flex-shrink-0" />
                <span className="text-slate-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-lg text-slate-600">
              QR kod geçiş sistemi hakkında merak edilenler
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
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
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              QR Kod Geçiş Sistemi İçin Demo Alın
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Temassız QR kod teknolojisi ile güvenli geçiş kontrolü için ücretsiz demo ve teklif hizmeti
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-purple-600 hover:bg-purple-50"
                >
                  Ücretsiz Demo Al
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/urunler/parmak-izi-tanima">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600"
                >
                  Parmak İzi Sistemi
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}