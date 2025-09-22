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
  Shield,
  Settings,
  Users,
  Accessibility,
  Zap
} from "lucide-react";
import { ENGELLI_TURNIKE_IMAGES } from "@/assetsMap";
import { Link } from "wouter";

export default function MTT80YaprakDetailPage() {
  const productDetails = {
    model: "MT T80",
    title: "Yaprak Turnike Sistemi",
    subtitle: "Basit ve Etkili Tek Yön Kontrol Çözümü",
    price: "Fiyat İçin Ara",
    mainImage: ENGELLI_TURNIKE_IMAGES.et6,
    category: "Yaprak Turnike",
    description: "Mika Teknoloji MT T80 Yaprak Turnike, basit ve temel çözüm için tek yön kontrol sağlayan ekonomik turnike sistemidir. Market girişleri ve herhangi bir iç mekan giriş-çıkış kontrolünde rahatlıkla kullanılabilir.",
    
    features: [
      "Basit ve Temel Tek Yön Kontrol",
      "Elle Açılıp Kendiliğinden Geri Kapanma",
      "Krom-Nikel Kaplama Gövde",
      "Şık ve Kompakt Tasarım",
      "Pleksi Kapı Levhası Üzerinde İşaretler",
      "Düşük Bakım Gereksinimi",
      "Hızlı ve Kolay Montaj",
      "Engelli İşareti ve Dur İşareti Seçenekleri"
    ],
    
    technicalSpecs: [
      { label: "Gövde Malzemesi", value: "Krom-Nikel Kaplama" },
      { label: "Çalışma Prensibi", value: "Elle Açılma, Otomatik Kapanma" },
      { label: "Kontrol Türü", value: "Tek Yön Kontrol" },
      { label: "Ağırlık", value: "10 kg" },
      { label: "Boyutlar", value: "88 x 1000 mm" },
      { label: "Kapı Levhası", value: "Pleksi Glass" },
      { label: "Kurulum", value: "İç Mekan" },
      { label: "Bakım", value: "Minimal Bakım" }
    ],
    
    applications: [
      "Market ve Alışveriş Merkezleri",
      "Ofis Binaları Giriş Kontrolleri",
      "Küçük İşletme Giriş-Çıkışları",
      "Kafe ve Restoran Girişleri",
      "Kütüphane ve Okul Alanları",
      "Küçük Klinik ve Muayenehaneler",
      "Engelli Geçişine İhtiyaç Olan Alanlar",
      "Geçici Kontrol Noktaları"
    ],
    
    accessories: [
      "Engelli İşareti Pleksi Levhası",
      "DUR İşareti Pleksi Levhası",
      "Özel Logo ve İşaret Uygulamaları",
      "Farklı Renk Kaplama Seçenekleri",
      "Zemin Sabitleme Aparatları",
      "Bakım ve Temizlik Kitleri"
    ]
  };

  const advantages = [
    {
      icon: <Accessibility className="h-8 w-8 text-green-600" />,
      title: "Engelli Dostu Çözüm", 
      description: "Geniş geçiş alanı ile engelli bireyler için uygun tasarım"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Basit Çalışma Prensibi",
      description: "Elle açılma ve kendiliğinden kapanma - elektrik gerektirmez"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Dayanıklı Yapı",
      description: "Krom-nikel kaplama ile uzun ömürlü ve paslanmaz yapı"
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-600" />,
      title: "Düşük Maliyet",
      description: "Ekonomik çözüm, düşük bakım maliyeti ve uzun kullanım ömrü"
    }
  ];

  return (
    <>
      <Helmet>
        <title>MT T80 Yaprak Turnike Sistemi - Ekonomik Çözüm | Mika Teknoloji</title>
        <meta name="description" content="MT T80 Yaprak Turnike - Market ve ofis girişleri için basit tek yön kontrol. Krom-nikel kaplama, elle açılma, kendiliğinden kapanma sistemi." />
        <meta name="keywords" content="mt t80, yaprak turnike, tek yön kontrol, market turnike, ofis turnike, basit turnike, ekonomik turnike, mika teknoloji" />
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
            <span className="text-primary font-medium">MT T80 Yaprak</span>
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
                <Badge className="absolute top-4 left-4 bg-orange-600 text-white text-sm px-3 py-1">
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
              MT T80 Yaprak Turnike'nin detaylı özellik ve avantajları
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
              MT T80 Yaprak Turnike Sistemi
            </h2>
            <p className="text-xl mb-8">
              Ekonomik ve basit çözüm arıyorsanız, MT T80 Yaprak Turnike sizin için ideal. Detaylı bilgi ve teklif için hemen iletişime geçin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/iletisim">Ücretsiz Keşif</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <a href="tel:+905467122296">
                  <Phone className="mr-2 h-4 w-4" />
                  Hemen Ara
                </a>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+90 546 712 22 96</span>
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