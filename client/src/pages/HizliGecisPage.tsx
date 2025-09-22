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
  Zap,
  Clock,
  Users,
  Building,
  Activity
} from "lucide-react";
import { HIZLI_GECIS_TURNIKE_IMAGES } from "@/assetsMap";
import { Link } from "wouter";

export default function HizliGecisPage() {
  
  const hizliGecisTurnikeModelleri = [
    {
      id: "mt-t300-hg20",
      model: "MT T300 HG20",
      title: "Hızlı Geçiş Turnike Sistemi",
      image: HIZLI_GECIS_TURNIKE_IMAGES.hg1,
      features: ["20 Kişi/Dakika Kapasitesi", "RFID Kart Okuyucu", "LED Durum Göstergesi", "Anti-Tailgating", "Acil Açılma", "Ses Uyarı Sistemi"],
      price: "Fiyat İçin Ara",
      description: "Yüksek kapasiteli hızlı geçiş kontrolü. Metro istasyonları ve havaalanları için ideal çözüm."
    },
    {
      id: "mt-t300-hg20-chubby",
      model: "MT T300 HG20 Chubby",
      title: "Chubby Hızlı Geçiş Turnike Sistemi",
      image: HIZLI_GECIS_TURNIKE_IMAGES.hg2,
      features: ["Geniş Geçiş Alanı", "Valiz ve Çanta Dostu", "20 Kişi/Dakika", "Kompakt Tasarım", "Güçlü Motor", "Dayanıklı Yapı"],
      price: "Fiyat İçin Ara",
      description: "Geniş geçiş alanı ile valiz taşıyan yolcular için özel tasarım. Havaalanı ve tren istasyonları için mükemmel."
    },
    {
      id: "mt-t300-hg40",
      model: "MT T300 HG40",
      title: "HG40 Yüksek Kapasiteli Turnike",
      image: HIZLI_GECIS_TURNIKE_IMAGES.hg3,
      features: ["40 Kişi/Dakika Kapasitesi", "Çift Yönlü Geçiş", "Yoğun Trafik Yönetimi", "Gelişmiş Sensörler", "Güvenlik Kameraları", "Uzaktan Kontrol"],
      price: "Fiyat İçin Ara",
      description: "Ultra yüksek kapasiteli turnike sistemi. Büyük alışveriş merkezleri ve stadyumlar için tasarlandı."
    },
    {
      id: "mt-t350-hg60",
      model: "MT T350 HG60",
      title: "Premium Hızlı Geçiş Sistemi",
      image: HIZLI_GECIS_TURNIKE_IMAGES.hg4,
      features: ["60 Kişi/Dakika Premium", "Biyometrik Entegrasyon", "Yapay Zeka Destekli", "Yüz Tanıma", "Akıllı Analitik", "VIP Geçiş Modu"],
      price: "Fiyat İçin Ara",
      description: "En yüksek kapasiteli premium turnike. Büyük havaalanları ve uluslararası terminaller için."
    },
    {
      id: "mt-t350-hg60-chubby",
      model: "MT T350 HG60 Chubby",
      title: "Premium Chubby Hızlı Geçiş",
      image: HIZLI_GECIS_TURNIKE_IMAGES.hg5,
      features: ["Ekstra Geniş Geçiş", "60 Kişi/Dakika", "Engelli Erişimi", "Büyük Bagaj Uyumlu", "Premium Malzeme", "Sessiz Çalışma"],
      price: "Fiyat İçin Ara",
      description: "En geniş geçiş alanına sahip premium turnike. Lüks havaalanları ve VIP terminaller için."
    },
    {
      id: "mt-t300-hg120",
      model: "MT T300 HG120",
      title: "Ultra Hızlı Geçiş Sistemi",
      image: HIZLI_GECIS_TURNIKE_IMAGES.hg6,
      features: ["120 Kişi/Dakika Ultra", "Çoklu Geçiş Modu", "Yığın Kontrol", "Akış Optimizasyonu", "Gerçek Zamanlı Analiz", "Merkezi Yönetim"],
      price: "Fiyat İçin Ara",
      description: "En hızlı geçiş kapasiteli turnike sistemi. Mega alışveriş merkezleri ve büyük etkinlik alanları için."
    },
    {
      id: "mt-t300-hg120-chubby",
      model: "MT T300 HG120 Chubby",
      title: "Ultra Chubby Hızlı Geçiş",
      image: HIZLI_GECIS_TURNIKE_IMAGES.hg7,
      features: ["Maksimum Geçiş Alanı", "120 Kişi/Dakika", "Büyük Ekipman Uyumlu", "Çoklu Kullanıcı", "Gelişmiş Güvenlik", "Otomatik Temizlik"],
      price: "Fiyat İçin Ara",
      description: "En geniş ve en hızlı geçiş sistemi. Büyük kongre merkezleri ve fuarlar için tasarlandı."
    },
    {
      id: "mt-t300-slim-kisa",
      model: "MT T300 HG SLIM",
      title: "Kısa SLIM Hızlı Geçiş",
      image: HIZLI_GECIS_TURNIKE_IMAGES.hg8,
      features: ["Kompakt SLIM Tasarım", "Az Yer Kaplar", "Hızlı Montaj", "Enerji Tasarruflu", "Estetik Görünüm", "Sessiz Motor"],
      price: "Fiyat İçin Ara",
      description: "Dar alanlara özel kompakt tasarım. Küçük ofis binaları ve mağaza girişleri için ideal."
    },
    {
      id: "mt-t300-slim-uzun",
      model: "MT T300 HG SLIM",
      title: "Uzun SLIM Hızlı Geçiş",
      image: HIZLI_GECIS_TURNIKE_IMAGES.hg9,
      features: ["Uzun SLIM Kasa", "Gelişmiş Güvenlik", "Çoklu Sensör", "Entegre Kameralar", "Uzun Ömürlü", "Profesyonel Tasarım"],
      price: "Fiyat İçin Ara",
      description: "Uzun kasalı SLIM tasarım. Kurumsal binalar ve güvenlik odaklı alanlar için gelişmiş çözüm."
    }
  ];

  const referansResimler = [
    "/ref-1.png",
    "/ref-2.png", 
    "/ref-3.png",
    "/ref-4.png",
    "/ref-5.png",
    "/ref-6.png",
    "/ref-7.png",
    "/ref-8.png"
  ];

  return (
    <>
      <Helmet>
        <title>Hızlı Geçiş Turnike Sistemleri - Yüksek Kapasiteli | Mika Teknoloji</title>
        <meta name="description" content="Hızlı geçiş turnike sistemleri. 20-120 kişi/dakika kapasiteli, havaalanı, metro, alışveriş merkezi için profesyonel çözümler. Betaper kalitesi ile." />
        <meta name="keywords" content="hızlı geçiş turnike, yüksek kapasiteli turnike, havaalanı turnike, metro turnike, chubby turnike, slim turnike, mika teknoloji" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary via-pink-500 to-orange-400 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Zap className="h-12 w-12 text-white" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Hızlı Geçiş Turnike Sistemleri
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              20-120 Kişi/Dakika Kapasiteli Profesyonel Çözümler
            </p>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Havaalanları, metro istasyonları, alışveriş merkezleri için yüksek kapasiteli hızlı geçiş turnike sistemleri. 
              RFID, biyometrik entegrasyon ve akıllı güvenlik özellikleri ile donatılmış.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto mb-8">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <Clock className="h-8 w-8 mx-auto mb-2 text-white" />
                <p className="text-sm text-white/90">20-120 Kişi/Dk</p>
              </motion.div>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <Activity className="h-8 w-8 mx-auto mb-2 text-white" />
                <p className="text-sm text-white/90">Yoğun Trafik</p>
              </motion.div>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <Users className="h-8 w-8 mx-auto mb-2 text-white" />
                <p className="text-sm text-white/90">Çoklu Kullanıcı</p>
              </motion.div>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <Building className="h-8 w-8 mx-auto mb-2 text-white" />
                <p className="text-sm text-white/90">Kurumsal Çözüm</p>
              </motion.div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                Hemen Ara: 0546 712 22 96
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Mail className="mr-2 h-5 w-5" />
                Teklif Al
              </Button>
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
            <span className="text-primary font-medium">Hızlı Geçiş Turnike Sistemleri</span>
          </div>
        </div>
      </div>

      {/* Ürünler */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Hızlı Geçiş Turnike Modelleri
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                20-120 kişi/dakika kapasiteli hızlı geçiş turnike sistemleri. Havaalanı, metro, alışveriş merkezi ve kurumsal binalar için profesyonel çözümler.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 xs:gap-4 sm:gap-6">
            {hizliGecisTurnikeModelleri.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <div className="relative overflow-hidden aspect-[3/2] xs:aspect-[4/3] sm:aspect-[3/2]">
                    <img 
                      src={model.image} 
                      alt={model.title}
                      className="w-full h-full object-cover xs:object-contain sm:object-cover bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <Badge className="absolute top-3 left-3 bg-green-600 text-white">
                      {model.model}
                    </Badge>
                  </div>
                  <CardContent className="p-3 xs:p-4 sm:p-6">
                    <h3 className="font-bold text-gray-900 mb-1 xs:mb-2 text-sm xs:text-base group-hover:text-primary transition-colors">
                      {model.title}
                    </h3>
                    <p className="text-gray-600 text-xs xs:text-sm mb-2 xs:mb-4">
                      {model.description}
                    </p>
                    
                    <div className="space-y-1 xs:space-y-2 mb-3 xs:mb-6">
                      {model.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700 text-xs xs:text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-primary font-bold">
                        {model.price}
                      </div>
                      <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                        <Link href={
                          model.id === "mt-t300-hg20" ? "/urunler/hizli-gecis-t300-hg20-detay" :
                          model.id === "mt-t300-hg20-chubby" ? "/urunler/hizli-gecis-t300-hg20-chubby-detay" :
                          model.id === "mt-t300-hg40" ? "/urunler/hizli-gecis-t300-hg40-detay" :
                          model.id === "mt-t350-hg60" ? "/urunler/hizli-gecis-t350-hg60-detay" :
                          model.id === "mt-t350-hg60-chubby" ? "/urunler/hizli-gecis-t350-hg60-chubby-detay" :
                          model.id === "mt-t300-hg120" ? "/urunler/hizli-gecis-t300-hg120-detay" :
                          model.id === "mt-t300-hg120-chubby" ? "/urunler/hizli-gecis-t300-hg120-chubby-detay" :
                          model.id === "mt-t300-slim-kisa" ? "/urunler/hizli-gecis-t300-slim-kisa-detay" :
                          model.id === "mt-t300-slim-uzun" ? "/urunler/hizli-gecis-t300-slim-uzun-detay" :
                          "#"
                        }>
                          Detay
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Referanslar */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hızlı Geçiş Turnike Referanslarımız
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Havaalanları, metro istasyonları ve büyük alışveriş merkezlerinde hızlı geçiş sistemlerimiz.
            </p>
          </div>
          
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 xs:gap-3 sm:gap-4">
            {referansResimler.map((resim, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-square overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img 
                    src={resim} 
                    alt={`Referans ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
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
              Hızlı Geçiş Turnike Sisteminizi Şimdi Kurun
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Profesyonel ekibimiz size en uygun hızlı geçiş turnike çözümünü sunmak için hazır. Ücretsiz keşif ve detaylı teklif alın.
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