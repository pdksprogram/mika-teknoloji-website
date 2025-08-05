import { ArrowRight, Shield, Clock, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

export default function Home() {
  const services = [
    {
      icon: Shield,
      title: "WebPDKS",
      description: "%100 Web Tabanlı Personel Devam Kontrol Sistemi",
      href: "/cozumler/webpdks"
    },
    {
      icon: Clock,
      title: "QR-Patrol",
      description: "Online Bekçi Devriye Tur Kontrol Uygulaması (iOS & Android)",
      href: "/cozumler/qr-patrol"
    },
    {
      icon: Users,
      title: "Access Kontrol",
      description: "Giriş çıkış kontrol ve otomasyon projelendirme",
      href: "/cozumler/access-kontrol"
    }
  ];

  const features = [
    "100,000'in üzerinde müşteri portföyü",
    "%100 Web tabanlı çözümler",
    "Her yerden, her cihazdan erişim",
    "1993'den beri güvenilir hizmet",
    "Türkiye'nin en büyük PDKS firması",
    "Uzman teknik destek"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                1993'ten bugüne...
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6" data-testid="hero-title">
              Özgür Zaman <br />
              <span className="text-primary">Kontrol Sistemleri</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto" data-testid="hero-description">
              %100 Web tabanlı, her yerden, her cihazdan erişim imkanı sunan güncel teknolojiler sunuyoruz.
            </p>
            <p className="text-lg text-slate-500 mb-10" data-testid="hero-subtitle">
              100,000'in üzerinde müşteri portföyü ile Türkiye'nin kurumsal işgücü ve erişim kontrol yönetimine yönelik çözümler sunan en büyük firmasıdır.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8"
                data-testid="hero-contact-button"
              >
                <Link href="/iletisim">
                  İletişime Geçin! <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="px-8"
                data-testid="hero-about-button"
              >
                <Link href="/hakkimizda">Hakkımızda</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4" data-testid="features-title">
              Size özelleştirilmiş çözümler
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Uzman ve tecrübeli kadromuz ile her zaman yanınızdayız.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <Button 
                    asChild 
                    variant="ghost" 
                    className="p-0 h-auto text-primary hover:text-primary/80"
                    data-testid={`service-link-${service.title.toLowerCase()}`}
                  >
                    <Link href={service.href}>
                      Detayları öğrenin <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-slate-50">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="cta-title">
            Uzman ve tecrübeli kadromuzla her zaman yanınızdayız
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Özgür Zaman, geliştirdiği yazılım ve donanım çözümleri ile işletmelerin işgücünü daha verimli kullanmasına, 
            çalışan maliyetlerinin kontrol altında tutulmasına, zamandan tasarruf edilmesine ve operasyonel verimliliğin artmasına yardımcı oluyor.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8"
            data-testid="cta-detail-button"
          >
            <Link href="/iletisim">
              Hemen Detaylı Bilgi Alın! <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
