import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { useIsMobile } from "@/hooks/use-mobile"; // Not used currently
import { useLanguage } from "@/hooks/useLanguage";
const mikaLogo = "/mika-logo.jpg"; // Real Mika logo

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [location] = useLocation();
  // const isMobile = useIsMobile(); // Not used currently
  const { selectedLanguage, setSelectedLanguage, t } = useLanguage();

  const languages = [
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
    { code: "en", name: "English", flag: "🇺🇸" }
  ];

  // Site içi arama verileri
  const searchableContent = [
    { title: "PDKS Sistemleri", url: "/cozumler/pdks", description: "Personel devam kontrol sistemleri, yüz tanıma, parmak izi" },
    { title: "Yüz Tanıma PDKS", url: "/cozumler/pdks#facial", description: "Temassız yüz tanıma teknolojisi ile personel takibi" },
    { title: "Parmak İzi PDKS", url: "/cozumler/pdks#fingerprint", description: "Biyometrik parmak izi ile güvenli personel kontrolü" },
    { title: "QR Tabanlı PDKS", url: "/cozumler/pdks#qr", description: "Mobil uygulama destekli QR kod sistemi" },
    { title: "RFID Kartlı PDKS", url: "/cozumler/pdks#rfid", description: "Temassız kart teknolojisi ile personel takibi" },
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
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle language change
  const handleLanguageChange = (langCode: string) => {
    setSelectedLanguage(langCode as 'tr' | 'en');
    console.log("Language changed to:", langCode);
  };

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
    { href: "/", label: t.nav.products },
    { href: "/hakkimizda", label: t.nav.about },
    { href: "/cozumler", label: t.nav.solutions, hasDropdown: true },
    { href: "/referanslar", label: t.nav.references },
    { href: "/iletisim", label: t.nav.contact }
  ];

  const megaMenuData = {
    "Çözümler": [
      { name: "PDKS (Personel Devam Kontrol)", href: "/cozumler/pdks" },
      { name: "Access Geçiş Kontrol Sistemleri", href: "/access-control" },
      { name: "Bekçi Tur Kontrol Sistemi", href: "/bekci-tur" },
      { name: "QR Bekçi Sistemi", href: "/qr-bekci" },
      { name: "Turnike Sistemleri", href: "/turnike" },
      { name: "Otel Kapı Kilit Sistemleri", href: "/otel-kilit" },
      { name: "Anahtar/Dolap Takip Sistemi", href: "/anahtar-takip" }
    ],
    "Donanımlar": [
      { name: "Biyometrik Yüz Tanıma Sistemi", href: "/yuz-tanima" },
      { name: "Parmak İzi Okuyucu", href: "/parmak-izi" },
      { name: "Kartlı Geçiş Sistemi (RFID)", href: "/rfid" },
      { name: "Şifreli Passcode Sistemleri", href: "/passcode" },
      { name: "Bekçi Tur Kontrol Sistemi", href: "/bekci-kontrol" },
      { name: "Turnike Sistemleri", href: "/turnike-donanim" },
      { name: "Bariyer Sistemleri", href: "/bariyer" }
    ],
    "Yazılımlar": [
      { name: "Web PDKS", href: "https://pdkspersoneltakip.com/" },
      { name: "Access Kontrol Programı", href: "/access-program" },
      { name: "Startıp Puanlama Yazılımı", href: "/startup-puanlama" },
      { name: "Ogar Puanlama Yazılımı", href: "/ogar-puanlama" },
      { name: "Yemekahane Takip Sistemi", href: "/yemekhane" },
      { name: "Turnike Takip Programı", href: "/turnike-program" },
      { name: "Üye Takip Programı", href: "/uye-takip" }
    ],
    "Tüm Programlar": [
      { name: "HRCapakus Tanıma Sistemi", href: "/hrcapakus" },
      { name: "X-Ray Cihazları", href: "/xray" },
      { name: "Öğretmen Takip Sistemi", href: "/ogretmen-takip" },
      { name: "Turnike Takip Sistemi", href: "/turnike-takip" }
    ]
  };

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return location === "/";
    }
    return location.startsWith(href);
  };

  return (
    <>
      {/* Promotional Banner */}
      <div className="bg-primary text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center relative">
            <div className="flex-1 flex justify-center">
              <a 
                href="https://wa.link/vblc5g" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold hover:text-white/90 transition-colors"
                data-testid="promo-banner"
              >
                {t.promo}
              </a>
            </div>
            <div className="absolute right-0 flex items-center space-x-2">
              <Button 
                asChild 
                size="sm"
                variant="ghost"
                className="text-white hover:text-white/90 hover:bg-white/10 px-3 py-1 h-auto text-xs"
                data-testid="top-privacy-button"
              >
                <Link href="/mobil-gizlilik-sozlesmesi">
                  {t.privacy}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3" data-testid="logo-link">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <img src={mikaLogo} alt="Mika Teknoloji Logo" className="w-full h-full object-contain" />
                </div>
                <div className="ml-3">
                  <div className="font-bold text-xl text-slate-800">{t.companyName}</div>
                  <div className="text-xs text-slate-500 hidden sm:block">{t.companySubtitle}</div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setIsProductsMenuOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setIsProductsMenuOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`relative font-medium transition-colors duration-200 hover:text-primary group ${
                      isActiveLink(item.href) ? "text-primary" : "text-slate-700"
                    }`}
                    data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                    <span 
                      className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
                        isActiveLink(item.href) ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                  
                  {/* Mega Menu Dropdown */}
                  {item.hasDropdown && isProductsMenuOpen && (
                    <div className="absolute top-full left-0 w-screen max-w-5xl bg-white shadow-2xl border-t-4 border-primary z-50 transform -translate-x-1/4">
                      <div className="grid grid-cols-4 gap-6 p-8">
                        {Object.entries(megaMenuData).map(([category, items]) => (
                          <div key={category} className="space-y-4">
                            <h3 className="font-bold text-gray-900 text-lg border-b-2 border-primary pb-2">
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
                      <div className="bg-gray-50 px-8 py-4 border-t">
                        <p className="text-sm text-gray-600">
                          Popüler Ürünler: Kartlı Kapı PDKS, Personel Puanlama Programı, Kapı Kilit Sistemleri, Şifreli Kapı Kilidi, Bell Tipi Turnike, Geçiş Kontrol Paneli, Big Turnike, İnce Geçiş Turnike, Mobımre Turnike, Elektronik Kilit Muhsasırılık, polis programı
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {/* Language & Search Section - İLETİŞİM | EN | Search */}
              <div className="flex items-center space-x-1 text-sm font-medium">
                <span className="text-slate-400">|</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-slate-700 hover:text-primary px-2 py-1 h-auto text-sm font-medium"
                      data-testid="main-language-selector"
                    >
                      {selectedLanguage.toUpperCase()}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="min-w-32">
                    {languages.map((language) => (
                      <DropdownMenuItem
                        key={language.code}
                        onClick={() => handleLanguageChange(language.code)}
                        className="flex items-center space-x-2 cursor-pointer text-sm"
                        data-testid={`main-lang-option-${language.code}`}
                      >
                        <span>{language.flag}</span>
                        <span>{language.name}</span>
                        {selectedLanguage === language.code && (
                          <span className="ml-auto text-primary">✓</span>
                        )}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <span className="text-slate-400">|</span>
                
                {/* Site İçi Arama */}
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-white px-2 py-1 h-auto"
                  onClick={() => setIsSearchOpen(true)}
                  data-testid="search-button"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </nav>

            {/* Special Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button 
                asChild 
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4"
                data-testid="webpdks-button"
              >
                <a href="https://pdkspersoneltakip.com/" target="_blank" rel="noopener noreferrer">WebPDKS</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-slate-100 transition-colors"
              data-testid="mobile-menu-toggle"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-slate-700" />
              ) : (
                <Menu className="h-6 w-6 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block py-2 font-medium transition-colors duration-200 ${
                      isActiveLink(item.href) 
                        ? "text-primary border-l-4 border-primary pl-4" 
                        : "text-slate-700 hover:text-primary pl-4"
                    }`}
                    data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t space-y-3">
                  <Button 
                    asChild 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    data-testid="mobile-webpdks-button"
                  >
                    <a href="https://pdkspersoneltakip.com/" target="_blank" rel="noopener noreferrer">WebPDKS</a>
                  </Button>
                  
                  {/* Mobile Language Selector */}
                  <div className="pt-2">
                    <div className="text-sm font-medium text-slate-600 mb-2">Dil / Language</div>
                    <div className="flex space-x-2">
                      {languages.map((language) => (
                        <Button
                          key={language.code}
                          variant={selectedLanguage === language.code ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleLanguageChange(language.code)}
                          className="flex-1 flex items-center justify-center space-x-2"
                          data-testid={`mobile-lang-${language.code}`}
                        >
                          <span>{language.flag}</span>
                          <span>{language.name}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
      
      {/* Fullscreen Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-primary via-primary to-pink-600 flex items-center justify-center p-4">
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
              <div className="bg-white rounded-xl shadow-lg p-10 max-w-2xl mx-auto border-l-4 border-orange-400">
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
