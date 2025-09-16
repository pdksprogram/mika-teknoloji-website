import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Blog() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "PDKS Sistemlerinin İşletmelerdeki Önemi",
      excerpt: "Modern işletmeler için personel devam kontrol sistemlerinin faydaları ve uygulanması hakkında detaylı bilgiler.",
      date: "15 Aralık 2024",
      author: "Mika Teknoloji",
      category: "PDKS",
      readTime: "5 dk okuma",
      image: "/api/placeholder/600/300"
    },
    {
      id: 2,
      title: "Yüz Tanıma Teknolojisinin Geleceği",
      excerpt: "Biyometrik teknolojiler nasıl gelişiyor ve işletmeler için ne anlama geliyor? Yüz tanıma sistemlerinin avantajları.",
      date: "10 Aralık 2024",
      author: "Teknoloji Uzmanı",
      category: "Biyometri",
      readTime: "7 dk okuma",
      image: "/api/placeholder/600/300"
    },
    {
      id: 3,
      title: "Turnike Sistemleri: Güvenlik ve Verimlilik",
      excerpt: "Farklı turnike türleri, kullanım alanları ve işletmeniz için doğru turnike seçimi nasıl yapılır?",
      date: "5 Aralık 2024",
      author: "Güvenlik Uzmanı",
      category: "Güvenlik",
      readTime: "6 dk okuma",
      image: "/api/placeholder/600/300"
    },
    {
      id: 4,
      title: "WebPDKS ile Uzaktan Personel Yönetimi",
      excerpt: "Web tabanlı PDKS sistemlerinin avantajları ve hibrit çalışma modellerine uyumu.",
      date: "1 Aralık 2024",
      author: "İK Uzmanı",
      category: "WebPDKS",
      readTime: "4 dk okuma",
      image: "/api/placeholder/600/300"
    },
    {
      id: 5,
      title: "QR Kod Teknolojisi ile Modernleşme",
      excerpt: "QR kod tabanlı kontrol sistemlerinin işletmelere sağladığı fırsatlar ve uygulamalar.",
      date: "28 Kasım 2024",
      author: "Dijital Dönüşüm Uzmanı",
      category: "Dijital",
      readTime: "5 dk okuma",
      image: "/api/placeholder/600/300"
    },
    {
      id: 6,
      title: "Akıllı Bina Teknolojileri ve Access Kontrol",
      excerpt: "Akıllı binalar için entegre erişim kontrol çözümleri ve gelecek teknolojiler.",
      date: "25 Kasım 2024",
      author: "Otomasyon Uzmanı",
      category: "Access Control",
      readTime: "8 dk okuma",
      image: "/api/placeholder/600/300"
    }
  ];

  const categories = ["Tümü", "PDKS", "Biyometri", "Güvenlik", "WebPDKS", "Dijital", "Access Control"];

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
                <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-primary transition-colors cursor-pointer">
                  {blogPosts[0].title}
                </h2>
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
                  <Button className="bg-primary hover:bg-primary/90">
                    Devamını Oku
                    <ArrowRight className="ml-2 h-4 w-4" />
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