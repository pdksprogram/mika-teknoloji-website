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

// Aynı içeriği birden çok adresten veren sayfaların TEK asıl adresi. Eski adresler
// vercel.json'da 301 ile buraya gider; rota uygulamada kalır ve canonical ile buraya işaret eder,
// böylece site haritasına (scripts/prerender.mjs: yalnız canonical'ı kendisi olan adresler) girmez.
// 301'li eski adresler: /cozumler/pdks, /personel-devam-kontrol-sistemi -> pdks;
// /parmak-izi-takip-sistemi -> parmakIzi; /yuz-tanima-sistem -> yuzTanima;
// /turnike-sistemleri -> turnike; /cozumler/bekci-kontrol, /urunler/bekci-tur-kontrol -> bekci.
export const ASIL_ADRES = {
  pdks: '/pdks-programi',
  parmakIzi: '/urunler/parmak-izi-tanima',
  yuzTanima: '/urunler/yuz-tanima',
  turnike: '/urunler/turnike',
  bekci: '/qr-bekci',
} as const;

// Paylaşım görseli (og:image). Boyut gerçek dosya ölçüsüdür; varsayılan 1200x630 kırpılmış ürün görselidir.
export interface PaylasimGorseli {
  src: string;
  w: number;
  h: number;
  alt?: string;
}
export const VARSAYILAN_GORSEL: PaylasimGorseli = {
  src: '/og-varsayilan.jpg',
  w: 1200,
  h: 630,
  alt: 'Mika Teknoloji PDKS, turnike ve geçiş kontrol sistemleri',
};
const mutlak = (src: string) => (src.startsWith('http') ? src : `${SITE_KOKU}${src}`);

// og:image + boyut + twitter kartı. Sayfa kendi görselini verirse varsayılanın yerine geçer (Helmet: son yazan kazanır).
export function PaylasimEtiketleri({ gorsel = VARSAYILAN_GORSEL }: { gorsel?: PaylasimGorseli }) {
  return (
    <Helmet>
      <meta property="og:image" content={mutlak(gorsel.src)} />
      <meta property="og:image:width" content={String(gorsel.w)} />
      <meta property="og:image:height" content={String(gorsel.h)} />
      <meta property="og:image:alt" content={gorsel.alt || VARSAYILAN_GORSEL.alt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={mutlak(gorsel.src)} />
    </Helmet>
  );
}

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  jsonLd?: any;
  noindex?: boolean;
  gorsel?: PaylasimGorseli;
}

export default function SEO({
  title = 'PDKS Personel Takip, Kart & QR Geçiş | Mika Teknoloji',
  description = 'PDKS personel devam, kart & QR geçiş, otopark ve bekçi tur çözümleri. Canlı izleme, raporlama ve entegrasyon.',
  canonical,
  jsonLd = null,
  noindex = false,
  gorsel
}: SEOProps) {
  // Kanonik adres sorgu dizesiz, sabit alan adıyla kurulur; ön-render ve tarayıcıda aynı sonucu verir.
  const [location] = useLocation();
  const url = canonical || kanonikAdres(location);
  const dil = useSeciliDil();

  return (
    <>
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

      {/* Twitter (kart türü ve görsel PaylasimEtiketleri'nden) */}
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
    {gorsel && <PaylasimEtiketleri gorsel={gorsel} />}
    </>
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
        <meta property="og:site_name" content="Mika Teknoloji" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Kanonik yol={location} />
      <PaylasimEtiketleri />
    </>
  );
}
