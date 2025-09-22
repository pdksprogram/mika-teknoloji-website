import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { 
  CheckCircle, 
  Phone,
  Mail,
  MapPin,
  Accessibility,
  Users,
  Shield,
  Clock
} from "lucide-react";
import { ENGELLI_TURNIKE_IMAGES } from "@/assetsMap";
import { Link } from "wouter";

export default function EngelliTurnikePage() {
  
  const engelliTurnikeModelleri = [
    {
      id: "mt-sc324b",
      model: "MT SC324B",
      title: "VIP Turnike Sistemi",
      image: ENGELLI_TURNIKE_IMAGES.et1,
      features: ["Engelli Erişimi", "Geniş Geçiş Alanı", "Otomatik Açılma", "Sensörlü Sistem", "VIP Tasarım", "Kartlı/Şifreli Okuyucu"],
      price: "Fiyat İçin Ara",
      description: "Engelli bireyler için özel tasarlanmış geniş geçişli VIP turnike sistemi. Tekerlekli sandalye ve baston kullanıcıları için ideal."
    },
    {
      id: "mt-sc324c",
      model: "MT SC324C",
      title: "Kristal VIP Turnike Sistemi",
      image: ENGELLI_TURNIKE_IMAGES.et2,
      features: ["Kristal Tasarım", "Engelli Dostu", "Otomatik Kapı", "LED Göstergeler", "Premium Malzeme", "Uzaktan Kontrol"],
      price: "Fiyat İçin Ara",
      description: "Kristal cam panelli modern VIP turnike. Engelli erişimi için geniş geçiş alanı ve otomatik açılma özelliği."
    },
    {
      id: "mt-230mvip",
      model: "MT 230 MVIP",
      title: "Slim VIP Turnike Sistemi",
      image: ENGELLI_TURNIKE_IMAGES.et3,
      features: ["Kompakt Tasarım", "VIP Erişim", "Slim Profil", "Akıllı Sensörler", "Sessiz Çalışma", "Dayanıklı Yapı"],
      price: "Fiyat İçin Ara",
      description: "Dar alanlarda kullanılabilen kompakt VIP turnike. Engelli ve yaşlı bireyler için özel tasarım özellikleri."
    },
    {
      id: "mt-150mswg",
      model: "MT 150 MSWG",
      title: "Motorlu VIP Turnike Sistemi",
      image: ENGELLI_TURNIKE_IMAGES.et4,
      features: ["Motorlu Hareket", "VIP Kontrol", "Düşük Ses", "Otomatik Kilit", "Güvenlik Sensörleri", "Acil Açılma"],
      price: "Fiyat İçin Ara",
      description: "Motorlu hareket sistemi ile donatılmış VIP turnike. Engelli bireyler için tam otomatik geçiş kontrolü."
    },
    {
      id: "mt-150mswg-g",
      model: "MT 150 MSWG-G",
      title: "Motorlu G Kollu VIP Turnike",
      image: ENGELLI_TURNIKE_IMAGES.et5,
      features: ["G Kollu Tasarım", "Motorlu Sistem", "VIP Erişim", "Gelişmiş Güvenlik", "Otomatik Kontrol", "Uzun Ömür"],
      price: "Fiyat İçin Ara",
      description: "G kollu motorlu VIP turnike sistemi. Yüksek güvenlik ve engelli erişimi için özel tasarlanmış."
    },
    {
      id: "mt-t80-yaprak",
      model: "MT T80",
      title: "Yaprak Turnike Sistemi",
      image: ENGELLI_TURNIKE_IMAGES.et6,
      features: ["Yaprak Kapı Sistemi", "Engelli Dostu", "Geniş Açılma", "Kolay Geçiş", "Güvenlik Kontrollü", "Dayanıklı Yapı"],
      price: "Fiyat İçin Ara",
      description: "Yaprak kapı sistemi ile geniş geçiş alanı sunan turnike. Engelli ve yaşlı bireyler için ideal çözüm."
    },
    {
      id: "mt-t80-manyetik",
      model: "MT T80 Manyetik",
      title: "Manyetik Kilitli Yaprak Turnike",
      image: ENGELLI_TURNIKE_IMAGES.et7,
      features: ["Manyetik Kilit", "Yaprak Kapı", "Otomatik Kilitleme", "Güvenlik Sensörleri", "Acil Açılma", "VIP Erişim"],
      price: "Fiyat İçin Ara",
      description: "Manyetik kilit sistemli yaprak turnike. Yüksek güvenlik ve engelli erişimi için gelişmiş teknoloji."
    },
    {
      id: "mt-tmt4",
      model: "MT TMT4",
      title: "Kelebek Turnike Sistemi",
      image: ENGELLI_TURNIKE_IMAGES.et8,
      features: ["Kelebek Kapı", "Geniş Geçiş", "Otomatik Hareket", "Engelli Erişimi", "Güvenlik Kontrollü", "Modern Tasarım"],
      price: "Fiyat İçin Ara",
      description: "Kelebek kapı sistemi ile geniş geçiş alanı. Engelli bireyler için konforlu ve güvenli geçiş imkanı."
    },
    {
      id: "mt-seperator",
      model: "MT Seperatör",
      title: "Turnike Seperatör Sistemi",
      image: ENGELLI_TURNIKE_IMAGES.et9,
      features: ["Alan Ayırıcı", "Modüler Yapı", "Kolay Montaj", "Dayanıklı Malzeme", "Estetik Tasarım", "Çok Amaçlı Kullanım"],
      price: "Fiyat İçin Ara",
      description: "Turnike sistemleri için alan ayırıcı seperatör. Düzenli sıra oluşturma ve alan yönetimi için ideal."
    }
  ];

  const referansResimler = [
    "/reference1.jpg",
    "/reference2.jpg", 
    "/reference3.jpg",
    "/reference4.jpg",
    "/reference5.jpg",
    "/reference6.jpg",
    "/reference7.jpg",
    "/reference8.jpg"
  ];

  return (
    <>
      <Helmet>
        <title>Engelli Turnike Sistemleri - VIP Turnikeler | Mika Teknoloji</title>
        <meta name="description" content="Engelli bireyler için özel tasarlanmış turnike sistemleri. VIP turnikeler, yaprak kapılar ve otomatik geçiş kontrol sistemleri. Tekerlekli sandalye uyumlu." />
        <meta name="keywords" content="engelli turnike, vip turnike, yaprak kapı, otomatik turnike, tekerlekli sandalye, engelli erişim, mika teknoloji" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary via-pink-500 to-orange-400 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Accessibility className="h-12 w-12 text-white" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Engelli Turnike Sistemleri
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              VIP Turnikeler ve Engelli Erişim Çözümleri
            </p>
            <p className="text-lg mb-8 text-white/80 max-w-3xl mx-auto">
              Tekerlekli sandalye kullanıcıları, yaşlılar ve hareket kısıtlılığı olan bireyler için özel tasarlanmış turnike sistemleri. 
              Geniş geçiş alanı, otomatik açılma ve VIP erişim özellikleri.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="#modeller">Ürünleri İncele</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <Link href="/iletisim">Teklif Al</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Özellikler */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Engelli Turnike Özelliklerimiz
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Erişilebilirlik standartlarına uygun, güvenli ve konforlu geçiş deneyimi sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Accessibility className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Engelli Erişimi</h3>
              <p className="text-gray-600 text-sm">Tekerlekli sandalye ve baston kullanıcıları için geniş geçiş alanı</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">VIP Hizmet</h3>
              <p className="text-gray-600 text-sm">Özel kullanıcılar için öncelikli ve konforlu geçiş sistemi</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Güvenlik</h3>
              <p className="text-gray-600 text-sm">Gelişmiş sensör sistemleri ve güvenlik kontrolleri</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Otomatik Sistem</h3>
              <p className="text-gray-600 text-sm">Sensörlü otomatik açılma ve kapanma mekanizması</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Ürün Modelleri */}
      <div id="modeller" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Engelli Turnike Modelleri
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              VIP erişim, yaprak kapılar ve otomatik geçiş kontrol sistemleri. Her ihtiyaca uygun engelli dostu turnike çözümleri.
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
            {engelliTurnikeModelleri.map((model, index) => (
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
                    <Badge className="absolute top-3 left-3 bg-green-600 text-white">
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
                          model.id === "mt-sc324b" ? "/urunler/mt-sc324b-vip-turnike" :
                          model.id === "mt-230mvip" ? "/urunler/mt-230mvip-slim-vip-turnike" :
                          model.id === "mt-t80-yaprak" ? "/urunler/mt-t80-yaprak-turnike" :
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
              Engelli Turnike Referanslarımız
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kamu binaları, alışveriş merkezleri ve özel kurumlarda engelli dostu geçiş sistemlerimiz.
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
                  alt={`Engelli Turnike Referans ${index + 1}`}
                  className="w-full h-full object-cover xs:object-contain sm:object-cover bg-gray-100 hover:scale-105 transition-transform duration-300"
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
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Engelli Dostu Turnike Sistemleri
            </h2>
            <p className="text-xl mb-8">
              Erişilebilirlik standartlarına uygun, güvenli ve konforlu geçiş çözümleri için hemen iletişime geçin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/iletisim">Ücretsiz Keşif</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <a href="tel:+902123456789">
                  <Phone className="mr-2 h-4 w-4" />
                  Hemen Ara
                </a>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+90 212 345 67 89</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@mikateknoloji.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>İstanbul, Türkiye</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}