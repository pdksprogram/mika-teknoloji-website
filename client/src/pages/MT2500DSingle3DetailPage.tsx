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
  Briefcase
} from "lucide-react";
import { BOY_TURNIKE_IMAGES } from "@/assetsMap";
import { Link } from "wouter";

export default function MT2500DSingle3DetailPage() {
  
  const teknikOzellikler = [
    { ozellik: "Kontrol Voltajı", deger: "100-230 VAC 50/60 Hz" },
    { ozellik: "Güç Tüketimi", deger: "30 W" },
    { ozellik: "Çalışma Sıcaklığı", deger: "-20°C - +70°C" },
    { ozellik: "Opsiyonel Isıtıcı İle", deger: "-30°C" },
    { ozellik: "Geçiş Hızı", deger: "30 Kişi / Dakika" },
    { ozellik: "Geçiş Aralığı", deger: "Max. 600 mm" },
    { ozellik: "Kullanım Alanları", deger: "İç Ortam / Dış Ortam" },
    { ozellik: "Koruma Standardı", deger: "IP 65" },
    { ozellik: "Malzeme", deger: "304 Paslanmaz Çelik" },
    { ozellik: "Döner Kapı Tipi", deger: "3 Kollu (120° Aralık)" }
  ];

  const ozellikler = [
    "Tek yönlü geçiş kontrolü (Single)",
    "3 kollu paslanmaz çelik döner kapı",
    "Boy yüksekliğinde güvenlik engeli",
    "LED durum göstergesi (Kırmızı/Yeşil)",
    "Elektrik kesintisinde serbest geçiş",
    "Kartlı geçiş kontrol desteği",
    "Parmak izi okuyucu entegrasyonu",
    "Yüz tanıma sistemi desteği",
    "15 saniye zaman aşımı koruması",
    "Sesli uyarı sistemi",
    "Çift yönlü LED göstergeler",
    "Darbelere dayanıklı yapı"
  ];

  const kullanimAlanlari = [
    { icon: Building2, title: "Stadyumlar", description: "Spor tesisleri ve maç günü güvenliği" },
    { icon: Factory, title: "Fabrikalar", description: "Üretim tesisleri ve sanayi alanları" },
    { icon: Briefcase, title: "Bakanlıklar", description: "Devlet kurumları ve resmi binalar" },
    { icon: Building2, title: "Kampüs Girişleri", description: "Üniversite ve okul güvenliği" },
    { icon: Factory, title: "İnşaat Alanları", description: "Şantiye ve yapım sahası kontrolü" },
    { icon: Briefcase, title: "Bankalar", description: "Finansal kurum güvenliği" }
  ];

  const guvenlikOnlemleri = [
    "Yasak geçişleri tamamen engelleyen boy yüksekliği",
    "Güvenlik görevlisi olmayan alanlarda kullanım",
    "Anti-tailgating teknolojisi",
    "Darbe emici özel döküm parçalar",
    "Mühendislik kontrol kartları",
    "Çoklu entegrasyon desteği"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>MT 2500D Single 3 Kollu Boy Tipi Turnike Sistemi | Mika Teknoloji</title>
        <meta name="description" content="MT 2500D Single 3 kollu boy tipi turnike sistemi. Yüksek güvenlik alanları için tek yönlü geçiş kontrolü. IP65 koruma, 30 kişi/dakika kapasitesi." />
        <meta name="keywords" content="MT 2500D Single, boy tipi turnike, 3 kollu turnike, yüksek güvenlik turnike, stadyum turnike, fabrika güvenliği" />
        
        <meta property="og:title" content="MT 2500D Single 3 Kollu Boy Tipi Turnike | Mika Teknoloji" />
        <meta property="og:description" content="Yüksek güvenlik gerektiren alanlar için MT 2500D Single 3 kollu boy tipi turnike sistemi." />
        <meta property="og:image" content="https://mikateknoloji.com/t-2500d-single-3-kollu-paslanmaz-turnike.jpg" />
        <meta property="og:url" content="https://mikateknoloji.com/urunler/mt2500d-single-3-kollu" />
        
        <link rel="canonical" href="https://mikateknoloji.com/urunler/mt2500d-single-3-kollu" />
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
            <span className="text-gray-900 font-medium">MT 2500D Single 3 Kollu</span>
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
                <img 
                  src={BOY_TURNIKE_IMAGES.bt1}
                  alt="MT 2500D Single 3 Kollu Boy Tipi Turnike"
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
                <Badge className="bg-blue-100 text-blue-800 mb-3">Boy Tipi Turnike</Badge>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  MT 2500D Single 3 Kollu Boy Tipi Turnike Sistemi
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Yüksek güvenlik ihtiyacının olduğu, sıkı denetime tabi alanlar için geliştirilmiş boy yüksekliğinde turnike sistemi. 
                  Yasak geçişleri tamamen engelleyecek boyutlarda tasarlanmış olup, güvenlik görevlisi olmayan alanlarda bile rahatlıkla kullanılabilir.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">30 Kişi/Dakika</div>
                  <div className="text-sm text-gray-600">Geçiş Kapasitesi</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">IP 65</div>
                  <div className="text-sm text-gray-600">Koruma Standardı</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 flex-1">
                  <Phone className="h-5 w-5 mr-2" />
                  Fiyat Bilgisi Al
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
                  Güvenlik Önlemleri
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {guvenlikOnlemleri.map((onlem, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{onlem}</span>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kullanım Alanları</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                MT 2500D Single 3 Kollu boy tipi turnike sistemi, yüksek güvenlik gerektiren her türlü açık ve kapalı alan için uygundur.
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

          {/* İletişim CTA */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white text-center"
          >
            <h2 className="text-2xl font-bold mb-4">
              MT 2500D Single 3 Kollu Turnike Sistemi Hakkında Detaylı Bilgi Alın
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Uzman ekibimizden ücretsiz keşif hizmeti alın. İşletmeniz için en uygun güvenlik çözümünü birlikte belirleyelim.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="h-8 w-8 mx-auto mb-2" />
                <div className="font-semibold mb-1">Telefon</div>
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
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/iletisim">
                  Ücretsiz Keşif Talep Et
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Detaylı Teklif Al
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