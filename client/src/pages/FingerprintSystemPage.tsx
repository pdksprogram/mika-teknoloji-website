import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Clock, Users } from "lucide-react";
import { Link } from "wouter";

const benefits = [
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Yüksek Güvenlik",
    description: "Benzersiz parmak izi verileri ile %99.9 doğruluk oranı"
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Hızlı Erişim",
    description: "1 saniye altında tanıma ve erişim kontrolü"
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Çoklu Kullanıcı",
    description: "Binlerce kullanıcı kapasitesi ve kolay yönetim"
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
    title: "Kolay Entegrasyon",
    description: "Mevcut PDKS sistemlerinize sorunsuz entegrasyon"
  }
];

export default function FingerprintSystemPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Parmak İzli Personel Takip Sistemi
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              En gelişmiş biyometrik teknoloji ile güvenli ve hızlı personel takip çözümleri
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-slate-100 px-8 py-4 text-lg font-semibold"
                data-testid="fingerprint-cta-demo"
              >
                <Link href="/iletisim" className="flex items-center">
                  ÜCRETSİZ DEMO TALEBİ
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
                data-testid="fingerprint-cta-contact"
              >
                <Link href="/iletisim">FİYAT BİLGİSİ AL</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neden Parmak İzi Sistemi?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern işletmeler için en güvenli ve pratik personel takip çözümü
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}