import { Building, Users, Award, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  const stats = [
    { icon: Users, value: "100,000+", label: "Müşteri Portföyü" },
    { icon: Building, value: "30+", label: "Yıllık Deneyim" },
    { icon: Globe, value: "Türkiye", label: "Çapında Hizmet" },
    { icon: Award, value: "#1", label: "PDKS Çözümleri" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6" data-testid="about-title">
            Hakkımızda
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            1993 yılından beri Türkiye'nin önde gelen PDKS ve kontrol sistemleri uzmanıyız
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-slate-800">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">{stat.label}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800">Hikayemiz</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-slate-600 mb-6">
                Mika Teknoloji Kontrol Sistemleri, modern teknoloji çözümleri sunan yenilikçi bir şirkettir. İstanbul 
                merkezli ofisimizden müşterilerimize en güncel dijital çözümler sunmaktayız.
              </p>
              <p className="text-slate-600 mb-6">
                Binlerce müşteri portföyü ile Türkiye'nin kurumsal işgücü ve erişim kontrol yönetimine 
                yönelik çözümler sunan güvenilir teknoloji ortağınızdır.
              </p>
              <p className="text-slate-600">
                Mika Teknoloji, geliştirdiği yazılım ve donanım çözümleri ile işletmelerin işgücünü daha verimli 
                kullanmasına, çalışan maliyetlerinin kontrol altında tutulmasına, zamandan tasarruf edilmesine 
                ve operasyonel verimliliğin artmasına yardımcı oluyor.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
