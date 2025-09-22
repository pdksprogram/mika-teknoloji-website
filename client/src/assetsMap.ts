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

// Bel Tipi Turnike Modelleri - Farklı resimler her model için
export const BEL_TURNIKE_IMAGES = {
  bt1: "/bel-tipi-turnike.png", // MT-250 Elektromekanik (Standart bel tipi)
  bt2: "/boy-tipi-turnike.png", // MT-250 ECO (Boy tipi görünümü)
  bt3: "/engelli-turnike.png", // MT-250 A2 (Engelli erişim)
  bt4: "/hizli-gecis-turnike.png", // MT-250 A2 ECO (Hızlı geçiş)
  bt5: "/hijyen-turnike.png", // MT-250 GT (Hijyen sistemi)
  bt6: "/ana-urun.png", // MT-345 (Ana ürün)
  bt7: "/bel-tipi-turnike.png", // MT-345 ECO (Bel tipi)
  bt8: "/boy-tipi-turnike.png", // MT-250 S (Boy tipi kompakt)
  bt9: "/hizli-gecis-turnike.png", // MT-450 (Yüksek kapasite)
  bt10: "/hijyen-turnike.png", // MT-281 (Özel tasarım)
  bt11: "/jetonlu-turnike.png", // MT-250 Jetonlu
  bt12: "/jetonlu-turnike.png", // MT-345 Jetonlu
} as const;

export type ImageKey = keyof typeof IMAGES;