import { useRef, useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SEO from "@/seo/SEO";
import { Kirinti, kirintiJsonLd, type KirintiMaddesi } from "@/components/PdksIcerik";
import { CTA_ARA, DEMO_TELEFON, DEMO_TELEFON_GORUNEN, DEMO_WHATSAPP, whatsappMesajAdresi } from "@/lib/iletisim";

const KIRINTI: KirintiMaddesi[] = [
  { ad: "Ana Sayfa", yol: "/" },
  { ad: "İletişim", yol: "/iletisim" },
];

const URUNLER = [
  "PDKS Programı",
  "QR Kodlu Personel Takibi",
  "Yüz Tanıma / Parmak İzi Cihazı",
  "Turnike",
  "Bariyer",
  "Kartlı Geçiş Kontrol",
  "Diğer",
];

type Alan = "adSoyad" | "telefon" | "eposta" | "urun" | "mesaj";
type Hatalar = Partial<Record<Alan, string>>;

// Yalnız rakam, en fazla 11 hane; 0 ile başlıyorsa 0XXX XXX XX XX, değilse XXX XXX XX XX.
function telefonBicimle(deger: string) {
  const r = deger.replace(/\D/g, "").slice(0, 11);
  const parca = r.startsWith("0") ? [4, 3, 2, 2] : [3, 3, 2, 2];
  const sonuc: string[] = [];
  let i = 0;
  for (const n of parca) {
    if (i >= r.length) break;
    sonuc.push(r.slice(i, i + n));
    i += n;
  }
  return sonuc.join(" ");
}

function telefonGecerli(deger: string) {
  const r = deger.replace(/\D/g, "");
  return r.startsWith("0") ? r.length === 11 : r.length === 10;
}

const EPOSTA_DESENI = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const BILGI = [
  { ikon: MapPin, baslik: "Adres", satirlar: ["Perpa Ticaret Merkezi A Blok 4-5. Kat No:0158", "34384 Şişli / İstanbul"] },
  { ikon: Mail, baslik: "E-posta", satirlar: ["info@mikateknoloji.com", "satis@mikateknoloji.com"] },
  { ikon: Clock, baslik: "Çalışma Saatleri", satirlar: ["Pazartesi - Cuma: 09:00 - 18:00"] },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [telefon, setTelefon] = useState("");
  const [hatalar, setHatalar] = useState<Hatalar>({});
  const [gonderildi, setGonderildi] = useState(false);

  function dogrula(v: Record<Alan, string>): Hatalar {
    const h: Hatalar = {};
    if (v.adSoyad.trim().length < 2) h.adSoyad = "Ad soyad yazın.";
    if (!telefonGecerli(v.telefon)) h.telefon = "Telefonu 0 5xx xxx xx xx biçiminde yazın.";
    if (v.eposta.trim() && !EPOSTA_DESENI.test(v.eposta.trim())) h.eposta = "Geçerli bir e-posta yazın.";
    if (!v.urun) h.urun = "İlgilendiğiniz ürünü seçin.";
    if (v.mesaj.trim().length < 5) h.mesaj = "Kısa bir mesaj yazın.";
    return h;
  }

  function gonder(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const al = (ad: string) => String(fd.get(ad) ?? "");
    const v: Record<Alan, string> = {
      adSoyad: al("adSoyad"),
      telefon: al("telefon"),
      eposta: al("eposta"),
      urun: al("urun"),
      mesaj: al("mesaj"),
    };
    const firma = al("firma").trim();
    const h = dogrula(v);
    setHatalar(h);
    const ilkHata = (Object.keys(h) as Alan[])[0];
    if (ilkHata) {
      setGonderildi(false);
      formRef.current?.querySelector<HTMLElement>(`[name="${ilkHata}"]`)?.focus();
      return;
    }
    const satirlar = [
      "Merhaba, web sitenizden yazıyorum.",
      `Ad Soyad: ${v.adSoyad.trim()}`,
      firma ? `Firma: ${firma}` : "",
      `Telefon: ${v.telefon.trim()}`,
      v.eposta.trim() ? `E-posta: ${v.eposta.trim()}` : "",
      `İlgilenilen ürün: ${v.urun}`,
      `Mesaj: ${v.mesaj.trim()}`,
    ].filter(Boolean);
    window.open(whatsappMesajAdresi(satirlar.join("\n")), "_blank", "noopener,noreferrer");
    setGonderildi(true);
  }

  // Alan düzeltildikçe o alanın hatası kalkar.
  function temizle(ad: Alan) {
    if (hatalar[ad]) setHatalar((h) => ({ ...h, [ad]: undefined }));
  }

  const hataSinifi = (ad: Alan) => (hatalar[ad] ? "border-destructive" : "");
  const HataMetni = ({ ad }: { ad: Alan }) =>
    hatalar[ad] ? (
      <p id={`${ad}-hata`} className="text-sm text-destructive">
        {hatalar[ad]}
      </p>
    ) : null;
  const aria = (ad: Alan) => ({
    "aria-invalid": hatalar[ad] ? true : undefined,
    "aria-describedby": hatalar[ad] ? `${ad}-hata` : undefined,
  });

  return (
    <div className="min-h-screen bg-white">
      <SEO title="İletişim | Mika Teknoloji" description="PDKS, kartlı geçiş, turnike ve bariyer sistemleri için teklif ve destek: Mika Teknoloji iletişim bilgileri, adres ve telefon." jsonLd={kirintiJsonLd(KIRINTI)} />
      <Kirinti maddeler={KIRINTI} icSinif="pb-4" />
      <section className="bg-slate-900 border-b-4 border-primary text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="contact-title">İletişim</h1>
          <p className="text-slate-300 max-w-2xl">
            Teklif, keşif ve destek için bize ulaşın.
          </p>
        </div>
      </section>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Form: mobilde önce gelir, masaüstünde sağda */}
          <div className="lg:col-span-2 lg:order-2">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-slate-800">Teklif ve Demo Talebi</CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={formRef} className="space-y-5" data-testid="contact-form" onSubmit={gonder} noValidate>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="adSoyad">Ad Soyad *</Label>
                      <Input
                        id="adSoyad"
                        name="adSoyad"
                        autoComplete="name"
                        placeholder="Adınız ve soyadınız"
                        required
                        className={hataSinifi("adSoyad")}
                        onChange={() => temizle("adSoyad")}
                        {...aria("adSoyad")}
                        data-testid="input-ad-soyad"
                      />
                      <HataMetni ad="adSoyad" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="firma">Firma</Label>
                      <Input
                        id="firma"
                        name="firma"
                        autoComplete="organization"
                        placeholder="Firma adı"
                        data-testid="input-firma"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="telefon">Telefon *</Label>
                      <Input
                        id="telefon"
                        name="telefon"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel"
                        placeholder="0 5xx xxx xx xx"
                        maxLength={14}
                        required
                        value={telefon}
                        onChange={(e) => {
                          setTelefon(telefonBicimle(e.target.value));
                          temizle("telefon");
                        }}
                        className={hataSinifi("telefon")}
                        {...aria("telefon")}
                        data-testid="input-telefon"
                      />
                      <HataMetni ad="telefon" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eposta">E-posta</Label>
                      <Input
                        id="eposta"
                        name="eposta"
                        type="email"
                        autoComplete="email"
                        placeholder="ornek@firma.com"
                        className={hataSinifi("eposta")}
                        onChange={() => temizle("eposta")}
                        {...aria("eposta")}
                        data-testid="input-eposta"
                      />
                      <HataMetni ad="eposta" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="urun">İlgilenilen Ürün *</Label>
                    <select
                      id="urun"
                      name="urun"
                      required
                      defaultValue=""
                      onChange={() => temizle("urun")}
                      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base md:text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${hataSinifi("urun")}`}
                      {...aria("urun")}
                      data-testid="select-urun"
                    >
                      <option value="" disabled>Seçin</option>
                      {URUNLER.map((u) => (
                        <option key={u} value={u}>{u}</option>
                      ))}
                    </select>
                    <HataMetni ad="urun" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mesaj">Mesaj *</Label>
                    <Textarea
                      id="mesaj"
                      name="mesaj"
                      placeholder="Personel sayısı, şube ya da kapı sayısı gibi ihtiyacınızı yazın"
                      rows={4}
                      required
                      className={hataSinifi("mesaj")}
                      onChange={() => temizle("mesaj")}
                      {...aria("mesaj")}
                      data-testid="textarea-mesaj"
                    />
                    <HataMetni ad="mesaj" />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button type="submit" size="lg" className="sm:flex-1" data-testid="submit-button">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp ile Gönder
                    </Button>
                    <Button asChild size="lg" variant="outline" className="sm:flex-1" data-testid="phone-call-button">
                      <a href={`tel:${DEMO_TELEFON}`}>
                        <Phone className="h-4 w-4" />
                        {CTA_ARA}
                      </a>
                    </Button>
                  </div>
                  {gonderildi && (
                    <p role="status" className="text-sm text-slate-700" data-testid="form-onay">
                      Mesajınız WhatsApp'ta hazır; Gönder'e basmanız yeterli.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* İletişim bilgileri: tek kart, sıkı satırlar */}
          <div className="lg:col-span-1 lg:order-1">
            <Card>
              <CardContent className="p-0 divide-y divide-slate-200">
                <div className="flex items-start gap-3 px-5 py-4">
                  <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-slate-800">Telefon</div>
                    <a
                      href={`tel:${DEMO_TELEFON}`}
                      className="inline-flex items-center min-h-11 text-slate-700 hover:text-primary transition-colors"
                      data-testid="contact-phone-link"
                    >
                      {DEMO_TELEFON_GORUNEN}
                    </a>
                  </div>
                </div>
                {BILGI.map((b) => (
                  <div key={b.baslik} className="flex items-start gap-3 px-5 py-4">
                    <b.ikon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-slate-800">{b.baslik}</div>
                      {b.satirlar.map((s) => (
                        <div key={s} className="text-sm text-slate-600 break-words">
                          {s.includes("@") ? (
                            <a href={`mailto:${s}`} className="hover:text-primary transition-colors">{s}</a>
                          ) : (
                            s
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="px-5 py-4">
                  <Button asChild variant="outline" className="w-full" data-testid="whatsapp-button">
                    <a href={DEMO_WHATSAPP} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp ile Yazın
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Konum */}
        <div className="mt-12 md:mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800 flex items-center">
                <MapPin className="mr-3 h-6 w-6 text-primary" />
                Konum
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-slate-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.8665934891897!2d28.977043315528033!3d41.01513797930165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab765c7f55555%3A0x5d7e8e4e8e4e8e4e!2sPerpa%20Ticaret%20Merkezi%20A%20Blok!5e0!3m2!1str!2str!4v1692123456789!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mika Teknoloji Konum - Perpa Ticaret Merkezi A Blok"
                  data-testid="google-map"
                ></iframe>
              </div>
              <div className="mt-4 flex justify-center">
                <Button asChild variant="outline" data-testid="map-button">
                  <a href="https://www.google.com/maps/place/41.015137,28.979530" target="_blank" rel="noopener noreferrer">
                    Haritada Göster
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
