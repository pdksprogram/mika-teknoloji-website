import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
  color: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: "QR Personel Takip",
    subtitle: "Akıllı Personel Yönetimi",
    description: "QR kod teknolojisi ile personel giriş-çıkış takibi, vardiya yönetimi ve raporlama sistemi. Modern işletmeler için kapsamlı çözüm.",
    image: "🔍",
    href: "/cozumler/qr-personel",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Turnike Sistemleri",
    subtitle: "Güvenli Geçiş Kontrolü",
    description: "Modern turnike sistemleri ile güvenli giriş-çıkış kontrolü. RFID, biyometrik ve kart okuyucu entegrasyonu.",
    image: "🚪",
    href: "/cozumler/turnike",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    title: "Bekçi Kontrol",
    subtitle: "Mobil Devriye Takibi",
    description: "QR-Patrol ile bekçi ve güvenlik personeli devriye rotalarının gerçek zamanlı takibi ve raporlanması.",
    image: "👮",
    href: "/cozumler/bekci-kontrol",
    color: "from-purple-500 to-violet-500"
  },
  {
    id: 4,
    title: "X-Ray Güvenlik",
    subtitle: "İleri Güvenlik Teknolojisi",
    description: "X-Ray bagaj tarama sistemleri ve güvenlik ekipmanları ile maksimum güvenlik çözümleri.",
    image: "📡",
    href: "/cozumler/xray",
    color: "from-orange-500 to-red-500"
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
    <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, index) => (
                <div key={slide.id} className="flex-[0_0_100%] min-w-0">
                  <motion.div 
                    className="max-w-4xl mx-auto text-center px-4"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: selectedIndex === index ? 1 : 0.7, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Icon */}
                    <motion.div 
                      className="mb-6"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: selectedIndex === index ? 1 : 0.9 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className={`inline-block p-6 rounded-full bg-gradient-to-r ${slide.color} text-white text-6xl shadow-xl`}>
                        {slide.image}
                      </div>
                    </motion.div>

                    {/* Badge */}
                    <div className="mb-6">
                      <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                        Modern çözümler...
                      </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4" data-testid="hero-title">
                      {slide.title} <br />
                      <span className="text-primary">{slide.subtitle}</span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto" data-testid="hero-description">
                      {slide.description}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        asChild 
                        size="lg" 
                        className="bg-primary hover:bg-primary/90 text-white px-8 transform hover:scale-105 transition-transform duration-200"
                        data-testid="hero-contact-button"
                      >
                        <Link href={slide.href}>
                          Detayları İncele <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                      <Button 
                        asChild 
                        variant="outline" 
                        size="lg" 
                        className="px-8 transform hover:scale-105 transition-transform duration-200"
                        data-testid="hero-contact-all-button"
                      >
                        <Link href="/iletisim">İletişime Geç</Link>
                      </Button>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-200 hover:scale-110"
            data-testid="carousel-prev"
          >
            <ChevronLeft className="h-6 w-6 text-slate-600" />
          </button>
          
          <button 
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-200 hover:scale-110"
            data-testid="carousel-next"
          >
            <ChevronRight className="h-6 w-6 text-slate-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  selectedIndex === index 
                    ? 'bg-primary scale-125' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                data-testid={`carousel-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}