import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { 
  CheckCircle, 
  Phone,
  Mail,
  MapPin,
  ArrowLeft,
  Zap,
  Settings,
  Users,
  Accessibility,
  Building
} from "lucide-react";
import { ENGELLI_TURNIKE_IMAGES } from "@/assetsMap";
import { Link } from "wouter";

export default function MT230MVIPSlimDetailPage() {
  const productDetails = {
    model: "MT 230 MVIP",
    title: "Slim VIP Turnike Sistemi", 
    subtitle: "Şık Tasarım ile Engelli ve VIP Geçiş Çözümü",
    price: "Fiyat İçin Ara",
    mainImage: ENGELLI_TURNIKE_IMAGES.et3,
    category: "Slim VIP Turnike",
    description: "Mika Teknoloji MT 230 MVIP Slim Turnike, tekerlekli sandalye kullanıcıları ve VIP geçişler için alternatif geçiş hattı sunan kompakt turnike sistemidir. Şık dizayn ve modern görünümü ile herhangi bir iç mekanda rahatlıkla kullanılabilir.",
    
    features: [
      "Engelli ve VIP Geçişler İçin Özel Tasarım",
      "Slim ve Kompakt Yapı - Az Yer Kaplar",
      "304 Kalite Paslanmaz Çelik Gövde", 
      "10mm Pleksi Glass Kanat Yapısı",
      "Çift Yönlü Otomatik Çalışma",
      "90° Otomatik Açılma Sistemi",
      "Kırmızı/Yeşil/Mavi LED Göstergeler",
      "15 Saniye Otomatik Kapanma (Ayarlanabilir)"
    ],
    
    technicalSpecs: [
      { label: "Kontrol/Çalışma Voltajı", value: "100-230 VAC 50/60 Hz" },
      { label: "Güç Tüketimi", value: "30 W" },
      { label: "Çalışma Sıcaklığı", value: "-10°C / +50°C" },
      { label: "Geçiş Hızı", value: "20-30 Kişi/Dakika" },
      { label: "Ağırlık", value: "31 kg" },
      { label: "Kullanım Alanı", value: "İç Ortam" },
      { label: "Gövde Malzemesi", value: "304 Paslanmaz Çelik" },
      { label: "Kanat Uzunluğu", value: "850 mm" },
      { label: "Kanat Malzemesi", value: "10 mm Plexyglass" }
    ],
    
    applications: [
      "Bankalar ve Finansal Kurumlar",
      "Bakanlık ve Devlet Daireleri",
      "Yönetim Ofisleri ve İş Merkezleri",
      "Toplu Taşıma Merkezleri",
      "Hastaneler ve Sağlık Kuruluşları", 
      "Alışveriş Merkezleri VIP Alanları",
      "Otel ve Toplantı Salonları",
      "Hızlı Geçiş Turnikelerinin Yanında VIP Hattı"
    ],
    
    accessories: [
      "Biyometrik Okuyucu (Harici Aparat ile)",
      "Kart Okuyucu (Harici Aparat ile)", 
      "Buton ve Uzaktan Kumanda Sistemi",
      "LED Logo ve Işık Uygulaması",
      "Opsiyonel Akü Sistemi",
      "Çeşitli Entegrasyon Modülleri"
    ]
  };

  const advantages = [
    {
      icon: <Accessibility className="h-8 w-8 text-green-600" />,
      title: "Engelli Dostu Tasarım", 
      description: "Tekerlekli sandalye ve VIP geçişler için alternatif hat çözümü"
    },
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: "Kompakt ve Şık Tasarım",
      description: "Slim profil ile dar alanlarda bile rahatlıkla kullanılabilir"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Akıllı Otomatik Sistem",
      description: "90° otomatik açılma, 15 saniye bekleme ve otomatik kapanma"
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-600" />,
      title: "Gelişmiş Entegrasyon",
      description: "Her türlü kart okuyucu ve biyometrik sistem ile uyumlu"
    }
  ];

  return (
    <>
      <Helmet>
        <title>MT 230 MVIP Slim VIP Turnike Sistemi | Mika Teknoloji</title>
        <meta name="description" content="MT 230 MVIP Slim Turnike - Engelli ve VIP geçişler için kompakt çözüm. 304 paslanmaz çelik, 10mm pleksi glass kanat, otomatik açılma sistemi." />
        <meta name="keywords" content="mt 230 mvip slim, vip turnike, engelli turnike, kompakt turnike, slim turnike, otomatik turnike, mika teknoloji" />
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/urunler" className="hover:text-primary">Ürünler</Link>
            <span>/</span>
            <Link href="/urunler/engelli-turnike" className="hover:text-primary">Engelli Turnikeler</Link>
            <span>/</span>
            <span className="text-primary font-medium">MT 230 MVIP Slim</span>
          </nav>
        </div>
      </div>

      {/* Ürün Detay Hero */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Ürün Görseli */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 shadow-lg">
                <img 
                  src={productDetails.mainImage}
                  alt={productDetails.title}
                  className="w-full h-full object-contain"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white text-sm px-3 py-1">
                  {productDetails.category}
                </Badge>
              </div>
            </motion.div>

            {/* Ürün Bilgileri */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {productDetails.model}
                </h1>
                <h2 className="text-2xl text-primary mb-4">
                  {productDetails.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {productDetails.subtitle}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {productDetails.description}
                </p>
              </div>

              <div className="flex items-center gap-4 py-4">
                <div className="text-3xl font-bold text-primary">
                  {productDetails.price}
                </div>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/iletisim">
                    <Phone className="mr-2 h-4 w-4" />
                    Fiyat Teklifi Al
                  </Link>
                </Button>
              </div>

              <div className="pt-4">
                <Button asChild variant="outline">
                  <Link href="/urunler/engelli-turnike">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Engelli Turnike Listesine Dön
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Özellikler */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ürün Özellikleri
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              MT 230 MVIP Slim Turnike'nin detaylı özellik ve avantajları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Özellikler Listesi */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Temel Özellikler
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-3">
                  {productDetails.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Avantajlar */}
            <div className="space-y-6">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{advantage.title}</h3>
                    <p className="text-gray-600 text-sm">{advantage.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Teknik Özellikler */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Teknik Özellikler
              </h2>
              <p className="text-gray-600">
                Detaylı teknik spesifikasyon ve performans bilgileri
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {productDetails.technicalSpecs.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                      <span className="font-medium text-gray-900">{spec.label}</span>
                      <span className="text-primary font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Kullanım Alanları ve Aksesuarlar */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Kullanım Alanları */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  Kullanım Alanları
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid grid-cols-1 gap-3">
                  {productDetails.applications.map((application, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{application}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Aksesuarlar */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-purple-600" />
                  Opsiyonel Aksesuarlar
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid grid-cols-1 gap-3">
                  {productDetails.accessories.map((accessory, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{accessory}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-primary to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              MT 230 MVIP Slim Turnike Sistemi
            </h2>
            <p className="text-xl mb-8">
              Kompakt ve şık tasarımıyla engelli erişim ve VIP geçiş çözümü. Profesyonel keşif ve detaylı teklif için bizimle iletişime geçin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/iletisim">Ücretsiz Keşif</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <a href="tel:+902123456789">
                  <Phone className="mr-2 h-4 w-4" />
                  Hemen Ara
                </a>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+90 212 345 67 89</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@mikateknoloji.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>İstanbul, Türkiye</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}