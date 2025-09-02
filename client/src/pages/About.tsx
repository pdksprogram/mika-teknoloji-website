import { Building, Users, Award, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import teamPhoto from "@assets/image_1756821522514.png";

export default function About() {
  const stats = [
    { icon: Users, value: "10,000+", label: "Müşteri Portföyü" },
    { icon: Building, value: "15+", label: "Yıllık Deneyim" },
    { icon: Globe, value: "Türkiye", label: "Çapında Hizmet" },
    { icon: Award, value: "#1", label: "PDKS Çözümleri" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Vision Statement */}
        <div className="text-center mb-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-8 leading-tight" data-testid="about-title">
              "Hedefimiz, Türkiye'nin en güvenilir teknoloji markalarından biri olup, PDKS sektöründe inovatif, yenilikçi ve lider kimliğimizle yeni başarılara imza atmak."
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Mika Teknoloji Ekibi
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
              data-testid="contact-button"
            >
              <a href="/iletisim">Hemen İletişime Geç</a>
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
            burada çalışmayı seviyoruz =)
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
            hikayemiz
          </h2>
          
          <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
            <p>
              Mika Teknoloji Kontrol Sistemleri, 2008 yılında İstanbul'da kurulan ve PDKS (Personel Devam Kontrol Sistemi) 
              alanında uzmanlaşmış yenilikçi bir teknoloji şirketidir. Kuruluşumuzdan bu yana, işletmelerin insan kaynakları 
              yönetimini dijitalleştirmek ve verimliliğini artırmak için çalışıyoruz.
            </p>
            
            <p>
              Binlerce müşteri portföyü ile Türkiye'nin kurumsal işgücü ve erişim kontrol yönetimine yönelik çözümler 
              sunan güvenilir teknoloji ortağınızdır. Perpa Ticaret Merkezi'ndeki modern ofisimizden, ülke genelindeki 
              müşterilerimize 7/24 hizmet vermekteyiz.
            </p>
            
            <p>
              Web tabanlı PDKS çözümlerimiz, QR kodlu bekçi kontrol sistemlerimiz, turnike entegrasyonlarımız ve 
              biyometrik erişim kontrol sistemlerimizle işletmelerin dijital dönüşüm sürecinde yanlarında yer alıyoruz. 
              Mika Teknoloji olarak, teknolojinin gücünü insan kaynaklarının hizmetine sunarak, daha verimli ve 
              şeffaf iş süreçleri oluşturuyoruz.
            </p>

            <div className="bg-slate-50 p-8 rounded-xl mt-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Vizyonumuz
              </h3>
              <p className="text-slate-600">
                İnsan kaynakları ve iş gücü planlama alanında Türkiye'nin en güvenilir yazılım çözümlerinden biri olmak 
                ve müşterilerimizin dijital dönüşüm sürecinde öncü teknolojiler sunmak.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
