import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, CheckCircle, ArrowLeft, Settings, Package } from "lucide-react";

export default function PTPlusDetailPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const specs = [
    { label: "Kontrol/Çalışma Voltajı", value: "220 V 50 Hz" },
    { label: "Güç Tüketimi", value: "24 V DC" },
    { label: "Açılma Süresi", value: "7 saniye" },
    { label: "Kol Uzunluğu", value: "5,25 metre" },
    { label: "Koruma Derecesi", value: "IP 54" },
    { label: "Çalışma Sıcaklığı", value: "-20°C - +60°C" },
    { label: "Boyutlar", value: "324 x 320 x 1010 mm" },
    { label: "Ağırlık", value: "40 kg" }
  ];

  const standardAccessories = [
    "Montaj Aparatı",
    "5,25 mt Kol (LED'li)",
    "Anti-Shock Rubber",
    "Reflektif Etiket",
    "Flaşör",
    "Fotosel & Fotosel Ayağı",
    "Uzaktan Kumanda"
  ];

  const optionalAccessories = [
    "Kol Çatalı",
    "Loop Dedektör",
    "RAL Kodu (Min. 5 adet)",
    "Buton",
    "Isıtıcı & Fan Ünitesi"
  ];

  return (
    <>
      <Helmet>
        <title>PT Plus Bariyer Sistemi - Profesyonel Otopark Bariyeri | Mika Teknoloji</title>
        <meta name="description" content="PT Plus bariyer sistemi 5.25 metre kol uzunluğu, LED aydınlatma ve IP54 koruma derecesi ile otopark ve geçiş kontrolü için ideal profesyonel çözüm." />
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
                    src="https://betaper.com.tr/bariyer-sistemleri/ptplus-bariyersistemi.jpg"
                    alt="PT Plus Bariyer Sistemi"
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 shadow-lg mb-4">
                  <Shield className="w-4 h-4 text-white mr-2" />
                  <span className="text-white font-bold text-sm">Q2 - PROFESYONEL</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                  PT Plus Bariyer Sistemi
                </h1>
                <p className="text-xl text-primary font-semibold mb-6">
                  Güvenilir Performans, Uzun Ömür
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full"></div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                5.25 metre kol uzunluğu ile geniş geçiş alanlarına uygun, LED aydınlatmalı profesyonel bariyer sistemi. IP54 koruma derecesi ile her türlü hava koşulunda güvenilir çalışma sağlar.
              </p>

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

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-0 bg-green-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Package className="w-5 h-5 text-green-600" />
                      <h4 className="font-bold text-slate-900">Standart Aksesuarlar</h4>
                    </div>
                    <ul className="space-y-2">
                      {standardAccessories.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-blue-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Package className="w-5 h-5 text-blue-600" />
                      <h4 className="font-bold text-slate-900">Opsiyonel Aksesuarlar</h4>
                    </div>
                    <ul className="space-y-2">
                      {optionalAccessories.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
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
