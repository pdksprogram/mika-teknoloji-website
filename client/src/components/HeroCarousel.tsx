import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import { CTA_DONANIM, CTA_YAZILIM } from '@/lib/iletisim';
import { boyut } from "@/lib/gorselBoyut";

// Slaytlarda yalnız gerçek ürün fotoğrafı ve gerçek (KVKK maskeli) program ekranı kullanılır.
interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  href: string;
  tur: "yazilim" | "donanim";
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: "QR Personel Takip Sistemi",
    subtitle: "Bulut ve web tabanlı PDKS",
    description: "Personel giriş-çıkışı telefondan QR kod ile; kurulum gerektirmez.",
    features: ["Web tabanlı personel takibi", "Mobil cihazlardan takip", "Aylık puantaj ve Excel raporları"],
    image: "/images/slayt/qr-pdks-mobil.jpg",
    imageAlt: "Mika QR PDKS mobil uygulama ekranı",
    href: "/qr-pdks",
    tur: "yazilim",
  },
  {
    id: 2,
    title: "Turnike Sistemleri",
    subtitle: "Bel tipi, boy tipi ve hızlı geçiş",
    description: "Kartlı, QR ve biyometrik okuyucularla çalışan turnike çözümleri.",
    features: ["RFID ve biyometrik entegrasyon", "Uzaktan izleme ve kontrol", "Kurulum ve teknik destek"],
    image: "/images/slayt/turnike-t345.jpg",
    imageAlt: "T345 elektromekanik bel tipi turnike",
    href: "/urunler/turnike",
    tur: "donanim",
  },
  {
    id: 3,
    title: "Yüz Tanıma Cihazları",
    subtitle: "Temassız PDKS terminalleri",
    description: "Yüz, parmak izi ve kart ile giriş-çıkış kaydı; veriler doğrudan programa aktarılır.",
    features: ["Yüz ve parmak izi okuma", "Kart okuyucu desteği", "Bulut PDKS ile anlık aktarım"],
    image: "/images/slayt/yuz-tanima-cihazi.jpg",
    imageAlt: "Yüz tanıma ve parmak izi PDKS cihazı",
    href: "/urunler/yuz-tanima",
    tur: "donanim",
  },
  {
    id: 4,
    title: "Bulut PDKS Programı",
    subtitle: "Puantaj, izin ve vardiya tek ekranda",
    description: "Giriş-çıkış kayıtları, izinler ve fazla mesai otomatik hesaplanır.",
    features: ["Otomatik puantaj", "İzin ve vardiya yönetimi", "Excel raporları"],
    image: "/images/slayt/bulut-pdks-paneli.jpg",
    imageAlt: "Mika bulut PDKS programı giriş-çıkış listesi",
    href: "/pdks-programi",
    tur: "yazilim",
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
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

    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);

    return () => {
      clearInterval(autoScroll);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative overflow-hidden bg-slate-900 border-b-4 border-primary">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="flex-[0_0_100%] min-w-0"
              aria-roledescription="slayt"
              aria-hidden={selectedIndex !== index}
            >
              <div className="container mx-auto px-4 pt-6 pb-24 lg:py-20 grid lg:grid-cols-2 gap-6 lg:gap-10 items-center lg:min-h-[560px]">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    {slide.title}
                  </h2>
                  <p className="mt-3 text-xl text-slate-300">{slide.subtitle}</p>
                  <p className="mt-4 lg:mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
                    {slide.description}
                  </p>
                  <ul className="hidden sm:block mt-6 space-y-2">
                    {slide.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-slate-200">
                        <span className="h-1.5 w-1.5 bg-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 lg:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button asChild size="lg">
                      <Link href="/iletisim" tabIndex={selectedIndex === index ? 0 : -1}>
                        {slide.tur === "yazilim" ? CTA_YAZILIM : CTA_DONANIM}
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outlineLight" data-testid="hero-detail-button">
                      <Link href={slide.href} tabIndex={selectedIndex === index ? 0 : -1}>
                        Detayları İncele
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Mobilde görsel metnin üstünde, oran korunur */}
                <div className="order-first lg:order-none flex items-center justify-center">
                  <div className="bg-white rounded-xl p-3 lg:p-6 shadow-2xl max-w-full">
                    <img {...boyut(slide.image)}
                      src={slide.image}
                      alt={slide.imageAlt}
                      className="block max-h-[180px] lg:max-h-[400px] w-auto max-w-full object-contain"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      {...(index === 0 ? { fetchpriority: "high" } : {})}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-4 sm:left-1/2 sm:-translate-x-1/2 z-10">
        <div className="flex items-center gap-4 bg-slate-800 border border-slate-700 rounded-full px-5 py-2">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Önceki slayt"
            className="p-1.5 rounded-full hover:bg-slate-700 transition-colors"
            data-testid="carousel-prev"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          <div className="flex gap-2">
            {slides.map((slide, index) => (
              <button
                type="button"
                key={slide.id}
                onClick={() => scrollTo(index)}
                aria-label={`${index + 1}. slayt: ${slide.title}`}
                className={`h-2 rounded-full transition-all duration-200 ${
                  selectedIndex === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70 w-2'
                }`}
                data-testid={`carousel-dot-${index}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Sonraki slayt"
            className="p-1.5 rounded-full hover:bg-slate-700 transition-colors"
            data-testid="carousel-next"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
