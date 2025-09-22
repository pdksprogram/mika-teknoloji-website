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
  Clock,
  Users,
  Settings,
  Activity
} from "lucide-react";
import { HIZLI_GECIS_TURNIKE_IMAGES } from "@/assetsMap";
import { Link } from "wouter";

export default function MTT350HG60ChubbyDetailPage() {
  const urunDetay = {
    model: "MT T350 HG60 Chubby",
    title: "Premium Chubby Hızlı Geçiş",
    image: HIZLI_GECIS_TURNIKE_IMAGES.hg5,
    price: "Fiyat İçin Ara",
    description: "En geniş geçiş alanına sahip premium turnike sistemi. 60 kişi/dakika kapasiteli, lüks havaalanları ve VIP terminaller için özel tasarım.",
    
    teknikOzellikler: {
      "Geçiş Kapasitesi": "60 Kişi/Dakika",
      "Geçiş Alanı": "Ekstra Geniş (Premium)",
      "Motor Tipi": "Premium Çift Servo",
      "Açılma Süresi": "0.25 Saniye",
      "Kasa Malzemesi": "316L Premium Çelik",
      "Boyutlar": "1500 x 500 x 1150 mm",
      "Ağırlık": "165 kg",
      "Çalışma Voltajı": "220V / 50Hz",
      "Güç Tüketimi": "450W",
      "Çalışma Sıcaklığı": "-25°C ~ +70°C",
      "IP Koruma": "IP65",
      "Engelli Erişimi": "Full Wheelchair Access",
      "İletişim": "5G, WiFi 6, Fiber",
      "Premium Malzeme": "Brushed Steel Finish",
      "Sessiz Çalışma": "< 35dB Ultra Quiet"
    },

    ozellikler: [
      "60 kişi/dakika premium kapasite",
      "Ekstra geniş geçiş alanı",
      "Büyük bagaj ve valiz uyumlu",
      "Full tekerlekli sandalye erişimi",
      "Premium brushed steel finish",
      "Ultra sessiz çalışma (< 35dB)",
      "316L premium çelik kasa",
      "Çift servo motor teknolojisi",
      "5G ve WiFi 6 bağlantısı",
      "VIP kullanıcı önceliği",
      "Premium LED aydınlatma",
      "Otomatik temizlik sistemi"
    ],

    kullanımAlanlari: [
      "Lüks havaalanları",
      "VIP terminaller",
      "Premium otel girişleri",
      "Lüks alışveriş merkezleri",
      "Eksklüzif kulüpler",
      "Diplomat terminaller",
      "Lüks ofis kompleksleri",
      "VIP kongre merkezleri",
      "Premium spa merkezleri",
      "Yüksek güvenlik alanları"
    ],

    aksesuar: [
      "Premium biyometrik sistem",
      "VIP kart okuyucu seti",
      "4K güvenlik kamera sistemi",
      "Premium ses ve aydınlatma",
      "Otomatik temizlik sistemi",
      "VIP kontrol paneli",
      "Premium bakım paketi",
      "Concierge yazılımı",
      "Lüks finish seçenekleri",
      "7/24 VIP teknik destek"
    ]
  };

  return (
    <>
      <Helmet>
        <title>MT T350 HG60 Chubby Premium - Lüks Geniş Geçiş | Mika Teknoloji</title>
        <meta name="description" content="MT T350 HG60 Chubby premium turnike. En geniş geçiş alanı, 60 kişi/dakika, lüks havaalanları ve VIP terminaller için özel tasarım." />
        <meta name="keywords" content="premium chubby, lüks turnike, geniş geçiş, vip turnike, t350 hg60, havaalanı premium, tekerlekli sandalye, mika teknoloji" />
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
                  <Users className="h-10 w-10 text-white" />
                  <div>
                    <Badge className="bg-purple-600 text-white mb-2">{urunDetay.model}</Badge>
                    <h1 className="text-3xl md:text-4xl font-bold">{urunDetay.title}</h1>
                  </div>
                </div>
                <p className="text-xl text-white/90 mb-6">{urunDetay.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center bg-white/10 rounded-lg p-3">
                    <Clock className="h-6 w-6 mx-auto mb-2" />
                    <div className="text-sm text-white/80">Kapasite</div>
                    <div className="font-bold">60 Kişi/Dk</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-lg p-3">
                    <Users className="h-6 w-6 mx-auto mb-2" />
                    <div className="text-sm text-white/80">Geçiş</div>
                    <div className="font-bold">Ekstra Geniş</div>
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
            <span className="text-primary font-medium">MT T350 HG60 Chubby</span>
          </div>
        </div>
      </div>

      {/* Özellikler */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Premium Özellikler</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Kullanım Alanları</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              MT T350 HG60 Chubby en prestijli ve lüks alanlar için tasarlanmıştır
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Aksesuarlar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lüks aksesuarlarla sisteminizi daha da özelleştirin
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
              MT T350 HG60 Chubby Premium Turnikenizi Hemen Sipariş Edin
            </h2>
            <p className="text-xl mb-8 text-white/90">
              En geniş geçiş alanı ile premium teknoloji, lüks mekanlar için mükemmel seçim.
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