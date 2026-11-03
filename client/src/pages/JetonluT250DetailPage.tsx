import { motion } from "framer-motion";
import { Kirinti } from "@/components/PdksIcerik";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import {
  Phone,
  Download,
  CheckCircle,
  Shield,
  Coins,
  CreditCard,
  Settings,
  Clock,
  ArrowLeft,
} from "lucide-react";
import { BEL_TURNIKE_IMAGES } from "@/assetsMap";
import { Link } from "wouter";

export default function JetonluT250DetailPage() {
  
  const technicalSpecs = [
    { label: "Kontrol / Çalışma Voltajı", value: "100-230 VAC 50/60 Hz" },
    { label: "Güç Tüketimi", value: "35 W" },
    { label: "Çalışma Sıcaklığı", value: "-20° C - +70° C" },
    { label: "Geçiş Hızı", value: "30 Kişi / Dakika" },
    { label: "Jeton Kapasitesi", value: "2000 Adet Kasa" },
    { label: "Para Üstü", value: "Otomatik Sistem" },
    { label: "Ağırlık", value: "38 Kg" },
    { label: "Kullanım Alanları", value: "İç Ortam / WC Girişleri" },
    { label: "Koruma", value: "IP 54" }
  ];


  const applicationAreas = [
    "Ücretli WC girişleri",
    "Halk plajları", 
    "Park ve bahçeler",
    "Dinlence tesisleri",
    "Kamp alanları",
    "Sosyal tesisler",
    "Belediye hizmet alanları"
  ];

  const securityFeatures = [
    {
      icon: Coins,
      title: "Jeton Sistemi",
      description: "Güvenli jeton kabul sistemi ile sahte jeton koruması"
    },
    {
      icon: CreditCard,
      title: "Para Kabul",
      description: "Madeni para kabul sistemi ve otomatik para üstü verme"
    },
    {
      icon: Shield,
      title: "Güvenli Kasa",
      description: "Çelik güvenlik kasası ile para koruma sistemi"
    },
    {
      icon: Clock,
      title: "Otomatik Rapor",
      description: "Günlük/aylık tahsilat raporu ve sayım sistemi"
    }
  ];

  const advantages = [
    "İnsan faktörünü ortadan kaldırır",
    "24 saat kesintisiz tahsilat", 
    "Sahte para/jeton koruması",
    "Otomatik raporlama sistemi",
    "Düşük işletme maliyeti",
    "Kolay kurulum ve bakım",
    "Çoklu ödeme seçeneği",
    "Uzaktan izleme imkanı"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>MT 250 Jetonlu Turnike Sistemi - WC Turnikesi | Mika Teknoloji</title>
        <meta name="description" content="MT 250 jetonlu turnike sistemi. WC turnikesi, ücretli geçişler için otomatik tahsilat. Jeton kabul sistemi, para üstü verme." />
        <meta name="keywords" content="jetonlu turnike, WC turnikesi, ücretli geçiş, otomatik tahsilat, jeton sistemi, para üstü" />
        
        <meta property="og:title" content="MT 250 Jetonlu Turnike - WC Turnikesi | Mika Teknoloji" />
        <meta property="og:description" content="Ücretli geçişler için MT 250 jetonlu turnike sistemi. Otomatik tahsilat ve para üstü sistemi." />
        <meta property="og:image" content="https://mikateknoloji.com/jetonlu-turnike-sistemi-t250.jpg" />
        <meta property="og:url" content="https://mikateknoloji.com/urunler/jetonlu-t250-turnike" />
        
        <link rel="canonical" href="https://mikateknoloji.com/urunler/jetonlu-t250-turnike" />
      </Helmet>

      <Kirinti maddeler={[{ ad: "Ana Sayfa", yol: "/" }, { ad: "Ürünler", yol: "/urunler" }, { ad: "Bel Tipi Turnikeler", yol: "/urunler/bel-tipi-turnike" }, { ad: "MT 250 Jetonlu", yol: "/urunler/jetonlu-t250-turnike" }]} />

      {/* Hero Section */}
      <div className="bg-white border-b border-slate-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                MT 250 Jetonlu
                <span className="block text-xl font-normal text-slate-600 mt-2">
                  Jetonlu Turnike Sistemi - WC Turnikesi
                </span>
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                Ücretli geçişler için tasarlanmış otomatik tahsilat sistemi. 
                WC girişleri ve kamu alanları için mükemmel çözüm.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/iletisim">
                    <Phone className="h-5 w-5 mr-2" />
                    Jetonlu Sistem Teklifi
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/iletisim">
                    <Download className="h-5 w-5 mr-2" />
                    Ödeme Sistemi Kataloğu
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <img 
                  src={BEL_TURNIKE_IMAGES.bt11}
                  alt="MT 250 Jetonlu Turnike Sistemi"
                  className="w-full h-auto max-w-md mx-auto"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ödeme Sistemi Özellikleri</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              MT 250 Jetonlu, otomatik tahsilat sistemi ile insan faktörünü ortadan kaldırır
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
                  <CardTitle>Sistem Avantajları</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {advantages.map((advantage, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-gray-700">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Kullanım Alanları</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
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
      <div className="py-16 bg-slate-900 border-t-4 border-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                MT 250 Jetonlu İle Otomatik Tahsilat
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                WC girişlerinde otomatik para tahsilatı yapın. İnsan faktörünü ortadan kaldırın, gelir güvenliğinizi artırın.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/iletisim">
                    Jetonlu Sistem Teklifi Al
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outlineLight">
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