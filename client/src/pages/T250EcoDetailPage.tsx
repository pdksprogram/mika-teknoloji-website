import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { 
  ChevronRight, 
  Phone, 
  Download,
  CheckCircle,
  Shield,
  Settings,
  ArrowLeft,
  DollarSign
} from "lucide-react";
import { BEL_TURNIKE_IMAGES } from "@/assetsMap";
import { Link } from "wouter";

export default function T250EcoDetailPage() {
  
  const technicalSpecs = [
    { label: "Kontrol / Çalışma Voltajı", value: "100-230 VAC 50/60 Hz" },
    { label: "Güç Tüketimi", value: "25 W (Düşük)" },
    { label: "Çalışma Sıcaklığı", value: "-15° C - +60° C" },
    { label: "Geçiş Hızı", value: "25 Kişi / Dakika" },
    { label: "Geçiş Aralığı", value: "Min. 42 cm / Max. 47 cm" },
    { label: "Ağırlık", value: "28 Kg (Hafif)" },
    { label: "Kullanım Alanları", value: "İç Ortam" },
    { label: "Koruma", value: "IP 44" },
    { label: "Garanti", value: "2 Yıl" }
  ];


  const applicationAreas = [
    "Küçük ofisler",
    "Okullar", 
    "Kamu binaları",
    "Küçük işletmeler",
    "Apartman girişleri",
    "Küçük spor salonları"
  ];

  const securityFeatures = [
    {
      icon: DollarSign,
      title: "Ekonomik Çözüm",
      description: "Düşük bütçeli projeler için mükemmel maliyet/performans oranı"
    },
    {
      icon: Shield,
      title: "Temel Güvenlik",
      description: "Elektrik kesildiğinde manuel geçiş imkanı"
    },
    {
      icon: Settings,
      title: "Kolay Kurulum",
      description: "Basit montaj ve bakım gerektiren tasarım"
    },
    {
      icon: Zap,
      title: "Düşük Enerji",
      description: "Enerji tasarrufu sağlayan ekonomik motor sistemi"
    }
  ];

  const advantages = [
    "Ekonomik fiyat avantajı",
    "Hızlı kurulum ve devreye alma", 
    "Düşük işletme maliyeti",
    "Basit bakım prosedürleri",
    "Temel güvenlik özelliklerini karşılar",
    "Küçük ve orta ölçekli işletmeler için ideal"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>T 250 ECO Ekonomik Bel Tipi Turnike Sistemi | Mika Teknoloji</title>
        <meta name="description" content="T 250 ECO ekonomik bel tipi turnike sistemi. Düşük bütçeli projeler için maliyet-etkin çözüm. Kolay kurulum, düşük enerji tüketimi." />
        <meta name="keywords" content="T 250 ECO, ekonomik turnike, bel tipi turnike, düşük bütçe turnike, basit turnike sistemi" />
        
        <meta property="og:title" content="T 250 ECO Ekonomik Turnike Sistemi | Mika Teknoloji" />
        <meta property="og:description" content="Ekonomik fiyat avantajı ile T 250 ECO bel tipi turnike sistemi. Küçük işletmeler için ideal çözüm." />
        <meta property="og:image" content="https://mikateknoloji.com/t-250-eco-elektromekanik-turnike.jpg" />
        <meta property="og:url" content="https://mikateknoloji.com/urunler/t250-eco-turnike" />
        
        <link rel="canonical" href="https://mikateknoloji.com/urunler/t250-eco-turnike" />
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary transition-colors">
              Ana Sayfa
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/urunler" className="text-gray-500 hover:text-primary transition-colors">
              Ürünler  
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/urunler/bel-tipi-turnike" className="text-gray-500 hover:text-primary transition-colors">
              Bel Tipi Turnikeler
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-900 font-medium">T 250 ECO</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                Ekonomik Çözüm
              </Badge>
              <h1 className="text-4xl font-bold mb-6">
                T 250 ECO
                <span className="block text-2xl font-normal text-white/90 mt-2">
                  Ekonomik Elektromekanik Bel Tipi Turnike Sistemi
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Küçük ve orta ölçekli işletmeler için tasarlanmış ekonomik fiyatlı, 
                güvenilir ve kolay kullanımlı bel tipi turnike sistemi.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Phone className="h-5 w-5 mr-2" />
                  Fiyat Teklifi Al
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Download className="h-5 w-5 mr-2" />
                  Teknik Döküman
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur p-8">
                <img 
                  src={BEL_TURNIKE_IMAGES.bt2}
                  alt="T 250 ECO Ekonomik Bel Tipi Turnike"
                  className="w-full h-auto max-w-md mx-auto rounded-lg shadow-2xl"
                  loading="eager"
                />
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold">
                  ECO
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ekonomik Avantajlar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              T 250 ECO, bütçe dostu fiyatıyla küçük işletmelerin güvenlik ihtiyaçlarını karşılar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-6 w-6 text-primary" />
                    Teknik Özellikler
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {technicalSpecs.map((spec, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-600 font-medium">{spec.label}</span>
                      <span className="text-gray-900 font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Avantajlar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {advantages.map((advantage, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Uygulama Alanları</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {applicationAreas.map((area, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-gray-700 text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-primary to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                T 250 ECO İle Ekonomik Güvenlik Çözümü
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Küçük bütçenizle büyük güvenlik sağlayın. Ücretsiz keşif ve detaylı fiyat teklifi için hemen iletişime geçin.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Link href="/iletisim">
                    Ücretsiz Fiyat Teklifi
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/urunler/bel-tipi-turnike">
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Diğer Modeller
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}