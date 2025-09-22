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

export default function MTT300HG20ChubbyDetailPage() {
  const urunDetay = {
    model: "MT T300 HG20 Chubby",
    title: "Chubby Hızlı Geçiş Turnike Sistemi",
    image: HIZLI_GECIS_TURNIKE_IMAGES.hg2,
    price: "Fiyat İçin Ara",
    description: "Geniş geçiş alanı ile valiz taşıyan yolcular için özel tasarım. 20 kişi/dakika kapasiteli, havaalanı ve tren istasyonları için mükemmel çözüm.",
    
    teknikOzellikler: {
      "Geçiş Kapasitesi": "20 Kişi/Dakika",
      "Geçiş Alanı": "Geniş (Chubby)",
      "Motor Tipi": "Çift Servo Motor",
      "Açılma Süresi": "0.6 Saniye",
      "Kasa Malzemesi": "304 Paslanmaz Çelik",
      "Boyutlar": "1300 x 400 x 1000 mm",
      "Ağırlık": "110 kg",
      "Çalışma Voltajı": "220V / 50Hz",
      "Güç Tüketimi": "200W",
      "Çalışma Sıcaklığı": "-15°C ~ +60°C",
      "IP Koruma": "IP54",
      "Kart Okuyucu": "RFID, NFC, Mifare",
      "İletişim": "TCP/IP, RS485",
      "Valiz Uyumlu": "Büyük Valiz Desteği",
      "Engelli Erişimi": "Tekerlekli Sandalye Uyumlu"
    },

    ozellikler: [
      "20 kişi/dakika yüksek kapasite",
      "Geniş geçiş alanı (Chubby design)",
      "Valiz ve çanta dostu tasarım",
      "Tekerlekli sandalye uyumlu",
      "RFID kart okuyucu entegrasyonu",
      "Çift servo motor teknolojisi",
      "Anti-tailgating güvenlik sistemi",
      "LED durum göstergesi",
      "Ses uyarı sistemi",
      "TCP/IP ağ bağlantısı",
      "304 paslanmaz çelik kasa",
      "Uzaktan merkezi yönetim"
    ],

    kullanımAlanlari: [
      "Havaalanı terminalleri",
      "Tren istasyonları",
      "Metro ana istasyonları",
      "Büyük alışveriş merkezleri",
      "Otel ve resort girişleri",
      "Kongre merkezleri",
      "Hastane ana girişleri",
      "Üniversite kampüsleri",
      "VIP lounge girişleri",
      "Lüks ofis kompleksleri"
    ],

    aksesuar: [
      "Çoklu RFID kart okuyucu",
      "Biyometrik parmak izi okuyucu",
      "QR kod okuyucu sistemi",
      "Valiz dedektörü sensörleri",
      "Uzaktan kumanda sistemi",
      "Yedek güç kaynağı",
      "HD güvenlik kameraları",
      "Sesli anons sistemi",
      "LED aydınlatma paketi",
      "Mobil yönetim aplikasyonu"
    ]
  };

  return (
    <>
      <Helmet>
        <title>MT T300 HG20 Chubby Turnike - Geniş Geçiş Alanı | Mika Teknoloji</title>
        <meta name="description" content="MT T300 HG20 Chubby hızlı geçiş turnike. Geniş geçiş alanı, valiz dostu, 20 kişi/dakika, havaalanı ve tren istasyonları için ideal." />
        <meta name="keywords" content="chubby turnike, geniş geçiş, valiz dostu, havaalanı turnike, t300 hg20, engelli erişim, mika teknoloji" />
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
                    <Badge className="bg-blue-600 text-white mb-2">{urunDetay.model}</Badge>
                    <h1 className="text-3xl md:text-4xl font-bold">{urunDetay.title}</h1>
                  </div>
                </div>
                <p className="text-xl text-white/90 mb-6">{urunDetay.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center bg-white/10 rounded-lg p-3">
                    <Clock className="h-6 w-6 mx-auto mb-2" />
                    <div className="text-sm text-white/80">Kapasite</div>
                    <div className="font-bold">20 Kişi/Dk</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-lg p-3">
                    <Users className="h-6 w-6 mx-auto mb-2" />
                    <div className="text-sm text-white/80">Tasarım</div>
                    <div className="font-bold">Geniş Geçiş</div>
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
            <span className="text-primary font-medium">MT T300 HG20 Chubby</span>
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
              MT T300 HG20 Chubby geniş geçiş alanları için özel tasarlanmıştır
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
              MT T300 HG20 Chubby Turnikenizi Hemen Sipariş Edin
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Geniş geçiş alanı, valiz dostu tasarım ile havaalanları için ideal çözüm.
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