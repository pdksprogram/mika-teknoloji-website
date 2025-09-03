import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  jsonLd?: any;
}

export default function SEO({
  title = 'PDKS Personel Takip, Kart & QR Geçiş | Mika Teknoloji',
  description = 'PDKS personel devam, kart & QR geçiş, otopark ve bekçi tur çözümleri. Canlı izleme, raporlama ve entegrasyon.',
  canonical = typeof window !== 'undefined' ? window.location.href : 'https://mikateknoloji.com/',
  jsonLd = null
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}