import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle, Smartphone, Shield, Eye, Scan } from 'lucide-react';
import { Link } from 'wouter';

// Import generated images
import qrTrackingImage from '@assets/generated_images/QR_personnel_tracking_system_26b366a7.png';
import turnstileImage from '@assets/generated_images/Modern_turnstile_security_system_b933269f.png';
import securityPatrolImage from '@assets/generated_images/Security_guard_patrol_tracking_5c5b9b52.png';
import xrayImage from '@assets/generated_images/X-ray_security_scanner_system_9ebbd7d1.png';

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: any;
  image: string;
  href: string;
  bgGradient: string;
  overlayColor: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: "QR PERSONEL TAKİP SİSTEMİ",
    subtitle: "Cloud & Web Tabanlı PDKS Sistemi",
    description: "Modern işletmeler için tam otomatik personel devam kontrol çözümü",
    features: [
      "WEB TABANLI PERSONEL TAKİP SİSTEMİ",
      "KURULUM YOK & EVDEN - MOBİL CİHAZLARDAN TAKİP",
      "SORUNSUZ DESTEK GARANTİSİ",
      "%100 MÜŞTERİ MEMNUNİYETİ"
    ],
    icon: Smartphone,
    image: qrTrackingImage,
    href: "/cozumler/qr-personel",
    bgGradient: "from-blue-600 via-purple-600 to-cyan-500",
    overlayColor: "bg-blue-900/40"
  },
  {
    id: 2,
    title: "TURNİKE SİSTEMLERİ",
    subtitle: "Akıllı Geçiş Kontrol Teknolojisi",
    description: "Yüksek güvenlik standartlarında modern turnike çözümleri",
    features: [
      "RFID VE BİYOMETRİK ENTEGRASYON",
      "UZAKTAN İZLEME VE KONTROL",
      "HIZLI VE GÜVENİLİR GEÇİŞ",
      "7/24 TEKNİK DESTEK HİZMETİ"
    ],
    icon: Shield,
    image: turnstileImage,
    href: "/cozumler/turnike",
    bgGradient: "from-emerald-600 via-teal-600 to-green-500",
    overlayColor: "bg-emerald-900/40"
  },
  {
    id: 3,
    title: "BEKÇİ KONTROL SİSTEMİ",
    subtitle: "QR-Patrol Mobil Devriye Takibi",
    description: "Güvenlik personeli için gerçek zamanlı konum ve rota takibi",
    features: [
      "CANLI KONUM TAKİBİ",
      "OTOMATIK RAPOR OLUŞTURMA",
      "ACİL DURUM ALARM SİSTEMİ",
      "iOS & ANDROID UYUMLU"
    ],
    icon: Eye,
    image: securityPatrolImage,
    href: "/cozumler/bekci-kontrol",
    bgGradient: "from-purple-600 via-pink-600 to-violet-500",
    overlayColor: "bg-purple-900/40"
  },
  {
    id: 4,
    title: "X-RAY GÜVENLİK SİSTEMLERİ",
    subtitle: "İleri Teknoloji Tarama Çözümleri",
    description: "Profesyonel X-Ray bagaj ve güvenlik tarama sistemleri",
    features: [
      "YÜKSEK ÇÖZÜNÜRLÜK GÖRÜNTÜ",
      "OTOMATİK TEHDİT ALGILAMA",
      "HIZLI VE ETKİLİ TARAMA",
      "ULUSLARARASI STANDARTLAR"
    ],
    icon: Scan,
    image: xrayImage,
    href: "/cozumler/xray",
    bgGradient: "from-orange-600 via-red-600 to-pink-500",
    overlayColor: "bg-red-900/40"
  }
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    
    // Auto-scroll
    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(autoScroll);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-200/30 transform rotate-45 rounded-lg animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200/30 transform rotate-12 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-green-200/30 transform -rotate-12 rounded-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-pink-200/30 transform rotate-45 rounded-full animate-bounce delay-500"></div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden relative z-10" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient}`}></div>
              
              {/* Overlay */}
              <div className={`absolute inset-0 ${slide.overlayColor} backdrop-blur-sm`}></div>
              
              {/* Hexagon Pattern Overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-1/4 w-20 h-20 border-2 border-white transform rotate-45"></div>
                <div className="absolute bottom-20 right-1/3 w-16 h-16 border border-white transform rotate-12"></div>
                <div className="absolute top-1/3 right-10 w-24 h-24 border-2 border-white transform -rotate-12"></div>
                <div className="absolute bottom-1/3 left-10 w-18 h-18 border border-white transform rotate-45"></div>
              </div>

              {/* Professional Background Image */}
              <div className="absolute inset-0 z-10">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {/* Professional overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-20 min-h-screen flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl">
                    {/* Corporate Header Section */}
                    <motion.div 
                      className="mb-12"
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ 
                        opacity: selectedIndex === index ? 1 : 0, 
                        y: selectedIndex === index ? 0 : -30 
                      }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      {/* Corporate Badge */}
                      <div className="inline-flex items-center bg-primary/90 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-white/20">
                        <div className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></div>
                        <span className="text-white font-medium text-sm tracking-wider uppercase">
                          Mika Teknoloji Çözümleri
                        </span>
                      </div>
                      
                      {/* Main Title */}
                      <div className="bg-gradient-to-r from-primary via-primary to-primary/80 inline-block px-8 py-4 transform -skew-x-6 shadow-2xl">
                        <h1 className="transform skew-x-6 font-bold text-2xl md:text-3xl tracking-wide text-white">
                          {slide.title}
                        </h1>
                      </div>
                      
                      {/* Subtitle */}
                      <div className="mt-4 bg-black/40 backdrop-blur-sm inline-block px-6 py-3 rounded-lg border-l-4 border-primary">
                        <h2 className="text-white/95 text-xl font-semibold">
                          {slide.subtitle}
                        </h2>
                      </div>
                    </motion.div>

                    {/* Professional Features Grid */}
                    <div className="grid md:grid-cols-2 gap-4 mb-10">
                      {slide.features.map((feature, idx) => (
                        <motion.div 
                          key={idx}
                          className="group bg-white/95 backdrop-blur-sm rounded-xl px-6 py-5 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                          initial={{ opacity: 0, y: -30 }}
                          animate={{ 
                            opacity: selectedIndex === index ? 1 : 0, 
                            y: selectedIndex === index ? 0 : -20 
                          }}
                          transition={{ 
                            duration: 0.7, 
                            delay: selectedIndex === index ? 0.5 + (idx * 0.2) : 0,
                            ease: "easeOut"
                          }}
                          whileHover={{ scale: 1.02, y: -2 }}
                        >
                          <div className="flex items-center space-x-4">
                            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-full p-2 shadow-md group-hover:scale-110 transition-transform duration-300">
                              <CheckCircle className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-slate-800 font-semibold text-base leading-relaxed">
                              {feature}
                            </span>
                          </div>
                          
                          {/* Corporate accent line */}
                          <div className="mt-3 h-0.5 bg-gradient-to-r from-primary/60 to-transparent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Corporate CTA Section */}
                    <motion.div
                      className="flex flex-col sm:flex-row gap-4 items-start"
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ 
                        opacity: selectedIndex === index ? 1 : 0, 
                        y: selectedIndex === index ? 0 : -20 
                      }}
                      transition={{ 
                        duration: 0.8, 
                        delay: selectedIndex === index ? 0.5 + (slide.features.length * 0.2) : 0 
                      }}
                    >
                      <Button 
                        asChild 
                        size="lg" 
                        className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-green-500/50"
                        data-testid="hero-detail-button"
                      >
                        <Link href={slide.href} className="flex items-center">
                          <span>PROFESYONEL ÇÖZÜM AL</span>
                          <ArrowRight className="ml-3 h-5 w-5" />
                        </Link>
                      </Button>
                      
                      <div className="text-white/80 text-sm mt-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>7/24 Teknik Destek</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span>Ücretsiz Kurulum & Eğitim</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Corporate Technology Badge */}
                    <motion.div 
                      className="absolute bottom-8 right-8 hidden lg:block"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: selectedIndex === index ? 1 : 0, 
                        scale: selectedIndex === index ? 1 : 0.9 
                      }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/50">
                        <slide.icon className="w-14 h-14 text-primary mb-2" />
                        <div className="text-xs text-slate-600 font-medium text-center">
                          Sertifikalı<br/>Çözüm
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-4 bg-black/30 backdrop-blur-lg rounded-full px-6 py-3">
          <button 
            onClick={scrollPrev}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200"
            data-testid="carousel-prev"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  selectedIndex === index 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                data-testid={`carousel-dot-${index}`}
              />
            ))}
          </div>
          
          <button 
            onClick={scrollNext}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200"
            data-testid="carousel-next"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}