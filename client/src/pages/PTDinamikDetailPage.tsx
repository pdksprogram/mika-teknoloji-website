import { motion } from "framer-motion";
import { Kirinti } from "@/components/PdksIcerik";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, Settings, Clock } from "lucide-react";

export default function PTDinamikDetailPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const specs = [
    { label: "Açılma Süresi", value: "3-5 saniye" },
    { label: "Kullanım Alanı", value: "Yoğun Trafik Noktaları" },
    { label: "Kontrol Sistemi", value: "Otomatik/Manuel" },
    { label: "Güvenlik", value: "Fotosel Korumalı" }
  ];

  const features = [
    "Hızlı açılma mekanizması",
    "Dinamik yapı tasarımı",
    "Yoğun trafik uyumlu",
    "Güvenilir performans",
    "Kolay kurulum",
    "Uzun ömürlü kullanım",
    "Düşük bakım maliyeti",
    "Geniş kol seçenekleri"
  ];

  return (
    <>
      <Helmet>
        <title>MT Dinamik Bariyer Sistemi - Yüksek Hızlı Geçiş Kontrolü | Mika Teknoloji</title>
        <meta name="description" content="MT Dinamik bariyer sistemi ile hızlı açılma süresi ve dinamik yapısı sayesinde yoğun trafiğe sahip alanlarda ideal güvenlik çözümü. Otopark ve geçiş noktalarında mükemmel performans." />
      </Helmet>

      <Kirinti maddeler={[{ ad: "Ana Sayfa", yol: "/" }, { ad: "Ürünler", yol: "/urunler" }, { ad: "Bariyer Sistemleri", yol: "/urunler/bariyer-sistemleri" }, { ad: "MT Dinamik Bariyer Sistemi", yol: "/urunler" }]} />
      <section className="pt-6 pb-20 bg-slate-50">
        <div className="container mx-auto px-4">

          <div className="max-w-3xl">
            <motion.div {...fadeInUp} initial={false} className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                  MT Dinamik Bariyer Sistemi
                </h1>
                <p className="text-xl text-slate-600 mb-6">
                  Yüksek Hızlı Geçiş Kontrolü
                </p>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Hızlı açılma süresi ve dinamik yapısı ile yoğun trafiğe sahip alanlarda ideal çözüm sunar. Modern tasarımı ve güvenilir performansı ile otopark ve geçiş noktalarında mükemmel performans sağlar.
              </p>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Settings className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-slate-900">Teknik Özellikler</h3>
                  </div>
                  <div className="space-y-4">
                    {specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                        <span className="text-gray-600 font-medium">{spec.label}</span>
                        <span className="text-slate-900 font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Özellikler ve Avantajlar</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-lg bg-slate-900 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="border-0 bg-slate-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Hızlı Kurulum</h4>
                      <p className="text-gray-600">
                        Profesyonel ekibimiz tarafından hızlı ve sorunsuz kurulum hizmeti sunulmaktadır. Sistem devreye alındıktan sonra detaylı eğitim verilir.
                      </p>
                    </div>
                  </div>
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
