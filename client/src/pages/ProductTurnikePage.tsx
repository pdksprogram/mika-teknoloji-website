import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ProductTurnikePage() {
  const turnstileProducts = [
    {
      id: 1,
      name: "Bel Tipi Turnikeler",
      subtitle: "( Üç Kollu Turnikeler )",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
      href: "/urunler/bel-tipi-turnike"
    },
    {
      id: 2,
      name: "Boy Tipi Turnikeler",
      subtitle: "",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      href: "/urunler/boy-tipi-turnike"
    },
    {
      id: 3,
      name: "Engelli Turnikeleri",
      subtitle: "( VIP Turnikeler )",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop",
      href: "/urunler/engelli-turnike"
    },
    {
      id: 4,
      name: "Hızlı Geçiş Turnikeleri",
      subtitle: "",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      href: "/urunler/hizli-gecis-turnike"
    },
    {
      id: 5,
      name: "Hijyen Turnikeleri",
      subtitle: "",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop",
      href: "/urunler/hijyen-turnike"
    },
    {
      id: 6,
      name: "Jetonlu Turnikeler",
      subtitle: "",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop",
      href: "/urunler/jetonlu-turnike"
    }
  ];

  const referenceImages = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=200&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <div className="bg-white border-b py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Turnike Sistemi
          </h1>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-gray-50 border-b py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/urunler/personel-takip" className="text-blue-600 hover:underline">
              Personel Takip Sistemi
            </Link>
            <Link href="/urunler/turnike" className="text-blue-600 hover:underline font-semibold">
              Turnike Sistemi
            </Link>
            <Link href="/urunler/kart-okuyucu" className="text-blue-600 hover:underline">
              Kart Okuyucular
            </Link>
            <Link href="/urunler/yuz-tanima" className="text-blue-600 hover:underline">
              Yüz Tanıma Cihazları
            </Link>
            <Link href="/urunler/access-kontrol" className="text-blue-600 hover:underline">
              Access Kontrol Panelleri
            </Link>
            <Link href="/urunler/bariyer" className="text-blue-600 hover:underline">
              Bariyer Sistemi
            </Link>
          </div>
        </div>
      </div>

      {/* Products Grid - Betaper Style */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {turnstileProducts.map((product) => (
            <div key={product.id} className="text-center">
              <Link href={product.href} className="block group">
                <div className="mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-80 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {product.name}
                  {product.subtitle && (
                    <div className="text-lg font-normal text-gray-600 mt-1">
                      {product.subtitle}
                    </div>
                  )}
                </h2>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* References Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Turnike Sistemi / Referanslarımız
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {referenceImages.map((image, index) => (
              <div key={index} className="aspect-[3/2]">
                <img 
                  src={image} 
                  alt={`Referans ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-sm"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Turnike Sistemleri
          </h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              <strong>Turnike Sistemleri</strong>, güvenlik noktalarında geçişin düzen içinde yapılması, 
              geçişlerin kontrol altında tutulması, rapor alınması gibi işlemleri profesyonel şekilde 
              yapılmasını sağlayan sistemlerdir.
            </p>
            <p>
              <strong>Turnike Sistemleri</strong> ile birlikte birleşik sistemler kullanılarak bilgisayar 
              ortamında bunları takip etmek mümkündür.
            </p>
            <p>
              <strong>Turnike Sistemi</strong> şifreli, kartlı veya parmak izli okuyucular kullanılarak 
              bütünleşik bir şekilde çalışıp personel geçiş izni ve sınırlandırması yapılabilir, bu da 
              şirketinizde bulunan personel, müşteri ve ziyaretçilerin güvenli ve kontrollü olarak 
              takip edilmesini sağlar.
            </p>
            <p>
              <strong>Turnike Sistemi</strong>, jetonlu geçişler için yada paralı geçişler için de 
              ayrıca kullanılabilir. Böyle geçişler için şirketler geçiş hakkı başına belirledikleri 
              ücretlerde insan faktörünü ortadan kaldırarak kazançlarını daha kolay ve doğru şekilde 
              kontrol edebilir.
            </p>
            <p>
              Mika Teknoloji; <strong>Üç Kollu Turnike Sistemi, Tripod Turnike Sistemi, VIP Turnike Sistemi, 
              Kelebek Turnike Sistemi, Yaprak Turnike Sistemi, Single Turnike Sistemi, Double Turnike Sistemi</strong> 
              satışını yapmakta ve teknik desteğini vermektedir.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Turnike Sistemleri Satış ve Destek
          </h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Profesyonel turnike sistemleri için uzman ekibimizle iletişime geçin. 
            Ücretsiz keşif ve teknik destek hizmeti sunuyoruz.
          </p>
          <Button 
            asChild
            size="lg"
            variant="secondary"
            className="text-blue-600 hover:text-blue-700"
            data-testid="contact-cta"
          >
            <Link href="/iletisim">
              Satış Destek Hattı
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}