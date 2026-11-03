import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

// Tanımsız adresler: Header ve Footer App.tsx'te ortak; burada yalnız gövde.
export default function NotFound() {
  return (
    <main className="bg-white">
      <Helmet>
        <title>Sayfa bulunamadı | Mika Teknoloji</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <section className="container mx-auto px-4 py-24 text-center">
        <p className="text-sm font-semibold text-primary mb-3">404</p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Sayfa bulunamadı</h1>
        <p className="text-lg text-gray-600 mb-10">Aradığınız sayfa taşınmış ya da kaldırılmış olabilir.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-primary hover:opacity-90 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-opacity"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/pdks-programi"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
          >
            PDKS Programı
          </Link>
        </div>
      </section>
    </main>
  );
}
