// Sitede tanımlı adresler: App.tsx'teki <Route path="..."> listesinin birebir kopyası.
// scripts/prerender.mjs derlemede bu listeyi App.tsx ile karşılaştırır; fark varsa derleme durur.
// Menü verisinde karşılığı olmayan adres tutulabilir, ama menüde gösterilmez (menuSuz).
export const TANIMLI_ROTALAR: readonly string[] = [
  "/",
  "/hakkimizda",
  "/cozumler",
  "/urunler",
  "/cozumler/pdks",
  "/access-control",
  "/urunler/parmak-izi-tanima",
  "/urunler/yuz-tanima",
  "/personel-devam-kontrol-sistemi",
  "/parmak-izi-takip-sistemi",
  "/yuz-tanima-sistem",
  "/pdks-programi",
  "/kartli-gecis-sistemi",
  "/qr-gecis",
  "/turnike-sistemleri",
  "/otopark-otomasyon",
  "/urunler/gecis-kontrol",
  "/qr-bekci",
  "/cozumler/bekci-kontrol",
  "/urunler/turnike",
  "/urunler/bel-tipi-turnike",
  "/urunler/boy-tipi-turnike",
  "/urunler/engelli-turnike",
  "/urunler/hizli-gecis-turnike",
  "/urunler/mt-sc324b-vip-turnike",
  "/urunler/mt-230mvip-slim-vip-turnike",
  "/urunler/mt-t80-yaprak-turnike",
  "/urunler/hizli-gecis-t300-hg20-detay",
  "/urunler/hizli-gecis-t300-hg20-chubby-detay",
  "/urunler/hizli-gecis-t300-hg40-detay",
  "/urunler/hizli-gecis-t350-hg60-detay",
  "/urunler/hizli-gecis-t350-hg60-chubby-detay",
  "/urunler/hizli-gecis-t300-hg120-detay",
  "/urunler/hizli-gecis-t300-hg120-chubby-detay",
  "/urunler/hizli-gecis-t300-slim-kisa-detay",
  "/urunler/hizli-gecis-t300-slim-uzun-detay",
  "/urunler/mt-250-turnike",
  "/urunler/t250-eco-turnike",
  "/urunler/t345-turnike",
  "/urunler/jetonlu-t250-turnike",
  "/urunler/mt2500d-single-3-kollu",
  "/urunler/mt2500k-kristal",
  "/urunler/mt1350-yarim-boy",
  "/urunler/bekci-tur-kontrol",
  "/urunler/personel-takip",
  "/urunler/qr-pdks",
  "/urunler/bariyer-sistemleri",
  "/urunler/magaza-personel-takip",
  "/urunler/pt-plus-bariyer",
  "/urunler/pt-genius-bariyer",
  "/urunler/pt-guard-bariyer",
  "/urunler/tuzaklar-kapanlar",
  "/urunler/mantar-bariyer",
  "/urunler/road-blocker",
  "/referanslar",
  "/blog",
  "/blog/puantaj-nasil-tutulur",
  "/blog/vardiya-plani-nasil-hazirlanir",
  "/blog/qr-kod-ile-personel-giris-cikis",
  "/blog/pdks-sistemleri-nedir-2025-rehberi",
  "/iletisim",
  "/videolar",
  "/mobil-gizlilik-sozlesmesi.php",
  "/kvkk",
  "/hizmet-sartlari",
  "/veri-silme",
  "/puantaj-programi",
  "/vardiya-takip-programi",
  "/qr-pdks",
  "/fazla-mesai-hesaplama",
];

const ROTA_KUMESI = new Set(TANIMLI_ROTALAR);

export interface MenuKalemi {
  name: string;
  href: string;
}

// Dış adres (https://...) her zaman geçerlidir; iç adres yalnız tanımlı rotaysa geçerlidir.
// Sorgu ve # parçası karşılaştırmaya girmez.
export function rotaTanimli(href: string): boolean {
  if (/^https?:\/\//i.test(href)) return true;
  const yol = href.split(/[?#]/)[0].replace(/\/+$/, "") || "/";
  return ROTA_KUMESI.has(yol);
}

// Menü verisini görünür hâle getirir: tanımsız adres, aynı adres ve aynı ad (tüm menüde)
// ikinci kez gösterilmez; boş kalan sütun düşer. Veri değişmez, yeni nesne döner.
export function menuSuz(menu: Record<string, MenuKalemi[]>): [string, MenuKalemi[]][] {
  const gorulenAdres = new Set<string>();
  const gorulenAd = new Set<string>();
  const sonuc: [string, MenuKalemi[]][] = [];
  for (const [sutun, kalemler] of Object.entries(menu)) {
    const gorunen = kalemler.filter((k) => {
      const ad = k.name.trim().toLowerCase();
      if (!rotaTanimli(k.href) || gorulenAdres.has(k.href) || gorulenAd.has(ad)) return false;
      gorulenAdres.add(k.href);
      gorulenAd.add(ad);
      return true;
    });
    if (gorunen.length) sonuc.push([sutun, gorunen]);
  }
  return sonuc;
}
