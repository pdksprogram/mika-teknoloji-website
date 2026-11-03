import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

// Tanımsız adresler: Header ve Footer App.tsx'te ortak; burada yalnız gövde.
export default function NotFound() {
  return (
    <main className="bg-white">
      <Helmet>
        <title>Sayfa bulunamadı | Mika Teknoloji</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <section className="container mx-auto px-4 py-24 text-center">
        <p className="text-sm font-semibold text-slate-500 mb-3">404</p>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Sayfa bulunamadı</h1>
        <p className="text-lg text-slate-600 mb-10">Aradığınız sayfa taşınmış ya da kaldırılmış olabilir.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">Ana Sayfa</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/pdks-programi">PDKS Programı</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
