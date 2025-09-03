import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, CreditCard, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/seo/SEO";
import SmartImg from "@/components/SmartImg";

const cardTypes = [
  {
    id: 1,
    name: "RFID Proximity Kart",
    description: "125kHz frekansında çalışan uzaktan okuma kartları",
    image: "/rfid-proximity-kart.jpg",
    features: [
      "125kHz LF frekans",
      "10cm okuma mesafesi",
      "Su geçirmez",
      "Darbe dayanımı",
      "Uzun ömürlü"
    ]
  },
  {
    id: 2,
    name: "MIFARE Akıllı Kart",
    description: "13.56MHz frekansında güvenli veri saklama",
    image: "/mifare-smart-kart.jpg",
    features: [
      "13.56MHz HF frekans",
      "8KB veri kapasitesi",
      "Şifreli veri iletimi",
      "Çoklu uygulama desteği",
      "ISO 14443 standardı"
    ]
  },
  {
    id: 3,
    name: "UHF RFID Kart",
    description: "Uzun menzilli okuma için UHF teknolojisi",
    image: "/uhf-rfid-kart.jpg",
    features: [
      "860-960MHz UHF frekans",
      "1-5m okuma mesafesi",
      "Hızlı okuma",
      "Çoklu kart okuma",
      "Anti-collision özelliği"
    ]
  }
];

const benefits = [
  "Temassız güvenli geçiş",
  "Hızlı kimlik doğrulama",
  "PDKS sistemi entegrasyonu",
  "Çoklu alan yetkilendirme",
  "Kayıp kart engelleme",
  "Ziyaretçi kartı yönetimi",
  "Raporlama ve analiz",
  "7/24 erişim kontrol"
];

const faqs = [
  {
    question: "RFID kartlar nasıl çalışır?",
    answer: "RFID kartlar radyo frekansı ile çalışır. Kart okuyucuya yaklaştırıldığında, içindeki çip aktive olur ve kimlik bilgilerini okuyucuya iletir."
  },
  {
    question: "Kartlı geçiş sistemi PDKS ile nasıl entegre olur?",
    answer: "Kart okuyucudan gelen veriler doğrudan PDKS yazılımına aktarılır ve personel giriş-çıkış saatleri otomatik kaydedilir."
  },
  {
    question: "Kayıp kart durumunda ne yapılır?",
    answer: "Kayıp kartlar anında sistem üzerinden bloke edilir ve yeni kart tanımlanana kadar eski kart geçersiz hale gelir."
  },
  {
    question: "Kartların okuma mesafesi ne kadardır?",
    answer: "Proximity kartlar 10cm, MIFARE kartlar 10cm, UHF kartlar ise 1-5 metre mesafeden okunabilir."
  },
  {
    question: "Kartlar su geçirmez mi?",
    answer: "Evet, tüm RFID kartlarımız su geçirmez ve darbe dayanımlı malzemeden üretilmiştir."
  }
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Kartlı Geçiş Sistemi - RFID Kart Okuyucu",
  "description": "RFID kart teknolojisi ile kartlı geçiş sistemi. Proximity, MIFARE ve UHF kart desteği. PDKS entegrasyonu ve güvenli erişim kontrolü.",
  "brand": "Mika Teknoloji",
  "category": "Access Control System",
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

export default function CardAccessSystemPage() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Kartlı Geçiş Sistemi - RFID Kart Okuyucu | Mika Teknoloji"
        description="RFID kart teknolojisi ile kartlı geçiş sistemi. Proximity, MIFARE ve UHF kart desteği. PDKS entegrasyonu ve güvenli erişim kontrolü."
        canonical="https://mikateknoloji.com/kartli-gecis-sistemi"
        jsonLd={[productJsonLd, faqJsonLd]}
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kartlı Geçiş Sistemi
            </h1>
            <p className="text-xl text-blue-200 mb-8">
              RFID kart teknolojisi ile güvenli ve hızlı geçiş kontrol sistemi. 
              Proximity, MIFARE ve UHF kart desteği ile PDKS entegrasyonu.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-pink-600 px-4 py-2 rounded-full">
                <span className="font-semibold">3 Kart Tipi</span>
              </div>
              <div className="bg-pink-600 px-4 py-2 rounded-full">
                <span className="font-semibold">Temassız Okuma</span>
              </div>
              <div className="bg-pink-600 px-4 py-2 rounded-full">
                <span className="font-semibold">PDKS Entegrasyonu</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Card Types Section */}
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
              RFID Kart Çeşitlerimiz
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              İhtiyacınıza uygun RFID kart teknolojisini seçin. Her kart türü farklı okuma mesafesi ve özellikler sunar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {cardTypes.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <SmartImg 
                      src={card.image} 
                      alt={card.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <CardTitle className="text-xl text-slate-800">{card.name}</CardTitle>
                    <p className="text-slate-600">{card.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {card.features.map((feature, featureIndex) => (
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

      {/* Benefits Section */}
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
              Kartlı Geçiş Sistemi Avantajları
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CreditCard className="h-5 w-5 text-blue-600 flex-shrink-0" />
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-lg text-slate-600">
              Kartlı geçiş sistemleri hakkında merak edilenler
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
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Kartlı Geçiş Sistemi İçin Teklif Alın
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              RFID kart teknolojisi ile güvenli geçiş kontrolü için ücretsiz keşif ve teklif hizmeti
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  Ücretsiz Teklif Al
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/qr-gecis">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  QR Kod Geçiş Sistemi
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}