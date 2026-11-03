import { Card } from "@/components/ui/card";
import SEO from "@/seo/SEO";
import { Kirinti, kirintiJsonLd, type KirintiMaddesi } from "@/components/PdksIcerik";

const KIRINTI: KirintiMaddesi[] = [
  { ad: "Ana Sayfa", yol: "/" },
  { ad: "Hakkımızda", yol: "/hakkimizda" },
];

export default function About() {
  const stats = [
    { value: "İstanbul", label: "Merkez ofis" },
    { value: "Türkiye geneli", label: "Hizmet alanı" },
    { value: "Web PDKS", label: "Yazılım" },
    { value: "Mobil PDKS", label: "Uygulama" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Hakkımızda | Mika Teknoloji"
        description="PDKS personel devam kontrol yazılımı, kartlı geçiş, turnike ve bariyer sistemleri üreten Mika Teknoloji hakkında."
        jsonLd={kirintiJsonLd(KIRINTI)}
      />
      <Kirinti maddeler={KIRINTI} icSinif="pb-4" />

      <section className="bg-slate-900 border-b-4 border-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Hakkımızda</h1>
          <p className="text-slate-300 max-w-2xl">
            İstanbul merkezli; PDKS yazılımı, geçiş kontrol, turnike ve bariyer sistemleri üreten teknoloji şirketi.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white px-6 py-5">
              <dt className="text-sm text-slate-500">{stat.label}</dt>
              <dd className="text-xl font-bold text-slate-900">{stat.value}</dd>
            </div>
          ))}
        </dl>

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
                    src="/images/gamze-deniz-toksoy.png" 
                    alt="Gamze Deniz Toksoy - Yazılım Müdürü" 
                    className="w-full h-full object-cover"
                    data-testid="leadership-photo"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center bg-slate-50">
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
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded text-sm">
                            C++
                          </span>
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded text-sm">
                            Java
                          </span>
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded text-sm">
                            ASP.NET
                          </span>
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded text-sm">
                            SQL
                          </span>
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded text-sm">
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
              <div className="p-8 text-center bg-slate-50">
                <div className="mb-6">
                  <img 
                    src="/images/about/leadership-2-kirpik.jpg" 
                    alt="Şirket Hiyerarşisi" 
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                    data-testid="hierarchy-photo"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      Tolga Akal
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
                    src="/images/about/leadership-3.png" 
                    alt="Suphi Gezgin - Mobil Yazılım Uzmanı" 
                    className="w-full h-full object-cover"
                    data-testid="suphi-photo"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center bg-slate-50">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">
                        Suphi Gezgin
                      </h3>
                      <p className="text-lg font-semibold text-primary mb-4">
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
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded text-sm">
                            Android
                          </span>
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded text-sm">
                            iOS
                          </span>
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded text-sm">
                            React Native
                          </span>
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded text-sm">
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
                          "PDKS mobil uygulamalarında kullanıcı deneyimini ön planda tutarak, 
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

        {/* Sales Manager Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Satış Müdürü
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-square md:aspect-auto">
                  <img 
                    src="/images/about/leadership-4.png" 
                    alt="Yasin Atılgan - Satış Müdürü" 
                    className="w-full h-full object-cover"
                    data-testid="yasin-photo"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center bg-slate-50">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">
                        Yasin Atılgan
                      </h3>
                      <p className="text-lg font-semibold text-primary mb-4">
                        Satış Müdürü
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-1">
                          Uzmanlık Alanı:
                        </h4>
                        <p className="text-slate-600">
                          Kurumsal Satış ve Müşteri İlişkileri Yönetimi
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-1">
                          Satış Alanları:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded text-sm">
                            PDKS Sistemleri
                          </span>
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded text-sm">
                            Erişim Kontrol
                          </span>
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded text-sm">
                            Guard MX
                          </span>
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded text-sm">
                            Turnike Sistemleri
                          </span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-1">
                          Hizmet Alanları:
                        </h4>
                        <ul className="text-slate-600 space-y-1 text-sm">
                          <li>• Kurumsal Çözüm Danışmanlığı</li>
                          <li>• Teknik Ürün Sunumları</li>
                          <li>• Proje Yönetimi ve Koordinasyon</li>
                          <li>• Müşteri Destek ve İlişki Yönetimi</li>
                          <li>• Satış Sonrası Teknik Destek</li>
                        </ul>
                      </div>
                      
                      <div className="pt-2">
                        <p className="text-slate-600 italic">
                          "Müşterilerimizin ihtiyaçlarını anlamak ve doğru teknoloji çözümlerini sunmak 
                          bizim en önemli önceliğimiz. Her projede uzun vadeli ortaklık hedefliyoruz."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
            Kurumsal Hikayemiz
          </h2>
          
          <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
            <p>
              Mika Teknoloji Kontrol Sistemleri, İstanbul merkezli ve PDKS (Personel Devam Kontrol Sistemi)
              alanında uzmanlaşmış bir teknoloji şirketidir. Kurumsal müşterilerimizin insan kaynakları
              yönetim süreçlerini dijitalleştirmek ve operasyonel verimliliği artırmak amacıyla kapsamlı çözümler sunmaktayız.
            </p>

            <p>
              İş gücü yönetimi ve erişim kontrol sistemleri alanında Perpa Ticaret Merkezi A Blok'taki merkez ofisimizden
              Türkiye genelindeki müşterilerimize hizmet veriyoruz.
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
              
              <div className="bg-slate-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Vizyonumuz
                </h3>
                <p className="text-slate-600">
                  İnsan kaynakları ve iş gücü yönetimi teknolojileri alanında güvenilir bir yazılım markası olmak
                  ve uluslararası pazarlarda tanınmak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
