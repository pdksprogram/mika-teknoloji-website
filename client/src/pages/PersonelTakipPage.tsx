import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { trackEvent } from "@/lib/analytics";
import { 
  CheckCircle, 
  ArrowRight, 
  QrCode, 
  Shield, 
  Cloud, 
  Globe, 
  HeadphonesIcon,
  Zap,
  Lock,
  MapPin,
  Settings,
  FileText,
  Calendar,
  DollarSign,
  UserCheck,
  MessageSquare,
  Phone,
  BookOpen,
  Video,
  MessageCircle,
  HelpCircle
} from "lucide-react";
import { Link } from "wouter";
import videoDemo from "@assets/personel-takip-demo.mp4";
import mobilAppImage from "@assets/mobile-app-interface.png";
import mobileAdminImage from "@assets/mobile-admin-interface.png";
import vardiyaYonetimiImage from "@assets/vardiya-yonetimi-interface.png";
import maasHesaplamaImage from "@assets/maas-hesaplama-interface.png";
import personelBilgileriImage from "@assets/personel-bilgileri-interface.png";

export default function PersonelTakipPage() {
  const handleDemoRequest = () => {
    trackEvent('Demo Request', 'personel_takip_demo', 'Personel Takip Page - Demo Button');
  };

  const handleContactRequest = () => {
    trackEvent('Contact Request', 'personel_takip_contact', 'Personel Takip Page - Contact Button');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Personel Takip Sistemi | Mika Teknoloji - Bulut Tabanlı PDKS</title>
        <meta 
          name="description" 
          content="Bulut tabanlı personel takip ve insan kaynakları yönetimi. QR kod, kart okuyucu, mobil uygulama. 7/24 destek, yasal uyum garantili." 
        />
        <meta name="keywords" content="personel takip sistemi, bulut tabanlı pdks, insan kaynakları yönetimi, qr kod takip, mobil personel takip, vardiya yönetimi" />
        <meta property="og:title" content="Personel Takip Sistemi | Mika Teknoloji - Bulut Tabanlı PDKS" />
        <meta property="og:description" content="Bulut tabanlı personel takip ve insan kaynakları yönetimi. QR kod, kart okuyucu, mobil uygulama. 7/24 destek, yasal uyum garantili." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mikateknoloji.com/urunler/personel-takip" />
      </Helmet>
      {/* Hero Section */}
      <section data-testid="P1" className="relative py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Segment Code */}
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">P1</div>
        <div className="container mx-auto text-center">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center bg-primary/10 px-6 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-3 h-3 bg-primary rounded-full mr-3 animate-pulse"></div>
              <span className="text-primary font-medium text-sm tracking-wider uppercase">
                Bulut Tabanlı Teknoloji
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Bulut Tabanlı Personel Takip ve İnsan Kaynakları Yönetimi
            </h1>
            
            <h2 className="text-xl md:text-2xl text-slate-600 font-light mb-8">
              Personel ve İş Süreçleri Yönetimi, İnsan Kaynakları Çözümleri, Giriş - Çıkış Takibi ve çok daha fazlası...
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={handleDemoRequest}
              >
                <Link href="/iletisim">
                  <span>Ücretsiz Demo Talep Et</span>
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-xl font-semibold text-lg"
                onClick={handleContactRequest}
              >
                <Link href="/iletisim">
                  <span>Online Sunum Talep Et</span>
                </Link>
              </Button>
            </div>

            {/* Hero Video */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-2 max-w-4xl mx-auto">
              <video 
                className="w-full aspect-video rounded-xl object-cover"
                controls
                autoPlay
                loop
                preload="auto"
                poster=""
              >
                <source src={videoDemo} type="video/mp4" />
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Video className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-600 font-medium">Tarayıcınız video oynatmayı desteklemiyor</p>
                  </div>
                </div>
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section data-testid="P2" className="relative py-16 bg-white">
        {/* Segment Code */}
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">P2</div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            {...fadeInUp}
          >
            <p className="text-slate-500 font-medium mb-8">500+ başarılı referansımızdan bazıları</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="w-24 h-12 bg-slate-200 rounded flex items-center justify-center">
                  <span className="text-slate-400 text-xs">LOGO {i}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Geçiş Çözümleri */}
      <section data-testid="P3" className="relative py-20 bg-slate-50">
        {/* Segment Code */}
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">P3</div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Güvenli ve Modern Geçiş Çözümleri
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              İşletmenizin personel giriş ve çıkışlarını güvenilir ve hassas bir şekilde takip etmek mi istiyorsunuz? 
              Kart okuyucu, QR kod okutma ve sanal cihaz çözümlerimizle tanışın!
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {/* QR Kod Okutma */}
            <motion.div variants={staggerItem}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <img 
                      src="/qr-hand-mockup.png" 
                      alt="QR kod mobil okutma sistemi" 
                      className="w-32 h-32 mx-auto object-contain rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">QR KOD OKUTMA</h3>
                  <p className="text-primary font-semibold mb-4">Modern ve Hızlı Giriş-Çıkış Takibi</p>
                  <p className="text-slate-600 mb-6">
                    QR kod okutma çözümlerimiz, personel devam takibinde modern ve pratik bir yol sunar. 
                    Mobil cihazlar üzerinden çalışanların giriş ve çıkışlarını hızlıca kaydedebilirsiniz. 
                    Özellikle büyük ve hareketli işyerleri için idealdir.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/urunler/qr-patrol">Detayları İncele</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Kart Okuyucu */}
            <motion.div variants={staggerItem}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <img 
                      src="/access-control-professional.png" 
                      alt="Profesyonel access control kart okuyucu sistemi" 
                      className="w-32 h-32 mx-auto object-contain rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">KART OKUYUCU</h3>
                  <p className="text-primary font-semibold mb-4">Güvenilir Giriş ve Çıkış Kontrolü</p>
                  <p className="text-slate-600 mb-6">
                    Kart okuyucularımız, personel giriş ve çıkışlarının hassas bir şekilde takip edilmesini sağlar. 
                    Çalışanlarınızın kartlarını kolayca okutarak, çalışma saatlerini doğru bir şekilde kaydedebilir 
                    ve analiz edebilirsiniz.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/access-control">Detayları İncele</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Parmak İzi */}
            <motion.div variants={staggerItem}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <img 
                      src="/fingerprint-device.png" 
                      alt="Parmak izi okuyucu biyometrik sistemi" 
                      className="w-32 h-32 mx-auto object-contain rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">PARMAK İZİ</h3>
                  <p className="text-primary font-semibold mb-4">Biyometrik Güvenli Tanımlama</p>
                  <p className="text-slate-600 mb-6">
                    Parmak izi okuyucu sistemlerimiz, en yüksek güvenlik seviyesinde personel tanımlaması yapar. 
                    Biyometrik teknoloji ile kartlı sistemlere göre çok daha güvenli ve pratik bir 
                    giriş-çıkış kontrolü sağlar. Sahtecilik imkansızdır.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/cozumler/parmak-izi">Detayları İncele</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Avantajlar */}
      <section data-testid="P4" className="relative py-20 bg-white">
        {/* Segment Code */}
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">P4</div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Kesintisiz ve Güvenilir Hizmet!
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Yüksek performans, kesintisiz hizmet ve kullanıcı odaklı iyileştirme ile işletmenizi bir adım öteye taşıyoruz!
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 lg:grid-cols-6 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {[
              { icon: Cloud, title: "Bulut Tabanlı Altyapı", desc: "Esneklik ve ölçeklenebilirlik sunan güvenilir bulut tabanlı altyapı ile işletmenizi büyütün." },
              { icon: HeadphonesIcon, title: "Destek Hizmetleri", desc: "Çok kanallı müşteri desteği ile her an yanınızdayız. Sorunlarınıza hızlı çözümler sunuyoruz." },
              { icon: Globe, title: "Web ve Mobil Erişim", desc: "Duyarlı tasarım ve optimize edilmiş mobil uygulama ile her yerden kolayca erişim sağlayın." },
              { icon: Shield, title: "Performans ve Güvenilirlik", desc: "Yüksek performans ve sürekli izleme ile kesintisiz hizmet sunarak verimliliğinizi artırıyoruz." },
              { icon: Zap, title: "Sürekli İyileştirme", desc: "Geri bildirim toplama ve sürekli iyileştirme ile kullanıcı odaklı gelişim sağlıyoruz." },
              { icon: QrCode, title: "Cihazlı veya Cihazsız", desc: "Çoklu cihaz desteği ve QR kod okutma ile esnek kullanım seçenekleri sunuyoruz." }
            ].map((item, index) => (
              <motion.div key={index} variants={staggerItem} className="lg:col-span-2">
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                      <item.icon className="h-10 w-10 text-primary drop-shadow-sm" />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-3">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mobil Uygulama */}
      <section data-testid="P5" className="relative py-20 bg-slate-50">
        {/* Segment Code */}
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">P5</div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Mika Teknoloji Mobil Uygulaması
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Mika Teknoloji mobil uygulamamız, iş yeri yönetimini ve çalışan deneyimini yeni bir seviyeye taşıyor.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mobil Uygulama Özellikleri */}
            <motion.div {...fadeInUp}>
              <h3 className="text-2xl font-bold text-slate-800 mb-8">Mobil Uygulama Özellikleri</h3>
              <div className="space-y-4">
                {[
                  { emoji: "✏️", title: "Düzeltme Giriş Çıkışlar", desc: "Personelin giriş/çıkış saatlerinde hata veya eksik olduğunda düzeltme yapılır. Örneğin kart basmayı unutan çalışan için manuel giriş ekleme." },
                  { emoji: "🕒", title: "Shift Plan Kart", desc: "Personelin vardiya/çalışma kartlarını gösterir. Hangi tarihte hangi vardiyada olduklarını görürler." },
                  { emoji: "✅", title: "Shift Plan Onay", desc: "Hazırlanan vardiya planlarının yöneticiler tarafından onaylandığı ekran. Onaylanmadan vardiya planı kesinleşmez." },
                  { emoji: "💸", title: "Avans", desc: "Personelin maaş avans taleplerini oluşturduğu ve takip ettiği bölüm. Yöneticiler de buradan onay/ret verebilir." },
                  { emoji: "🧳", title: "İzin", desc: "Günlük ya da belirli tarihler için izin talep etme alanı. İzinler yönetici onayına düşer." },
                  { emoji: "📅", title: "Vardiya", desc: "Detaylı vardiya planlaması ve çalışanların vardiyalarını listeleme alanı. Özellikle üretim veya vardiyalı sistemlerde yoğun kullanılır." },
                  { emoji: "🌴", title: "Yıllık İzin", desc: "Yıllık ücretli izinlerin takibi ve talep süreci. Kalan izin günleri, kullanılan izinler burada görünür." },
                  { emoji: "📝", title: "Şikayet ve Öneri", desc: "Personelin kuruma yönelik öneri ve şikayetlerini ilettiği bölüm. Yöneticiler geri bildirimleri buradan takip eder." },
                  { emoji: "📋", title: "Anket Portal", desc: "Kurum içi memnuniyet veya değerlendirme anketlerinin yayınlandığı alan. Çalışanlar anketleri doldurur, sonuçlar yönetime raporlanır." },
                  { emoji: "📑", title: "Bordro Portal", desc: "Çalışanların maaş bordrolarını görüntüleyebildiği bölüm. Genellikle PDF olarak indirilebilen bordrolar bulunur." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-xl flex-shrink-0 mt-1">{item.emoji}</div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mobil App Mockup */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Gradient Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 rounded-[4rem] blur-3xl transform rotate-6 scale-110 -z-10"></div>
              
              {/* Shadow Effect */}
              <div className="relative transform hover:scale-105 transition-all duration-500 hover:rotate-1">
                <div className="max-w-sm mx-auto">
                  {/* Phone Frame */}
                  <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] p-3 shadow-2xl border-2 border-slate-700/50">
                    {/* Phone Notch */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20"></div>
                    
                    {/* Screen Container */}
                    <div className="relative bg-black rounded-[2.5rem] p-1 overflow-hidden">
                      {/* Screen Content */}
                      <div className="relative rounded-[2rem] overflow-hidden">
                        <img 
                          src={mobilAppImage} 
                          alt="Mika Teknoloji PDKS mobil uygulama ekranı - iPhone Mockup"
                          className="w-full h-auto object-cover rounded-[2rem]"
                        />
                        
                        {/* Screen Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 rounded-[2rem]"></div>
                      </div>
                    </div>
                    
                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500/20 rounded-full blur-md animate-bounce" style={{animationDelay: '1s'}}></div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
            {/* Yönetici Mobil Mockup */}
            <motion.div 
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Gradient Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-l from-blue-500/20 via-cyan-500/20 to-teal-500/20 rounded-[4rem] blur-3xl transform -rotate-6 scale-110 -z-10"></div>
              
              {/* Shadow Effect */}
              <div className="relative transform hover:scale-105 transition-all duration-500 hover:-rotate-1">
                <div className="max-w-sm mx-auto">
                  {/* Phone Frame */}
                  <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] p-3 shadow-2xl border-2 border-slate-700/50">
                    {/* Phone Notch */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20"></div>
                    
                    {/* Screen Container */}
                    <div className="relative bg-black rounded-[2.5rem] p-1 overflow-hidden">
                      {/* Screen Content */}
                      <div className="relative rounded-[2rem] overflow-hidden">
                        <img 
                          src={mobileAdminImage} 
                          alt="Mika Teknoloji PDKS yönetici mobil uygulama ekranı - Admin Panel"
                          className="w-full h-auto object-cover rounded-[2rem]"
                        />
                        
                        {/* Screen Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 rounded-[2rem]"></div>
                      </div>
                    </div>
                    
                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-6 h-6 bg-blue-500/30 rounded-full blur-sm animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-teal-500/20 rounded-full blur-md animate-bounce" style={{animationDelay: '1.5s'}}></div>
            </motion.div>

            {/* Yönetici Özellikleri */}
            <motion.div className="order-1 lg:order-2" {...fadeInUp}>
              <h3 className="text-2xl font-bold text-slate-800 mb-8">Yönetici Panel Özellikleri</h3>
              <div className="space-y-4">
                {[
                  { emoji: "📅", title: "Tarih Seçim Alanı", desc: "Başlangıç Tarihi / Bitiş Tarihi: Raporların hangi tarih aralığında gösterileceğini seçersin. Örn. 01.09.2025 – 30.09.2025 arası tüm giriş-çıkış, izin, devamsızlık verileri gelir." },
                  { emoji: "👥", title: "Personel Bilgileri Kartı", desc: "Aktif Çalışan: O an sisteme göre iş başında olan çalışan sayısı. İzinli / Raporlu: O gün izinli ya da raporlu görünen çalışan sayısı. Devamsız: O gün işe gelmeyen çalışan sayısı. Toplam: Sisteme kayıtlı toplam çalışan sayısı." },
                  { emoji: "⏳", title: "Bekleyen İşlemler", desc: "Bekleyen İzin: Onay bekleyen izin talepleri. Bekleyen Saatlik İzin: Saatlik (kısa süreli) izinler için onay bekleyen talepler. Bekleyen Avans: Çalışanların talep ettiği ve onay sürecinde olan maaş avansları." },
                  { emoji: "📊", title: "Personel Durum Bilgileri", desc: "Geç Gelen: O gün belirlenen mesai saatinden sonra giriş yapan çalışan sayısı. Erken Çıkan: Çalışma saatinden önce çıkış yapan çalışan sayısı. İçerdekiler: O anda işyerinde, sistemde içeride görünüp aktif çalışan kişi sayısı. Dışardakiler: O anda işyeri dışında olan, çıkış yapmış veya hiç giriş yapmamış kişi sayısı." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-xl flex-shrink-0 mt-1">{item.emoji}</div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PDKS Teknolojileri */}
      <section data-testid="P6" className="relative py-20 bg-white">
        {/* Segment Code */}
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">P6</div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              PDKS Teknolojisini Keşfedin!
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Çalışma gücünüzün tüm yönlerini yönetin. Operasyonları basitleştirin ve verimliliği artırın!
            </p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {[
              {
                icon: Calendar,
                title: "Vardiya Yönetimi",
                subtitle: "Vardiya yönetimini kolay, eksiksiz ve profesyonelce yapın!",
                desc: "Vardiya yönetimini kolay, eksiksiz ve profesyonelce yapın, karışıklığa izin vermeyin!",
                image: vardiyaYonetimiImage,
                features: [
                  "Toplu Personel Vardiya Planlama",
                  "Akıllı Vardiya Planı",
                  "Personel Vardiya Yönetimi",
                  "Vardiya Çakışma Yönetimi",
                  "Geçerli Vardiya Görüntüleme",
                  "Vardiya Listesi Yönetimi",
                  "Vardiya Arası ve Mola Süreleri",
                  "Raporlama",
                  "Toplu Hafta Tatili Yönetimi"
                ]
              },
              {
                icon: DollarSign,
                title: "Maaş Hesaplama",
                subtitle: "Maaş hesaplamalarının zahmetinden kurtulun!",
                desc: "Maaş hesaplamalarının zahmetinden ve karışıklığından kurtulun.",
                image: maasHesaplamaImage,
                features: [
                  "Özelleştirebilir Parametreler",
                  "Otomatik Maaş Hesaplama",
                  "Hesap Detaylarını Görüntüleme"
                ]
              },
              {
                icon: UserCheck,
                title: "Personel Bilgileri Yönetimi",
                subtitle: "Personel bilgilerini tek bir ekranda toplayın!",
                desc: "Personel bilgilerini tek bir ekranda toplayın, tüm detaylara kolayca erişin.",
                image: personelBilgileriImage,
                features: [
                  "Personel Listeleme",
                  "Ekleme - Düzenleme - Silme",
                  "İzin Yönetimi",
                  "Avans Yönetimi",
                  "Vardiya Yönetimi",
                  "Ücret Yönetimi",
                  "Saatlik İzin Yönetimi",
                  "Giriş-Çıkış Yönetimi"
                ]
              },
              {
                icon: MessageSquare,
                title: "Personel Talepleri Yönetimi",
                subtitle: "Personel taleplerini kolayca yönetin!",
                desc: "Personel taleplerini kolayca yönetin, izinler ve avansları kontrol altına alın.",
                features: [
                  "Saatlik İzin Talepleri",
                  "Genel İzin Talepleri",
                  "Avans Talepleri",
                  "Personel Mobil İşlemleri",
                  "Yetkili Mobil İşlemleri"
                ]
              }
            ].map((item, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="h-full p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                      <h4 className="text-lg font-semibold text-primary mb-3">{item.subtitle}</h4>
                      <p className="text-slate-600 mb-4">{item.desc}</p>
                    </div>
                  </div>
                  
                  {/* Image for Vardiya Yönetimi */}
                  {item.image && (
                    <div className="mb-6">
                      <img 
                        src={item.image} 
                        alt={`${item.title} - PDKS sistem ekranı`}
                        className="w-full h-auto rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                      />
                    </div>
                  )}
                  
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Güvenlik ve Esneklik */}
      <section data-testid="P7" className="relative py-20 bg-slate-50">
        {/* Segment Code */}
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">P7</div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Her Ayrıntıyı Düşündük!
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              İşletmenizin güvenliğini en üst düzeyde tutmak ve verimliliğinizi artırmak için tasarlanmış 
              uygulamamız, size ihtiyacınız olan tüm güvenlik ve esneklik özelliklerini sunuyoruz.
            </p>
          </motion.div>

          <div className="text-center mb-12">
            <div className="text-6xl font-bold text-primary mb-2">100%</div>
            <h3 className="text-2xl font-bold text-slate-800">Güvenilir ve Esnek</h3>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {[
              {
                icon: MapPin,
                title: "Kesin Konum Doğrulama",
                desc: "Sahte konum bildirimleri, konum dışı işlemler ve şüpheli işlemler tespit edilir."
              },
              {
                icon: Settings,
                title: "Tolerans Parametreleri",
                desc: "Vardiya başlangıç ve bitiş saatleri, erken ve geç giriş-çıkış, puantaj toleransları ile esneklik sağlayın."
              },
              {
                icon: FileText,
                title: "Detaylı Kayıt Tutma",
                desc: "Sistem tarafından yapılan tüm giriş-çıkış ve mesai hareketleri detaylı bir şekilde notlandırılır."
              },
              {
                icon: Lock,
                title: "Yasal Düzenlemelere Uyum",
                desc: "SGK, K.V.K.K., T.C. çalışma kanunları ve diğer yasal düzenlemelere tam uyum sağlanır."
              }
            ].map((item, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="text-center p-6 h-full hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Yasal Logolar */}
          <motion.div 
            className="flex justify-center items-center gap-8 mt-12 opacity-60"
            {...fadeInUp}
          >
            <div className="flex items-center space-x-2">
              <span className="font-bold text-red-600">T.C.</span>
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">TR</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-blue-600">SGK</span>
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-green-600">K.V.K.K.</span>
              <div className="w-8 h-8 bg-green-600 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-testid="P8" className="relative py-20 bg-gradient-to-br from-primary to-pink-600 text-white">
        {/* Segment Code */}
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">P8</div>
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            className="max-w-4xl mx-auto"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Şimdi sıra sizde!
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Mika Teknoloji PDKS'nin gücünü bizzat deneyimleyin. Size özel hazırlanmış bir demo ile 
              sistemimizin nasıl çalıştığını görün ve işletmenize nasıl değer katabileceğinizi keşfedin.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={handleDemoRequest}
              >
                <Link href="/iletisim">
                  <span>Ücretsiz Demo</span>
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm"
                onClick={handleContactRequest}
              >
                <Link href="/iletisim">
                  <span>Sizi Arayalım</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Destek Bölümü */}
      <section data-testid="P9" className="relative py-20 bg-white">
        {/* Segment Code */}
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">P9</div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Her zaman yanınızdayız!
            </h2>
            <p className="text-lg text-slate-600">
              Sınırsız destek ve bilgi için her zaman yanınızdayız!
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {[
              { icon: BookOpen, title: "Dokümantasyon", desc: "Kapsamlı kılavuzlarımız ve teknik belgelerimizle, ürünlerimizi en iyi şekilde kullanmanıza yardımcı oluyoruz.", link: "/blog" },
              { icon: Video, title: "Eğitim Videoları", desc: "Görsel öğrenmeyi tercih edenler için adım adım eğitim videoları sunuyoruz. Karmaşık konuları basitleştiriyoruz.", link: "/blog" },
              { icon: FileText, title: "Blog", desc: "Güncel trendler, ipuçları ve sektör haberleri için blogumuzu takip edin. Bilginizi sürekli güncel tutun.", link: "/blog" },
              { icon: HelpCircle, title: "S.S.S.", desc: "En sık sorulan sorulara hızlı ve net cevaplar. Zamandan tasarruf edin, çözümlere anında ulaşın.", link: "/blog" },
              { icon: MessageCircle, title: "WhatsApp", desc: "Anlık destek için WhatsApp hattımız hizmetinizde. Sorularınızı hızlıca yanıtlıyoruz.", link: "/iletisim" },
              { icon: Phone, title: "İletişim", desc: "Size bir tık uzaktayız. E-posta, telefon veya sosyal medya aracılığıyla bize ulaşın.", link: "/iletisim" }
            ].map((item, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="h-full p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <Link href={item.link}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}