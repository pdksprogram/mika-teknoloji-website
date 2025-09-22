import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { 
  ChevronRight, 
  Phone, 
  Download,
  CheckCircle,
  Shield,
  Users,
  Zap,
  Settings,
  Clock,
  ArrowLeft
} from "lucide-react";
import { BEL_TURNIKE_IMAGES } from "@/assetsMap";
import { Link } from "wouter";

export default function MT250DetailPage() {
  
  const technicalSpecs = [
    { label: "Kontrol / Çalışma Voltajı", value: "100-230 VAC 50/60 Hz" },
    { label: "Güç Tüketimi", value: "30 W" },
    { label: "Çalışma Sıcaklığı", value: "-20° C - +70° C" },
    { label: "Opsiyonel Isıtıcı İle", value: "-30° C" },
    { label: "Geçiş Hızı", value: "30 Kişi / Dakika" },
    { label: "Geçiş Aralığı", value: "Min. 42 cm / Max. 47 cm" },
    { label: "Ağırlık", value: "32 Kg" },
    { label: "Kullanım Alanları", value: "İç Ortam / Dış Ortam" },
    { label: "Koruma", value: "IP 54 (Op. IP 65)" }
  ];

  const optionalAccessories = [
    "Düşen kol mekanizması",
    "Biyometrik okuyucu entegrasyonu", 
    "Kart okuyucu sistemi",
    "Buton kontrol ünitesi",
    "Uzaktan kumanda ünitesi",
    "Sayaç bağlantı sistemi"
  ];

  const applicationAreas = [
    "Toplu taşıma alanları",
    "Üniversiteler", 
    "Bankalar",
    "İş merkezleri",
    "Eğlence parkları",
    "Müzeler",
    "Spor salonları",
    "Konser girişleri"
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: "Elektrik Kesintisi Güvenliği",
      description: "Elektrik kesildiğinde kollar serbest geçiş imkanı verir"
    },
    {
      icon: Users,
      title: "Acil Durum Sistemi",
      description: "Düşen kol mekanizması ile hızlı mekan boşaltma"
    },
    {
      icon: Clock,
      title: "Zaman Aşımı Koruması", 
      description: "15 saniye sonra sesli uyarı ve otomatik kilitleme"
    },
    {
      icon: Zap,
      title: "LED Yönlendirme",
      description: "Kırmızı çarpı ve yeşil ok ile geçiş yön gösterimi"
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
        <title>MT-250 Elektromekanik Bel Tipi Turnike Sistemi | Mika Teknoloji</title>
        <meta name="description" content="MT-250 üç kollu bel tipi turnike sistemi. 304 paslanmaz çelik, 30 kişi/dakika geçiş kapasitesi, IP54 koruma. Detaylı teknik özellikler ve fiyat bilgisi." />
        <meta name="keywords" content="MT-250, bel tipi turnike, üç kollu turnike, elektromekanik turnike, paslanmaz çelik turnike, güvenlik sistemleri" />
        
        <meta property="og:title" content="MT-250 Elektromekanik Bel Tipi Turnike | Mika Teknoloji" />
        <meta property="og:description" content="304 paslanmaz çelik üç kollu bel tipi turnike sistemi. Yüksek güvenlik ve dayanıklılık." />
        <meta property="og:image" content="https://mikateknoloji.com/og-image.png" />
        <meta property="og:url" content="https://mikateknoloji.com/urunler/mt-250-turnike" />
        
        <link rel="canonical" href="https://mikateknoloji.com/urunler/mt-250-turnike" />
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/urunler/turnike" className="text-gray-600 hover:text-primary">
              Turnike Sistemleri
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/urunler/bel-tipi-turnike" className="text-gray-600 hover:text-primary">
              Bel Tipi Turnikeler
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-900 font-semibold">MT-250</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Back Button */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="mb-6"
          >
            <Button asChild variant="outline" size="sm">
              <Link href="/urunler/bel-tipi-turnike">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Bel Tipi Turnikelere Dön
              </Link>
            </Button>
          </motion.div>

          {/* Header Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 px-4 py-2 bg-primary text-white">
              Elektromekanik Model
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              MT-250 Elektromekanik 3 Kollu Bel Tipi Turnike Sistemi
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            
            {/* Product Image */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="overflow-hidden">
                <img 
                  src={BEL_TURNIKE_IMAGES.bt1}
                  alt="MT-250 Elektromekanik Bel Tipi Turnike"
                  className="w-full h-96 object-cover"
                />
              </Card>
              
              {/* Sales Support Banner */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 bg-gradient-to-r from-primary to-pink-600 text-white p-4 rounded-lg text-center"
              >
                <div className="flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5" />
                  <div>
                    <div className="font-semibold">Mika Teknoloji Satış Destek</div>
                    <div className="text-sm opacity-90">0212 XXX XX XX</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              
              {/* Application Areas */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Uygulama Alanları
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    MT-250 bel tipi turnike, kalabalık alanlarda dahi sorunsuz bir uygulama sağlar:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {applicationAreas.map((area, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Material Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Materyal Özellikleri
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      <strong>MT-250 üç kollu bel tipi turnike</strong> standart olarak <strong>304 paslanmaz çelikten</strong> üretilir.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        Tüm kollar ve gövde 304 paslanmaz çelik
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        Göbek kısmı paslanmaya karşı alüminyum malzeme
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        Opsiyon olarak 316 paslanmaz çelik üretim
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        Özel hassas döküm teknolojisi ile kritik parçalar
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* General Usage */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  Genel Kullanım Özellikleri
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      <strong>MT-250 bel turnikesi</strong> çift yönlü geçiş sağlar. Kart okuyucu, 
                      parmak izi veya yüz tanıma gibi her türlü geçiş kontrol cihazı kolaylıkla entegre edilebilir.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Geçiş hakkı verildiğinde turnike kilidi açılır</li>
                      <li>• Hafifçe kollara dokunarak geçiş sağlanır</li>
                      <li>• Kolların bir tur dönmesi ile otomatik kilitleme</li>
                      <li>• 15 saniye geçiş yapılmazsa sesli uyarı</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Performans</h4>
                      <p className="text-sm text-gray-700">
                        Turnikeden <strong>1 dakikada 30'dan fazla geçiş</strong> yapılabilir.
                        Her iki tarafında geçiş yönünü gösteren kırmızı çarpı ve yeşil ok LED ışıklar mevcuttur.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Security Features */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Güvenlik Özellikleri</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Technical Specifications */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-16"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Teknik Özellikler
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <tbody>
                        {technicalSpecs.map((spec, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                            <td className="border border-gray-300 p-3 font-semibold text-gray-900">
                              {spec.label}
                            </td>
                            <td className="border border-gray-300 p-3 text-gray-700">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Opsiyonel Aksesuarlar</h4>
                    <div className="space-y-3">
                      {optionalAccessories.map((accessory, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{accessory}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        <Download className="h-4 w-4 mr-2" />
                        Ürün Broşürü İndir
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* References */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Turnike Sistemi Referanslarımız</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {referansResimler.map((resim, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="aspect-square rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <img 
                    src={resim}
                    alt={`Referans ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="bg-gradient-to-r from-primary to-pink-600 text-white rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">MT-250 Turnike Sistemi İçin Teklif Alın</h3>
            <p className="text-xl text-white/90 mb-6">
              Uzman ekibimizle iletişime geçin ve işletmeniz için en uygun çözümü keşfedin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Hemen Ara: 0212 XXX XX XX
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/iletisim">
                  Teklif Formu
                </Link>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}