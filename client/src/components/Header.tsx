import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "wouter";
import { Menu, X, Search, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import { useIsMobile } from "@/hooks/use-mobile"; // Not used currently
import { useLanguage } from "@/hooks/useLanguage";
import { menuSuz } from "@/lib/rotalar";
import { CTA_ARA, CTA_DONANIM, DEMO_TELEFON } from "@/lib/iletisim";
import MikaMarka from "@/components/MikaMarka";

const BAR_BAG = "relative font-medium text-white/90 transition-colors duration-200 hover:text-white group";
const BAR_CIZGI = "absolute -bottom-1 left-0 h-0.5 bg-[#F5A800] transition-all duration-200";
const MEGA_SUTUN: Record<number, string> = { 1: "grid-cols-1", 2: "grid-cols-2", 3: "grid-cols-3", 4: "grid-cols-4" };
const MEGA_GENISLIK: Record<number, string> = { 1: "w-80", 2: "w-[36rem]", 3: "w-[52rem]", 4: "w-[64rem]" };

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeMenuType, setActiveMenuType] = useState<'solutions' | 'products' | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [location] = useLocation();
  // const isMobile = useIsMobile(); // Not used currently
  const { t } = useLanguage();
  
  // Touch device detection for mobile dropdown behavior
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTouchDevice(window.matchMedia('(hover: none)').matches);
    }
  }, []);

  // Site içi arama verileri
  const searchableContent = [
    { title: "PDKS Sistemleri", url: "/pdks-programi", description: "Personel devam kontrol sistemleri, yüz tanıma, parmak izi" },
    { title: "Yüz Tanıma PDKS", url: "/pdks-programi#facial", description: "Temassız yüz tanıma teknolojisi ile personel takibi" },
    { title: "Parmak İzi PDKS", url: "/pdks-programi#fingerprint", description: "Biyometrik parmak izi ile güvenli personel kontrolü" },
    { title: "QR Tabanlı PDKS", url: "/pdks-programi#qr", description: "Mobil uygulama destekli QR kod sistemi" },
    { title: "RFID Kartlı PDKS", url: "/pdks-programi#rfid", description: "Temassız kart teknolojisi ile personel takibi" },
    { title: "WebPDKS", url: "https://pdkspersoneltakip.com/", description: "Web tabanlı personel takip sistemi" },
    { title: "Hakkımızda", url: "/hakkimizda", description: "Mika Teknoloji kurumsal bilgileri" },
    { title: "Çözümler", url: "/cozumler", description: "Teknoloji çözümlerimiz ve hizmetlerimiz" },
    { title: "Referanslar", url: "/referanslar", description: "Müşteri referanslarımız ve projelerimiz" },
    { title: "İletişim", url: "/iletisim", description: "İletişim bilgileri ve adres" },
  ];

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      // Açık mega menü kaydırmada kapanır.
      setIsDropdownOpen(false);
      setActiveMenuType(null);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mega menü dışına tıklanınca (dokunmatik ekran dahil) kapanır.
  useEffect(() => {
    if (!isDropdownOpen) return;
    const disTiklama = (e: PointerEvent) => {
      const hedef = e.target as Element | null;
      if (hedef && hedef.closest("[data-mega-menu]")) return;
      setIsDropdownOpen(false);
      setActiveMenuType(null);
    };
    document.addEventListener("pointerdown", disTiklama);
    return () => document.removeEventListener("pointerdown", disTiklama);
  }, [isDropdownOpen]);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setActiveMenuType(null);
  }, [location]);

  // Site içi arama fonksiyonu
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filtered = searchableContent.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults(filtered.slice(0, 5)); // İlk 5 sonucu göster
  };

  // Arama sonucuna tıklandığında
  const handleSearchResult = (url: string) => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
    if (url.startsWith('http')) {
      window.open(url, '_blank');
    } else {
      window.location.href = url;
    }
  };

  const navigationItems = [
    { href: "/urunler", label: t.nav.products, hasDropdown: true, menuType: 'products' },
    { href: "/hakkimizda", label: t.nav.about },
    { href: "/cozumler", label: t.nav.solutions, hasDropdown: true, menuType: 'solutions' },
    { href: "/referanslar", label: t.nav.references },
    { href: "/blog", label: t.nav.blog },
    { href: "/iletisim", label: t.nav.contact }
  ];

  // Çözümler menüsü
  const solutionsMenuData = {
    "Çözümler": [
      { name: "PDKS (Personel Devam Kontrol)", href: "/pdks-programi" },
      { name: "QR Kodlu Personel Takibi", href: "/qr-pdks" },
      { name: "Access Geçiş Kontrol Sistemleri", href: "/access-control" },
      { name: "Bekçi Tur Kontrol Sistemi", href: "/qr-bekci" },
      { name: "QR Bekçi Sistemi", href: "/qr-bekci" },
      { name: "Turnike Sistemleri", href: "/urunler/turnike" },
      { name: "Otel Kapı Kilit Sistemleri", href: "/otel-kilit" },
      { name: "Anahtar/Dolap Takip Sistemi", href: "/anahtar-takip" }
    ],
    "Donanımlar": [
      { name: "Biyometrik Yüz Tanıma Sistemi", href: "/urunler/yuz-tanima" },
      { name: "Parmak İzi Okuyucu", href: "/urunler/parmak-izi-tanima" },
      { name: "Kartlı Geçiş Sistemi (RFID)", href: "/kartli-gecis-sistemi" },
      { name: "Şifreli Passcode Sistemleri", href: "/passcode" },
      { name: "Bekçi Tur Kontrol Sistemi", href: "/qr-bekci" },
      { name: "Turnike Sistemleri", href: "/urunler/turnike" },
      { name: "Bariyer Sistemleri", href: "/urunler/bariyer-sistemleri" }
    ],
    "Yazılımlar": [
      { name: "Personel Takip Programı", href: "/urunler/personel-takip" },
      { name: "Personel Devam Kontrol Sistemi", href: "/pdks-programi" },
      { name: "Puantaj Programı", href: "/puantaj-programi" },
      { name: "Vardiya Takip Programı", href: "/vardiya-takip-programi" },
      { name: "Fazla Mesai Hesaplama", href: "/fazla-mesai-hesaplama" },
      { name: "QR PDKS Uygulaması", href: "/urunler/qr-pdks" }
    ]
  };

  // Ürünler menüsü
  const productsMenuData = {
    "Ürünler": [
      { name: "Parmak İzi Tanıma Sistemleri", href: "/urunler/parmak-izi-tanima" },
      { name: "Yüz Tanıma Sistemleri", href: "/urunler/yuz-tanima" },
      { name: "Geçiş Kontrol Sistemleri", href: "/urunler/gecis-kontrol" },
      { name: "Turnike Sistemleri", href: "/urunler/turnike" },
      { name: "Personel Takip Sistemleri", href: "/urunler/personel-takip" },
      { name: "QR Kodlu PDKS Sistemi", href: "/urunler/qr-pdks" },
      { name: "Bariyer Sistemleri", href: "/urunler/bariyer-sistemleri" },
      { name: "Mağaza Personel Takip Programı", href: "/urunler/magaza-personel-takip" },
      { name: "OGS & HGS Geçiş Sistemleri", href: "/urunler/ogs-hgs" },
      { name: "AR-GE Takip Sistemi", href: "/urunler/arge-takip" },
      { name: "Bekçi & Devriye Tur Sistemleri", href: "/qr-bekci" },
      { name: "Yemekhane Takip Sistemi", href: "/urunler/yemekhane" },
      { name: "Üye Takip Sistemi", href: "/urunler/uye-takip" },
      { name: "Kablosuz Alarm Sistemleri", href: "/urunler/kablosuz-alarm" }
    ]
  };

  const cozumSutunlari = menuSuz(solutionsMenuData);
  const urunSutunlari = menuSuz(productsMenuData);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return location === "/";
    }
    return location.startsWith(href);
  };

  return (
    <>
      {/* Main Header */}
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@700;800&display=swap" />
      </Helmet>
      <header
        className={`sticky top-0 z-50 border-b-2 border-[#F5A800] bg-[#201658] text-white ${
          isScrolled ? "shadow-[0_2px_10px_rgba(10,8,40,.25)]" : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4 h-[62px] lg:h-[86px]">
            {/* Logo */}
            <MikaMarka />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-5 xl:space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  data-mega-menu={item.hasDropdown ? "" : undefined}
                  onMouseEnter={!isTouchDevice ? () => {
                    if (item.hasDropdown && item.menuType) {
                      setIsDropdownOpen(true);
                      setActiveMenuType(item.menuType as 'solutions' | 'products');
                    }
                  } : undefined}
                  onMouseLeave={!isTouchDevice ? () => {
                    if (item.hasDropdown) {
                      setIsDropdownOpen(false);
                      setActiveMenuType(null);
                    }
                  } : undefined}
                >
                  {item.hasDropdown ? (
                    <a
                      href={item.href}
                      onClick={(e) => {
                        if (!item.hasDropdown) return;
                        if (isTouchDevice) {
                          e.preventDefault();
                          if (!isDropdownOpen || activeMenuType !== item.menuType) {
                            setActiveMenuType(item.menuType as 'solutions' | 'products');
                            setIsDropdownOpen(true);
                          } else {
                            setIsDropdownOpen(false);
                            setActiveMenuType(null);
                          }
                        }
                      }}
                      className={`${BAR_BAG} flex items-center space-x-1 ${isActiveLink(item.href) ? "text-white" : ""}`}
                      data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen && activeMenuType === item.menuType ? 'rotate-180' : ''}`} />
                      <span 
                        className={`${BAR_CIZGI} ${
                          isActiveLink(item.href) ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={`${BAR_BAG} ${isActiveLink(item.href) ? "text-white" : ""}`}
                      data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.label}
                      <span 
                        className={`${BAR_CIZGI} ${
                          isActiveLink(item.href) ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  )}
                  
                  {/* Mega Menu Dropdown */}
                  {/* Bağlantılar ön-render HTML'de hep bulunur (tarayıcı/arama motoru görür); kapalıyken yalnız CSS ile gizlenir */}
                  {item.hasDropdown && (() => {
                    const sutunlar = item.menuType === 'products' ? urunSutunlari : cozumSutunlari;
                    const acik = isDropdownOpen && activeMenuType === item.menuType;
                    return (
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 max-w-[calc(100vw-2rem)] ${MEGA_GENISLIK[sutunlar.length] ?? MEGA_GENISLIK[4]} bg-white text-slate-800 shadow-2xl border-t-2 border-[#F5A800] z-50${acik ? '' : ' hidden'}`}>
                      <div className={`grid ${MEGA_SUTUN[sutunlar.length] ?? MEGA_SUTUN[4]} gap-6 p-8`}>
                        {sutunlar.map(([category, items]) => (
                          <div key={category} className="space-y-4">
                            <h3 className="font-bold text-gray-900 text-base border-b border-slate-200 pb-2">
                              {category}
                            </h3>
                            <ul className="space-y-2">
                              {items.map((product) => (
                                <li key={product.href}>
                                  <Link
                                    href={product.href}
                                    className="text-gray-600 hover:text-primary transition-colors text-sm block py-1"
                                    data-testid={`mega-menu-${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                                  >
                                    {product.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                    );
                  })()}
                </div>
              ))}
              
              {/* Language & Search Section - İLETİŞİM | EN | Search */}
              <div className="flex items-center gap-1 text-sm font-medium">
                <Link
                  href="/"
                  hrefLang="en"
                  lang="en"
                  aria-label="English"
                  className="inline-flex h-11 items-center px-2 text-white/90 hover:text-white"
                  data-testid="main-language-link"
                >
                  EN
                </Link>
                {/* Site İçi Arama */}
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="h-11 w-11 p-0 text-white hover:bg-white/10 hover:text-white"
                  aria-label="Site içinde ara"
                  onClick={() => setIsSearchOpen(true)}
                  data-testid="search-button"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </nav>

            {/* Special Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="https://pdkspersoneltakip.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center px-2 text-sm font-medium text-white/90 hover:text-white"
                data-testid="webpdks-button"
              >
                Giriş
              </a>
              <Button asChild className="h-11 px-4 font-bold" data-testid="header-cta-button">
                <Link href="/iletisim">Teklif Alın</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex h-11 w-11 items-center justify-center rounded-md hover:bg-white/10 transition-colors"
              data-testid="mobile-menu-toggle"
              aria-label="Menüyü aç/kapat"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white text-slate-800 shadow-lg max-h-[calc(100dvh-64px)] overflow-y-auto">
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  item.hasDropdown ? (
                    <Accordion key={item.href} type="single" collapsible className="w-full">
                      <AccordionItem value={item.menuType!} className="border-none">
                        <AccordionTrigger 
                          className={`py-3 px-4 font-medium transition-colors duration-200 hover:no-underline rounded-lg ${
                            isActiveLink(item.href) 
                              ? "text-primary bg-primary/5 border-l-4 border-primary" 
                              : "text-slate-700 hover:text-primary hover:bg-slate-50"
                          }`}
                          data-testid={`mobile-accordion-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {item.label}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-2">
                          <div className="space-y-1">
                            {(item.menuType === 'products' ? urunSutunlari : cozumSutunlari).map(([category, items]) => (
                              <div key={category} className="py-2">
                                <h4 className="font-semibold text-slate-800 text-sm mb-2 border-b border-slate-200 pb-1">
                                  {category}
                                </h4>
                                <div className="space-y-1">
                                  {items.map((product) => (
                                    <Link
                                      key={product.href}
                                      href={product.href}
                                      className="flex min-h-[44px] items-center text-slate-600 hover:text-primary transition-colors text-sm px-2 rounded hover:bg-primary/5"
                                      data-testid={`mobile-submenu-${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {product.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block py-3 px-4 font-medium transition-colors duration-200 rounded-lg ${
                        isActiveLink(item.href) 
                          ? "text-primary bg-primary/5 border-l-4 border-primary" 
                          : "text-slate-700 hover:text-primary hover:bg-slate-50"
                      }`}
                      data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
                
                <div className="pt-4 border-t space-y-3">
                  {/* Birincil çağrı + telefon */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button asChild size="lg" data-testid="mobile-cta-button">
                      <Link href="/iletisim" onClick={() => setIsMenuOpen(false)}>{CTA_DONANIM}</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" data-testid="mobile-call-button">
                      <a href={`tel:${DEMO_TELEFON}`}>
                        <Phone className="h-4 w-4" />
                        {CTA_ARA}
                      </a>
                    </Button>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="h-11 w-full"
                    data-testid="mobile-webpdks-button"
                  >
                    <a href="https://pdkspersoneltakip.com/" target="_blank" rel="noopener noreferrer">Giriş</a>
                  </Button>
                  
                  {/* Site içi arama: telefonla karışmasın diye ikincil düğme */}
                  <Button
                    variant="outline"
                    className="h-11 w-full"
                    onClick={() => {
                      setIsSearchOpen(true);
                      setIsMenuOpen(false);
                    }}
                    data-testid="mobile-search-button"
                  >
                    <Search className="h-4 w-4" />
                    Site içinde ara
                  </Button>

                  <Button asChild variant="outline" className="h-11 w-full" data-testid="mobile-lang-en">
                    <Link href="/" hrefLang="en" lang="en" onClick={() => setIsMenuOpen(false)}>English</Link>
                  </Button>
                  
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
      
      {/* Fullscreen Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[9999] bg-slate-900 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={() => {
              setIsSearchOpen(false);
              setSearchQuery("");
              setSearchResults([]);
            }}
            className="absolute top-8 right-8 text-white hover:text-white/90 transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2"
            data-testid="search-close-button"
          >
            <X className="h-6 w-6" />
          </button>
          
          {/* Search Content */}
          <div className="w-full max-w-4xl text-center">
            {/* Title */}
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-16 tracking-wide">
              NE ARAMIŞTINIZ?
            </h2>
            
            {/* Search Input */}
            <div className="relative mb-12">
              <div className="flex items-center bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-white/20">
                <Input
                  placeholder="Aranacak kelimeyi yazın..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="flex-1 bg-white border-none text-slate-800 placeholder:text-slate-500 text-xl px-8 py-6 focus-visible:ring-0 focus-visible:ring-offset-0 font-medium"
                  autoFocus
                  data-testid="fullscreen-search-input"
                />
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="text-primary hover:bg-primary/10 px-8 py-6"
                  data-testid="fullscreen-search-submit"
                >
                  <Search className="h-7 w-7" />
                </Button>
              </div>
            </div>
            
            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="max-w-3xl mx-auto space-y-4 max-h-96 overflow-y-auto">
                {searchResults.map((result, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl cursor-pointer transition-all duration-300 text-left border-l-4 border-primary hover:border-l-6"
                    onClick={() => handleSearchResult(result.url)}
                    data-testid={`fullscreen-search-result-${index}`}
                  >
                    <h4 className="font-bold text-slate-800 text-xl mb-3">{result.title}</h4>
                    <p className="text-slate-600 text-lg leading-relaxed">{result.description}</p>
                  </div>
                ))}
              </div>
            )}
            
            {/* No Results */}
            {searchQuery && searchResults.length === 0 && (
              <div className="bg-white rounded-xl shadow-lg p-10 max-w-2xl mx-auto border-l-4 border-primary">
                <p className="text-slate-800 text-xl font-semibold mb-3">
                  Aramanızla eşleşen sonuç bulunamadı.
                </p>
                <p className="text-slate-600 text-lg">
                  Farklı kelimeler deneyebilir veya daha genel terimler kullanabilirsiniz.
                </p>
              </div>
            )}
            
            {/* Search Suggestions when empty */}
            {!searchQuery && (
              <div className="max-w-3xl mx-auto">
                <p className="text-white mb-8 text-xl font-semibold">
                  Popüler Aramalar
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['PDKS', 'Personel Takip', 'Yüz Tanıma', 'Parmak İzi', 'QR Kod', 'RFID Kart', 'WebPDKS', 'Referanslar'].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => handleSearch(suggestion)}
                      className="bg-white text-primary font-semibold rounded-xl px-6 py-4 hover:bg-white/90 hover:shadow-lg transition-all duration-300 hover:scale-105"
                      data-testid={`search-suggestion-${suggestion.toLowerCase()}`}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
