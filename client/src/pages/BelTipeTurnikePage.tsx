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
      model: "MT-250",
      title: "Elektromekanik Bel Tipi Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt1,
      features: ["Paslanmaz Çelik Gövde", "Elektromekanik Kontrol", "Manuel/Otomatik Mod", "LED Yönlendirme"],
      price: "Fiyat İçin Ara",
      description: "Standart kullanım alanları için ideal ekonomik çözüm."
    },
    {
      id: "t250-eco",
      model: "MT-250 ECO",
      title: "Ekonomik Bel Tipi Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt2,
      features: ["Ekonomik Çözüm", "Dayanıklı Yapı", "Kolay Kurulum", "Düşük Bakım"],
      price: "Fiyat İçin Ara",
      description: "Küçük işletmeler için uygun fiyatlı güvenlik çözümü."
    },
    {
      id: "t250-a2",
      model: "MT-250 A2",
      title: "Gelişmiş Bel Tipi Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt3,
      features: ["İki Yönlü Geçiş", "Akıllı Sensörler", "Anti-Tailgating", "Alarm Sistemi"],
      price: "Fiyat İçin Ara",
      description: "Yüksek güvenlik gereken alanlar için gelişmiş özellikler."
    },
    {
      id: "t250-a2-eco",
      model: "MT-250 A2 ECO",
      title: "Ekonomik İki Yönlü Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt4,
      features: ["İki Yönlü Kontrol", "Ekonomik Fiyat", "Güvenilir Çalışma", "Kolay Bakım"],
      price: "Fiyat İçin Ara",
      description: "İki yönlü geçiş kontrolü için ekonomik seçenek."
    },
    {
      id: "t250-gt",
      model: "MT-250 GT",
      title: "Premium Üç Kollu Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt5,
      features: ["Premium Tasarım", "Sessiz Çalışma", "Hızlı Geçiş", "Estetik Görünüm"],
      price: "Fiyat İçin Ara",
      description: "Prestijli mekanlar için estetik ve fonksiyonel çözüm."
    },
    {
      id: "t345",
      model: "MT-345",
      title: "Endüstriyel Bel Tipi Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt6,
      features: ["Endüstriyel Dayanım", "Yoğun Kullanım", "Çevre Direnci", "Güçlü Motor"],
      price: "Fiyat İçin Ara",
      description: "Fabrika ve endüstriyel tesisler için dayanıklı sistem."
    },
    {
      id: "t345-eco",
      model: "MT-345 ECO",
      title: "Ekonomik Endüstriyel Turnike",
      image: BEL_TURNIKE_IMAGES.bt7,
      features: ["Dayanıklı Yapı", "Uygun Fiyat", "Endüstriyel Kullanım", "Kolay Montaj"],
      price: "Fiyat İçin Ara",
      description: "Endüstriyel dayanıklılık, ekonomik maliyetle."
    },
    {
      id: "t250-s",
      model: "MT-250 S",
      title: "Kompakt Bel Tipi Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt8,
      features: ["Kompakt Tasarım", "Az Yer Kaplar", "Esnek Kurulum", "Hızlı Geçiş"],
      price: "Fiyat İçin Ara",
      description: "Dar alanlar için özel tasarlanmış kompakt çözüm."
    },
    {
      id: "t450",
      model: "MT-450",
      title: "Yüksek Kapasiteli Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt9,
      features: ["Yüksek Kapasite", "Hızlı Geçiş", "Yoğun Trafik", "Güçlü Performans"],
      price: "Fiyat İçin Ara",
      description: "Metro, hastane gibi yoğun trafikli alanlar için."
    },
    {
      id: "t281",
      model: "MT-281",
      title: "Özel Tasarım Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt10,
      features: ["Özel Tasarım", "Kişiye Özel", "Estetik Çözüm", "Markalama"],
      price: "Fiyat İçin Ara",
      description: "Kurumsal kimliğe uygun özel tasarım imkanı."
    },
    {
      id: "t250-jetonlu",
      model: "MT-250 Jetonlu",
      title: "Jetonlu Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt11,
      features: ["Jeton Okuyucu", "Para Kasası", "Otomatik Tahsilat", "WC Turnikesi"],
      price: "Fiyat İçin Ara",
      description: "Ücretli geçişler için jetonlu tahsilat sistemi."
    },
    {
      id: "t345-jetonlu",
      model: "MT-345 Jetonlu",
      title: "Gelişmiş Jetonlu Turnike",
      image: BEL_TURNIKE_IMAGES.bt12,
      features: ["Çoklu Ödeme", "Dijital Ekran", "Para Üstü", "Rapor Sistemi"],
      price: "Fiyat İçin Ara",
      description: "Gelişmiş ödeme seçenekleri ile tahsilat turnike sistemi."
    }
  ];


  const referansResimler = [
    "/ana-urun.png",
    "/boy-tipi-turnike.png",
    "/bel-tipi-turnike.png",
    "/engelli-turnike.png",
    "/hizli-gecis-turnike.png",
    "/hijyen-turnike.png"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Bel Tipi Turnike Sistemleri - Üç Kollu Turnikeler | Mika Teknoloji</title>
        <meta name="description" content="Paslanmaz çelik bel tipi turnike sistemleri. Elektromekanik, jetonlu ve özel tasarım turnike modelleri. Güvenli geçiş kontrolü için profesyonel çözümler." />
        <meta name="keywords" content="bel tipi turnike, üç kollu turnike, tripod turnike, turnike sistemleri, paslanmaz çelik turnike, elektromekanik turnike, jetonlu turnike" />
        
        <meta property="og:title" content="Bel Tipi Turnike Sistemleri | Mika Teknoloji" />
        <meta property="og:description" content="Güvenli geçiş kontrolü için paslanmaz çelik bel tipi turnike sistemleri. 12 farklı model seçeneği ile." />
        <meta property="og:image" content="https://mikateknoloji.com/boy-tipi-turnike.png" />
        <meta property="og:url" content="https://mikateknoloji.com/urunler/bel-tipi-turnike" />
        
        <link rel="canonical" href="https://mikateknoloji.com/urunler/bel-tipi-turnike" />
      </Helmet>



      {/* Ürün Katalogu */}
      <div className="pt-8 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Bel Tipi Turnike Modelleri
            </h1>
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
                        <Link href={`/urunler/turnike/${model.id}`}>
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