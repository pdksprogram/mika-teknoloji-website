import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/seo/SEO";

// Turnike kategori görselleri - Parmak izi gibi direkt yollar
const belTipiTurnike = "/images/products/stock_images/waist_high_turnstile_b37a4efd.jpg";
const boyTipiTurnike = "/images/products/stock_images/tripod_waist_height__c9a11204.jpg";
const engelliTurnike = "/images/products/stock_images/waist_high_turnstile_177b0800.jpg";
const hizliGecisTurnike = "/images/products/stock_images/waist_high_turnstile_255e27a3.jpg";
const hijyenTurnike = "/images/products/stock_images/waist_high_turnstile_b8fba04b.jpg";
const jetonluTurnike = "/images/products/stock_images/electromechanical_tu_23c8e9e6.jpg";

// Referans görselleri (placeholder)
const referans1 = "/Modern_turnstile_security_system_b933269f.png";
const referans2 = "/Modern_turnstile_security_system_b933269f.png";

const turnstileCategories = [
  {
    id: 1,
    name: "Bel Tipi Turnikeler",
    subtitle: "( Üç Kollu Turnikeler )",
    image: belTipiTurnike,
    link: "/bel-tipi-turnikeler"
  },
  {
    id: 2,
    name: "Boy Tipi Turnikeler",
    subtitle: "",
    image: boyTipiTurnike,
    link: "/boy-tipi-turnikeler"
  },
  {
    id: 3,
    name: "Engelli Turnikeleri",
    subtitle: "( VIP Turnikeler )",
    image: engelliTurnike,
    link: "/engelli-turnikeleri"
  },
  {
    id: 4,
    name: "Hızlı Geçiş Turnikeleri",
    subtitle: "",
    image: hizliGecisTurnike,
    link: "/hizli-gecis-turnikeleri"
  },
  {
    id: 5,
    name: "Hijyen Turnikeleri",
    subtitle: "",
    image: hijyenTurnike,
    link: "/hijyen-turnikeleri"
  },
  {
    id: 6,
    name: "Jetonlu Turnikeler",
    subtitle: "",
    image: jetonluTurnike,
    link: "/jetonlu-turnikeler"
  }
];

const references = [
  { id: 1, image: referans1 },
  { id: 2, image: referans2 },
  { id: 3, image: referans1 },
  { id: 4, image: referans2 },
  { id: 5, image: referans1 },
  { id: 6, image: referans2 },
  { id: 7, image: referans1 },
  { id: 8, image: referans2 }
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Turnike Sistemleri - Bel Tipi, Boy Tipi, Engelli, Hızlı Geçiş",
  "description": "Mika Teknoloji turnike sistemleri. Bel tipi, boy tipi, engelli, hızlı geçiş, hijyen ve jetonlu turnike çeşitleri. Güvenlik ve geçiş kontrol çözümleri.",
  "brand": "Mika Teknoloji",
  "category": "Security Equipment",
  "offers": {
    "@type": "Offer",
    "availability": "InStock",
    "priceCurrency": "TRY"
  }
};

export default function TurnstileSystemsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Turnike Sistemleri - Mika Teknoloji"
        description="Mika Teknoloji turnike sistemleri. Bel tipi, boy tipi, engelli, hızlı geçiş, hijyen ve jetonlu turnike çeşitleri. Güvenlik ve geçiş kontrol çözümleri."
        canonical="https://mikateknoloji.com/turnike-sistemleri"
        jsonLd={[productJsonLd]}
      />

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Anasayfa</Link>
            <span className="mx-2">›</span>
            <span>Turnike Sistemleri</span>
          </nav>
        </div>
      </section>
      
      {/* Turnike Kategorileri */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {turnstileCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <Link href={category.link}>
                  <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                    <div className="aspect-square p-8 bg-gradient-to-br from-blue-50 to-white">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </h3>
                      {category.subtitle && (
                        <p className="text-sm text-gray-600 mb-3">
                          {category.subtitle}
                        </p>
                      )}
                      <div className="text-blue-600 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                        Detayları Görüntüle
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Referanslar */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Turnike Sistemi Referanslarımız
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Türkiye'nin önde gelen kurumlarına turnike sistemleri kurulumu gerçekleştirdik.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {references.map((ref, index) => (
              <motion.div
                key={ref.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="aspect-square p-4 bg-gray-50">
                  <img 
                    src={ref.image} 
                    alt={`Turnike Sistemi Referansı ${ref.id}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Turnike Sistemleri Açıklama */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Turnike Sistemleri
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6"
            >
              <p>
                <strong>Turnike Sistemleri</strong>, güvenlik noktalarında geçişin düzen içinde yapılması, geçişlerin kontrol altında tutulması, rapor alınması gibi işlemleri profesyonel şekilde yapılmasını sağlayan sistemlerdir.
              </p>

              <p>
                <strong>Turnike Sistemleri</strong> ile birlikte birleşik sistemler kullanılarak bilgisayar ortamında bunları takip etmek mümkündür.
              </p>

              <p>
                <strong>Turnike Sistemi</strong> şifreli, kartlı veya parmak izli okuyucular kullanılarak bütünleşik bir şekilde çalışıp personel geçiş izni ve sınırlandırması yapılabilir, bu da şirketinizde bulunan personel, müşteri ve ziyaretçilerin güvenli ve kontrollü olarak takip edilmesini sağlar.
              </p>

              <p>
                <strong>Turnike Sistemi</strong>, jetonlu geçişler için yada paralı geçişler için de ayrıca kullanılabilir. Böyle geçişler için şirketler geçiş hakkı başına belirledikleri ücretlerde insan faktörünü ortadan kaldırarak kazançlarını daha kolay ve doğru şekilde kontrol edebilir.
              </p>

              <p>
                Mika Teknoloji; <strong>Bel Tipi Turnike Sistemi, Boy Tipi Turnike Sistemi, Engelli Turnike Sistemi, Hızlı Geçiş Turnike Sistemi, Hijyen Turnike Sistemi, Jetonlu Turnike Sistemi</strong> satışını yapmakta ve teknik desteğini vermektedir.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Turnike Sistemi İhtiyacınız Var mı?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Size en uygun turnike çözümünü belirlemek için uzmanlarımızla iletişime geçin.
            </p>
            <Button 
              asChild
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4"
            >
              <Link href="/iletisim">
                İletişime Geçin <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}