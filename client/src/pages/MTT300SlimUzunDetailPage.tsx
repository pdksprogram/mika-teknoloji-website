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
  Shield,
  Settings,
  Activity,
  Maximize
} from "lucide-react";
import { HIZLI_GECIS_TURNIKE_IMAGES } from "@/assetsMap";
import { Link } from "wouter";

export default function MTT300SlimUzunDetailPage() {
  const urunDetay = {
    model: "MT T300 HG SLIM",
    title: "Uzun SLIM Hızlı Geçiş",
    image: HIZLI_GECIS_TURNIKE_IMAGES.hg9,
    price: "Fiyat İçin Ara",
    description: "Uzun kasalı SLIM tasarımlı hızlı geçiş turnike sistemi. Gelişmiş güvenlik özellikleri ile kurumsal binalar ve güvenlik odaklı alanlar için profesyonel çözüm.",
    
    teknikOzellikler: {
      "Geçiş Kapasitesi": "18 Kişi/Dakika",
      "Motor Tipi": "Güvenlik Servo Motor",
      "Açılma Süresi": "0.7 Saniye",
      "Kasa Tipi": "Uzun SLIM Tasarım",
      "Kasa Malzemesi": "304 Paslanmaz Çelik",
      "Boyutlar": "1400 x 220 x 950 mm",
      "Ağırlık": "75 kg",
      "Çalışma Voltajı": "220V / 50Hz",
      "Güç Tüketimi": "120W",
      "Çalışma Sıcaklığı": "-15°C ~ +60°C",
      "IP Koruma": "IP54",
      "Güvenlik Seviyesi": "Yüksek Güvenlik",
      "İletişim": "TCP/IP, RS485, WiFi",
      "Entegre Kameralar": "2MP HD Kamera",
      "Çoklu Sensör": "12 Adet Sensör"
    },

    ozellikler: [
      "18 kişi/dakika optimum kapasite",
      "Uzun SLIM kasa tasarımı",
      "Gelişmiş güvenlik özellikleri",
      "Çoklu sensör teknolojisi (12 adet)",
      "Entegre HD kamera sistemi",
      "Yüksek güvenlik seviyesi",
      "WiFi bağlantı desteği",
      "304 paslanmaz çelik yapı",
      "Profesyonel tasarım",
      "Uzun ömürlü komponenler",
      "Kolay bakım ve servis",
      "Güvenlik odaklı yazılım"
    ],

    kullanımAlanlari: [
      "Kurumsal ofis binaları",
      "Güvenlik odaklı alanlar",
      "Devlet kurumları",
      "Bankalar ve finans",
      "Araştırma merkezleri",
      "Teknoloji kampüsleri",
      "Yüksek güvenlik ofisleri",
      "Veri merkezleri",
      "Laboratuvarlar",
      "Güvenlik kontrol noktaları"
    ],

    aksesuar: [
      "Çoklu RFID kart okuyucu",
      "Biyometrik parmak izi okuyucu",
      "HD güvenlik kamera seti",
      "Gelişmiş sensör paketi",
      "Güvenlik kontrol yazılımı",
      "WiFi iletişim modülü",
      "LED güvenlik aydınlatması",
      "Acil müdahale sistemi",
      "Uzaktan izleme yazılımı",
      "Güvenlik bakım paketi"
    ]
  };

  return (
    <>
      <Helmet>
        <title>MT T300 HG SLIM Uzun Turnike - Güvenlik Odaklı | Mika Teknoloji</title>
        <meta name="description" content="MT T300 HG SLIM uzun turnike sistemi. Güvenlik odaklı tasarım, çoklu sensör, entegre kamera, kurumsal binalar için profesyonel çözüm." />
        <meta name="keywords" content="slim uzun turnike, güvenlik turnike, kurumsal turnike, çoklu sensör, hd kamera, profesyonel güvenlik, mika teknoloji" />
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
                  <Maximize className="h-10 w-10 text-white" />
                  <div>
                    <Badge className="bg-indigo-600 text-white mb-2">{urunDetay.model}</Badge>
                    <h1 className="text-3xl md:text-4xl font-bold">{urunDetay.title}</h1>
                  </div>
                </div>
                <p className="text-xl text-white/90 mb-6">{urunDetay.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center bg-white/10 rounded-lg p-3">
                    <Clock className="h-6 w-6 mx-auto mb-2" />
                    <div className="text-sm text-white/80">Kapasite</div>
                    <div className="font-bold">18 Kişi/Dk</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-lg p-3">
                    <Shield className="h-6 w-6 mx-auto mb-2" />
                    <div className="text-sm text-white/80">Güvenlik</div>
                    <div className="font-bold">Yüksek</div>
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
            <span className="text-primary font-medium">MT T300 HG SLIM Uzun</span>
          </div>
        </div>
      </div>

      {/* Özellikler */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Güvenlik Özellikleri</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Güvenlik Odaklı Kullanım Alanları</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              MT T300 HG SLIM Uzun yüksek güvenlik gerektiren alanlar için tasarlanmıştır
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Güvenlik Aksesuarları</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Güvenlik seviyesini artıran profesyonel aksesuarlar
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
              MT T300 HG SLIM Uzun Turnikenizi Hemen Sipariş Edin
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Gelişmiş güvenlik özellikleri ile kurumsal güvenlik için ideal çözüm.
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