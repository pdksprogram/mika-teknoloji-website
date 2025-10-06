import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AlertTriangle, CheckCircle, ArrowLeft, Shield, Flame } from "lucide-react";

export default function TuzaklarDetailPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const tuzakFeatures = [
    "Ters yönden girişlere izin vermez",
    "Manuel ve otomatik çalışma seçenekleri",
    "Yangın güvenlik sistemi entegrasyonu",
    "Acil durumlarda otomatik kapanma",
    "Sağlam çelik konstrüksiyon",
    "Düşük bakım gereksinimi"
  ];

  const kapanFeatures = [
    "4 metrelik standart kapama genişliği",
    "Seyyar kullanım imkanı",
    "Hızlı konuşlandırma",
    "Lastik patlatma özelliği",
    "Farklı uzunluk seçenekleri",
    "Güvenlik güçleri için ideal"
  ];

  return (
    <>
      <Helmet>
        <title>Tuzaklar & Kapanlar - Güvenlik Engelleme Sistemleri | Mika Teknoloji</title>
        <meta name="description" content="Tuzak ve kapan sistemleri ile ters yönden girişleri engelleyin. Manuel ve otomatik seçenekler, yangın güvenlik entegrasyonu ve seyyar kullanım imkanı." />
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
                    src="https://betaper.com.tr/bariyer-sistemleri/tuzaklar-kapanlar.jpg"
                    alt="Tuzaklar ve Kapanlar"
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-500 shadow-lg mb-4">
                  <AlertTriangle className="w-4 h-4 text-white mr-2" />
                  <span className="text-white font-bold text-sm">Q5 - GÜVENLİK</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                  Tuzaklar & Kapanlar
                </h1>
                <p className="text-xl text-primary font-semibold mb-6">
                  Güvenlik Engelleme ve Kontrol Sistemleri
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-yellow-500 rounded-full"></div>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <Shield className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Tuzaklar</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Ters yönden girişlere izin vermeyen sisteme sahip olan manuel tuzak ayrıca müşteri isteğine bağlı opsiyonel olarak üretilen yangın gibi durumlarda bıçaklarının tamamının kapatılmasına izin verecek şekilde üretilebilmektedir.
                        </p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 mt-4">
                      {tuzakFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Kapanlar</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Polislerin ve jandarma ekiplerinin kötü niyetli kişileri durdurmak için seyyar olarak kullanabileceği mükemmel bir engeldir. 4 metrelik bir yolu kapatabilecek standartlarda üretilen ürün istenildiği taktirde farklı uzunlukta üretilebilir. Araç üzerinden geçtiği zaman lastiklerini patlatarak aracın ilerlemesini engeller.
                        </p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 mt-4">
                      {kapanFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-br from-amber-50 to-yellow-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Flame className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">Yangın Güvenlik Entegrasyonu</h4>
                        <p className="text-gray-600">
                          Tuzak sistemleri, yangın alarm sistemi ile entegre edilerek acil durumlarda otomatik olarak devre dışı kalabilir ve güvenli geçiş sağlar.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

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
