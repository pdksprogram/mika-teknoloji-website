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

              {/* Full Background Image */}
              <div className="absolute inset-0 z-10">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-20 min-h-screen flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl">
                    {/* Main Title Banner - properzaman style */}
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ 
                        opacity: selectedIndex === index ? 1 : 0, 
                        y: selectedIndex === index ? 0 : -30 
                      }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <div className="inline-block bg-primary px-8 py-4 transform -skew-x-12 mb-6">
                        <span className="block transform skew-x-12 font-bold text-xl md:text-2xl tracking-wide text-white">
                          {slide.title}
                        </span>
                      </div>
                    </motion.div>

                    {/* Features List - Slide from top one by one */}
                    <div className="space-y-4 mb-8">
                      {slide.features.map((feature, idx) => (
                        <motion.div 
                          key={idx}
                          className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20"
                          initial={{ opacity: 0, y: -30 }}
                          animate={{ 
                            opacity: selectedIndex === index ? 1 : 0, 
                            y: selectedIndex === index ? 0 : -20 
                          }}
                          transition={{ 
                            duration: 0.6, 
                            delay: selectedIndex === index ? 0.4 + (idx * 0.15) : 0 
                          }}
                        >
                          <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                          <span className="text-white text-lg font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ 
                        opacity: selectedIndex === index ? 1 : 0, 
                        y: selectedIndex === index ? 0 : -20 
                      }}
                      transition={{ 
                        duration: 0.6, 
                        delay: selectedIndex === index ? 0.4 + (slide.features.length * 0.15) : 0 
                      }}
                    >
                      <Button 
                        asChild 
                        size="lg" 
                        className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-none font-bold text-lg tracking-wide transform hover:scale-105 transition-all duration-200 shadow-xl"
                        data-testid="hero-detail-button"
                      >
                        <Link href={slide.href}>
                          ÜCRETSİZ TEKLİF AL
                        </Link>
                      </Button>
                    </motion.div>

                    {/* Technology Badge */}
                    <motion.div 
                      className="absolute bottom-8 right-8 hidden lg:block"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: selectedIndex === index ? 1 : 0, 
                        scale: selectedIndex === index ? 1 : 0.9 
                      }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <div className="bg-white/90 rounded-full p-4 shadow-2xl">
                        <slide.icon className="w-12 h-12 text-slate-700" />
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