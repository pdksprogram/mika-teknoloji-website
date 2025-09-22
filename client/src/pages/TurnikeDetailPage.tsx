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
  ArrowLeft,
  Thermometer,
  Zap,
  Clock,
  Weight,
  Shield,
  Settings,
  Award,
  Wrench,
  Star
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
    dimensions: string;
    warranty: string;
    maintenance: string;
    installation: string;
  };
  features: string[];
  advantages: string[];
  accessories: string[];
  certifications: string[];
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
      protection: "IP 54 (Opsiyon IP 65)",
      dimensions: "120 x 100 x 98 cm",
      warranty: "2 Yıl Garanti",
      maintenance: "6 Ayda Bir Bakım",
      installation: "Profesyonel Kurulum Dahil"
    },
    features: [
      "Paslanmaz Çelik Gövde (304 Grade)",
      "Elektromekanik Kontrol Sistemi",
      "Manuel/Otomatik Mod Seçimi",
      "LED Yönlendirme Işıkları",
      "Ses Uyarı Sistemi",
      "Kart Okuyucu Entegrasyonu",
      "Parmak İzi Okuyucu Desteği",
      "Yüz Tanıma Sistemi Uyumlu",
      "Anti-Tailgating Koruması",
      "Acil Durum Açılması",
      "Çift Yönlü Geçiş Kontrolü",
      "Işık Bariyeri Sistemi"
    ],
    advantages: [
      "Kolay kurulum ve kullanım",
      "Düşük enerji tüketimi",
      "Sessiz çalışma",
      "Uzun ömürlü motor sistemi",
      "Minimum bakım gereksinimi",
      "Her türlü hava koşuluna uygun",
      "24/7 kesintisiz çalışma",
      "Gelişmiş güvenlik algoritmaları"
    ],
    accessories: [
      "Düşen kol mekanizması",
      "Kart okuyucu ünitesi",
      "Parmak izi okuyucu",
      "Buton ünitesi",
      "Uzaktan kumanda",
      "Sayaç bağlantı modülü",
      "Isıtıcı sistemi",
      "Harici LED ekran"
    ],
    certifications: [
      "CE Belgesi",
      "ISO 9001:2015",
      "TSE Standardı",
      "RoHS Uyumlu",
      "IP54 Koruma Sınıfı"
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
      protection: "IP 54",
      dimensions: "115 x 95 x 98 cm",
      warranty: "1 Yıl Garanti",
      maintenance: "Yılda Bir Bakım",
      installation: "Hızlı Kurulum"
    },
    features: [
      "Ekonomik Çözüm",
      "Dayanıklı Yapı",
      "Kolay Kurulum",
      "Düşük Bakım",
      "304 Paslanmaz Çelik Gövde",
      "LED Işık Sistemi",
      "Ses Uyarı Sistemi",
      "Kart Okuyucu Hazır Altyapı"
    ],
    advantages: [
      "Küçük işletmeler için ideal",
      "Hızlı yatırım geri dönüşü",
      "Basit kullanım arayüzü",
      "Düşük işletme maliyeti"
    ],
    accessories: [
      "Temel kart okuyucu",
      "Manuel kontrol butonu",
      "LED durum göstergesi"
    ],
    certifications: [
      "CE Belgesi",
      "TSE Standardı",
      "IP54 Koruma"
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
      protection: "IP 65",
      dimensions: "125 x 105 x 98 cm",
      warranty: "3 Yıl Garanti",
      maintenance: "6 Ayda Bir Bakım",
      installation: "Profesyonel Kurulum Dahil"
    },
    features: [
      "İki Yönlü Geçiş",
      "Akıllı Sensörler", 
      "Anti-Tailgating",
      "Alarm Sistemi",
      "316 Paslanmaz Çelik",
      "Gelişmiş LED Sistemi",
      "Ses ve Işık Uyarısı"
    ],
    advantages: [
      "Yüksek güvenlik seviyesi",
      "Anti-tailgating koruması", 
      "Gelişmiş algılama sistemi",
      "Dayanıklı yapı"
    ],
    accessories: [
      "Düşen kol sistemi",
      "Gelişmiş kart okuyucu",
      "Biyometrik okuyucular",
      "Alarm sistemi"
    ],
    certifications: [
      "CE Belgesi",
      "ISO 9001:2015",
      "TSE Güvenlik",
      "IP65 Koruma"
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
      protection: "IP 54",
      dimensions: "118 x 98 x 98 cm",
      warranty: "2 Yıl Garanti",
      maintenance: "6 Ayda Bir Bakım",
      installation: "Hızlı Kurulum"
    },
    features: [
      "İki Yönlü Kontrol",
      "Ekonomik Fiyat",
      "Güvenilir Çalışma",
      "Kolay Bakım",
      "A2 Teknolojisi",
      "LED Göstergeler"
    ],
    advantages: [
      "Çift yönlü kontrol imkanı",
      "Ekonomik işletim maliyeti",
      "Kolay kurulum",
      "Güvenilir teknoloji"
    ],
    accessories: [
      "Çift yönlü sensörler",
      "Kart okuyucu",
      "Kontrol butonu"
    ],
    certifications: [
      "CE Belgesi",
      "TSE Standardı",
      "IP54 Koruma"
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
      protection: "IP 65",
      dimensions: "122 x 102 x 98 cm",
      warranty: "3 Yıl Premium Garanti",
      maintenance: "Yılda Bir Premium Bakım",
      installation: "VIP Kurulum Hizmeti"
    },
    features: [
      "Premium Tasarım",
      "Sessiz Çalışma",
      "Hızlı Geçiş",
      "Estetik Görünüm",
      "Premium Paslanmaz Çelik",
      "Lüks LED Aydınlatma"
    ],
    advantages: [
      "Prestijli görünüm",
      "Sessiz ve pürüzsüz çalışma",
      "Yüksek kalite malzemeler",
      "Premium hizmet kalitesi"
    ],
    accessories: [
      "Premium kart okuyucu",
      "Lüks tasarım aksesuarları",
      "Özel renk seçenekleri"
    ],
    certifications: [
      "CE Premium",
      "ISO 9001:2015",
      "Premium Quality",
      "IP65 Koruma"
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
      protection: "IP 67",
      dimensions: "130 x 110 x 100 cm",
      warranty: "5 Yıl Endüstriyel Garanti",
      maintenance: "3 Ayda Bir Endüstriyel Bakım",
      installation: "Endüstriyel Kurulum"
    },
    features: [
      "Endüstriyel Dayanım",
      "Yoğun Kullanım",
      "Çevre Direnci",
      "Güçlü Motor",
      "316 Grade Paslanmaz Çelik",
      "Ağır Hizmet Tipi Motor"
    ],
    advantages: [
      "Ağır endüstriyel koşullara uygun",
      "24/7 kesintisiz çalışma",
      "Aşırı hava koşullarına dayanıklı",
      "Yüksek trafik kapasitesi"
    ],
    accessories: [
      "Endüstriyel sensörler",
      "Ağır hizmet kart okuyucu",
      "Endüstriyel kontrol ünitesi"
    ],
    certifications: [
      "CE Endüstriyel",
      "IP67 Koruma",
      "Endüstriyel Standart",
      "ISO 14001"
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
      protection: "IP 65",
      dimensions: "125 x 105 x 98 cm",
      warranty: "2 Yıl Garanti",
      maintenance: "4 Ayda Bir Bakım",
      installation: "Endüstriyel Kurulum"
    },
    features: [
      "Dayanıklı Yapı",
      "Uygun Fiyat",
      "Endüstriyel Kullanım",
      "Kolay Montaj",
      "304 Paslanmaz Çelik",
      "Endüstriyel LED"
    ],
    advantages: [
      "Endüstriyel ortamlarda ekonomik",
      "Kolay kurulum ve bakım",
      "Güvenilir performans",
      "Uygun maliyet"
    ],
    accessories: [
      "Standart kart okuyucu",
      "Endüstriyel montaj kiti",
      "Bakım araçları"
    ],
    certifications: [
      "CE Belgesi",
      "IP65 Koruma",
      "TSE Endüstriyel"
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
      protection: "IP 54",
      dimensions: "110 x 90 x 95 cm",
      warranty: "2 Yıl Garanti",
      maintenance: "6 Ayda Bir Bakım",
      installation: "Kompakt Kurulum"
    },
    features: [
      "Kompakt Tasarım",
      "Az Yer Kaplar",
      "Esnek Kurulum",
      "Hızlı Geçiş",
      "Dar Alan Optimizasyonu",
      "Hafif Yapı"
    ],
    advantages: [
      "Dar alanlarda kullanım",
      "Minimal yer ihtiyacı",
      "Kolay taşınabilirlik",
      "Hızlı kurulum"
    ],
    accessories: [
      "Kompakt kart okuyucu",
      "Dar alan montajı",
      "Mobil ayaklar"
    ],
    certifications: [
      "CE Belgesi",
      "TSE Kompakt",
      "IP54 Koruma"
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
      protection: "IP 65",
      dimensions: "135 x 115 x 100 cm",
      warranty: "3 Yıl Yoğun Kullanım Garantisi",
      maintenance: "2 Ayda Bir Bakım",
      installation: "Yoğun Trafik Kurulumu"
    },
    features: [
      "Yüksek Kapasite",
      "Hızlı Geçiş",
      "Yoğun Trafik",
      "Güçlü Performans",
      "Yüksek Hızlı Motor",
      "Çoklu Sensör Sistemi"
    ],
    advantages: [
      "Dakikada 50+ kişi kapasitesi",
      "Yoğun trafikte kesintisiz çalışma",
      "Metro/havaalanı standartı",
      "Sürekli kullanıma uygun"
    ],
    accessories: [
      "Yüksek kapasiteli sensörler",
      "Hızlı kart okuyucu",
      "Trafik yönetim sistemi"
    ],
    certifications: [
      "CE Yüksek Kapasite",
      "Metro Standardı",
      "IP65 Koruma",
      "Yoğun Kullanım Belgesi"
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
      protection: "IP 54",
      dimensions: "125 x 100 x 98 cm",
      warranty: "3 Yıl Özel Tasarım Garantisi",
      maintenance: "6 Ayda Bir Özel Bakım",
      installation: "Özel Tasarım Kurulumu"
    },
    features: [
      "Özel Tasarım",
      "Kişiye Özel",
      "Estetik Çözüm",
      "Markalama",
      "Özel Renk Seçenekleri",
      "Logo Entegrasyonu"
    ],
    advantages: [
      "Kurumsal kimliğe uygun tasarım",
      "Özel renk ve logo seçenekleri",
      "Markalama imkanı",
      "Eşsiz görünüm"
    ],
    accessories: [
      "Özel tasarım panelleri",
      "Logo aplikasyon kiti",
      "Renk seçenekleri"
    ],
    certifications: [
      "CE Özel Tasarım",
      "TSE Kalite",
      "Özel Üretim Belgesi"
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
      protection: "IP 54",
      dimensions: "125 x 105 x 105 cm",
      warranty: "2 Yıl Tahsilat Garantisi",
      maintenance: "3 Ayda Bir Para Kasası Bakım",
      installation: "Jetonlu Sistem Kurulumu"
    },
    features: [
      "Jeton Okuyucu",
      "Para Kasası",
      "Otomatik Tahsilat",
      "WC Turnikesi",
      "Çelik Para Kasası",
      "Jeton Algılama Sistemi"
    ],
    advantages: [
      "Otomatik gelir elde etme",
      "WC girişlerinde ideal",
      "Para kasası güvenliği",
      "Jeton sistemli kolay kullanım"
    ],
    accessories: [
      "Jeton seti",
      "Para kasası kilidi",
      "Tahsilat rapor sistemi"
    ],
    certifications: [
      "CE Belgesi",
      "Para Kasası Güvenlik",
      "IP54 Koruma"
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
      protection: "IP 65",
      dimensions: "130 x 110 x 110 cm",
      warranty: "3 Yıl Dijital Sistem Garantisi",
      maintenance: "2 Ayda Bir Dijital Bakım",
      installation: "Gelişmiş Dijital Kurulum"
    },
    features: [
      "Çoklu Ödeme",
      "Dijital Ekran",
      "Para Üstü",
      "Rapor Sistemi",
      "Kredi Kartı Okuyucu",
      "Contactless Ödeme"
    ],
    advantages: [
      "Çoklu ödeme seçenekleri",
      "Dijital rapor takibi",
      "Para üstü verme özelliği",
      "Modern ödeme sistemleri"
    ],
    accessories: [
      "Kredi kartı terminali",
      "Dijital ekran ünitesi",
      "Para üstü mekanizması"
    ],
    certifications: [
      "CE Dijital Ödeme",
      "PCI DSS Güvenlik",
      "IP65 Koruma",
      "Dijital Ödeme Belgesi"
    ],
    price: "Fiyat İçin Ara"
  },

  // BOY TİPİ TURNİKELER - 14 Model
  "t2500d-single-3": {
    id: "t2500d-single-3",
    model: "MT-2500D Single 3 Kollu",
    title: "Single 3 Kollu Boy Turnike Sistemi",
    image: "/t-2500d-single-3-kollu-paslanmaz-turnike.jpg",
    description: "Yüksek güvenlik alanları için tasarlanmış tek yönlü 3 kollu boy tipi turnike sistemi.",
    applications: [
      "Ofis binaları girişleri",
      "Fabrika ana kapıları",
      "Okul ve üniversite girişleri",
      "Hastane güvenlik noktaları",
      "Devlet kurumları",
      "Güvenlik merkezleri"
    ],
    materials: "304 Grade paslanmaz çelik gövde ve kollar. Yüksek dayanıklılık için özel alaşım kullanılır.",
    usage: "Tek yönlü geçiş kontrolü sağlar. Kart okuyucu, biyometrik sistemler entegre edilebilir.",
    security: "3 kollu tasarım ile maksimum güvenlik. Elektrik kesintisinde acil durum prosedürleri devreye girer.",
    technicalSpecs: {
      voltage: "100-230 VAC 50/60 Hz",
      power: "55 W",
      temperature: "-30°C - +70°C",
      capacity: "35 Kişi / Dakika",
      passageGap: "55 cm",
      weight: "85 Kg",
      environment: "İç/Dış Ortam",
      protection: "IP 65",
      dimensions: "220 x 110 x 100 cm",
      warranty: "3 Yıl Boy Tipi Garanti",
      maintenance: "6 Ayda Bir Profesyonel Bakım",
      installation: "Özel Boy Tipi Kurulum"
    },
    features: [
      "304 Grade Paslanmaz Çelik",
      "3 Kollu Güvenlik Sistemi",
      "LED Yönlendirme Işıkları",
      "Ses ve Işık Uyarı Sistemi",
      "Anti-Tailgating Koruması",
      "Kart Okuyucu Entegrasyonu",
      "Biyometrik Sistem Desteği",
      "Acil Durum Açılma Sistemi",
      "Çift Sensör Teknolojisi",
      "Yüksek Trafik Kapasitesi",
      "Otomatik Kilitleme",
      "Manuel Açma Seçeneği"
    ],
    advantages: [
      "Yüksek güvenlik seviyesi",
      "Alttan geçiş engelleme",
      "Dayanıklı boy tipi yapı",
      "Estetik görünüm",
      "Kolay entegrasyon",
      "24/7 çalışma kapasitesi"
    ],
    accessories: [
      "Kart okuyucu sistemi",
      "Biyometrik okuyucular",
      "LED durum gösterge paneli",
      "Acil durum butonu",
      "Uzaktan kontrol ünitesi",
      "Harici alarm sistemi"
    ],
    certifications: [
      "CE Boy Tipi Belgesi",
      "ISO 9001:2015",
      "TSE Güvenlik Standardı",
      "IP65 Koruma Sınıfı",
      "Boy Tipi Turnike Belgesi"
    ],
    price: "Fiyat İçin Ara"
  },

  "t2500d-single-4": {
    id: "t2500d-single-4",
    model: "MT-2500D Single 4 Kollu",
    title: "Single 4 Kollu Boy Turnike Sistemi",
    image: "/t-2500d-single-4-kollu-paslanmaz-turnike.jpg",
    description: "Maksimum güvenlik gereken alanlar için 4 kollu tek yönlü boy tipi turnike sistemi.",
    applications: [
      "Yüksek güvenlik alanları",
      "Askeri tesisler",
      "Bankalar ana giriş",
      "Veri merkezleri",
      "Araştırma laboratuvarları",
      "Kritik altyapı tesisleri"
    ],
    materials: "316 Grade paslanmaz çelik seçenekli, anti-korozyon özel kaplama.",
    usage: "4 kollu maksimum güvenlik sistemi. Çarpışma önleyici ve anti-tailgating teknolojisi.",
    security: "4 kollu tasarım ile en üst düzey güvenlik. Çoklu sensör sistemi ve alarm entegrasyonu.",
    technicalSpecs: {
      voltage: "100-230 VAC 50/60 Hz",
      power: "65 W",
      temperature: "-30°C - +70°C", 
      capacity: "30 Kişi / Dakika",
      passageGap: "55 cm",
      weight: "95 Kg",
      environment: "Yüksek Güvenlik Ortamları",
      protection: "IP 67",
      dimensions: "220 x 110 x 105 cm",
      warranty: "5 Yıl Yüksek Güvenlik Garantisi",
      maintenance: "3 Ayda Bir Özel Bakım",
      installation: "Yüksek Güvenlik Kurulumu"
    },
    features: [
      "4 Kollu Maksimum Güvenlik",
      "316 Grade Paslanmaz Çelik",
      "Çoklu LED Sistemi",
      "Ses ve Titreşim Uyarısı",
      "Gelişmiş Anti-Tailgating",
      "Çarpışma Önleyici Sistem",
      "Acil Durum Otomasyonu",
      "Yüksek Hızlı Sensörler",
      "Güvenlik Kamerası Entegrasyonu",
      "Alarm Sistemi Bağlantısı",
      "Otomatik Rapor Sistemi",
      "VIP Geçiş Seçeneği"
    ],
    advantages: [
      "En üst düzey güvenlik",
      "4 kollu çarpışma koruması",
      "Yüksek güvenlik standartları",
      "Kritik alan uygunluğu",
      "Profesyonel görünüm",
      "Uzun ömürlü dayanıklılık"
    ],
    accessories: [
      "Yüksek güvenlik kart okuyucu",
      "Çoklu biyometrik sistemler",
      "Güvenlik kamerası",
      "Alarm entegrasyon modülü",
      "VIP geçiş kontrolü",
      "Acil durum kumanda paneli"
    ],
    certifications: [
      "CE Yüksek Güvenlik",
      "ISO 27001 Güvenlik",
      "NATO Güvenlik Standardı",
      "IP67 Maksimum Koruma",
      "Askeri Standart Belgesi"
    ],
    price: "Fiyat İçin Ara"
  },

  "t2500d-double-3": {
    id: "t2500d-double-3", 
    model: "MT-2500D Double 3 Kollu",
    title: "Double 3 Kollu Boy Turnike Sistemi",
    image: "/t-2500d-double-3-kollu-paslanmaz-turnike.jpg",
    description: "Yoğun trafikli alanlar için çift yönlü 3 kollu boy tipi turnike sistemi.",
    applications: [
      "Metro istasyonu girişleri",
      "Havaalanı güvenlik noktaları",
      "Büyük alışveriş merkezleri",
      "Stadyum ana girişleri",
      "Kongre merkezi girişleri",
      "Büyük ofis kompleksleri"
    ],
    materials: "304 paslanmaz çelik çift taraflı işlem. Yoğun kullanım için özel kaplama.",
    usage: "Çift yönlü geçiş imkanı. İki taraflı LED ve ses sistemi ile yönlendirme.",
    security: "3 kollu çift yönlü güvenlik. Her yönde ayrı sensör ve kontrol sistemi.",
    technicalSpecs: {
      voltage: "100-230 VAC 50/60 Hz",
      power: "75 W",
      temperature: "-25°C - +70°C",
      capacity: "60 Kişi / Dakika (30+30)",
      passageGap: "55 cm (Her Yön)",
      weight: "110 Kg", 
      environment: "Yoğun Trafik Alanları",
      protection: "IP 65",
      dimensions: "220 x 110 x 100 cm",
      warranty: "3 Yıl Double Sistem Garantisi",
      maintenance: "4 Ayda Bir Double Bakım",
      installation: "Çift Yönlü Sistem Kurulumu"
    },
    features: [
      "Çift Yönlü Geçiş Sistemi",
      "3 Kollu İki Taraflı",
      "Çift LED Yönlendirme",
      "İki Taraflı Ses Sistemi",
      "Çoklu Anti-Tailgating",
      "Double Sensör Sistemi",
      "İki Yönlü Kart Okuma",
      "Çift Acil Durum Sistemi",
      "Yüksek Trafik Kapasitesi",
      "İki Taraflı Kontrol",
      "Çoklu Entegrasyon",
      "Double Güvenlik Protokolü"
    ],
    advantages: [
      "Yüksek geçiş kapasitesi",
      "Çift yönlü verimlilik",
      "Yoğun trafikte performans",
      "İki taraflı güvenlik",
      "Metro standartı kalite",
      "Havaalanı uygunluğu"
    ],
    accessories: [
      "Çift taraflı kart okuyucu",
      "İki yönlü LED panel",
      "Double ses sistemi",
      "Çift acil durum butonu",
      "İki taraflı sayaç",
      "Double kontrol paneli"
    ],
    certifications: [
      "CE Double Sistem",
      "Metro Standardı",
      "Havaalanı Belgesi",
      "ISO 9001:2015",
      "IP65 Çift Koruma"
    ],
    price: "Fiyat İçin Ara"
  },

  "t2500d-double-4": {
    id: "t2500d-double-4",
    model: "MT-2500D Double 4 Kollu", 
    title: "Double 4 Kollu Boy Turnike Sistemi",
    image: "/t-2500d-double-4-kollu-paslanmaz-turnike.jpg",
    description: "En yüksek güvenlik ve kapasite gereken alanlar için çift yönlü 4 kollu boy tipi turnike.",
    applications: [
      "Büyük havaalanları",
      "Metro ana istasyonları", 
      "Stadyum VIP girişleri",
      "Büyük kongre merkezleri",
      "Devlet kurumları ana giriş",
      "Yüksek güvenlik tesisleri"
    ],
    materials: "316 Grade paslanmaz çelik, maksimum dayanıklılık için özel alaşım.",
    usage: "4 kollu çift yönlü maksimum güvenlik. Her yönde 4 sensör ve tam kontrol.",
    security: "En üst seviye güvenlik sistemi. Çift yönlü 4 kollu tam koruma.",
    technicalSpecs: {
      voltage: "100-230 VAC 50/60 Hz",
      power: "90 W",
      temperature: "-30°C - +80°C",
      capacity: "50 Kişi / Dakika (25+25)",
      passageGap: "55 cm (Her Yön)",
      weight: "135 Kg",
      environment: "Maksimum Güvenlik Alanları", 
      protection: "IP 67",
      dimensions: "220 x 110 x 105 cm",
      warranty: "5 Yıl Premium Double Garanti",
      maintenance: "2 Ayda Bir Premium Bakım",
      installation: "Premium Double Kurulum"
    },
    features: [
      "4 Kollu Çift Yönlü Sistem",
      "Premium 316 Paslanmaz Çelik",
      "Çoklu LED Aydınlatma",
      "Surround Ses Sistemi",
      "Maksimum Anti-Tailgating",
      "8 Sensör Sistemi (4x2)",
      "Çift Yönlü Biyometrik",
      "Otomatik Acil Sistem",
      "Premium Kontrol Paneli",
      "Havaalanı Standardı",
      "VIP Geçiş Modülleri",
      "Gelişmiş Rapor Sistemi"
    ],
    advantages: [
      "Maksimum güvenlik ve kapasite",
      "Havaalanı kalite standardı",
      "Çift yönlü 4 kollu koruma",
      "Premium malzeme kalitesi",
      "En gelişmiş teknoloji",
      "24/7 kesintisiz performans"
    ],
    accessories: [
      "Premium çift kart okuyucu",
      "Havaalanı standart LED",
      "Surround ses sistemi",
      "VIP geçiş kontrol modülü",
      "Acil durum merkez paneli",
      "Güvenlik entegrasyon sistemi"
    ],
    certifications: [
      "CE Premium Double",
      "Havaalanı Standardı",
      "ISO 27001 Güvenlik",
      "IP67 Maksimum Koruma",
      "İnternasyonal Güvenlik Belgesi"
    ],
    price: "Fiyat İçin Ara"
  },

  "t2500k-single-3": {
    id: "t2500k-single-3",
    model: "MT-2500K Single 3 Kollu",
    title: "K Serisi Single 3 Kollu Boy Turnike",
    image: "/t-2500k-single-3-kollu-paslanmaz-turnike.jpg", 
    description: "Kompakt tasarım tek yönlü 3 kollu K serisi boy tipi turnike sistemi.",
    applications: [
      "Orta ölçekli ofisler",
      "Mağaza ana girişleri",
      "Klinik ve sağlık merkezleri",
      "Okul ana kapıları",
      "Küçük fabrika girişleri",
      "İş merkezi girişleri"
    ],
    materials: "304 paslanmaz çelik K serisi özel tasarım. Kompakt ve dayanıklı yapı.",
    usage: "K serisi kompakt boy tipi. Dar alanlarda maksimum performans.",
    security: "3 kollu kompakt güvenlik sistemi. Ekonomik ama güvenli çözüm.",
    technicalSpecs: {
      voltage: "100-230 VAC 50/60 Hz",
      power: "45 W",
      temperature: "-25°C - +65°C",
      capacity: "32 Kişi / Dakika",
      passageGap: "52 cm",
      weight: "70 Kg",
      environment: "İç/Dış Ortam",
      protection: "IP 54",
      dimensions: "200 x 100 x 100 cm",
      warranty: "2 Yıl K Serisi Garanti",
      maintenance: "6 Ayda Bir K Serisi Bakım", 
      installation: "Kompakt Kurulum"
    },
    features: [
      "K Serisi Kompakt Tasarım",
      "3 Kollu Ekonomik Güvenlik",
      "LED Yönlendirme",
      "Ses Uyarı Sistemi",
      "Standart Anti-Tailgating",
      "Kart Okuyucu Hazırlığı",
      "Manuel/Otomatik Mod",
      "Acil Durum Açılma",
      "Kompakt Sensör Sistemi",
      "Kolay Kurulum",
      "Bakım Kolaylığı",
      "Ekonomik İşletim"
    ],
    advantages: [
      "Kompakt boy tipi çözüm",
      "Ekonomik yatırım",
      "Dar alanlarda kullanım",
      "Kolay kurulum ve bakım",
      "Güvenilir K serisi teknoloji",
      "Orta ölçekli işletmelere ideal"
    ],
    accessories: [
      "K serisi kart okuyucu",
      "Kompakt LED panel",
      "Standart ses ünitesi",
      "Manuel kontrol butonu",
      "Basit sayaç sistemi",
      "Temel alarm modülü"
    ],
    certifications: [
      "CE K Serisi",
      "TSE Kompakt Standart",
      "IP54 Temel Koruma",
      "K Serisi Kalite Belgesi"
    ],
    price: "Fiyat İçin Ara"
  },

  "t2500k-single-4": {
    id: "t2500k-single-4",
    model: "MT-2500K Single 4 Kollu",
    title: "K Serisi Single 4 Kollu Boy Turnike",
    image: "/t-2500k-single-4-kollu-paslanmaz-turnike.jpg",
    description: "Kompakt tasarım tek yönlü 4 kollu K serisi güvenlik odaklı boy tipi turnike.",
    applications: [
      "Güvenlik gereken ofisler",
      "Orta ölçekli bankalar",
      "Sağlık merkezi girişleri",
      "Eğitim kurumları",
      "Küçük güvenlik merkezleri",
      "Otopark girişleri"
    ],
    materials: "304 paslanmaz çelik K serisi 4 kollu özel tasarım.",
    usage: "K serisi kompakt 4 kollu güvenlik. Orta seviye güvenlik gereken alanlarda ideal.",
    security: "4 kollu K serisi güvenlik sistemi. Kompakt ama güvenli çözüm.",
    technicalSpecs: {
      voltage: "100-230 VAC 50/60 Hz", 
      power: "50 W",
      temperature: "-25°C - +65°C",
      capacity: "28 Kişi / Dakika",
      passageGap: "52 cm",
      weight: "75 Kg",
      environment: "İç/Dış Ortam",
      protection: "IP 54",
      dimensions: "200 x 100 x 105 cm",
      warranty: "2 Yıl K Serisi 4 Kol Garanti",
      maintenance: "6 Ayda Bir K Serisi Bakım",
      installation: "Kompakt 4 Kol Kurulum"
    },
    features: [
      "K Serisi 4 Kollu Tasarım",
      "Kompakt Güvenlik Sistemi",
      "4 Kollu LED Gösterge",
      "Gelişmiş Ses Sistemi", 
      "K Serisi Anti-Tailgating",
      "4 Sensör Güvenlik",
      "Çarpışma Önleyici",
      "Otomatik Güvenlik Modu",
      "Kompakt Kontrol Paneli",
      "Hızlı Kurulum",
      "Kolay Bakım Erişimi",
      "Ekonomik 4 Kol Çözümü"
    ],
    advantages: [
      "Kompakt 4 kollu güvenlik",
      "Orta seviye güvenlik ihtiyacına ideal",
      "Ekonomik 4 kollu çözüm",
      "K serisi güvenilirlik",
      "Kolay entegrasyon",
      "Düşük işletim maliyeti"
    ],
    accessories: [
      "K serisi 4 kol kart okuyucu",
      "Kompakt güvenlik LED",
      "4 kollu ses sistemi",
      "Güvenlik kontrol butonu",
      "4 kol sayaç modülü",
      "Güvenlik alarm ünitesi"
    ],
    certifications: [
      "CE K Serisi 4 Kol",
      "TSE Güvenlik Standardı",
      "IP54 Güvenlik Koruma",
      "K Serisi Güvenlik Belgesi"
    ],
    price: "Fiyat İçin Ara"
  },

  "t2500k-double-3": {
    id: "t2500k-double-3",
    model: "MT-2500K Double 3 Kollu", 
    title: "K Serisi Double 3 Kollu Boy Turnike",
    image: "/t-2500k-double-3-kollu-paslanmaz-turnike.jpg",
    description: "Orta kapasiteli alanlar için kompakt çift yönlü 3 kollu K serisi boy tipi turnike.",
    applications: [
      "Okul ana girişleri",
      "Orta boy alışveriş merkezleri",
      "İş merkezi girişleri",
      "Spor salonu girişleri",
      "Küçük hastane girişleri",
      "Orta ölçekli fabrikalar"
    ],
    materials: "304 paslanmaz çelik K serisi çift yönlü tasarım.",
    usage: "K serisi kompakt çift yönlü sistem. Orta kapasiteli geçiş kontrolü.",
    security: "3 kollu çift yönlü K serisi güvenlik. Her yönde kontrol imkanı.",
    technicalSpecs: {
      voltage: "100-230 VAC 50/60 Hz",
      power: "60 W", 
      temperature: "-20°C - +65°C",
      capacity: "50 Kişi / Dakika (25+25)",
      passageGap: "52 cm (Her Yön)",
      weight: "85 Kg",
      environment: "İç/Dış Ortam",
      protection: "IP 54",
      dimensions: "200 x 100 x 100 cm",
      warranty: "2 Yıl K Double Garanti",
      maintenance: "6 Ayda Bir Double Bakım",
      installation: "K Serisi Çift Yönlü Kurulum"
    },
    features: [
      "K Serisi Çift Yönlü",
      "3 Kollu İki Taraf",
      "Kompakt Double LED",
      "İki Yönlü Ses Sistemi",
      "K Serisi Anti-Tailgating",
      "Çift Sensör Kontrol",
      "İki Taraflı Kart Okuma",
      "Double Acil Sistem",
      "Orta Kapasite Geçiş",
      "Kompakt Çift Kontrol",
      "Ekonomik Double Çözüm",
      "Kolay Double Bakım"
    ],
    advantages: [
      "Kompakt çift yönlü çözüm",
      "Orta kapasiteli verimlilik", 
      "Ekonomik double sistem",
      "K serisi güvenilirlik",
      "İki yönlü maliyet avantajı",
      "Okul ve iş yeri uygunluğu"
    ],
    accessories: [
      "K serisi çift kart okuyucu",
      "Kompakt double LED",
      "İki yönlü ses modülü",
      "Çift acil durum butonu",
      "Double sayaç sistemi",
      "İki taraflı kontrol paneli"
    ],
    certifications: [
      "CE K Double",
      "TSE Çift Yönlü Standart", 
      "IP54 Double Koruma",
      "K Serisi Double Belgesi"
    ],
    price: "Fiyat İçin Ara"
  },

  "t2500k-double-4": {
    id: "t2500k-double-4",
    model: "MT-2500K Double 4 Kollu",
    title: "K Serisi Double 4 Kollu Boy Turnike",
    image: "/t-2500k-double-4-kollu-paslanmaz-turnike.jpg",
    description: "Orta seviye güvenlik gereken alanlar için kompakt çift yönlü 4 kollu K serisi boy tipi turnike.",
    applications: [
      "Orta boy tesisler",
      "Güvenlik gereken eğitim kurumları", 
      "Sağlık merkezleri ana giriş",
      "Orta ölçekli güvenlik noktaları",
      "İş merkezi güvenlik girişleri",
      "Hızlı geçiş gereken noktalar"
    ],
    materials: "304 paslanmaz çelik K serisi 4 kollu çift yönlü özel tasarım.",
    usage: "K serisi 4 kollu çift yönlü güvenlik. Orta seviye güvenlik ve kapasite.",
    security: "4 kollu çift yönlü K serisi maksimum güvenlik. Her yönde 4 kollu koruma.",
    technicalSpecs: {
      voltage: "100-230 VAC 50/60 Hz",
      power: "70 W",
      temperature: "-20°C - +65°C",
      capacity: "45 Kişi / Dakika (22+23)",
      passageGap: "52 cm (Her Yön)",
      weight: "95 Kg",
      environment: "Orta Güvenlik Ortamları",
      protection: "IP 54",
      dimensions: "200 x 100 x 105 cm",
      warranty: "3 Yıl K Double 4 Kol Garanti",
      maintenance: "4 Ayda Bir Premium Bakım",
      installation: "K Serisi Premium Kurulum"
    },
    features: [
      "K Serisi 4 Kollu Çift Yön",
      "Premium Kompakt Tasarım",
      "4 Kollu Double LED",
      "Gelişmiş Çift Ses Sistemi",
      "Maksimum K Anti-Tailgating",
      "8 Sensör Sistemi (4x2)",
      "Çift Yönlü 4 Kol Güvenlik",
      "Otomatik Double Acil Sistem",
      "Premium K Kontrol",
      "Gelişmiş Double Entegrasyon",
      "4 Kollu VIP Geçiş",
      "Double Premium Rapor"
    ],
    advantages: [
      "K serisi maksimum güvenlik",
      "Kompakt ama güçlü performans",
      "Çift yönlü 4 kollu verimlilik",
      "Orta tesisler için ideal",
      "Premium K serisi kalite",
      "Maliyet-performans dengesi"
    ],
    accessories: [
      "K serisi premium kart okuyucu",
      "Double premium LED",
      "Gelişmiş ses sistemi",
      "VIP kontrol paneli",
      "Premium sayaç modülü",
      "Gelişmiş alarm sistemi"
    ],
    certifications: [
      "CE K Double Premium",
      "TSE Premium Standart",
      "ISO 9001:2015",
      "IP54 Premium Koruma"
    ],
    price: "Fiyat İçin Ara"
  },

  "t2500k-single-3-eco": {
    id: "t2500k-single-3-eco",
    model: "MT-2500K ECO Single 3 Kollu",
    title: "K Serisi Single 3 Kollu Eco Boy Turnike",
    image: "/t-2500k-single-3-kollu-eco-boy-turnike.jpg",
    description: "Ekonomik K serisi tek yönlü 3 kollu eco boy tipi turnike sistemi.",
    applications: [
      "Küçük mağazalar",
      "Ofis girişleri",
      "Kafe/restoran",
      "Başlangıç projeleri",
      "Ekonomik çözüm arayan işletmeler",
      "Küçük ölçekli güvenlik noktaları"
    ],
    materials: "304 paslanmaz çelik eco tasarım. Ekonomik üretim için optimize edilmiş.",
    usage: "K serisi eco boy tipi. En ekonomik boy tipi çözüm.",
    security: "Temel güvenlik özellikleri içeren ekonomik boy tipi sistem.",
    technicalSpecs: {
      voltage: "100-230 VAC 50/60 Hz",
      power: "35 W",
      temperature: "-20°C - +60°C",
      capacity: "25 Kişi / Dakika",
      passageGap: "50 cm",
      weight: "55 Kg",
      environment: "İç Ortam",
      protection: "IP 54",
      dimensions: "180 x 90 x 100 cm",
      warranty: "1 Yıl Eco Garanti",
      maintenance: "Yılda Bir Eco Bakım",
      installation: "Hızlı Eco Kurulum"
    },
    features: [
      "K Serisi Eco Tasarım",
      "Ekonomik Boy Tipi",
      "3 Kollu Basit Güvenlik",
      "LED Temel Gösterge",
      "Ses Uyarı Sistemi",
      "Kart Okuyucu Hazırlığı",
      "Manuel/Otomatik Mod",
      "Acil Durum Açılma",
      "Eco Sensör Sistemi",
      "Basit Kurulum",
      "Kolay Bakım",
      "Düşük Maliyet"
    ],
    advantages: [
      "En ekonomik boy tipi seçenek",
      "Küçük işletmeler için ideal",
      "Hızlı yatırım geri dönüşü",
      "Basit kullanım",
      "K serisi güvenilirlik",
      "Düşük işletme maliyeti"
    ],
    accessories: [
      "Eco kart okuyucu",
      "Temel LED panel",
      "Standart ses ünitesi",
      "Manuel kontrol butonu"
    ],
    certifications: [
      "CE Eco Boy Tipi",
      "TSE Temel Standart",
      "IP54 Koruma"
    ],
    price: "Fiyat İçin Ara"
  },

  "t2500k-single-3-kristal": {
    id: "t2500k-single-3-kristal",
    model: "MT-2500K Kristal Single 3 Kollu",
    title: "K Serisi Single 3 Kollu Kristal Boy Turnike",
    image: "/t-2500k-single-3-kollu-kristal-boy-turnike.jpg",
    description: "Lüks kristal cam panelli K serisi 3 kollu boy tipi turnike sistemi.",
    applications: [
      "Lüks ofisler",
      "Premium mağazalar",
      "Sanat galerileri",
      "VIP alanlar",
      "Prestij gereken mekanlar",
      "Özel tasarım projeleri"
    ],
    materials: "Kristal cam panelli özel tasarım. Premium malzemeler kullanılır.",
    usage: "Kristal tasarım lüks boy tipi. Estetik ve güvenlik bir arada.",
    security: "3 kollu kristal güvenlik sistemi. Lüks görünüm ile güvenlik.",
    technicalSpecs: {
      voltage: "100-230 VAC 50/60 Hz",
      power: "50 W",
      temperature: "-15°C - +60°C",
      capacity: "30 Kişi / Dakika",
      passageGap: "52 cm",
      weight: "80 Kg",
      environment: "İç Ortam Premium",
      protection: "IP 44",
      dimensions: "200 x 100 x 100 cm",
      warranty: "3 Yıl Kristal Garanti",
      maintenance: "6 Ayda Bir Kristal Bakım",
      installation: "Özel Kristal Kurulum"
    },
    features: [
      "Kristal Cam Panel Tasarım",
      "Lüks LED Aydınlatma",
      "Premium 3 Kollu Sistem",
      "Estetik Görünüm",
      "Özel Kristal İşlemler",
      "Premium Ses Sistemi",
      "VIP Mod Seçenekleri",
      "Kristal Temizlik Sistemi",
      "Lüks Kontrol Paneli",
      "Premium Entegrasyon",
      "Özel Renk Seçenekleri",
      "Sanat Eseri Görünüm"
    ],
    advantages: [
      "En lüks boy tipi tasarım",
      "Kristal cam estetik",
      "Prestij ve güvenlik",
      "VIP mekanlar için ideal",
      "Sanat eseri görünüm",
      "Premium kalite malzemeler"
    ],
    accessories: [
      "Premium kristal kart okuyucu",
      "Lüks LED aydınlatma",
      "Kristal ses sistemi",
      "VIP kontrol paneli",
      "Premium temizlik kiti",
      "Özel kristal aksesuarlar"
    ],
    certifications: [
      "CE Kristal Tasarım",
      "Premium Kalite Belgesi",
      "Lüks Standart Belgesi",
      "Kristal İşlem Belgesi"
    ],
    price: "Fiyat İçin Ara"
  },

  "t2500k-double-3-eco": {
    id: "t2500k-double-3-eco",
    model: "MT-2500K ECO Double 3 Kollu",
    title: "K Serisi Double 3 Kollu Eco Boy Turnike",
    image: "/t-2500k-double-3-kollu-eco-boy-turnike.jpg",
    description: "Ekonomik çift yönlü 3 kollu K serisi eco boy tipi turnike sistemi.",
    applications: [
      "Orta boy işletmeler",
      "Okul ana kapıları",
      "Küçük fabrika girişleri",
      "Ekonomik projeler",
      "Çift yönlü geçiş gereken yerler",
      "Orta kapasiteli güvenlik"
    ],
    materials: "304 paslanmaz çelik eco double tasarım.",
    usage: "Ekonomik çift yönlü K serisi boy tipi. Maliyet avantajlı double sistem.",
    security: "3 kollu çift yönlü eco güvenlik. Her yönde temel güvenlik.",
    technicalSpecs: {
      voltage: "100-230 VAC 50/60 Hz",
      power: "55 W",
      temperature: "-20°C - +65°C",
      capacity: "40 Kişi / Dakika (20+20)",
      passageGap: "50 cm (Her Yön)",
      weight: "75 Kg",
      environment: "İç/Dış Ortam",
      protection: "IP 54",
      dimensions: "180 x 90 x 100 cm",
      warranty: "2 Yıl Eco Double Garanti",
      maintenance: "6 Ayda Bir Eco Bakım",
      installation: "Eco Double Kurulum"
    },
    features: [
      "K Eco Çift Yönlü",
      "Ekonomik Double Sistem",
      "3 Kollu İki Taraflı",
      "Eco LED Gösterge",
      "Çift Yönlü Ses",
      "Double Eco Sensör",
      "İki Taraflı Kart Okuma",
      "Eco Acil Durum",
      "Basit Double Kontrol",
      "Ekonomik İşletim",
      "Kolay Bakım",
      "Maliyet Avantajlı"
    ],
    advantages: [
      "Ekonomik çift yönlü çözüm",
      "Orta işletmeler için ideal",
      "Double maliyet avantajı",
      "Çift yönlü verimlilik",
      "K serisi güvenilirlik",
      "Düşük işletim maliyeti"
    ],
    accessories: [
      "Eco çift kart okuyucu",
      "Double temel LED",
      "İki yönlü ses modülü",
      "Eco acil buton",
      "Double sayaç",
      "Çift kontrol butonu"
    ],
    certifications: [
      "CE Eco Double",
      "TSE Double Standart",
      "IP54 Double Koruma"
    ],
    price: "Fiyat İçin Ara"
  },

  "t1350-yarim-boy": {
    id: "t1350-yarim-boy",
    model: "MT-1350 Yarım Boy",
    title: "Elektromekanik Yarım Boy Turnikesi",
    image: "/yarim-boy-turnike-sistemi-t1350-elektromekanik-turnike.jpg",
    description: "Kompakt yarım boy elektromekanik turnike sistemi. Dar alanlar için ideal çözüm.",
    applications: [
      "Dar alanlar",
      "Küçük girişler",
      "Ofis içi geçişler",
      "Bölüm girişleri",
      "Koridor geçişleri",
      "Kompakt güvenlik noktaları"
    ],
    materials: "304 paslanmaz çelik yarım boy özel tasarım.",
    usage: "Yarım boy elektromekanik sistem. Dar alanlarda maksimum verimlilik.",
    security: "Yarım boy güvenlik sistemi. Kompakt ama güvenli çözüm.",
    technicalSpecs: {
      voltage: "100-230 VAC 50/60 Hz",
      power: "30 W",
      temperature: "-20°C - +60°C",
      capacity: "25 Kişi / Dakika",
      passageGap: "45 cm",
      weight: "45 Kg",
      environment: "İç Ortam",
      protection: "IP 54",
      dimensions: "150 x 80 x 85 cm",
      warranty: "2 Yıl Yarım Boy Garanti",
      maintenance: "6 Ayda Bir Kompakt Bakım",
      installation: "Kompakt Kurulum"
    },
    features: [
      "Yarım Boy Tasarım",
      "Elektromekanik Kontrol",
      "Kompakt Boyut",
      "LED Gösterge",
      "Ses Uyarı",
      "Kart Okuyucu Desteği",
      "Manuel/Otomatik Mod",
      "Acil Durum Açılma",
      "Dar Alan Optimizasyonu",
      "Kolay Kurulum",
      "Minimal Yer İhtiyacı",
      "Ekonomik Çözüm"
    ],
    advantages: [
      "Dar alanlarda kullanım",
      "Kompakt boy tipi çözüm",
      "Minimal yer ihtiyacı",
      "Kolay kurulum ve bakım",
      "Elektromekanik güvenilirlik",
      "Ekonomik yatırım"
    ],
    accessories: [
      "Kompakt kart okuyucu",
      "Dar alan LED",
      "Küçük ses ünitesi",
      "Manuel kontrol",
      "Kompakt sayaç"
    ],
    certifications: [
      "CE Yarım Boy",
      "TSE Kompakt Standart",
      "IP54 Koruma"
    ],
    price: "Fiyat İçin Ara"
  },

  "t1400-yarim-boy": {
    id: "t1400-yarim-boy",
    model: "MT-1400 Yarım Boy",
    title: "Gelişmiş Elektromekanik Yarım Boy Turnikesi",
    image: "/yarim-boy-turnike-sistemi-t1400-elektromekanik-turnike.jpg",
    description: "Gelişmiş yarım boy elektromekanik turnike sistemi. Premium kompakt çözüm.",
    applications: [
      "Premium dar alanlar",
      "VIP geçişler",
      "Özel bölümler",
      "Hassas kontrol noktaları",
      "Lüks ofis içi geçişler",
      "Premium kompakt güvenlik"
    ],
    materials: "Premium 304 paslanmaz çelik yarım boy tasarım.",
    usage: "Gelişmiş yarım boy elektromekanik. Premium kompakt güvenlik.",
    security: "Premium yarım boy güvenlik sistemi. Hassas kontrol imkanı.",
    technicalSpecs: {
      voltage: "100-230 VAC 50/60 Hz",
      power: "35 W",
      temperature: "-20°C - +65°C",
      capacity: "28 Kişi / Dakika",
      passageGap: "45 cm",
      weight: "50 Kg",
      environment: "Premium İç Ortam",
      protection: "IP 54",
      dimensions: "155 x 85 x 85 cm",
      warranty: "3 Yıl Premium Yarım Boy Garanti",
      maintenance: "4 Ayda Bir Premium Bakım",
      installation: "Premium Kompakt Kurulum"
    },
    features: [
      "1400 Serisi Premium",
      "Gelişmiş Elektromekanik",
      "Premium Yarım Boy",
      "Hassas Kontrol",
      "Premium LED Sistemi",
      "Gelişmiş Ses Sistemi",
      "VIP Mod Seçenekleri",
      "Premium Acil Sistem",
      "Hassas Sensör",
      "Premium Entegrasyon",
      "Gelişmiş Rapor",
      "Premium Malzeme"
    ],
    advantages: [
      "Premium kompakt çözüm",
      "Hassas kontrol sistemi",
      "VIP alanlar için ideal",
      "Gelişmiş güvenlik",
      "Premium kalite",
      "1400 serisi güvenilirlik"
    ],
    accessories: [
      "Premium kompakt kart okuyucu",
      "Hassas LED sistemi",
      "Premium ses ünitesi",
      "VIP kontrol paneli",
      "Hassas sayaç sistemi",
      "Premium alarm modülü"
    ],
    certifications: [
      "CE Premium Yarım Boy",
      "TSE Premium Standart",
      "Premium Kalite Belgesi",
      "IP54 Premium Koruma"
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
                <Button asChild size="lg" variant="outline">
                  <a href="tel:+902123200230">
                    <Phone className="h-4 w-4 mr-2" />
                    Hemen Ara
                  </a>
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

      {/* Features Grid */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Ürün Özellikleri</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {spec.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100"
              >
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Teknik Özellikler</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Voltaj</h4>
                <p className="text-gray-600 text-sm">{spec.technicalSpecs.voltage}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Thermometer className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Çalışma Sıcaklığı</h4>
                <p className="text-gray-600 text-sm">{spec.technicalSpecs.temperature}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Geçiş Kapasitesi</h4>
                <p className="text-gray-600 text-sm">{spec.technicalSpecs.capacity}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Weight className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Ağırlık</h4>
                <p className="text-gray-600 text-sm">{spec.technicalSpecs.weight}</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-primary" />
                  Detaylı Teknik Bilgiler
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Güç Tüketimi:</span>
                    <span className="font-medium">{spec.technicalSpecs.power}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Geçiş Aralığı:</span>
                    <span className="font-medium">{spec.technicalSpecs.passageGap}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Boyutlar (E x G x Y):</span>
                    <span className="font-medium">{spec.technicalSpecs.dimensions}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Koruma Sınıfı:</span>
                    <span className="font-medium">{spec.technicalSpecs.protection}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Garanti Süresi:</span>
                    <span className="font-medium">{spec.technicalSpecs.warranty}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                  <Wrench className="h-5 w-5 mr-2 text-primary" />
                  Servis ve Bakım
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Bakım Periyodu:</span>
                    <span className="font-medium">{spec.technicalSpecs.maintenance}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Kurulum:</span>
                    <span className="font-medium">{spec.technicalSpecs.installation}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Kullanım Ortamı:</span>
                    <span className="font-medium">{spec.technicalSpecs.environment}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">7/24 Teknik Destek:</span>
                    <span className="font-medium text-green-600">✓ Mevcut</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Advantages */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Üstünlükleri</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {spec.advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{advantage}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Accessories & Certifications */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-primary" />
                  Opsiyonel Aksesuarlar
                </h3>
                <div className="space-y-3">
                  {spec.accessories.map((accessory, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{accessory}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  Sertifikalar ve Standartlar
                </h3>
                <div className="space-y-3">
                  {spec.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <Award className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="h-6 w-6 mr-3 text-primary" />
                  Güvenlik Özellikleri ve Acil Durum Prosedürleri
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {spec.security}
                </p>
                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">✅ Normal Durum</h4>
                    <p className="text-green-700 text-sm">Otomatik geçiş kontrolü ve güvenli erişim</p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">🚨 Acil Durum</h4>
                    <p className="text-red-700 text-sm">Kollar düşer, serbest geçiş sağlanır</p>
                  </div>
                </div>
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