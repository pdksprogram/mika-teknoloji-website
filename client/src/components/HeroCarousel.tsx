import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight, Smartphone, Shield, Eye, Scan } from 'lucide-react';
import { Link } from 'wouter';

// Carousel images from public folder
const qrTrackingImage = '/QR_personnel_tracking_system_26b366a7.png';
const turnstileImage = '/Modern_turnstile_security_system_b933269f.png';
const securityPatrolImage = '/Security_guard_patrol_tracking_5c5b9b52.png';
const xrayImage = '/X-ray_security_scanner_system_9ebbd7d1.png';

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
                      
                      {/* Clean Main Title */}
                      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                        {slide.title}
                      </h2>
                      
                      {/* Clean Subtitle */}
                      <h3 className="text-xl md:text-2xl text-white/90 font-light mb-6">
                        {slide.subtitle}
                      </h3>
                    </motion.div>

                    {/* Clean Description */}
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: selectedIndex === index ? 1 : 0, 
                        y: selectedIndex === index ? 0 : 20 
                      }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <p className="text-white/90 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
                        {slide.description}
                      </p>
                      
                      {/* Subtle feature highlights */}
                      <div className="flex flex-wrap gap-3 mt-6">
                        {slide.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                            <span className="text-white/80 text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Clean CTA Section */}
                    <motion.div
                      className="flex flex-col sm:flex-row gap-6 items-start"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: selectedIndex === index ? 1 : 0, 
                        y: selectedIndex === index ? 0 : 20 
                      }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      <Button 
                        asChild 
                        size="lg" 
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        data-testid="hero-detail-button"
                      >
                        <Link href={slide.href} className="flex items-center">
                          <span>Detayları İncele</span>
                          <ArrowRight className="ml-3 h-5 w-5" />
                        </Link>
                      </Button>
                      
                      <Button 
                        asChild 
                        variant="outline" 
                        size="lg" 
                        className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm"
                      >
                        <Link href="/iletisim" className="flex items-center">
                          <span>Teklif Al</span>
                        </Link>
                      </Button>
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