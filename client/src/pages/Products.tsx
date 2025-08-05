import { Fingerprint, CreditCard, Eye, Key, Shield, Camera } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Products() {
  const productCategories = [
    {
      icon: Eye,
      title: "Yüz Tanıma Sistemleri",
      description: "Temassız, hijyenik ve güvenli yüz tanıma sistemiyle giriş çıkışlar kontrol altında.",
      badge: "Popüler",
      badgeVariant: "default" as const,
      features: ["Temassız erişim", "AI destekli tanıma", "Maske ile çalışma", "Hızlı işlem"]
    },
    {
      icon: Fingerprint,
      title: "Parmak İzi Okuyucular",
      description: "Optik veya biyometrik yöntemlerle tarama ve kaydetme işlemi yapar.",
      features: ["Yüksek hassasiyet", "Hızlı tanıma", "Dayanıklı yapı", "Kolay kullanım"]
    },
    {
      icon: CreditCard,
      title: "RFID Kart Okuyucular",
      description: "Kullanım kolaylığı ve hızlı tepki süresi, RFID kart okuyucunun avantajıdır.",
      features: ["13.56 MHz frekans", "Hızlı okuma", "Uzun menzil", "Su geçirmez"]
    },
    {
      icon: Shield,
      title: "Turnike Sistemleri",
      description: "PDKS sistemi ile entegre edilebilir, giriş çıkış alanları daha kontrollü gerçekleştirilir.",
      badge: "Yeni",
      badgeVariant: "secondary" as const,
      features: ["Çift yönlü geçiş", "Emniyet sensörleri", "LED göstergeler", "Alarm sistemi"]
    },
    {
      icon: Key,
      title: "Anahtar Kontrol Sistemleri",
      description: "Güvenli anahtar yönetimi için şifreli dolap takip sistemini deneyin!",
      features: ["Şifreli dolap", "Elektronik kilit", "Kullanıcı yetkileri", "Raporlama"]
    },
    {
      icon: Camera,
      title: "Bekçi Tur Kontrol",
      description: "Devriye turlarını planlı ve eksiksiz gerçekleştirmesine yardımcı oluyoruz.",
      features: ["GPS takip", "QR kod sistemi", "Mobil uygulama", "Gerçek zamanlı izleme"]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6" data-testid="products-title">
            Ürünlerimiz
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            En son teknoloji ile üretilmiş, güvenilir ve dayanıklı kontrol sistemleri
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {productCategories.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              {product.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant={product.badgeVariant} className="shadow-sm">
                    {product.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300">
                  <product.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-primary/60 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                  data-testid={`product-detail-${product.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Link href="/iletisim">Detayları Öğren</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Neden Özgür Zaman?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              30 yıllık deneyimimiz ve 100,000+ müşteri memnuniyetimizle sektörün lideri
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Kaliteli Ürünler", desc: "CE sertifikalı, dayanıklı" },
              { title: "Hızlı Teslimat", desc: "Türkiye geneli 48 saat" },
              { title: "Teknik Destek", desc: "7/24 uzman desteği" },
              { title: "Garanti", desc: "2 yıl kapsamlı garanti" }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
                <h3 className="font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Hangi Ürün Size Uygun?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Uzman danışmanlarımız ihtiyaçlarınıza en uygun ürünü seçmenizde size yardımcı olacak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8"
              data-testid="product-consultation-button"
            >
              <Link href="/iletisim">Ücretsiz Danışmanlık</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="px-8"
              data-testid="product-catalog-button"
            >
              <Link href="/iletisim">Katalog İste</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
