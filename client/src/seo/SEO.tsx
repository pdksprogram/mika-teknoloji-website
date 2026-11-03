import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';
import { useSeciliDil } from '@/hooks/useLanguage';

const SITE_KOKU = 'https://mikateknoloji.com';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  jsonLd?: any;
  noindex?: boolean;
}

export default function SEO({
  title = 'PDKS Personel Takip, Kart & QR Geçiş | Mika Teknoloji',
  description = 'PDKS personel devam, kart & QR geçiş, otopark ve bekçi tur çözümleri. Canlı izleme, raporlama ve entegrasyon.',
  canonical,
  jsonLd = null,
  noindex = false
}: SEOProps) {
  // Kanonik adres sorgu dizesiz, sabit alan adıyla kurulur; ön-render ve tarayıcıda aynı sonucu verir.
  const [location] = useLocation();
  const url = canonical || `${SITE_KOKU}${location}`;
  const dil = useSeciliDil();

  return (
    <Helmet>
      <html lang={dil} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* noindex sayfalar */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* JSON-LD */}
      {jsonLd && (
        Array.isArray(jsonLd)
          ? jsonLd.map((obj, i) => (
              <script key={i} type="application/ld+json">{JSON.stringify(obj)}</script>
            ))
          : <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
// Kendi kanonik adresini yazmayan sayfalar için varsayılan: o sayfanın kendi adresi.
// App'te rotalardan ÖNCE çizilir; sayfa kendi canonical'ını verirse Helmet onu kullanır (son yazan kazanır).
export function VarsayilanKanonik() {
  const [location] = useLocation();
  // <html lang> her sayfada dil seçimini izler (SEO bileşenini kullanmayan sayfalar dahil).
  const dil = useSeciliDil();
  return (
    <Helmet>
      <html lang={dil} />
      <link rel="canonical" href={`${SITE_KOKU}${location}`} />
    </Helmet>
  );
}
