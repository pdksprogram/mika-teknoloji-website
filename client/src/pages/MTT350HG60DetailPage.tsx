import { Card, CardContent } from "@/components/ui/card";
import { Kirinti } from "@/components/PdksIcerik";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Zap,
  Clock,
  Crown,
  Settings,
  Activity,
} from "lucide-react";
import { HIZLI_GECIS_TURNIKE_IMAGES } from "@/assetsMap";

import CtaDugmeleri from "@/components/CtaDugmeleri";
import { boyut } from "@/lib/gorselBoyut";

export default function MTT350HG60DetailPage() {
  const urunDetay = {
    model: "MT T350 HG60",
    title: "Premium Hızlı Geçiş Sistemi",
    image: HIZLI_GECIS_TURNIKE_IMAGES.hg4,
    price: "Fiyat İçin Ara",
    description: "En yüksek kapasiteli premium turnike sistemi. 60 kişi/dakika kapasiteli, biyometrik entegrasyon ve yapay zeka destekli büyük havaalanları ve uluslararası terminaller için.",
    
    teknikOzellikler: {
      "Geçiş Kapasitesi": "60 Kişi/Dakika",
      "Motor Tipi": "Premium Servo Motor",
      "Açılma Süresi": "0.2 Saniye",
      "AI Destekli": "Yapay Zeka Entegrasyonu",
      "Kasa Malzemesi": "316L Premium Çelik",
      "Boyutlar": "1500 x 400 x 1150 mm",
      "Ağırlık": "150 kg",
      "Çalışma Voltajı": "220V / 50Hz",
      "Güç Tüketimi": "400W",
      "Çalışma Sıcaklığı": "-25°C ~ +70°C",
      "IP Koruma": "IP65",
      "Biyometrik": "Yüz Tanıma + Parmak İzi",
      "İletişim": "5G, WiFi 6, Ethernet",
      "Kamera Çözünürlüğü": "4K UHD",
      "AI Analitik": "Gerçek Zamanlı Analiz"
    },

    ozellikler: [
      "60 kişi/dakika premium kapasite",
      "Biyometrik yüz tanıma entegrasyonu",
      "Yapay zeka destekli güvenlik",
      "4K UHD güvenlik kameraları",
      "Gerçek zamanlı veri analitik",
      "VIP geçiş modu desteği",
      "5G ve WiFi 6 bağlantısı",
      "Premium 316L çelik kasa",
      "Ultra hızlı servo motor",
      "Akıllı trafik yönetimi",
      "Çoklu kimlik doğrulama",
      "Merkezi AI kontrol sistemi"
    ],

    kullanımAlanlari: [
      "Büyük havaalanları",
      "Uluslararası terminaller",
      "Premium ofis kompleksleri",
      "Lüks alışveriş merkezleri",
      "VIP kongre merkezleri",
      "Büyük üniversite kampüsleri",
      "Devlet güvenlik alanları",
      "Diplomatik binalar",
      "Finansal kurumlar",
      "Teknoloji kampüsleri"
    ],

    aksesuar: [
      "AI yüz tanıma sistemi",
      "Çoklu biyometrik okuyucu",
      "4K güvenlik kamera seti",
      "Premium ses sistemi",
      "LED premium aydınlatma",
      "5G iletişim modülü",
      "AI analitik yazılımı",
      "VIP kontrol paneli",
      "Uzaktan izleme sistemi",
      "Premium bakım paketi"
    ]
  };

  return (
    <>
      <Helmet>
        <title>MT T350 HG60 Hızlı Geçiş Turnikesi | Mika Teknoloji</title>
        <meta name="description" content="MT T350 HG60 premium hızlı geçiş turnike. 60 kişi/dakika, AI destekli, biyometrik entegrasyon, büyük havaalanları için en ileri teknoloji." />
        <meta property="og:title" content="MT T350 HG60 Hızlı Geçiş Turnikesi | Mika Teknoloji" />
        <meta property="og:description" content="MT T350 HG60 premium hızlı geçiş turnike. 60 kişi/dakika, AI destekli, biyometrik entegrasyon, büyük havaalanları için en ileri teknoloji." />
        <meta name="keywords" content="premium turnike, t350 hg60, ai turnike, biyometrik, 60 kişi dakika, havaalanı turnike, yüz tanıma, mika teknoloji" />
      </Helmet>

      <Kirinti maddeler={[{ ad: "Ana Sayfa", yol: "/" }, { ad: "Ürünler", yol: "/urunler" }, { ad: "Hızlı Geçiş Turnikeler", yol: "/urunler/hizli-gecis-turnike" }, { ad: "MT T350 HG60", yol: "/urunler/hizli-gecis-t350-hg60-detay" }]} />

      {/* Hero Section */}
      <div className="relative bg-slate-900 border-b-4 border-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div 
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="h-10 w-10 text-white" />
                  <div>
                    <p className="text-sm font-medium text-white/70 mb-1">{urunDetay.model}</p>
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
                    <Zap className="h-6 w-6 mx-auto mb-2" />
                    <div className="text-sm text-white/80">Teknoloji</div>
                    <div className="font-bold">AI Destekli</div>
                  </div>
                </div>
                
                <CtaDugmeleri tur="donanim" koyu />
              </div>
              
              <motion.div 
                initial={false}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl bg-white/10 p-6">
                  <img {...boyut(urunDetay.image)} loading="eager" {...{ fetchpriority: "high" }} 
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
                    initial={false}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
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
                        initial={false}
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
              MT T350 HG60 premium turnike en prestijli alanlar için tasarlanmıştır
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {urunDetay.kullanımAlanlari.map((alan, index) => (
              <motion.div
                key={index}
                initial={false}
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
              En ileri teknoloji aksesuarlarla sisteminizi güçlendirin
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {urunDetay.aksesuar.map((item, index) => (
              <motion.div
                key={index}
                initial={false}
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
              MT T350 HG60 Premium Turnikenizi Hemen Sipariş Edin
            </h2>
            <p className="text-xl mb-8 text-white/90">
              60 kişi/dakika, AI destekli, premium teknoloji ile en prestijli alanlar için.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="default">
                <a href="tel:+905467122296">
                  <Phone className="mr-2 h-5 w-5" />
                  0546 712 22 96
                </a>
              </Button>
              <Button asChild size="lg" variant="outlineLight">
                <a href="mailto:info@mikateknoloji.com">
                  <Mail className="mr-2 h-5 w-5" />
                  info@mikateknoloji.com
                </a>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center text-white/80">
              <MapPin className="mr-2 h-5 w-5" />
              <span>Keşif ve montaj hizmeti</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}