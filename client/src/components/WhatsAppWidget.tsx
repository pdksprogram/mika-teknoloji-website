import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappMesajAdresi } from "@/lib/iletisim";
import { trackEvent } from "@/lib/analytics";

// Yüzen WhatsApp düğmesi: tıklanınca doğrudan WhatsApp sohbeti açılır (ara pencere yok).
export default function WhatsAppWidget({ mobildeGizle = false }: { mobildeGizle?: boolean }) {
  const [showWidget, setShowWidget] = useState(false);

  // 2 saniye sonra görünür
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWidget(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!showWidget) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-40${mobildeGizle ? " hidden sm:block" : ""}`}>
      <a
        href={whatsappMesajAdresi("Merhaba, web sitenizden yazıyorum.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        onClick={() => trackEvent("Contact Request", "whatsapp_float", "WhatsApp Float Button")}
        className="w-16 h-16 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-colors"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      {/* Masaüstü ipucu */}
      <div className="hidden sm:block pointer-events-none absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
        WhatsApp ile konuşun
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
          <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-900"></div>
        </div>
      </div>
    </div>
  );
}
