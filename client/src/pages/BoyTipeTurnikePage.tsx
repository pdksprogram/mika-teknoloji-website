import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { 
  CheckCircle, 
  Phone,
  Mail
} from "lucide-react";
import { BOY_TURNIKE_IMAGES } from "@/assetsMap";
import { Link } from "wouter";

export default function BoyTipeTurnikePage() {
  
  const boyTurnikeModelleri = [
    {
      id: "t500",
      model: "MT-500",
      title: "Standart Boy Tipi Turnike Sistemi",
      image: BOY_TURNIKE_IMAGES.yt1,
      features: ["Yüksek Güvenlik", "Kamera Entegrasyonu", "Sesli Uyarı", "LED Gösterge"],
      price: "Fiyat İçin Ara",
      description: "Yüksek güvenlik alanları için ideal boy tipi turnike sistemi."
    },
    {
      id: "t600",
      model: "MT-600 Premium",
      title: "Premium Boy Tipi Turnike Sistemi",
      image: BOY_TURNIKE_IMAGES.yt2,
      features: ["Premium Tasarım", "Dokunmatik Ekran", "Biyometrik Entegrasyon", "Anti-Passback"],
      price: "Fiyat İçin Ara",
      description: "Premium özellikler ile donatılmış gelişmiş boy tipi turnike."
    },
    {
      id: "t700",
      model: "MT-700 Security",
      title: "Güvenlik Boy Tipi Turnike Sistemi",
      image: BOY_TURNIKE_IMAGES.yt3,
      features: ["Yüksek Güvenlik", "X-Ray Entegrasyonu", "Metal Dedektör", "Acil Çıkış"],
      price: "Fiyat İçin Ara",
      description: "Maksimum güvenlik gereken alanlar için özel tasarım."
    },
    {
      id: "t800",
      model: "MT-800 Pro",
      title: "Profesyonel Boy Tipi Turnike",
      image: BOY_TURNIKE_IMAGES.yt4,
      features: ["Profesyonel Kullanım", "Yoğun Trafik", "Sessiz Çalışma", "Uzaktan Kontrol"],
      price: "Fiyat İçin Ara",
      description: "Profesyonel kullanım alanları için dayanıklı sistem."
    },
    {
      id: "t900",
      model: "MT-900 Industrial",
      title: "Endüstriyel Boy Tipi Turnike",
      image: BOY_TURNIKE_IMAGES.yt5,
      features: ["Endüstriyel Dayanım", "Su ve Toz Geçirmez", "Aşırı Hava Direnci", "24/7 Çalışma"],
      price: "Fiyat İçin Ara",
      description: "Endüstriyel ortamlar için maksimum dayanıklılık."
    },
    {
      id: "t1000",
      model: "MT-1000 Advanced",
      title: "Gelişmiş Boy Tipi Turnike Sistemi",
      image: BOY_TURNIKE_IMAGES.yt6,
      features: ["AI Destekli", "Yüz Tanıma", "Otomatik Fotoğraf", "Bulut Entegrasyonu"],
      price: "Fiyat İçin Ara",
      description: "Yapay zeka destekli gelişmiş özellikler ile donatılmış."
    }
  ];


  const referansResimler = [
    "/attached_assets/image_1758019216490.png",
    "/attached_assets/image_1758020107295.png",
    "/attached_assets/image_1758019726366.png",
    "/attached_assets/image_1758020186900.png",
    "/attached_assets/image_1758022229658.png",
    "/attached_assets/image_1758022307099.png"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Boy Tipi Turnike Sistemleri - Yüksek Güvenlikli Turnikeler | Mika Teknoloji</title>
        <meta name="description" content="Yüksek güvenlik boy tipi turnike sistemleri. Premium tasarım, biyometrik entegrasyon, AI destekli özellikler. Profesyonel güvenlik çözümleri." />
        <meta name="keywords" content="boy tipi turnike, yüksek güvenlik turnike, tam boy turnike, güvenlik turnike sistemleri, biyometrik turnike, AI turnike" />
        
        <meta property="og:title" content="Boy Tipi Turnike Sistemleri | Mika Teknoloji" />
        <meta property="og:description" content="Yüksek güvenlik için boy tipi turnike sistemleri. AI destekli ve biyometrik özellikler ile 6 farklı model." />
        <meta property="og:image" content="https://mikateknoloji.com/attached_assets/stock_images/height_turnstile_f6c103da.jpg" />
        <meta property="og:url" content="https://mikateknoloji.com/boy-tipi-turnikeler" />
        
        <link rel="canonical" href="https://mikateknoloji.com/boy-tipi-turnikeler" />
      </Helmet>



      {/* Ürün Katalogu */}
      <div className="pt-8 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Boy Tipi Turnike Modelleri
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Yüksek güvenlik gereken alanlar için boy tipi turnike modellerimizi inceleyin. Her biri gelişmiş güvenlik özellikleri ile donatılmıştır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {boyTurnikeModelleri.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 relative overflow-hidden border-2 hover:border-blue-200">
                  {/* Premium Badge - Premium ve Advanced modeller için */}
                  {(model.id === "t600" || model.id === "t1000") && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <Badge className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 text-xs font-bold shadow-lg">
                        ⭐ PREMIUM
                      </Badge>
                    </div>
                  )}

                  {/* AI Badge - Advanced model için */}
                  {model.id === "t1000" && (
                    <div className="absolute -bottom-3 -left-3 z-10">
                      <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 text-xs font-bold shadow-lg">
                        🤖 AI
                      </Badge>
                    </div>
                  )}

                  <CardContent className="p-6">
                    <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden border border-gray-200">
                      <img 
                        src={model.image} 
                        alt={model.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = '/attached_assets/image_1758020107295.png';
                        }}
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <Badge variant="secondary" className="mb-2 text-xs">
                          {model.model}
                        </Badge>
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {model.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-2">
                          {model.description}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-900">Özellikler:</h4>
                        <ul className="space-y-1">
                          {model.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-blue-600">
                            {model.price}
                          </span>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                            <Link href="/iletisim">
                              Teklif Al
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Referanslar */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Boy Tipi Turnike Referanslarımız
            </h2>
            <p className="text-gray-600">
              Güvenilir boy tipi turnike çözümlerimiz ile gerçekleştirdiğimiz projeler
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {referansResimler.map((resim, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="aspect-square bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <img 
                  src={resim}
                  alt={`Boy tipi turnike referansı ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* İletişim CTA */}
      <div className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Boy Tipi Turnike Sistemlerimiz Hakkında Bilgi Alın
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Size en uygun boy tipi turnike modelini birlikte belirleyelim
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-blue-100">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+90 555 123 45 67</span>
            </div>
            <div className="flex items-center gap-2 text-blue-100">
              <Mail className="w-5 h-5" />
              <span className="font-semibold">info@mikateknoloji.com</span>
            </div>
          </div>

          <div className="mt-8">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4"
            >
              <Link href="/iletisim">
                Hemen İletişime Geçin
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}