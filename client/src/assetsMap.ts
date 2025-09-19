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
  bt1: "/attached_assets/image_1758287172261.png", // MT-250 Elektromekanik (GÜNCELLENMİŞ RESİM)
  bt2: "/attached_assets/image_1758287245371.png", // MT-250 ECO (GERÇEK RESİM)
  bt3: "/attached_assets/image_1758287306173.png", // MT-250 A2 (GERÇEK RESİM)
  bt4: "/attached_assets/image_1758287353490.png", // MT-250 A2 ECO (GERÇEK RESİM)
  bt5: "/attached_assets/image_1758287386087.png", // MT-250 GT (GERÇEK RESİM)
  bt6: "/attached_assets/image_1758287453764.png", // MT-345 (GERÇEK RESİM)
  bt7: "/attached_assets/image_1758287498611.png", // MT-345 ECO (GERÇEK RESİM)
  bt8: "/attached_assets/image_1758287542531.png", // MT-250 S (GERÇEK RESİM)
  bt9: "/attached_assets/stock_images/electromechanical_tu_23c8e9e6.jpg", // T 450
  bt10: "/attached_assets/stock_images/electromechanical_tu_d7598874.jpg", // T 281
  bt11: "/attached_assets/stock_images/electromechanical_tu_44f2bb65.jpg", // T 250 Jetonlu
  bt12: "/attached_assets/stock_images/electromechanical_tu_4e3db806.jpg", // T 345 Jetonlu
} as const;

export type ImageKey = keyof typeof IMAGES;