import React from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin } from 'lucide-react';
import SEO from "@/seo/SEO";
// Removed problematic import
// Removed problematic import
// Removed problematic import
// Removed problematic import
// Removed problematic import

const customers = [
  {
    id: 1,
    name: "Lufian",
    logo: "/images/logos/lufian.jpg",
    employees: 400,
    locations: 80,
    sector: "Tekstil & Moda",
    solutions: ["WebPDKS", "QR Personel Takip", "Vardiya Yönetimi"]
  },
  {
    id: 2,
    name: "Adore Mobilya",
    logo: "/images/logos/adore.jpeg",
    employees: 1200,
    locations: 65,
    sector: "Mobilya & Dekorasyon",
    solutions: ["Mobil PDKS", "Shift Yönetimi", "Vardiya Planlama"]
  },
  {
    id: 3,
    name: "Koluman Mercedes",
    logo: "/images/logos/koluman.jpg",
    employees: 2500,
    locations: 28,
    sector: "Otomotiv",
    solutions: ["Turnike Sistemleri", "Güvenlik Guard Kontrol", "PDKS"]
  },
  {
    id: 4,
    name: "Antalya Devlet Hastanesi",
    logo: "/images/logos/hastane-antalya.jpg",
    employees: 3200,
    locations: 12,
    sector: "Sağlık",
    solutions: ["X-Ray Güvenlik", "PDKS", "Güvenlik Kontrol"]
  },
  {
    id: 5,
    name: "Cerrahpaşa Üniversite Hastanesi",
    logo: "/images/logos/istanbul-cerrahpasa.jpg",
    employees: 7000,
    locations: 1,
    sector: "Sağlık & Eğitim",
    solutions: ["Yemekhane Sistemi", "Kartlı Ödeme", "Entegre Çözümler"]
  },
  {
    id: 6,
    name: "Teknosa",
    logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    employees: 1800,
    locations: 95,
    sector: "Teknoloji Perakende",
    solutions: ["Turnike Sistemleri", "Güvenlik Kontrol", "PDKS"]
  },
  {
    id: 7,
    name: "Koton",
    logo: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=300&fit=crop",
    employees: 2200,
    locations: 120,
    sector: "Tekstil & Moda",
    solutions: ["WebPDKS", "Merkezi Yönetim", "Raporlama"]
  },
  {
    id: 8,
    name: "Bim Market",
    logo: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=400&h=300&fit=crop",
    employees: 4500,
    locations: 180,
    sector: "Perakende",
    solutions: ["RFID Sistem", "PDKS", "Çoklu Lokasyon"]
  },
  {
    id: 9,
    name: "Akbank",
    logo: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=400&h=300&fit=crop",
    employees: 3800,
    locations: 85,
    sector: "Bankacılık",
    solutions: ["X-Ray Güvenlik", "Guard Kontrol", "Güvenlik Yönetimi"]
  },
  {
    id: 10,
    name: "Turkcell",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    employees: 5200,
    locations: 110,
    sector: "Telekomünikasyon",
    solutions: ["QR Personel Takip", "Mobil PDKS", "Dijital Çözümler"]
  }
];

const References: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Referanslar | Mika Teknoloji" description="PDKS, turnike ve kartlı geçiş sistemlerimizi kullanan kurumlar ve müşteri başarı hikâyeleri." />
      {/* Professional Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900">
        <div className="absolute inset-0 bg-gray-900/95"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center text-white max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Corporate Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-md px-6 py-2 mb-8 border border-white/20">
              <span className="text-sm font-semibold tracking-wider uppercase">Güvenilir Çözüm Ortağı</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Müşteri 
              <span className="text-primary"> Başarı Hikayeleri</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Bizimle çalışmayı seven, beraber büyüdüğümüz 
              <span className="text-white font-semibold"> işletmelerin başarı hikâyelerini</span> sizlerle paylaşıyoruz.
            </p>
            
            {/* Professional Stats */}
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">25,000+</div>
                <div className="text-gray-400 font-medium">Çalışan</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">800+</div>
                <div className="text-gray-400 font-medium">Lokasyon</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">10</div>
                <div className="text-gray-400 font-medium">Sektör</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Customer Stories - idenfit Style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Professional Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-white shadow-sm rounded-lg px-6 py-2 mb-6">
              <span className="text-gray-600 font-semibold text-sm uppercase tracking-wider">Müşteri Portföyümüz</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Başarı Hikayeleri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Farklı sektörlerden çalıştığımız firmalar.
            </p>
          </motion.div>

          {/* Customer Stories */}
          <div className="space-y-32">
            {customers.map((customer, index) => (
              <motion.div
                key={customer.id}
                className="relative"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Image Section */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative bg-white rounded-2xl p-2 shadow-xl">
                      <div className="aspect-[4/3] rounded-xl overflow-hidden">
                        <img 
                          src={customer.logo} 
                          alt={customer.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Company Badge */}
                      <div className="absolute -bottom-6 left-6 bg-white rounded-xl px-6 py-4 shadow-lg border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{customer.name}</h3>
                        <p className="text-primary font-semibold text-sm">{customer.sector}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between">
                          <Users className="w-8 h-8 text-primary" />
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">{String(customer.employees).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</div>
                            <div className="text-sm text-gray-600">Çalışan</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between">
                          <MapPin className="w-8 h-8 text-blue-600" />
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">{customer.locations}</div>
                            <div className="text-sm text-gray-600">Lokasyon</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Solutions */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Kullanılan Çözümler</h4>
                      <div className="flex flex-wrap gap-3">
                        {customer.solutions.map((solution, idx) => (
                          <span 
                            key={idx}
                            className="bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm border border-gray-200"
                          >
                            {solution}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center text-white max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-white/10 rounded-lg px-6 py-2 mb-8">
              <span className="text-sm font-semibold tracking-wider uppercase">İletişime Geçin</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Siz de Başarı Hikayenizi 
              <span className="text-primary"> Yazmaya Hazır mısınız?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Mika Teknoloji çözümleri ile işletmenizi bir sonraki seviyeye taşıyın. 
              Ücretsiz demo talebi oluşturun ve farkı keşfedin.
            </p>
            
            {/* Professional Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <motion.button
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 min-w-[200px] shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Ücretsiz Demo Talebi
              </motion.button>
              
              <motion.button
                className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 min-w-[200px]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Teknik Detaylar
              </motion.button>
            </div>
            
            {/* Corporate Trust Indicators */}
            <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">Teknik</div>
                <div className="text-gray-400 text-sm">Destek</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">Kurulum</div>
                <div className="text-gray-400 text-sm">ve Eğitim</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">2 Yıl</div>
                <div className="text-gray-400 text-sm">Garanti</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default References;