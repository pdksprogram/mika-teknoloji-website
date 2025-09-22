// Cache-busting timestamp - Tarayıcıyı zorla yeni resimleri yükletmek için
const CACHE_BUST = Date.now();

// Resim mapping sistemi - Parmak izi gibi direkt yollar (Production'da çalışır)
export const IMAGES = {
  t1: "/mt-arac-gorseli.png", // Alet/araç görseli
  t2: "/mt-boy-tipi-turnike.png", // Boy tipi turnike sistemi
  t3: "/mt-bel-tipi-turnike.png", // Bel tipi turnike cihazları
  t4: "/mt-engelli-turnike.png", // Engelli turnikeleri
  t5: "/mt-hizli-gecis-turnike.png", // Hızlı geçiş turnikeleri
  t6: "/mt-hijyen-turnike.png", // Hijyen turnikeleri
  t7: "/mt-jetonlu-turnike.png", // Jetonlu turnikeler (YENİ)
} as const;

// Bel Tipi Turnike Modelleri - TIMESTAMP ile cache-busting
export const BEL_TURNIKE_IMAGES = {
  bt1: `/tripod-t250-classic.png?t=${CACHE_BUST}`, // T 250 - Paslanmaz çelik waist high tripod
  bt2: `/tripod-t250eco-budget.png?t=${CACHE_BUST}`, // T 250 ECO - Ekonomik tripod turnike
  bt3: `/tripod-t250a2-bidirectional.png?t=${CACHE_BUST}`, // T 250 A2 - İki yönlü tripod barrier
  bt4: `/tripod-t250a2eco-economy.png?t=${CACHE_BUST}`, // T 250 A2 ECO - Bütçe A2 tripod
  bt5: `/tripod-t250gt-premium.png?t=${CACHE_BUST}`, // T 250 GT - Premium tripod gate
  bt6: `/tripod-t345-industrial.png?t=${CACHE_BUST}`, // T 345 - Heavy duty tripod barrier
  bt7: `/tripod-t345eco-budget.png?t=${CACHE_BUST}`, // T 345 ECO - Ekonomik endüstriyel tripod
  bt8: `/tripod-t250s-compact.png?t=${CACHE_BUST}`, // T 250 S - Kompakt tripod turnike
  bt9: `/tripod-t450-highcap.png?t=${CACHE_BUST}`, // T 450 - Yüksek kapasiteli tripod
  bt10: `/tripod-t281-custom.png?t=${CACHE_BUST}`, // T 281 - Özel tasarım tripod
  bt11: `/tripod-t250-coinop.png?t=${CACHE_BUST}`, // T 250 Jetonlu - Coin operated tripod
  bt12: `/tripod-t345-digital.png?t=${CACHE_BUST}`, // T 345 Jetonlu - Digital payment tripod
} as const;

export type ImageKey = keyof typeof IMAGES;