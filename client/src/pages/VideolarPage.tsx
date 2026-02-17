import { Play, ArrowRight, Film, Video, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useState, useRef } from "react";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const videos = [
  {
    id: "vardiya-planlama-pdks",
    title: "Vardiya Planlama ve PDKS Sistemi - Mağaza & Hastane",
    description: "Mağaza, hastane ve tüm sektörler için vardiya planlama, shift yönetimi ve PDKS sistemi tanıtımı. Otomatik vardiya oluşturma, personel atama ve mesai hesaplama özellikleri.",
    src: "/vardiya-planlama-pdks.mp4",
    duration: "1:30",
    category: "Demo",
    keywords: "vardiya planlama, shift planlama, PDKS vardiya, mağaza vardiya sistemi, hastane vardiya planlama, personel vardiya yönetimi, shift management, vardiya çizelgesi, mesai planlama, nöbet çizelgesi",
  },
  {
    id: "shift-plan-kart-tanitim",
    title: "Shift Plan Kart Uygulama Tanıtımı",
    description: "Shift Plan kart uygulamasının detaylı tanıtımı. Personel kartı ile giriş-çıkış takibi, vardiya planlama ve PDKS entegrasyonu.",
    src: "/shift-plan-kart-tanitim-2.mp4",
    duration: "2:00",
    category: "Demo",
    keywords: "shift plan kart, personel kartı, kart okuyucu, PDKS kart sistemi, giriş çıkış kartı, vardiya kart takibi",
  },
  {
    id: "shift-plan-satir-kopyalama",
    title: "Shift Plan Kartı Satır Kopyalama",
    description: "Shift Plan uygulamasında vardiya satırlarını hızlıca kopyalama işlemi. Zaman kazandıran pratik kullanım rehberi.",
    src: "/shift-plan-satir-kopyalama.mp4",
    duration: "1:00",
    category: "Demo",
    keywords: "shift plan satır kopyalama, vardiya kopyalama, hızlı vardiya oluşturma, PDKS satır kopyalama",
  },
  {
    id: "vardiya-plani-duzeltme-istegi",
    title: "Vardiya Planı Düzeltme İsteği Eğitimi",
    description: "Vardiya planında düzeltme isteği gönderme ve onaylama süreci. Personel ve yönetici arasında vardiya değişikliği akışı.",
    src: "/vardiya-plani-duzeltme-istegi.mp4",
    duration: "1:30",
    category: "Demo",
    keywords: "vardiya düzeltme isteği, vardiya değişikliği, plan düzeltme, PDKS düzeltme talebi",
  },
  {
    id: "vardiya-plani-satir-temizleme",
    title: "Vardiya Planı Satır Temizleme Eğitimi",
    description: "Vardiya planında satır temizleme işlemi. Hatalı veya gereksiz vardiya girişlerini temizleme rehberi.",
    src: "/vardiya-plani-satir-temizleme.mp4",
    duration: "1:00",
    category: "Demo",
    keywords: "vardiya satır temizleme, plan temizleme, vardiya silme, PDKS veri temizleme",
  },
  {
    id: "vardiya-plani-sablon-egitimi",
    title: "Vardiya Planı Şablon Eğitimi",
    description: "Vardiya planı şablonu oluşturma ve kullanma eğitimi. Tekrarlayan vardiyalar için şablon tanımlama ve uygulama.",
    src: "/vardiya-plani-sablon-egitimi.mp4",
    duration: "2:00",
    category: "Demo",
    keywords: "vardiya şablonu, plan şablonu, şablon oluşturma, PDKS şablon, vardiya template",
  },
  {
    id: "pdks-shift-plan-onay-ret",
    title: "PDKS Shift Plan Onay ve Ret İşlemi",
    description: "Shift Plan üzerinde vardiya onay ve ret işlemlerinin nasıl yapıldığını gösteren eğitim videosu. Yönetici onay süreci detaylı anlatım.",
    src: "/pdks-shift-plan-onay-ret.mp4",
    duration: "2:00",
    category: "Demo",
    keywords: "shift plan onay, vardiya onay ret, PDKS onay süreci, vardiya ret işlemi, plan onaylama",
  },
  {
    id: "personel-isten-cikarma",
    title: "Personel İşten Çıkarma Eğitimi",
    description: "PDKS sisteminde personel işten çıkarma sürecinin adım adım anlatımı. Çıkış işlemleri ve kayıt güncelleme rehberi.",
    src: "/personel-isten-cikarma-egitimi.mp4",
    duration: "1:30",
    category: "Demo",
    keywords: "personel işten çıkarma, PDKS çıkış işlemi, personel kaydı silme, işten ayrılma süreci",
  },
  {
    id: "personel-karti-acma",
    title: "Personel Kartı Açma Eğitimi",
    description: "Yeni personel kartı tanımlama ve açma işlemi. Kart numarası atama, personel bilgileri girişi ve sistem entegrasyonu.",
    src: "/personel-karti-acma-egitimi.mp4",
    duration: "1:30",
    category: "Demo",
    keywords: "personel kartı açma, kart tanımlama, PDKS kart oluşturma, yeni personel ekleme",
  },
  {
    id: "shift-plan-onay-kilitleme",
    title: "Shift Plan Onay - Plan Kilitleme Dersi",
    description: "Shift Plan'da onaylanan vardiya planlarının kilitlenmesi işlemi. Onay sonrası plan güvenliği ve değişiklik kontrolü.",
    src: "/shift-plan-onay-kilitleme.mp4",
    duration: "2:00",
    category: "Demo",
    keywords: "plan kilitleme, shift plan kilit, vardiya plan güvenliği, onay kilitleme, PDKS plan koruma",
  },
  {
    id: "shift-plan-onay-dersi-bolum3",
    title: "Shift Plan Onay Dersi - Bölüm 3",
    description: "Shift Plan onay sürecinin üçüncü bölümü. İleri seviye onay ayarları ve çoklu onay akışları.",
    src: "/shift-plan-onay-dersi-bolum3.mp4",
    duration: "2:00",
    category: "Demo",
    keywords: "shift plan onay bölüm 3, çoklu onay, ileri seviye vardiya onay, PDKS onay akışı",
  },
  {
    id: "shift-plan-onay-egitimi-ders3",
    title: "Shift Plan Onay Eğitimi - Ders 3",
    description: "Shift Plan onay eğitiminin üçüncü dersi. Onay raporları, geçmiş onay kayıtları ve denetim izleri.",
    src: "/shift-plan-onay-egitimi-ders3.mp4",
    duration: "2:00",
    category: "Demo",
    keywords: "shift plan onay eğitimi ders 3, onay raporları, vardiya denetim, PDKS onay geçmişi",
  },
  {
    id: "shift-plan-onayi-egitimi",
    title: "Shift Plan Onayı Eğitimi",
    description: "Shift Plan onay sürecinin genel eğitimi. Vardiya planı oluşturma, onaya gönderme ve onaylama adımları.",
    src: "/shift-plan-onayi-egitimi.mp4",
    duration: "2:00",
    category: "Demo",
    keywords: "shift plan onayı, vardiya onay eğitimi, plan onaylama süreci, PDKS onay rehberi",
  },
  {
    id: "turnike-montaj",
    title: "Turnike Sistemi Montaj Rehberi",
    description: "Tripod turnike sisteminin profesyonel montaj sürecini adım adım izleyin. Kablolama, sabitleme ve yazılım kurulumu dahil.",
    src: "/turnike-montaj.mp4",
    duration: "2:45",
    category: "Montaj",
    keywords: "turnike montajı, tripod turnike kurulumu, geçiş kontrol sistemi montajı",
  },
  {
    id: "yuz-tanima-montaj",
    title: "Yüz Tanıma Sistemi Kurulumu",
    description: "Yüz tanıma cihazının duvar montajı, ağ bağlantısı ve PDKS yazılımı ile entegrasyonu.",
    src: "/yuz-tanima-montaj.mp4",
    duration: "3:10",
    category: "Montaj",
    keywords: "yüz tanıma sistemi kurulumu, biyometrik cihaz montajı, PDKS entegrasyonu",
  },
  {
    id: "bariyer-montaj",
    title: "Bariyer Sistemi Montaj Rehberi",
    description: "Otopark ve site girişleri için bariyer sistemi montajı. Temel hazırlığı, elektrik bağlantısı ve kumanda ayarları.",
    src: "/bariyer-montaj.mp4",
    duration: "4:20",
    category: "Montaj",
    keywords: "bariyer montajı, otopark bariyeri kurulumu, araç bariyer sistemi",
  },
  {
    id: "bariyer-sistemleri",
    title: "Bariyer Sistemleri Tanıtım",
    description: "Mika Teknoloji bariyer ürün ailesi tanıtımı. PT Plus, PT Genius ve PT Guard modelleri.",
    src: "/bariyer-sistemleri.mp4",
    duration: "3:30",
    category: "Tanıtım",
    keywords: "bariyer sistemleri, araç bariyeri, otopark güvenlik sistemi",
  },
  {
    id: "gecis-kontrol",
    title: "Geçiş Kontrol Sistemi Tanıtım",
    description: "Kartlı, parmak izli ve yüz tanımalı geçiş kontrol çözümlerimizin tanıtım videosu.",
    src: "/access-control-video.mp4",
    duration: "2:55",
    category: "Tanıtım",
    keywords: "geçiş kontrol sistemi, kartlı geçiş, parmak izi geçiş, erişim kontrol",
  },
  {
    id: "magaza-personel-takip",
    title: "Mağaza Personel Takip Programı Demo",
    description: "Perakende sektörü için geliştirilen personel takip programının canlı demo videosu. Vardiya planlama ve mesai hesaplama.",
    src: "/magaza-video.mp4",
    duration: "2:06",
    category: "Demo",
    keywords: "mağaza personel takip, vardiya planlama, perakende PDKS, mesai hesaplama",
  },
];

const categories = ["Tümü", "Montaj", "Tanıtım", "Demo"];

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function VideoCard({ video }: { video: typeof videos[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <motion.div variants={fadeInUp}>
      <Card className="h-full overflow-hidden border-2 border-slate-200 hover:border-pink-500 transition-all duration-300 group bg-white rounded-xl shadow-sm hover:shadow-lg">
        <CardContent className="p-0">
          <div className="relative bg-black overflow-hidden rounded-t-xl" style={{ aspectRatio: '16/9' }}>
            <div className="w-full h-full" onClick={!isPlaying ? handlePlay : undefined}>
              <video
                ref={videoRef}
                className="w-full h-full object-contain"
                preload="metadata"
                playsInline
                controls
                controlsList="nodownload"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src={video.src} type="video/mp4" />
              </video>
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300 pointer-events-none">
                  <div className="w-20 h-20 rounded-full bg-pink-600/90 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-10 w-10 text-white ml-1" fill="white" />
                  </div>
                </div>
              )}
            </div>
            <div className="absolute top-3 left-3 bg-pink-600 text-white text-xs px-3 py-1 rounded-full font-medium pointer-events-none z-10">
              {video.category}
            </div>
            <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm pointer-events-none z-10">
              {video.duration}
            </div>
          </div>
          <div className="p-5">
            <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-pink-600 transition-colors">
              {video.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              {video.description}
            </p>
            <a
              href={video.src}
              download
              className="inline-flex items-center gap-2 text-sm text-pink-600 hover:text-pink-700 font-medium transition-colors"
            >
              <Download className="h-4 w-4" />
              Videoyu İndir
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function VideolarPage() {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filteredVideos = activeCategory === "Tümü"
    ? videos
    : videos.filter(v => v.category === activeCategory);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Video Rehber - Mika Teknoloji",
    "description": "PDKS, turnike, bariyer ve geçiş kontrol sistemleri kurulum ve tanıtım videoları",
    "url": "https://mikateknoloji.com/videolar",
    "publisher": {
      "@type": "Organization",
      "name": "Mika Teknoloji Kontrol Sistemleri",
      "url": "https://mikateknoloji.com"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": videos.map((video, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "VideoObject",
          "name": video.title,
          "description": video.description,
          "contentUrl": `https://mikateknoloji.com${video.src}`,
          "thumbnailUrl": `https://mikateknoloji.com/images/logos/mika-logo.jpg`,
          "uploadDate": "2025-01-01",
          "publisher": {
            "@type": "Organization",
            "name": "Mika Teknoloji"
          }
        }
      }))
    }
  };

  return (
    <>
      <Helmet>
        <title>Video Rehber | Kurulum ve Tanıtım Videoları | Mika Teknoloji</title>
        <meta name="description" content="PDKS, turnike, bariyer ve geçiş kontrol sistemleri kurulum rehberi ve tanıtım videoları. Adım adım montaj videoları ile profesyonel kurulum." />
        <meta name="keywords" content="PDKS kurulum videosu, turnike montaj rehberi, bariyer kurulum, geçiş kontrol sistemi video, yüz tanıma kurulum, personel takip demo" />
        <meta name="robots" content="index,follow,max-video-preview:-1" />
        <link rel="canonical" href="https://mikateknoloji.com/videolar" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Video Rehber | Mika Teknoloji" />
        <meta property="og:description" content="PDKS, turnike, bariyer sistemleri kurulum ve tanıtım videoları" />
        <meta property="og:url" content="https://mikateknoloji.com/videolar" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="py-16 bg-gradient-to-br from-primary/5 to-pink-50 relative">
          <div className="absolute top-4 right-4 text-slate-400 text-sm font-medium">S1</div>
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center mb-6"
            >
              <div className="w-16 h-16 rounded-full bg-pink-600 flex items-center justify-center">
                <Film className="h-8 w-8 text-white" />
              </div>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-slate-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Video Rehber
            </motion.h1>
            <motion.p
              className="text-xl text-slate-600 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ürünlerimizin kurulum rehberleri, tanıtım videoları ve canlı demo kayıtları
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  onClick={() => setActiveCategory(cat)}
                  className={activeCategory === cat
                    ? "bg-pink-600 hover:bg-pink-700 text-white"
                    : "border-pink-300 text-pink-600 hover:bg-pink-50"
                  }
                >
                  {cat}
                </Button>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 relative">
          <div className="absolute top-4 right-4 text-slate-400 text-sm font-medium">S2</div>
          <div className="container mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {filteredVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </motion.div>

            {filteredVideos.length === 0 && (
              <div className="text-center py-16 text-slate-500">
                <Video className="h-16 w-16 mx-auto mb-4 opacity-30" />
                <p className="text-lg">Bu kategoride henüz video bulunmuyor.</p>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-pink-600 to-pink-700 relative">
          <div className="absolute top-4 right-4 text-white/40 text-sm font-medium">S3</div>
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Kurulum Desteği mi Gerekiyor?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Profesyonel ekibimiz tüm ürünlerimizin kurulumunu ücretsiz olarak gerçekleştirmektedir
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-pink-600 hover:bg-white/90 font-semibold"
                >
                  <a href="https://wa.me/905467122296" target="_blank" rel="noopener noreferrer">
                    WhatsApp ile İletişim
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-semibold"
                >
                  <Link href="/iletisim">
                    İletişim Formu <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <WhatsAppWidget />
    </>
  );
}