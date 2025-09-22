import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { 
  CheckCircle, 
  Phone,
  Mail,
  MapPin,
  Download,
  ArrowLeft,
  Thermometer,
  Zap,
  Clock,
  Weight,
  Shield,
  Settings
} from "lucide-react";
import { Link, useParams } from "wouter";

interface TurnikeSpec {
  id: string;
  model: string;
  title: string;
  image: string;
  description: string;
  applications: string[];
  materials: string;
  usage: string;
  security: string;
  technicalSpecs: {
    voltage: string;
    power: string;
    temperature: string;
    capacity: string;
    passageGap: string;
    weight: string;
    environment: string;
    protection: string;
  };
  features: string[];
  price: string;
}

const turnikeSpecs: Record<string, TurnikeSpec> = {
  "t250": {
    id: "t250",
    model: "MT-250",
    title: "Elektromekanik Bel Tipi Turnike Sistemi",
    image: "/t-250-elektromekanik-turnike.jpg",
    description: "Standart kullanım alanları için ideal ekonomik çözüm. Yüksek dayanıklılık ve güvenilir performans sunar.",
    applications: [
      "Toplu taşıma alanları",
      "Üniversiteler ve okullar",
      "Bankalar ve iş merkezleri", 
      "Eğlence parkları",
      "Müzeler ve kültür merkezleri",
      "Spor salonları",
      "Konser ve etkinlik girişleri"
    ],
    materials: "MT-250 üç kollu bel tipi turnike standart olarak 304 paslanmaz çelikten üretilir. Tüm kollar ve gövde 304 paslanmaz çelik, göbek kısmı paslanmaya karşı alüminyum malzemeden üretilmiştir. Opsiyon olarak 316 paslanmaz çelik sactan üretim yapılabilir.",
    usage: "MT-250 bel turnikesi'nden çift yönlü geçiş sağlanabilir. Kart okuyucu, parmak izi veya yüz tanıma gibi her türlü geçiş kontrol cihazı, kuru kontak üzerinden turnikeye kolaylıkla entegre edilebilir. Geçiş hakkı verildiği anda turnike kilidi açılır ve hafifçe kollara dokunularak geçiş sağlanır.",
    security: "Elektrik kesilmesi durumunda, MT-250 bel tipi turnikesi'nin kolları iki yöne de serbest geçiş imkanı verir. Opsiyon olarak, düşen kol mekanizması sağlanabilir. Acil durumlarda sistemden gelen sinyal ile turnikenin kolları düşürülerek geçiş yolu tamamen boş hale getirilir.",
    technicalSpecs: {
      voltage: "100-230 VAC 50/60 Hz",
      power: "30 W",
      temperature: "-20°C - +70°C",
      capacity: "30 Kişi / Dakika",
      passageGap: "Min. 42 cm / Max. 47 cm",
      weight: "32 Kg",
      environment: "İç Ortam / Dış Ortam (Kapak silikonlandığında)",
      protection: "IP 54 (Opsiyon IP 65)"
    },
    features: [
      "Paslanmaz Çelik Gövde",
      "Elektromekanik Kontrol",
      "Manuel/Otomatik Mod",
      "LED Yönlendirme"
    ],
    price: "Fiyat İçin Ara"
  },
  "t250-eco": {
    id: "t250-eco",
    model: "MT-250 ECO",
    title: "Ekonomik Bel Tipi Turnike Sistemi",
    image: "/t-250-eco-elektromekanik-turnike.jpg",
    description: "Küçük işletmeler için uygun fiyatlı güvenlik çözümü.",
    applications: [
      "Küçük işletmeler",
      "Ofis binaları",
      "Mağazalar",
      "Küçük fabrikalar",
      "Depo girişleri"
    ],
    materials: "304 paslanmaz çelik gövde ve kollar. Ekonomik üretim için optimize edilmiş malzemeler kullanılır.",
    usage: "Ekonomik çözüm arayan işletmeler için tasarlanmış basit kullanımlı turnike sistemi.",
    security: "Temel güvenlik özelliklerini barındırır. Elektrik kesintisinde manuel geçiş imkanı.",
    technicalSpecs: {
      voltage: "100-230 VAC 50/60 Hz",
      power: "25 W",
      temperature: "-15°C - +60°C",
      capacity: "25 Kişi / Dakika",
      passageGap: "42 cm",
      weight: "28 Kg",
      environment: "İç Ortam",
      protection: "IP 54"
    },
    features: [
      "Ekonomik Çözüm",
      "Dayanıklı Yapı",
      "Kolay Kurulum",
      "Düşük Bakım"
    ],
    price: "Fiyat İçin Ara"
  },
  "t250-a2": {
    id: "t250-a2",
    model: "MT-250 A2",
    title: "Gelişmiş Bel Tipi Turnike Sistemi",
    image: "/t-250-a2-elektromekanik-turnike.jpg",
    description: "Yüksek güvenlik gereken alanlar için gelişmiş özellikler.",
    applications: [
      "Güvenlik merkezleri",
      "Hastaneler",
      "Devlet kurumları",
      "Yüksek güvenlikli tesisler",
      "Araştırma merkezleri"
    ],
    materials: "316 paslanmaz çelik opciyonlu, yüksek kaliteli malzemeler.",
    usage: "İleri sensör teknolojisi ve anti-tailgating özellikleri.",
    security: "Gelişmiş güvenlik protokolleri ve alarm sistemi.",
    technicalSpecs: {
      voltage: "100-230 VAC 50/60 Hz",
      power: "35 W",
      temperature: "-25°C - +70°C",
      capacity: "35 Kişi / Dakika",
      passageGap: "Min. 40 cm / Max. 50 cm",
      weight: "35 Kg",
      environment: "İç/Dış Ortam",
      protection: "IP 65"
    },
    features: [
      "İki Yönlü Geçiş",
      "Akıllı Sensörler",
      "Anti-Tailgating",
      "Alarm Sistemi"
    ],
    price: "Fiyat İçin Ara"
  },
  "t250-a2-eco": {
    id: "t250-a2-eco",
    model: "MT-250 A2 ECO",
    title: "Ekonomik İki Yönlü Turnike Sistemi",
    image: "/t-250-eco-a2-elektromekanik-turnike.jpg",
    description: "İki yönlü geçiş kontrolü için ekonomik seçenek.",
    applications: [
      "Orta ölçekli işletmeler",
      "Okullar",
      "Klinikler",
      "Büro kompleksleri"
    ],
    materials: "304 paslanmaz çelik, ekonomik A2 teknolojisi.",
    usage: "İki yönlü kontrol özelliği ile esnek kullanım.",
    security: "Temel güvenlik artı çift yönlü kontrol.",
    technicalSpecs: {
      voltage: "100-230 VAC 50/60 Hz",
      power: "32 W",
      temperature: "-20°C - +65°C",
      capacity: "30 Kişi / Dakika",
      passageGap: "42 cm - 47 cm",
      weight: "33 Kg",
      environment: "İç Ortam",
      protection: "IP 54"
    },
    features: [
      "İki Yönlü Kontrol",
      "Ekonomik Fiyat",
      "Güvenilir Çalışma",
      "Kolay Bakım"
    ],
    price: "Fiyat İçin Ara"
  },
  "t250-gt": {
    id: "t250-gt",
    model: "MT-250 GT",
    title: "Premium Üç Kollu Turnike Sistemi",
    image: "/t-250-gt-elektromekanik-turnike.jpg",
    description: "Prestijli mekanlar için estetik ve fonksiyonel çözüm.",
    applications: [
      "Lüks oteller",
      "Premium ofisler",
      "Sanat galerileri",
      "VIP alanlar",
      "Prestijli kurumlar"
    ],
    materials: "Premium paslanmaz çelik, özel tasarım detayları.",
    usage: "Sessiz çalışma ve hızlı geçiş özellikli premium turnike.",
    security: "Yüksek güvenlik ve estetik tasarım bir arada.",
    technicalSpecs: {
      voltage: "100-230 VAC 50/60 Hz",
      power: "28 W",
      temperature: "-20°C - +70°C",
      capacity: "40 Kişi / Dakika",
      passageGap: "42 cm - 48 cm",
      weight: "34 Kg",
      environment: "İç/Dış Ortam",
      protection: "IP 65"
    },
    features: [
      "Premium Tasarım",
      "Sessiz Çalışma",
      "Hızlı Geçiş",
      "Estetik Görünüm"
    ],
    price: "Fiyat İçin Ara"
  },
  "t345": {
    id: "t345",
    model: "MT-345",
    title: "Endüstriyel Bel Tipi Turnike Sistemi",
    image: "/t-345-elektromekanik-turnike.jpg",
    description: "Fabrika ve endüstriyel tesisler için dayanıklı sistem.",
    applications: [
      "Fabrikalar",
      "Endüstriyel tesisler",
      "Üretim alanları",
      "Ağır sanayi",
      "Madencilik tesisleri"
    ],
    materials: "Ağır hizmet tipi 316 paslanmaz çelik, endüstriyel grade malzemeler.",
    usage: "Yoğun kullanım ve zorlu çevre koşullarına dayanıklı.",
    security: "Endüstriyel güvenlik standartlarında üretilmiş.",
    technicalSpecs: {
      voltage: "100-230 VAC 50/60 Hz",
      power: "45 W",
      temperature: "-30°C - +80°C",
      capacity: "45 Kişi / Dakika",
      passageGap: "42 cm - 50 cm",
      weight: "42 Kg",
      environment: "Ağır Endüstriyel Ortam",
      protection: "IP 67"
    },
    features: [
      "Endüstriyel Dayanım",
      "Yoğun Kullanım",
      "Çevre Direnci",
      "Güçlü Motor"
    ],
    price: "Fiyat İçin Ara"
  },
  "t345-eco": {
    id: "t345-eco",
    model: "MT-345 ECO",
    title: "Ekonomik Endüstriyel Turnike",
    image: "/t-345-eco-elektromekanik-turnike.jpg",
    description: "Endüstriyel dayanıklılık, ekonomik maliyetle.",
    applications: [
      "Orta ölçekli fabrikalar",
      "Depo alanları",
      "İmalat tesisleri",
      "Lojistik merkezleri"
    ],
    materials: "304 paslanmaz çelik, endüstriyel dayanım özelliği.",
    usage: "Endüstriyel ortamlarda ekonomik çözüm.",
    security: "Temel endüstriyel güvenlik standartları.",
    technicalSpecs: {
      voltage: "100-230 VAC 50/60 Hz",
      power: "40 W",
      temperature: "-25°C - +70°C",
      capacity: "40 Kişi / Dakika",
      passageGap: "42 cm - 48 cm",
      weight: "38 Kg",
      environment: "Endüstriyel Ortam",
      protection: "IP 65"
    },
    features: [
      "Dayanıklı Yapı",
      "Uygun Fiyat",
      "Endüstriyel Kullanım",
      "Kolay Montaj"
    ],
    price: "Fiyat İçin Ara"
  },
  "t250-s": {
    id: "t250-s",
    model: "MT-250 S",
    title: "Kompakt Bel Tipi Turnike Sistemi",
    image: "/t-250-s-elektromekanik-turnike.jpg",
    description: "Dar alanlar için özel tasarlanmış kompakt çözüm.",
    applications: [
      "Dar geçitler",
      "Küçük ofisler",
      "Mağaza girişleri",
      "Klinik girişleri",
      "Kompakt alanlar"
    ],
    materials: "Kompakt tasarım için optimize edilmiş 304 paslanmaz çelik.",
    usage: "Dar alanlarda maksimum verimlilik.",
    security: "Kompakt boyutta güvenli geçiş kontrolü.",
    technicalSpecs: {
      voltage: "100-230 VAC 50/60 Hz",
      power: "25 W",
      temperature: "-15°C - +60°C",
      capacity: "32 Kişi / Dakika",
      passageGap: "40 cm - 45 cm",
      weight: "26 Kg",
      environment: "İç Ortam",
      protection: "IP 54"
    },
    features: [
      "Kompakt Tasarım",
      "Az Yer Kaplar",
      "Esnek Kurulum",
      "Hızlı Geçiş"
    ],
    price: "Fiyat İçin Ara"
  },
  "t450": {
    id: "t450",
    model: "MT-450",
    title: "Yüksek Kapasiteli Turnike Sistemi",
    image: "/t-450-elektromekanik-turnike.jpg",
    description: "Metro, hastane gibi yoğun trafikli alanlar için.",
    applications: [
      "Metro istasyonları",
      "Büyük hastaneler",
      "Havaalanları",
      "Kongre merkezleri",
      "Stadyumlar",
      "Alışveriş merkezleri"
    ],
    materials: "Yüksek kapasiteli kullanım için güçlendirilmiş 316 paslanmaz çelik.",
    usage: "Dakikada 50+ kişilik yoğun trafiğe dayanıklı.",
    security: "Yüksek kapasiteli güvenlik kontrolü.",
    technicalSpecs: {
      voltage: "100-230 VAC 50/60 Hz",
      power: "50 W",
      temperature: "-25°C - +75°C",
      capacity: "50+ Kişi / Dakika",
      passageGap: "45 cm - 50 cm",
      weight: "45 Kg",
      environment: "Yoğun Trafik Alanları",
      protection: "IP 65"
    },
    features: [
      "Yüksek Kapasite",
      "Hızlı Geçiş",
      "Yoğun Trafik",
      "Güçlü Performans"
    ],
    price: "Fiyat İçin Ara"
  },
  "t281": {
    id: "t281",
    model: "MT-281",
    title: "Özel Tasarım Turnike Sistemi",
    image: "/t-281-elektromekanik-turnike.jpg",
    description: "Kurumsal kimliğe uygun özel tasarım imkanı.",
    applications: [
      "Kurumsal merkez ofisler",
      "Marka mağazaları",
      "Özel etkinlikler",
      "VIP tesisler",
      "Tasarım odaklı projeler"
    ],
    materials: "Özel renk ve tasarım seçenekli premium malzemeler.",
    usage: "Kurumsal kimlik ve fonksiyonellik bir arada.",
    security: "Estetik tasarımda güvenlik önceliği.",
    technicalSpecs: {
      voltage: "100-230 VAC 50/60 Hz",
      power: "35 W",
      temperature: "-20°C - +70°C",
      capacity: "35 Kişi / Dakika",
      passageGap: "42 cm - 48 cm",
      weight: "36 Kg",
      environment: "İç Ortam Premium",
      protection: "IP 54"
    },
    features: [
      "Özel Tasarım",
      "Kişiye Özel",
      "Estetik Çözüm",
      "Markalama"
    ],
    price: "Fiyat İçin Ara"
  },
  "t250-jetonlu": {
    id: "t250-jetonlu",
    model: "MT-250 Jetonlu",
    title: "Jetonlu Turnike Sistemi",
    image: "/jetonlu-turnike-sistemi-t250.jpg",
    description: "Ücretli geçişler için jetonlu tahsilat sistemi.",
    applications: [
      "WC girişleri",
      "Ücretli geçitler",
      "Park alanları",
      "Etkinlik girişleri",
      "Tahsilat noktaları"
    ],
    materials: "Çelik para kasası ve jeton okuyucu sistemi entegreli 304 paslanmaz çelik.",
    usage: "Jeton ile otomatik ödeme sistemi.",
    security: "Ödeme güvenliği ve geçiş kontrolü.",
    technicalSpecs: {
      voltage: "100-230 VAC 50/60 Hz",
      power: "35 W",
      temperature: "-15°C - +60°C",
      capacity: "25 Kişi / Dakika",
      passageGap: "42 cm",
      weight: "38 Kg",
      environment: "İç/Dış Ortam",
      protection: "IP 54"
    },
    features: [
      "Jeton Okuyucu",
      "Para Kasası",
      "Otomatik Tahsilat",
      "WC Turnikesi"
    ],
    price: "Fiyat İçin Ara"
  },
  "t345-jetonlu": {
    id: "t345-jetonlu",
    model: "MT-345 Jetonlu",
    title: "Gelişmiş Jetonlu Turnike",
    image: "/jetonlu-turnike-sistemi-t345.jpg",
    description: "Gelişmiş ödeme seçenekleri ile tahsilat turnike sistemi.",
    applications: [
      "Premium tesisler",
      "Çok amaçlı tahsilat",
      "Dijital ödeme noktaları",
      "Gelişmiş WC sistemleri"
    ],
    materials: "Dijital ekran ve çoklu ödeme sistemi entegreli premium malzemeler.",
    usage: "Çoklu ödeme ve dijital ekran sistemi.",
    security: "Gelişmiş ödeme güvenliği ve raporlama.",
    technicalSpecs: {
      voltage: "100-230 VAC 50/60 Hz",
      power: "45 W",
      temperature: "-15°C - +65°C",
      capacity: "30 Kişi / Dakika",
      passageGap: "42 cm - 47 cm",
      weight: "42 Kg",
      environment: "İç/Dış Ortam",
      protection: "IP 65"
    },
    features: [
      "Çoklu Ödeme",
      "Dijital Ekran",
      "Para Üstü",
      "Rapor Sistemi"
    ],
    price: "Fiyat İçin Ara"
  }
};

export default function TurnikeDetailPage() {
  const { model } = useParams<{ model: string }>();
  const spec = turnikeSpecs[model || "t250"];

  if (!spec) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Ürün Bulunamadı</h1>
          <Button asChild>
            <Link href="/urunler/bel-tipi-turnike">Ürünlere Geri Dön</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{spec.title} - {spec.model} | Mika Teknoloji</title>
        <meta name="description" content={`${spec.title} - ${spec.description} Teknik özellikler, uygulama alanları ve fiyat bilgileri.`} />
        <meta name="keywords" content={`${spec.model}, bel tipi turnike, ${spec.title.toLowerCase()}, turnike sistemi, güvenlik sistemi`} />
        
        <meta property="og:title" content={`${spec.title} | Mika Teknoloji`} />
        <meta property="og:description" content={spec.description} />
        <meta property="og:image" content={`https://mikateknoloji.com${spec.image}`} />
        <meta property="og:url" content={`https://mikateknoloji.com/urunler/turnike/${spec.id}`} />
        
        <link rel="canonical" href={`https://mikateknoloji.com/urunler/turnike/${spec.id}`} />
      </Helmet>

      {/* Back Button */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-0">
            <Link href="/urunler/bel-tipi-turnike">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Bel Tipi Turnikeler
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={spec.image}
                alt={spec.title}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Badge className="mb-4 bg-primary text-white">
                {spec.model}
              </Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {spec.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {spec.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/iletisim">
                    Fiyat Teklifi Al
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Broşür İndir
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Applications */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Uygulama Alanları</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {spec.applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
              >
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{app}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Materials & Usage */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-primary" />
                  Materyal ve Yapı
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {spec.materials}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-primary" />
                  Genel Kullanım
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {spec.usage}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Teknik Özellikler</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Voltaj</h4>
                <p className="text-gray-600">{spec.technicalSpecs.voltage}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Thermometer className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Sıcaklık</h4>
                <p className="text-gray-600">{spec.technicalSpecs.temperature}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Kapasite</h4>
                <p className="text-gray-600">{spec.technicalSpecs.capacity}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Weight className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Ağırlık</h4>
                <p className="text-gray-600">{spec.technicalSpecs.weight}</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Detaylı Teknik Bilgiler</h3>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Güç Tüketimi:</span>
                    <span className="font-medium">{spec.technicalSpecs.power}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Geçiş Aralığı:</span>
                    <span className="font-medium">{spec.technicalSpecs.passageGap}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Kullanım Alanları:</span>
                    <span className="font-medium">{spec.technicalSpecs.environment}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Koruma Sınıfı:</span>
                    <span className="font-medium">{spec.technicalSpecs.protection}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="h-6 w-6 mr-3 text-primary" />
                  Güvenlik Özellikleri
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {spec.security}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-16 bg-gradient-to-r from-primary to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              {spec.model} Turnike Sistemi İçin Detaylı Bilgi Alın
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Uzman ekibimizle iletişime geçin. Ücretsiz keşif ve özel fiyat teklifi için bizi arayın.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Phone className="h-8 w-8 mx-auto mb-3" />
                <div className="font-semibold mb-1">Telefon</div>
                <div className="text-white/90">0212 XXX XX XX</div>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 mx-auto mb-3" />
                <div className="font-semibold mb-1">E-posta</div>
                <div className="text-white/90">info@mikateknoloji.com</div>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 mx-auto mb-3" />
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
                WhatsApp İletişim
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}