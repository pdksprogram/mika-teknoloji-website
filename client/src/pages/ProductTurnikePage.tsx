import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Filter, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

export default function ProductTurnikePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const turnstileProducts = [
    {
      id: 1,
      name: "Bel Tipi Turnikeler",
      category: "security",
      image: "/attached_assets/image_1758019726366.png",
      description: "Üç kollu güvenlik turnikeleri, yoğun geçiş alanları için ideal",
      features: ["3 Kollu Tasarım", "Paslanmaz Çelik", "Kartlı Giriş", "Manuel Override"],
      price: "Fiyat İçin İletişime Geçin",
      href: "/urunler/bel-tipi-turnike"
    },
    {
      id: 2,
      name: "Boy Tipi Turnikeler",
      category: "security",
      image: "/attached_assets/image_1758020107295.png",
      description: "Yüksek güvenlik için boy tipi tam geçiş kontrol sistemleri",
      features: ["Tam Boy Güvenlik", "Biyometrik Entegrasyon", "Anti-Tailgating", "Acil Durum Açılımı"],
      price: "Fiyat İçin İletişime Geçin",
      href: "/urunler/boy-tipi-turnike"
    },
    {
      id: 3,
      name: "Engelli Turnikeleri",
      category: "accessibility",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop",
      description: "Engelli erişimi için geniş geçişli özel turnike sistemleri",
      features: ["Geniş Geçiş", "Tekerlekli Sandalye Uyumlu", "Düşük Profil", "Sesli Uyarı"],
      price: "Fiyat İçin İletişime Geçin",
      href: "/urunler/engelli-turnike"
    },
    {
      id: 4,
      name: "Hızlı Geçiş Turnikeleri",
      category: "speed",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      description: "Yoğun trafik için hızlı ve akıcı geçiş sağlayan turnike sistemleri",
      features: ["Hızlı Geçiş", "RFID/NFC", "Sensör Teknolojisi", "Yüksek Kapasite"],
      price: "Fiyat İçin İletişime Geçin",
      href: "/urunler/hizli-gecis-turnike"
    },
    {
      id: 5,
      name: "Hijyen Turnikeleri",
      category: "hygiene",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
      description: "Dezenfektan dispenseri entegreli hijyen odaklı turnike sistemleri",
      features: ["Otomatik Dezenfektan", "Temassız Geçiş", "Ateş Ölçer Entegrasyonu", "UV Sterilizasyon"],
      price: "Fiyat İçin İletişime Geçin",
      href: "/urunler/hijyen-turnike"
    },
    {
      id: 6,
      name: "Jetonlu Turnikeler",
      category: "payment",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop",
      description: "Ödeme sistemli jeton/kart okuyuculu turnike çözümleri",
      features: ["Jeton/Kart Okuyucu", "Ödeme Entegrasyonu", "Para Üstü Sistemi", "Geri Sayım Display"],
      price: "Fiyat İçin İletişime Geçin",
      href: "/urunler/jetonlu-turnike"
    }
  ];

  const categories = [
    { value: "all", label: "Tüm Kategoriler" },
    { value: "security", label: "Güvenlik" },
    { value: "accessibility", label: "Erişilebilirlik" },
    { value: "speed", label: "Hız" },
    { value: "hygiene", label: "Hijyen" },
    { value: "payment", label: "Ödeme Sistemli" }
  ];

  const filteredProducts = turnstileProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12"
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold mb-4"
            >
              Turnike Sistemleri
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Güvenli geçiş kontrol çözümleri ile alanınızı koruyun. Her ihtiyaca uygun turnike sistemlerimizi keşfedin.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/urunler" className="hover:text-blue-600">Ürünler</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">Turnike Sistemleri</span>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Turnike sistemlerinde ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                  data-testid="search-input"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Filter className="w-4 h-4 text-gray-500" />
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                data-testid="category-filter"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90">
                      {categories.find(cat => cat.value === product.category)?.label}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </CardTitle>
                  <p className="text-gray-600 text-sm">
                    {product.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-gray-900">Özellikler:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-blue-600 font-semibold">
                      {product.price}
                    </div>
                    <Button 
                      asChild
                      size="sm"
                      className="group-hover:bg-blue-700 transition-colors"
                      data-testid={`product-detail-${product.id}`}
                    >
                      <Link href={product.href}>
                        Detayları Gör
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">
              Aradığınız kriterlere uygun turnike sistemi bulunamadı.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
            >
              Filtreleri Temizle
            </Button>
          </motion.div>
        )}
      </div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-blue-600 text-white py-12"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Size Uygun Turnike Sistemini Bulalım
          </h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Uzman ekibimiz size en uygun turnike çözümünü bulmak için hazır. 
            Ücretsiz keşif ve teknik destek için bizimle iletişime geçin.
          </p>
          <Button 
            asChild
            size="lg"
            variant="secondary"
            className="text-blue-600 hover:text-blue-700"
            data-testid="contact-cta"
          >
            <Link href="/iletisim">
              Uzmanlarımızla İletişime Geçin
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}