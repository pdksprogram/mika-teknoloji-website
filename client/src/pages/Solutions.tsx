import { Shield, Clock, Users, Key, Eye, CreditCard } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Solutions() {
  const solutions = [
    {
      icon: Shield,
      title: "WebPDKS",
      description: "%100 Web Tabanlı Personel Devam Kontrol Sistemi. Her yerden erişim imkanı.",
      features: ["Web tabanlı platform", "Gerçek zamanlı raporlama", "Mobil uyumluluk"]
    },
    {
      icon: Clock,
      title: "QR-Patrol",
      description: "Online Bekçi Devriye Tur Kontrol Uygulaması (iOS & Android)",
      features: ["GPS destekli takip", "QR kod sistemi", "Anlık bildirimler"]
    },
    {
      icon: Users,
      title: "Access Kontrol",
      description: "Giriş çıkış kontrol ve otomasyon projelendirme çözümleri",
      features: ["Turnike sistemleri", "Kart okuyucular", "Biyometrik sistemler"]
    },
    {
      icon: Eye,
      title: "Yüz Tanıma",
      description: "Temassız, hijyenik ve güvenli yüz tanıma sistemiyle giriş çıkış kontrolü",
      features: ["Temassız erişim", "Yüksek güvenlik", "Hızlı tanıma"]
    },
    {
      icon: Key,
      title: "Anahtar Kontrol",
      description: "Güvenli anahtar yönetimi için şifreli dolap takip sistemi",
      features: ["Şifreli dolap", "Takip sistemi", "Yetki yönetimi"]
    },
    {
      icon: CreditCard,
      title: "RFID Kart Okuyucu",
      description: "Kullanım kolaylığı ve hızlı tepki süresi ile RFID kart okuma sistemi",
      features: ["Hızlı okuma", "Dayanıklı yapı", "Kolay entegrasyon"]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6" data-testid="solutions-title">
            Çözümlerimiz
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            İşletmenizin ihtiyaçlarına özel geliştirilmiş kontrol sistemleri ve yazılım çözümleri
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">{solution.title}</CardTitle>
                <CardDescription className="text-slate-600">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                  data-testid={`solution-detail-${solution.title.toLowerCase()}`}
                >
                  <Link href="/iletisim">Detaylı Bilgi Al</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-slate-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Size Özel Çözüm mü Arıyorsunuz?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Uzman ekibimiz ile ihtiyaçlarınıza özel çözümler geliştirebiliriz. 
            Ücretsiz danışmanlık için hemen iletişime geçin.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8"
            data-testid="custom-solution-button"
          >
            <Link href="/iletisim">Ücretsiz Danışmanlık</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
