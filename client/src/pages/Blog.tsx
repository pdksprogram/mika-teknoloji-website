import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

export default function Blog() {
  // Professional SEO-optimized blog posts based on Meyer and Perkotek research
  const blogPosts = [
    {
      id: 1,
      title: "PDKS Sistemleri Nedir? 2025 Rehberi - Personel Devam Kontrol",
      excerpt: "Personel Devam Kontrol Sistemi (PDKS) ile çalışan takibinde devrim yaratın. 50.000+ kurumun tercih ettiği modern PDKS çözümlerinin tüm detayları, fiyatları ve kurulum rehberi.",
      date: "15 Ocak 2025",
      author: "PDKS Uzmanı - Mika Teknoloji",
      category: "PDKS",
      readTime: "8 dk okuma",
      slug: "pdks-sistemleri-nedir-2025-rehberi",
      image: "/attached_assets/image_1758019216490.png",
      keywords: "PDKS sistemleri, personel devam kontrol sistemi, PDKS nedir, personel takip sistemi"
    },
    {
      id: 2,
      title: "Bel Tipi Turnike Sistemleri: Tripod Turnike Özellikleri ve Fiyatları",
      excerpt: "Bel tipi turnike sistemleri ile güvenli geçiş kontrolü sağlayın. Paslanmaz çelik tripod turnike modelleri, teknik özellikler, kurulum detayları ve 2025 fiyat listesi.",
      date: "12 Ocak 2025",
      author: "Turnike Uzmanı",
      category: "Turnike Sistemleri",
      readTime: "6 dk okuma",
      slug: "bel-tipi-turnike-sistemleri-ozellikleri-fiyatlari",
      image: "/attached_assets/image_1758019726366.png",
      keywords: "bel tipi turnike, tripod turnike, turnike sistemleri, paslanmaz çelik turnike"
    },
    {
      id: 3,
      title: "Boy Tipi Turnike Sistemleri: Full Height Güvenlik Çözümleri",
      excerpt: "Maksimum güvenlik için boy tipi turnike sistemleri. Stadium, ceza evi ve yüksek güvenlik alanları için tam boy turnike modelleri, özellikleri ve uygulama alanları.",
      date: "10 Ocak 2025",
      author: "Güvenlik Sistemleri Uzmanı",
      category: "Güvenlik",
      readTime: "7 dk okuma",
      slug: "boy-tipi-turnike-sistemleri-full-height-guvenlik",
      image: "/attached_assets/image_1758020107295.png",
      keywords: "boy tipi turnike, full height turnike, güvenlik turnike, stadium turnike"
    },
    {
      id: 4,
      title: "Parmak İzi Okuyucu PDKS: Biyometrik Personel Takip Sistemi 2025",
      excerpt: "Parmak izi okuyucu ile güvenli PDKS sistemi kurun. Biyometrik teknoloji ile %100 güvenilir personel devam kontrolü, entegrasyon seçenekleri ve performans analizi.",
      date: "8 Ocak 2025",
      author: "Biyometri Uzmanı",
      category: "Biyometri",
      readTime: "9 dk okuma",
      slug: "parmak-izi-okuyucu-pdks-biyometrik-personel-takip",
      image: "/attached_assets/image_1758019135962.png",
      keywords: "parmak izi okuyucu, biyometrik PDKS, personel takip sistemi, parmak izi PDKS"
    },
    {
      id: 5,
      title: "Yüz Tanıma Sistemleri: 3D Teknoloji ile Temassız PDKS Çözümleri",
      excerpt: "Yüz tanıma teknolojisi ile modern personel takibi. COVID-19 sonrası temassız çözümler, 3D canlılık tespiti, profil manipülasyon koruması ve entegrasyon rehberi.",
      date: "5 Ocak 2025",
      author: "AI Teknoloji Uzmanı",
      category: "Yapay Zeka",
      readTime: "10 dk okuma",
      slug: "yuz-tanima-sistemleri-3d-teknoloji-temassiz-pdks",
      image: "/attached_assets/image_1758022229658.png",
      keywords: "yüz tanıma sistemi, temassız PDKS, 3D yüz tanıma, facial recognition"
    },
    {
      id: 6,
      title: "Turnike Sistemleri Fiyatları 2025: Maliyet Analizi ve ROI Hesaplama",
      excerpt: "Turnike sistemleri yatırım maliyeti ve geri dönüş hesabı. Bel tipi, boy tipi, hızlı geçiş turnike fiyatları, kurulum maliyetleri ve 5 yıllık ROI analizi.",
      date: "3 Ocak 2025",
      author: "Proje Yöneticisi",
      category: "Maliyet",
      readTime: "12 dk okuma",
      slug: "turnike-sistemleri-fiyatlari-2025-maliyet-analizi",
      image: "/attached_assets/image_1758020186900.png",
      keywords: "turnike fiyatları, turnike maliyeti, turnike yatırım geri dönüşü, ROI"
    },
    {
      id: 7,
      title: "WebPDKS Cloud Sistemi: Her Yerden Erişilebilir Personel Yönetimi",
      excerpt: "Web tabanlı PDKS sistemi ile bulut teknolojisinin avantajları. Mobil uyumlu dashboard, 7/24 erişim, otomatik yedekleme ve hibrit çalışma modeli entegrasyonu.",
      date: "1 Ocak 2025",
      author: "Cloud Uzmanı",
      category: "WebPDKS",
      readTime: "6 dk okuma",
      slug: "webpdks-cloud-sistemi-bulut-tabanli-personel-yonetimi",
      image: "/attached_assets/image_1758022307099.png",
      keywords: "WebPDKS, cloud PDKS, web tabanlı personel takip, bulut PDKS"
    },
    {
      id: 8,
      title: "Kartlı Geçiş Sistemleri: RFID ve Proximity Kart Teknolojileri",
      excerpt: "RFID kartlı geçiş sistemleri ile pratik erişim kontrolü. Proximity kart teknolojisi, TCP/IP bağlantı, personel kartı özellikleri ve güvenlik avantajları.",
      date: "28 Aralık 2024",
      author: "RFID Teknoloji Uzmanı",
      category: "RFID",
      readTime: "5 dk okuma",
      slug: "kartli-gecis-sistemleri-rfid-proximity-teknoloji",
      image: "/attached_assets/image_1758022450183.png",
      keywords: "kartlı geçiş sistemi, RFID kart, proximity kart, personel kartı"
    }
  ];

  const categories = ["Tümü", "PDKS", "Turnike Sistemleri", "Biyometri", "Güvenlik", "WebPDKS", "RFID", "Yapay Zeka", "Maliyet"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16"
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold mb-4"
            >
              Mika Teknoloji Blog
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Teknoloji haberleri, ürün güncellemeleri ve sektör içgörüleri. PDKS, güvenlik sistemleri ve dijital dönüşüm hakkında uzman görüşleri.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Tümü" ? "default" : "outline"}
              className="rounded-full px-6 py-2 hover:bg-primary hover:text-white transition-colors"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold">MT</div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    ÖNE ÇIKAN
                  </Badge>
                  <Badge variant="outline">{blogPosts[0].category}</Badge>
                </div>
                <Link href="/blog/pdks-sistemleri-nedir-2025-rehberi">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-primary transition-colors cursor-pointer">
                    {blogPosts[0].title}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {blogPosts[0].author}
                    </div>
                  </div>
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link href="/blog/pdks-sistemleri-nedir-2025-rehberi">
                      Devamını Oku
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + (index * 0.1) }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="p-0">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center rounded-t-lg">
                    <div className="text-primary text-4xl font-bold opacity-60">
                      {post.category.charAt(0)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      <Tag className="h-3 w-3 mr-1" />
                      {post.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <CardTitle className="text-lg mb-3 group-hover:text-primary transition-colors cursor-pointer line-clamp-2">
                    {post.title}
                  </CardTitle>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-4 w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors"
                  >
                    Okumaya Devam Et
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="px-8 py-3 bg-primary hover:bg-primary/90">
            Daha Fazla Makale Yükle
          </Button>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mt-16 bg-gradient-to-r from-primary to-pink-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Blog Güncellemelerini Kaçırmayın!</h3>
          <p className="text-lg mb-6 opacity-90">
            Yeni makaleler ve teknoloji haberleri doğrudan e-postanızda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresinizi girin"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold">
              Abone Ol
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}