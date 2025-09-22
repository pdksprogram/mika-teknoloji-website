import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { 
  Zap, 
  Phone,
  Mail,
  MapPin,
  Download,
  ArrowLeft,
  Building2,
  Star,
  Gem
} from "lucide-react";
import { BOY_TURNIKE_IMAGES } from "@/assetsMap";
import { Link } from "wouter";

export default function MT2500KKristalDetailPage() {
  
  const teknikOzellikler = [
    { ozellik: "Kontrol Voltajı", deger: "100-230 VAC 50/60 Hz" },
    { ozellik: "Güç Tüketimi", deger: "35 W" },
    { ozellik: "Çalışma Sıcaklığı", deger: "-20°C - +70°C" },
    { ozellik: "Geçiş Hızı", deger: "25 Kişi / Dakika" },
    { ozellik: "Geçiş Aralığı", deger: "Max. 600 mm" },
    { ozellik: "Panel Malzemesi", deger: "Kristal Cam + Paslanmaz Çelik" },
    { ozellik: "Koruma Standardı", deger: "IP 65" },
    { ozellik: "Döner Kapı Tipi", deger: "3 Kollu (120° Aralık)" },
    { ozellik: "Görünüm", deger: "Şeffaf Kristal Paneller" },
    { ozellik: "Kullanım Alanları", deger: "İç Ortam (Premium)" }
  ];

  const premiumOzellikler = [
    "Premium kristal cam paneller",
    "Şeffaf tasarım ve modern estetik",
    "VIP alanlar için lüks görünüm",
    "LED aydınlatmalı kristal panel",
    "Yüksek kalite paslanmaz çelik çerçeve",
    "Kartlı geçiş kontrol desteği",
    "Parmak izi okuyucu entegrasyonu",
    "RFID kart okuyucu desteği",
    "Akıllı LED göstergeler",
    "Sessiz çalışma teknolojisi",
    "Anti-vandalizm koruması",
    "Premium döküm parçalar"
  ];

  const kullanimAlanlari = [
    { icon: Building2, title: "Lüks Ofis Binaları", description: "Executive seviye ofis kompleksleri" },
    { icon: Gem, title: "5 Yıldız Oteller", description: "Premium otel lobilerinde güvenlik" },
    { icon: Star, title: "VIP Alanlar", description: "Exclusive club ve sosyal tesisler" },
    { icon: Building2, title: "Showroom'lar", description: "Otomotiv ve teknoloji mağazaları" },
    { icon: Gem, title: "Alışveriş Merkezleri", description: "Premium brand mağaza girişleri" },
    { icon: Star, title: "Özel Etkinlik Alanları", description: "Konser salonları ve sanat galerileri" }
  ];

  const tasarimAvantajlari = [
    "Şeffaf kristal paneller ile modern görünüm",
    "Mekanın estetiğini bozmayan tasarım",
    "Premium kalite malzeme kullanımı",
    "LED aydınlatma ile kristal efekt",
    "Kolay temizlik ve bakım",
    "Darbe dayanıklı özel cam teknolojisi"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>MT 2500K Kristal 3 Kollu Premium Boy Tipi Turnike | Mika Teknoloji</title>
        <meta name="description" content="MT 2500K Kristal 3 kollu premium boy tipi turnike sistemi. Şeffaf kristal panelli lüks tasarım. VIP alanlar ve 5 yıldız oteller için." />
        <meta name="keywords" content="MT 2500K Kristal, premium turnike, kristal turnike, lüks turnike, VIP turnike, otel güvenliği, şeffaf turnike" />
        
        <meta property="og:title" content="MT 2500K Kristal Premium Boy Tipi Turnike | Mika Teknoloji" />
        <meta property="og:description" content="Kristal panelli premium boy tipi turnike sistemi. VIP alanlar için lüks güvenlik çözümü." />
        <meta property="og:image" content="https://mikateknoloji.com/t-2500k-single-3-kollu-kristal-boy-turnike.jpg" />
        <meta property="og:url" content="https://mikateknoloji.com/urunler/mt2500k-kristal" />
        
        <link rel="canonical" href="https://mikateknoloji.com/urunler/mt2500k-kristal" />
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
            <span className="text-gray-900 font-medium">MT 2500K Kristal</span>
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
              <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-2xl shadow-lg p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    <Star className="h-3 w-3 mr-1" />
                    PREMIUM
                  </Badge>
                </div>
                <img 
                  src={BOY_TURNIKE_IMAGES.bt11}
                  alt="MT 2500K Kristal 3 Kollu Premium Boy Tipi Turnike"
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
                <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 mb-3">
                  Premium Kristal Serisi
                </Badge>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  MT 2500K Kristal 3 Kollu Premium Boy Tipi Turnike
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  VIP alanlar ve lüks mekanlar için özel tasarlanmış kristal panelli premium boy tipi turnike sistemi. 
                  Şeffaf kristal panelleri ile modern estetik sunarken, en yüksek güvenlik standartlarını karşılar.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <Gem className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Kristal Panel</div>
                  <div className="text-sm text-gray-600">Premium Tasarım</div>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg text-center">
                  <Star className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">VIP Serisi</div>
                  <div className="text-sm text-gray-600">Lüks Mekanlar</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex-1">
                  <Phone className="h-5 w-5 mr-2" />
                  Premium Fiyat Al
                </Button>
                <Button size="lg" variant="outline" className="flex-1 border-purple-300 text-purple-700 hover:bg-purple-50">
                  <Download className="h-5 w-5 mr-2" />
                  Katalog İndir
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Premium Özellikler */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gem className="h-6 w-6 text-purple-600" />
                  Premium Özellikler
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {premiumOzellikler.map((ozellik, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{ozellik}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-pink-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-6 w-6 text-pink-600" />
                  Tasarım Avantajları
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tasarimAvantajlari.map((avantaj, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
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
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-6 w-6 text-blue-600" />
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

          {/* Premium Kullanım Alanları */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Premium Kullanım Alanları</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                MT 2500K Kristal serisi, estetiğin ve güvenliğin bir arada önemli olduğu lüks mekanlar için özel tasarlanmıştır.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kullanimAlanlari.map((alan, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gradient">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <alan.icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{alan.title}</h3>
                    <p className="text-gray-600 text-sm">{alan.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Premium İletişim CTA */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl p-8 text-white text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="h-6 w-6" />
                <h2 className="text-2xl font-bold">Premium Kristal Turnike Sistemi</h2>
                <Star className="h-6 w-6" />
              </div>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Lüks mekanınız için özel tasarım danışmanlığı alın. VIP alanlarınızda hem güvenlik hem estetik mükemmelliği yakalayın.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Phone className="h-8 w-8 mx-auto mb-2" />
                  <div className="font-semibold mb-1">Premium Danışman</div>
                  <div className="text-white/90">0212 XXX XX XX</div>
                </div>
                <div className="text-center">
                  <Mail className="h-8 w-8 mx-auto mb-2" />
                  <div className="font-semibold mb-1">VIP Destek</div>
                  <div className="text-white/90">premium@mikateknoloji.com</div>
                </div>
                <div className="text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-2" />
                  <div className="font-semibold mb-1">Showroom</div>
                  <div className="text-white/90">İstanbul, Türkiye</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  <Link href="/iletisim">
                    Premium Keşif Talep Et
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  VIP Teklif Al
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Geri Dön */}
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
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