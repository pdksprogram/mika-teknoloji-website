import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import mikaLogo from "@assets/mika_1756450206871.jpg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("tr");
  const [location] = useLocation();
  const isMobile = useIsMobile();

  const languages = [
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
    { code: "en", name: "English", flag: "🇺🇸" }
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
    setSelectedLanguage(langCode);
    // Here you can add logic to change the actual website language
    console.log("Language changed to:", langCode);
  };

  const navigationItems = [
    { href: "/", label: "Ürünler", hasDropdown: true },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/cozumler", label: "Çözümler" },
    { href: "/referanslar", label: "Referanslar" },
    { href: "/iletisim", label: "İletişim" }
  ];

  const megaMenuData = {
    "Çözümler": [
      { name: "PDKS (Personel Devam Kontrol)", href: "/pdks" },
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
                Mika Teknoloji ile işletmenizi dijitalleştirin!
              </a>
            </div>
            <div className="absolute right-0">
              <Button 
                asChild 
                size="sm"
                variant="ghost"
                className="text-white hover:text-white/90 hover:bg-white/10 px-3 py-1 h-auto text-xs"
                data-testid="top-privacy-button"
              >
                <Link href="/mobil-gizlilik-sozlesmesi">Gizlilik</Link>
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
                  <div className="font-bold text-xl text-slate-800">Mika Teknoloji</div>
                  <div className="text-xs text-slate-500 hidden sm:block">Kontrol Sistemleri</div>
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
            </nav>

            {/* Special Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center space-x-2 px-3"
                    data-testid="language-selector"
                  >
                    <Globe className="h-4 w-4" />
                    <span>{languages.find(lang => lang.code === selectedLanguage)?.flag}</span>
                    <span className="hidden sm:inline">{languages.find(lang => lang.code === selectedLanguage)?.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {languages.map((language) => (
                    <DropdownMenuItem
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className="flex items-center space-x-2 cursor-pointer"
                      data-testid={`lang-option-${language.code}`}
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

              <Button 
                asChild 
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4"
                data-testid="webpdks-button"
              >
                <a href="https://pdkspersoneltakip.com/" target="_blank" rel="noopener noreferrer">WebPDKS</a>
              </Button>
              <Button 
                asChild 
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white px-4"
                data-testid="qr-patrol-button"
              >
                <Link href="/qr-patrol">QR-Patrol</Link>
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
                  {/* Mobile Language Selector */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-600">Dil Seçimi</p>
                    <div className="grid grid-cols-2 gap-2">
                      {languages.map((language) => (
                        <Button
                          key={language.code}
                          variant={selectedLanguage === language.code ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleLanguageChange(language.code)}
                          className="flex items-center space-x-2 justify-center"
                          data-testid={`mobile-lang-${language.code}`}
                        >
                          <span>{language.flag}</span>
                          <span>{language.name}</span>
                          {selectedLanguage === language.code && (
                            <span className="text-xs">✓</span>
                          )}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    asChild 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    data-testid="mobile-webpdks-button"
                  >
                    <a href="https://pdkspersoneltakip.com/" target="_blank" rel="noopener noreferrer">WebPDKS</a>
                  </Button>
                  <Button 
                    asChild 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    data-testid="mobile-qr-patrol-button"
                  >
                    <Link href="/qr-patrol">QR-Patrol</Link>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
