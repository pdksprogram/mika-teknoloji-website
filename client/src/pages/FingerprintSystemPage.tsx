import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield } from "lucide-react";
import { Link } from "wouter";

const devices = [
  {
    id: 1,
    name: "MT1100",
    description: "Parmak İzi Sistemi",
    image: "/mt1100-device.png",
    features: ["Parmak izi Kapasitesi : 3.000", "Kayıt Kapasitesi : 100.000", "Parmak izi + Proximity Kart + Şifre Tanımlama", "Kapı Açma Özelliği", "Zil Çaldırma Özelliği"]
  },
  {
    id: 2,
    name: "MTP50",
    description: "Yüz Tanıma ve Parmak İzi Terminal",
    image: "/mtp50-device.png",
    features: ["Yüz Kayıt Kapasitesi : 1000", "Parmak İzi Kayıt Kapasitesi : 1000", "Log Kapasitesi : 100.000", "Ekran Boyutu : 2,4 inç TFT LCD", "Röle : Var", "Haberleşme : TCP/IP, USB"]
  },
  {
    id: 3,
    name: "OP-S100",
    description: "Standalone Parmak İzi Terminal",
    image: "/placeholder-device.jpg",
    features: ["Bağımsız Çalışma", "Kompakt Tasarım", "USB Bağlantı", "Kolay Kurulum"]
  },
  {
    id: 4,
    name: "OP-S20",
    description: "Standalone Parmak İzi Okuyucu",
    image: "/placeholder-device.jpg",
    features: ["Küçük Boyut", "Düşük Güç", "RS485 Bağlantı", "Pratik Kullanım"]
  }
];

export default function FingerprintSystemPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">

      {/* Devices Grid */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Parmak İzi Okuyucu Cihazları
          </h1>
        </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devices.map((device, index) => (
              <motion.div
                key={device.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 relative">
                  {/* YENİ Badge - sadece ilk 2 cihaz için */}
                  {device.id <= 2 && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <div className="relative">
                        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl transform rotate-12 animate-bounce">
                          <div className="flex items-center gap-1">
                            <span className="animate-pulse">✨</span>
                            <span>YENİ</span>
                            <span className="animate-pulse">✨</span>
                          </div>
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-red-400 rounded-full blur-sm opacity-75 animate-ping"></div>
                      </div>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      {device.image && device.image !== "/placeholder-device.jpg" ? (
                        <img 
                          src={device.image} 
                          alt={device.name}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="text-gray-400 text-center">
                          <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-2 flex items-center justify-center">
                            <Shield className="w-8 h-8 text-primary" />
                          </div>
                          <p className="text-sm">Cihaz Görseli</p>
                        </div>
                      )}
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
      </section>

    </div>
  );
}