import { ArrowRight, Shield, Clock, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { motion } from "framer-motion";

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
    "Modern teknoloji çözümleri",
    "Güvenilir PDKS çözümleri",
    "Uzman teknik destek"
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="mb-6"
              variants={fadeInUp}
            >
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Modern çözümler...
              </span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-slate-800 mb-6" 
              data-testid="hero-title"
              variants={fadeInUp}
            >
              Mika Teknoloji <br />
              <span className="text-primary">Kontrol Sistemleri</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto" 
              data-testid="hero-description"
              variants={fadeInUp}
            >
              %100 Web tabanlı, her yerden, her cihazdan erişim imkanı sunan güncel teknolojiler sunuyoruz.
            </motion.p>
            <motion.p 
              className="text-lg text-slate-500 mb-10" 
              data-testid="hero-subtitle"
              variants={fadeInUp}
            >
              Modern işletmeler için dijital çözümler sunan güvenilir teknoloji ortağınız.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 transform hover:scale-105 transition-transform duration-200"
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
                className="px-8 transform hover:scale-105 transition-transform duration-200"
                data-testid="hero-about-button"
              >
                <Link href="/hakkimizda">Hakkımızda</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4" data-testid="features-title">
              Size özelleştirilmiş çözümler
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Uzman ve tecrübeli kadromuz ile her zaman yanınızdayız.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 40 },
                  animate: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
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
                      className="p-0 h-auto text-primary hover:text-primary/80 group-hover:translate-x-2 transition-transform duration-200"
                      data-testid={`service-link-${service.title.toLowerCase()}`}
                    >
                      <Link href={service.href}>
                        Detayları öğrenin <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Key Features */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex items-center space-x-3 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors duration-200"
                variants={{
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-slate-700">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4" 
            data-testid="cta-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Uzman ve tecrübeli kadromuzla her zaman yanınızdayız
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Mika Teknoloji, geliştirdiği yazılım ve donanım çözümleri ile işletmelerin işgücünü daha verimli kullanmasına, 
            çalışan maliyetlerinin kontrol altında tutulmasına, zamandan tasarruf edilmesine ve operasyonel verimliliğin artmasına yardımcı oluyor.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 transform hover:scale-105 transition-transform duration-200"
              data-testid="cta-detail-button"
            >
              <Link href="/iletisim">
                Hemen Detaylı Bilgi Alın! <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
