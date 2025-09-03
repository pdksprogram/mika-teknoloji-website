import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Shield, Clock, Users, Phone, Mail } from "lucide-react";
import { Link } from "wouter";

const devices = [
  {
    id: 1,
    name: "CYBORG C16",
    description: "Parmak İzi - Kart Okuyucu",
    image: "/placeholder-device.jpg",
    features: ["Parmak İzi Okuma", "RFID Kart Desteği", "LCD Ekran", "TCP/IP Bağlantı"]
  },
  {
    id: 2,
    name: "OP P1100",
    description: "Parmak İzi Okuyucu",
    image: "/placeholder-device.jpg",
    features: ["Optik Parmak İzi Sensörü", "1000 Kullanıcı Kapasitesi", "USB Bağlantı", "Kolay Kurulum"]
  },
  {
    id: 3,
    name: "OP PA1000",
    description: "Parmak İzi Okuyucu",
    image: "/placeholder-device.jpg",
    features: ["Gelişmiş Optik Sensör", "Hızlı Tanıma", "Şifre Desteği", "Estetik Tasarım"]
  },
  {
    id: 4,
    name: "K20 IŞIKLI",
    description: "Parmak İzi - Kart Okuyucu",
    image: "/placeholder-device.jpg",
    features: ["LED Işıklı Tasarım", "Dual Teknoloji", "Gece Görüş", "Dayanıklı Yapı"]
  },
  {
    id: 5,
    name: "K30 ID IŞIKLI",
    description: "Parmak İzi - Kart Okuyucu",
    image: "/placeholder-device.jpg",
    features: ["ID Kart Desteği", "Işıklı Okuyucu", "Yüksek Hız", "Güvenli Erişim"]
  },
  {
    id: 6,
    name: "D20",
    description: "Parmak İzi Okuyucu",
    image: "/placeholder-device.jpg",
    features: ["Kompakt Tasarım", "Hızlı Okuma", "Düşük Güç Tüketimi", "Kolay Entegrasyon"]
  },
  {
    id: 7,
    name: "MP 20656 ID",
    description: "Parmak İzi - Kart Okuyucu",
    image: "/placeholder-device.jpg",
    features: ["Multi-Modal Erişim", "ID Kart Okuma", "TFT Renkli Ekran", "Ethernet Desteği"]
  },
  {
    id: 8,
    name: "OP-C37",
    description: "Parmak İzi Okuyucu",
    image: "/placeholder-device.jpg",
    features: ["Profesyonel Seri", "Yüksek Doğruluk", "Hızlı İşlem", "Endüstriyel Tasarım"]
  },
  {
    id: 9,
    name: "PRX PS-4051 ID",
    description: "Parmak İzi - Kart Okuyucu",
    image: "/placeholder-device.jpg",
    features: ["Proksimiti Kart", "RFID Teknolojisi", "Çoklu Erişim", "Gelişmiş Güvenlik"]
  },
  {
    id: 10,
    name: "H07",
    description: "Parmak İzi - Kart Okuyucu",
    image: "/placeholder-device.jpg",
    features: ["Hibrit Sistem", "Çift Doğrulama", "Renkli Ekran", "Web Tabanlı Yönetim"]
  }
];

const benefits = [
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Yüksek Güvenlik",
    description: "Benzersiz parmak izi verileri ile %99.9 doğruluk oranı"
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Hızlı Erişim",
    description: "1 saniye altında tanıma ve erişim kontrolü"
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Çoklu Kullanıcı",
    description: "Binlerce kullanıcı kapasitesi ve kolay yönetim"
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
    title: "Kolay Entegrasyon",
    description: "Mevcut PDKS sistemlerinize sorunsuz entegrasyon"
  }
];

export default function FingerprintSystemPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Parmak İzli Personel Takip Sistemi
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              En gelişmiş biyometrik teknoloji ile güvenli ve hızlı personel takip çözümleri
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-slate-100 px-8 py-4 text-lg font-semibold"
                data-testid="fingerprint-cta-demo"
              >
                <Link href="/iletisim" className="flex items-center">
                  ÜCRETSİZ DEMO TALEBİ
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
                data-testid="fingerprint-cta-contact"
              >
                <Link href="/iletisim">FİYAT BİLGİSİ AL</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neden Parmak İzi Sistemi?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern işletmeler için en güvenli ve pratik personel takip çözümü
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Devices Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Parmak İzi Okuyucu Cihazlarımız
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Her ihtiyaca uygun, kaliteli ve güvenilir parmak izi okuyucu modelleri
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devices.map((device, index) => (
              <motion.div
                key={device.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-gray-400 text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-2 flex items-center justify-center">
                          <Shield className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-sm">Cihaz Görseli</p>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{device.name}</h3>
                    <p className="text-primary font-semibold mb-4">{device.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {device.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className="w-full"
                      variant="outline"
                      data-testid={`device-info-${device.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <Link href="/iletisim">Detaylı Bilgi Al</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Parmak İzi Sisteminizi Hemen Kurun
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Ücretsiz keşif ve demo için bizimle iletişime geçin. Size en uygun cihazı seçelim.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-slate-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                data-testid="fingerprint-final-cta-demo"
              >
                <Link href="/iletisim" className="flex items-center">
                  ÜCRETSİZ KEŞİF + DEMO
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                data-testid="fingerprint-final-cta-contact"
              >
                <Link href="/iletisim">TEKNİK BİLGİ AL</Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>0850 450 15 30</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>info@mikateknoloji.com</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>2 Yıl Garanti</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}