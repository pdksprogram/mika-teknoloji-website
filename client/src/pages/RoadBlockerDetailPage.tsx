import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldAlert, CheckCircle, ArrowLeft, Lock, Sun } from "lucide-react";

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
        <title>Road Blocker Sistem - Yol Kesici Güvenlik Bariyeri | Mika Teknoloji</title>
        <meta name="description" content="Road Blocker yol kesici sistemi ile terör eylemlerine karşı maksimum koruma. Elektronik kontrollü hidrolik sistem, güneş enerjili LED aydınlatma ve yüksek dayanıklılık." />
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
            <motion.div {...fadeInUp} className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <img 
                  src="https://betaper.com.tr/bariyer-sistemleri/roadblocker.jpg"
                  alt="Road Blocker Sistem"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <img 
                  src="https://betaper.com.tr/bariyer-sistemleri/roadblocker_teknik.jpg"
                  alt="Road Blocker Teknik Detay"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-8 lg:sticky lg:top-24">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-500 shadow-lg mb-4">
                  <ShieldAlert className="w-4 h-4 text-white mr-2" />
                  <span className="text-white font-bold text-sm">Q7 - ROAD BLOCKER</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                  Road Blocker Sistem
                </h1>
                <p className="text-xl text-primary font-semibold mb-6">
                  Yol Kesici Güvenlik Sistemi - Maksimum Koruma
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-teal-500 rounded-full"></div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Road Blocker, yol kesici olarak da bilinen, yolu araç geçişlerine kapatan ve kontrolünü sağlayan elektronik kontrollü hidrolik sistemdir.
              </p>

              <Card className="border-0 bg-gradient-to-br from-cyan-50 to-teal-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Lock className="w-8 h-8 text-cyan-600 flex-shrink-0 mt-1" />
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
                      <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center flex-shrink-0 mt-1">
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
                    <Sun className="w-5 h-5 text-yellow-500" />
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
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
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
