import { useState } from "react";
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
  HAFTANIN_GUNLERI,
  VARSAYILAN_SINIR_SAAT,
  fazlaMesaiTutari,
  haftayiHesapla,
  ondalikSaat,
  sayiOku,
  sureMetni,
  tutarMetni,
} from "@/lib/fazlaMesai";
import type { GunGirdisi } from "@/lib/fazlaMesai";

const YOL = "/fazla-mesai-hesaplama";

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

  const sinirSayi = sayiOku(sinir);
  const sonuc = haftayiHesapla(gunler, sinirSayi ?? VARSAYILAN_SINIR_SAAT);
  const tutar = fazlaMesaiTutari(sonuc.fazlaDk, sayiOku(ucret), sayiOku(katsayi));

  const guncelle = (i: number, alan: keyof GunGirdisi, deger: string) =>
    setGunler((onceki) => onceki.map((g, j) => (j === i ? { ...g, [alan]: deger } : g)));

  return (
    <section className="py-16 bg-white" aria-labelledby="hesaplama-baslik">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 id="hesaplama-baslik" className="text-3xl md:text-4xl font-bold text-slate-800">Haftalık Fazla Mesai Hesabı</h2>
        </div>
        <Card className="max-w-5xl mx-auto border-0 shadow-lg">
          <CardContent className="p-4 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-6">
              <div className="sm:w-64">
                <Label htmlFor="fm-sinir" className="text-slate-700">Haftalık normal çalışma sınırı (saat)</Label>
                <Input
                  id="fm-sinir"
                  type="text"
                  inputMode="decimal"
                  className="mt-2"
                  value={sinir}
                  onChange={(e) => setSinir(e.target.value)}
                  aria-invalid={sinirSayi === null}
                />
              </div>
              <div className="flex gap-3 sm:ml-auto">
                <Button type="button" variant="outline" onClick={() => setGunler(ORNEK_HAFTA)}>
                  Örnek Hafta
                </Button>
                <Button type="button" variant="outline" onClick={() => setGunler(BOS_HAFTA)}>
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Temizle
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left">
                <caption className="sr-only">Günlük giriş, çıkış ve mola süreleri</caption>
                <thead>
                  <tr className="border-b-2 border-slate-200 text-sm text-slate-600">
                    <th scope="col" className="py-3 pr-3 font-semibold">Gün</th>
                    <th scope="col" className="py-3 px-2 font-semibold">Giriş</th>
                    <th scope="col" className="py-3 px-2 font-semibold">Çıkış</th>
                    <th scope="col" className="py-3 px-2 font-semibold">Mola (dk)</th>
                    <th scope="col" className="py-3 pl-3 font-semibold text-right">Net Çalışma</th>
                  </tr>
                </thead>
                <tbody>
                  {HAFTANIN_GUNLERI.map((gun, i) => {
                    const net = sonuc.gunlukDk[i];
                    return (
                      <tr key={gun} className="border-b border-slate-100">
                        <th scope="row" className="py-2 pr-3 font-medium text-slate-800">{gun}</th>
                        <td className="py-2 px-2">
                          <Input
                            type="time"
                            aria-label={`${gun} giriş saati`}
                            value={gunler[i].giris}
                            onChange={(e) => guncelle(i, "giris", e.target.value)}
                          />
                        </td>
                        <td className="py-2 px-2">
                          <Input
                            type="time"
                            aria-label={`${gun} çıkış saati`}
                            value={gunler[i].cikis}
                            onChange={(e) => guncelle(i, "cikis", e.target.value)}
                          />
                        </td>
                        <td className="py-2 px-2">
                          <Input
                            type="number"
                            inputMode="numeric"
                            min={0}
                            step={5}
                            aria-label={`${gun} mola süresi, dakika`}
                            value={gunler[i].mola}
                            onChange={(e) => guncelle(i, "mola", e.target.value)}
                          />
                        </td>
                        <td className="py-2 pl-3 text-right tabular-nums text-slate-800">
                          {net === null ? "—" : sureMetni(net)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div>
                <Label htmlFor="fm-ucret" className="text-slate-700">Saatlik ücret (TL)</Label>
                <Input
                  id="fm-ucret"
                  type="text"
                  inputMode="decimal"
                  className="mt-2"
                  value={ucret}
                  onChange={(e) => setUcret(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="fm-katsayi" className="text-slate-700">Fazla mesai katsayısı</Label>
                <Input
                  id="fm-katsayi"
                  type="text"
                  inputMode="decimal"
                  className="mt-2"
                  value={katsayi}
                  onChange={(e) => setKatsayi(e.target.value)}
                />
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
                  {sureMetni(sonuc.normalDk)} <span className="text-slate-500 font-normal">({ondalikSaat(sonuc.normalDk)} saat)</span>
                </dd>
              </div>
              <div className="flex justify-between py-3">
                <dt className="text-slate-800 font-semibold">Fazla mesai</dt>
                <dd className="font-bold text-primary tabular-nums">
                  {sureMetni(sonuc.fazlaDk)} <span className="text-slate-500 font-normal">({ondalikSaat(sonuc.fazlaDk)} saat)</span>
                </dd>
              </div>
              <div className="flex justify-between py-3">
                <dt className="text-slate-600">Fazla mesai tutarı</dt>
                <dd className="font-semibold text-slate-800 tabular-nums">{tutar === null ? "—" : tutarMetni(tutar)}</dd>
              </div>
            </dl>

            <p className="mt-6 text-sm text-slate-500">
              Bu araç bilgi amaçlıdır ve tek bir haftayı hesaplar; denkleştirme, hafta tatili ve resmi tatil çalışması hesaba katılmaz.
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
