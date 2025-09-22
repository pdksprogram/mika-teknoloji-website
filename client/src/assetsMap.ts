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

// Bel Tipi Turnike Modelleri - GERÇEK tripod turnike resimleri v4
export const BEL_TURNIKE_IMAGES = {
  bt1: "/mt-250-elektromekanik-v4.png", // T 250 - Paslanmaz çelik waist high tripod
  bt2: "/mt-250-eco-v4.png", // T 250 ECO - Ekonomik tripod turnike
  bt3: "/mt-250-a2-v4.png", // T 250 A2 - İki yönlü tripod barrier
  bt4: "/mt-250-a2-eco-v4.png", // T 250 A2 ECO - Bütçe A2 tripod
  bt5: "/mt-250-gt-v4.png", // T 250 GT - Premium tripod gate
  bt6: "/mt-345-v4.png", // T 345 - Heavy duty tripod barrier
  bt7: "/mt-345-eco-v4.png", // T 345 ECO - Ekonomik endüstriyel tripod
  bt8: "/mt-250-s-v4.png", // T 250 S - Kompakt tripod turnike
  bt9: "/mt-450-v4.png", // T 450 - Yüksek kapasiteli tripod
  bt10: "/mt-281-v4.png", // T 281 - Özel tasarım tripod
  bt11: "/mt-250-jetonlu-v4.png", // T 250 Jetonlu - Coin operated tripod
  bt12: "/mt-345-jetonlu-v4.png", // T 345 Jetonlu - Digital payment tripod
} as const;

export type ImageKey = keyof typeof IMAGES;