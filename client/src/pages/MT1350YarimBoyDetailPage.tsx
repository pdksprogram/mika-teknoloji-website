import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { 
  CheckCircle, 
  Shield, 
  Zap, 
  Users, 
  Phone,
  Mail,
  MapPin,
  Download,
  ArrowLeft,
  Building2,
  Factory,
  Briefcase,
  Clock
} from "lucide-react";
import { BOY_TURNIKE_IMAGES } from "@/assetsMap";
import { Link } from "wouter";

export default function MT1350YarimBoyDetailPage() {
  
  const teknikOzellikler = [
    { ozellik: "Kontrol Voltajı", deger: "24VDC ±20%" },
    { ozellik: "Güç Tüketimi", deger: "25 W" },
    { ozellik: "Çalışma Sıcaklığı", deger: "-15°C - +60°C" },
    { ozellik: "Geçiş Hızı", deger: "35 Kişi / Dakika" },
    { ozellik: "Geçiş Aralığı", deger: "Max. 550 mm" },
    { ozellik: "Turnike Yüksekliği", deger: "1350 mm (Yarım Boy)" },
    { ozellik: "Malzeme", deger: "304 Paslanmaz Çelik" },
    { ozellik: "Mekanizma", deger: "Elektromekanik Sistem" },
    { ozellik: "Koruma Standardı", deger: "IP 54" },
    { ozellik: "Kullanım Alanları", deger: "İç Ortam / Yarı Açık Alan" }
  ];

  const ozellikler = [
    "Yarım boy yüksekliğinde (1350mm) güvenlik engeli",
    "Elektromekanik çalışma sistemi",
    "Hızlı geçiş imkanı (35 kişi/dakika)",
    "Kompakt ve alan tasarruflu tasarım",
    "3 kollu döner kapı sistemi",
    "LED geçiş göstergeleri",
    "Kartlı geçiş kontrol desteği",
    "Sensörlü güvenlik sistemi",
    "Düşük enerji tüketimi",
    "Kolay kurulum ve bakım",
    "Sessiz çalışma teknolojisi",
    "Dayanıklı paslanmaz çelik yapı"
  ];

  const kullanimAlanlari = [
    { icon: Building2, title: "Ofis Binaları", description: "Orta seviye güvenlik gerektiren ofisler" },
    { icon: Factory, title: "Küçük Tesisler", description: "Atölye ve üretim alanları" },
    { icon: Briefcase, title: "Ticaret Merkezleri", description: "Mağaza ve AVM girişleri" },
    { icon: Building2, title: "Eğitim Kurumları", description: "Okul ve dershane girişleri" },
    { icon: Clock, title: "Çalışma Saatleri", description: "Mesai kontrol alanları" },
    { icon: Factory, title: "Depo Alanları", description: "Lojistik ve depolama tesisleri" }
  ];

  const avantajlar = [
    "Boy yüksekliğinden düşük maliyet",
    "Hızlı kurulum ve devreye alma",
    "Düşük elektrik tüketimi",
    "Minimum bakım gereksinimi",
    "Kompakt alan kullanımı",
    "Çok amaçlı kullanım imkanı"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>MT 1350 Elektromekanik Yarım Boy Turnike Sistemi | Mika Teknoloji</title>
        <meta name="description" content="MT 1350 elektromekanik yarım boy turnike sistemi. 1350mm yükseklik, 35 kişi/dakika kapasitesi. Ofis ve ticaret merkezleri için ideal çözüm." />
        <meta name="keywords" content="MT 1350, yarım boy turnike, elektromekanik turnike, ofis güvenliği, ticaret merkezi turnike, düşük profil turnike" />
        
        <meta property="og:title" content="MT 1350 Elektromekanik Yarım Boy Turnike | Mika Teknoloji" />
        <meta property="og:description" content="Orta seviye güvenlik alanları için MT 1350 elektromekanik yarım boy turnike sistemi." />
        <meta property="og:image" content="https://mikateknoloji.com/yarim-boy-turnike-sistemi-t1350-elektromekanik-turnike.jpg" />
        <meta property="og:url" content="https://mikateknoloji.com/urunler/mt1350-yarim-boy" />
        
        <link rel="canonical" href="https://mikateknoloji.com/urunler/mt1350-yarim-boy" />
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/urunler" className="hover:text-primary">Ürünler</Link>
            <span>/</span>
            <Link href="/urunler/boy-tipi-turnike" className="hover:text-primary">Boy Tipi Turnikeler</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">MT 1350 Yarım Boy</span>
          </div>
        </div>
      </div>

      {/* Ürün Detayı */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Ürün Görseli */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-100 text-green-800">
                    Yarım Boy
                  </Badge>
                </div>
                <img 
                  src={BOY_TURNIKE_IMAGES.bt13}
                  alt="MT 1350 Elektromekanik Yarım Boy Turnike"
                  className="w-full h-auto rounded-xl shadow-md"
                />
              </div>
            </motion.div>

            {/* Ürün Bilgileri */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <Badge className="bg-green-100 text-green-800 mb-3">Yarım Boy Serisi</Badge>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  MT 1350 Elektromekanik Yarım Boy Turnike Sistemi
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Orta seviye güvenlik gerektiren alanlar için tasarlanmış elektromekanik yarım boy turnike sistemi. 
                  1350mm yüksekliği ile hızlı geçiş imkanı sunarken, etkili güvenlik kontrolü sağlar.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">35 Kişi/Dakika</div>
                  <div className="text-sm text-gray-600">Hızlı Geçiş</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">1350mm</div>
                  <div className="text-sm text-gray-600">Yarım Boy Yükseklik</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 flex-1">
                  <Phone className="h-5 w-5 mr-2" />
                  Ekonomik Fiyat Al
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  <Download className="h-5 w-5 mr-2" />
                  Teknik Doküman
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Özellikler */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  Sistem Özellikleri
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {ozellikler.map((ozellik, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{ozellik}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  Ekonomik Avantajlar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {avantajlar.map((avantaj, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{avantaj}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Teknik Özellikler */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-6 w-6 text-yellow-600" />
                  Teknik Özellikler
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  {teknikOzellikler.map((teknik, index) => (
                    <div key={index} className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="font-medium text-gray-900">{teknik.ozellik}:</span>
                      <span className="text-gray-700">{teknik.deger}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Kullanım Alanları */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">İdeal Kullanım Alanları</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                MT 1350 Yarım Boy turnike sistemi, orta seviye güvenlik gerektiren ve hızlı geçiş ihtiyacı olan alanlarda kullanılır.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kullanimAlanlari.map((alan, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <alan.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2">{alan.title}</h3>
                    <p className="text-gray-600 text-sm">{alan.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Karşılaştırma Tablosu */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Yarım Boy vs Tam Boy Karşılaştırma</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold">Özellik</th>
                        <th className="text-center py-3 px-4 font-semibold text-green-700">MT 1350 Yarım Boy</th>
                        <th className="text-center py-3 px-4 font-semibold text-blue-700">MT 2500D Tam Boy</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">Yükseklik</td>
                        <td className="py-3 px-4 text-center">1350mm</td>
                        <td className="py-3 px-4 text-center">2500mm</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">Geçiş Hızı</td>
                        <td className="py-3 px-4 text-center text-green-600 font-semibold">35 kişi/dk</td>
                        <td className="py-3 px-4 text-center">30 kişi/dk</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">Güvenlik Seviyesi</td>
                        <td className="py-3 px-4 text-center">Orta Seviye</td>
                        <td className="py-3 px-4 text-center text-blue-600 font-semibold">Yüksek Seviye</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">Maliyet</td>
                        <td className="py-3 px-4 text-center text-green-600 font-semibold">Ekonomik</td>
                        <td className="py-3 px-4 text-center">Yüksek</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Kullanım Alanı</td>
                        <td className="py-3 px-4 text-center">Ofis, Mağaza</td>
                        <td className="py-3 px-4 text-center">Havalimanı, Stadyum</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* İletişim CTA */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center"
          >
            <h2 className="text-2xl font-bold mb-4">
              MT 1350 Yarım Boy Turnike ile Ekonomik Güvenlik Çözümü
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Hızlı kurulum ve uygun maliyetle güvenlik ihtiyacınızı karşılayın. Uzman ekibimizden ücretsiz keşif hizmeti alın.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="h-8 w-8 mx-auto mb-2" />
                <div className="font-semibold mb-1">Hızlı Destek</div>
                <div className="text-white/90">0212 XXX XX XX</div>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 mx-auto mb-2" />
                <div className="font-semibold mb-1">E-posta</div>
                <div className="text-white/90">info@mikateknoloji.com</div>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 mx-auto mb-2" />
                <div className="font-semibold mb-1">Adres</div>
                <div className="text-white/90">İstanbul, Türkiye</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Link href="/iletisim">
                  Ekonomik Keşif Al
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Hızlı Teklif İste
              </Button>
            </div>
          </motion.div>

          {/* Geri Dön */}
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/urunler/boy-tipi-turnike">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Boy Tipi Turnike Modelleri
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}