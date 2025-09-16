import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  selectedLanguage: Language;
  setSelectedLanguage: (lang: Language) => void;
  t: any; // Will be properly typed based on translations structure
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  tr: {
    promo: "Mika Teknoloji ile işletmenizi dijitalleştirin!",
    privacy: "Gizlilik",
    companyName: "Mika Teknoloji", 
    companySubtitle: "Kontrol Sistemleri",
    nav: {
      products: "Ürünler",
      about: "Hakkımızda", 
      solutions: "Çözümler",
      references: "Referanslar",
      blog: "Blog",
      contact: "İletişim"
    },
    home: {
      featuresTitle: "Size özelleştirilmiş çözümler",
      featuresSubtitle: "Uzman ve tecrübeli kadromuz ile her zaman yanınızdayız.",
      services: {
        webpdks: {
          title: "WebPDKS",
          description: "%100 Web Tabanlı Personel Devam Kontrol Sistemi"
        },
        qrPatrol: {
          title: "QR-Patrol", 
          description: "Online Bekçi Devriye Tur Kontrol Uygulaması (iOS & Android)"
        },
        accessControl: {
          title: "Access Kontrol",
          description: "Giriş çıkış kontrol ve otomasyon projelendirme"
        }
      },
      features: [
        "100,000'in üzerinde müşteri portföyü",
        "%100 Web tabanlı çözümler", 
        "Her yerden, her cihazdan erişim",
        "Modern teknoloji çözümleri",
        "Güvenilir PDKS çözümleri",
        "Uzman teknik destek"
      ]
    }
  },
  en: {
    promo: "Digitalize your business with Mika Technology!",
    privacy: "Privacy",
    companyName: "Mika Technology",
    companySubtitle: "Control Systems", 
    nav: {
      products: "Products",
      about: "About Us",
      solutions: "Solutions", 
      references: "References",
      blog: "Blog",
      contact: "Contact"
    },
    home: {
      featuresTitle: "Customized solutions for you",
      featuresSubtitle: "We are always with you with our expert and experienced team.",
      services: {
        webpdks: {
          title: "WebPDKS",
          description: "100% Web-Based Personnel Attendance Control System"
        },
        qrPatrol: {
          title: "QR-Patrol",
          description: "Online Security Patrol Tour Control Application (iOS & Android)"
        },
        accessControl: {
          title: "Access Control", 
          description: "Entry-exit control and automation project design"
        }
      },
      features: [
        "Over 100,000 customer portfolio",
        "100% Web-based solutions",
        "Access from anywhere, any device", 
        "Modern technology solutions",
        "Reliable PDKS solutions",
        "Expert technical support"
      ]
    }
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(() => {
    // Get from localStorage or default to Turkish
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'tr';
  });

  const t = translations[selectedLanguage];

  // Save to localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', selectedLanguage);
  }, [selectedLanguage]);

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}