import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/seo/SEO";
import SmartImg from "@/components/SmartImg";

const turnstileTypes = [
  {
    id: 1,
    name: "Bel Tipi Turnike",
    description: "Orta boy güvenlik için ideal turnike sistemi",
    image: "/bel-tipi-turnike.jpg",
    features: [
      "Paslanmaz çelik gövde",
      "Bi-directional geçiş kontrol",
      "LED yönlendirme ışıkları",
      "Acil durum açılma özelliği",
      "RFID kart okuyucu entegrasyonu"
    ]
  },
  {
    id: 2,
    name: "Boy Tipi Turnike",
    description: "Yüksek güvenlik gerektiren alanlar için",
    image: "/boy-tipi-turnike.jpg",
    features: [
      "Tam boy güvenlik bariyeri",
      "Anti-passback özelliği",
      "Çoklu kimlik doğrulama",
      "Vandalizme karşı dayanıklı",
      "Otomatik alarm sistemi"
    ]
  },
  {
    id: 3,
    name: "Tripod Turnike",
    description: "Kompakt ve ekonomik turnike çözümü",
    image: "/tripod-turnike.jpg",
    features: [
      "Üç kollu döner mekanizma",
      "Compact tasarım",
      "Hızlı geçiş imkanı",
      "Düşük bakım maliyeti",
      "Çift yönlü kontrol"
    ]
  }
];

const faqs = [
  {
    question: "Turnike sistemleri hangi alanlarda kullanılır?",
    answer: "Turnike sistemleri ofis binaları, fabrikalar, okul girişleri, metro istasyonları, stadyumlar ve güvenlik gerektiren tüm giriş noktalarında kullanılır."
  },
  {
    question: "Turnike sisteminin PDKS entegrasyonu nasıl çalışır?",
    answer: "Turnike sistemi PDKS yazılımı ile entegre çalışarak personel giriş-çıkış saatlerini otomatik kayıt altına alır ve mesai hesaplamalarında kullanır."
  },
  {
    question: "Acil durumlarda turnike nasıl açılır?",
    answer: "Tüm turnike sistemlerimiz yangın alarm sistemi ile entegre çalışır ve acil durumlarda otomatik olarak açılır. Manuel açma seçeneği de mevcuttur."
  },
  {
    question: "Turnike bakım periyodu ne kadardır?",
    answer: "Turnike sistemleri 6 ayda bir preventif bakım gerektirir. Yoğun kullanım alanlarında 3 ayda bir bakım önerilir."
  },
  {
    question: "Hangi kimlik doğrulama yöntemleri kullanılabilir?",
    answer: "RFID kart, parmak izi, yüz tanıma, QR kod ve şifre ile kimlik doğrulama yapılabilir. Çoklu doğrulama da mümkündür."
  }
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Turnike Sistemleri - Bel Tipi, Boy Tipi, Tripod",
  "description": "Profesyonel turnike sistemleri. Bel tipi, boy tipi ve tripod turnike çeşitleri. PDKS entegrasyonu, RFID kart okuyucu, güvenlik özellikleri.",
  "brand": "Mika Teknoloji",
  "category": "Security Equipment",
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

export default function TurnstileSystemsPage() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Turnike Sistemleri - Bel Tipi, Boy Tipi, Tripod | Mika Teknoloji"
        description="Profesyonel turnike sistemleri. Bel tipi, boy tipi ve tripod turnike çeşitleri. PDKS entegrasyonu, RFID kart okuyucu, acil durum özellikleri."
        canonical="https://mikateknoloji.com/turnike-sistemleri"
        jsonLd={[productJsonLd, faqJsonLd]}
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Turnike Sistemleri
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Bel tipi, boy tipi ve tripod turnike çeşitleri ile güvenli geçiş kontrol çözümleri. 
              PDKS entegrasyonu, RFID kart okuyucu ve acil durum özellikleri.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-pink-600 px-4 py-2 rounded-full">
                <span className="font-semibold">3 Turnike Tipi</span>
              </div>
              <div className="bg-pink-600 px-4 py-2 rounded-full">
                <span className="font-semibold">PDKS Entegrasyonu</span>
              </div>
              <div className="bg-pink-600 px-4 py-2 rounded-full">
                <span className="font-semibold">Acil Durum Açılma</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Turnike Types Section */}
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
              Turnike Sistem Çeşitlerimiz
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              İhtiyacınıza uygun turnike tipini seçin. Her model PDKS entegrasyonu ve güvenlik özellikleri ile donatılmıştır.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {turnstileTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <SmartImg 
                      src={type.image} 
                      alt={type.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <CardTitle className="text-xl text-slate-800">{type.name}</CardTitle>
                    <p className="text-slate-600">{type.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{feature}</span>
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
              Turnike Sistem Avantajları
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "PDKS yazılımı entegrasyonu",
              "Çoklu kimlik doğrulama desteği",
              "Acil durum otomatik açılma",
              "Anti-passback güvenlik",
              "LED yönlendirme sistemi",
              "Vandalizme dayanıklı tasarım",
              "Düşük enerji tüketimi",
              "Kolay kurulum ve bakım",
              "7/24 teknik destek"
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Shield className="h-5 w-5 text-pink-600 flex-shrink-0" />
                <span className="text-slate-700">{feature}</span>
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-lg text-slate-600">
              Turnike sistemleri hakkında merak edilenler
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6"
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
      <section className="py-20 bg-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Turnike Sistemi İçin Teklif Alın
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              İhtiyacınıza uygun turnike çözümü için ücretsiz keşif ve teklif hizmeti
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-pink-600 hover:bg-pink-50"
                >
                  Ücretsiz Teklif Al
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/kartli-gecis-sistemi">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-pink-600"
                >
                  Kartlı Geçiş Sistemi
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}