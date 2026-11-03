import { motion } from "framer-motion";
import { Kirinti } from "@/components/PdksIcerik";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, Lock } from "lucide-react";

export default function PTGuardDetailPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const features = [
    "Yüksek güvenlik seviyesi",
    "Sağlam yapı ve dayanıklılık",
    "Güvenlik öncelikleri için özel tasarım",
    "Profesyonel koruma sistemi",
    "Uzun ömürlü mekanizma",
    "Her türlü hava koşuluna dayanıklı",
    "Estetik ve fonksiyonel tasarım",
    "Kolay bakım ve servis"
  ];

  return (
    <>
      <Helmet>
        <title>MT Guard Bariyer Sistemi - Yüksek Güvenlik Çözümü | Mika Teknoloji</title>
        <meta name="description" content="MT Guard bariyer sistemi ile yüksek güvenlik seviyesi sağlayan profesyonel koruma çözümü. Sağlam yapısı ve dayanıklılığı ile güvenlik önceliği olan alanlarda ideal." />
      </Helmet>

      <Kirinti maddeler={[{ ad: "Ana Sayfa", yol: "/" }, { ad: "Ürünler", yol: "/urunler" }, { ad: "Bariyer Sistemleri", yol: "/urunler/bariyer-sistemleri" }, { ad: "MT Guard Bariyer Sistemi", yol: "/urunler/pt-guard-bariyer" }]} />
      <section className="pt-6 pb-20 bg-slate-50">
        <div className="container mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div {...fadeInUp} className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <img 
                  src="/images/bariyer/pt-guard-bariyer.jpg"
                  alt="MT Guard Bariyer Sistemi"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <img 
                  src="/images/bariyer/pt-guard-detay.jpg"
                  alt="MT Guard Bariyer Detay"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-8 lg:sticky lg:top-24">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                  MT Guard Bariyer Sistemi
                </h1>
                <p className="text-xl text-slate-600 mb-6">
                  Yüksek Güvenlik Seviyesi - Profesyonel Koruma
                </p>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                MT Guard bariyer sistemi, yüksek güvenlik gerektiren alanlarda profesyonel koruma sağlar. Sağlam yapısı ve dayanıklı mekanizması ile güvenlik öncelikli projelerde tercih edilen çözümdür.
              </p>

              <Card className="border-0 bg-slate-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Lock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">Yüksek Güvenlik</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Askeri tesisler, özel güvenlik bölgeleri, kritik altyapılar ve yüksek güvenlik gerektiren tüm alanlarda kullanılmak üzere özel olarak tasarlanmıştır. Yüksek dayanıklılık ve güvenilir performans sağlar.
                      </p>
                    </div>
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

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-bold text-slate-900 mb-3">Uygulama Alanları</h4>
                  <ul className="space-y-2">
                    {["Askeri Tesisler", "Kritik Altyapılar", "Özel Güvenlik Bölgeleri", "Endüstriyel Tesisler"].map((area, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {area}
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
