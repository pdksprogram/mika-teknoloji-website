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
    logo: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    employees: 1200,
    locations: 65,
    sector: "Mobilya & Dekorasyon",
    testimonial: "Fabrika ve showroom alanlarımızda güvenlik kontrolünü üst seviyede tutmak için Mika Teknoloji'nin X-Ray güvenlik sistemlerini tercih ettik. Teknik ekipleri 7/24 destek veriyor ve sistemin verimliliği çok yüksek. Personel giriş-çıkış kontrolünde de RFID çözümlerini kullanıyoruz.",
    person: "Selma Özkan",
    position: "Operasyon Müdürü",
    solutions: ["X-Ray Güvenlik", "RFID Sistem", "Güvenlik Kontrol"]
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/90 to-primary overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center text-white max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Müşteri Başarı Hikayeleri
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Bizimle çalışmayı seven, beraber büyüdüğümüz işletmelerin{" "}
              <span className="font-bold">başarı hikâyelerini</span> sizlerle paylaşıyoruz.
            </p>
            <div className="flex items-center justify-center space-x-8 text-white/80">
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-2" />
                <span className="font-semibold">25,000+ Çalışan</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-2" />
                <span className="font-semibold">800+ Lokasyon</span>
              </div>
              <div className="flex items-center">
                <Award className="w-6 h-6 mr-2" />
                <span className="font-semibold">10 Sektör</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customer Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {customers.map((customer, index) => (
              <motion.div
                key={customer.id}
                className="grid lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={customer.logo} 
                        alt={customer.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      
                      {/* Company Badge */}
                      <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-800">{customer.name}</h3>
                        <p className="text-gray-600 font-medium">{customer.sector}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-6">
                    {/* Stats */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="bg-primary/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-primary/20">
                        <div className="flex items-center text-primary">
                          <Users className="w-5 h-5 mr-2" />
                          <span className="font-bold text-lg">{customer.employees.toLocaleString()}</span>
                          <span className="ml-1 text-sm">çalışan</span>
                        </div>
                      </div>
                      <div className="bg-blue-50 rounded-lg px-4 py-3 border border-blue-200">
                        <div className="flex items-center text-blue-700">
                          <MapPin className="w-5 h-5 mr-2" />
                          <span className="font-bold text-lg">{customer.locations}</span>
                          <span className="ml-1 text-sm">lokasyon</span>
                        </div>
                      </div>
                    </div>

                    {/* Solutions */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {customer.solutions.map((solution, idx) => (
                        <span 
                          key={idx}
                          className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {solution}
                        </span>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="flex items-start mb-4">
                        <div className="flex text-yellow-400 mr-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current" />
                          ))}
                        </div>
                      </div>
                      <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                        "{customer.testimonial}"
                      </blockquote>
                      <div className="border-l-4 border-primary pl-4">
                        <p className="font-bold text-gray-800">{customer.person}</p>
                        <p className="text-gray-600">{customer.position}</p>
                        <p className="text-primary font-medium">{customer.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Siz de Başarı Hikayenizi Yazmaya Hazır mısınız?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Mika Teknoloji çözümleri ile işletmenizi bir sonraki seviyeye taşıyın.
            </p>
            <motion.button
              className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ÜCRETSİZ DEMO TALEBİ
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default References;