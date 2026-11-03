import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { ASIL_ADRES, Kanonik } from "@/seo/SEO";
import { useEffect } from "react";
import { trackFaceRecognitionView, trackProductView } from "@/lib/analytics";
import CtaDugmeleri from "@/components/CtaDugmeleri";
import { Kirinti } from "@/components/PdksIcerik";

const devices = [
  {
    id: 1,
    name: "MTFD15",
    description: "Yüz Tanıma Sistemi",
    image: "/mtfd15-device.png",
    features: ["Yüz Kayıt Kapasitesi : 1500", "Log Kapasitesi : 150.000", "Ekran Boyutu : 3,5 inç Elektronik Kapasiteli Dokunmatik Ekran", "Röle : Var", "Haberleşme : TCP/IP, USB"]
  },
  {
    id: 2,
    name: "MTFP15",
    description: "Yüz Tanıma ve Parmak İzi Terminal",
    image: "/mtfp15-device.png",
    features: ["Yüz Kayıt Kapasitesi : 1000", "Parmak İzi Kayıt Kapasitesi : 1000", "Log Kapasitesi : 100.000", "Ekran Boyutu : 2,4 inç TFT LCD", "Röle : Var", "Haberleşme : TCP/IP, USB"]
  },
  {
    id: 3,
    name: "MTFDP50",
    description: "Yüz Tanıma ve Parmak İzi Terminal",
    image: "/mtfdp50-device.png",
    features: ["Yüz Kayıt Kapasitesi : 5000", "Parmak İzi Kayıt Kapasitesi : 5000", "Log Kapasitesi : 500.000", "Röle : Var", "Haberleşme : TCP/IP, USB"]
  },
  {
    id: 4,
    name: "MTFDP200",
    description: "Yüz Tanıma ve Parmak İzi Terminal",
    image: "/mtfdp200-yuz-device.png",
    features: ["Yüz Kayıt Kapasitesi : 20000", "Parmak İzi Kayıt Kapasitesi : 20000", "Log Kapasitesi : 500.000", "Röle : Var", "Haberleşme : TCP/IP, USB"]
  }
];

export default function FaceRecognitionSystemPage() {
  useEffect(() => {
    // Track yüz tanıma systems page view
    trackFaceRecognitionView('yuz_tanima_sistemleri_ana_sayfa');
    trackProductView('Yüz Tanıma Sistem', 'yuz_tanima_sistemleri');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Helmet>
        <title>Yüz Tanıma Sistem | Mika Teknoloji - Temassız PDKS Cihazları MTFD15, MTFP15, MTFDP50</title>
        <meta name="description" content="Gelişmiş yüz tanıma sistem ve temassız PDKS cihazları. MTFD15, MTFP15, MTFDP50, MTFDP200 modelleri. 20.000 kapasite, Wi-Fi desteği, TCP/IP bağlantı. Ücretsiz demo." />
        <meta name="keywords" content="yüz tanıma sistem, yüz tanıma PDKS, temassız personel takip, facial recognition, MTFD15, MTFP15, MTFDP50, MTFDP200, biyometrik güvenlik sistemi" />
        
        <meta property="og:title" content="Yüz Tanıma Sistem | Mika Teknoloji" />
        <meta property="og:description" content="Gelişmiş yüz tanıma sistem ve temassız PDKS cihazları. 20.000 kapasite, Wi-Fi desteği." />
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
      {/* canonical + og:url ortak SEO bileşeninden; iki adres de (/yuz-tanima-sistem dahil) asıl adresi /urunler/yuz-tanima gösterir */}
      <Kanonik yol={ASIL_ADRES.yuzTanima} />

      <Kirinti maddeler={[{ ad: "Ana Sayfa", yol: "/" }, { ad: "Ürünler", yol: "/urunler" }, { ad: "Yüz Tanıma Cihazları", yol: ASIL_ADRES.yuzTanima }]} icSinif="pb-4" />

      {/* Devices Grid */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Yüz Tanıma Cihazları
          </h1>
          <CtaDugmeleri tur="donanim" sinif="justify-center" />
        </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devices.map((device, index) => (
              <motion.div
                key={device.id}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 relative">
                  <CardContent className="p-6 flex flex-col flex-1">
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
                    
                    <ul className="space-y-2 mb-6 flex-1">
                      {device.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild 
                      className="w-full"
                      variant="outline"
                      data-testid={`device-info-${device.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <Link href="/iletisim">Teklif Alın</Link>
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
            initial={false}
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
                  tek cihazda birleştiren hibrit modellerimiz sayesinde güvenlik seviyesini artırabilirsiniz.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Yüz Tanıma Teknolojisinin Avantajları
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Temassız güvenlik:</strong> Hijyenik ve hızlı geçiş kontrolü (0.1-0.2 saniye)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Kart kaybı riski yok:</strong> Personel kartı taşıma zorunluluğu ortadan kalkar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Proxy geçiş önleme:</strong> Başkası adına geçiş yapılması engellenebilir</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Geniş çalışma koşulları:</strong> -20°C ile +50°C arası sıcaklık aralığında çalışma</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
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
            <div className="text-center mt-12 bg-slate-900 border-t-4 border-primary text-white rounded-lg p-8">
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
                  className="px-8"
                  data-testid="cta-contact-button"
                >
                  <Link href="/iletisim">Teklif Alın</Link>
                </Button>
                <Button 
                  asChild 
                  size="lg"
                  variant="outlineLight"
                  className="px-8"
                  data-testid="cta-whatsapp-button"
                >
                  <a href="https://wa.me/905467122296" target="_blank" rel="noopener noreferrer">
                    WhatsApp Destek
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