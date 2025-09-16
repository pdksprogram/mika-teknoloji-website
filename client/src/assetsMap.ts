// Resim mapping sistemi - Kullanıcı ile net iletişim için
export const IMAGES = {
  t1: "/attached_assets/image_1758019216490.png", // Alet/araç görseli
  t2: "/attached_assets/image_1758019229814.png", // Boy tipi turnike sistemi  
  t3: "/attached_assets/image_1758019158473.png", // Bel tipi turnike cihazları
  t4: "/attached_assets/image_1758019135962.png", // İnşaat alanı çalışanları
} as const;

export type ImageKey = keyof typeof IMAGES;