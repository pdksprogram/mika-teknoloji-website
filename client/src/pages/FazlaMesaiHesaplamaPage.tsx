import { Fragment, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, RotateCcw } from "lucide-react";
import SEO, { kanonikAdres } from "@/seo/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Adimlar,
  BolumBasligi,
  DemoTalebi,
  IlgiliSayfalar,
  Kirinti,
  KonuGiris,
  SssBolumu,
  kirintiJsonLd,
  sssJsonLd,
} from "@/components/PdksIcerik";
import type { KirintiMaddesi, SssMaddesi } from "@/components/PdksIcerik";
import {
  ENFAZLA_KATSAYI,
  ENFAZLA_MOLA_DK,
  ENFAZLA_UCRET,
  ENFAZLA_SINIR_SAAT,
  HAFTANIN_GUNLERI,
  VARSAYILAN_SINIR_SAAT,
  fazlaMesaiTutari,
  haftayiHesapla,
  molaOku,
  molaSureyiAsiyor,
  ondalikSaat,
  sinirliSayiOku,
  sureMetni,
  tutarMetni,
} from "@/lib/fazlaMesai";
import type { GunGirdisi } from "@/lib/fazlaMesai";

const YOL = "/fazla-mesai-hesaplama";

// Hatalı giriş kutusu ve altındaki kısa uyarı (shadcn Input'un kendi hata stili yok).
const HATALI_KUTU = "border-red-500 focus-visible:ring-red-500";
const UYARI_METNI = "mt-2 text-sm text-red-600";

const KIRINTI: KirintiMaddesi[] = [
  { ad: "Ana Sayfa", yol: "/" },
  { ad: "Puantaj Programı", yol: "/puantaj-programi" },
  { ad: "Fazla Mesai Hesaplama", yol: YOL },
];

// Açılışta dolu gelen örnek hafta: Pzt-Cum 08:00-18:00 (60 dk mola), Cmt 08:00-13:00.
// 5 × 9 sa + 5 sa = 50 sa → 45 sa normal çalışma + 5 sa fazla mesai.
const ORNEK_HAFTA: GunGirdisi[] = [
  { giris: "08:00", cikis: "18:00", mola: "60" },
  { giris: "08:00", cikis: "18:00", mola: "60" },
  { giris: "08:00", cikis: "18:00", mola: "60" },
  { giris: "08:00", cikis: "18:00", mola: "60" },
  { giris: "08:00", cikis: "18:00", mola: "60" },
  { giris: "08:00", cikis: "13:00", mola: "0" },
  { giris: "", cikis: "", mola: "" },
];

const BOS_HAFTA: GunGirdisi[] = HAFTANIN_GUNLERI.map(() => ({ giris: "", cikis: "", mola: "" }));

const ADIMLAR = [
  { baslik: "Günlük Süre", metin: "Her gün için çıkış saatinden giriş saati çıkarılır. Çıkış girişten önceyse vardiya gece yarısını geçmiştir; çıkış ertesi güne sayılır." },
  { baslik: "Mola Düşülür", metin: "Girilen mola dakikası günlük süreden düşülür; kalan süre o günün net çalışmasıdır." },
  { baslik: "Haftalık Toplam", metin: "Yedi günün net çalışma süreleri toplanır." },
  { baslik: "Sınır Üstü Fazla Mesai", metin: "Haftalık toplamın girdiğiniz sınırı aşan kısmı fazla mesai, kalanı normal çalışma olarak gösterilir." },
];

const SSS: SssMaddesi[] = [
  {
    soru: "Fazla mesai bu araçta nasıl hesaplanır?",
    cevap: "Her günün net çalışması, çıkış saatinden giriş saati ve mola süresi çıkarılarak bulunur. Haftalık toplamın girdiğiniz haftalık sınırı aşan kısmı fazla mesai, kalanı normal çalışma olarak gösterilir.",
  },
  {
    soru: "Gece yarısını geçen vardiya nasıl girilir?",
    cevap: "Giriş ve çıkış saatlerini olduğu gibi girin. Örneğin 22:00 giriş, 06:00 çıkış yazıldığında çıkış ertesi güne sayılır ve süre 8 saat olarak hesaplanır.",
  },
  {
    soru: "Fazla mesai tutarı nasıl bulunur?",
    cevap: "Saatlik ücreti ve iş yerinizde uygulanan fazla mesai katsayısını girdiğinizde tutar, fazla mesai saati × saatlik ücret × katsayı olarak gösterilir. Katsayıyı iş sözleşmenize göre girin.",
  },
  {
    soru: "Bu araç hangi durumları hesaba katmaz?",
    cevap: "Araç tek bir haftayı hesaplar. Denkleştirme, hafta tatili ve resmi tatil çalışması, izinler ve gün içindeki farklı mesai türleri hesaba katılmaz. Sonuçlar bilgi amaçlıdır.",
  },
  {
    soru: "Mika PDKS fazla mesaiyi kendisi hesaplar mı?",
    cevap: "Evet. Mika PDKS giriş-çıkış kayıtlarından çalışma süresini hesaplar, mola süresini vardiya tanımına göre düşer. Fazla mesai çalışma grubunda seçtiğiniz kurala göre ayrılır; haftalık 45 saat kuralı açıksa 45 saati aşan süre fazla mesai sayılır ve puantajda ayrı sütunda gösterilir.",
  },
];

function HesaplamaAraci() {
  const [gunler, setGunler] = useState<GunGirdisi[]>(ORNEK_HAFTA);
  const [sinir, setSinir] = useState(String(VARSAYILAN_SINIR_SAAT));
  const [ucret, setUcret] = useState("");
  const [katsayi, setKatsayi] = useState("");

  // Sınır zorunludur: boş ya da geçersizse normal çalışma, fazla mesai ve tutar "—" olur.
  const sinirSayi = sinirliSayiOku(sinir, ENFAZLA_SINIR_SAAT);
  const sinirHatali = sinirSayi === null;
  // Ücret ve katsayı isteğe bağlıdır: boşken uyarı yok, yalnız dolu ama geçersizken uyarı.
  const ucretSayi = sinirliSayiOku(ucret, ENFAZLA_UCRET);
  const ucretHatali = ucret.trim() !== "" && ucretSayi === null;
  const katsayiSayi = sinirliSayiOku(katsayi, ENFAZLA_KATSAYI);
  const katsayiHatali = katsayi.trim() !== "" && katsayiSayi === null;
  const molaHatali = gunler.some((g) => molaOku(g.mola) === null);
  // Başında eksi olan değer için uyarı "eksi olamaz" der.
  const ucretEksi = ucret.trim().startsWith("-");
  const katsayiEksi = katsayi.trim().startsWith("-");

  const sonuc = haftayiHesapla(gunler, sinirSayi ?? 0);
  const tutar = sinirHatali ? null : fazlaMesaiTutari(sonuc.fazlaDk, ucretSayi, katsayiSayi);

  const guncelle = (i: number, alan: keyof GunGirdisi, deger: string) =>
    setGunler((onceki) => onceki.map((g, j) => (j === i ? { ...g, [alan]: deger } : g)));

  const ornekHafta = () => {
    setGunler(ORNEK_HAFTA);
    setSinir(String(VARSAYILAN_SINIR_SAAT));
  };
  const temizle = () => {
    setGunler(BOS_HAFTA);
    setSinir(String(VARSAYILAN_SINIR_SAAT));
    setUcret("");
    setKatsayi("");
  };

  return (
    <section className="pt-6 pb-16 bg-white" aria-labelledby="hesaplama-baslik">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 id="hesaplama-baslik" className="text-2xl md:text-3xl font-bold text-slate-800">Haftalık Fazla Mesai Hesabı</h2>
        </div>
        <Card className="max-w-5xl mx-auto border-0 shadow-lg">
          <CardContent className="p-4 md:p-6">
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                <div className="sm:w-64">
                  <Label htmlFor="fm-sinir" className="text-slate-700">Haftalık normal çalışma sınırı (saat)</Label>
                  <Input
                    id="fm-sinir"
                    type="text"
                    inputMode="decimal"
                    className={sinirHatali ? `mt-2 ${HATALI_KUTU}` : "mt-2"}
                    value={sinir}
                    onChange={(e) => setSinir(e.target.value)}
                    aria-invalid={sinirHatali}
                    aria-describedby={sinirHatali ? "fm-sinir-uyari" : undefined}
                  />
                </div>
                <div className="flex gap-3 sm:ml-auto">
                  <Button type="button" variant="outline" onClick={ornekHafta}>
                    Örnek Hafta
                  </Button>
                  <Button type="button" variant="outline" onClick={temizle}>
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Temizle
                  </Button>
                </div>
              </div>
              {sinirHatali && (
                <p id="fm-sinir-uyari" className={UYARI_METNI}>
                  Haftalık sınırı 0 ile {ENFAZLA_SINIR_SAAT} arasında bir sayı olarak girin.
                </p>
              )}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] table-fixed text-left">
                <caption className="sr-only">Günlük giriş, çıkış ve mola süreleri</caption>
                <thead>
                  <tr className="border-b-2 border-slate-200 text-sm text-slate-600">
                    <th scope="col" className="w-[20%] py-2 pr-3 font-semibold">Gün</th>
                    <th scope="col" className="w-[22%] py-2 px-2 font-semibold">Giriş</th>
                    <th scope="col" className="w-[22%] py-2 px-2 font-semibold">Çıkış</th>
                    <th scope="col" className="w-[16%] py-2 px-2 font-semibold">Mola (dk)</th>
                    <th scope="col" className="w-[20%] py-2 pl-3 font-semibold text-right">Net Çalışma</th>
                  </tr>
                </thead>
                <tbody>
                  {HAFTANIN_GUNLERI.map((gun, i) => {
                    const net = sonuc.gunlukDk[i];
                    const molaAsiyor = molaSureyiAsiyor(gunler[i]);
                    const molaKutuHatali = molaAsiyor || molaOku(gunler[i].mola) === null;
                    const uyariId = `fm-mola-uyari-${i}`;
                    return (
                      <Fragment key={gun}>
                      <tr className={molaAsiyor ? "" : "border-b border-slate-100"}>
                        <th scope="row" className="py-1.5 pr-3 font-medium text-slate-800">{gun}</th>
                        <td className="py-1.5 px-2">
                          <Input
                            type="time"
                            aria-label={`${gun} giriş saati`}
                            value={gunler[i].giris}
                            onChange={(e) => guncelle(i, "giris", e.target.value)}
                          />
                        </td>
                        <td className="py-1.5 px-2">
                          <Input
                            type="time"
                            aria-label={`${gun} çıkış saati`}
                            value={gunler[i].cikis}
                            onChange={(e) => guncelle(i, "cikis", e.target.value)}
                          />
                        </td>
                        <td className="py-1.5 px-2">
                          <Input
                            type="text"
                            inputMode="numeric"
                            aria-label={`${gun} mola süresi, dakika`}
                            className={molaKutuHatali ? HATALI_KUTU : undefined}
                            aria-invalid={molaKutuHatali}
                            aria-describedby={molaAsiyor ? uyariId : undefined}
                            value={gunler[i].mola}
                            onChange={(e) => guncelle(i, "mola", e.target.value)}
                          />
                        </td>
                        <td className="py-1.5 pl-3 text-right tabular-nums text-slate-800">
                          {net === null ? "—" : sureMetni(net)}
                        </td>
                      </tr>
                      {molaAsiyor && (
                        <tr className="border-b border-slate-100">
                          <td colSpan={5} className="pb-2">
                            <p id={uyariId} className="text-sm text-red-600">Mola süresi çalışma süresini aşıyor.</p>
                          </td>
                        </tr>
                      )}
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {molaHatali && (
              <p className={UYARI_METNI}>Molayı 0 ile {ENFAZLA_MOLA_DK} arasında dakika olarak girin; hatalı günün süresi hesaplanmaz.</p>
            )}

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div>
                <Label htmlFor="fm-ucret" className="text-slate-700">Saatlik ücret (TL)</Label>
                <Input
                  id="fm-ucret"
                  type="text"
                  inputMode="decimal"
                  className={ucretHatali ? `mt-2 ${HATALI_KUTU}` : "mt-2"}
                  value={ucret}
                  onChange={(e) => setUcret(e.target.value)}
                  aria-invalid={ucretHatali}
                  aria-describedby={ucretHatali ? "fm-ucret-uyari" : undefined}
                />
                {ucretHatali && (
                  <p id="fm-ucret-uyari" className={UYARI_METNI}>
                    {ucretEksi ? "Saatlik ücret eksi olamaz." : "Saatlik ücreti 1.000.000 TL'yi aşmayan bir sayı olarak girin."}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="fm-katsayi" className="text-slate-700">Fazla mesai katsayısı</Label>
                <Input
                  id="fm-katsayi"
                  type="text"
                  inputMode="decimal"
                  className={katsayiHatali ? `mt-2 ${HATALI_KUTU}` : "mt-2"}
                  value={katsayi}
                  onChange={(e) => setKatsayi(e.target.value)}
                  aria-invalid={katsayiHatali}
                  aria-describedby={katsayiHatali ? "fm-katsayi-uyari" : undefined}
                />
                {katsayiHatali && (
                  <p id="fm-katsayi-uyari" className={UYARI_METNI}>
                    {katsayiEksi ? "Katsayı eksi olamaz." : `Katsayıyı ${ENFAZLA_KATSAYI}'u aşmayan bir sayı olarak girin, örneğin 1,5.`}
                  </p>
                )}
              </div>
            </div>

            <dl className="mt-8 border-t-2 border-slate-200 divide-y divide-slate-100" aria-live="polite">
              <div className="flex justify-between py-3">
                <dt className="text-slate-600">Haftalık toplam</dt>
                <dd className="font-semibold text-slate-800 tabular-nums">
                  {sureMetni(sonuc.toplamDk)} <span className="text-slate-500 font-normal">({ondalikSaat(sonuc.toplamDk)} saat)</span>
                </dd>
              </div>
              <div className="flex justify-between py-3">
                <dt className="text-slate-600">Normal çalışma</dt>
                <dd className="font-semibold text-slate-800 tabular-nums">
                  {sinirHatali ? "—" : (
                    <>
                      {sureMetni(sonuc.normalDk)} <span className="text-slate-500 font-normal">({ondalikSaat(sonuc.normalDk)} saat)</span>
                    </>
                  )}
                </dd>
              </div>
              <div className="flex justify-between py-3">
                <dt className="text-slate-800 font-semibold">Fazla mesai</dt>
                <dd className="font-bold text-primary tabular-nums">
                  {sinirHatali ? "—" : (
                    <>
                      {sureMetni(sonuc.fazlaDk)} <span className="text-slate-500 font-normal">({ondalikSaat(sonuc.fazlaDk)} saat)</span>
                    </>
                  )}
                </dd>
              </div>
              <div className="flex justify-between py-3">
                <dt className="text-slate-600">Fazla mesai tutarı</dt>
                <dd className="font-semibold text-slate-800 tabular-nums">{tutar === null ? "—" : tutarMetni(tutar)}</dd>
              </div>
            </dl>

            <p className="mt-6 text-sm text-slate-500">
              Bu araç bilgi amaçlıdır ve tek bir haftayı hesaplar; denkleştirme, hafta tatili ve resmi tatil çalışması hesaba katılmaz.
              Giriş ve çıkış saati aynıysa o gün 0 sayılır; 24 saatlik vardiya girilemez.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default function FazlaMesaiHesaplamaPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Fazla Mesai Hesaplama | Haftalık Çalışma Süresi Hesabı - Mika Teknoloji"
        description="Giriş, çıkış ve mola sürelerini girin; haftalık toplam çalışma, normal çalışma ve sınırı aşan fazla mesai süresini hesaplayın. Saatlik ücretle tutarı görün."
        canonical={kanonikAdres(YOL)}
        jsonLd={[sssJsonLd(SSS), kirintiJsonLd(KIRINTI)]}
      />
      <Kirinti maddeler={KIRINTI} />
      <KonuGiris
        sikisik
        ust="PDKS · Hesaplama"
        baslik="Fazla Mesai Hesaplama"
        giris="Haftanın her günü için giriş, çıkış ve mola süresini girin; haftalık toplam çalışma, normal çalışma ve fazla mesai anında hesaplanır."
      />
      <HesaplamaAraci />
      <Adimlar baslik="Hesap Nasıl Yapılır?" maddeler={ADIMLAR} />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <BolumBasligi
            baslik="Mika PDKS'te Fazla Mesai"
            alt="Mika PDKS giriş-çıkış kayıtlarından çalışma süresini hesaplar; fazla mesai çalışma grubunda seçtiğiniz kurala göre ayrılır ve aylık puantajda kendi sütununda görünür."
          />
          <Link href="/puantaj-programi" className="inline-flex items-center text-primary font-semibold hover:underline">
            Puantaj Programı
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
      <SssBolumu maddeler={SSS} />
      <IlgiliSayfalar mevcutYol={YOL} />
      <DemoTalebi />
    </div>
  );
}
