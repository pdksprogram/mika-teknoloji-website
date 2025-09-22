// Resim mapping sistemi - Kullanıcı ile net iletişim için
export const IMAGES = {
  t1: "/attached_assets/image_1758019216490.png", // Alet/araç görseli
  t2: "/attached_assets/image_1758020107295.png", // Boy tipi turnike sistemi
  t3: "/attached_assets/image_1758019726366.png", // Bel tipi turnike cihazları
  t4: "/attached_assets/image_1758020186900.png", // Engelli turnikeleri
  t5: "/attached_assets/image_1758022229658.png", // Hızlı geçiş turnikeleri
  t6: "/attached_assets/image_1758022307099.png", // Hijyen turnikeleri
  t7: "/attached_assets/image_1758022450183.png", // Jetonlu turnikeler (YENİ)
} as const;

// Bel Tipi Turnike Modelleri - Parmak izi gibi direkt yol kullanımı
export const BEL_TURNIKE_IMAGES = {
  bt1: "/mt-250-elektromekanik.png", // MT-250 Elektromekanik 
  bt2: "/mt-250-eco.png", // MT-250 ECO 
  bt3: "/mt-250-a2.png", // MT-250 A2 
  bt4: "/mt-250-a2-eco.png", // MT-250 A2 ECO 
  bt5: "/mt-250-gt.png", // MT-250 GT 
  bt6: "/mt-345.png", // MT-345 
  bt7: "/mt-345-eco.png", // MT-345 ECO 
  bt8: "/mt-250-s.png", // MT-250 S 
  bt9: "/mt-450.png", // MT-450 
  bt10: "/mt-281.png", // MT-281 
  bt11: "/mt-250-jetonlu.png", // MT-250 Jetonlu 
  bt12: "/mt-345-jetonlu.png", // MT-345 Jetonlu 
} as const;

export type ImageKey = keyof typeof IMAGES;