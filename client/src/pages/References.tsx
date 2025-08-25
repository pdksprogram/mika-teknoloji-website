import React from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Award, CheckCircle, Star } from 'lucide-react';

const customers = [
  {
    id: 1,
    name: "Lufian",
    logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&q=80",
    employees: 400,
    locations: 80,
    sector: "Tekstil & Moda",
    testimonial: "Mika Teknoloji'nin PDKS sistemi sayesinde vardiya yönetimimiz tamamen dijitalleşti. Süreç çok pratik: Mağaza müdürümüz shift planını yapıyor, bölge müdürümüz onaylıyor ve personelimiz kendi vardiyasını cep telefonu üzerinden anında görebiliyor. Bildirim sistemi ile herkes zamanında haberdar oluyor. 80 lokasyonumuzda bu mobil çözüm sayesinde iş gücü yönetimimiz hem hızlandı hem de hatasız hale geldi.",
    person: "Ahmet Kaya",
    position: "İnsan Kaynakları Müdürü",
    solutions: ["WebPDKS", "QR Personel Takip", "Vardiya Yönetimi"]
  },
  {
    id: 2,
    name: "Adore Mobilya",
    logo: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&q=80",
    employees: 1200,
    locations: 65,
    sector: "Mobilya & Dekorasyon",
    testimonial: "Mobilya sektöründe üretim ve satış ekiplerinin koordinasyonu kritik önemde. Mika Teknoloji'nin mobil PDKS sistemi sayesinde fabrika ve mağaza shift planlarımızı kolayca yönetiyoruz. Vardiya amiri planlamayı yapıyor, bölge müdürü onaylıyor ve 1200 çalışanımız mobil uygulama üzerinden kendi vardiyalarını görüp bildirim alıyor. 65 lokasyonumuzda bu dijital çözüm ile iş gücü verimliliğimiz %20 arttı.",
    person: "Selma Özkan",
    position: "Operasyon Müdürü",
    solutions: ["Mobil PDKS", "Shift Yönetimi", "Vardiya Planlama"]
  },
  {
    id: 3,
    name: "Koluman Mercedes",
    logo: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=400&h=300&fit=crop",
    employees: 2500,
    locations: 28,
    sector: "Otomotiv",
    testimonial: "Otomotiv sektöründe güvenlik kritik öneme sahip. Mika Teknoloji'nin turnike sistemleri ve güvenlik kontrolü çözümleri ile fabrikalarımızın güvenliğini en üst düzeyde tutuyoruz. Çalışan takip sistemi sayesinde üretim verimliliğimiz %15 arttı.",
    person: "Mehmet Demir",
    position: "Güvenlik ve İK Direktörü",
    solutions: ["Turnike Sistemleri", "Güvenlik Guard Kontrol", "PDKS"]
  },
  {
    id: 4,
    name: "Antalya Devlet Hastanesi",
    logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
    employees: 3200,
    locations: 12,
    sector: "Sağlık",
    testimonial: "Hastane güvenliği için en gelişmiş teknolojileri kullanıyoruz. Mika Teknoloji'nin X-Ray güvenlik sistemleri ve personel takip çözümleri ile hasta ve personel güvenliğini maksimum seviyede tutuyoruz. 3200 çalışanımızın tüm giriş-çıkış işlemlerini sorunsuz yönetiyoruz.",
    person: "Dr. Fatma Yılmaz",
    position: "Başhekim Yardımcısı",
    solutions: ["X-Ray Güvenlik", "PDKS", "Güvenlik Kontrol"]
  },
  {
    id: 5,
    name: "Çilek Mobilya",
    logo: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
    employees: 950,
    locations: 78,
    sector: "Mobilya & Tasarım",
    testimonial: "Mağaza zincirimizde personel takibini kolaylaştıran QR kod sistemini kullanıyoruz. Çalışanlarımız sadece QR kodlarını okutarak giriş-çıkış yapabiliyor. Bu sayede yönetim süreçlerimiz hızlandı ve hata oranımız minimize oldu.",
    person: "Serkan Ateş",
    position: "Operasyon Koordinatörü",
    solutions: ["QR Personel Takip", "WebPDKS", "Mağaza Yönetimi"]
  },
  {
    id: 6,
    name: "Teknosa",
    logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    employees: 1800,
    locations: 95,
    sector: "Teknoloji Perakende",
    testimonial: "Elektronik mağaza zinciri olarak güvenlik önlemlerimiz çok önemli. Mika Teknoloji'nin turnike sistemleri ve güvenlik kontrol çözümleri ile mağazalarımızın güvenliğini sağlıyoruz. Personel takip sistemi de çok kullanışlı.",
    person: "Deniz Kurtul",
    position: "Güvenlik Müdürü",
    solutions: ["Turnike Sistemleri", "Güvenlik Kontrol", "PDKS"]
  },
  {
    id: 7,
    name: "Koton",
    logo: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=300&fit=crop",
    employees: 2200,
    locations: 120,
    sector: "Tekstil & Moda",
    testimonial: "Koton olarak tüm mağazalarımızda standardizasyonu sağlamak için Mika Teknoloji'nin PDKS çözümlerini kullanıyoruz. Web tabanlı sistem sayesinde merkezi yönetim çok kolay. Çalışan memnuniyeti de arttı.",
    person: "Ayşe Terzi",
    position: "İK Grup Müdürü",
    solutions: ["WebPDKS", "Merkezi Yönetim", "Raporlama"]
  },
  {
    id: 8,
    name: "Bim Market",
    logo: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=400&h=300&fit=crop",
    employees: 4500,
    locations: 180,
    sector: "Perakende",
    testimonial: "Binlerce çalışanımızın takibini yapmak için Mika Teknoloji'nin gelişmiş PDKS sistemini tercih ettik. RFID teknolojisi ile hızlı ve güvenli giriş-çıkış sağlıyoruz. Sistem performansı mükemmel.",
    person: "Okan Başar",
    position: "Operasyon Direktörü",
    solutions: ["RFID Sistem", "PDKS", "Çoklu Lokasyon"]
  },
  {
    id: 9,
    name: "Akbank",
    logo: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=400&h=300&fit=crop",
    employees: 3800,
    locations: 85,
    sector: "Bankacılık",
    testimonial: "Bankacılık sektöründe güvenlik kritik öneme sahip. Mika Teknoloji'nin X-Ray güvenlik sistemleri ve güvenlik personeli kontrol çözümleri ile şubelerimizin güvenliğini en üst seviyede tutuyoruz.",
    person: "Murat Özdemir",
    position: "Güvenlik Direktörü",
    solutions: ["X-Ray Güvenlik", "Guard Kontrol", "Güvenlik Yönetimi"]
  },
  {
    id: 10,
    name: "Turkcell",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    employees: 5200,
    locations: 110,
    sector: "Telekomünikasyon",
    testimonial: "Teknoloji şirketi olarak en güncel çözümleri tercih ediyoruz. Mika Teknoloji'nin QR kod tabanlı personel takip sistemi ile çalışanlarımız kolayca giriş-çıkış yapabiliyor. Mobil uyumlu yapısı çok başarılı.",
    person: "Elif Koç",
    position: "İnsan Kaynakları Genel Müdür Yardımcısı",
    solutions: ["QR Personel Takip", "Mobil PDKS", "Dijital Çözümler"]
  }
];

const References: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary via-primary/95 to-purple-600 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-300/20 rounded-full blur-lg animate-bounce delay-300"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-indigo-300/15 rounded-full blur-2xl animate-pulse delay-700"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-pink-300/20 rounded-full blur-xl animate-bounce delay-1000"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center text-white max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Premium Badge */}
            <motion.div 
              className="inline-flex items-center bg-white/15 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Award className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="text-sm font-semibold tracking-wider uppercase">Güvenilir Teknoloji Ortağı</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent leading-tight">
              Müşteri Başarı
              <br />
              <span className="text-yellow-300">Hikayeleri</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              Bizimle çalışmayı seven, beraber büyüdüğümüz işletmelerin{" "}
              <span className="font-bold text-yellow-300">başarı hikâyelerini</span> sizlerle paylaşıyoruz.
            </p>
            
            {/* Premium Stats */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Users, label: "Çalışan", value: "25,000+", color: "text-blue-300" },
                { icon: MapPin, label: "Lokasyon", value: "800+", color: "text-green-300" },
                { icon: Award, label: "Sektör", value: "10", color: "text-yellow-300" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customer Stories */}
      <section className="py-24 relative">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
              <CheckCircle className="w-5 h-5 text-primary mr-2" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Başarı Hikayeleri</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Güvenilen <span className="text-primary">Teknoloji Ortağı</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sektör lideri firmalar neden Mika Teknoloji'yi tercih ediyor?
            </p>
          </motion.div>

          <div className="space-y-32">
            {customers.map((customer, index) => (
              <motion.div
                key={customer.id}
                className="relative"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Image */}
                  <motion.div 
                    className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="relative group">
                      {/* Main Image */}
                      <div className="aspect-[5/4] rounded-3xl overflow-hidden shadow-2xl">
                        <img 
                          src={customer.logo} 
                          alt={customer.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      </div>
                      
                      {/* Floating Company Badge */}
                      <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{customer.name}</h3>
                        <p className="text-primary font-semibold">{customer.sector}</p>
                        <div className="flex items-center mt-3 space-x-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500 font-medium">5.0 Memnuniyet</span>
                        </div>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-2xl"></div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="space-y-8">
                      {/* Premium Stats */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-primary/10 to-blue-50 rounded-2xl p-6 border border-primary/20">
                          <div className="flex items-center justify-between mb-2">
                            <Users className="w-6 h-6 text-primary" />
                            <div className="text-right">
                              <div className="text-2xl font-bold text-primary">{customer.employees.toLocaleString()}</div>
                              <div className="text-sm text-gray-600 font-medium">Çalışan</div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                          <div className="flex items-center justify-between mb-2">
                            <MapPin className="w-6 h-6 text-blue-600" />
                            <div className="text-right">
                              <div className="text-2xl font-bold text-blue-600">{customer.locations}</div>
                              <div className="text-sm text-gray-600 font-medium">Lokasyon</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Premium Solutions */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Kullanılan Çözümler</h4>
                        <div className="flex flex-wrap gap-3">
                          {customer.solutions.map((solution, idx) => (
                            <span 
                              key={idx}
                              className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-xl text-sm font-semibold border border-green-200 shadow-sm"
                            >
                              {solution}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Premium Testimonial */}
                      <div className="relative bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 rounded-3xl p-8 border border-gray-200/50 shadow-xl">
                        {/* Quote Icon */}
                        <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <span className="text-white text-2xl font-bold">"</span>
                        </div>
                        
                        <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 font-medium pl-6">
                          {customer.testimonial}
                        </blockquote>
                        
                        <div className="flex items-center space-x-4 pl-6">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg">{customer.person.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">{customer.person}</p>
                            <p className="text-gray-600">{customer.position}</p>
                            <p className="text-primary font-semibold text-sm">{customer.name}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-primary to-purple-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-300"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {/* Premium Badge */}
            <motion.div 
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Star className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="text-white font-semibold text-sm uppercase tracking-wider">Başarınızı Garanti Ediyoruz</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-yellow-200 bg-clip-text text-transparent leading-tight">
              Siz de Başarı Hikayenizi 
              <br />
              <span className="text-yellow-300">Yazmaya Hazır mısınız?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Mika Teknoloji çözümleri ile işletmenizi bir sonraki seviyeye taşıyın.
              <br />
              <span className="text-yellow-300 font-semibold">Ücretsiz demo ile farkı hemen keşfedin!</span>
            </p>
            
            {/* Premium Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.button
                className="group bg-gradient-to-r from-white to-gray-100 text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border border-white/20 min-w-[250px]"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center">
                  <span>ÜCRETSİZ DEMO TALEBİ</span>
                  <motion.div
                    className="ml-3"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    →
                  </motion.div>
                </div>
              </motion.button>
              
              <motion.button
                className="group bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 min-w-[250px]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                TEKNİK DETAYLAR
              </motion.button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[
                { icon: "✓", text: "7/24 Teknik Destek", color: "text-green-300" },
                { icon: "✓", text: "Ücretsiz Kurulum", color: "text-blue-300" },
                { icon: "✓", text: "Garanti & Bakım", color: "text-yellow-300" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center justify-center space-x-3 text-white/90"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className={`text-2xl ${item.color}`}>{item.icon}</span>
                  <span className="font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default References;