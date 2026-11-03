import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { ASIL_ADRES, Kanonik } from "@/seo/SEO";
import { useEffect } from "react";
import { trackFingerprintView, trackProductView } from "@/lib/analytics";

const devices = [
  {
    id: 1,
    name: "MT1100",
    description: "Parmak İzi Sistemi",
    image: "/mt1100-device.png",
    features: ["Parmak izi Kapasitesi : 3.000", "Kayıt Kapasitesi : 100.000", "Parmak izi + Proximity Kart + Şifre Tanımlama", "Kapı Açma Özelliği", "Zil Çaldırma Özelliği"]
  },
  {
    id: 2,
    name: "MTP50",
    description: "Yüz Tanıma ve Parmak İzi Terminal",
    image: "/mtp50-device.png",
    features: ["Yüz Kayıt Kapasitesi : 1000", "Parmak İzi Kayıt Kapasitesi : 1000", "Log Kapasitesi : 100.000", "Ekran Boyutu : 2,4 inç TFT LCD", "Röle : Var", "Haberleşme : TCP/IP, USB"]
  },
  {
    id: 3,
    name: "MTFDP200",
    description: "Yüz Tanıma ve Parmak İzi Terminal",
    image: "/mtfdp200-device.png",
    features: ["Yüz Kayıt Kapasitesi : 20000", "Parmak İzi Kayıt Kapasitesi : 20000", "Log Kapasitesi : 500.000", "Röle : Var", "Haberleşme : TCP/IP, USB"]
  },
  {
    id: 4,
    name: "MT4051",
    description: "Parmak İzi ve Kart Okuyucu",
    image: "/mt4051-device.png",
    features: ["Parmak İzi Kapasite : 1000 - 3000", "Log Kapasitesi : 100.000", "Kart Kapasitesi : 500", "Kart : Proximity", "Şifre : Var", "Ethernet : Var", "İletişim Portalı : TCP / IP , USB , RS485", "Röle : Var"]
  }
];

export default function FingerprintSystemPage() {
  useEffect(() => {
    // Track parmak izi systems page view
    trackFingerprintView('parmak_izi_sistemleri_ana_sayfa');
    trackProductView('Parmak İzi Takip Sistemi', 'parmak_izi_sistemleri');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Helmet>
        <title>Parmak İzi Takip Sistemi | Mika Teknoloji - Biyometrik PDKS Cihazları MT1100, MTP50, MTFDP200</title>
        <meta name="description" content="Profesyonel parmak izi takip sistemi ve PDKS cihazları. MT1100, MTP50, MTFDP200, MT4051 modelleri. 20.000 kapasite, Wi-Fi desteği, TCP/IP bağlantı. Hemen teklif alın!" />
        <meta name="keywords" content="parmak izi takip sistemi, parmak izi okuyucu, PDKS cihazı, biyometrik güvenlik, personel takip sistemi, MT1100, MTP50, MTFDP200, MT4051, Wi-Fi parmak izi" />
        
        <meta property="og:title" content="Parmak İzi Takip Sistemi | Mika Teknoloji" />
        <meta property="og:description" content="Profesyonel parmak izi takip sistemi ve PDKS cihazları. 20.000 kapasite, Wi-Fi desteği." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Mika Teknoloji Parmak İzi Takip Sistemi",
            "description": "Profesyonel parmak izi okuyucu ve PDKS cihazları. MT1100, MTP50, MTFDP200, MT4051 modelleri.",
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
      {/* canonical + og:url ortak SEO bileşeninden; iki adres de (/parmak-izi-takip-sistemi dahil) asıl adresi /urunler/parmak-izi-tanima gösterir */}
      <Kanonik yol={ASIL_ADRES.parmakIzi} />

      {/* Devices Grid */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Parmak İzi Okuyucu Cihazları
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
                  
                  {/* Wi-Fi Badge - 2. ve 3. cihaz için */}
                  {(device.id === 2 || device.id === 3) && (
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
                          className={`w-full h-full object-contain ${device.id === 4 ? 'scale-125' : ''}`}
                          style={{
                            backgroundColor: '#ffffff',
                            padding: device.id === 4 ? '4px' : '8px'
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
              Parmak İzi Okuyucu Sistemleri ile Güvenli Personel Takip ve PDKS Çözümleri
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Mika Teknoloji Parmak İzi Sistemleri Neden Tercih Edilir?
                </h3>
                <p className="text-gray-600 mb-4">
                  <strong>Mika Teknoloji</strong> olarak, endüstri standardında <strong>parmak izi okuyucu cihazları</strong> ile işletmenizin güvenlik ve personel takip ihtiyaçlarını karşılıyoruz. 
                  MT1100, MTP50, MTFDP200 ve MT4051 modellerimiz ile <strong>1.000'den 20.000'e kadar kullanıcı kapasitesi</strong> sunmaktayız.
                </p>
                <p className="text-gray-600">
                  <strong>Proximity kart desteği, şifre tanımlama</strong> ve <strong>500.000'e kadar log kapasitesi</strong> ile hibrit güvenlik çözümleri sağlıyoruz. 
                  <strong>TCP/IP, USB ve RS485 bağlantı</strong> seçenekleri ile var olan PDKS altyapınıza kolayca entegre edilebilir.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Parmak İzi Teknolojisinin Benzersiz Avantajları
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Benzersiz biyometrik kimlik:</strong> Her kişinin parmak izi eşsizdir, taklit edilemez</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Hızlı tanıma süresi:</strong> 1 saniyeden daha hızlı doğrulama işlemi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Çoklu güvenlik katmanı:</strong> Parmak izi + kart + şifre kombine koruması</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Kapı entegrasyonu:</strong> Otomatik kapı açma ve zil çaldırma özellikleri</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Çevrimiçi/çevrimdışı çalışma:</strong> Network bağlantısı kesilse de kayıt alabilme</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Application Sectors */}
            <div className="bg-gray-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Parmak İzi Okuyucu Sistemleri Uygulama Alanları
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Sanayi ve Üretim</h4>
                  <p className="text-sm text-gray-600">Fabrika, atölye, depo ve sanayi tesisleri için dayanıklı personel takip çözümleri</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Ofis ve İdari Binalar</h4>
                  <p className="text-sm text-gray-600">Şirket merkezi, ofis binası ve kamu kurumları için estetik PDKS sistemleri</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Güvenlik Kritik Alanlar</h4>
                  <p className="text-sm text-gray-600">Laboratuvar, veri merkezi, kasa ve yüksek güvenlik gerektiren alanlar</p>
                </div>
              </div>
            </div>

            {/* Device Comparison */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Mika Teknoloji Parmak İzi Cihazları Teknik Kıyaslaması
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">Model</th>
                      <th className="border border-gray-300 px-4 py-3 text-center">Parmak İzi Kapasitesi</th>
                      <th className="border border-gray-300 px-4 py-3 text-center">Yüz Tanıma</th>
                      <th className="border border-gray-300 px-4 py-3 text-center">Kart Desteği</th>
                      <th className="border border-gray-300 px-4 py-3 text-center">Bağlantı Türü</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-semibold">MT1100</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">3.000</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">Proximity</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">TCP/IP, USB</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">MTP50</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">1.000</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">1.000</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">Evet</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">TCP/IP, USB</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-semibold">MTFDP200</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">20.000</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">20.000</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">Evet</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">TCP/IP, USB</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">MT4051</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">1.000-3.000</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">Proximity</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">TCP/IP, USB, RS485</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Technology Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  🔐 Gelişmiş Güvenlik Özellikleri
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Live Finger Detection:</strong> Sahte parmak izi algılama teknolojisi</li>
                  <li>• <strong>Şifreleme:</strong> 256-bit AES şifreleme ile data koruması</li>
                  <li>• <strong>Anti-passback:</strong> Geri dönüş engelleme sistemi</li>
                  <li>• <strong>Duress finger:</strong> Zoraki durumda alarm gönderme</li>
                  <li>• <strong>Time attendance:</strong> Vardiya ve izin takip entegrasyonu</li>
                </ul>
              </div>

              <div className="bg-white border rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  ⚙️ Kurulum ve Entegrasyon
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Kolay kurulum:</strong> Plug & play özelliği ile hızlı devreye alma</li>
                  <li>• <strong>SDK desteği:</strong> Kendi yazılımınıza entegrasyon imkanı</li>
                  <li>• <strong>API entegrasyonu:</strong> Web servisleri ile veri transferi</li>
                  <li>• <strong>Bulut uyumluluk:</strong> Cloud tabanlı PDKS sistemleri desteği</li>
                  <li>• <strong>Mobil uygulama:</strong> Smartphone ile uzaktan yönetim</li>
                </ul>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white border rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                Parmak İzi Sistemleri Hakkında Sıkça Sorulan Sorular
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Parmak izi okuyucu ne kadar hassas?</h4>
                  <p className="text-gray-600 mb-4">
                    Mika Teknoloji cihazları, FBI standartlarında 500 DPI çözünürlükle çalışır. 
                    False Acceptance Rate (FAR) oranımız 0.0001%'den düşüktür.
                  </p>

                  <h4 className="font-semibold text-gray-800 mb-2">Yaralı veya kuru parmakta çalışır mı?</h4>
                  <p className="text-gray-600 mb-4">
                    Evet, gelişmiş optik sensörlerimiz kuru, nemli veya hafif yaralı parmak izlerini 
                    başarıyla okuyabilir. Alternatif parmak kaydetme özelliği mevcuttur.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Kaç kişilik kapasiteye kadar ölçeklenebilir?</h4>
                  <p className="text-gray-600 mb-4">
                    MTFDP200 modelimiz 20.000 parmak izi kapasitesine sahiptir. Çoklu cihaz 
                    bağlantısı ile kapasite artırılabilir.
                  </p>

                  <h4 className="font-semibold text-gray-800 mb-2">Elektrik kesilmesinde ne olur?</h4>
                  <p className="text-gray-600 mb-4">
                    Cihazlarımızda dahili batarya bulunur. Elektrik kesilse bile veriler korunur 
                    ve sistem 4-8 saat arası çalışmaya devam eder.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 bg-gradient-to-r from-primary to-pink-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Parmak İzi Okuyucu Sistemi Fiyatları ve Ücretsiz Keşif
              </h3>
              <p className="text-lg mb-6 opacity-90">
                İşletmeniz için en uygun parmak izi PDKS çözümünü belirlemek ve detaylı fiyat teklifi almak için uzmanlarımızla görüşün.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 font-semibold px-8"
                  data-testid="fingerprint-contact-button"
                >
                  <Link href="/iletisim">📞 Ücretsiz Keşif Talep Et</Link>
                </Button>
                <Button 
                  asChild 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8"
                  data-testid="fingerprint-whatsapp-button"
                >
                  <a href="https://wa.me/905467122296" target="_blank" rel="noopener noreferrer">
                    💬 WhatsApp Teknik Destek
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