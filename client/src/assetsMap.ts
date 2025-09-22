// Resim mapping sistemi - Public klasöründeki gerçek resimler
export const IMAGES = {
  t1: "/ana-urun.png", // Alet/araç görseli
  t2: "/boy-tipi-turnike.png", // Boy tipi turnike sistemi
  t3: "/bel-tipi-turnike.png", // Bel tipi turnike cihazları
  t4: "/engelli-turnike.png", // Engelli turnikeleri
  t5: "/hizli-gecis-turnike.png", // Hızlı geçiş turnikeleri
  t6: "/hijyen-turnike.png", // Hijyen turnikeleri
  t7: "/jetonlu-turnike.png", // Jetonlu turnikeler (YENİ)
} as const;

// Bel Tipi Turnike Modelleri - Betaper'den gerçek ürün resimleri
export const BEL_TURNIKE_IMAGES = {
  bt1: "/t-250-elektromekanik-turnike.jpg", // MT-250 Elektromekanik
  bt2: "/t-250-eco-elektromekanik-turnike.jpg", // MT-250 ECO  
  bt3: "/t-250-a2-elektromekanik-turnike.jpg", // MT-250 A2
  bt4: "/t-250-eco-a2-elektromekanik-turnike.jpg", // MT-250 A2 ECO
  bt5: "/t-250-gt-elektromekanik-turnike.jpg", // MT-250 GT
  bt6: "/t-345-elektromekanik-turnike.jpg", // MT-345
  bt7: "/t-345-eco-elektromekanik-turnike.jpg", // MT-345 ECO
  bt8: "/t-250-s-elektromekanik-turnike.jpg", // MT-250 S
  bt9: "/t-450-elektromekanik-turnike.jpg", // MT-450
  bt10: "/t-281-elektromekanik-turnike.jpg", // MT-281
  bt11: "/jetonlu-turnike-sistemi-t250.jpg", // MT-250 Jetonlu
  bt12: "/jetonlu-turnike-sistemi-t345.jpg", // MT-345 Jetonlu
} as const;

export type ImageKey = keyof typeof IMAGES;