import { motion } from "framer-motion";
import { Kirinti } from "@/components/PdksIcerik";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, Lock, Sun } from "lucide-react";

export default function RoadBlockerDetailPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const features = [
    "Terör eylemlerine karşı özel tasarım",
    "Elektronik kontrollü hidrolik sistem",
    "Yüksek dayanıklılık özelliği",
    "Güneş enerjili LED aydınlatma",
    "4 adet LED gece görünürlüğü",
    "Yol kesme ve kontrol sistemi",
    "Profesyonel güvenlik çözümü",
    "Tam elektronik kontrol"
  ];

  const applications = [
    "Askeri Tesisler",
    "Havalimanları",
    "Devlet Kurumları",
    "Özel Güvenlik Bölgeleri",
    "Kritik Altyapılar",
    "Sınır Kapıları"
  ];

  return (
    <>
      <Helmet>
        <title>Road Blocker – Yol Kesici Güvenlik Bariyeri | Mika</title>
        <meta name="description" content="Road blocker yol kesici sistemi ile yüksek koruma: elektronik kontrollü hidrolik sistem, güneş enerjili LED aydınlatma ve yüksek dayanıklılık." />
        <meta property="og:title" content="Road Blocker – Yol Kesici Güvenlik Bariyeri | Mika" />
        <meta property="og:description" content="Road blocker yol kesici sistemi ile yüksek koruma: elektronik kontrollü hidrolik sistem, güneş enerjili LED aydınlatma ve yüksek dayanıklılık." />
      </Helmet>

      <Kirinti maddeler={[{ ad: "Ana Sayfa", yol: "/" }, { ad: "Ürünler", yol: "/urunler" }, { ad: "Bariyer Sistemleri", yol: "/urunler/bariyer-sistemleri" }, { ad: "Road Blocker Sistem", yol: "/urunler/road-blocker" }]} />
      <section className="pt-6 pb-20 bg-slate-50">
        <div className="container mx-auto px-4">

          <div className="max-w-3xl">
            <motion.div {...fadeInUp} initial={false} className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                  Road Blocker Sistem
                </h1>
                <p className="text-xl text-slate-600 mb-6">
                  Yol Kesici Güvenlik Sistemi - Yüksek Koruma
                </p>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Road Blocker, yol kesici olarak da bilinen, yolu araç geçişlerine kapatan ve kontrolünü sağlayan elektronik kontrollü hidrolik sistemdir.
              </p>

              <Card className="border-0 bg-slate-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Lock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">Üstün Koruma</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Terör eylemlerine karşı tasarlanan bu ürün, elektronik aksamı ve diğer tüm sistem elemanları ile birlikte yüksek dayanıklılık özelliğine sahiptir. Ön cephesinde bulunan dört adet güneş enerjili LED sistemi ile gece görünürlüğü sağlanmıştır.
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
                  <div className="flex items-center gap-2 mb-4">
                    <Sun className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-slate-900">Güneş Enerjili LED Aydınlatma</h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Ön cephede bulunan 4 adet güneş enerjili LED sistemi sayesinde gece vakti mükemmel görünürlük sağlar ve enerji tasarrufu sunar.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-bold text-slate-900 mb-4">Uygulama Alanları</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {applications.map((area, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{area}</span>
                      </div>
                    ))}
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
