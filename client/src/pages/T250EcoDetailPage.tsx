import { motion } from "framer-motion";
import { Kirinti } from "@/components/PdksIcerik";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import {
  CheckCircle,
  Shield,
  Settings,
  ArrowLeft,
  DollarSign,
} from "lucide-react";
import { BEL_TURNIKE_IMAGES } from "@/assetsMap";
import { Link } from "wouter";
import CtaDugmeleri from "@/components/CtaDugmeleri";
import { boyut } from "@/lib/gorselBoyut";

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
      icon: Settings,
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
        <title>MT 250 ECO Bel Tipi Turnike – Ekonomik Model | Mika</title>
        <meta name="description" content="MT 250 ECO ekonomik bel tipi turnike sistemi. Düşük bütçeli projeler için maliyet-etkin çözüm. Kolay kurulum, düşük enerji tüketimi." />
        <meta name="keywords" content="MT 250 ECO, ekonomik turnike, bel tipi turnike, düşük bütçe turnike, basit turnike sistemi" />
        
        <meta property="og:title" content="MT 250 ECO Ekonomik Turnike Sistemi | Mika Teknoloji" />
        <meta property="og:description" content="Ekonomik fiyat avantajı ile MT 250 ECO bel tipi turnike sistemi. Küçük işletmeler için ideal çözüm." />
        <meta property="og:image" content="https://mikateknoloji.com/t-250-eco-elektromekanik-turnike.jpg" />
        <meta property="og:image:width" content="816" />
        <meta property="og:image:height" content="810" />
        <meta name="twitter:image" content="https://mikateknoloji.com/t-250-eco-elektromekanik-turnike.jpg" />
        <meta property="og:url" content="https://mikateknoloji.com/urunler/t250-eco-turnike" />
        
        <link rel="canonical" href="https://mikateknoloji.com/urunler/t250-eco-turnike" />
      </Helmet>

      <Kirinti maddeler={[{ ad: "Ana Sayfa", yol: "/" }, { ad: "Ürünler", yol: "/urunler" }, { ad: "Bel Tipi Turnikeler", yol: "/urunler/bel-tipi-turnike" }, { ad: "MT 250 ECO", yol: "/urunler/t250-eco-turnike" }]} />

      {/* Hero Section */}
      <div className="bg-white border-b border-slate-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={false}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                MT 250 ECO
                <span className="block text-xl font-normal text-slate-600 mt-2">
                  Ekonomik Elektromekanik Bel Tipi Turnike Sistemi
                </span>
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                Küçük ve orta ölçekli işletmeler için tasarlanmış ekonomik fiyatlı, 
                güvenilir ve kolay kullanımlı bel tipi turnike sistemi.
              </p>
              
              <CtaDugmeleri tur="donanim" />
            </motion.div>
            
            <motion.div
              initial={false}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <img {...boyut(BEL_TURNIKE_IMAGES.bt2)} {...{ fetchpriority: "high" }}
                  src={BEL_TURNIKE_IMAGES.bt2}
                  alt="MT 250 ECO Ekonomik Bel Tipi Turnike"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ekonomik Avantajlar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              MT 250 ECO, bütçe dostu fiyatıyla küçük işletmelerin güvenlik ihtiyaçlarını karşılar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={false}
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
              initial={false}
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
              initial={false}
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
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
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
      <div className="py-16 bg-slate-900 border-t-4 border-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={false}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                MT 250 ECO İle Ekonomik Güvenlik Çözümü
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Küçük bütçenizle büyük güvenlik sağlayın. Keşif ve detaylı fiyat teklifi için bize ulaşın.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/iletisim">
                    Teklif Alın
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