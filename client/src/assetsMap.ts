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

// Bel Tipi Turnike Modelleri - Cache bypass için v3 versiyonları
export const BEL_TURNIKE_IMAGES = {
  bt1: "/mt-250-elektromekanik-v3.png", // MT-250 Elektromekanik (Klasik tripod)
  bt2: "/mt-250-eco-v3.png", // MT-250 ECO (Ekonomik model)
  bt3: "/mt-250-a2-v3.png", // MT-250 A2 (İki yönlü)
  bt4: "/mt-250-a2-eco-v3.png", // MT-250 A2 ECO (Bütçe A2)
  bt5: "/mt-250-gt-v3.png", // MT-250 GT (Premium)
  bt6: "/mt-345-v3.png", // MT-345 (Ağır hizmet)
  bt7: "/mt-345-eco-v3.png", // MT-345 ECO (Ekonomik endüstriyel)
  bt8: "/mt-250-s-v3.png", // MT-250 S (Kompakt)
  bt9: "/mt-450-v3.png", // MT-450 (Yüksek kapasite)
  bt10: "/mt-281-v3.png", // MT-281 (Özel tasarım)
  bt11: "/mt-250-jetonlu-v3.png", // MT-250 Jetonlu (Jeton WC)
  bt12: "/mt-345-jetonlu-v3.png", // MT-345 Jetonlu (Dijital ödeme)
} as const;

export type ImageKey = keyof typeof IMAGES;