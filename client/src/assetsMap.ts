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

// Bel Tipi Turnike Modelleri - Geçici olarak attached_assets kullanımına geri döndürüldü
export const BEL_TURNIKE_IMAGES = {
  bt1: "/attached_assets/image_1758287172261.png", // MT-250 Elektromekanik 
  bt2: "/attached_assets/image_1758287245371.png", // MT-250 ECO 
  bt3: "/attached_assets/image_1758287306173.png", // MT-250 A2 
  bt4: "/attached_assets/image_1758287353490.png", // MT-250 A2 ECO 
  bt5: "/attached_assets/image_1758287386087.png", // MT-250 GT 
  bt6: "/attached_assets/image_1758287453764.png", // MT-345 
  bt7: "/attached_assets/image_1758287498611.png", // MT-345 ECO 
  bt8: "/attached_assets/image_1758287542531.png", // MT-250 S 
  bt9: "/attached_assets/image_1758287608935.png", // MT-450 
  bt10: "/attached_assets/image_1758287648714.png", // MT-281 
  bt11: "/attached_assets/image_1758287708260.png", // MT-250 Jetonlu 
  bt12: "/attached_assets/image_1758287753706.png", // MT-345 Jetonlu 
} as const;

export type ImageKey = keyof typeof IMAGES;