import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { 
  CheckCircle, 
  Phone,
  Mail,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Clock
} from "lucide-react";
import { Link } from "wouter";
import { BOY_TURNIKE_IMAGES } from "@/assetsMap";

interface BoyTurnikeModel {
  id: string;
  title: string;
  model: string;
  description: string;
  image: string;
  features: string[];
  applications: string[];
  price: string;
}

const boyTurnikeModels: BoyTurnikeModel[] = [
  {
    id: "t2500d-single-3",
    title: "Single 3 Kollu Boy Turnikesi",
    model: "MT-2500D",
    description: "Tek yönlü geçiş için 3 kollu boy tipi turnike sistemi",
    image: BOY_TURNIKE_IMAGES.bt1,
    features: [
      "304 Paslanmaz Çelik Gövde",
      "Elektromekanik Kontrol",
      "3 Kollu Tasarım", 
      "Single Geçiş",
      "LED Gösterge"
    ],
    applications: [
      "Ofis binaları",
      "Fabrika girişleri", 
      "Okul girişleri",
      "Hastane girişleri"
    ],
    price: "Fiyat İçin Ara"
  },
  {
    id: "t2500d-single-4",
    title: "Single 4 Kollu Boy Turnikesi",  
    model: "MT-2500D",
    description: "Tek yönlü geçiş için 4 kollu boy tipi turnike sistemi",
    image: BOY_TURNIKE_IMAGES.bt2,
    features: [
      "304 Paslanmaz Çelik Gövde",
      "4 Kollu Güvenlik",
      "Yüksek Güvenlik",
      "Single Geçiş",
      "Çarpışma Önleyici"
    ],
    applications: [
      "Yüksek güvenlik alanları",
      "Devlet kurumları",
      "Bankalar", 
      "Güvenlik merkezleri"
    ],
    price: "Fiyat İçin Ara"
  },
  {
    id: "t2500d-double-3",
    title: "Double 3 Kollu Boy Turnikesi",
    model: "MT-2500D", 
    description: "Çift yönlü geçiş için 3 kollu boy tipi turnike sistemi",
    image: BOY_TURNIKE_IMAGES.bt3,
    features: [
      "Çift Yönlü Geçiş",
      "3 Kollu Tasarım",
      "İki Taraflı Kontrol",
      "LED Yönlendirme",
      "Anti-Tailgating"
    ],
    applications: [
      "Metro istasyonları",
      "Havaalanları",
      "Alışveriş merkezleri",
      "Büyük tesisler"
    ],
    price: "Fiyat İçin Ara"
  },
  {
    id: "t2500d-double-4", 
    title: "Double 4 Kollu Boy Turnikesi",
    model: "MT-2500D",
    description: "Çift yönlü geçiş için 4 kollu boy tipi turnike sistemi",
    image: BOY_TURNIKE_IMAGES.bt4,
    features: [
      "Çift Yönlü Güvenlik",
      "4 Kollu Maksimum Koruma", 
      "İki Taraflı LED",
      "Yüksek Trafik",
      "Güçlü Motor Sistemi"
    ],
    applications: [
      "Yoğun trafik alanları",
      "Stadyumlar",
      "Kongre merkezleri", 
      "Büyük hastaneler"
    ],
    price: "Fiyat İçin Ara"
  },
  {
    id: "t2500k-single-3",
    title: "Single 3 Kollu Boy Turnikesi K Serisi",
    model: "MT-2500K", 
    description: "Kompakt tasarım tek yönlü 3 kollu boy turnike sistemi",
    image: BOY_TURNIKE_IMAGES.bt5,
    features: [
      "Kompakt K Serisi",
      "3 Kollu Ekonomik",
      "Hafif Yapı",
      "Kolay Kurulum", 
      "Standart LED"
    ],
    applications: [
      "Küçük ofisler",
      "Mağaza girişleri",
      "Klinik girişleri",
      "Dar alanlar"
    ],
    price: "Fiyat İçin Ara"
  },
  {
    id: "t2500k-single-4",
    title: "Single 4 Kollu Boy Turnikesi K Serisi",
    model: "MT-2500K",
    description: "Kompakt tasarım tek yönlü 4 kollu boy turnike sistemi", 
    image: BOY_TURNIKE_IMAGES.bt6,
    features: [
      "K Serisi 4 Kol",
      "Kompakt Güvenlik", 
      "Ekonomik Çözüm",
      "Hızlı Montaj",
      "Düşük Bakım"
    ],
    applications: [
      "Orta ölçekli işletmeler",
      "Okul kantinleri",
      "Küçük fabrikalar",
      "Otopark girişleri"
    ],
    price: "Fiyat İçin Ara"
  },
  {
    id: "t2500k-double-3",
    title: "Double 3 Kollu Boy Turnikesi K Serisi", 
    model: "MT-2500K",
    description: "Kompakt çift yönlü 3 kollu boy turnike sistemi",
    image: BOY_TURNIKE_IMAGES.bt7,
    features: [
      "K Serisi Çift Yön",
      "3 Kollu İki Taraf",
      "Ekonomik Double",
      "Kompakt Boyut",
      "Çift LED Sistem"
    ],
    applications: [
      "Okul ana girişleri",
      "Küçük AVM'ler", 
      "İş merkezi girişleri",
      "Spor salonu girişleri"
    ],
    price: "Fiyat İçin Ara"
  },
  {
    id: "t2500k-double-4",
    title: "Double 4 Kollu Boy Turnikesi K Serisi",
    model: "MT-2500K", 
    description: "Kompakt çift yönlü 4 kollu boy turnike sistemi",
    image: BOY_TURNIKE_IMAGES.bt8,
    features: [
      "K Serisi Premium",
      "4 Kol Çift Yön",
      "Maksimum Güvenlik",
      "Kompakt Tasarım", 
      "Gelişmiş Kontrol"
    ],
    applications: [
      "Orta boy tesisler",
      "Eğitim kurumları",
      "Sağlık merkezleri", 
      "Hızlı geçiş noktaları"
    ],
    price: "Fiyat İçin Ara"
  },
  {
    id: "t2500d-single-3-eco", 
    title: "Single 3 Kollu Eco Boy Turnikesi",
    model: "MT-2500D ECO",
    description: "Ekonomik tek yönlü 3 kollu boy turnike sistemi",
    image: BOY_TURNIKE_IMAGES.bt9,
    features: [
      "Ekonomik D Serisi",
      "3 Kol Eco Tasarım",
      "Uygun Fiyat",
      "Temel Özellikler",
      "Standart Kalite"
    ],
    applications: [
      "Küçük işletmeler", 
      "Depo girişleri",
      "Servis alanları",
      "Bütçe projeleri"
    ],
    price: "Fiyat İçin Ara"
  },
  {
    id: "t2500k-single-3-eco",
    title: "Single 3 Kollu Eco Boy Turnikesi K Serisi",
    model: "MT-2500K ECO",
    description: "Kompakt ekonomik tek yönlü 3 kollu boy turnike sistemi",
    image: BOY_TURNIKE_IMAGES.bt10,
    features: [
      "K Serisi Eco",
      "Kompakt Ekonomik",
      "3 Kollu Basit",
      "Düşük Maliyet",
      "Hızlı Kurulum"
    ],
    applications: [
      "Küçük mağazalar",
      "Ofis girişleri", 
      "Kafe/restoran",
      "Başlangıç projeleri"
    ],
    price: "Fiyat İçin Ara"
  },
  {
    id: "t2500k-single-3-kristal",
    title: "Single 3 Kollu Kristal Boy Turnikesi",
    model: "MT-2500K Kristal",
    description: "Kristal cam panelli lüks 3 kollu boy turnike sistemi", 
    image: BOY_TURNIKE_IMAGES.bt11,
    features: [
      "Kristal Cam Panel",
      "Lüks Tasarım",
      "3 Kollu Premium",
      "LED Aydınlatma",
      "Estetik Görünüm"
    ],
    applications: [
      "Lüks ofisler",
      "Premium mağazalar",
      "Sanat galerileri",
      "VIP alanlar"
    ],
    price: "Fiyat İçin Ara"
  },
  {
    id: "t2500k-double-3-eco",
    title: "Double 3 Kollu Eco Boy Turnikesi K Serisi", 
    model: "MT-2500K ECO",
    description: "Ekonomik çift yönlü 3 kollu kompakt boy turnike sistemi",
    image: BOY_TURNIKE_IMAGES.bt12,
    features: [
      "Eco Çift Yön",
      "3 Kollu Ekonomik",
      "K Serisi Double",
      "Uygun Maliyet",
      "İki Taraf LED"
    ],
    applications: [
      "Orta boy işletmeler",
      "Okul ana kapıları",
      "Küçük fabrika girişleri", 
      "Ekonomik projeler"
    ],
    price: "Fiyat İçin Ara"
  },
  {
    id: "t1350-yarim-boy",
    title: "Elektromekanik Yarım Boy Turnikesi",
    model: "MT-1350",
    description: "Kompakt yarım boy elektromekanik turnike sistemi",
    image: BOY_TURNIKE_IMAGES.bt13,
    features: [
      "Yarım Boy Tasarım",
      "Elektromekanik",
      "Kompakt Boyut",
      "Ekonomik Çözüm",
      "Kolay Geçiş"
    ],
    applications: [
      "Dar alanlar", 
      "Küçük girişler",
      "Ofis içi geçişler",
      "Bölüm girişleri"
    ],
    price: "Fiyat İçin Ara"
  },
  {
    id: "t1400-yarim-boy",
    title: "Elektromekanik Yarım Boy Turnikesi",
    model: "MT-1400", 
    description: "Gelişmiş yarım boy elektromekanik turnike sistemi",
    image: BOY_TURNIKE_IMAGES.bt14,
    features: [
      "1400 Serisi",
      "Yarım Boy Premium",
      "Elektromekanik Plus",
      "Gelişmiş Özellikler",
      "Hassas Kontrol"
    ],
    applications: [
      "Premium dar alanlar",
      "VIP geçişler", 
      "Özel bölümler",
      "Hassas kontrol noktaları"
    ],
    price: "Fiyat İçin Ara"
  }
];

export default function BoyTipeTurnikePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Boy Tipi Turnikeler - MT Serisi | Mika Teknoloji</title>
        <meta name="description" content="Boy tipi turnike sistemleri - MT-2500D, MT-2500K, MT-1350, MT-1400 serisi. Single/Double, 3/4 kollu, Eco ve Kristal modeller. Profesyonel kurulum ve garanti." />
        <meta name="keywords" content="boy tipi turnike, boy turnike sistemi, MT-2500D, MT-2500K, single turnike, double turnike, 3 kollu turnike, 4 kollu turnike, kristal turnike" />
        
        <meta property="og:title" content="Boy Tipi Turnikeler | Mika Teknoloji" />
        <meta property="og:description" content="Profesyonel boy tipi turnike sistemleri. 14 farklı model seçeneği ile her ihtiyaca uygun çözümler." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mikateknoloji.com/urunler/boy-tipi-turnike" />
        
        <link rel="canonical" href="https://mikateknoloji.com/urunler/boy-tipi-turnike" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Boy Tipi Turnike Sistemleri
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Yüksek güvenlik ve estetik tasarım bir arada. 
                14 farklı model ile her ihtiyaca uygun boy tipi turnike çözümleri.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Link href="/iletisim">
                    Ücretsiz Keşif Talep Et
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <a href="tel:+902123200230">
                    <Phone className="h-5 w-5 mr-2" />
                    Hemen Ara
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Neden Boy Tipi Turnike?
            </h2>
            <p className="text-lg text-gray-600">
              Boy tipi turnikeler, yüksek güvenlik gereken alanlarda tam boy koruma sağlar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "Yüksek Güvenlik",
                description: "Tam boy koruma ile alttan geçiş engelleme"
              },
              {
                icon: <Star className="h-8 w-8 text-primary" />,
                title: "Premium Tasarım", 
                description: "Estetik görünüm ve modern tasarım"
              },
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "Güçlü Performans",
                description: "Yoğun trafikte kesintisiz çalışma"
              },
              {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "24/7 Çalışma",
                description: "Sürekli çalışma kapasitesi"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Boy Tipi Turnike Modelleri
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Single/Double, 3/4 kollu, Eco ve Kristal seçenekleri ile 14 farklı model
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {boyTurnikeModels.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={model.image}
                        alt={model.title}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-white">
                          {model.model}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {model.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        {model.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">Özellikler:</h4>
                          <div className="flex flex-wrap gap-1">
                            {model.features.slice(0, 3).map((feature, idx) => (
                              <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">Kullanım Alanları:</h4>
                          <div className="space-y-1">
                            {model.applications.slice(0, 2).map((app, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                                <span className="text-xs text-gray-600">{app}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-primary font-bold">
                          {model.price}
                        </div>
                        <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                          <Link href={`/urunler/turnike/${model.id}`}>
                            Detay
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-primary to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Boy Tipi Turnike Sistemi İçin Profesyonel Destek
            </h2>
            <p className="text-xl text-white/90 mb-8">
              14 yıllık tecrübemizle size en uygun boy tipi turnike çözümünü sunuyoruz. 
              Ücretsiz keşif ve fiyat teklifi için bizimle iletişime geçin.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Phone className="h-8 w-8 mx-auto mb-3" />
                <div className="font-semibold mb-1">Hızlı İletişim</div>
                <div className="text-white/90">0212 XXX XX XX</div>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 mx-auto mb-3" />
                <div className="font-semibold mb-1">E-posta Desteği</div>
                <div className="text-white/90">info@mikateknoloji.com</div>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 mx-auto mb-3" />
                <div className="font-semibold mb-1">Garanti</div>
                <div className="text-white/90">2-3 Yıl Garanti</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/iletisim">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Ücretsiz Keşif Talep Et
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                WhatsApp Destek
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}