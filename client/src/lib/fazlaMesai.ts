// Fazla mesai hesaplama aracının (/fazla-mesai-hesaplama) saf hesap mantığı.
// Sade formül: günlük net süre = (çıkış − giriş) − mola; çıkış girişten önceyse vardiya gece
// yarısını geçmiştir ve çıkış ertesi güne sayılır. Haftalık toplamın sınırı (varsayılan 45 saat)
// aşan kısmı fazla mesai, kalanı normal çalışmadır. Tek hafta hesaplanır; denkleştirme, hafta
// tatili ve resmi tatil çalışması hesaba katılmaz. Biçimlendirme Intl'e bağlı değildir
// (ön-render ile tarayıcı aynı metni üretir).

export interface GunGirdisi {
  giris: string; // "SS:DD"
  cikis: string; // "SS:DD"
  mola: string; // dakika, metin olarak (boş = 0)
}

export interface HaftaSonucu {
  gunlukDk: (number | null)[]; // boş/geçersiz gün = null
  toplamDk: number;
  normalDk: number;
  fazlaDk: number;
}

const GUN_DK = 24 * 60;

export const HAFTANIN_GUNLERI = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"] as const;

export const VARSAYILAN_SINIR_SAAT = 45;

// "08:30" -> 510; geçersizse null.
export function saatiDakikaya(s: string): number | null {
  const m = /^(\d{1,2}):(\d{2})$/.exec(s.trim());
  if (!m) return null;
  const sa = Number(m[1]);
  const dk = Number(m[2]);
  if (sa > 23 || dk > 59) return null;
  return sa * 60 + dk;
}

// Türkçe ondalık (virgül) kabul eder: "1,5" -> 1.5; boş ya da geçersizse null; eksi değer null.
export function sayiOku(s: string): number | null {
  const t = s.trim().replace(/\s/g, "").replace(",", ".");
  if (t === "" || !/^\d+(\.\d+)?$/.test(t)) return null;
  return Number(t);
}

// Bir günün net çalışma süresi (dakika). Giriş ya da çıkış boşsa / geçersizse null.
export function gunlukNetDakika(g: GunGirdisi): number | null {
  const giris = saatiDakikaya(g.giris);
  const cikis = saatiDakikaya(g.cikis);
  if (giris === null || cikis === null) return null;
  const sure = cikis >= giris ? cikis - giris : cikis + GUN_DK - giris;
  const mola = g.mola.trim() === "" ? 0 : sayiOku(g.mola);
  if (mola === null) return null;
  return Math.max(0, sure - Math.round(mola));
}

export function haftayiHesapla(gunler: GunGirdisi[], sinirSaat: number): HaftaSonucu {
  const gunlukDk = gunler.map(gunlukNetDakika);
  const toplamDk = gunlukDk.reduce<number>((t, d) => t + (d ?? 0), 0);
  const sinirDk = Math.max(0, Math.round(sinirSaat * 60));
  return {
    gunlukDk,
    toplamDk,
    normalDk: Math.min(toplamDk, sinirDk),
    fazlaDk: Math.max(0, toplamDk - sinirDk),
  };
}

// Fazla mesai tutarı = fazla mesai saati × saatlik ücret × katsayı (katsayıyı kullanıcı girer).
export function fazlaMesaiTutari(fazlaDk: number, saatlikUcret: number | null, katsayi: number | null): number | null {
  if (saatlikUcret === null || katsayi === null) return null;
  return Math.round(((fazlaDk / 60) * saatlikUcret * katsayi) * 100) / 100;
}

// 2850 -> "47 sa 30 dk"; 0 -> "0 sa".
export function sureMetni(dk: number): string {
  const sa = Math.floor(dk / 60);
  const kalan = dk % 60;
  return kalan === 0 ? `${sa} sa` : `${sa} sa ${kalan} dk`;
}

// 2850 -> "47,50"
export function ondalikSaat(dk: number): string {
  return (dk / 60).toFixed(2).replace(".", ",");
}

// 1234567.5 -> "1.234.567,50 TL"
export function tutarMetni(tl: number): string {
  const [tam, kurus] = tl.toFixed(2).split(".");
  return `${tam.replace(/\B(?=(\d{3})+(?!\d))/g, ".")},${kurus} TL`;
}
