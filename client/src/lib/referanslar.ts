// Doğrulanmış referanslar: Referanslar sayfası, ana sayfa şeridi ve turnike sayfaları bu tek listeyi kullanır.
// Belgesi olmayan kurum buraya eklenmez.
export interface Referans {
  ad: string;
  sektor: string;
  // Görsel ve doğal boyutu (yer ayırma için); kartlar 16:9 kırpar.
  gorsel: string;
  en: number;
  boy: number;
  alt: string;
  cozumler: string[];
  // Turnike sayfalarında bina/mağaza fotoğrafı varsa onu kullanır.
  foto?: string;
}

export const REFERANSLAR: Referans[] = [
  {
    ad: "Lufian",
    sektor: "Tekstil ve Moda",
    gorsel: "/images/logos/lufian.jpg",
    en: 259,
    boy: 194,
    alt: "Lufian referans görseli",
    cozumler: ["WebPDKS", "QR Personel Takip", "Vardiya Yönetimi"],
    foto: "/images/referans/lufian-magaza.jpg",
  },
  {
    ad: "Adore Mobilya",
    sektor: "Mobilya ve Dekorasyon",
    gorsel: "/images/logos/adore.jpeg",
    en: 728,
    boy: 340,
    alt: "Adore Mobilya fabrika satış mağazası",
    cozumler: ["Mobil PDKS", "Shift Yönetimi", "Vardiya Planlama"],
  },
  {
    ad: "Koluman Mercedes",
    sektor: "Otomotiv",
    gorsel: "/images/logos/koluman.webp",
    en: 1600,
    boy: 900,
    alt: "Koluman Mercedes tesisi",
    cozumler: ["Turnike Sistemleri", "Güvenlik Kontrol", "PDKS"],
  },
  {
    ad: "Antalya Şehir Hastanesi",
    sektor: "Sağlık",
    gorsel: "/images/logos/hastane-antalya.webp",
    en: 864,
    boy: 486,
    alt: "Antalya Şehir Hastanesi referans görseli",
    cozumler: ["X-Ray Güvenlik", "PDKS", "Güvenlik Kontrol"],
  },
  {
    ad: "Cerrahpaşa Üniversite Hastanesi",
    sektor: "Sağlık ve Eğitim",
    gorsel: "/images/logos/istanbul-cerrahpasa.jpg",
    en: 259,
    boy: 194,
    alt: "Cerrahpaşa Üniversite Hastanesi referans görseli",
    cozumler: ["Yemekhane Sistemi", "Kartlı Ödeme", "Entegre Çözümler"],
  },
];

export function referansBul(ad: string) {
  return REFERANSLAR.find((r) => r.ad === ad);
}
