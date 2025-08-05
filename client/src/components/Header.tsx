import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const isMobile = useIsMobile();

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

  const navigationItems = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/cozumler", label: "Çözümler" },
    { href: "/urunler", label: "Ürünler" },
    { href: "/iletisim", label: "İletişim" }
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return location === "/";
    }
    return location.startsWith(href);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <span className="hidden sm:block">1993'den beri güvenilir PDKS çözümleri</span>
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+902122219476" 
                className="flex items-center space-x-1 hover:text-primary transition-colors"
                data-testid="phone-link"
              >
                <Phone className="h-3 w-3" />
                <span>+90 212 221 94 76</span>
              </a>
              <a 
                href="mailto:info@ozgurzaman.com" 
                className="flex items-center space-x-1 hover:text-primary transition-colors"
                data-testid="email-link"
              >
                <Mail className="h-3 w-3" />
                <span className="hidden sm:inline">info@ozgurzaman.com</span>
              </a>
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
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">ÖZ</span>
                </div>
                <div className="ml-3">
                  <div className="font-bold text-xl text-slate-800">Özgür Zaman</div>
                  <div className="text-xs text-slate-500 hidden sm:block">Kontrol Sistemleri</div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
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
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button 
                asChild 
                className="bg-primary hover:bg-primary/90 text-white px-6"
                data-testid="cta-button"
              >
                <Link href="/iletisim">Teklif İste</Link>
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
                <div className="pt-4 border-t">
                  <Button 
                    asChild 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    data-testid="mobile-cta-button"
                  >
                    <Link href="/iletisim">Teklif İste</Link>
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
