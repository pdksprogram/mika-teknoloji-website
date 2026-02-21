import { Play, ArrowRight, Film, Video, Download, Search, BookOpen, Settings, Users, Clock, Shield, ChevronDown, ChevronUp, Monitor, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useState, useRef } from "react";
import WhatsAppWidget from "@/components/WhatsAppWidget";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  src: string;
  duration: string;
  category: string;
  subcategory: string;
  keywords: string;
  level: "Başlangıç" | "Orta" | "İleri";
}

const videos: VideoItem[] = [
  {
    id: "pdks-genel-anlatim",
    title: "PDKS Nedir? Personel Devam Kontrol Sistemi Genel Anlatım",
    description: "PDKS (Personel Devam Kontrol Sistemi) nedir, nasıl çalışır? Yeni kullanıcılar için kapsamlı başlangıç rehberi. Sistemin tüm özellikleri ve modüllerinin tanıtımı.",
    src: "/pdks-genel-anlatim.mp4",
    duration: "3:00",
    category: "Demo",
    subcategory: "Başlangıç Rehberi",
    keywords: "PDKS nedir, personel devam kontrol sistemi, PDKS tanıtım, PDKS başlangıç rehberi, personel takip sistemi nedir, QR PDKS",
    level: "Başlangıç",
  },
  {
    id: "esoft-pdks-login-sayfasi",
    title: "PDKS Sisteme Giriş - Login Sayfası Kullanımı",
    description: "PDKS sistemine ilk giriş nasıl yapılır? Kullanıcı adı ve şifre ile güvenli oturum açma, şifre sıfırlama ve hesap yönetimi adımları.",
    src: "/esoft-pdks-login-sayfasi.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Başlangıç Rehberi",
    keywords: "PDKS login, PDKS giriş yapma, sisteme giriş, Esoft PDKS, kullanıcı girişi, oturum açma, şifre sıfırlama",
    level: "Başlangıç",
  },
  {
    id: "pdks-tanimlari",
    title: "PDKS Sistem Tanımları - Departman ve Mesai Ayarları",
    description: "PDKS sistemindeki temel tanımları öğrenin: departman oluşturma, şube tanımlama, mesai tipleri, çalışma saatleri ve diğer sistem yapılandırmaları.",
    src: "/pdks-tanimlari.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Başlangıç Rehberi",
    keywords: "PDKS tanımları, departman tanımlama, mesai tipi ayarlama, şube tanımlama, çalışma saati tanımlama, sistem yapılandırma",
    level: "Başlangıç",
  },
  {
    id: "pdks-personel-karti-ekleme",
    title: "PDKS Personel Kartı Ekleme - Yeni Çalışan Kaydı",
    description: "PDKS sistemine yeni personel kartı ekleme: çalışan bilgileri girişi, kart numarası atama, departman seçimi ve kart aktivasyonu adımları.",
    src: "/pdks-personel-karti-ekleme.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Personel Yönetimi",
    keywords: "personel kartı ekleme, yeni çalışan kaydı, PDKS kart tanımlama, personel kayıt, kart aktivasyonu, çalışan ekleme",
    level: "Başlangıç",
  },
  {
    id: "personel-karti-acma",
    title: "Personel Kartı Açma ve Tanımlama Eğitimi",
    description: "Yeni personel kartı nasıl açılır? Kart numarası atama, personel bilgileri girişi, fotoğraf ekleme ve PDKS sistemi ile entegrasyon.",
    src: "/personel-karti-acma-egitimi.mp4",
    duration: "1:30",
    category: "Demo",
    subcategory: "Personel Yönetimi",
    keywords: "personel kartı açma, kart tanımlama, PDKS kart oluşturma, yeni personel ekleme, çalışan kartı",
    level: "Başlangıç",
  },
  {
    id: "pdks-personel-karti-yonetici-hatasi",
    title: "PDKS 'Yöneticinizle Görüşün' Hatası - Çözüm Rehberi",
    description: "'Lütfen Yöneticinizle Görüşün' hatası neden çıkar? Personel kartı okuma sorunları, yetki ayarları ve hızlı çözüm yolları.",
    src: "/pdks-personel-karti-yonetici-hatasi.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Sorun Giderme",
    keywords: "PDKS hata çözümü, yöneticinizle görüşün hatası, kart okuma hatası, PDKS sorun giderme, personel kartı sorunu",
    level: "Orta",
  },
  {
    id: "pdks-personel-excel-yazdirma",
    title: "PDKS Personel Listesi Excel'e Aktarma ve Yazdırma",
    description: "Personel verilerini Excel'e nasıl aktarılır? Rapor oluşturma, filtreleme, yazdırma ve veri dışa aktarma işlemleri.",
    src: "/pdks-personel-excel-yazdirma-egitimi.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Raporlama",
    keywords: "PDKS Excel aktarma, personel raporu yazdırma, veri dışa aktarma, Excel rapor oluşturma, personel listesi",
    level: "Orta",
  },
  {
    id: "personel-isten-cikarma",
    title: "PDKS Personel İşten Çıkarma İşlemi",
    description: "Personel işten çıkarma süreci: çıkış tarihi girişi, kart pasifleştirme, kayıt arşivleme ve yasal bildirim adımları.",
    src: "/personel-isten-cikarma-egitimi.mp4",
    duration: "1:30",
    category: "Demo",
    subcategory: "Personel Yönetimi",
    keywords: "personel işten çıkarma, çıkış işlemi, PDKS personel çıkış, kart pasifleştirme, işten ayrılma",
    level: "Orta",
  },
  {
    id: "pdks-personel-isten-cikarma-2",
    title: "PDKS Personel İşten Çıkarma - İleri Seviye",
    description: "İleri seviye çıkış işlemleri: toplu çıkış, devir teslim kaydı, kıdem hesaplama entegrasyonu ve çıkış raporları.",
    src: "/pdks-personel-isten-cikarma-egitimi-2.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Personel Yönetimi",
    keywords: "toplu işten çıkarma, çıkış raporu, PDKS ileri seviye çıkış, personel devir teslim",
    level: "İleri",
  },
  {
    id: "pdks-giris-cikis-islemleri",
    title: "PDKS Giriş Çıkış Takibi - Devam Kontrolü",
    description: "Personel giriş-çıkış kayıtlarının takibi: geç gelme kontrolü, erken çıkma tespiti, eksik kayıt uyarıları ve günlük devam raporu.",
    src: "/pdks-giris-cikis-islemleri.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Giriş-Çıkış İşlemleri",
    keywords: "giriş çıkış takibi, PDKS devam kontrolü, geç gelme kontrolü, erken çıkma, personel devam raporu, mesai takibi",
    level: "Başlangıç",
  },
  {
    id: "pdks-giris-islemleri-duzenleme-2",
    title: "PDKS Giriş Kayıtları Düzenleme - Manuel Kayıt Ekleme",
    description: "Giriş-çıkış kayıtlarının manuel düzenlenmesi: eksik kayıt ekleme, hatalı kayıt düzeltme ve onay süreçleri.",
    src: "/pdks-giris-islemleri-duzenleme-2.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Giriş-Çıkış İşlemleri",
    keywords: "giriş kaydı düzenleme, manuel kayıt ekleme, PDKS kayıt düzeltme, eksik giriş ekleme",
    level: "Orta",
  },
  {
    id: "pdks-giris-islemleri-duzenleme-7",
    title: "PDKS Giriş İşlemleri - Toplu Düzenleme Teknikleri",
    description: "İleri seviye toplu düzenleme: birden fazla kaydı aynı anda güncelleme, özel durum yönetimi ve hızlı düzeltme yöntemleri.",
    src: "/pdks-giris-islemleri-duzenleme-7.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Giriş-Çıkış İşlemleri",
    keywords: "toplu düzenleme, PDKS ileri seviye düzenleme, çoklu kayıt güncelleme, hızlı düzeltme",
    level: "İleri",
  },
  {
    id: "pdks-giris-islemleri-toplu-ekleme",
    title: "PDKS Toplu Giriş-Çıkış Kaydı Ekleme",
    description: "Birden fazla personel için aynı anda giriş-çıkış kaydı nasıl girilir? Toplu veri girişi ve zaman tasarrufu yöntemleri.",
    src: "/pdks-giris-islemleri-toplu-ekleme.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Giriş-Çıkış İşlemleri",
    keywords: "toplu kayıt ekleme, çoklu personel giriş, PDKS toplu veri girişi, zaman tasarrufu",
    level: "Orta",
  },
  {
    id: "pdks-giris-islemleri-izin-duzenleme",
    title: "PDKS İzin Düzenleme - Yıllık İzin ve Mazeret İzni",
    description: "Giriş işlemlerinde izin düzenleme: yıllık izin tanımlama, mazeret izni girişi, hastalık izni ve diğer izin türlerinin kaydı.",
    src: "/pdks-giris-islemleri-izin-duzenleme.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "İzin Yönetimi",
    keywords: "izin düzenleme, yıllık izin kaydı, mazeret izni, hastalık izni, PDKS izin yönetimi, izin türleri",
    level: "Orta",
  },
  {
    id: "pdks-giris-islemleri-toplu-izin",
    title: "PDKS Toplu İzin Girişi - Çoklu Personel İzin Tanımlama",
    description: "Birden fazla personele aynı anda izin tanımlama: resmi tatil girişi, toplu yıllık izin ve departman bazlı izin kaydı.",
    src: "/pdks-giris-islemleri-toplu-izin.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "İzin Yönetimi",
    keywords: "toplu izin girişi, çoklu personel izin, resmi tatil girişi, departman izin kaydı, PDKS toplu izin",
    level: "Orta",
  },
  {
    id: "pdks-izin-talep-egitimi",
    title: "PDKS İzin Talebi Oluşturma ve Onay Süreci",
    description: "Personel olarak izin talebi nasıl oluşturulur? Yıllık izin başvurusu, mazeret izni talebi ve yönetici onay süreci.",
    src: "/pdks-izin-talep-egitimi.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "İzin Yönetimi",
    keywords: "izin talebi oluşturma, yıllık izin başvurusu, izin onay süreci, mazeret izni talebi, PDKS izin talebi",
    level: "Başlangıç",
  },
  {
    id: "pdks-mesai-talebi-egitimi",
    title: "PDKS Mesai Talebi - Fazla Mesai Onay Süreci",
    description: "Fazla mesai talebi nasıl oluşturulur? Ek mesai başvurusu, yönetici onay süreci ve mesai hesaplama yöntemleri.",
    src: "/pdks-mesai-talebi-egitimi.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Mesai Yönetimi",
    keywords: "mesai talebi, fazla mesai onay, ek mesai başvurusu, PDKS mesai hesaplama, mesai onaylama",
    level: "Orta",
  },
  {
    id: "pdks-duzeltme-onay-rehberi",
    title: "PDKS Düzeltme Talebi Onaylama Rehberi",
    description: "Yönetici olarak düzeltme taleplerini nasıl onaylarsınız? Talep inceleme, onay/ret işlemi ve düzeltme akışı yönetimi.",
    src: "/pdks-duzeltme-onay-rehberi.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Onay Süreçleri",
    keywords: "düzeltme onay, talep onaylama, PDKS düzeltme, yönetici onay süreci, talep inceleme",
    level: "Orta",
  },
  {
    id: "pdks-bekleyen-onaylarim-avans-onay",
    title: "PDKS Bekleyen Onaylarım - Avans Onay Süreci",
    description: "Yönetici olarak bekleyen avans taleplerini onaylama ve reddetme süreci. Avans onay listesi, detay inceleme ve toplu onay işlemleri.",
    src: "/pdks-bekleyen-onaylarim-avans-onay.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Onay Süreçleri",
    keywords: "bekleyen onaylar, avans onay, avans talebi onaylama, yönetici avans onay, PDKS onay süreci",
    level: "Orta",
  },
  {
    id: "pdks-bekleyen-onaylarim-izin-onay",
    title: "PDKS Bekleyen Onaylarım - İzin Onay Süreci",
    description: "Yönetici olarak bekleyen izin taleplerini onaylama ve reddetme. İzin onay listesi, izin detayları ve onay/ret işlemleri.",
    src: "/pdks-bekleyen-onaylarim-izin-onay.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Onay Süreçleri",
    keywords: "bekleyen onaylar, izin onay, izin talebi onaylama, yönetici izin onay, izin ret işlemi",
    level: "Orta",
  },
  {
    id: "pdks-bekleyen-onaylarim-mesai-onay",
    title: "PDKS Bekleyen Onaylarım - Mesai Onay Süreci",
    description: "Yönetici olarak bekleyen mesai taleplerini onaylama ve reddetme. Fazla mesai onay listesi, mesai detayları ve toplu onay.",
    src: "/pdks-bekleyen-onaylarim-mesai-onay.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Onay Süreçleri",
    keywords: "bekleyen onaylar, mesai onay, fazla mesai onaylama, yönetici mesai onay, mesai ret işlemi",
    level: "Orta",
  },
  {
    id: "pdks-avans-talebi-egitim",
    title: "PDKS Avans Talebi Oluşturma ve Takip",
    description: "Personel avans talebi nasıl oluşturulur? Avans başvuru formu, onay süreci, ödeme takibi ve avans geçmişi.",
    src: "/pdks-avans-talebi-egitim.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Finansal İşlemler",
    keywords: "avans talebi, avans başvurusu, PDKS avans, personel avans, avans onay süreci, ödeme takibi",
    level: "Orta",
  },
  {
    id: "pdks-avans-kazanc-kesinti",
    title: "PDKS Avans, Kazanç ve Kesinti Yönetimi",
    description: "Personel maaş yönetimi: avans tanımlama, kazanç ekleme, kesinti işlemleri ve bordro entegrasyonu.",
    src: "/pdks-avans-kazanc-kesinti.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Finansal İşlemler",
    keywords: "avans yönetimi, kazanç ekleme, kesinti işlemi, maaş hesaplama, bordro entegrasyonu, PDKS finans",
    level: "İleri",
  },
  {
    id: "vardiya-planlama-pdks",
    title: "Vardiya Planlama Sistemi - Mağaza ve Hastane İçin",
    description: "Mağaza, hastane ve tüm sektörler için otomatik vardiya planlama. Shift oluşturma, personel atama, mesai hesaplama ve çizelge yönetimi.",
    src: "/vardiya-planlama-pdks.mp4",
    duration: "1:30",
    category: "Demo",
    subcategory: "Vardiya Planlama",
    keywords: "vardiya planlama, shift planlama, mağaza vardiya, hastane vardiya, personel atama, vardiya çizelgesi, nöbet planlama",
    level: "Başlangıç",
  },
  {
    id: "shift-plan-kart-tanitim",
    title: "Shift Plan Kart Uygulaması Tanıtımı",
    description: "Shift Plan kart uygulamasının detaylı tanıtımı: personel kartı ile giriş-çıkış, vardiya planlama ve mobil PDKS entegrasyonu.",
    src: "/shift-plan-kart-tanitim-2.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Vardiya Planlama",
    keywords: "shift plan kart, personel kartı, kart okuyucu, PDKS kart sistemi, mobil PDKS, vardiya takibi",
    level: "Başlangıç",
  },
  {
    id: "shift-plan-satir-kopyalama",
    title: "Shift Plan Vardiya Satır Kopyalama",
    description: "Vardiya satırlarını hızlıca kopyalayarak zaman kazanın. Tekrarlayan vardiyalar için pratik kullanım teknikleri.",
    src: "/shift-plan-satir-kopyalama.mp4",
    duration: "1:00",
    category: "Demo",
    subcategory: "Vardiya Planlama",
    keywords: "vardiya kopyalama, satır kopyalama, hızlı vardiya oluşturma, shift plan pratik kullanım",
    level: "Orta",
  },
  {
    id: "vardiya-plani-duzeltme-istegi",
    title: "Vardiya Planı Düzeltme İsteği Gönderme",
    description: "Vardiya planında değişiklik talep etme: düzeltme isteği gönderme, yönetici onayı ve plan güncelleme süreci.",
    src: "/vardiya-plani-duzeltme-istegi.mp4",
    duration: "1:30",
    category: "Demo",
    subcategory: "Vardiya Planlama",
    keywords: "vardiya düzeltme isteği, plan değişikliği talebi, vardiya güncelleme, PDKS düzeltme",
    level: "Orta",
  },
  {
    id: "vardiya-plani-satir-temizleme",
    title: "Vardiya Planı Satır Temizleme",
    description: "Hatalı veya gereksiz vardiya girişlerini temizleme: satır silme, toplu temizleme ve plan düzenleme.",
    src: "/vardiya-plani-satir-temizleme.mp4",
    duration: "1:00",
    category: "Demo",
    subcategory: "Vardiya Planlama",
    keywords: "vardiya temizleme, satır silme, plan temizleme, hatalı giriş düzeltme",
    level: "Orta",
  },
  {
    id: "vardiya-plani-sablon-egitimi",
    title: "Vardiya Planı Şablon Oluşturma ve Kullanma",
    description: "Tekrarlayan vardiyalar için şablon tanımlama: haftalık şablon, aylık şablon ve otomatik plan oluşturma.",
    src: "/vardiya-plani-sablon-egitimi.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Vardiya Planlama",
    keywords: "vardiya şablonu, plan şablonu, otomatik vardiya, haftalık şablon, şablon kullanma",
    level: "Orta",
  },
  {
    id: "pdks-shift-plan-onay-ret",
    title: "PDKS Shift Plan Onay ve Ret İşlemi",
    description: "Vardiya planı onay ve ret süreçleri: yönetici onay akışı, ret gerekçesi ve plan revizyonu.",
    src: "/pdks-shift-plan-onay-ret-islemi.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Onay Süreçleri",
    keywords: "shift plan onay, vardiya onay ret, plan onaylama, ret gerekçesi, yönetici onayı",
    level: "Orta",
  },
  {
    id: "shift-plan-onay-kilitleme",
    title: "Shift Plan Onay Sonrası Plan Kilitleme",
    description: "Onaylanan vardiya planlarının kilitlenmesi: değişiklik engelleme, plan güvenliği ve kilit açma yetkileri.",
    src: "/shift-plan-onay-kilitleme.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Onay Süreçleri",
    keywords: "plan kilitleme, onay kilidi, vardiya güvenliği, değişiklik engelleme, yetki yönetimi",
    level: "İleri",
  },
  {
    id: "shift-plan-onay-dersi-bolum3",
    title: "Shift Plan Onay Dersi - Çoklu Onay Akışları",
    description: "İleri seviye onay ayarları: çoklu onay kademeleri, departman bazlı onay yetkileri ve otomatik onay kuralları.",
    src: "/shift-plan-onay-dersi-bolum3.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Onay Süreçleri",
    keywords: "çoklu onay akışı, kademe onay, departman onay, otomatik onay kuralı",
    level: "İleri",
  },
  {
    id: "shift-plan-onay-egitimi-ders3",
    title: "Shift Plan Onay Raporları ve Denetim İzleri",
    description: "Onay raporlarının incelenmesi: geçmiş onay kayıtları, denetim izleri ve onay performans analizi.",
    src: "/shift-plan-onay-egitimi-ders3.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Raporlama",
    keywords: "onay raporları, denetim izi, onay geçmişi, performans analizi, vardiya raporu",
    level: "İleri",
  },
  {
    id: "shift-plan-onayi-egitimi",
    title: "Shift Plan Onay Süreci - Başlangıç Eğitimi",
    description: "Vardiya planı onay sürecinin temel eğitimi: plan oluşturma, onaya gönderme ve onaylama adımları.",
    src: "/shift-plan-onayi-egitimi.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Onay Süreçleri",
    keywords: "shift plan onay eğitimi, onay süreci başlangıç, plan onaylama, vardiya onay rehberi",
    level: "Başlangıç",
  },
  {
    id: "yonetici-paneli-egitimi",
    title: "PDKS Yönetici Paneli - Dashboard ve Raporlama",
    description: "Yönetici panelinin tüm özellikleri: dashboard görünümü, anlık istatistikler, personel yönetimi ve detaylı raporlama.",
    src: "/yonetici-paneli-egitimi.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Yönetici İşlemleri",
    keywords: "yönetici paneli, PDKS dashboard, anlık istatistik, personel yönetimi, yönetici raporlama",
    level: "Orta",
  },
  {
    id: "pdks-aylik-puantaj-olusturma",
    title: "PDKS Aylık Puantaj Oluşturma",
    description: "Aylık puantaj raporu nasıl oluşturulur? Personel devam kayıtlarından otomatik puantaj hesaplama ve onay süreci.",
    src: "/pdks-aylik-puantaj-olusturma.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Raporlama",
    keywords: "aylık puantaj, puantaj oluşturma, devam puantajı, otomatik puantaj hesaplama, puantaj onay",
    level: "Orta",
  },
  {
    id: "pdks-aylik-puantaj-raporlar",
    title: "PDKS Aylık Puantaj Raporları ve Analiz",
    description: "Puantaj raporlarının detaylı incelenmesi: filtreleme, karşılaştırma, grafik analiz ve Excel/PDF dışa aktarma.",
    src: "/pdks-aylik-puantaj-raporlar.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Raporlama",
    keywords: "puantaj raporu, aylık rapor analizi, grafik analiz, Excel aktarma, puantaj karşılaştırma",
    level: "Orta",
  },
  {
    id: "pdks-barkodlarim",
    title: "PDKS Barkod Sistemi - Barkod ile Giriş Çıkış",
    description: "Barkod ile personel devam takibi: barkod oluşturma, barkod okutma, barkod bazlı giriş-çıkış ve raporlama.",
    src: "/pdks-barkodlarim.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Cihaz Entegrasyonu",
    keywords: "PDKS barkod, barkod giriş çıkış, barkod okuyucu, barkod oluşturma, barkod takibi",
    level: "Orta",
  },
  {
    id: "pdks-aktarim-formu-egitimi",
    title: "PDKS Aktarım Formu - Veri Transfer Eğitimi",
    description: "PDKS verileri nasıl aktarılır? Aktarım formu kullanımı, veri transfer yöntemleri ve entegrasyon ayarları.",
    src: "/pdks-aktarim-formu-egitimi.mp4",
    duration: "2:00",
    category: "Demo",
    subcategory: "Veri Yönetimi",
    keywords: "veri aktarım, aktarım formu, PDKS veri transfer, entegrasyon, veri dışa aktarma",
    level: "İleri",
  },
  {
    id: "turnike-montaj",
    title: "Turnike Sistemi Montaj Rehberi - Adım Adım Kurulum",
    description: "Tripod turnike sisteminin profesyonel montajı: zemin hazırlığı, sabitleme, kablolama, ağ bağlantısı ve yazılım kurulumu.",
    src: "/turnike-montaj.mp4",
    duration: "2:45",
    category: "Montaj",
    subcategory: "Turnike Montaj",
    keywords: "turnike montajı, tripod turnike kurulumu, turnike kablolama, geçiş kontrol montajı, turnike sabitleme",
    level: "Orta",
  },
  {
    id: "yuz-tanima-montaj",
    title: "Yüz Tanıma Sistemi Kurulumu - Duvar Montajı ve Ayarlar",
    description: "Yüz tanıma cihazının kurulumu: duvar montajı, ağ bağlantısı, kamera ayarları ve PDKS yazılımı entegrasyonu.",
    src: "/yuz-tanima-montaj.mp4",
    duration: "3:10",
    category: "Montaj",
    subcategory: "Yüz Tanıma Montaj",
    keywords: "yüz tanıma kurulumu, biyometrik cihaz montajı, yüz tanıma ayarları, PDKS yüz tanıma entegrasyonu",
    level: "Orta",
  },
  {
    id: "bariyer-montaj",
    title: "Bariyer Sistemi Montaj Rehberi - Otopark ve Site Girişi",
    description: "Otopark ve site girişleri için bariyer montajı: temel hazırlığı, elektrik bağlantısı, kumanda ayarları ve test işlemleri.",
    src: "/bariyer-montaj.mp4",
    duration: "4:20",
    category: "Montaj",
    subcategory: "Bariyer Montaj",
    keywords: "bariyer montajı, otopark bariyeri kurulumu, bariyer elektrik bağlantısı, bariyer ayarları",
    level: "Orta",
  },
  {
    id: "bariyer-sistemleri",
    title: "Bariyer Sistemleri Tanıtım - PT Plus, PT Genius, PT Guard",
    description: "Mika Teknoloji bariyer ürün ailesi: PT Plus, PT Genius ve PT Guard modellerinin karşılaştırması ve özellik tanıtımı.",
    src: "/bariyer-sistemleri.mp4",
    duration: "3:30",
    category: "Tanıtım",
    subcategory: "Ürün Tanıtımı",
    keywords: "bariyer sistemleri, PT Plus, PT Genius, PT Guard, otopark bariyeri, araç bariyeri",
    level: "Başlangıç",
  },
  {
    id: "gecis-kontrol",
    title: "Geçiş Kontrol Sistemi - Kartlı, Parmak İzli, Yüz Tanımalı",
    description: "Kartlı geçiş, parmak izi okuyucu ve yüz tanıma ile geçiş kontrol çözümlerinin karşılaştırmalı tanıtımı.",
    src: "/access-control-video.mp4",
    duration: "2:55",
    category: "Tanıtım",
    subcategory: "Ürün Tanıtımı",
    keywords: "geçiş kontrol sistemi, kartlı geçiş, parmak izi okuyucu, yüz tanıma geçiş, erişim kontrol",
    level: "Başlangıç",
  },
  {
    id: "magaza-personel-takip",
    title: "Mağaza Personel Takip Programı - Canlı Demo",
    description: "Perakende sektörü için personel takip programının canlı demosu: vardiya planlama, mesai hesaplama ve performans takibi.",
    src: "/magaza-video.mp4",
    duration: "2:06",
    category: "Demo",
    subcategory: "Sektörel Çözümler",
    keywords: "mağaza personel takip, perakende PDKS, vardiya planlama, mesai hesaplama, mağaza yönetimi",
    level: "Başlangıç",
  },
];

const categories = ["Tümü", "Demo", "Montaj", "Tanıtım"];

const subcategoryIcons: Record<string, typeof BookOpen> = {
  "Başlangıç Rehberi": BookOpen,
  "Personel Yönetimi": Users,
  "Giriş-Çıkış İşlemleri": Clock,
  "İzin Yönetimi": Clock,
  "Mesai Yönetimi": Clock,
  "Vardiya Planlama": Settings,
  "Onay Süreçleri": Shield,
  "Yönetici İşlemleri": Monitor,
  "Raporlama": Film,
  "Finansal İşlemler": Settings,
  "Veri Yönetimi": Settings,
  "Sorun Giderme": Search,
  "Cihaz Entegrasyonu": Smartphone,
  "Sektörel Çözümler": Users,
  "Ürün Tanıtımı": Film,
  "Turnike Montaj": Settings,
  "Yüz Tanıma Montaj": Settings,
  "Bariyer Montaj": Settings,
};

const levelColors: Record<string, string> = {
  "Başlangıç": "bg-green-100 text-green-700",
  "Orta": "bg-blue-100 text-blue-700",
  "İleri": "bg-purple-100 text-purple-700",
};

const faqItems = [
  {
    question: "PDKS (Personel Devam Kontrol Sistemi) nedir?",
    answer: "PDKS, çalışanların işe giriş-çıkış saatlerini otomatik olarak kaydeden ve takip eden bir sistemdir. Kart, parmak izi, yüz tanıma veya QR kod ile çalışır. Mesai hesaplama, izin takibi, puantaj oluşturma ve vardiya planlama gibi özelliklere sahiptir. Mika Teknoloji olarak bulut tabanlı (WebPDKS) ve yerinde kurulum seçenekleri sunuyoruz.",
  },
  {
    question: "QR PDKS nedir ve nasıl çalışır?",
    answer: "QR PDKS, personelin akıllı telefonundaki QR kodu okutarak giriş-çıkış yapmasını sağlayan modern bir devam kontrol sistemidir. Kart veya parmak izi cihazına gerek kalmadan, sadece telefonla personel takibi yapılabilir. GPS konum doğrulama özelliği ile uzaktan çalışanlar da takip edilebilir.",
  },
  {
    question: "PDKS sistemi hangi sektörlerde kullanılır?",
    answer: "PDKS sistemleri tüm sektörlerde kullanılabilir: perakende mağazalar, hastaneler, fabrikalar, ofisler, inşaat şantiyeleri, oteller, restoranlar ve daha birçok alanda. Her sektöre özel vardiya planlama ve mesai hesaplama modülleri mevcuttur.",
  },
  {
    question: "PDKS sistemi ile neler takip edilebilir?",
    answer: "PDKS sistemi ile personel giriş-çıkış saatleri, geç gelme/erken çıkma, fazla mesai, izin kullanımı, puantaj raporları, vardiya planları, avans talepleri ve bordro entegrasyonu takip edilebilir. Tüm veriler gerçek zamanlı olarak raporlanır.",
  },
  {
    question: "Mobil PDKS uygulaması var mı?",
    answer: "Evet, Mika Teknoloji WebPDKS sistemi tamamen mobil uyumludur. Personeller telefonlarından izin talebi, mesai talebi ve avans başvurusu yapabilir. Yöneticiler mobil üzerinden onay/ret işlemlerini gerçekleştirebilir ve anlık raporlara erişebilir.",
  },
  {
    question: "Vardiya planlama sistemi nasıl çalışır?",
    answer: "Shift Plan vardiya planlama sistemi ile haftalık veya aylık vardiya çizelgeleri oluşturabilirsiniz. Şablon tanımlama, satır kopyalama, otomatik atama ve çoklu onay akışları ile vardiya planlaması kolaylaşır. Mağaza, hastane ve fabrika gibi farklı sektörlere özel vardiya modelleri desteklenir.",
  },
  {
    question: "PDKS kurulumu nasıl yapılır?",
    answer: "Mika Teknoloji tüm PDKS sistemlerinin kurulumunu ücretsiz olarak gerçekleştirmektedir. Turnike, yüz tanıma cihazı, bariyer ve kart okuyucu montajları profesyonel ekibimiz tarafından yapılır. Bulut tabanlı WebPDKS için herhangi bir fiziksel kurulum gerekmez.",
  },
  {
    question: "Bu eğitim videoları güncel mi?",
    answer: "Evet, tüm eğitim videoları 2025 yılına ait güncel içeriklerdir. PDKS sistemimizin en son sürümüne göre hazırlanmıştır. Yeni özellikler eklendikçe videolarımız da güncellenmektedir.",
  },
];

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.08 },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function VideoCard({ video }: { video: VideoItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <motion.div variants={fadeInUp}>
      <Card className="h-full overflow-hidden border-2 border-slate-200 hover:border-pink-500 transition-all duration-300 group bg-white rounded-xl shadow-sm hover:shadow-lg">
        <CardContent className="p-0">
          <div className="relative bg-black overflow-hidden rounded-t-xl" style={{ aspectRatio: '16/9' }}>
            <div className="w-full h-full" onClick={!isPlaying ? handlePlay : undefined}>
              <video
                ref={videoRef}
                className="w-full h-full object-contain"
                preload="metadata"
                playsInline
                controls
                controlsList="nodownload"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src={video.src} type="video/mp4" />
              </video>
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300 pointer-events-none">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-pink-600/90 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 sm:h-10 sm:w-10 text-white ml-1" fill="white" />
                  </div>
                </div>
              )}
            </div>
            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex gap-2 pointer-events-none z-10">
              <span className="bg-pink-600 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium">
                {video.subcategory}
              </span>
              <span className={`text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium ${levelColors[video.level]}`}>
                {video.level}
              </span>
            </div>
            <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-black/70 text-white text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded backdrop-blur-sm pointer-events-none z-10">
              {video.duration}
            </div>
          </div>
          <div className="p-3 sm:p-5">
            <h3 className="text-sm sm:text-lg font-bold text-slate-800 mb-1 sm:mb-2 group-hover:text-pink-600 transition-colors leading-tight">
              {video.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2 sm:mb-3 line-clamp-3">
              {video.description}
            </p>
            <div className="flex items-center justify-between">
              <a
                href={video.src}
                download
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-pink-600 hover:text-pink-700 font-medium transition-colors"
              >
                <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Videoyu İndir</span>
                <span className="sm:hidden">İndir</span>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function FAQItem({ item, isOpen, onToggle }: { item: typeof faqItems[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-sm sm:text-base text-slate-800 pr-4">{item.question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-pink-600 flex-shrink-0" /> : <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />}
      </button>
      {isOpen && (
        <div className="px-4 sm:px-5 pb-4 sm:pb-5">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function VideolarPage() {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const filteredVideos = videos.filter(v => {
    const matchesCategory = activeCategory === "Tümü" || v.category === activeCategory;
    const matchesSearch = searchQuery === "" ||
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.keywords.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const subcategories = [...new Set(filteredVideos.map(v => v.subcategory))];

  const videoStructuredData = videos.map((video, index) => ({
    "@type": "VideoObject",
    "name": video.title,
    "description": video.description,
    "contentUrl": `https://mikateknoloji.com${video.src}`,
    "thumbnailUrl": "https://mikateknoloji.com/images/logos/mika-logo.jpg",
    "uploadDate": "2025-01-15",
    "duration": `PT${video.duration.split(":")[0]}M${video.duration.split(":")[1]}S`,
    "publisher": {
      "@type": "Organization",
      "name": "Mika Teknoloji Kontrol Sistemleri",
      "url": "https://mikateknoloji.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mikateknoloji.com/images/logos/mika-logo.jpg"
      }
    },
    "inLanguage": "tr",
    "isFamilyFriendly": true,
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": "https://schema.org/WatchAction",
      "userInteractionCount": 500 + (index * 50)
    },
    "keywords": video.keywords,
    "about": {
      "@type": "Thing",
      "name": "Personel Devam Kontrol Sistemi (PDKS)"
    }
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "PDKS Eğitim Videoları - Personel Devam Kontrol Sistemi Video Rehber",
    "description": "PDKS (Personel Devam Kontrol Sistemi) eğitim videoları: giriş-çıkış takibi, vardiya planlama, izin yönetimi, puantaj oluşturma, turnike ve bariyer montaj rehberleri. 30+ video ile PDKS sisteminizi kolayca öğrenin.",
    "url": "https://mikateknoloji.com/videolar",
    "inLanguage": "tr",
    "publisher": {
      "@type": "Organization",
      "name": "Mika Teknoloji Kontrol Sistemleri",
      "url": "https://mikateknoloji.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mikateknoloji.com/images/logos/mika-logo.jpg"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+90-546-712-22-96",
        "contactType": "customer service",
        "availableLanguage": "Turkish"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": videos.length,
      "itemListElement": videoStructuredData.map((video, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": video
      }))
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
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
        "name": "PDKS Eğitim Videoları",
        "item": "https://mikateknoloji.com/videolar"
      }
    ]
  };

  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "PDKS Sistemi Nasıl Kullanılır - Adım Adım Video Rehber",
    "description": "Personel Devam Kontrol Sistemi (PDKS) kullanımını video eğitimlerle öğrenin. Sisteme giriş, personel kaydı, vardiya planlama ve raporlama adımları.",
    "totalTime": "PT60M",
    "tool": [
      { "@type": "HowToTool", "name": "İnternet bağlantısı olan bilgisayar veya tablet" },
      { "@type": "HowToTool", "name": "PDKS yazılımı erişim bilgileri" }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Sisteme Giriş Yapın",
        "text": "PDKS login sayfasından kullanıcı adı ve şifrenizle giriş yapın.",
        "url": "https://mikateknoloji.com/videolar",
        "video": {
          "@type": "VideoObject",
          "name": "PDKS Sisteme Giriş",
          "contentUrl": "https://mikateknoloji.com/esoft-pdks-login-sayfasi.mp4"
        }
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Sistem Tanımlarını Yapın",
        "text": "Departman, şube ve mesai tiplerini tanımlayın.",
        "url": "https://mikateknoloji.com/videolar"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Personel Kartlarını Ekleyin",
        "text": "Çalışan bilgilerini girin ve personel kartlarını tanımlayın.",
        "url": "https://mikateknoloji.com/videolar"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Vardiya Planı Oluşturun",
        "text": "Shift Plan ile vardiya çizelgesi oluşturun ve personelleri atayın.",
        "url": "https://mikateknoloji.com/videolar"
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Raporları İnceleyin",
        "text": "Aylık puantaj raporları oluşturun ve personel devam durumunu analiz edin.",
        "url": "https://mikateknoloji.com/videolar"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>PDKS Eğitim Videoları | Personel Devam Kontrol Sistemi Rehber | Mika Teknoloji 2025</title>
        <meta name="description" content="PDKS (Personel Devam Kontrol Sistemi) eğitim videoları 2025. Giriş-çıkış takibi, vardiya planlama, izin yönetimi, puantaj, turnike ve bariyer montaj rehberleri. 30+ ücretsiz video ile PDKS kullanmayı öğrenin." />
        <meta name="keywords" content="PDKS eğitim videoları, personel devam kontrol sistemi, PDKS nasıl kullanılır, QR PDKS, vardiya planlama videosu, turnike montaj, bariyer kurulum, izin yönetimi, puantaj oluşturma, mesai takibi, personel takip sistemi, WebPDKS eğitim, mobil PDKS, shift planlama, PDKS kurulum rehberi 2025" />
        <meta name="robots" content="index,follow,max-video-preview:-1,max-image-preview:large,max-snippet:-1" />
        <link rel="canonical" href="https://mikateknoloji.com/videolar" />
        <meta name="author" content="Mika Teknoloji Kontrol Sistemleri" />
        <meta name="language" content="tr" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="PDKS Eğitim Videoları - 30+ Ücretsiz Video Rehber | Mika Teknoloji" />
        <meta property="og:description" content="Personel Devam Kontrol Sistemi (PDKS) eğitim videoları. Giriş-çıkış takibi, vardiya planlama, izin yönetimi ve daha fazlası." />
        <meta property="og:url" content="https://mikateknoloji.com/videolar" />
        <meta property="og:site_name" content="Mika Teknoloji" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:image" content="https://mikateknoloji.com/images/logos/mika-logo.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PDKS Eğitim Videoları | Mika Teknoloji" />
        <meta name="twitter:description" content="30+ PDKS eğitim videosu ile sisteminizi kolayca öğrenin. Vardiya planlama, izin yönetimi, puantaj ve daha fazlası." />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(howToData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="py-10 sm:py-16 bg-gradient-to-br from-primary/5 to-pink-50 relative">
          <div className="absolute top-4 right-4 text-slate-400 text-sm font-medium">S1</div>
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center mb-4 sm:mb-6"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-pink-600 flex items-center justify-center">
                <Film className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
            </motion.div>
            <motion.h1
              className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-3 sm:mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              PDKS Eğitim Videoları
            </motion.h1>
            <motion.p
              className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Personel Devam Kontrol Sistemi (PDKS) kullanım rehberleri, kurulum videoları ve canlı demolar
            </motion.p>
            <motion.p
              className="text-sm text-slate-500 max-w-2xl mx-auto mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {videos.length} eğitim videosu ile PDKS sisteminizi kolayca öğrenin. Başlangıçtan ileri seviyeye tüm konular.
            </motion.p>

            <motion.div
              className="max-w-md mx-auto mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Video ara... (örn: vardiya, izin, puantaj)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 sm:pl-12 pr-4 py-2.5 sm:py-3 rounded-full border border-slate-200 bg-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent shadow-sm"
                />
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-2 sm:gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  onClick={() => setActiveCategory(cat)}
                  size="sm"
                  className={activeCategory === cat
                    ? "bg-pink-600 hover:bg-pink-700 text-white text-xs sm:text-sm"
                    : "border-pink-300 text-pink-600 hover:bg-pink-50 text-xs sm:text-sm"
                  }
                >
                  {cat} {cat !== "Tümü" && `(${videos.filter(v => v.category === cat).length})`}
                </Button>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-8 sm:py-16 relative">
          <div className="absolute top-4 right-4 text-slate-400 text-sm font-medium">S2</div>
          <div className="container mx-auto px-3 sm:px-4">
            {searchQuery && (
              <p className="text-center text-sm text-slate-500 mb-6">
                "{searchQuery}" için <strong>{filteredVideos.length}</strong> video bulundu
              </p>
            )}

            {subcategories.map((subcategory) => {
              const subcatVideos = filteredVideos.filter(v => v.subcategory === subcategory);
              if (subcatVideos.length === 0) return null;

              const IconComponent = subcategoryIcons[subcategory] || Film;

              return (
                <div key={subcategory} className="mb-10 sm:mb-16">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 max-w-5xl mx-auto">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-pink-100 flex items-center justify-center">
                      <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-pink-600" />
                    </div>
                    <h2 className="text-lg sm:text-2xl font-bold text-slate-800">{subcategory}</h2>
                    <span className="text-xs sm:text-sm text-slate-400 ml-1">({subcatVideos.length} video)</span>
                  </div>
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                  >
                    {subcatVideos.map((video) => (
                      <VideoCard key={video.id} video={video} />
                    ))}
                  </motion.div>
                </div>
              );
            })}

            {filteredVideos.length === 0 && (
              <div className="text-center py-12 sm:py-16 text-slate-500">
                <Video className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 opacity-30" />
                <p className="text-base sm:text-lg mb-2">Aramanızla eşleşen video bulunamadı.</p>
                <p className="text-sm text-slate-400">Farklı anahtar kelimeler deneyin veya kategori filtresini değiştirin.</p>
              </div>
            )}
          </div>
        </section>

        <section className="py-8 sm:py-16 bg-slate-50 relative" aria-label="PDKS Hakkında Sıkça Sorulan Sorular">
          <div className="absolute top-4 right-4 text-slate-400 text-sm font-medium">S3</div>
          <div className="container mx-auto px-3 sm:px-4">
            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl sm:text-3xl font-bold text-slate-800 text-center mb-2 sm:mb-4">
                PDKS Hakkında Sıkça Sorulan Sorular
              </h2>
              <p className="text-sm sm:text-base text-slate-600 text-center mb-6 sm:mb-8">
                Personel Devam Kontrol Sistemi hakkında merak edilenler
              </p>
              <div className="space-y-3">
                {faqItems.map((item, index) => (
                  <FAQItem
                    key={index}
                    item={item}
                    isOpen={openFAQ === index}
                    onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-8 sm:py-12 bg-white relative">
          <div className="absolute top-4 right-4 text-slate-400 text-sm font-medium">S4</div>
          <div className="container mx-auto px-3 sm:px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-lg sm:text-2xl font-bold text-slate-800 text-center mb-4 sm:mb-8">
                İlgili Çözümlerimiz
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <Link href="/urunler/webpdks" className="block p-3 sm:p-4 rounded-xl border border-slate-200 hover:border-pink-500 hover:shadow-md transition-all text-center group">
                  <Monitor className="h-6 w-6 sm:h-8 sm:w-8 text-pink-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xs sm:text-sm font-semibold text-slate-800">WebPDKS</h3>
                  <p className="text-[10px] sm:text-xs text-slate-500 mt-1 hidden sm:block">Bulut Tabanlı PDKS</p>
                </Link>
                <Link href="/urunler/qr-patrol" className="block p-3 sm:p-4 rounded-xl border border-slate-200 hover:border-pink-500 hover:shadow-md transition-all text-center group">
                  <Smartphone className="h-6 w-6 sm:h-8 sm:w-8 text-pink-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xs sm:text-sm font-semibold text-slate-800">QR-Patrol</h3>
                  <p className="text-[10px] sm:text-xs text-slate-500 mt-1 hidden sm:block">Mobil Devriye</p>
                </Link>
                <Link href="/urunler/yuz-tanima" className="block p-3 sm:p-4 rounded-xl border border-slate-200 hover:border-pink-500 hover:shadow-md transition-all text-center group">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-pink-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xs sm:text-sm font-semibold text-slate-800">Yüz Tanıma</h3>
                  <p className="text-[10px] sm:text-xs text-slate-500 mt-1 hidden sm:block">Biyometrik Geçiş</p>
                </Link>
                <Link href="/cozumler" className="block p-3 sm:p-4 rounded-xl border border-slate-200 hover:border-pink-500 hover:shadow-md transition-all text-center group">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-pink-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xs sm:text-sm font-semibold text-slate-800">Tüm Çözümler</h3>
                  <p className="text-[10px] sm:text-xs text-slate-500 mt-1 hidden sm:block">Kapsamlı Güvenlik</p>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-10 sm:py-16 bg-gradient-to-r from-pink-600 to-pink-700 relative">
          <div className="absolute top-4 right-4 text-white/40 text-sm font-medium">S5</div>
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                PDKS Sistemi Hakkında Bilgi Alın
              </h2>
              <p className="text-white/80 text-sm sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                Ücretsiz demo talebi oluşturun veya WhatsApp üzerinden anında bilgi alın. Profesyonel ekibimiz kurulum desteği sağlar.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-pink-600 hover:bg-white/90 font-semibold text-sm sm:text-base"
                >
                  <a href="https://wa.me/905467122296" target="_blank" rel="noopener noreferrer">
                    WhatsApp ile İletişim
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-semibold text-sm sm:text-base"
                >
                  <Link href="/iletisim">
                    İletişim Formu <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-6 sm:py-10 bg-white relative" aria-label="PDKS Eğitim İçerikleri SEO Metin">
          <div className="absolute top-4 right-4 text-slate-400 text-sm font-medium">S6</div>
          <div className="container mx-auto px-3 sm:px-4">
            <div className="max-w-4xl mx-auto prose prose-sm sm:prose prose-slate">
              <h2 className="text-lg sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">PDKS Eğitim Videoları ile Sisteminizi Kolayca Öğrenin</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3 sm:mb-4">
                <strong>Personel Devam Kontrol Sistemi (PDKS)</strong>, işletmelerin çalışan giriş-çıkış saatlerini otomatik olarak kaydeden, mesai hesaplayan ve izin yönetimi yapan modern bir yazılım sistemidir. Mika Teknoloji olarak hazırladığımız {videos.length} eğitim videosu ile PDKS sisteminizi en verimli şekilde kullanmayı öğrenebilirsiniz.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3 sm:mb-4">
                <strong>QR PDKS</strong> teknolojisi ile artık pahalı cihazlara gerek kalmadan, personellerinizin akıllı telefonları üzerinden giriş-çıkış takibi yapabilirsiniz. Bulut tabanlı <strong>WebPDKS</strong> sistemi sayesinde her yerden, her cihazdan personelinizi takip edebilirsiniz.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3 sm:mb-4">
                Eğitim videolarımız başlangıç, orta ve ileri seviye olarak sınıflandırılmıştır. Sisteme yeni başlayanlar "Başlangıç Rehberi" kategorisindeki videolarla başlayabilir. <strong>Vardiya planlama</strong>, <strong>puantaj oluşturma</strong>, <strong>izin yönetimi</strong> ve <strong>avans talebi</strong> gibi konularda detaylı eğitim içerikleri sunuyoruz.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ayrıca <strong>turnike sistemi montajı</strong>, <strong>yüz tanıma cihazı kurulumu</strong> ve <strong>bariyer sistemi montajı</strong> gibi donanım kurulum rehberleri de video galerimimizde yer almaktadır. Tüm montaj işlemleri profesyonel ekibimiz tarafından ücretsiz olarak yapılmaktadır.
              </p>
            </div>
          </div>
        </section>
      </div>

      <WhatsAppWidget />
    </>
  );
}
