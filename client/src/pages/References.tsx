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
  const [currentSlide, setCurrentSlide] = React.useState(0);

  // Auto-slide effect
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % customers.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      {/* Premium Customer Carousel */}
      <section className="relative h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-300"></div>
        </div>

        {/* Sliding Customer Background Images */}
        <div className="absolute inset-0">
          {customers.map((customer, index) => (
            <motion.div
              key={customer.id}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 0.3 : 0 }}
              transition={{ duration: 1.5 }}
            >
              <img 
                src={customer.logo} 
                alt={customer.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <motion.div 
                className="text-white space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                  <Award className="w-5 h-5 mr-3 text-yellow-400" />
                  <span className="font-semibold text-sm uppercase tracking-wider">Güvenilen Teknoloji Ortağı</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Sektör Liderleri
                  </span>
                  <br />
                  <span className="text-primary">Bizi Tercih Ediyor</span>
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Türkiye'nin önde gelen şirketleri, personel takip ve güvenlik çözümlerinde 
                  <span className="text-yellow-400 font-semibold"> Mika Teknoloji'ye güveniyor.</span>
                </p>

                {/* Current Customer Info */}
                <motion.div 
                  key={currentSlide}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-2xl font-bold mb-2">{customers[currentSlide].name}</h3>
                  <p className="text-primary font-semibold mb-4">{customers[currentSlide].sector}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">{customers[currentSlide].employees.toLocaleString()}</div>
                      <div className="text-sm text-gray-400">Çalışan</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">{customers[currentSlide].locations}</div>
                      <div className="text-sm text-gray-400">Lokasyon</div>
                    </div>
                  </div>
                </motion.div>

                {/* Navigation Dots */}
                <div className="flex space-x-3">
                  {customers.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-primary scale-125' : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating Customer Logos */}
              <div className="relative hidden lg:block">
                <motion.div 
                  className="grid grid-cols-3 gap-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  {customers.slice(0, 9).map((customer, index) => (
                    <motion.div
                      key={customer.id}
                      className={`bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/50 cursor-pointer ${
                        index === currentSlide ? 'ring-4 ring-primary scale-110' : 'hover:scale-105'
                      }`}
                      onClick={() => setCurrentSlide(index)}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden mb-3">
                        <img 
                          src={customer.logo} 
                          alt={customer.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm text-center">{customer.name}</h4>
                      <p className="text-gray-600 text-xs text-center mt-1">{customer.sector}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Customer Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center bg-gray-100 rounded-full px-6 py-2 mb-6">
              <CheckCircle className="w-5 h-5 text-primary mr-2" />
              <span className="text-gray-700 font-semibold text-sm uppercase tracking-wider">Müşteri Portföyümüz</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Başarı <span className="text-primary">Hikayeleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Her sektörden önde gelen firmalar, teknoloji ihtiyaçlarında Mika Teknoloji'yi tercih ediyor.
            </p>
          </motion.div>

          {/* Customer Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customers.map((customer, index) => (
              <motion.div
                key={customer.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={customer.logo} 
                    alt={customer.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Company Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{customer.name}</h3>
                    <p className="text-primary-light font-medium text-sm">{customer.sector}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center bg-gray-50 rounded-xl py-3">
                      <div className="text-2xl font-bold text-primary">{customer.employees.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Çalışan</div>
                    </div>
                    <div className="text-center bg-gray-50 rounded-xl py-3">
                      <div className="text-2xl font-bold text-blue-600">{customer.locations}</div>
                      <div className="text-sm text-gray-600">Lokasyon</div>
                    </div>
                  </div>

                  {/* Solutions */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Çözümler</h4>
                    <div className="flex flex-wrap gap-2">
                      {customer.solutions.slice(0, 2).map((solution, idx) => (
                        <span 
                          key={idx}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-xs font-medium"
                        >
                          {solution}
                        </span>
                      ))}
                      {customer.solutions.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs font-medium">
                          +{customer.solutions.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 font-medium">5.0 Memnuniyet</span>
                  </div>

                  {/* Contact Person */}
                  <div className="flex items-center space-x-3 pt-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{customer.person.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{customer.person}</p>
                      <p className="text-gray-600 text-xs">{customer.position}</p>
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