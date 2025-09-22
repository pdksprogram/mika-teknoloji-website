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
      model: "MT 250",
      title: "Elektromekanik Bel Tipi Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt1,
      features: ["Paslanmaz Çelik Gövde", "Elektromekanik Kontrol Sistemi", "Manuel/Otomatik Çalışma Modu", "LED Yönlendirme Işıkları", "Güvenlik Sensörleri", "Kartlı/Şifreli Okuyucu Desteği"],
      price: "Fiyat İçin Ara",
      description: "Ofisler, küçük işletmeler ve standart güvenlik gereksinimleri olan alanlar için tasarlanmış güvenilir ve ekonomik turnike sistemi."
    },
    {
      id: "t250-eco",
      model: "MT 250 ECO",
      title: "Ekonomik Elektromekanik Bel Tipi Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt2,
      features: ["Ekonomik Çözüm", "Dayanıklı Paslanmaz Çelik Yapı", "Kolay Kurulum ve Bakım", "Düşük Enerji Tüketimi", "Temel Güvenlik Özellikleri"],
      price: "Fiyat İçin Ara",
      description: "Bütçe dostu fiyatıyla küçük işletmeler, okullar ve kamu binalarında temel geçiş kontrolü sağlayan ekonomik turnike modeli."
    },
    {
      id: "t250-a2",
      model: "MT 250 A2",
      title: "Elektromekanik Bel Tipi Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt3,
      features: ["İki Yönlü Geçiş Kontrolü", "Akıllı Güvenlik Sensörleri", "Anti-Tailgating Teknolojisi", "Sesli ve Görsel Alarm", "Akıllı Kart Okuyucu", "Uzaktan İzleme"],
      price: "Fiyat İçin Ara",
      description: "Havalimanları, üniversiteler ve yüksek güvenlik gerektiren kurumsal binalar için çift yönlü kontrol sağlayan gelişmiş turnike sistemi."
    },
    {
      id: "t250-a2-eco",
      model: "MT 250 A2 ECO",
      title: "Ekonomik Elektromekanik Bel Tipi Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt4,
      features: ["İki Yönlü Kontrol", "Ekonomik Fiyat", "Güvenilir Çalışma", "Kolay Bakım"],
      price: "Fiyat İçin Ara",
      description: "İki yönlü geçiş kontrolü için ekonomik seçenek."
    },
    {
      id: "t250-gt",
      model: "MT 250 GT",
      title: "Elektromekanik Üç Kollu Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt5,
      features: ["Premium Paslanmaz Çelik Tasarım", "Sessiz Elektromekanik Motor", "Hızlı ve Pürüssüz Geçiş", "Modern Estetik Görünüm", "LED Durum Göstergeleri", "Darbe Emici Sistem"],
      price: "Fiyat İçin Ara",
      description: "Lux otel girişleri, prestijli ofis binaları ve VIP alanlar için estetik tasarımı ile öne çıkan premium turnike modeli."
    },
    {
      id: "t345",
      model: "MT 345",
      title: "Elektromekanik Bel Tipi Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt6,
      features: ["Endüstriyel Dayanıklılık", "Yoğun Trafik Kapsitesi", "Su ve Toz Direnci", "Güçlü Servo Motor", "Ağır Hizmet Tipi Mekanizma", "24/7 Kesintisiz Çalışma"],
      price: "Fiyat İçin Ara",
      description: "Fabrikalar, endüstriyel tesisler ve ağır sanayi alanında günde binlerce geçişe dayanıklı profesyonel turnike sistemi."
    },
    {
      id: "t345-eco",
      model: "MT 345 ECO",
      title: "Ekonomik Elektromekanik Bel Tipi Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt7,
      features: ["Dayanıklı Yapı", "Uygun Fiyat", "Endüstriyel Kullanım", "Kolay Montaj"],
      price: "Fiyat İçin Ara",
      description: "Endüstriyel dayanıklılık, ekonomik maliyetle."
    },
    {
      id: "t250-s",
      model: "MT 250 S",
      title: "Elektromekanik Bel Tipi Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt8,
      features: ["Kompakt Tasarım", "Az Yer Kaplar", "Esnek Kurulum", "Hızlı Geçiş"],
      price: "Fiyat İçin Ara",
      description: "Dar alanlar için özel tasarlanmış kompakt çözüm."
    },
    {
      id: "t450",
      model: "MT 450",
      title: "Elektromekanik Bel Tipi Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt9,
      features: ["Yüksek Kapasite", "Hızlı Geçiş", "Yoğun Trafik", "Güçlü Performans"],
      price: "Fiyat İçin Ara",
      description: "Metro, hastane gibi yoğun trafikli alanlar için."
    },
    {
      id: "t281",
      model: "MT 281",
      title: "Elektromekanik Bel Tipi Turnike Sistemi",
      image: BEL_TURNIKE_IMAGES.bt10,
      features: ["Özel Tasarım", "Kişiye Özel", "Estetik Çözüm", "Markalama"],
      price: "Fiyat İçin Ara",
      description: "Kurumsal kimliğe uygun özel tasarım imkanı."
    },
    {
      id: "t250-jetonlu",
      model: "MT 250",
      title: "Jetonlu Turnike Sistemi (WC Turnikesi)",
      image: BEL_TURNIKE_IMAGES.bt11,
      features: ["Jeton Okuyucu Sistemi", "Güvenli Para Kasası", "Otomatik Tahsilat Sistemi", "WC ve Tuvalet Turnikesi", "Para Üstü Verme", "Kullanım Sayısı Raporu"],
      price: "Fiyat İçin Ara",
      description: "Ücretli geçişler için jetonlu tahsilat sistemi."
    },
    {
      id: "t345-jetonlu",
      model: "MT 345",
      title: "Jetonlu Turnike Sistemi (WC Turnikesi)",
      image: BEL_TURNIKE_IMAGES.bt12,
      features: ["Çoklu Ödeme", "Dijital Ekran", "Para Üstü", "Rapor Sistemi"],
      price: "Fiyat İçin Ara",
      description: "Gelişmiş ödeme seçenekleri ile tahsilat turnike sistemi."
    }
  ];


  const referansResimler = [
    "/ref-1.png",
    "/ref-2.png", 
    "/ref-3.png",
    "/ref-4.png",
    "/ref-5.png",
    "/ref-6.png"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Bel Tipi Turnike Sistemleri - Üç Kollu Turnikeler | Mika Teknoloji</title>
        <meta name="description" content="Paslanmaz çelik bel tipi turnike sistemleri. Elektromekanik, jetonlu ve özel tasarım turnike modelleri. Güvenli geçiş kontrolü için profesyonel çözümler." />
        <meta name="keywords" content="bel tipi turnike, üç kollu turnike, tripod turnike, turnike sistemleri, paslanmaz çelik turnike, elektromekanik turnike, jetonlu turnike" />
        
        <meta property="og:title" content="Bel Tipi Turnike Sistemleri | Mika Teknoloji" />
        <meta property="og:description" content="Güvenli geçiş kontrolü için paslanmaz çelik bel tipi turnike sistemleri. 12 farklı model seçeneği ile." />
        <meta property="og:image" content="https://mikateknoloji.com/attached_assets/stock_images/tripod_waist_height__f6c103da.jpg" />
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {belTurnikeModelleri.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[3/2]">
                    <img 
                      src={model.image}
                      alt={model.title}
                      className="w-full h-full object-contain sm:object-cover bg-gray-50 group-hover:scale-105 transition-transform duration-300"
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
                        <Link href={
                          model.id === "t250" ? "/urunler/mt-250-turnike" :
                          model.id === "t250-eco" ? "/urunler/t250-eco-turnike" :
                          model.id === "t345" ? "/urunler/t345-turnike" :
                          model.id === "t250-jetonlu" ? "/urunler/jetonlu-t250-turnike" :
                          "#"
                        }>
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
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
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
                  className="w-full h-full object-contain sm:object-cover bg-gray-100 hover:scale-105 transition-transform duration-300"
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