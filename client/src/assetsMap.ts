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

// Bel Tipi Turnike Modelleri - Mevcut genel resimler kullanılıyor
export const BEL_TURNIKE_IMAGES = {
  bt1: "/bel-tipi-turnike.png", // MT-250 Elektromekanik 
  bt2: "/bel-tipi-turnike.png", // MT-250 ECO 
  bt3: "/bel-tipi-turnike.png", // MT-250 A2 
  bt4: "/bel-tipi-turnike.png", // MT-250 A2 ECO 
  bt5: "/bel-tipi-turnike.png", // MT-250 GT 
  bt6: "/bel-tipi-turnike.png", // MT-345 
  bt7: "/bel-tipi-turnike.png", // MT-345 ECO 
  bt8: "/bel-tipi-turnike.png", // MT-250 S 
  bt9: "/bel-tipi-turnike.png", // MT-450 
  bt10: "/bel-tipi-turnike.png", // MT-281 
  bt11: "/jetonlu-turnike.png", // MT-250 Jetonlu 
  bt12: "/jetonlu-turnike.png", // MT-345 Jetonlu 
} as const;

export type ImageKey = keyof typeof IMAGES;