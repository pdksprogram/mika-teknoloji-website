import { ArrowRight, Shield, Clock, Users, CheckCircle, Award, Globe, Calendar, Trophy, Smartphone, Settings, Timer, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  const services = [
    {
      icon: Smartphone,
      title: "Mobil PDKS",
      description: "Android ve iOS destekli mobil personel takip sistemi",
      href: "/cozumler/mobil-pdks"
    },
    {
      icon: Shield,
      title: "WebPDKS",
      description: "%100 Web Tabanlı Personel Devam Kontrol Sistemi",
      href: "/cozumler/webpdks"
    },
    {
      icon: Clock,
      title: "QR-Patrol",
      description: "Online Bekçi Devriye Tur Kontrol Uygulaması",
      href: "/cozumler/qr-patrol"
    },
    {
      icon: Users,
      title: "Access Kontrol",
      description: "Giriş çıkış kontrol ve otomasyon projelendirme",
      href: "/cozumler/access-kontrol"
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "10,000+",
      title: "Kurumsal Müşteri",
      description: "Güvenilir iş ortağınız"
    },
    {
      icon: Calendar,
      number: "15+",
      title: "Yıllık Tecrübe",
      description: "Sektördeki uzmanlığımız"
    },
    {
      icon: Globe,
      number: "Türkiye",
      title: "Genelinde Hizmet",
      description: "Her yerde yanınızdayız"
    },
    {
      icon: Trophy,
      number: "#1",
      title: "Sektör Lideri",
      description: "Öncü teknoloji çözümleri"
    }
  ];

  const features = [
    "100,000'in üzerinde müşteri portföyü",
    "%100 Web tabanlı çözümler",
    "Mobil PDKS uygulamaları",
    "Her yerden, her cihazdan erişim",
    "Modern teknoloji çözümleri",
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
      {/* Corporate Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-primary/5 to-pink-500/5"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent">
                  Türkiye'nin Güvenilir
                </span>
                <br />
                PDKS ve Kontrol Sistemleri Uzmanı
              </h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                İnovatif teknoloji çözümleri ile işletmelerin dijital dönüşümüne öncülük ediyoruz
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button 
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Link href="/iletisim">
                    İletişime Geçin <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 opacity-10">
          <Settings className="h-32 w-32 text-primary animate-spin" style={{ animationDuration: '20s' }} />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <Timer className="h-24 w-24 text-primary animate-pulse" />
        </div>
      </section>

      {/* Corporate Stats Section */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-slate-700 mb-1">
                  {stat.title}
                </div>
                <div className="text-sm text-slate-500">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4" data-testid="solutions-title">
              Size Özelleştirilmiş Teknoloji Çözümleri
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Mobil PDKS'den web tabanlı sistemlere, işletmenizin dijital dönüşümünü hızlandırıyoruz
            </p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
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

      {/* Corporate Quote Section - Idenfit Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Quote Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="text-6xl text-primary/20 font-serif absolute -top-6 -left-4">"</div>
                <blockquote className="text-2xl md:text-3xl font-semibold text-slate-700 leading-relaxed mb-8 relative z-10">
                  <span className="text-primary">Hedefimiz</span>, Türkiye'nin en güvenilir teknoloji 
                  markalarından biri olup, <span className="text-primary">mobil PDKS</span> ve 
                  kontrol sistemleri sektöründe <span className="text-primary">inovatif, yenilikçi</span> ve 
                  lider kimliğimizle yeni başarılara imza atmak.
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-1 bg-primary mr-4"></div>
                  <cite className="text-lg font-medium text-slate-600 not-italic">Mika Teknoloji Ekibi</cite>
                </div>
              </div>
              
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Button 
                  asChild 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Link href="/iletisim">
                    Hemen Başvur <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Tech Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative flex justify-center items-center min-h-[400px]">
                {/* Central Clock */}
                <div className="relative z-20">
                  <div className="w-32 h-32 border-4 border-slate-300 rounded-full flex items-center justify-center bg-white shadow-lg">
                    <Timer className="h-16 w-16 text-slate-600" />
                  </div>
                  {/* Clock hands */}
                  <div className="absolute top-1/2 left-1/2 w-12 h-0.5 bg-slate-600 origin-left transform -translate-y-0.5 rotate-45"></div>
                  <div className="absolute top-1/2 left-1/2 w-8 h-0.5 bg-primary origin-left transform -translate-y-0.5 rotate-12"></div>
                </div>

                {/* Surrounding Tech Elements */}
                <div className="absolute top-16 right-16 z-10 opacity-80">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Settings className="h-8 w-8 text-primary animate-spin" style={{ animationDuration: '10s' }} />
                  </div>
                </div>

                <div className="absolute bottom-16 left-16 z-10 opacity-80">
                  <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center">
                    <div className="relative">
                      <div className="w-12 h-12 border-2 border-slate-400 rounded-full"></div>
                      <div className="absolute inset-2 bg-slate-400 rounded-full"></div>
                      <div className="absolute inset-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Smartphone */}
                <div className="absolute top-8 right-8 z-30">
                  <div className="w-20 h-32 bg-slate-800 rounded-lg shadow-lg p-2">
                    <div className="w-full h-full bg-slate-100 rounded-md relative">
                      <div className="absolute top-2 left-2 right-2 h-8 bg-primary/20 rounded flex items-center justify-center">
                        <Smartphone className="h-4 w-4 text-primary" />
                      </div>
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="space-y-1">
                          <div className="h-2 bg-primary/30 rounded"></div>
                          <div className="h-2 bg-slate-300 rounded"></div>
                          <div className="h-2 bg-slate-300 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="w-full h-full bg-gradient-to-br from-primary to-pink-600"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6" 
            data-testid="cta-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Dijital Dönüşüm Yolculuğunuza Başlayın
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Mika Teknoloji'nin mobil PDKS, web tabanlı kontrol sistemleri ve güvenlik çözümleri ile 
            işletmenizin verimliliğini artırın. Uzman ekibimizle tanışın!
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 transform hover:scale-105 transition-all duration-200"
              data-testid="cta-contact-button"
            >
              <Link href="/iletisim">
                İletişime Geçin <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-800 px-8 py-3 transform hover:scale-105 transition-all duration-200"
              data-testid="cta-solutions-button"
            >
              <Link href="/cozumler">
                Çözümlerimizi Keşfedin <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
