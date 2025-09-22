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
  Users,
  Settings,
  Activity
} from "lucide-react";
import { HIZLI_GECIS_TURNIKE_IMAGES } from "@/assetsMap";
import { Link } from "wouter";

export default function MTT300HG40DetailPage() {
  const urunDetay = {
    model: "MT T300 HG40",
    title: "HG40 Yüksek Kapasiteli Turnike",
    image: HIZLI_GECIS_TURNIKE_IMAGES.hg3,
    price: "Fiyat İçin Ara",
    description: "Ultra yüksek kapasiteli hızlı geçiş turnike sistemi. 40 kişi/dakika kapasiteli, çift yönlü geçiş özelliği ile büyük alışveriş merkezleri ve stadyumlar için tasarlandı.",
    
    teknikOzellikler: {
      "Geçiş Kapasitesi": "40 Kişi/Dakika",
      "Motor Tipi": "Çift Servo Motor",
      "Açılma Süresi": "0.3 Saniye",
      "Geçiş Yönü": "Çift Yönlü",
      "Kasa Malzemesi": "316L Paslanmaz Çelik",
      "Boyutlar": "1400 x 350 x 1100 mm",
      "Ağırlık": "125 kg",
      "Çalışma Voltajı": "220V / 50Hz",
      "Güç Tüketimi": "300W",
      "Çalışma Sıcaklığı": "-20°C ~ +65°C",
      "IP Koruma": "IP65",
      "Kart Okuyucu": "RFID, NFC, Mifare",
      "İletişim": "TCP/IP, RS485, WiFi",
      "Güvenlik Kameraları": "2MP HD Kamera",
      "Sesli Uyarı": "Çok Dilli Sesli Uyarı"
    },

    ozellikler: [
      "40 kişi/dakika ultra yüksek kapasite",
      "Çift yönlü geçiş kontrolü",
      "Yoğun trafik yönetimi",
      "Gelişmiş sensör sistemleri",
      "Entegre güvenlik kameraları",
      "Uzaktan kontrol ve izleme",
      "Çoklu kart okuyucu desteği",
      "Gerçek zamanlı veri analizi",
      "316L paslanmaz çelik yapı",
      "Çift servo motor teknolojisi",
      "IP65 su geçirmez koruma",
      "Çok dilli sesli uyarı sistemi"
    ],

    kullanımAlanlari: [
      "Büyük alışveriş merkezleri",
      "Stadyum ve spor kompleksleri",
      "Havaalanı ana terminalleri",
      "Metro ana istasyonları",
      "Kongre ve fuar merkezleri",
      "Büyük üniversite kampüsleri",
      "Hastane ana girişleri",
      "Tema park girişleri",
      "Büyük fabrika girişleri",
      "Devlet kurumları"
    ],

    aksesuar: [
      "Çoklu RFID kart okuyucu",
      "Biyometrik yüz tanıma sistemi",
      "QR kod ve barkod okuyucu",
      "Termal kamera entegrasyonu",
      "Uzaktan merkezi yönetim",
      "Yedekleme güç sistemi",
      "HD güvenlik kamera seti",
      "Sesli anons sistemi",
      "LED aydınlatma paketi",
      "Mobil uygulama yönetimi"
    ]
  };

  return (
    <>
      <Helmet>
        <title>MT T300 HG40 Yüksek Kapasiteli Turnike - 40 Kişi/Dakika | Mika Teknoloji</title>
        <meta name="description" content="MT T300 HG40 ultra yüksek kapasiteli turnike. 40 kişi/dakika, çift yönlü geçiş, stadyum ve alışveriş merkezleri için profesyonel çözüm." />
        <meta name="keywords" content="t300 hg40, yüksek kapasite turnike, 40 kişi dakika, çift yönlü turnike, stadyum turnike, alışveriş merkezi, mika teknoloji" />
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
                  <Zap className="h-10 w-10 text-white" />
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
                    <div className="font-bold">40 Kişi/Dk</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-lg p-3">
                    <Users className="h-6 w-6 mx-auto mb-2" />
                    <div className="text-sm text-white/80">Geçiş</div>
                    <div className="font-bold">Çift Yönlü</div>
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
            <span className="text-primary font-medium">MT T300 HG40</span>
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
              MT T300 HG40 yüksek kapasiteli turnike sistemi en yoğun alanlarda kullanılır
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Opsiyonel Aksesuarlar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sisteminizi daha da güçlendiren opsiyonel aksesuarlar
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
              MT T300 HG40 Yüksek Kapasiteli Turnikenizi Hemen Sipariş Edin
            </h2>
            <p className="text-xl mb-8 text-white/90">
              40 kişi/dakika kapasiteli, çift yönlü geçişli profesyonel çözüm için hemen iletişime geçin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                0212 320 02 30
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