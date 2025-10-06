import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showWidget, setShowWidget] = useState(false);

  // Show widget after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWidget(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = "https://wa.me/905467122296";

  const handleWhatsAppClick = () => {
    window.open(whatsappNumber, '_blank');
    setIsOpen(false);
  };

  if (!showWidget) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden mb-2"
          >
            <div className="bg-gradient-to-r from-green-600 to-green-500 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Mika Teknoloji</h3>
                    <p className="text-xs text-green-50">Genellikle birkaç dakika içinde yanıt verir</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-green-100 transition-colors"
                  aria-label="Kapat"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="p-6 bg-gray-50">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                <p className="text-gray-700 text-sm">
                  👋 Merhaba! Size nasıl yardımcı olabiliriz?
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  PDKS sistemleri, bariyer çözümleri ve diğer ürünlerimiz hakkında bilgi almak için mesaj gönderin.
                </p>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp'ta Sohbet Başlat</span>
              </button>

              <p className="text-center text-xs text-gray-400 mt-3">
                WhatsApp ile güvenli mesajlaşma
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-colors group relative"
        aria-label="WhatsApp ile iletişime geç"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-7 w-7" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-7 w-7" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse effect */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></span>
        )}

        {/* Badge with notification dot */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
      </motion.button>

      {/* Tooltip */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg"
        >
          WhatsApp ile konuşun
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-900"></div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
