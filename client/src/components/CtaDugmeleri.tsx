import { Link, useLocation } from "wouter";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA_ARA, CTA_DONANIM, CTA_YAZILIM, DEMO_TELEFON } from "@/lib/iletisim";
import { trackEvent } from "@/lib/analytics";

// Sitenin tek çağrı düğmesi çifti: birincil (İletişim sayfası) + ikincil (telefon).
// tur: "yazilim" → Demo ve Keşif Talep Edin, "donanim" → Teklif Alın.
// koyu: koyu zemin üzerinde ikincil düğme outlineLight olur.
// sayfa / olayOnek: analitik olay etiketi; verilmezse sayfa yolundan türetilir.
export default function CtaDugmeleri({
  tur,
  koyu = false,
  boyut = "lg",
  sinif = "",
  sayfa,
  olayOnek,
}: {
  tur: "yazilim" | "donanim";
  koyu?: boolean;
  boyut?: "default" | "lg";
  sinif?: string;
  sayfa?: string;
  olayOnek?: string;
}) {
  const [yol] = useLocation();
  const ad = sayfa ?? `${yol} Page`;
  const onek = olayOnek ?? (yol.replace(/^\/+|\/+$/g, "").replace(/[^a-z0-9]+/gi, "_") || "ana_sayfa");
  const birincilTikla = () =>
    trackEvent(tur === "yazilim" ? "Demo Request" : "Quote Request", `${onek}_demo`, `${ad} - Demo Button`);
  const ikincilTikla = () => trackEvent("Contact Request", `${onek}_contact`, `${ad} - Contact Button`);
  return (
    <div className={`flex flex-wrap gap-3 ${sinif}`}>
      <Button asChild size={boyut}>
        <Link href="/iletisim" onClick={birincilTikla}>{tur === "yazilim" ? CTA_YAZILIM : CTA_DONANIM}</Link>
      </Button>
      <Button asChild size={boyut} variant={koyu ? "outlineLight" : "outline"}>
        <a href={`tel:${DEMO_TELEFON}`} onClick={ikincilTikla}>
          <Phone className="h-4 w-4" />
          {CTA_ARA}
        </a>
      </Button>
    </div>
  );
}
