import { Link } from "wouter";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA_ARA, CTA_DONANIM, CTA_YAZILIM, DEMO_TELEFON } from "@/lib/iletisim";

// Sitenin tek çağrı düğmesi çifti: birincil (İletişim sayfası) + ikincil (telefon).
// tur: "yazilim" → Demo ve Keşif Talep Edin, "donanim" → Teklif Alın.
// koyu: koyu zemin üzerinde ikincil düğme outlineLight olur.
export default function CtaDugmeleri({
  tur,
  koyu = false,
  boyut = "lg",
  sinif = "",
}: {
  tur: "yazilim" | "donanim";
  koyu?: boolean;
  boyut?: "default" | "lg";
  sinif?: string;
}) {
  return (
    <div className={`flex flex-wrap gap-3 ${sinif}`}>
      <Button asChild size={boyut}>
        <Link href="/iletisim">{tur === "yazilim" ? CTA_YAZILIM : CTA_DONANIM}</Link>
      </Button>
      <Button asChild size={boyut} variant={koyu ? "outlineLight" : "outline"}>
        <a href={`tel:${DEMO_TELEFON}`}>
          <Phone className="h-4 w-4" />
          {CTA_ARA}
        </a>
      </Button>
    </div>
  );
}
