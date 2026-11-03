// Ürün sayfalarının alt bölüm verisi (components/UrunEkIcerik.tsx).
// Kaynak: yalnız sitede zaten yayımlı bilgiler — ürün detay sayfalarının teknik tabloları,
// BariyerSistemleriPage (segments, faqs, servis bölümü) ve ParkingAutomationPage (faqs, benefits).
// Yeni bilgi eklenecekse önce ilgili ürün sayfasında yer almalıdır.

export type Sss = { soru: string; cevap: string };
export type Karsilastirma = {
  baslik: string;
  sutunlar: string[];
  satirlar: { ad: string; yol?: string; hucreler: string[] }[];
};

export const BARIYER_TABLOSU: Karsilastirma = {
  baslik: "Bariyer Modelleri Karşılaştırma",
  sutunlar: ["Model", "Tür", "Öne çıkan değerler"],
  satirlar: [
    { ad: "MT Plus Bariyer Sistemi", yol: "/urunler/pt-plus-bariyer", hucreler: ["Kollu bariyer", "5,25 m LED'li kol · 7 sn açılma · IP 54"] },
    { ad: "MT Genius Bariyer Sistemi", yol: "/urunler/pt-genius-bariyer", hucreler: ["Yandan kollu bariyer", "5,50 m kol · 3 sn açılma · IP44"] },
    { ad: "MT Guard Bariyer Sistemi", yol: "/urunler/pt-guard-bariyer", hucreler: ["Yüksek güvenlik bariyeri", "Ağır hizmet tipi · darbe emilimi"] },
    { ad: "Hidrolik Mantar Bariyer", yol: "/urunler/mantar-bariyer", hucreler: ["Yükselen hidrolik bariyer", "50 cm yükseklik · 100 bar hidrolik · IP 67"] },
    { ad: "Road Blocker Sistem", yol: "/urunler/road-blocker", hucreler: ["Hidrolik yol kesici", "2-6 m uzunluk · 4-6 sn açma/kapama · güneş enerjili LED"] },
    { ad: "Tuzaklar & Kapanlar", yol: "/urunler/tuzaklar-kapanlar", hucreler: ["Tuzak ve seyyar kapan", "Ters yön girişini engeller · 4 m standart kapama genişliği"] },
  ],
};

export const TURNIKE_TABLOSU: Karsilastirma = {
  baslik: "Bel Tipi Turnike Modelleri Karşılaştırma",
  sutunlar: ["Model", "Geçiş hızı", "Koruma", "Çalışma sıcaklığı", "Ağırlık", "Ortam"],
  satirlar: [
    { ad: "MT 250 ECO", yol: "/urunler/t250-eco-turnike", hucreler: ["25 kişi/dk", "IP 44", "-15 °C / +60 °C", "28 kg", "İç ortam"] },
    { ad: "MT 345", yol: "/urunler/t345-turnike", hucreler: ["40 kişi/dk", "IP 65", "-30 °C / +80 °C", "45 kg", "İç ve dış ortam, endüstriyel"] },
    { ad: "MT 250 Jetonlu", yol: "/urunler/jetonlu-t250-turnike", hucreler: ["30 kişi/dk", "IP 54", "-20 °C / +70 °C", "38 kg", "İç ortam, WC girişleri"] },
  ],
};

export const OTOPARK_TABLOSU: Karsilastirma = {
  baslik: "Araç Tanıma Yöntemleri",
  sutunlar: ["Yöntem", "Nasıl çalışır", "Kayıt"],
  satirlar: [
    { ad: "Plaka tanıma", hucreler: ["Kamera plakayı okur, veritabanından kontrol eder, yetkili araçta bariyer otomatik açılır", "Tüm giriş-çıkışlar kayıt altına alınır"] },
    { ad: "RFID abone kartı", hucreler: ["Kart okuyucu kartı tanıyınca bariyer otomatik açılır", "Kayıp kart anında iptal edilebilir"] },
  ],
};

const GARANTI_BARIYER: Sss = {
  soru: "Bariyer sistemleri hangi garanti kapsamındadır?",
  cevap: "Tüm bariyer sistemlerimiz 2 yıl üretici garantisi ile sunulmaktadır. Ayrıca periyodik bakım ve teknik destek hizmeti sağlıyoruz.",
};

export const EK: Record<string, { kullanim?: string[]; sss: Sss[] }> = {
  "/urunler/mantar-bariyer": {
    kullanim: [
      "Yüksek güvenlik ihtiyacı duyulan noktalar",
      "Yaya trafiği sürerken yalnız araç trafiğinin engellenmesi gereken şehir içi alanlar",
      "Kart geçiş sistemi (KGS) ile yönetilen araç girişleri",
    ],
    sss: [
      { soru: "Mantar bariyer nasıl çalışır?", cevap: "100 bar hidrolik tahrik grubu ile 3-5 saniyede yükselir. PLC Logic ile kontrol edilir; fotosel ve loop sensör emniyet sağlar." },
      { soru: "Elektrik kesildiğinde mantar bariyer kullanılabilir mi?", cevap: "Evet. Elektrik kesintisinde el krikosu ile manuel kullanılabilir." },
      { soru: "Mantar bariyer fiyatları nasıl belirlenir?", cevap: "Mantar bariyer fiyatları hidrolik sistem kapasitesi, malzeme kalitesi (304 paslanmaz çelik), kontrol sistemi özellikleri ve kurulum gereksinimlerine göre değişir. PLC kontrollü modeller ve özel entegrasyonlar fiyatı etkileyen faktörlerdir." },
    ],
  },
  "/urunler/road-blocker": {
    sss: [
      { soru: "Road Blocker sistemi nedir ve nerede kullanılır?", cevap: "Road Blocker, terör saldırılarına karşı yüksek koruma sağlayan hidrolik yol kesici sistemdir. Askeri tesisler, elçilikler, havalimanları ve kritik altyapı tesislerinde kullanılır." },
      { soru: "Road blocker gece görünür mü?", cevap: "Evet. 4 adet güneş enerjili LED ile gece görünürlüğü sağlanır." },
      { soru: "Road blocker hangi uzunluklarda üretilir?", cevap: "2-6 metre uzunlukta üretilir; açma ve kapama süresi 4-6 saniyedir." },
    ],
  },
  "/urunler/tuzaklar-kapanlar": {
    kullanim: [
      "Ters yönden girişin engellenmesi gereken araç giriş-çıkışları",
      "Yetkisiz araç girişinin engellenmesi gereken alanlar",
      "Güvenlik güçlerinin hızlı kurulan seyyar kontrol noktaları",
    ],
    sss: [
      { soru: "Tuzak kapanlar nasıl çalışır?", cevap: "Tuzak kapanlar yeraltına gömülen hidrolik sistemlerdir. Normal durumda görünmez haldedir, acil durumlarda otomatik veya manuel olarak aktive edilir ve yerden yükselerek yetkisiz araç girişlerini anında engeller." },
      { soru: "Tuzak ters yönden girişi engeller mi?", cevap: "Evet. Tuzak, ters yönden girişlere izin vermeyen bir sisteme sahiptir." },
      { soru: "Yangın gibi acil durumlarda tuzak kapatılabilir mi?", cevap: "Müşteri isteğine bağlı olarak, yangın gibi durumlarda bıçakların tamamının kapatılmasına izin verecek şekilde opsiyonel üretilebilir." },
    ],
  },
  "/urunler/pt-plus-bariyer": {
    kullanim: [
      "Orta seviye güvenlik ihtiyacı olan araç girişleri",
      "5,25 metre kol gerektiren geniş geçiş alanları",
      "Uzaktan kumanda, buton veya loop dedektör ile yönetilen girişler",
    ],
    sss: [
      { soru: "MT Plus bariyerin açılma süresi nedir?", cevap: "Açılma süresi 7 saniyedir. Kol uzunluğu 5,25 metredir ve kol LED'lidir." },
      { soru: "MT Plus bariyerle hangi aksesuarlar standart gelir?", cevap: "Montaj aparatı, 5,25 mt LED'li kol, anti-shock rubber, reflektif etiket, flaşör, fotosel ve fotosel ayağı, uzaktan kumanda." },
      GARANTI_BARIYER,
    ],
  },
  "/urunler/pt-genius-bariyer": {
    kullanim: [
      "Yoğun trafikli araç girişleri",
      "Yere ya da duvara montaj yapılacak girişler",
      "-20 °C / +55 °C aralığında çalışan açık alanlar",
    ],
    sss: [
      { soru: "MT Genius bariyerin kol boyu ne kadardır?", cevap: "Kol boyu en fazla 5,50 metredir; yandan kollu tasarımdadır." },
      { soru: "MT Genius bariyer nasıl monte edilir?", cevap: "Yere veya duvara montaj yapılabilir. Motor ağırlığı 20 kg'dır." },
      GARANTI_BARIYER,
    ],
  },
  "/urunler/pt-guard-bariyer": {
    sss: [
      { soru: "MT Guard bariyer nerede kullanılır?", cevap: "Yüksek güvenlik gerektiren noktalarda kullanılmak üzere tasarlanmıştır. Yüksek darbe emilimi özellikli yapısı ile kritik güvenlik noktalarında tercih edilir." },
      { soru: "Hidrolik bariyer mi yoksa elektrikli bariyer mi?", cevap: "Hidrolik bariyerler daha yüksek dayanıklılık ve güç sunarken, elektrikli bariyerler daha ekonomik ve bakımı kolaydır. Yüksek güvenlik gerektiren alanlarda hidrolik, standart kullanımda elektrikli tercih edilebilir." },
      GARANTI_BARIYER,
    ],
  },
  "/urunler/t250-eco-turnike": {
    sss: [
      { soru: "MT 250 ECO turnike dakikada kaç kişi geçirir?", cevap: "Dakikada 25 kişi geçirir. Geçiş aralığı en az 42 cm, en fazla 47 cm'dir." },
      { soru: "MT 250 ECO dış ortamda kullanılabilir mi?", cevap: "MT 250 ECO iç ortam için tasarlanmıştır (IP 44). Dış ortam için IP 65 korumalı MT 345 modeli kullanılır." },
      { soru: "MT 250 ECO turnikenin garanti süresi nedir?", cevap: "Garanti süresi 2 yıldır." },
    ],
  },
  "/urunler/t345-turnike": {
    sss: [
      { soru: "MT 345 turnike dakikada kaç kişi geçirir?", cevap: "Dakikada 40 kişi geçirir. Geçiş aralığı en az 42 cm, en fazla 50 cm'dir." },
      { soru: "MT 345 dış ortamda kullanılabilir mi?", cevap: "Evet. IP 65 su ve toz geçirmez koruma, IK08 darbe direnci ve -30 °C / +80 °C çalışma sıcaklığı ile iç, dış ve endüstriyel ortamlarda kullanılır." },
      { soru: "MT 345 turnikenin garanti süresi nedir?", cevap: "Garanti süresi 2 yıldır." },
    ],
  },
  "/urunler/jetonlu-t250-turnike": {
    sss: [
      { soru: "Jetonlu turnike nerede kullanılır?", cevap: "Ücretli WC girişleri, halk plajları, park ve bahçeler, dinlence tesisleri, kamp alanları, sosyal tesisler ve belediye hizmet alanlarında kullanılır." },
      { soru: "Jeton kasasının kapasitesi nedir?", cevap: "Jeton kasası 2000 adet kapasitelidir; para üstü otomatik sistemle verilir." },
      { soru: "MT 250 Jetonlu dakikada kaç kişi geçirir?", cevap: "Dakikada 30 kişi geçirir." },
    ],
  },
  "/urunler": {
    kullanim: [
      "Fabrikalar ve endüstriyel tesisler",
      "Hastaneler",
      "Okullar ve üniversite kampüsleri",
      "Kamu binaları",
      "Havalimanları ve metro istasyonları",
      "Büyük ofis kompleksleri",
      "Askeri tesisler ve kritik altyapı tesisleri",
      "Ücretli WC girişleri ve sosyal tesisler",
    ],
    sss: [
      { soru: "Turnike ve bariyer sistemleri garantili mi?", cevap: "Bariyer sistemlerimiz 2 yıl üretici garantisi ile sunulur; MT 250 ECO ve MT 345 turnikelerin garanti süresi de 2 yıldır." },
      { soru: "Kurulum sonrası bakım ve destek veriyor musunuz?", cevap: "Evet. Periyodik bakımda motor, mekanik aksam, elektronik kart ve sensörler kontrol edilir; arızada yerinde müdahale, yedek parça temini ve kullanıcı eğitimi verilir." },
      { soru: "Fiyatlar nasıl belirlenir?", cevap: "Fiyatlar model, özellikler ve kurulum gereksinimlerine göre değişiklik gösterir. Detaylı fiyat teklifi ve keşif için bize ulaşın." },
    ],
  },
  "/otopark-otomasyon": {
    kullanim: [
      "Abone kartı ile düzenli araç girişi yapılan otoparklar",
      "Saatlik, günlük veya abonelik ücretlendirmeli otoparklar",
      "Ziyaretçi yönetimi gereken tesis girişleri",
      "Doluluk durumunun anlık izlendiği otoparklar",
    ],
    sss: [],
  },
};
