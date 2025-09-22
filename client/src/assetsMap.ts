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

// Bel Tipi Turnike Modelleri - BETAPER.COM'dan alınan gerçek resimler
export const BEL_TURNIKE_IMAGES = {
  bt1: `/t-250-elektromekanik-turnike.jpg?t=${CACHE_BUST}`, // T 250 - Betaper'daki asıl resim
  bt2: `/t-250-eco-elektromekanik-turnike.jpg?t=${CACHE_BUST}`, // T 250 ECO - Betaper'daki asıl resim
  bt3: `/t-250-a2-elektromekanik-turnike.jpg?t=${CACHE_BUST}`, // T 250 A2 - Betaper'daki asıl resim
  bt4: `/t-250-eco-a2-elektromekanik-turnike.jpg?t=${CACHE_BUST}`, // T 250 A2 ECO - Betaper'daki asıl resim
  bt5: `/t-250-gt-elektromekanik-turnike.jpg?t=${CACHE_BUST}`, // T 250 GT - Betaper'daki asıl resim
  bt6: `/t-345-elektromekanik-turnike.jpg?t=${CACHE_BUST}`, // T 345 - Betaper'daki asıl resim
  bt7: `/t-345-eco-elektromekanik-turnike.jpg?t=${CACHE_BUST}`, // T 345 ECO - Betaper'daki asıl resim
  bt8: `/t-250-s-elektromekanik-turnike.jpg?t=${CACHE_BUST}`, // T 250 S - Betaper'daki asıl resim
  bt9: `/t-450-elektromekanik-turnike.jpg?t=${CACHE_BUST}`, // T 450 - Betaper'daki asıl resim
  bt10: `/t-281-elektromekanik-turnike.jpg?t=${CACHE_BUST}`, // T 281 - Betaper'daki asıl resim
  bt11: `/jetonlu-turnike-sistemi-t250.jpg?t=${CACHE_BUST}`, // T 250 Jetonlu - Betaper'daki asıl resim
  bt12: `/jetonlu-turnike-sistemi-t345.jpg?t=${CACHE_BUST}`, // T 345 Jetonlu - Betaper'daki asıl resim
} as const;

export type ImageKey = keyof typeof IMAGES;