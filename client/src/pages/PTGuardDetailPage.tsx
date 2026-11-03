import { motion } from "framer-motion";
import { Kirinti } from "@/components/PdksIcerik";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import CtaDugmeleri from "@/components/CtaDugmeleri";
import { CheckCircle, Lock } from "lucide-react";
import UrunEkIcerik from "@/components/UrunEkIcerik";
import { EK, BARIYER_TABLOSU } from "@/lib/urunEkIcerik";

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
        <title>MT Guard Bariyer Sistemi – Yüksek Güvenlik | Mika</title>
        <meta name="description" content="MT Guard bariyer sistemi: yüksek güvenlik seviyesi sağlayan koruma çözümü. Sağlam ve dayanıklı yapısıyla güvenlik önceliği olan alanlar için." />
        <meta property="og:title" content="MT Guard Bariyer Sistemi – Yüksek Güvenlik | Mika" />
        <meta property="og:description" content="MT Guard bariyer sistemi: yüksek güvenlik seviyesi sağlayan koruma çözümü. Sağlam ve dayanıklı yapısıyla güvenlik önceliği olan alanlar için." />
      </Helmet>

      <Kirinti maddeler={[{ ad: "Ana Sayfa", yol: "/" }, { ad: "Ürünler", yol: "/urunler" }, { ad: "Bariyer Sistemleri", yol: "/urunler/bariyer-sistemleri" }, { ad: "MT Guard Bariyer Sistemi", yol: "/urunler/pt-guard-bariyer" }]} />
      <section className="pt-6 pb-20 bg-slate-50">
        <div className="container mx-auto px-4">

          <div>
            <motion.div {...fadeInUp} initial={false} className="space-y-8 lg:grid lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-x-12 lg:items-start">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                  MT Guard Bariyer Sistemi
                </h1>
                <p className="text-xl text-slate-600 mb-6">
                  Yüksek Güvenlik Seviyesi - Profesyonel Koruma
                </p>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
                <CtaDugmeleri tur="donanim" sinif="mt-6" sayfa="PT Guard Bariyer Page" olayOnek="pt_guard_bariyer" />
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

              <Card className="lg:col-start-2 lg:row-start-1 lg:row-[span_12_/_span_12] lg:!mt-0 lg:sticky lg:top-28 border-0 shadow-lg">
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
      <UrunEkIcerik kullanim={EK["/urunler/pt-guard-bariyer"].kullanim} tablolar={[BARIYER_TABLOSU]} sss={EK["/urunler/pt-guard-bariyer"].sss} aktifYol="/urunler/pt-guard-bariyer" />
    </>
  );
}
