import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';
import { useSeciliDil } from '@/hooks/useLanguage';

const SITE_KOKU = 'https://mikateknoloji.com';

// Kanonik adres: sondaki eğik çizgi atılır (kök "/" hariç). Ön-render rotayı eğik çizgisiz yazar;
// statik sunucu /hakkimizda -> /hakkimizda/ yönlendirse de tarayıcı aynı adresi üretir.
export function kanonikAdres(yol: string): string {
  const temiz = yol.replace(/\/+$/, () => '');
  return `${SITE_KOKU}${temiz || '/'}`;
}

// Aynı içeriği birden çok adresten veren sayfaların TEK asıl adresi. Diğer adresler ya
// vercel.json'da 301 ile buraya gider (PDKS) ya da canonical ile buraya işaret eder.
// Site haritası (scripts/prerender.mjs) yalnız canonical'ı kendisi olan adresleri yazar.
// Parmak izi / yüz tanıma: asıl adres iç linklerin gittiği /urunler/... adresidir; eski
// /parmak-izi-takip-sistemi ve /yuz-tanima-sistem sayfaları canlı kalır, canonical ile buraya döner.
export const ASIL_ADRES = {
  pdks: '/pdks-programi',
  parmakIzi: '/urunler/parmak-izi-tanima',
  yuzTanima: '/urunler/yuz-tanima',
} as const;

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
  const url = canonical || kanonikAdres(location);
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
// Asıl adres (canonical) ve og:url HER ZAMAN birlikte ve aynı değerle yazılır.
// Kendi <Helmet>'ini kullanan sayfalar asıl adresi bununla verir; ayrı/sabit og:url yazılmaz.
export function Kanonik({ yol }: { yol: string }) {
  const url = kanonikAdres(yol);
  return (
    <Helmet>
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
}

// Kendi kanonik adresini yazmayan sayfalar için varsayılan: o sayfanın kendi adresi (og:url dahil).
// App'te rotalardan ÖNCE çizilir; sayfa kendi canonical'ını verirse Helmet onu kullanır (son yazan kazanır).
export function VarsayilanKanonik() {
  const [location] = useLocation();
  // <html lang> her sayfada dil seçimini izler (SEO bileşenini kullanmayan sayfalar dahil).
  const dil = useSeciliDil();
  return (
    <>
      <Helmet>
        <html lang={dil} />
      </Helmet>
      <Kanonik yol={location} />
    </>
  );
}
