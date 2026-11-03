// Sitedeki tüm telefon, WhatsApp ve çağrı düğmesi metinleri tek yerden gelir.
export const DEMO_TELEFON = "+905467122296";
export const DEMO_TELEFON_GORUNEN = "0546 712 22 96";
export const DEMO_WHATSAPP = `https://wa.me/${DEMO_TELEFON.replace(/\D/g, "")}`;

// CTA sözlüğü: yazılım sayfalarında birincil "Demo ve Keşif Talep Edin",
// donanım sayfalarında birincil "Teklif Alın"; ikincil her yerde "Hemen Ara".
export const CTA_YAZILIM = "Demo ve Keşif Talep Edin";
export const CTA_DONANIM = "Teklif Alın";
export const CTA_ARA = "Hemen Ara";

export function whatsappMesajAdresi(metin: string) {
  return `${DEMO_WHATSAPP}?text=${encodeURIComponent(metin)}`;
}
