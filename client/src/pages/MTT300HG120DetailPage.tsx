import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { 
  CheckCircle, 
  Phone,
  Mail,
  MapPin,
  ArrowLeft,
  Zap,
  Clock,
  TrendingUp,
  Settings,
  Activity
} from "lucide-react";
import { HIZLI_GECIS_TURNIKE_IMAGES } from "@/assetsMap";
import { Link } from "wouter";

export default function MTT300HG120DetailPage() {
  const urunDetay = {
    model: "MT T300 HG120",
    title: "Ultra Hızlı Geçiş Sistemi",
    image: HIZLI_GECIS_TURNIKE_IMAGES.hg6,
    price: "Fiyat İçin Ara",
    description: "En hızlı geçiş kapasiteli turnike sistemi. 120 kişi/dakika ultra kapasite ile mega alışveriş merkezleri ve büyük etkinlik alanları için tasarlandı.",
    
    teknikOzellikler: {
      "Geçiş Kapasitesi": "120 Kişi/Dakika",
      "Motor Tipi": "Ultra Hızlı Servo Motor",
      "Açılma Süresi": "0.15 Saniye",
      "Çoklu Geçiş": "Yığın Kontrol Modu",
      "Kasa Malzemesi": "316L Paslanmaz Çelik",
      "Boyutlar": "1600 x 450 x 1200 mm",
      "Ağırlık": "180 kg",
      "Çalışma Voltajı": "380V / 50Hz",
      "Güç Tüketimi": "600W",
      "Çalışma Sıcaklığı": "-30°C ~ +75°C",
      "IP Koruma": "IP65",
      "Akış Optimizasyonu": "Gerçek Zamanlı",
      "İletişim": "5G, Fiber Optik",
      "Analitik": "Big Data Destekli",
      "Merkezi Yönetim": "Cloud Tabanlı"
    },

    ozellikler: [
      "120 kişi/dakika ultra yüksek kapasite",
      "Çoklu geçiş modu desteği",
      "Yığın kontrol ve akış optimizasyonu",
      "Gerçek zamanlı veri analizi",
      "Big data destekli tahmin sistemi",
      "5G ve fiber optik bağlantı",
      "Ultra hızlı servo motor teknolojisi",
      "Cloud tabanlı merkezi yönetim",
      "316L paslanmaz çelik yapı",
      "Çoklu sensör teknolojisi",
      "AI destekli trafik yönetimi",
      "Otomatik kalibre sistemi"
    ],

    kullanımAlanlari: [
      "Mega alışveriş merkezleri",
      "Büyük etkinlik alanları",
      "Stadyum ve arena girişleri",
      "Kongre ve fuar merkezleri",
      "Büyük havaalanı terminalleri",
      "Metro ana transfer noktaları",
      "Büyük fabrika girişleri",
      "Üniversite merkez kampüsleri",
      "Devlet büyük kompleksleri",
      "Tema park ana girişleri"
    ],

    aksesuar: [
      "Ultra hızlı kart okuyucu seti",
      "Big data analitik yazılımı",
      "5G iletişim sistemi",
      "Fiber optik bağlantı modülü",
      "Cloud yönetim platformu",
      "AI trafik optimizasyon",
      "Çoklu güvenlik kamera sistemi",
      "Premium ses ve görüntü sistemi",
      "Otomatik bakım sistemi",
      "7/24 teknik destek paketi"
    ]
  };

  return (
    <>
      <Helmet>
        <title>MT T300 HG120 Ultra Hızlı Turnike - 120 Kişi/Dakika | Mika Teknoloji</title>
        <meta name="description" content="MT T300 HG120 ultra hızlı geçiş turnike. 120 kişi/dakika kapasiteli, big data destekli, mega alışveriş merkezleri için en hızlı çözüm." />
        <meta name="keywords" content="ultra hızlı turnike, t300 hg120, 120 kişi dakika, mega kapasite, big data, ai destekli, stadyum turnike, mika teknoloji" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary via-pink-500 to-orange-400 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Link href="/urunler/hizli-gecis-turnike" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Hızlı Geçiş Turnikeler
            </Link>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-10 w-10 text-white" />
                  <div>
                    <Badge className="bg-red-600 text-white mb-2">{urunDetay.model}</Badge>
                    <h1 className="text-3xl md:text-4xl font-bold">{urunDetay.title}</h1>
                  </div>
                </div>
                <p className="text-xl text-white/90 mb-6">{urunDetay.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center bg-white/10 rounded-lg p-3">
                    <Clock className="h-6 w-6 mx-auto mb-2" />
                    <div className="text-sm text-white/80">Kapasite</div>
                    <div className="font-bold">120 Kişi/Dk</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-lg p-3">
                    <Zap className="h-6 w-6 mx-auto mb-2" />
                    <div className="text-sm text-white/80">Hız</div>
                    <div className="font-bold">Ultra Hızlı</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    <Phone className="mr-2 h-5 w-5" />
                    Hemen Ara
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    <Mail className="mr-2 h-5 w-5" />
                    Teklif Al
                  </Button>
                </div>
              </div>
              
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl bg-white/10 p-6">
                  <img 
                    src={urunDetay.image} 
                    alt={urunDetay.title}
                    className="w-full h-full object-contain bg-white rounded-xl"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <Link href="/urunler" className="hover:text-primary">Ürünler</Link>
            <span className="mx-2">/</span>
            <Link href="/urunler/hizli-gecis-turnike" className="hover:text-primary">Hızlı Geçiş Turnikeler</Link>
            <span className="mx-2">/</span>
            <span className="text-primary font-medium">MT T300 HG120</span>
          </div>
        </div>
      </div>

      {/* Özellikler */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Ürün Özellikleri</h2>
              <div className="grid gap-4">
                {urunDetay.ozellikler.map((ozellik, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{ozellik}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Teknik Özellikler</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {Object.entries(urunDetay.teknikOzellikler).map(([key, value], index) => (
                      <motion.div 
                        key={key}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex justify-between items-center border-b border-gray-100 pb-3"
                      >
                        <span className="text-gray-600 font-medium">{key}:</span>
                        <span className="text-gray-900 font-semibold">{value}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Kullanım Alanları */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kullanım Alanları</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              MT T300 HG120 ultra hızlı turnike en yoğun alanlar için tasarlanmıştır
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {urunDetay.kullanımAlanlari.map((alan, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <Activity className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-gray-700 font-medium">{alan}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Aksesuarlar */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ultra Teknoloji Aksesuarları</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              En ileri teknoloji aksesuarlarla sisteminizi güçlendirin
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {urunDetay.aksesuar.map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 bg-gray-50 rounded-lg p-4"
              >
                <Settings className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              MT T300 HG120 Ultra Hızlı Turnikenizi Hemen Sipariş Edin
            </h2>
            <p className="text-xl mb-8 text-white/90">
              120 kişi/dakika ultra kapasite ile en yoğun alanlar için mükemmel çözüm.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                0546 712 22 96
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Mail className="mr-2 h-5 w-5" />
                info@mikateknoloji.com
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center text-white/80">
              <MapPin className="mr-2 h-5 w-5" />
              <span>İstanbul geneli ücretsiz keşif ve montaj hizmeti</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}