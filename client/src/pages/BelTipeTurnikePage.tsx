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
import TurnikeReferanslari from "@/components/TurnikeReferanslari";
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
      features: ["Endüstriyel Dayanıklılık", "Yoğun Trafik Kapasitesi", "Su ve Toz Direnci", "Güçlü Servo Motor", "Ağır Hizmet Tipi Mekanizma"],
      price: "Fiyat İçin Ara",
      description: "Fabrikalar, endüstriyel tesisler ve ağır sanayi alanında yoğun trafiğe uygun profesyonel turnike sistemi."
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Bel Tipi Turnike Sistemleri - Üç Kollu Turnikeler | Mika Teknoloji</title>
        <meta name="description" content="Paslanmaz çelik bel tipi turnike sistemleri. Elektromekanik, jetonlu ve özel tasarım turnike modelleri. Güvenli geçiş kontrolü için profesyonel çözümler." />
        <meta name="keywords" content="bel tipi turnike, üç kollu turnike, tripod turnike, turnike sistemleri, paslanmaz çelik turnike, elektromekanik turnike, jetonlu turnike" />
        
        <meta property="og:title" content="Bel Tipi Turnike Sistemleri | Mika Teknoloji" />
        <meta property="og:description" content="Güvenli geçiş kontrolü için paslanmaz çelik bel tipi turnike sistemleri. 12 farklı model seçeneği ile." />
        <meta property="og:image" content="https://mikateknoloji.com/images/products/tripod-waist-height.jpg" />
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

          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
            {belTurnikeModelleri.map((model, index) => (
              <motion.div
                key={model.id}
                initial={false}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="relative overflow-hidden aspect-[3/2] xs:aspect-[4/3] sm:aspect-[3/2] md:aspect-[4/3]">
                    <img 
                      src={model.image}
                      alt={model.title}
                      className="w-full h-full object-cover xs:object-contain sm:object-cover bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <Badge className="bg-white text-slate-800 border border-slate-200 hover:bg-white absolute top-3 left-3">
                      {model.model}
                    </Badge>
                  </div>
                  <CardContent className="p-3 xs:p-4 sm:p-6">
                    <h3 className="font-bold text-gray-900 mb-1 xs:mb-2 text-sm xs:text-base group-hover:text-primary transition-colors">
                      {model.title}
                    </h3>
                    <p className="text-gray-600 text-xs xs:text-sm mb-2 xs:mb-4">
                      {model.description}
                    </p>
                    
                    <div className="space-y-1 xs:space-y-2 mb-3 xs:mb-6">
                      {model.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-xs xs:text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-primary font-bold">
                        {model.price}
                      </div>
                      <Button asChild size="sm">
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

      <TurnikeReferanslari />

      {/* Call to Action */}
      <div className="py-16 bg-slate-900 border-t-4 border-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              İşletmeniz İçin En Uygun Turnike Sistemini Belirleyelim
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Keşif ve detaylı teklif için bize ulaşın. 
              İhtiyacınıza uygun çözümü birlikte belirleyelim.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Phone className="h-8 w-8 mx-auto mb-3" />
                <div className="font-semibold mb-1">Telefon</div>
                <a href="tel:+905467122296" className="block text-white/90 hover:underline">0546 712 22 96</a>
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
              <Button asChild size="lg">
                <Link href="/iletisim">
                  Keşif Talep Edin
                </Link>
              </Button>
              <Button asChild size="lg" variant="outlineLight">
                <Link href="/iletisim">
                  Teklif Al
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}