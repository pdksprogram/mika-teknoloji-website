// Ana sayfa sözlüğü: iki dil tek yapıda, TR ve EN aynı bileşenden çizilir.
// EN sütunu bilerek daha kısa: İngilizceye çevrilmemiş ürün ekranları EN sayfaya girmez.
export type Dil = "tr" | "en";

export interface Blok { et: string; h: string; p: string; li: string[]; img: string; alt: string; tip: string }
export interface Sozluk {
  lang: string; menu: string[][]; giris: string; cta: string; cta_kisa: string; h1a: string; h1b: string; oz: string;
  not_: string; not_sos: string; alt_liste: string; alt_tel: string; neden: string; nedenler: string[][]; alt_adminim: string;
  dag: string; dag_sol: string; dag_sag: string; dag_x: string[]; dag_t: string[]; bloklar: Blok[]; mobil: string; mobil_p: string;
  teller: string[][]; sos_h: string; sos_p: string; sos: string[][]; sektor: string; sektorler: string[][]; son_h: string; son_p: string;
  son_cta: string;
  alt: [string, string[][]][]; dil_ad: string; dil_kisa: string; dil_yol: string; dil_kod: string;
  seo: { baslik: string; aciklama: string; yerel: string; diger: string; kurum: string; yazilim: string; site: string };
}

export const SOZLUK: Record<Dil, Sozluk> = {
  "tr": {
    "lang": "tr",
    "menu": [
      [
        "Ürünler",
        "#urun"
      ],
      [
        "Çözümler",
        "#akis"
      ],
      [
        "Sektörler",
        "#sektor"
      ],
      [
        "Mobil",
        "#mobil"
      ]
    ],
    "giris": "Giriş",
    "cta": "Teklif ve Demo Talep Edin",
    "cta_kisa": "Teklif Alın",
    "h1a": "Personel takibiniz,",
    "h1b": "Mika ile tek merkezde.",
    "oz": "Giriş-çıkış, vardiya, izin ve bordro hazırlığı aynı programda. Yöneticiniz masaüstünden, personeliniz telefondan kullanır.",
    "not_": "Örnek veriler · E‑SOFT PDKS by Mika Teknoloji",
    "not_sos": "Örnek veriler · Mika Sosyal",
    "alt_liste": "Mika giriş-çıkış listesi",
    "alt_tel": "Mika mobil yönetici ekranı",
    "neden": "Neden Mika?",
    "nedenler": [
      [
        "Günün durumu tek bakışta",
        "Gelen, içeride, izinli ve devamsız sayıları ilk ekranda."
      ],
      [
        "Onaylar bekletmez",
        "İzin ve saat talepleri yöneticinin ekranına düşer."
      ],
      [
        "Ay sonu hazır",
        "Puantaj ve bordro hazırlığı kayıtlardan çıkar."
      ]
    ],
    "alt_adminim": "Mika günlük özet ekranı",
    "dag": "Dağınık takipten tek merkeze",
    "dag_sol": "Dağınık takip",
    "dag_sag": "Mika ile tek merkez",
    "dag_x": [
      "Puantaj ayrı dosyada",
      "İzin talebi kâğıtta",
      "Cihaz kayıtları ayrı yerde",
      "Ay sonu elle toplama"
    ],
    "dag_t": [
      "Giriş-çıkışlar tek listede",
      "İzin talebi telefondan",
      "Devamsızlık listede işaretli",
      "Liste gerçek Excel dosyası olarak iner"
    ],
    "bloklar": [
      {
        "et": "VARDİYA",
        "h": "Vardiya planı tek ekranda",
        "p": "Kişi ve gün bazında vardiyalar aynı tabloda görünür.",
        "li": [
          "Vardiya ve izin günleri bir arada",
          "Plan onayı telefondan da yapılır"
        ],
        "img": "vardiya",
        "alt": "Mika vardiya planı",
        "tip": "web"
      },
      {
        "et": "İZİN VE FAZLA MESAİ",
        "h": "Talep telefondan, onay tek ekrandan",
        "p": "Personelin talebi yöneticinin bekleyen işlerine düşer.",
        "li": [
          "Bekleyen talepler ayrı görünür",
          "Onay veya ret talep detayından"
        ],
        "img": "izin",
        "alt": "Mika izin talepleri ekranı",
        "tip": "tel"
      },
      {
        "et": "PERSONEL HAREKET DETAYI",
        "h": "Ayın her günü tek çizelgede",
        "p": "Çalışma saati, hafta tatili ve devamsızlık gün gün görünür.",
        "li": [
          "Aylık puantaj dökümü",
          "Eksik gün bir bakışta"
        ],
        "img": "icmal",
        "alt": "Mika aylık devam çizelgesi",
        "tip": "web"
      },
      {
        "et": "BORDRO HAZIRLIĞI",
        "h": "Bordro verisi kayıtlardan hazırlanır",
        "p": "Kazanç, kesinti ve fazla mesai satır satır ayrılır.",
        "li": [
          "Gün, saat ve ücret dökümü",
          "İzin ve avans kalemleri"
        ],
        "img": "bordro",
        "alt": "Mika bordro özeti",
        "tip": "web"
      }
    ],
    "mobil": "Cebinizdeki Mika",
    "mobil_p": "Personel ve yönetici aynı uygulamayı kullanır.",
    "teller": [
      [
        "patron",
        "Yönetici özeti"
      ],
      [
        "gc",
        "Giriş-çıkış geçmişi"
      ],
      [
        "patron2",
        "Bekleyen işlemler"
      ]
    ],
    "sos_h": "Mika Sosyal tüm ekibi aynı akışta buluşturur.",
    "sos_p": "Duyuruları paylaşın, katkıları görünür kılın ve ekip geri bildirimini tek iş akışında toplayın.",
    "sos": [
      [
        "akis1",
        "Duyuru",
        "Duyurular"
      ],
      [
        "akis2",
        "Takdir ve Anket",
        "Takdir ve Anket"
      ]
    ],
    "sektor": "Sektörünüze göre",
    "sektorler": [
      [
        "Üretim",
        "Vardiyalı ekipler",
        "Vardiya, izin ve fazla mesai aynı planda.",
        "vardiya",
        "Mika vardiya planı"
      ],
      [
        "Perakende",
        "Mağaza ekipleri",
        "Giriş-çıkış ve devamsızlık tek listede.",
        "liste",
        "Mika giriş-çıkış listesi"
      ],
      [
        "Hizmet",
        "Ofis ve saha ekipleri",
        "Aylık devam çizelgesi kişi kişi hazır.",
        "icmal",
        "Mika aylık devam çizelgesi"
      ]
    ],
    "son_h": "Kendi yapınızda görelim",
    "son_p": "Personel sayınızı ve kapılarınızı konuşalım, keşif ve teklifi birlikte çıkaralım.",
    "son_cta": "Teklif ve Demo Talep Edin",
    "alt": [
      [
        "Ürünler",
        [
          [
            "PDKS Programı",
            "/pdks-programi"
          ],
          [
            "Personel Takip",
            "/urunler/personel-takip"
          ],
          [
            "QR PDKS",
            "/qr-pdks"
          ],
          [
            "Puantaj",
            "/puantaj-programi"
          ],
          [
            "Vardiya",
            "/vardiya-takip-programi"
          ],
          [
            "Fazla Mesai",
            "/fazla-mesai-hesaplama"
          ]
        ]
      ],
      [
        "Donanım",
        [
          [
            "Turnike",
            "/urunler/turnike"
          ],
          [
            "Bariyer",
            "/urunler/bariyer-sistemleri"
          ],
          [
            "Yüz Tanıma",
            "/urunler/yuz-tanima"
          ],
          [
            "Parmak İzi",
            "/urunler/parmak-izi-tanima"
          ],
          [
            "Geçiş Kontrol",
            "/urunler/gecis-kontrol"
          ],
          [
            "QR Bekçi",
            "/qr-bekci"
          ]
        ]
      ],
      [
        "Kurumsal",
        [
          [
            "Hakkımızda",
            "/hakkimizda"
          ],
          [
            "Referanslar",
            "/referanslar"
          ],
          [
            "Blog",
            "/blog"
          ],
          [
            "Videolar",
            "/videolar"
          ],
          [
            "İletişim",
            "/iletisim"
          ]
        ]
      ],
      [
        "Yasal",
        [
          [
            "KVKK Aydınlatma",
            "/kvkk"
          ],
          [
            "Gizlilik",
            "/mobil-gizlilik-sozlesmesi.php"
          ],
          [
            "Hizmet Şartları",
            "/hizmet-sartlari"
          ],
          [
            "Veri Silme",
            "/veri-silme"
          ]
        ]
      ]
    ],
    "seo": {
      "baslik": "PDKS, Turnike ve Geçiş Kontrol Sistemleri | Mika Teknoloji",
      "aciklama": "Giriş-çıkış, vardiya, izin ve bordro hazırlığı aynı programda. Parmak izi, yüz tanıma, QR kod ve kartlı personel devam kontrol: Mika Teknoloji.",
      "yerel": "tr_TR",
      "diger": "en_US",
      "kurum": "PDKS sistemi sağlayıcısı. Personel devam kontrol, parmak izi takip, yüz tanıma çözümleri.",
      "yazilim": "Web tabanlı PDKS sistemi. Parmak izi, yüz tanıma, QR kod desteği.",
      "site": "PDKS, Personel Devam Kontrol Sistemi ve Güvenlik Çözümleri"
    },
    "dil_ad": "English",
    "dil_kisa": "EN",
    "dil_yol": "/",
    "dil_kod": "en"
  },
  "en": {
    "lang": "en",
    "menu": [
      [
        "Products",
        "#urun"
      ],
      [
        "Solutions",
        "#akis"
      ],
      [
        "Industries",
        "#sektor"
      ],
      [
        "Mobile",
        "#mobil"
      ]
    ],
    "giris": "Sign In",
    "cta": "Request a Quote",
    "cta_kisa": "Request a Quote",
    "h1a": "Attendance, shifts and leave",
    "h1b": "in one place with Mika.",
    "oz": "Time tracking, shift planning, leave and payroll preparation in a single program. Managers work on the desktop, employees on their phones.",
    "not_": "Example data · E‑SOFT PDKS by Mika Teknoloji",
    "not_sos": "Example data · Mika Social",
    "alt_liste": "Mika entry and exit list",
    "alt_tel": "Patron Manager App screen",
    "neden": "Why Mika?",
    "nedenler": [
      [
        "The day at a glance",
        "See who came in, who is inside, on leave or absent on the first screen."
      ],
      [
        "Approvals keep moving",
        "Leave and hourly requests land on the manager's screen."
      ],
      [
        "Month-end is ready",
        "Attendance and payroll preparation come straight from the records."
      ]
    ],
    "alt_adminim": "Mika attendance overview",
    "dag": "From scattered tracking to one place",
    "dag_sol": "Scattered tracking",
    "dag_sag": "One place with Mika",
    "dag_x": [
      "Timesheets in separate files",
      "Leave requests on paper",
      "Device records kept elsewhere",
      "Month-end totals by hand"
    ],
    "dag_t": [
      "All entries and exits in one list",
      "Leave requests from the phone",
      "Absences marked in the list",
      "Lists download as real Excel files"
    ],
    "bloklar": [
      {
        "et": "LEAVE APPROVALS",
        "h": "Requested on the phone, approved in one place",
        "p": "In the Patron Manager App, each request goes straight to the pending list.",
        "li": [
          "Pending requests shown separately",
          "Approve or reject from the request detail"
        ],
        "img": "izin",
        "alt": "Patron Manager App leave requests",
        "tip": "tel"
      },
      {
        "et": "PAYROLL PREPARATION",
        "h": "Payroll figures come from the records",
        "p": "Gross earnings, deductions and net pay are laid out line by line.",
        "li": [
          "Earnings and deductions summary",
          "Net paid amount per employee"
        ],
        "img": "bordro",
        "alt": "Mika payroll summary",
        "tip": "kucuk"
      }
    ],
    "mobil": "Mika in your pocket",
    "mobil_p": "The Patron Manager App puts the day's figures and pending requests on the manager's phone.",
    "teller": [
      [
        "patron",
        "Daily summary"
      ],
      [
        "patron2",
        "Pending requests"
      ]
    ],
    "sos_h": "Mika Social keeps every team in the loop.",
    "sos_p": "Publish announcements, recognise contributions and collect feedback in one workplace feed.",
    "sos": [
      [
        "akis1",
        "Announcements",
        "Announcements"
      ],
      [
        "akis2",
        "Recognition and polls",
        "Recognition and polls"
      ]
    ],
    "sektor": "Built for your industry",
    "sektorler": [
      [
        "Manufacturing",
        "Daily workforce overview",
        "Daily headcount, arrivals, leave and pending approvals on one screen.",
        "adminim",
        "Mika attendance overview"
      ],
      [
        "Retail",
        "Store teams",
        "Entries, exits and absences in one list.",
        "liste",
        "Mika entry and exit list"
      ],
      [
        "Services",
        "Office and field teams",
        "Earnings and deductions ready for payroll.",
        "bordro",
        "Mika payroll summary"
      ]
    ],
    "son_h": "Let's look at your setup",
    "son_p": "Tell us your headcount and doors, and we will prepare a site survey and a quote together.",
    "son_cta": "Email Us",
    "alt": [
      ["Product", [["Products", "#urun"], ["Solutions", "#akis"], ["Industries", "#sektor"], ["Mobile", "#mobil"]]],
      ["Contact", [["Request a Quote", "#demo"], ["Phone", "@tel"], ["info@mikateknoloji.com", "mailto:info@mikateknoloji.com"], ["WhatsApp", "@wa"]]],
      ["Legal (in Turkish)", [["Data Protection", "/kvkk"], ["Privacy", "/mobil-gizlilik-sozlesmesi.php"], ["Terms", "/hizmet-sartlari"], ["Data Deletion", "/veri-silme"]]]
    ],
    "seo": {
      "baslik": "Time and Attendance Software | Mika Teknoloji",
      "aciklama": "Time tracking, shift planning, leave and payroll preparation in a single program, on desktop and phone. Mika Teknoloji, Istanbul.",
      "yerel": "en_US",
      "diger": "tr_TR",
      "kurum": "Time and attendance and access control provider: fingerprint, face recognition and QR attendance.",
      "yazilim": "Web-based time and attendance software with fingerprint, face recognition and QR code support.",
      "site": "Time and attendance software and access control"
    },
    "dil_ad": "Türkçe",
    "dil_kisa": "TR",
    "dil_yol": "/tr",
    "dil_kod": "tr"
  }
};

// Gerçek dosya ölçüleri: width/height ile yer ayrılır, CLS oluşmaz.
export const OLCU: Record<string, [number, number]> = {"tr/adminim": [1800, 522], "tr/akis1": [900, 2000], "tr/akis2": [900, 2000], "tr/bordro": [1800, 825], "tr/gc": [900, 2000], "tr/icmal": [1800, 911], "tr/izin": [900, 2000], "tr/liste": [1800, 515], "tr/m2_bordro": [840, 646], "tr/m2_icmal": [756, 354], "tr/m2_liste": [706, 336], "tr/m2_vardiya": [798, 411], "tr/m_bordro": [876, 646], "tr/m_icmal": [792, 609], "tr/m_liste": [739, 421], "tr/m_vardiya": [834, 549], "tr/patron": [900, 2000], "tr/patron2": [900, 2000], "tr/patron2_ust": [900, 1040], "tr/vardiya": [1800, 730], "en/adminim": [1800, 522], "en/akis1": [900, 2000], "en/akis2": [900, 2000], "en/bordro": [876, 650], "en/izin": [900, 2000], "en/liste": [1800, 526], "en/m2_bordro": [840, 650], "en/m2_liste": [688, 337], "en/m_bordro": [876, 650], "en/m_liste": [720, 422], "en/patron": [900, 2000], "en/patron2": [900, 2000], "en/patron2_ust": [900, 1040]};
