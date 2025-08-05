import { Link } from "wouter";

export default function Products() {
  const productCategories = [
    {
      title: "Çözümler",
      items: [
        { name: "PDKS (Personel Devam Kontrol)", href: "/cozumler/pdks" },
        { name: "Access Geçiş Kontrol Sistemleri", href: "/cozumler/access" },
        { name: "Bekçi Tur Kontrol Sistemi", href: "/cozumler/bekci-tur" },
        { name: "Turnike Sistemleri", href: "/urunler/turnike" },
        { name: "Otel Kapı Kilit Sistemleri", href: "/urunler/otel-kilit" },
        { name: "Anahtar/Dolap Takip Sistemi", href: "/urunler/anahtar" }
      ]
    },
    {
      title: "Donanımlar",
      items: [
        { name: "Biyometrik Yüz Tanıma Sistemi", href: "/urunler/yuz-tanima" },
        { name: "Parmak İzi Okuyucu", href: "/urunler/parmak-izi" },
        { name: "Kartlı Geçiş Sistemi (RFID)", href: "/urunler/rfid" },
        { name: "Şifreli Geçiş/Takip Sistemi", href: "/urunler/sifreli" },
        { name: "Şifreli Passcode Sistemleri", href: "/urunler/passcode" },
        { name: "Bekçi Tur Kontrol Sistemi", href: "/urunler/bekci-tur-kontrol" },
        { name: "Turnike Sistemleri", href: "/urunler/turnike-sistemleri" },
        { name: "Bariyer Sistemleri", href: "/urunler/bariyer" },
        { name: "HiSGate/Kasa Daruma Sistemi", href: "/urunler/hisgate" },
        { name: "X-Ray Cihazları", href: "/urunler/xray" }
      ]
    },
    {
      title: "Yazılımlar",
      items: [
        { name: "Web PDKS", href: "/yazilim/web-pdks" },
        { name: "Access Kontrol Programı", href: "/yazilim/access" },
        { name: "StartUp Puantaj Yazılımı", href: "/yazilim/startup" },
        { name: "Öğretmen Takip Yazılımı", href: "/yazilim/ogretmen" },
        { name: "Yemekhane Takip Sistemi", href: "/yazilim/yemekhane" },
        { name: "Öğrenci Takip Sistemi", href: "/yazilim/ogrenci" },
        { name: "Üye Takip Programı", href: "/yazilim/uye-takip" },
        { name: "Turnike Takip Sistemi", href: "/yazilim/turnike" }
      ]
    },
    {
      title: "Tüm Programlar",
      items: []
    }
  ];

  const heroImages = [
    {
      title: "Satış",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop&crop=center",
      description: "Satış ekibimizle iletişime geçin"
    },
    {
      title: "Satış Sonrası Destek", 
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop&crop=center",
      description: "7/24 teknik destek hizmetimiz"
    }
  ];

  const clientLogos = [
    { name: "TAV", logo: "https://via.placeholder.com/120x60/f8f9fa/666?text=TAV" },
    { name: "Çalık Holding", logo: "https://via.placeholder.com/120x60/f8f9fa/666?text=ÇALIK" },
    { name: "Akfel", logo: "https://via.placeholder.com/120x60/f8f9fa/666?text=AKFEL" },
    { name: "Bantaş", logo: "https://via.placeholder.com/120x60/f8f9fa/666?text=BANTAŞ" },
    { name: "Soyak", logo: "https://via.placeholder.com/120x60/f8f9fa/666?text=SOYAK" },
    { name: "Necmettin Erbakan Üniversitesi", logo: "https://via.placeholder.com/120x60/f8f9fa/666?text=NEÜ" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Images */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {heroImages.map((item, index) => (
              <div key={index} className="relative group">
                <div className="aspect-[2/1] bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white">
              <h2 className="text-lg font-bold text-slate-800 mb-4 p-4 bg-slate-100 border-b">
                {category.title}
              </h2>
              <div className="p-4">
                {category.items.length > 0 ? (
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link 
                          href={item.href}
                          className="text-slate-700 hover:text-primary transition-colors text-sm leading-relaxed block py-1"
                          data-testid={`product-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-500 text-sm italic">Yakında...</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Keywords Section */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
          <p className="text-sm text-slate-600 leading-relaxed">
            Popüler Ürünler: Kartlı Pdks, Personel Takip Programı, Kapı Kilit Sistemleri, Şifreli Kapı Kilit, Bel Tag Turnike, Geçiş Kontrolü Paneli, Büy Turnike, İnci Geçiş Turnike, Makinesi Turnike, Elektronik Kart Makinalrında, pdks programı
          </p>
        </div>

        {/* Client Logos */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-slate-800 mb-8">
            Müşterilerimiz
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
                <img 
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-slate-800 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            İhtiyacınıza Uygun Çözümü Birlikte Bulalım
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            30 yıllık deneyimimiz ve uzman ekibimizle size en uygun ürünü seçmenizde yardımcı oluyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/iletisim"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              data-testid="products-contact-button"
            >
              İletişime Geçin
            </Link>
            <Link 
              href="/iletisim"
              className="inline-flex items-center justify-center border border-white/20 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              data-testid="products-catalog-button"
            >
              Katalog İsteyin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
