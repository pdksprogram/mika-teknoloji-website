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
  Clock,
  ArrowLeft,
  Factory
} from "lucide-react";
import { BEL_TURNIKE_IMAGES } from "@/assetsMap";
import { Link } from "wouter";

export default function T345DetailPage() {
  
  const technicalSpecs = [
    { label: "Kontrol / Çalışma Voltajı", value: "100-230 VAC 50/60 Hz" },
    { label: "Güç Tüketimi", value: "45 W" },
    { label: "Çalışma Sıcaklığı", value: "-30° C - +80° C" },
    { label: "Geçiş Hızı", value: "40 Kişi / Dakika" },
    { label: "Geçiş Aralığı", value: "Min. 42 cm / Max. 50 cm" },
    { label: "Ağırlık", value: "45 Kg" },
    { label: "Kullanım Alanları", value: "İç Ortam / Dış Ortam / Endüstriyel" },
    { label: "Koruma", value: "IP 65 (Su ve Toz Geçirmez)" },
    { label: "Darbe Direnci", value: "IK08 (Yüksek)" },
    { label: "Garanti", value: "3 Yıl Kapsamlı" }
  ];


  const applicationAreas = [
    "Fabrikalar ve endüstriyel tesisler",
    "Havalimanları", 
    "Metro istasyonları",
    "Büyük ofis kompleksleri",
    "Hastaneler",
    "Üniversite kampüsleri",
    "Yüksek güvenlik alanları",
    "Askeri tesisler"
  ];

  const securityFeatures = [
    {
      icon: Factory,
      title: "Endüstriyel Dayanıklılık",
      description: "Ağır sanayi koşullarında 24/7 kesintisiz çalışma kapasitesi"
    },
    {
      icon: Shield,
      title: "Yüksek Güvenlik",
      description: "Anti-tailgating teknolojisi ile çoklu geçiş engelleme"
    },
    {
      icon: Users,
      title: "Yoğun Trafik",
      description: "Günde 10.000+ geçişe dayanıklı motor ve mekanik yapı"
    },
    {
      icon: Clock,
      title: "Hızlı Geçiş",
      description: "Optimize edilmiş motor ile saniyede 1.5 geçiş hızı"
    }
  ];

  const advantages = [
    "24/7 kesintisiz çalışma kapasitesi",
    "Aşırı hava koşullarına dayanıklılık", 
    "Yoğun trafik akışını sorunsuz yönetim",
    "Minimal bakım gereksinimleri",
    "Uzun ömürlü endüstriyel komponentler",
    "Gelişmiş güvenlik algoritmaları",
    "Çoklu entegrasyon desteği",
    "Kapsamlı uzaktan izleme"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>T 345 Endüstriyel Bel Tipi Turnike Sistemi | Mika Teknoloji</title>
        <meta name="description" content="T 345 endüstriyel bel tipi turnike sistemi. Ağır sanayi koşullarında 24/7 çalışma. Yoğun trafik, yüksek güvenlik, IP65 koruma." />
        <meta name="keywords" content="T 345, endüstriyel turnike, ağır hizmet turnike, fabrika turnike, IP65 turnike, 24/7 turnike" />
        
        <meta property="og:title" content="T 345 Endüstriyel Turnike Sistemi | Mika Teknoloji" />
        <meta property="og:description" content="Endüstriyel dayanıklılık ile T 345 bel tipi turnike sistemi. Fabrikalar ve yoğun trafik alanları için." />
        <meta property="og:image" content="https://mikateknoloji.com/t-345-elektromekanik-turnike.jpg" />
        <meta property="og:url" content="https://mikateknoloji.com/urunler/t345-turnike" />
        
        <link rel="canonical" href="https://mikateknoloji.com/urunler/t345-turnike" />
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
            <span className="text-gray-900 font-medium">T 345</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-800 to-slate-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-400/30 mb-4">
                Endüstriyel Sınıf
              </Badge>
              <h1 className="text-4xl font-bold mb-6">
                T 345
                <span className="block text-2xl font-normal text-white/90 mt-2">
                  Endüstriyel Elektromekanik Bel Tipi Turnike Sistemi
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Ağır sanayi koşulları için tasarlanmış, 24/7 kesintisiz çalışma kapasitesine sahip, 
                yoğun trafik akışını sorunsuz yöneten profesyonel turnike sistemi.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  <Phone className="h-5 w-5 mr-2" />
                  Endüstriyel Teklif Al
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Download className="h-5 w-5 mr-2" />
                  Teknik Katalog
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
                  src={BEL_TURNIKE_IMAGES.bt6}
                  alt="T 345 Endüstriyel Bel Tipi Turnike"
                  className="w-full h-auto max-w-md mx-auto rounded-lg shadow-2xl"
                  loading="eager"
                />
                <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold">
                  PRO
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Endüstriyel Özellikler</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              T 345, fabrika ve yoğun trafik alanlarında mükemmel performans sağlar
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
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-orange-500" />
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
                    <Settings className="h-6 w-6 text-orange-500" />
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
                  <CardTitle>Endüstriyel Avantajlar</CardTitle>
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
                  <CardTitle>Endüstriyel Uygulama Alanları</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    {applicationAreas.map((area, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
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
      <div className="py-16 bg-gradient-to-r from-gray-800 to-slate-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                T 345 İle Endüstriyel Güvenlik Standardı
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Fabrikanızda kesintisiz güvenlik sağlayın. Endüstriyel keşif ve özel fiyat teklifi için uzman ekibimizle görüşün.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                  <Link href="/iletisim">
                    Endüstriyel Keşif Talep Et
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