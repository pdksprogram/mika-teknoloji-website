import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { 
  CheckCircle, 
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import { BEL_TURNIKE_IMAGES } from "@/assetsMap";
import { Link } from "wouter";

export default function BelTipeTurnikePage() {
  
  const belTurnikeModelleri = [
    {
      id: "t250",
      model: "T-250",
      title: "T 250 Elektromekanik Bel Tipi Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt1,
      features: ["Paslanmaz Çelik Gövde", "Elektromekanik Kontrol", "Manuel/Otomatik Mod", "LED Yönlendirme"],
      price: "Fiyat İçin Ara",
      description: "Güvenlik noktalarında geçişin düzen içinde yapılmasını sağlayan temel turnike sistemi."
    },
    {
      id: "t250-eco",
      model: "T-250 ECO",
      title: "T 250 ECO Elektromekanik Bel Tipi Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt2,
      features: ["Ekonomik Çözüm", "Dayanıklı Yapı", "Kolay Kurulum", "Düşük Bakım"],
      price: "Fiyat İçin Ara",
      description: "Küçük işletmeler için uygun maliyetli güvenlik kontrol sistemi."
    },
    {
      id: "t250-a2",
      model: "T-250 A2",
      title: "T 250 A2 Elektromekanik Bel Tipi Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt3,
      features: ["İki Yönlü Geçiş", "Akıllı Sensörler", "Anti-Tailgating", "Alarm Sistemi"],
      price: "Fiyat İçin Ara",
      description: "İki yönlü geçiş kontrolü ile yüksek güvenlik sağlayan gelişmiş sistem."
    },
    {
      id: "t250-a2-eco",
      model: "T-250 A2 ECO",
      title: "T 250 A2 ECO Elektromekanik Bel Tipi Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt4,
      features: ["İki Yönlü Kontrol", "Ekonomik Fiyat", "Güvenilir Çalışma", "Kolay Bakım"],
      price: "Fiyat İçin Ara",
      description: "İki yönlü geçiş kontrolü için ekonomik ve güvenilir çözüm."
    },
    {
      id: "t250-gt",
      model: "T-250 GT",
      title: "T 250 GT Elektromekanik Üç Kollu Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt5,
      features: ["Premium Tasarım", "Sessiz Çalışma", "Hızlı Geçiş", "Estetik Görünüm"],
      price: "Fiyat İçin Ara",
      description: "Prestijli mekanlar için estetik tasarım ile üç kollu tripod turnike sistemi."
    },
    {
      id: "t345",
      model: "T-345",
      title: "T 345 Elektromekanik Bel Tipi Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt6,
      features: ["Endüstriyel Dayanım", "Yoğun Kullanım", "Çevre Direnci", "Güçlü Motor"],
      price: "Fiyat İçin Ara",
      description: "Endüstriyel tesisler için yoğun kullanıma dayanıklı turnike sistemi."
    },
    {
      id: "t345-eco",
      model: "T-345 ECO",
      title: "T 345 ECO Elektromekanik Bel Tipi Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt7,
      features: ["Dayanıklı Yapı", "Uygun Fiyat", "Endüstriyel Kullanım", "Kolay Montaj"],
      price: "Fiyat İçin Ara",
      description: "Ekonomik maliyetle endüstriyel dayanıklılık sunan turnike sistemi."
    },
    {
      id: "t250-s",
      model: "T-250 S",
      title: "T 250 S Elektromekanik Bel Tipi Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt8,
      features: ["Kompakt Tasarım", "Az Yer Kaplar", "Esnek Kurulum", "Hızlı Geçiş"],
      price: "Fiyat İçin Ara",
      description: "Dar alanlar için özel tasarlanmış kompakt bel tipi turnike sistemi."
    },
    {
      id: "t450",
      model: "T-450",
      title: "T 450 Elektromekanik Bel Tipi Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt9,
      features: ["Yüksek Kapasite", "Hızlı Geçiş", "Yoğun Trafik", "Güçlü Performans"],
      price: "Fiyat İçin Ara",
      description: "Metro, hastane gibi yoğun trafikli alanlar için yüksek kapasiteli sistem."
    },
    {
      id: "t281",
      model: "T-281",
      title: "T 281 Elektromekanik Bel Tipi Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt10,
      features: ["Özel Tasarım", "Kişiye Özel", "Estetik Çözüm", "Markalama"],
      price: "Fiyat İçin Ara",
      description: "Kurumsal kimliğe uygun özel tasarım bel tipi turnike sistemi."
    },
    {
      id: "t250-jetonlu",
      model: "T-250 Jetonlu",
      title: "T 250 Jetonlu Turnike Sistemi - WC Turnikesi",
      image: BEL_TURNIKE_IMAGES.bt11,
      features: ["Jeton Okuyucu", "Para Kasası", "Otomatik Tahsilat", "WC Turnikesi"],
      price: "Fiyat İçin Ara",
      description: "Ücretli geçişler ve WC girişleri için jetonlu turnike sistemi."
    },
    {
      id: "t345-jetonlu",
      model: "T-345 Jetonlu",
      title: "T 345 Jetonlu Turnike Sistemi - WC Turnikesi",
      image: BEL_TURNIKE_IMAGES.bt12,
      features: ["Çoklu Ödeme", "Dijital Ekran", "Para Üstü", "Rapor Sistemi"],
      price: "Fiyat İçin Ara",
      description: "Gelişmiş ödeme seçenekleri ile WC turnikesi ve jetonlu geçiş sistemi."
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
        <title>Bel Tipi Turnike Sistemi - Üç Kollu Turnikeler | Mika Teknoloji</title>
        <meta name="description" content="Profesyonel bel tipi turnike sistemi ve üç kollu turnikeler. T-250, T-345, jetonlu turnike modelleri. Güvenlik noktalarında geçiş kontrolü için elektromekanik çözümler." />
        <meta name="keywords" content="bel tipi turnike, üç kollu turnike, tripod turnike, turnike sistemleri, paslanmaz çelik turnike, elektromekanik turnike, jetonlu turnike" />
        
        <meta property="og:title" content="Bel Tipi Turnike Sistemleri | Mika Teknoloji" />
        <meta property="og:description" content="Güvenli geçiş kontrolü için paslanmaz çelik bel tipi turnike sistemleri. 12 farklı model seçeneği ile." />
        <meta property="og:image" content="https://mikateknoloji.com/attached_assets/stock_images/tripod_waist_height__f6c103da.jpg" />
        <meta property="og:url" content="https://mikateknoloji.com/urunler/bel-tipi-turnike" />
        
        <link rel="canonical" href="https://mikateknoloji.com/urunler/bel-tipi-turnike" />
      </Helmet>



      {/* Turnike Sistemi Hakkında */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Bel Tipi Turnike Sistemi - Üç Kollu Turnikeler
            </h1>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="mb-6">
                <strong>Turnike Sistemleri</strong>, güvenlik noktalarında geçişin düzen içinde yapılması, geçişlerin kontrol altında tutulması, rapor alınması gibi işlemleri profesyonel şekilde yapılmasını sağlayan sistemlerdir.
              </p>
              <p className="mb-6">
                <strong>Turnike Sistemleri</strong> ile birlikte birleşik sistemler kullanılarak bilgisayar ortamında bunları takip etmek mümkündür. 
                <strong>Turnike Sistemi</strong> şifreli, kartlı veya parmak izli okuyucular kullanılarak bütünleşik bir şekilde çalışıp personel geçiş izni ve sınırlandırması yapılabilir.
              </p>
              <p className="mb-8">
                <strong>Turnike Sistemi</strong>, jetonlu geçişler için ya da paralı geçişler için de ayrıca kullanılabilir. 
                Böyle geçişler için şirketler geçiş hakkı başına belirledikleri ücretlerde insan faktörünü ortadan kaldırarak kazançlarını daha kolay ve doğru şekilde kontrol edebilir.
              </p>
              <div className="bg-primary/10 rounded-lg p-6">
                <p className="font-semibold text-primary mb-2">Mika Teknoloji Turnike Çeşitleri:</p>
                <p className="text-sm">
                  <strong>Üç Kollu Turnike Sistemi</strong>, <strong>Tripod Turnike Sistemi</strong>, <strong>VIP Turnike Sistemi</strong>, <strong>Kelebek Turnike Sistemi</strong>, <strong>Yaprak Turnike Sistemi</strong>, <strong>Single Turnike Sistemi</strong>, <strong>Double Turnike Sistemi</strong> satışını yapmakta ve teknik desteğini vermektedir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ürün Katalogu */}
      <div className="pt-8 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bel Tipi Turnike Modelleri
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              İhtiyacınıza uygun bel tipi turnike modelini seçin. Her biri farklı özellik ve kullanım alanları için tasarlandı.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {belTurnikeModelleri.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img 
                      src={model.image}
                      alt={model.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <Badge className="absolute top-3 left-3 bg-primary text-white">
                      {model.model}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {model.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {model.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {model.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-primary font-bold">
                        {model.price}
                      </div>
                      <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                        <Link href={model.id === "t250" ? "/urunler/mt-250-turnike" : "#"}>
                          Detay
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Referanslar */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Turnike Sistemi Referanslarımız
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Farklı sektörlerden kurumsal müşterilerimizin tercih ettiği güvenlik çözümleri.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {referansResimler.map((resim, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="aspect-square rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <img 
                  src={resim}
                  alt={`Turnike Referans ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-primary to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              İşletmeniz İçin En Uygun Turnike Sistemini Belirleyelim
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Ücretsiz keşif ve detaylı teklif için uzman ekibimizle iletişime geçin. 
              20+ yıllık deneyimimizle size en uygun çözümü sunuyoruz.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Phone className="h-8 w-8 mx-auto mb-3" />
                <div className="font-semibold mb-1">Telefon</div>
                <div className="text-white/90">0212 XXX XX XX</div>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 mx-auto mb-3" />
                <div className="font-semibold mb-1">E-posta</div>
                <div className="text-white/90">info@mikateknoloji.com</div>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 mx-auto mb-3" />
                <div className="font-semibold mb-1">Adres</div>
                <div className="text-white/90">İstanbul, Türkiye</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/iletisim">
                  Ücretsiz Keşif Talep Et
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Teklif Al
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}