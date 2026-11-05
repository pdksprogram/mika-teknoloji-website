import { Link } from "wouter";
import MikaMarka from "@/components/MikaMarka";
import { DEMO_TELEFON, DEMO_TELEFON_GORUNEN, whatsappMesajAdresi } from "@/lib/iletisim";

// Ana sayfadaki alt bölümün aynısı. Her sayfadan ürün sayfalarına taranabilir iç bağlantı verir.
const SUTUNLAR: [string, [string, string][]][] = [
  ["Ürünler", [
    ["PDKS Programı", "/pdks-programi"],
    ["Personel Takip", "/urunler/personel-takip"],
    ["QR PDKS", "/qr-pdks"],
    ["Puantaj", "/puantaj-programi"],
    ["Vardiya", "/vardiya-takip-programi"],
    ["Fazla Mesai", "/fazla-mesai-hesaplama"],
  ]],
  ["Donanım", [
    ["Turnike", "/urunler/turnike"],
    ["Bariyer", "/urunler/bariyer-sistemleri"],
    ["Yüz Tanıma", "/urunler/yuz-tanima"],
    ["Parmak İzi", "/urunler/parmak-izi-tanima"],
    ["Geçiş Kontrol", "/urunler/gecis-kontrol"],
    ["QR Bekçi", "/qr-bekci"],
  ]],
  ["Kurumsal", [
    ["Hakkımızda", "/hakkimizda"],
    ["Referanslar", "/referanslar"],
    ["Blog", "/blog"],
    ["Videolar", "/videolar"],
    ["İletişim", "/iletisim"],
  ]],
  ["Yasal", [
    ["KVKK Aydınlatma", "/kvkk"],
    ["Gizlilik", "/mobil-gizlilik-sozlesmesi.php"],
    ["Hizmet Şartları", "/hizmet-sartlari"],
    ["Veri Silme", "/veri-silme"],
  ]],
];

const BAG = "flex min-h-[44px] items-center hover:text-white lg:block lg:min-h-0 lg:py-1";
const SATIR_BAG = "inline-flex min-h-[44px] items-center hover:text-white lg:min-h-0";

export default function SiteFooter() {
  return (
    <footer className="bg-[#120C36] pb-7 pt-12 text-[15px] leading-6 text-[#D9DCEC]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-[1.1fr_repeat(4,1fr)]">
          <div className="col-span-2 lg:col-span-1"><MikaMarka /></div>
          {SUTUNLAR.map(([baslik, baglar]) => (
            <nav key={baslik} aria-label={baslik}>
              <strong className="mb-2 block font-semibold text-white">{baslik}</strong>
              {baglar.map(([ad, yol]) => (
                <Link key={yol} href={yol} className={BAG}>{ad}</Link>
              ))}
            </nav>
          ))}
        </div>
        {/* Yasal ad ve adres: Meta işletme doğrulaması ve PayTR için her sayfada birebir kalır. VKN gösterilmez. */}
        <div className="mt-7 border-t border-white/15 pt-4 text-sm leading-[22px]">
          Mika Teknoloji — Ercan Toksoy · Perpa Ticaret Merkezi A Blok 4-5. Kat No:0158, Şişli / İstanbul ·{" "}
          <a href={`tel:${DEMO_TELEFON}`} className={SATIR_BAG}>{DEMO_TELEFON_GORUNEN}</a>{" · "}
          <a href="mailto:info@mikateknoloji.com" className={SATIR_BAG}>info@mikateknoloji.com</a>{" · "}
          <a
            href={whatsappMesajAdresi("Merhaba, web sitenizden yazıyorum.")}
            target="_blank"
            rel="noopener noreferrer"
            className={SATIR_BAG}
          >
            WhatsApp
          </a>
        </div>
        <div className="mt-2 text-sm leading-5">© Mika Teknoloji</div>
      </div>
    </footer>
  );
}
