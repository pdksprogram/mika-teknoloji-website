import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adres",
      details: [
        "Perpa Ticaret Merkezi A Blok 4-5.Kat No:0158",
        "34384 Şişli/İstanbul"
      ]
    },
    {
      icon: Phone,
      title: "Telefon",
      details: [
        "0546 712 22 96"
      ]
    },
    {
      icon: Mail,
      title: "E-posta",
      details: [
        "info@mikateknoloji.com",
        "satis@mikateknoloji.com"
      ]
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      details: [
        "Pazartesi - Cuma: 09:00 - 18:00"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6" data-testid="contact-title">
            İletişim
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Uzman ekibimizle iletişime geçin, size en uygun çözümü birlikte bulalım
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg text-slate-800">{info.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {info.details.map((detail, detailIndex) => (
                      <CardDescription key={detailIndex} className="text-slate-600">
                        {detail}
                      </CardDescription>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-8 space-y-4">
              <Button 
                asChild 
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                data-testid="whatsapp-button"
              >
                <a href="https://wa.link/j312qg" target="_blank" rel="noopener noreferrer">
                  WhatsApp ile İletişim
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="w-full"
                data-testid="phone-call-button"
              >
                <a href="tel:+905467122296">
                  <Phone className="mr-2 h-4 w-4" />
                  Hemen Ara
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">Teklif İste</CardTitle>
                <CardDescription>
                  Formu doldurun, uzmanlarımız en kısa sürede size ulaşsın
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" data-testid="contact-form">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Ad *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Adınız" 
                        required 
                        data-testid="input-first-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Soyad *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Soyadınız" 
                        required 
                        data-testid="input-last-name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-posta *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="ornek@email.com" 
                        required 
                        data-testid="input-email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+90 5XX XXX XX XX" 
                        required 
                        data-testid="input-phone"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Şirket</Label>
                    <Input 
                      id="company" 
                      placeholder="Şirket adınız" 
                      data-testid="input-company"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Konu *</Label>
                    <Input 
                      id="subject" 
                      placeholder="İhtiyacınızı özetleyin" 
                      required 
                      data-testid="input-subject"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mesaj *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Detaylı açıklama yazın..." 
                      rows={5} 
                      required 
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    data-testid="submit-button"
                  >
                    Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Location */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800 flex items-center">
                <MapPin className="mr-3 h-6 w-6 text-primary" />
                Konum
              </CardTitle>
              <CardDescription>
                Perpa Ticaret Merkezi'nde merkez ofisimiz
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
                <p className="text-slate-500">Harita buraya gelecek</p>
              </div>
              <div className="mt-4 flex justify-center">
                <Button 
                  asChild 
                  variant="outline"
                  data-testid="map-button"
                >
                  <a 
                    href="https://maps.app.goo.gl/kn83Z499DR7uEu3u9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Haritada Göster
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
