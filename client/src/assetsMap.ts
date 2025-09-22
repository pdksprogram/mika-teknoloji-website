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

// Bel Tipi Turnike Modelleri - Her modelin farklı resmi
export const BEL_TURNIKE_IMAGES = {
  bt1: "/mt-250-elektromekanik.png", // MT-250 Elektromekanik (Güvenlik & Kontrol Sistemleri)
  bt2: "/mt-250-eco.png", // MT-250 ECO (Modern Turnstile System)
  bt3: "/mt-250-a2.png", // MT-250 A2 (Professional MT35 Recognition)
  bt4: "/mt-250-a2-eco.png", // MT-250 A2 ECO (Vertical MT35 Terminal)
  bt5: "/mt-250-gt.png", // MT-250 GT (MT35 Device Pure White)
  bt6: "/bel-tipi-turnike.png", // MT-345 
  bt7: "/boy-tipi-turnike.png", // MT-345 ECO 
  bt8: "/engelli-turnike.png", // MT-250 S 
  bt9: "/hizli-gecis-turnike.png", // MT-450 
  bt10: "/hijyen-turnike.png", // MT-281 
  bt11: "/jetonlu-turnike.png", // MT-250 Jetonlu 
  bt12: "/jetonlu-turnike.png", // MT-345 Jetonlu 
} as const;

export type ImageKey = keyof typeof IMAGES;