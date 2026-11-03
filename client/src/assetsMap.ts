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

// Bel Tipi Turnike Modelleri (turnike ürün görselleri)
export const BEL_TURNIKE_IMAGES = {
  bt1: `/t-250-elektromekanik-turnike.webp`, // T 250
  bt2: `/t-250-eco-elektromekanik-turnike.jpg`, // T 250 ECO
  bt3: `/t-250-a2-elektromekanik-turnike.jpg`, // T 250 A2
  bt4: `/t-250-eco-a2-elektromekanik-turnike.jpg`, // T 250 A2 ECO
  bt5: `/t-250-gt-elektromekanik-turnike.jpg`, // T 250 GT
  bt6: `/t-345-elektromekanik-turnike.jpg`, // T 345
  bt7: `/t-345-eco-elektromekanik-turnike.jpg`, // T 345 ECO
  bt8: `/t-250-s-elektromekanik-turnike.jpg`, // T 250 S
  bt9: `/t-450-elektromekanik-turnike.jpg`, // T 450
  bt10: `/t-281-elektromekanik-turnike.jpg`, // T 281
  bt11: `/jetonlu-turnike-sistemi-t250.webp`, // T 250 Jetonlu
  bt12: `/jetonlu-turnike-sistemi-t345.webp`, // T 345 Jetonlu
} as const;

// Boy Tipi Turnike Modelleri (turnike ürün görselleri)
export const BOY_TURNIKE_IMAGES = {
  bt1: `/t-2500d-single-3-kollu-paslanmaz-turnike.jpg`, // MT 2500D Single 3 Kollu
  bt2: `/t-2500d-single-4-kollu-paslanmaz-turnike.jpg`, // MT 2500D Single 4 Kollu
  bt3: `/t-2500d-double-3-kollu-paslanmaz-turnike.jpg`, // MT 2500D Double 3 Kollu
  bt4: `/t-2500d-double-4-kollu-paslanmaz-turnike.jpg`, // MT 2500D Double 4 Kollu
  bt5: `/t-2500k-single-3-kollu-paslanmaz-turnike.jpg`, // MT 2500K Single 3 Kollu
  bt6: `/t-2500k-single-4-kollu-paslanmaz-turnike.jpg`, // MT 2500K Single 4 Kollu
  bt7: `/t-2500k-double-3-kollu-paslanmaz-turnike.jpg`, // MT 2500K Double 3 Kollu
  bt8: `/t-2500k-double-4-kollu-paslanmaz-turnike.jpg`, // MT 2500K Double 4 Kollu
  bt9: `/t-2500d-single-3-kollu-eco-boy-turnike.jpg`, // MT 2500D Single 3 Kollu ECO
  bt10: `/t-2500k-single-3-kollu-eco-boy-turnike.jpg`, // MT 2500K Single 3 Kollu ECO
  bt11: `/t-2500k-single-3-kollu-kristal-boy-turnike.jpg`, // MT 2500K Single 3 Kollu Kristal
  bt12: `/t-2500k-double-3-kollu-eco-boy-turnike.jpg`, // MT 2500K Double 3 Kollu ECO
  bt13: `/yarim-boy-turnike-sistemi-t1350-elektromekanik-turnike.jpg`, // MT 1350 Yarım Boy
  bt14: `/yarim-boy-turnike-sistemi-t1400-elektromekanik-turnike.jpg`, // MT 1400 Yarım Boy
} as const;

// Engelli Turnike Modelleri (turnike ürün görselleri)
export const ENGELLI_TURNIKE_IMAGES = {
  et1: `/sc324b-vip-turnike.jpg`, // MT SC324B VIP Turnike
  et2: `/sc324c-vip-turnike.jpg`, // MT SC324C VIP Turnike
  et3: `/t-230-mvip-slim-turnike.jpg`, // MT 230 MVIP Slim VIP Turnike
  et4: `/t-150-mswg-turnike-motorlu.jpg`, // MT 150 MSWG Motorlu VIP Turnike
  et5: `/t-150-mswg-turnike-gkollu-motorlu.jpg`, // MT 150 MSWG Motorlu G Kollu VIP Turnike
  et6: `/699-t80-yaprak-turnike.jpg`, // MT T80 Yaprak Turnike
  et7: `/t80-manyetik-kilitli-yaprak-turnike.jpg`, // MT T80 Manyetik Kilitli Yaprak Turnike
  et8: `/700-tmt4-kelebek-turnike.jpg`, // MT TMT4 Kelebek Turnike
  et9: `/turnike-seperator.webp`, // MT Turnike Seperatör
} as const;

// Hızlı Geçiş Turnike Modelleri (turnike ürün görselleri)
export const HIZLI_GECIS_TURNIKE_IMAGES = {
  hg1: `/t-300-hg20-hizli-gecis-turnikesi.jpg`, // MT T300 HG20 Hızlı Geçiş
  hg2: `/t-300-hg20-chubby-hizli-gecis-turnikesi.jpg`, // MT T300 HG20 Chubby Hızlı Geçiş
  hg3: `/t-300-hg40-hizli-gecis-turnikesi.jpg`, // MT T300 HG40 Hızlı Geçiş
  hg4: `/t-300-hg60-hizli-gecis-turnikesi.jpg`, // MT T350 HG60 Hızlı Geçiş
  hg5: `/t-350-hg60-chubby-hizli-gecis-turnikesi.jpg`, // MT T350 HG60 Chubby Hızlı Geçiş
  hg6: `/t-300-hg120-hizli-gecis-turnikesi.jpg`, // MT T300 HG120 Hızlı Geçiş
  hg7: `/t-300-hg120-chubby-hizli-gecis-turnikesi.jpg`, // MT T300 HG120 Chubby Hızlı Geçiş
  hg8: `/t-hg-slim-kisa-single.jpg`, // MT T300 HG SLIM Kısa Hızlı Geçiş
  hg9: `/t-hg-slim-uzun-single-turnike.jpg`, // MT T300 HG SLIM Uzun Hızlı Geçiş
} as const;

export type ImageKey = keyof typeof IMAGES;