import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Delay before hiding
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mx-auto w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-xl">
            <span className="text-2xl font-bold text-white">MT</span>
          </div>
        </motion.div>

        {/* Company Name Animation */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-2xl font-bold text-slate-800 mb-2">
            Mika Teknoloji
          </h1>
          <p className="text-lg text-primary font-medium">
            Kontrol Sistemleri
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "200px", opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto bg-slate-200 rounded-full h-1 overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-4 text-sm text-slate-500"
        >
          Yükleniyor...
        </motion.p>
      </div>
    </motion.div>
  );
}