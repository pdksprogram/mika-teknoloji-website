import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Check } from "lucide-react";
import { Link } from "wouter";
import qrKodOkumaImage from "@assets/image_1758816518741.png";
import giriscikisListesiImage from "@assets/IMG_4251_1759436174932.png";
import talepOlusturImage from "@assets/IMG_4252_1759436659395.png";
import avansTalepImage from "@assets/IMG_4253_1759436694818.png";
import yillikIzinBilgileriImage from "@assets/IMG_4254_1759437242409.png";
import sikayetOlusturImage from "@assets/IMG_4256_1759438160354.png";
import CtaDugmeleri from "@/components/CtaDugmeleri";

type Bolum = { id: string; ust: string; baslik: string; gorseller: { src: string; alt: string }[]; metin: ReactNode; maddeler: string[] };

const GIRIS_EKRANLARI = [
  { src: giriscikisListesiImage, alt: "QR PDKS mobil uygulama giriş-çıkış listesi ekranı" },
  { src: yillikIzinBilgileriImage, alt: "QR PDKS mobil uygulama yıllık izin bilgileri ekranı" },
  { src: talepOlusturImage, alt: "QR PDKS mobil uygulama izin talebi ekranı" },
];

const BOLUMLER: Bolum[] = [
  {
    id: "Q1",
    ust: "Teknolojik Üstünlük",
    baslik: "QR Kod PDKS + Güvenlik Sistemi",
    gorseller: [{ src: qrKodOkumaImage, alt: "QR Kod Okuma Mobil Uygulama - Mika Teknoloji PDKS" }],
    metin: (
      <>
        <p><strong className="text-slate-900 font-semibold">Konum doğrulama</strong> ile giriş-çıkışın tanımlı alanda yapıldığını kontrol edin. Sahte konum (Fake GPS) tespit edilirse kayıt alınmaz.</p>
        <p>Mükerrer kayıt önleme, konum doğrulama ve jeofencing birlikte çalışır; <span className="text-slate-900 font-medium">konum kontrollü PDKS</span> çözümü.</p>
      </>
    ),
    maddeler: ["Fake GPS Tespiti", "Konum Doğrulama", "Mükerrer ID Önleme", "Jeofencing", "Root/Jailbreak Tespiti", "VPN/Proxy Kontrolü"],
  },
  {
    id: "Q2",
    ust: "Akıllı Onay Sistemi",
    baslik: "Bulut Tabanlı Otomatik Düzeltme ve Onay Akışı",
    gorseller: [{ src: giriscikisListesiImage, alt: "Giriş Çıkış Listesi - Mika Teknoloji PDKS" }],
    metin: (
      <>
        <p><strong className="text-slate-900 font-semibold">Klasik PDKS sistemlerinde</strong> personel çıkış yapmayı unuttuğunda, yöneticiler personeli arayıp kaçta çıktığını öğrenip elle müdahale etmek zorunda kalıyordu.</p>
        <p><strong className="text-slate-900 font-semibold">QR Kod PDKS bulut sistemimizde</strong> artık bu iş yükü ortadan kalkıyor. Personel düzeltme kaydını mobil uygulamadan girer, amirine otomatik bildirim gider. Amir onayladıktan sonra kayıt İK'ya düşer. İK kimin onayladığını görür ve onaylayınca <span className="text-slate-900 font-medium">hareket otomatik olarak düzenlenir</span>.</p>
        <p>İş yükünüzü azaltıyor, süreçlerinizi disipline sokuyoruz.</p>
      </>
    ),
    maddeler: ["Personel Düzeltme Talebi", "Amir Onay Sistemi", "İK Kontrol Paneli", "Otomatik Düzeltme", "Anlık Bildirimler", "Onay Geçmişi"],
  },
  {
    id: "Q3",
    ust: "Hiyerarşik Onay Sistemi",
    baslik: "İzin ve Avans Talep Yönetimi",
    gorseller: [{ src: talepOlusturImage, alt: "Talep Oluşturma Ekranı - Mika Teknoloji PDKS" }, { src: avansTalepImage, alt: "Avans Talep Ekranı - Mika Teknoloji PDKS" }],
    metin: (
      <>
        <p><strong className="text-slate-900 font-semibold">QR tabanlı personel devam kontrol sistemimizde</strong> izin ve avans talepleri tamamen dijital ve hiyerarşik onay akışıyla yönetiliyor.</p>
        <p>Personel, <strong className="text-slate-900 font-semibold">yeni nesil personel devam kontrol sistemi</strong> mobil uygulamasından izin talebini girer ve ilgili tarihteki izin yöneticisine otomatik düşer. Yönetici onayladıktan sonra talep İK'ya (İnsan Kaynakları) ulaşır. İK da onayladığında <span className="text-slate-900 font-medium">izin otomatik olarak sisteme yansır</span>.</p>
        <p>Aynı şekilde avans talepleri de <strong className="text-slate-900 font-semibold">bulut tabanlı personel kontrol sisteminde</strong> aynı hiyerarşik yapıyla yönetilir. Personel → Yönetici → İK onay zinciri ile tüm süreç şeffaf, denetlenebilir ve tamamen otomatik hale gelir.</p>
      </>
    ),
    maddeler: ["İzin Talep Sistemi", "Avans Yönetimi", "Hiyerarşik Onay", "Otomatik İK Akışı", "Şeffaf Süreç", "Mobil Erişim"],
  },
  {
    id: "Q4",
    ust: "Mobil İzin Takibi",
    baslik: "Yıllık İzin Yönetim Sistemi",
    gorseller: [{ src: yillikIzinBilgileriImage, alt: "Yıllık İzin Bilgilerim - Mika Teknoloji PDKS" }],
    metin: (
      <>
        <p><strong className="text-slate-900 font-semibold">Yeni nesil personel devam kontrol sistemimizde</strong> personeller ne kadar yıllık izin kaldığını ve ne kadar kullandığını cep telefonlarından anında görüntüleyebiliyor.</p>
        <p><strong className="text-slate-900 font-semibold">İnsan kaynakları yönetiminin etkinliğini</strong> artırarak, işletmedeki yıllık izin durumlarını personeller hak edişlerine ve işe giriş tarihlerine göre <span className="text-slate-900 font-medium">sistematik şekilde</span> cep telefonlarından görebilmektedirler.</p>
        <p>Kalan izin günleri, kullanılan izinler, hak ediş bilgileri ve izin geçmişi mobil uygulamada tek ekranda şeffaf bir şekilde sunulur. Bu sayede personel planlaması kolaylaşır ve izin yönetimi tamamen otomatik hale gelir.</p>
      </>
    ),
    maddeler: ["Anlık İzin Takibi", "Hak Ediş Hesaplama", "İzin Geçmişi", "Mobil Erişim", "Otomatik Güncelleme", "Şeffaf Raporlama"],
  },
  {
    id: "Q5",
    ust: "Akıllı Vardiya",
    baslik: "Mobil Shift Planlama Sistemi",
    gorseller: [],
    metin: (
      <>
        <p><strong className="text-slate-900 font-semibold">Hastane personel devam kontrol sistemi</strong> ve <strong className="text-slate-900 font-semibold"> mağaza personel devam kontrol sisteminde</strong> shift yapıldığında, personel hangi vardiyaya geleceğini mobil sisteminden anında görebilmektedir.</p>
        <p>Personelin müdürü ya da amiri tarafından yapılan <strong className="text-slate-900 font-semibold">shift planlama</strong>, doğrudan personelin uygulama kısmına düşer. Bu sayede sistematik bir şekilde akış düzenlenir ve <span className="text-slate-900 font-medium">yeni nesil personel devam kontrol sistemi</span> olan ESOFT için +1 özellik katmaktadır.</p>
        <p>Gerek hastanelerde, gerekse mağaza yönetim sistemlerinde vardiya çizelgeleri otomatik olarak güncellenir. Personeller hangi gün, hangi saatte ve hangi lokasyonda çalışacaklarını mobil cihazlarından takip edebilirler.</p>
      </>
    ),
    maddeler: ["Otomatik Shift Bildirimi", "Vardiya Takibi", "Anlık Güncelleme", "Çoklu Lokasyon", "Hastane PDKS", "Mağaza PDKS"],
  },
  {
    id: "Q6",
    ust: "İletişim Platformu",
    baslik: "Mobil Şikayet ve Talep Yönetimi",
    gorseller: [{ src: sikayetOlusturImage, alt: "Yeni Şikayet Oluştur - Mika Teknoloji PDKS" }],
    metin: (
      <>
        <p>Personeller işletme ile ilgili şikayetlerini <strong className="text-slate-900 font-semibold">mobil aplikasyon üzerinden</strong> anlık olarak İK platformuna ileterek, insan kaynakları departmanı ile doğrudan iletişime geçebilmektedir.</p>
        <p><strong className="text-slate-900 font-semibold">Yeni nesil personel devam kontrol sisteminde</strong> personeller, olayların fotoğraflarını çekerek, açıklama ekleyerek ve kategori kodu girerek şikayetlerini insan kaynakları departmanına ve ilgili müdürlüklere mobil aplikasyon üzerinden iletmektedir.</p>
        <p>Bu özellik hem <span className="text-slate-900 font-medium">erişilebilirlik</span> hem de <span className="text-slate-900 font-medium">personel memnuniyeti</span> yönünden firmaya önemli bir üstünlük sağlamaktadır. Şeffaf iletişim kanalları sayesinde çalışan bağlılığı artar ve sorunlar hızla çözüme kavuşturulur.</p>
      </>
    ),
    maddeler: ["Fotoğraf Ekleme", "İK İletişimi", "Kategori Kodları", "Anlık Bildirim", "Şeffaf Süreç", "Hızlı Çözüm"],
  },
  {
    id: "Q7",
    ust: "Geri Bildirim",
    baslik: "Mobil Anket ve Geri Bildirim Platformu",
    gorseller: [],
    metin: (
      <>
        <p><strong className="text-slate-900 font-semibold">Anket Portalı</strong> ile personellerinizin görüş ve önerilerini mobil uygulama üzerinden toplayın.</p>
        <p>Çalışan memnuniyeti anketleri, performans değerlendirmeleri, öneri sistemleri ve geri bildirim formları ile işletme içi iletişimi güçlendirin. Tüm anket sonuçları <span className="text-slate-900 font-medium">otomatik raporlanır</span> ve analiz edilir.</p>
      </>
    ),
    maddeler: ["Anket Oluşturma", "Mobil Katılım", "Otomatik Raporlama", "Analiz Araçları"],
  },
  {
    id: "Q8",
    ust: "Elektronik İmza",
    baslik: "Dijital Bordro Onay ve Elektronik İmza Sistemi",
    gorseller: [],
    metin: (
      <>
        <p><strong className="text-slate-900 font-semibold">Yeni nesil personel devam kontrol sisteminde</strong> bordro bilgileri istenildiği taktirde personellerin mobil aplikasyonlarına push bildirim ile gönderilir.</p>
        <p>Personel günlük giriş-çıkışlarını ve mesai saatlerini tek tek kontrol ederek onaylar ve <strong className="text-slate-900 font-semibold"> İK departmanına elektronik ortamda</strong> gönderir. Onay sonrası tüm giriş-çıkışlar kilitlenir ve İK departmanı sorumlusu hariç kimse değişiklik yapamaz.</p>
        <p>Bu şekilde giriş-çıkışlar <span className="text-slate-900 font-medium">elektronik ortamda imzalanmış</span> olur. İleride personel ile ilgili doğacak resmi anlaşmazlıklarda yasal bir delil olarak firma tarafından belge niteliğinde tutulmaktadır. Bu özellik firmaya çok önemli bir hukuki güvence sağlamaktadır.</p>
      </>
    ),
    maddeler: ["Push Bildirim", "Elektronik Onay", "Kayıt Kilitleme", "Yasal Delil", "Bordro Entegrasyonu", "Hukuki Güvence"],
  },
];

export default function QRPDKSPage() {

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>QR Kod PDKS | Mika Teknoloji - Mobil Personel Takip Sistemi</title>
        <meta 
          name="description" 
          content="QR kod tabanlı personel devam kontrol sistemi (PDKS). Mobil uygulama ile QR kod okutma, personel giriş çıkış takibi, vardiya yönetimi. Bulut tabanlı QR PDKS çözümü." 
        />
        <meta name="keywords" content="qr kod pdks, qr personel takip, mobil pdks, qr kod personel giriş çıkış, qr tabanlı personel takip sistemi, mobil personel kontrol sistemi, qr kod okuyucu pdks, akıllı telefon pdks, mobil vardiya takip, contactless pdks, temassız personel takip, qr code personnel tracking" />
        <meta name="author" content="Mika Teknoloji" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="language" content="tr" />
        <meta name="geo.region" content="TR" />
        <meta name="geo.country" content="Turkey" />
        <meta name="geo.placename" content="Türkiye" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="QR Kod PDKS | Mika Teknoloji - Mobil Personel Takip Sistemi" />
        <meta property="og:description" content="QR kod tabanlı personel devam kontrol sistemi (PDKS). Mobil uygulama ile QR kod okutma, personel giriş çıkış takibi, vardiya yönetimi. Bulut tabanlı QR PDKS çözümü." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mikateknoloji.com/urunler/qr-pdks" />
        <meta property="og:image" content="https://mikateknoloji.com/images/slayt/qr-pdks-mobil.jpg" />
        <meta property="og:image:width" content="873" />
        <meta property="og:image:height" content="957" />
        <meta property="og:image:alt" content="Mika Teknoloji QR Kod PDKS - Mobil Personel Takip Sistemi" />
        <meta property="og:site_name" content="Mika Teknoloji" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:locale:alternate" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="QR Kod PDKS | Mika Teknoloji - Mobil Personel Takip Sistemi" />
        <meta name="twitter:description" content="QR kod tabanlı personel devam kontrol sistemi (PDKS). Mobil uygulama ile QR kod okutma, personel giriş çıkış takibi, vardiya yönetimi." />
        <meta name="twitter:image" content="https://mikateknoloji.com/images/slayt/qr-pdks-mobil.jpg" />
        <meta name="twitter:image:alt" content="Mika Teknoloji QR Kod PDKS" />
        <meta name="twitter:site" content="@mikateknoloji" />
        <meta name="twitter:creator" content="@mikateknoloji" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#EC4899" />
        <meta name="apple-mobile-web-app-title" content="Mika QR PDKS" />
        <meta name="application-name" content="Mika Teknoloji QR Kod PDKS" />
        <meta name="msapplication-TileColor" content="#EC4899" />
        
        {/* Canonical and Hreflang */}
        <link rel="canonical" href="https://mikateknoloji.com/urunler/qr-pdks" />
        <link rel="alternate" hrefLang="tr" href="https://mikateknoloji.com/urunler/qr-pdks" />
        <link rel="alternate" hrefLang="x-default" href="https://mikateknoloji.com/urunler/qr-pdks" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://mikateknoloji.com/#organization",
              "name": "Mika Teknoloji Kontrol Sistemleri",
              "url": "https://mikateknoloji.com",
              "logo": "https://mikateknoloji.com/images/logos/mika-logo.jpg",
              "description": "Personel takip sistemleri, PDKS, güvenlik çözümleri ve turnike sistemleri alanında çalışan teknoloji şirketi.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "TR",
                "addressRegion": "Türkiye"
              },
              "sameAs": [
                "https://www.linkedin.com/company/mikateknoloji",
                "https://twitter.com/mikateknoloji"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "QR Kod PDKS - Mobil Personel Takip Sistemi",
              "description": "QR kod tabanlı personel devam kontrol sistemi. Mobil uygulama ile QR kod okutma, personel giriş çıkış takibi, vardiya yönetimi ve bulut tabanlı çözüm.",
              "url": "https://mikateknoloji.com/urunler/qr-pdks",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web, iOS, Android",
              "provider": {
                "@id": "https://mikateknoloji.com/#organization"
              },
              "featureList": [
                "QR kod okutma ile giriş çıkış",
                "Mobil uygulama desteği",
                "Bulut tabanlı altyapı",
                "Aylık puantaj ve Excel raporları",
                "Vardiya yönetimi",
                "Gerçek zamanlı takip",
                "Temassız personel kontrolü",
                "Çoklu lokasyon desteği"
              ],
              "screenshot": "https://mikateknoloji.com/images/slayt/qr-pdks-mobil.jpg"
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Ana Sayfa",
                  "item": "https://mikateknoloji.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Ürünler",
                  "item": "https://mikateknoloji.com/urunler"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "QR Kod PDKS",
                  "item": "https://mikateknoloji.com/urunler/qr-pdks"
                }
              ]
            }
          ])}
        </script>
      </Helmet>

      {/* Giriş */}
      <section data-testid="hero-section" className="py-16 px-4 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-4">QR Kod PDKS</p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              QR Kod PDKS - Mobil Personel Takip Sistemi
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Personel, akıllı telefonuyla QR kod okutarak giriş-çıkış yapar; konum doğrulanır, kayıt anında panele düşer.
            </p>
            <CtaDugmeleri tur="yazilim" />
          </div>
          <div className="flex justify-center gap-3 sm:gap-4">
            {GIRIS_EKRANLARI.map((e, i) => (
              <img
                key={e.alt}
                src={e.src}
                alt={e.alt}
                width={1290}
                height={2796}
                className={`w-1/3 max-w-[200px] h-auto rounded-2xl border border-slate-200 shadow-lg ${i === 1 ? "" : "mt-8"}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="pt-20 pb-4 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">QR Kod PDKS Avantajları</h2>
          <p className="text-lg text-slate-600">
            Giriş-çıkış, izin, avans, vardiya ve bordro onayı tek mobil uygulamada.
          </p>
        </div>
      </section>

      {BOLUMLER.map((b, i) => (
        <section key={b.id} data-testid={b.id} className={`py-16 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
          <div className="container mx-auto px-4">
            <div className={`max-w-6xl mx-auto flex flex-col gap-10 lg:gap-16 items-center ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
              {b.gorseller.length > 0 && (
              <div className="lg:w-2/5 flex justify-center gap-4">
                {b.gorseller.map((g) => (
                  <img
                    key={g.alt}
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="w-1/2 max-w-[220px] h-auto rounded-2xl border border-slate-200 shadow-lg"
                  />
                ))}
              </div>
              )}
              <div className={b.gorseller.length > 0 ? "lg:w-3/5" : "w-full max-w-4xl"}>
                <p className="text-sm font-semibold tracking-wider uppercase text-slate-500 mb-3">{b.ust}</p>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-tight">{b.baslik}</h3>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed">{b.metin}</div>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-3 mt-8">
                  {b.maddeler.map((m) => (
                    <li key={m} className="flex items-center gap-2 text-slate-700 font-medium">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* How It Works Section */}
      <section data-testid="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp} initial={false}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              QR Kod PDKS Nasıl Çalışır?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              3 basit adımda QR kod ile personel takip sistemini kullanmaya başlayın
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "QR Kod Oluşturma",
                description: "Her personel için benzersiz QR kod oluşturun ve personel kartlarına basın"
              },
              {
                step: "2", 
                title: "Mobil Uygulama",
                description: "iOS/Android mobil uygulamayı indirin ve giriş-çıkış noktalarına yerleştirin"
              },
              {
                step: "3",
                title: "Takip ve Raporlama",
                description: "Gerçek zamanlı personel hareketlerini izleyin, aylık puantaj raporlarını alın"
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-12">
            <Link href="/qr-pdks" className="text-primary hover:opacity-80 transition-opacity font-semibold underline underline-offset-4">
              QR Kodlu Personel Takibi: giriş-çıkış adımları ve sık sorulan sorular
            </Link>
          </p>
          <p className="text-center mt-6 text-sm text-slate-500 max-w-3xl mx-auto">
            İstanbul, İzmir, Ankara ve tüm Türkiye'deki işletmeler için <Link href="/urunler" className="text-primary hover:underline">temassız PDKS çözümü</Link>.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section data-testid="cta-section" className="py-16 bg-slate-900 border-t-4 border-primary text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            QR Kod PDKS ile Personel Takibini Modernize Edin
          </h2>
          <p className="text-lg mb-8 text-slate-300">
            Kurulum ve kullanım desteği dahil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" data-testid="button-cta-demo">
              <Link href="/iletisim">
                Demo ve Keşif Talep Edin
              </Link>
            </Button>
            <Button asChild size="lg" variant="outlineLight" data-testid="button-cta-products">
              <Link href="/urunler">Tüm Ürünleri İncele</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}