import { Helmet } from 'react-helmet-async';

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
  const url = typeof window !== 'undefined' ? (canonical || window.location.href) : (canonical || 'https://mikateknoloji.com/');
  
  return (
    <Helmet>
      <html lang="tr" />
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