// Resim mapping sistemi - Kullanıcı ile net iletişim için
export const IMAGES = {
  t1: "/attached_assets/image_1758019216490.png", // Alet/araç görseli
  t2: "/attached_assets/image_1758020107295.png", // Boy tipi turnike sistemi
  t3: "/attached_assets/image_1758019726366.png", // Bel tipi turnike cihazları
  t4: "/attached_assets/image_1758020186900.png", // Engelli turnikeleri
  t5: "/attached_assets/image_1758022229658.png", // Hızlı geçiş turnikeleri (YENİ)
} as const;

export type ImageKey = keyof typeof IMAGES;