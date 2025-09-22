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
import { BOY_TURNIKE_IMAGES } from "@/assetsMap";
import { Link } from "wouter";

export default function BoyTipeTurnikePage() {
  
  const boyTurnikeModelleri = [
    {
      id: "mt2500d-single-3",
      model: "MT 2500D Single",
      title: "3 Kollu Boy Tipi Turnike Sistemi",
      image: BOY_TURNIKE_IMAGES.bt1,
      features: ["Single Yön Kontrolü", "3 Kollu Paslanmaz Çelik", "Boy Yüksekliği Engel", "LED Durum Göstergesi", "Güvenlik Sensörleri", "Kartlı/Şifreli Okuyucu Desteği"],
      price: "Fiyat İçin Ara",
      description: "Havalimanları, metro istasyonları ve yüksek güvenlik alanları için tek yönlü geçiş kontrolü sağlayan boy yüksekliğinde turnike sistemi."
    },
    {
      id: "mt2500d-single-4",
      model: "MT 2500D Single",
      title: "4 Kollu Boy Tipi Turnike Sistemi",
      image: BOY_TURNIKE_IMAGES.bt2,
      features: ["Single Yön Kontrolü", "4 Kollu Güçlendirilmiş Yapı", "Yüksek Güvenlik", "Anti-Tailgating", "Gelişmiş Sensör Sistemi"],
      price: "Fiyat İçin Ara",
      description: "Daha yüksek güvenlik gerektiren alanlar için 4 kollu güçlendirilmiş boy tipi turnike sistemi."
    },
    {
      id: "mt2500d-double-3",
      model: "MT 2500D Double",
      title: "3 Kollu Çift Yönlü Boy Tipi Turnike",
      image: BOY_TURNIKE_IMAGES.bt3,
      features: ["Çift Yönlü Geçiş", "3 Kollu Tasarım", "Yoğun Trafik Yönetimi", "LED Yön Göstergesi", "Akıllı Kontrol Sistemi"],
      price: "Fiyat İçin Ara",
      description: "Çift yönlü geçişe izin veren 3 kollu boy tipi turnike sistemi. Yoğun trafik alanları için ideal."
    },
    {
      id: "mt2500d-double-4",
      model: "MT 2500D Double",
      title: "4 Kollu Çift Yönlü Boy Tipi Turnike",
      image: BOY_TURNIKE_IMAGES.bt4,
      features: ["Çift Yönlü Geçiş", "4 Kollu Güvenlik", "Maksimum Güvenlik", "Yoğun Kullanım", "Profesyonel Kontrol"],
      price: "Fiyat İçin Ara",
      description: "En yüksek güvenlik seviyesi için 4 kollu çift yönlü boy tipi turnike sistemi."
    },
    {
      id: "mt2500k-single-3",
      model: "MT 2500K Single",
      title: "3 Kollu Kompakt Boy Tipi Turnike",
      image: BOY_TURNIKE_IMAGES.bt5,
      features: ["Kompakt Tasarım", "3 Kollu Sistem", "Az Yer Kaplar", "Kolay Kurulum", "Maliyet Etkin Çözüm"],
      price: "Fiyat İçin Ara",
      description: "Dar alanlar için tasarlanmış kompakt 3 kollu boy tipi turnike sistemi."
    },
    {
      id: "mt2500k-single-4",
      model: "MT 2500K Single",
      title: "4 Kollu Kompakt Boy Tipi Turnike",
      image: BOY_TURNIKE_IMAGES.bt6,
      features: ["Kompakt 4 Kollu", "Gelişmiş Güvenlik", "Space-Saving Tasarım", "LED Göstergeler", "Yüksek Performans"],
      price: "Fiyat İçin Ara",
      description: "Kompakt tasarımda 4 kollu boy tipi turnike sistemi. Yüksek güvenlik, minimal alan."
    },
    {
      id: "mt2500k-double-3",
      model: "MT 2500K Double",
      title: "3 Kollu Çift Yönlü Kompakt Turnike",
      image: BOY_TURNIKE_IMAGES.bt7,
      features: ["Kompakt Çift Yön", "3 Kollu Tasarım", "Hızlı Geçiş", "Akıllı Sensörler", "Düşük Bakım"],
      price: "Fiyat İçin Ara",
      description: "Çift yönlü geçiş imkanı sunan kompakt 3 kollu boy tipi turnike sistemi."
    },
    {
      id: "mt2500k-double-4",
      model: "MT 2500K Double",
      title: "4 Kollu Çift Yönlü Kompakt Turnike",
      image: BOY_TURNIKE_IMAGES.bt8,
      features: ["Kompakt Çift Yön", "4 Kollu Güvenlik", "Maximum Verimlilik", "Gelişmiş Teknoloji", "Profesyonel Çözüm"],
      price: "Fiyat İçin Ara",
      description: "En gelişmiş kompakt boy tipi turnike sistemi. 4 kollu çift yönlü güvenlik."
    },
    {
      id: "mt2500d-eco-3",
      model: "MT 2500D ECO",
      title: "3 Kollu Ekonomik Boy Tipi Turnike",
      image: BOY_TURNIKE_IMAGES.bt9,
      features: ["Ekonomik Fiyat", "3 Kollu Yapı", "Temel Güvenlik", "Kolay Bakım", "Güvenilir Çalışma"],
      price: "Fiyat İçin Ara",
      description: "Bütçe dostu fiyatıyla ekonomik boy tipi turnike çözümü."
    },
    {
      id: "mt2500k-eco-3",
      model: "MT 2500K ECO",
      title: "3 Kollu Ekonomik Kompakt Turnike",
      image: BOY_TURNIKE_IMAGES.bt10,
      features: ["Ekonomik Kompakt", "3 Kollu Sistem", "Düşük Maliyet", "Space-Saving", "Temel Özellikler"],
      price: "Fiyat İçin Ara",
      description: "Ekonomik fiyatlı kompakt boy tipi turnike sistemi."
    },
    {
      id: "mt2500k-kristal-3",
      model: "MT 2500K Kristal",
      title: "3 Kollu Kristal Boy Tipi Turnike",
      image: BOY_TURNIKE_IMAGES.bt11,
      features: ["Premium Kristal Tasarım", "Şeffaf Panel", "Modern Estetik", "Lux Görünüm", "VIP Alanlar İçin"],
      price: "Fiyat İçin Ara",
      description: "Premium kristal panelli boy tipi turnike sistemi. Lux mekânlar için özel tasarım."
    },
    {
      id: "mt2500k-double-eco-3",
      model: "MT 2500K Double ECO",
      title: "3 Kollu Çift Yönlü Ekonomik Turnike",
      image: BOY_TURNIKE_IMAGES.bt12,
      features: ["Ekonomik Çift Yön", "3 Kollu Kompakt", "Maliyet Etkin", "İki Yönlü Geçiş", "Pratik Çözüm"],
      price: "Fiyat İçin Ara",
      description: "Çift yönlü geçiş imkanı sunan ekonomik boy tipi turnike sistemi."
    },
    {
      id: "mt1350-yarim",
      model: "MT 1350",
      title: "Elektromekanik Yarım Boy Turnike",
      image: BOY_TURNIKE_IMAGES.bt13,
      features: ["Yarım Boy Yüksekliği", "Elektromekanik Sistem", "Kompakt Çözüm", "Hızlı Geçiş", "Düşük Profil"],
      price: "Fiyat İçin Ara",
      description: "Orta yükseklikli alanlar için yarım boy turnike sistemi."
    },
    {
      id: "mt1400-yarim",
      model: "MT 1400",
      title: "Elektromekanik Yarım Boy Turnike",
      image: BOY_TURNIKE_IMAGES.bt14,
      features: ["Gelişmiş Yarım Boy", "Güçlü Elektromekanik", "Modern Tasarım", "Yüksek Performans", "Dayanıklı Yapı"],
      price: "Fiyat İçin Ara",
      description: "Gelişmiş özelliklerle yarım boy turnike sistemi."
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
        <title>Boy Tipi Turnike Sistemleri - Full Height Turnikeler | Mika Teknoloji</title>
        <meta name="description" content="Boy yüksekliğinde turnike sistemleri. Single, double, kompakt ve kristal modelleri. Havalimanı, metro ve yüksek güvenlik alanları için profesyonel çözümler." />
        <meta name="keywords" content="boy tipi turnike, full height turnike, yüksek güvenlik turnike, havalimanı turnike, metro turnike, MT2500D, MT2500K" />
        
        <meta property="og:title" content="Boy Tipi Turnike Sistemleri | Mika Teknoloji" />
        <meta property="og:description" content="Yüksek güvenlik alanları için boy tipi turnike sistemleri. 14 farklı model seçeneği ile." />
        <meta property="og:image" content="https://mikateknoloji.com/t-2500d-single-3-kollu-paslanmaz-turnike.jpg" />
        <meta property="og:url" content="https://mikateknoloji.com/urunler/boy-tipi-turnike" />
        
        <link rel="canonical" href="https://mikateknoloji.com/urunler/boy-tipi-turnike" />
      </Helmet>

      {/* Ürün Katalogu */}
      <div className="pt-8 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Boy Tipi Turnike Modelleri
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Yüksek güvenlik gerektiren alanlar için boy yüksekliğinde turnike sistemleri. Havalimanları, metro istasyonları ve özel güvenlik alanları için ideal çözümler.
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
            {boyTurnikeModelleri.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ y: 20, opacity: 0 }}
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
                    <Badge className="absolute top-3 left-3 bg-blue-600 text-white">
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
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700 text-xs xs:text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-primary font-bold">
                        {model.price}
                      </div>
                      <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                        <Link href={
                          model.id === "mt2500d-single-3" ? "/urunler/mt2500d-single-3-kollu" :
                          model.id === "mt2500k-kristal-3" ? "/urunler/mt2500k-kristal" :
                          model.id === "mt1350-yarim" ? "/urunler/mt1350-yarim-boy" :
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
              Boy Tipi Turnike Referanslarımız
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Havalimanları, metro istasyonları ve yüksek güvenlik alanlarında tercih edilen boy tipi turnike sistemlerimiz.
            </p>
          </div>
          
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 xs:gap-3 sm:gap-4">
            {referansResimler.map((resim, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="aspect-square rounded-md xs:rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <img 
                  src={resim}
                  alt={`Boy Tipi Turnike Referans ${index + 1}`}
                  className="w-full h-full object-cover xs:object-contain sm:object-cover bg-gray-100 hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              İşletmeniz İçin En Uygun Boy Tipi Turnike Sistemini Belirleyelim
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Yüksek güvenlik alanları için uzman keşif ve detaylı teklif hizmeti. 
              20+ yıllık deneyimimizle en güvenli çözümü sunuyoruz.
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
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/iletisim">
                  Ücretsiz Güvenlik Keşfi
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Boy Tipi Teklif Al
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}