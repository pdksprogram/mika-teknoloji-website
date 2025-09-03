import { ArrowRight, Shield, Clock, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Helmet } from "react-helmet";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Shield,
      title: t.home.services.webpdks.title,
      description: t.home.services.webpdks.description,
      href: "/cozumler/webpdks"
    },
    {
      icon: Clock,
      title: t.home.services.qrPatrol.title,
      description: t.home.services.qrPatrol.description,
      href: "/cozumler/qr-patrol"
    },
    {
      icon: Users,
      title: t.home.services.accessControl.title,
      description: t.home.services.accessControl.description,
      href: "/cozumler/access-kontrol"
    }
  ];

  const features = t.home.features;

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
      <Helmet>
        <title>Mika Teknoloji - PDKS, Personel Devam Kontrol Sistemi, Parmak İzi Takip Sistemi, Yüz Tanıma Sistem</title>
        <meta name="description" content="Türkiye'nin lider PDKS yazılımı! Personel devam kontrol sistemi, parmak izi takip sistemi, yüz tanıma sistem, QR kod PDKS. 50.000+ referans, %99.9 güvenilirlik." />
        <meta name="keywords" content="PDKS, personel devam kontrol sistemi, parmak izi takip sistemi, yüz tanıma sistem, pdks programı, PDKS yazılımı, personel takip sistemi, biyometrik güvenlik, QR kod PDKS, RFID kart sistemi" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Mika Teknoloji - PDKS, Personel Devam Kontrol Sistemi" />
        <meta property="og:description" content="Türkiye'nin lider PDKS yazılımı! Personel devam kontrol sistemi, parmak izi takip sistemi, yüz tanıma sistem." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mikateknoloji.com" />
        <meta property="og:image" content="https://mikateknoloji.com/mika-logo.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mika Teknoloji - PDKS, Personel Devam Kontrol Sistemi" />
        <meta name="twitter:description" content="Türkiye'nin lider PDKS yazılımı! Personel devam kontrol sistemi, parmak izi takip sistemi, yüz tanıma sistem." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Mika Teknoloji",
            "url": "https://mikateknoloji.com",
            "logo": "https://mikateknoloji.com/mika-logo.jpg",
            "description": "Türkiye'nin lider PDKS sistemi sağlayıcısı. Personel devam kontrol sistemi, parmak izi takip sistemi, yüz tanıma sistem çözümleri.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "TR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+90-xxx-xxx-xxxx",
              "contactType": "Customer Service",
              "availableLanguage": ["tr", "en"]
            },
            "foundingDate": "1990",
            "numberOfEmployees": "50-100",
            "industry": "Security Systems",
            "serviceArea": "Turkey",
            "hasCredential": "ISO 27001, ISO 9001"
          })}
        </script>
      </Helmet>
      
      {/* Hero Carousel Section */}
      <HeroCarousel />

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
              {t.home.featuresTitle}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.home.featuresSubtitle}
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
