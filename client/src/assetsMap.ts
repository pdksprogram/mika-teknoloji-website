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

// Bel Tipi Turnike Modelleri - Betaper.com tarzında profesyonel sistem
export const BEL_TURNIKE_IMAGES = {
  bt1: "/attached_assets/image_1758287172261.png", // MT-250 Elektromekanik (GERÇEK RESİM)
  bt2: "/attached_assets/image_1758287245371.png", // MT-250 ECO (GERÇEK RESİM)
  bt3: "/attached_assets/image_1758287306173.png", // MT-250 A2 (GERÇEK RESİM)
  bt4: "/attached_assets/image_1758287353490.png", // MT-250 A2 ECO (GERÇEK RESİM)
  bt5: "/attached_assets/image_1758287386087.png", // MT-250 GT (GERÇEK RESİM)
  bt6: "/attached_assets/image_1758287453764.png", // MT-345 (GERÇEK RESİM)
  bt7: "/attached_assets/image_1758287498611.png", // MT-345 ECO (GERÇEK RESİM)
  bt8: "/attached_assets/image_1758287542531.png", // MT-250 S (GERÇEK RESİM)
  bt9: "/attached_assets/image_1758287608935.png", // MT-450 (GERÇEK RESİM)
  bt10: "/attached_assets/image_1758287648714.png", // MT-281 (GERÇEK RESİM)
  bt11: "/attached_assets/image_1758287708260.png", // MT-250 Jetonlu (GERÇEK RESİM)
  bt12: "/attached_assets/image_1758287753706.png", // MT-345 Jetonlu (GERÇEK RESİM)
} as const;

export type ImageKey = keyof typeof IMAGES;