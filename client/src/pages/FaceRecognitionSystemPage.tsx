import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

const devices = [
  {
    id: 1,
    name: "MT35 Face",
    description: "Yüz Tanıma Sistemi",
    image: "/Professional_MT35_facial_recognition_device_cdd395c7.png",
    features: ["Yüz Kayıt Kapasitesi : 1500", "Log Kapasitesi : 150.000", "Ekran Boyutu : 3,5 inç Elektronik Kapasiteli Dokunmatik Ekran", "Röle : Var", "Haberleşme : TCP/IP, USB"]
  },
  {
    id: 2,
    name: "MT35 Vertical",
    description: "Yüz Tanıma ve Parmak İzi Terminal",
    image: "/Vertical_MT35_facial_recognition_terminal_3293fcb3.png",
    features: ["Yüz Kayıt Kapasitesi : 1000", "Parmak İzi Kayıt Kapasitesi : 1000", "Log Kapasitesi : 100.000", "Ekran Boyutu : 2,4 inç TFT LCD", "Röle : Var", "Haberleşme : TCP/IP, USB"]
  },
  {
    id: 3,
    name: "MT35 Professional",
    description: "Yüz Tanıma ve Parmak İzi Terminal",
    image: "/Professional_MT35_facial_recognition_device_cdd395c7.png",
    features: ["Yüz Kayıt Kapasitesi : 5000", "Parmak İzi Kayıt Kapasitesi : 5000", "Log Kapasitesi : 500.000", "Röle : Var", "Haberleşme : TCP/IP, USB"]
  },
  {
    id: 4,
    name: "MT35 Ultimate",
    description: "Yüz Tanıma ve Parmak İzi Terminal",
    image: "/MT35_device_pure_white_background_0d0febd4.png",
    features: ["Yüz Kayıt Kapasitesi : 20000", "Parmak İzi Kayıt Kapasitesi : 20000", "Log Kapasitesi : 500.000", "Röle : Var", "Haberleşme : TCP/IP, USB"]
  }
];

export default function FaceRecognitionSystemPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Helmet>
        <title>Yüz Tanıma Sistem | Mika Teknoloji - Temassız PDKS Cihazları MTFD15, MTFP15, MTFDP50</title>
        <meta name="description" content="Gelişmiş yüz tanıma sistem ve temassız PDKS cihazları. MTFD15, MTFP15, MTFDP50, MTFDP200 modelleri. 20.000 kapasite, Wi-Fi desteği, TCP/IP bağlantı. Ücretsiz demo!" />
        <meta name="keywords" content="yüz tanıma sistem, yüz tanıma PDKS, temassız personel takip, facial recognition, MTFD15, MTFP15, MTFDP50, MTFDP200, biyometrik güvenlik sistemi" />
        
        <meta property="og:title" content="Yüz Tanıma Sistem | Mika Teknoloji" />
        <meta property="og:description" content="Gelişmiş yüz tanıma sistem ve temassız PDKS cihazları. 20.000 kapasite, Wi-Fi desteği." />
        <meta property="og:url" content="https://mikateknoloji.com/yuz-tanima-sistem" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Mika Teknoloji Yüz Tanıma Sistem",
            "description": "Gelişmiş yüz tanıma sistemi ve temassız PDKS cihazları. MTFD15, MTFP15, MTFDP50, MTFDP200 modelleri.",
            "brand": "Mika Teknoloji",
            "category": "Security Systems",
            "offers": {
              "@type": "Offer",
              "availability": "InStock",
              "priceCurrency": "TRY"
            }
          })}
        </script>
      </Helmet>

      {/* Devices Grid */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Yüz Tanıma Cihazları
          </h1>
        </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devices.map((device, index) => (
              <motion.div
                key={device.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 relative">
                  {/* YENİ Badge - 2. ve 3. cihaz için */}
                  {(device.id === 2 || device.id === 3) && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <div className="relative">
                        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl transform rotate-12 animate-bounce">
                          <div className="flex items-center gap-1">
                            <span className="animate-pulse">✨</span>
                            <span>YENİ</span>
                            <span className="animate-pulse">✨</span>
                          </div>
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-red-400 rounded-full blur-sm opacity-75 animate-ping"></div>
                      </div>
                    </div>
                  )}
                  
                  {/* Wi-Fi Badge - Tüm cihazlar için */}
                  {(device.id === 1 || device.id === 2 || device.id === 3 || device.id === 4) && (
                    <div className="absolute -bottom-3 -left-3 z-10">
                      <div className="relative">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-2 rounded-full text-xs font-bold shadow-xl transform -rotate-12 animate-pulse">
                          <div className="flex items-center gap-1">
                            <span>📶</span>
                            <span>Wi-Fi</span>
                          </div>
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-green-400 rounded-full blur-sm opacity-75 animate-ping"></div>
                      </div>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="aspect-square bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden border border-gray-200">
                      {device.image && device.image !== "/placeholder-device.jpg" ? (
                        <img 
                          src={device.image} 
                          alt={device.name}
                          className={`w-full h-full object-contain ${device.id === 1 ? 'scale-150' : device.id === 4 ? 'scale-125' : ''}`}
                          style={{
                            backgroundColor: '#ffffff',
                            padding: device.id === 1 ? '2px' : device.id === 4 ? '4px' : '8px'
                          }}
                        />
                      ) : (
                        <div className="text-gray-400 text-center">
                          <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-2 flex items-center justify-center">
                            <Shield className="w-8 h-8 text-primary" />
                          </div>
                          <p className="text-sm">Cihaz Görseli</p>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{device.name}</h3>
                    <p className="text-primary font-semibold mb-4">{device.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {device.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className="w-full"
                      variant="outline"
                      data-testid={`device-info-${device.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <Link href="/iletisim">Detaylı Bilgi Al</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
      </section>

      {/* SEO Content Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          
          {/* Main SEO Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Yüz Tanıma Sistemleri ile Gelişmiş Güvenlik ve Personel Takip Çözümleri
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Neden Mika Teknoloji Yüz Tanıma Sistemleri?
                </h3>
                <p className="text-gray-600 mb-4">
                  <strong>Mika Teknoloji</strong> olarak, son teknoloji <strong>yüz tanıma sistemleri</strong> ile işletmenizin güvenlik ihtiyaçlarını karşılıyoruz. 
                  MTFD15, MTFP15, MTFDP50 ve MTFDP200 modellerimiz ile <strong>1.500'den 20.000'e kadar kullanıcı kapasitesi</strong> sunuyoruz.
                </p>
                <p className="text-gray-600">
                  <strong>Wi-Fi desteği, TCP/IP bağlantı</strong> ve <strong>500.000'e kadar log kapasitesi</strong> ile modern işletmeler için 
                  ideal <strong>PDKS çözümleri</strong> sağlıyoruz. Hem <strong>parmak izi hem de yüz tanıma</strong> teknolojilerini 
                  tek cihazda birleştiren hibrit modellerimiz sayesinde maksimum güvenlik elde edebilirsiniz.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Yüz Tanıma Teknolojisinin Avantajları
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Temassız güvenlik:</strong> Hijyenik ve hızlı geçiş kontrolü (0.1-0.2 saniye)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Kart kaybı riski yok:</strong> Personel kartı taşıma zorunluluğu ortadan kalkar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Proxy geçiş önleme:</strong> Başkası adına geçiş yapılması engellenebilir</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Geniş çalışma koşulları:</strong> -20°C ile +50°C arası sıcaklık aralığında çalışma</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Çoklu entegrasyon:</strong> Turnike, bariyer ve kapı kilit sistemleri ile uyumlu</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Usage Areas */}
            <div className="bg-gray-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Yüz Tanıma Sistemleri Kullanım Alanları
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Kurumsal Güvenlik</h4>
                  <p className="text-sm text-gray-600">Fabrikalar, hastaneler, holding binalar, plazalar için gelişmiş personel takip sistemi</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Eğitim Kurumları</h4>
                  <p className="text-sm text-gray-600">Okul, üniversite, kurs merkezleri için öğrenci ve öğretmen takip sistemi</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Hizmet Sektörü</h4>
                  <p className="text-sm text-gray-600">Spor salonları, restoranlar, oteller için üye ve personel takip uygulamaları</p>
                </div>
              </div>
            </div>

            {/* Technical Comparison */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Mika Teknoloji Yüz Tanıma Cihazları Karşılaştırması
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">Model</th>
                      <th className="border border-gray-300 px-4 py-3 text-center">Yüz Kapasitesi</th>
                      <th className="border border-gray-300 px-4 py-3 text-center">Parmak İzi</th>
                      <th className="border border-gray-300 px-4 py-3 text-center">Log Kapasitesi</th>
                      <th className="border border-gray-300 px-4 py-3 text-center">Özel Özellik</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-semibold">MTFD15</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">1.500</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">150.000</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">3,5" Dokunmatik Ekran</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">MTFP15</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">1.000</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">1.000</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">100.000</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">2,4" TFT LCD + Klavye</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-semibold">MTFDP50</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">5.000</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">5.000</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">500.000</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">Modern Tasarım</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">MTFDP200</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">20.000</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">20.000</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">500.000</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">Enterprise Çözüm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white border rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                Sıkça Sorulan Sorular - Yüz Tanıma Sistemleri
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Yüz tanıma sistemi nasıl çalışır?</h4>
                  <p className="text-gray-600 mb-4">
                    Yüz tanıma teknolojisi, yüzün alın, burun ve çene bölgelerindeki benzersiz geometrik noktaları analiz eder. 
                    Bu matematiksel algoritmalar sayesinde her kişi için eşsiz bir kimlik oluşturulur.
                  </p>

                  <h4 className="font-semibold text-gray-800 mb-2">Makyaj veya gözlük takınca çalışır mı?</h4>
                  <p className="text-gray-600 mb-4">
                    Evet, gelişmiş algoritmalarımız makyaj, gözlük, bıyık veya sakal gibi değişiklikleri tolere edebilir. 
                    Sistem yüzün değişmeyen anatomik özelliklerini baz alır.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Hangi aydınlatma koşullarında çalışır?</h4>
                  <p className="text-gray-600 mb-4">
                    Mika Teknoloji yüz tanıma cihazları, karanlık ve çok aydınlık ortamlar dahil geniş bir aydınlatma 
                    spektrumunda çalışabilir. IR ışık desteği sayesinde gece görüş özelliği sunar.
                  </p>

                  <h4 className="font-semibold text-gray-800 mb-2">PDKS yazılımı ile nasıl entegre olur?</h4>
                  <p className="text-gray-600 mb-4">
                    Cihazlarımız TCP/IP ve USB bağlantısı ile var olan PDKS yazılımınıza kolayca entegre edilebilir. 
                    Real-time data transferi ve raporlama yapabilirsiniz.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 bg-gradient-to-r from-primary to-pink-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Yüz Tanıma Sistemi Fiyatları ve Teklif Almak İçin
              </h3>
              <p className="text-lg mb-6 opacity-90">
                İşletmenize en uygun yüz tanıma PDKS çözümünü öğrenmek ve detaylı fiyat bilgisi almak için bizimle iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 font-semibold px-8"
                  data-testid="cta-contact-button"
                >
                  <Link href="/iletisim">📞 Hemen Teklif Al</Link>
                </Button>
                <Button 
                  asChild 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8"
                  data-testid="cta-whatsapp-button"
                >
                  <a href="https://wa.link/vblc5g" target="_blank" rel="noopener noreferrer">
                    💬 WhatsApp Destek
                  </a>
                </Button>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}