import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Droplet, CheckCircle, ArrowLeft, Settings, Shield, Wrench } from "lucide-react";

export default function MantarBariyerDetailPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const specs = [
    { label: "Kontrol/Çalışma Voltajı", value: "380 V 50-60 Hz" },
    { label: "Açılma Süresi", value: "3-5 saniye (opsiyonel)" },
    { label: "Kompresör", value: "30 Lt 50 Bar" },
    { label: "Kontrol", value: "PLC Logic" },
    { label: "Emniyet", value: "Fotosel / Loop Sensör" },
    { label: "Koruma Derecesi", value: "IP 67" },
    { label: "Yerden Yükseklik", value: "50 cm" },
    { label: "Çalışma Sıcaklığı", value: "-20°C / +60°C" },
    { label: "Ağırlık", value: "80 kg" },
    { label: "Tahrik Grubu", value: "100 bar Hidrolik" }
  ];

  const features = [
    "304 paslanmaz çelik hareketli kısım",
    "Galvaniz alt kısım yapısı",
    "Alüminyum flanşör ve kapak",
    "Yüksek güvenlik seviyesi",
    "Yatay yataklama sistemi",
    "Araç tahrip özelliği",
    "PLC Logic kontrol",
    "IP 67 koruma sınıfı",
    "Geçiş kontrol sistemleri uyumlu",
    "Manuel kullanım imkanı (el krikosu)"
  ];

  const accessories = [
    "Uzaktan Kumanda",
    "Buton",
    "Kart Geçiş Sistemi (KGS)",
    "El Krikosu (elektrik kesintisi için)"
  ];

  return (
    <>
      <Helmet>
        <title>Hidrolik Mantar Bariyer - Yüksek Güvenlik Bariyeri | Mika Teknoloji</title>
        <meta name="description" content="Hidrolik mantar bariyer sistemi ile yüksek güvenlik. 304 paslanmaz çelik, 100 bar hidrolik tahrik, IP67 koruma ve araç tahrip özelliği ile maksimum koruma." />
      </Helmet>

      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <Link href="/urunler/bariyer-sistemleri">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Bariyer Sistemlerine Dön
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div {...fadeInUp}>
              <div className="sticky top-24">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <img 
                    src="https://betaper.com.tr/bariyer-sistemleri/mantar-bariyerler.jpg"
                    alt="Hidrolik Mantar Bariyer"
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-pink-500 shadow-lg mb-4">
                  <Droplet className="w-4 h-4 text-white mr-2" />
                  <span className="text-white font-bold text-sm">Q6 - HİDROLİK</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                  Hidrolik Mantar Bariyer
                </h1>
                <p className="text-xl text-primary font-semibold mb-6">
                  Yüksek Güvenlik - 100 Bar Hidrolik Sistem
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-pink-500 rounded-full"></div>
              </div>

              <Card className="border-0 bg-gradient-to-br from-violet-50 to-pink-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 text-violet-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">Maksimum Güvenlik ve Dayanıklılık</h3>
                      <p className="text-gray-700 leading-relaxed">
                        HİDROLİK MANTAR BARİYER sağlam yapısı (hareketli kısım 304 paslanmaz çelik, alt kısım galvaniz, flanşör ve kapak alüminyum) ile yüksek güvenlik ihtiyacı duyulan ve bunun yanı sıra şehrin trafik akışının yoğun olduğu yerlerde yaya trafiğini aksatmadan yalnızca araç trafiğini engelleyecek şekilde tasarlanmıştır. Araç çarpması durumunda, mantar bariyer yatay yataklama sistemiyle, aracın önemli kısımlarını tahrip eder ve böylece araç hareket edemez.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Settings className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-slate-900">Teknik Özellikler</h3>
                  </div>
                  <div className="space-y-3">
                    {specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                        <span className="text-gray-600 text-sm">{spec.label}</span>
                        <span className="text-slate-900 font-semibold text-sm">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Özellikler ve Avantajlar</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Wrench className="w-5 h-5 text-violet-600" />
                    <h4 className="font-bold text-slate-900">Standart Aksesuarlar</h4>
                  </div>
                  <ul className="space-y-2">
                    {accessories.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/iletisim" className="flex-1">
                  <Button className="w-full h-12 text-base" size="lg">
                    Teklif Alın
                  </Button>
                </Link>
                <Link href="/urunler/bariyer-sistemleri" className="flex-1">
                  <Button variant="outline" className="w-full h-12 text-base" size="lg">
                    Diğer Modeller
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
