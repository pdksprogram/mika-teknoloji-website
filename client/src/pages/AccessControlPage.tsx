import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, ArrowRight, Key, Building } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/seo/SEO";
import SmartImg from "@/components/SmartImg";

const accessPanels = [
  {
    id: 1,
    name: "Access Panel 16'lı",
    description: "Bir binada 16 kapı bağlayabileceğiniz profesyonel access control paneli",
    image: "/access-panel-16.jpg",
    capacity: "16 Kapı",
    readers: "16 Proximity/Mifare Okuyucu",
    features: [
      "16 kapı kontrolü tek panelden",
      "Proximity ve Mifare kart desteği", 
      "TCP/IP ağ bağlantısı",
      "Gerçek zamanlı izleme",
      "PDKS yazılım entegrasyonu",
      "Uzaktan yönetim imkanı",
      "2 yıl garanti"
    ],
    specifications: {
      power: "12V DC / 3A",
      communication: "TCP/IP, RS485",
      readers: "Wiegand 26/34 bit",
      memory: "100.000 kart, 1.000.000 log",
      temperature: "-20°C / +70°C"
    }
  },
  {
    id: 2,
    name: "Access Panel 2'li",
    description: "2 okuyucu bağlayabileceğiniz kompakt access control çözümü",
    image: "/access-panel-2.jpg", 
    capacity: "2 Kapı",
    readers: "2 Proximity/Mifare Okuyucu",
    features: [
      "2 kapı kontrolü kompakt tasarım",
      "Proximity ve Mifare kart desteği",
      "TCP/IP ağ bağlantısı", 
      "Lokal ve online çalışma",
      "PDKS yazılım entegrasyonu",
      "Kolay kurulum",
      "2 yıl garanti"
    ],
    specifications: {
      power: "12V DC / 1A",
      communication: "TCP/IP, RS485",
      readers: "Wiegand 26/34 bit",
      memory: "50.000 kart, 500.000 log",
      temperature: "-10°C / +60°C"
    }
  }
];

const benefits = [
  "Giriş kapılarında hızlı ve kolay geçiş imkânı",
  "Pratik ve kontrollü şekilde yetki kontrolü",
  "Yetki genişletme ve kısıtlama tanımlama",
  "Personel giriş-çıkış takibi",
  "Mobil cihazlara uzaktan kontrol",
  "Sağlık ve hijyen standartları",
  "Güvenlik ve takip ön planda",
  "PDKS entegrasyonu"
];

const components = [
  {
    name: "Sisteme Entegre Kart Okuyucular",
    description: "Proximity ve Mifare teknolojili kart okuyucular"
  },
  {
    name: "Elektrikli Kilit Karşılıkları",
    description: "Manyetik ve elektromanyetik kilit sistemleri"
  },
  {
    name: "Biyometrik Okuyucu Desteği", 
    description: "Parmak izi ve yüz tanıma entegrasyonu"
  },
  {
    name: "İzleme ve Kontrol Yazılımları",
    description: "PDKS ve GKS yazılım entegrasyonu"
  },
  {
    name: "Turnike ve Bariyer Sistemleri",
    description: "Çeşitli boyutlarda turnike entegrasyonu"
  }
];

const usageAreas = [
  "Plaza, İş Yeri ve Ofis Binaları",
  "AVM ve Alışveriş Merkezleri", 
  "Hastane ve Sağlık Merkezleri",
  "Üniversite ve Okullar",
  "Üretim ve Endüstriyel Tesisler",
  "Otel ve Tatil Köyleri",
  "Banka ve Finans Kuruluşları",
  "Lojistik ve Depolama Merkezleri"
];

const faqs = [
  {
    question: "Access Panel ile kaç kapı kontrol edilebilir?",
    answer: "Access Panel 16'lı ile 16 kapıya kadar, Access Panel 2'li ile 2 kapıya kadar kontrol yapabilirsiniz. Proximity ve Mifare okuyucular desteklenir."
  },
  {
    question: "Hangi kart teknolojileri desteklenir?",
    answer: "Proximity (125KHz) ve Mifare (13.56MHz) kart teknolojileri desteklenir. Wiegand 26/34 bit protokolleri ile çalışır."
  },
  {
    question: "PDKS yazılımı ile entegrasyon yapılabilir mi?",
    answer: "Evet, tüm access panellerimiz PDKS, GKS ve ERP yazılımları ile entegre çalışabilir. TCP/IP üzerinden gerçek zamanlı veri aktarımı yapılır."
  },
  {
    question: "Uzaktan yönetim imkanı var mı?",
    answer: "Evet, internet üzerinden uzaktan erişim ile yetki tanımlamaları, log görüntüleme ve sistem ayarları yapılabilir."
  },
  {
    question: "Kurulum ne kadar sürer?",
    answer: "Access Panel 2'li için 1-2 saat, Access Panel 16'lı için 4-6 saat sürmektedir. Profesyonel ekibimiz kurulum ve devreye alma işlemlerini gerçekleştirir."
  }
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Geçiş Kontrol Panelleri",
  "description": "Access Panel 16'lı ve 2'li ile proximity ve mifare kart okuyuculu profesyonel geçiş kontrol sistemleri. PDKS entegrasyonu ve uzaktan yönetim imkanı.",
  "brand": "Mika Teknoloji",
  "category": "Access Control Systems",
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

export default function AccessControlPage() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Geçiş Kontrol Panelleri - Access Panel 16'lı ve 2'li | Mika Teknoloji"
        description="Access Panel 16'lı ve 2'li ile proximity ve mifare kart okuyuculu profesyonel geçiş kontrol sistemleri. PDKS entegrasyonu ve uzaktan yönetim imkanı."
        canonical="https://mikateknoloji.com/gecis-kontrol"
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
              Geçiş Kontrol Panelleri
            </h1>
            <p className="text-xl text-blue-200 mb-8">
              Access Panel 16'lı ve 2'li ile profesyonel geçiş kontrol sistemleri.
              Proximity ve Mifare kart okuyuculu güvenli erişim çözümleri.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-pink-600 px-4 py-2 rounded-full">
                <span className="font-semibold">16 Kapı Kontrolü</span>
              </div>
              <div className="bg-pink-600 px-4 py-2 rounded-full">
                <span className="font-semibold">Proximity/Mifare</span>
              </div>
              <div className="bg-pink-600 px-4 py-2 rounded-full">
                <span className="font-semibold">PDKS Entegrasyonu</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Access Panel Products */}
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
              Access Control Panel Modelleri
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              İhtiyacınıza uygun kapı sayısında profesyonel access control çözümleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {accessPanels.map((panel, index) => (
              <motion.div
                key={panel.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="text-center mb-4">
                      <SmartImg 
                        src={panel.image}
                        alt={panel.name}
                        width={300}
                        height={200}
                        className="mx-auto rounded-lg"
                      />
                    </div>
                    <CardTitle className="text-2xl text-center text-slate-800">
                      {panel.name}
                    </CardTitle>
                    <p className="text-slate-600 text-center">{panel.description}</p>
                    
                    <div className="flex justify-center gap-4 mt-4">
                      <div className="bg-blue-50 px-3 py-1 rounded-full">
                        <span className="text-blue-600 font-semibold text-sm">{panel.capacity}</span>
                      </div>
                      <div className="bg-green-50 px-3 py-1 rounded-full">
                        <span className="text-green-600 font-semibold text-sm">{panel.readers}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-3">Özellikler:</h4>
                        <ul className="space-y-2">
                          {panel.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-3">
                              <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                              <span className="text-slate-700 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-slate-700 mb-2">Teknik Özellikler:</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>Güç: {panel.specifications.power}</div>
                          <div>Haberleşme: {panel.specifications.communication}</div>
                          <div>Okuyucu: {panel.specifications.readers}</div>
                          <div>Hafıza: {panel.specifications.memory}</div>
                          <div className="col-span-2">Sıcaklık: {panel.specifications.temperature}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Components */}
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
              Sistem Bileşenleri
            </h2>
            <p className="text-lg text-slate-600">
              Geçiş kontrol panellerinin temel bileşenleri ve özellikleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {components.map((component, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{component.name}</h3>
                <p className="text-slate-600 text-sm">{component.description}</p>
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
              Geçiş Kontrol Sistemlerinin Faydaları
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Key className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-slate-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Areas */}
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
              Geçiş kontrol panelleri her alanda güvenliği sağlar
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usageAreas.map((area, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Building className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-slate-700">{area}</span>
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
              Access control panelleri hakkında merak edilenler
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
              Access Control Sistemi İçin Teklif Alın
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Proximity ve Mifare kart okuyuculu profesyonel geçiş kontrol sistemleri için ücretsiz keşif ve teklif hizmeti
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
              <Link href="/kartli-gecis-sistemi">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Kartlı Geçiş Sistemleri
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}