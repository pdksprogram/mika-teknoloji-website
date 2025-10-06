import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Zap, CheckCircle, ArrowLeft, Settings, Thermometer } from "lucide-react";

export default function PTGeniusDetailPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const specs = [
    { label: "Açılma Süresi", value: "3 saniye*" },
    { label: "Çalışma Ortamı", value: "-20°C / +55°C" },
    { label: "Max. Kol Boyu", value: "5,50 metre" },
    { label: "Kol Tipi", value: "Yandan Kollu" },
    { label: "Koruma Sınıfı", value: "IP44" },
    { label: "Motor Ağırlığı", value: "20 Kg" },
    { label: "Montaj Tipi", value: "Yere/Duvara Montaj" }
  ];

  const features = [
    "3 saniye ultra hızlı açılma",
    "Geniş sıcaklık aralığı",
    "5.5 metreye kadar kol uzunluğu",
    "Yandan kollu tasarım",
    "Esnek montaj seçenekleri",
    "Hafif motor yapısı",
    "Dayanıklı mekanizma",
    "Düşük enerji tüketimi"
  ];

  return (
    <>
      <Helmet>
        <title>MT Genius Bariyer Sistemi - 3 Saniye Hızlı Açılma | Mika Teknoloji</title>
        <meta name="description" content="MT Genius bariyer sistemi 3 saniye ultra hızlı açılma, 5.5 metre kol uzunluğu ve geniş sıcaklık aralığı ile yüksek performans sağlar." />
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
                    src="https://betaper.com.tr/bariyer-sistemleri/ptgenius-bariyersistemi.jpg"
                    alt="MT Genius Bariyer Sistemi"
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-500 shadow-lg mb-4">
                  <Zap className="w-4 h-4 text-white mr-2" />
                  <span className="text-white font-bold text-sm">Q3 - ULTRA HIZLI</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                  MT Genius Bariyer Sistemi
                </h1>
                <p className="text-xl text-primary font-semibold mb-6">
                  3 Saniye Hızlı Geçiş - Yandan Kollu Teknoloji
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-rose-500 rounded-full"></div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Ultra hızlı 3 saniye açılma süresi ve 5.5 metre kol uzunluğu ile yoğun trafikte maksimum verimlilik sağlar. Geniş sıcaklık aralığı sayesinde her iklim koşulunda güvenilir performans sunar.
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
                  <p className="text-xs text-gray-500 mt-4">
                    * Açılma süreleri yavaşlamasız olarak verilmiştir.
                  </p>
                </CardContent>
              </Card>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Özellikler ve Avantajlar</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="border-0 bg-gradient-to-br from-red-50 to-rose-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Thermometer className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Geniş Sıcaklık Aralığı</h4>
                      <p className="text-gray-600">
                        -20°C ile +55°C arasında sorunsuz çalışma kabiliyeti sayesinde her mevsim ve iklim koşulunda güvenilir performans sergiler.
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
