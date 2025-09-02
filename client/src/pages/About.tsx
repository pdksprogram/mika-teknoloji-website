import { Building, Users, Award, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import teamPhoto from "@assets/image_1756822202470.png";
import gamzePhoto from "@assets/image_1756823252649.png";
import hierarchyPhoto from "@assets/image_1756823893243.png";
import suphiPhoto from "@assets/image_1756824630814.png";

export default function About() {
  const stats = [
    { icon: Users, value: "10,000+", label: "Kurumsal Müşteri" },
    { icon: Building, value: "15+", label: "Yıllık Tecrübe" },
    { icon: Globe, value: "Türkiye", label: "Genelinde Hizmet" },
    { icon: Award, value: "#1", label: "Sektör Lideri" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Vision Statement */}
        <div className="text-center mb-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight" data-testid="about-title">
              Türkiye'nin Güvenilir PDKS ve Kontrol Sistemleri Uzmanı
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              İnovatif teknoloji çözümleri ile işletmelerin dijital dönüşümüne öncülük ediyoruz
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
              data-testid="contact-button"
            >
              <a href="/iletisim">İletişime Geçin</a>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-slate-800">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 font-medium">{stat.label}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leadership Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Üst Düzey Yönetim
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-square md:aspect-auto">
                  <img 
                    src={gamzePhoto} 
                    alt="Gamze Deniz Toksoy - Yazılım Müdürü" 
                    className="w-full h-full object-cover"
                    data-testid="leadership-photo"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-slate-50 to-slate-100">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">
                        Gamze Deniz Toksoy
                      </h3>
                      <p className="text-lg font-semibold text-primary mb-4">
                        Mika Teknoloji
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-1">
                          Uzmanlık Alanı:
                        </h4>
                        <p className="text-slate-600">
                          Yazılım Mühendisi ve Full Web Stack Uzmanı
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-1">
                          Teknoloji Yetkinlikleri:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                            C++
                          </span>
                          <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                            Java
                          </span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            ASP.NET
                          </span>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            SQL
                          </span>
                          <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">
                            React
                          </span>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Company Hierarchy */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Arge Ve Üretim Müdürü
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="p-8 text-center bg-gradient-to-br from-slate-50 to-slate-100">
                <div className="mb-6">
                  <img 
                    src={hierarchyPhoto} 
                    alt="Şirket Hiyerarşisi" 
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                    data-testid="hierarchy-photo"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      Tolga Yel Aldı
                    </h3>
                    <div className="space-y-2 mb-4">
                      <p className="text-lg font-semibold text-primary">
                        Arge Ve Üretim Müdürü
                      </p>
                      <p className="text-slate-600">
                        Elektronik Mühendisi, Anakart Tasarımı ve Kontrol Sistemleri Uzmanı
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-1">
                          Geliştirdiği Ürünler:
                        </h4>
                        <ul className="text-slate-600 space-y-1">
                          <li>• Access Control Panel (Erişim Kontrol Paneli)</li>
                          <li>• Guard MX Bekçi Kontrol Sistemi</li>
                          <li>• Anakart Tasarımı ve PCB Geliştirme</li>
                        </ul>
                      </div>
                      
                      <p className="text-slate-600 italic pt-2">
                        "Elektronik mühendisliği bilgimle donanım tasarımından yazılım geliştirmeye 
                        kadar tüm kontrol sistemlerini tasarlıyor ve geliştiriyoruz."
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-slate-700 mb-2">
                        Teknik Departman
                      </h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Elektronik Tasarım</li>
                        <li>• Anakart Geliştirme</li>
                        <li>• Sistem Entegrasyonu</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-slate-700 mb-2">
                        Yazılım Departmanı  
                      </h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• PDKS Sistemleri</li>
                        <li>• Web Uygulamaları</li>
                        <li>• Mobil Çözümler</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Mobile Development Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Mobil Yazılım Uzmanı
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-square md:aspect-auto">
                  <img 
                    src={suphiPhoto} 
                    alt="Suphi Gezgin - Mobil Yazılım Uzmanı" 
                    className="w-full h-full object-cover"
                    data-testid="suphi-photo"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-blue-50 to-blue-100">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">
                        Suphi Gezgin
                      </h3>
                      <p className="text-lg font-semibold text-blue-600 mb-4">
                        Mobil Programlama Uzmanı
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-1">
                          Uzmanlık Alanı:
                        </h4>
                        <p className="text-slate-600">
                          ESoft PDKS Mobil Yazılım Mühendisi
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-1">
                          Mobil Teknolojileri:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            Android
                          </span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            iOS
                          </span>
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                            React Native
                          </span>
                          <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                            Flutter
                          </span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-1">
                          Mobil Uygulama Özellikleri:
                        </h4>
                        <ul className="text-slate-600 space-y-1 text-sm">
                          <li>• Offline Çalışma Desteği</li>
                          <li>• GPS Konum Takibi</li>
                          <li>• Push Notification</li>
                          <li>• Biyometrik Kimlik Doğrulama</li>
                          <li>• QR Code Tarama</li>
                          <li>• Real-time Senkronizasyon</li>
                        </ul>
                      </div>
                      
                      <div className="pt-2">
                        <p className="text-slate-600 italic">
                          "PDKS mobil uygulamalarında kullanıcı deneyimini en üst seviyede tutarak, 
                          her platformda kesintisiz çalışan çözümler geliştiriyorum."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-slate-800 mb-12">
            Uzman Ekibimiz
          </h2>
          <div className="max-w-5xl mx-auto">
            <img 
              src={teamPhoto} 
              alt="Mika Teknoloji Ekibi" 
              className="w-full rounded-2xl shadow-2xl"
              data-testid="team-photo"
            />
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
            Kurumsal Hikayemiz
          </h2>
          
          <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
            <p>
              Mika Teknoloji Kontrol Sistemleri, 2008 yılında İstanbul'da kurulan ve PDKS (Personel Devam Kontrol Sistemi) 
              alanında uzmanlaşmış bir teknoloji şirketidir. Kuruluşumuzdan bu yana, kurumsal müşterilerimizin insan kaynakları 
              yönetim süreçlerini dijitalleştirmek ve operasyonel verimliliği artırmak amacıyla kapsamlı çözümler sunmaktayız.
            </p>
            
            <p>
              Türkiye genelinde 10.000'den fazla kurumsal müşteri portföyü ile iş gücü yönetimi ve erişim kontrol sistemleri 
              alanında güvenilir teknoloji ortağı konumundayız. Perpa Ticaret Merkezi A Blok'taki modern merkez ofisimizden 
              ülke çapındaki tüm müşterilerimize kesintisiz hizmet sağlamaktayız.
            </p>
            
            <p>
              Web tabanlı PDKS çözümlerimiz, QR teknolojili bekçi kontrol sistemlerimiz, turnike entegrasyonları ve 
              biyometrik erişim kontrol sistemlerimiz ile kurumların dijital dönüşüm projelerinde stratejik ortak rolü 
              üstlenmekteyiz. Mika Teknoloji olarak, ileri teknoloji altyapısını kurumsal ihtiyaçlarla buluşturarak 
              verimli ve güvenilir iş süreçleri geliştirmekteyiz.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-slate-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Misyonumuz
                </h3>
                <p className="text-slate-600">
                  Kurumsal müşterilerimize PDKS ve erişim kontrol sistemleri alanında en güncel teknoloji çözümlerini sunarak, 
                  insan kaynakları yönetiminde verimliliği artırmak ve operasyonel süreçleri optimize etmek.
                </p>
              </div>
              
              <div className="bg-primary/5 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Vizyonumuz
                </h3>
                <p className="text-slate-600">
                  İnsan kaynakları ve iş gücü yönetimi teknolojileri alanında Türkiye'nin lider yazılım şirketi olmak 
                  ve uluslararası pazarlarda tanınan güvenilir bir marka haline gelmek.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
