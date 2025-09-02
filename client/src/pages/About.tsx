import { Building, Users, Award, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import teamPhoto from "@assets/image_1756821522514.png";

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
