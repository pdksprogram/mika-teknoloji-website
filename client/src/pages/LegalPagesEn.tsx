// İngilizce yasal sayfalar: LegalPages.tsx ve PrivacyPolicy.tsx metinlerinin birebir çevirisidir, yeni iddia eklenmez.
// Türkçe adresler (Meta, PayTR, mağaza) değişmez. Çeviri ve "Türkçe metin esastır" notu Deniz/avukat onayındadır.
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import MikaMarka from "@/components/MikaMarka";
import { Button } from "@/components/ui/button";
import SEO, { kanonikAdres } from "@/seo/SEO";

export const EN_YASAL_ROTALAR = ["/en/student-data-notice", "/en/privacy", "/en/terms", "/en/data-deletion"];

const EPOSTA = "info@mikateknoloji.com";
const YASAL_AD = "Mika Teknoloji — Ercan Toksoy · Perpa Ticaret Merkezi A Blok 4-5. Kat No:0158, Şişli / İstanbul";

const BAGLANTILAR: [string, string][] = [
  ["Data Protection", "/en/student-data-notice"],
  ["Privacy", "/en/privacy"],
  ["Terms", "/en/terms"],
  ["Data Deletion", "/en/data-deletion"],
];

type Bolum = { baslik: string; metin: string[] };

// Bir yasal metnin Türkçe ve İngilizce adreslerini arama motoruna eş olarak bildirir.
export function DilEslesmesi({ trYol, enYol }: { trYol: string; enYol: string }) {
  return (
    <Helmet>
      <link rel="alternate" hrefLang="tr" href={kanonikAdres(trYol)} />
      <link rel="alternate" hrefLang="en" href={kanonikAdres(enYol)} />
      <link rel="alternate" hrefLang="x-default" href={kanonikAdres(enYol)} />
    </Helmet>
  );
}

function YasalSayfaEn({ baslik, alt, bolumler, seoBaslik, seoAciklama, trYol, enYol, son }: { baslik: string; alt: string; bolumler: Bolum[]; seoBaslik: string; seoAciklama: string; trYol: string; enYol: string; son?: string }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEO title={seoBaslik} description={seoAciklama} />
      <DilEslesmesi trYol={trYol} enYol={enYol} />
      <Helmet>
        <html lang="en" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="tr_TR" />
      </Helmet>
      <header className="sticky top-0 z-40 border-b-2 border-[#F5A800] bg-[#201658]">
        <div className="mx-auto flex h-[62px] max-w-[1680px] items-center justify-between gap-4 px-5 lg:h-[86px] lg:px-[72px]">
          <MikaMarka href="/" />
          <div className="flex items-center gap-2 sm:gap-5">
            <Link href={trYol} hrefLang="tr" lang="tr" className="inline-flex min-h-[44px] items-center px-2 text-sm font-semibold text-white hover:text-[#F5A800]">Türkçe</Link>
            <Button asChild>
              <a href={`mailto:${EPOSTA}`}>Email Us</a>
            </Button>
          </div>
        </div>
      </header>
      <main className="py-10 lg:py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="rounded-2xl border-t-4 border-primary bg-white p-6 shadow-lg sm:p-8">
            <h1 className="mb-2 text-3xl font-bold text-slate-800">{baslik}</h1>
            <p className="mb-4 text-sm text-slate-500">{alt}</p>
            <p className="mb-8 rounded border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
              This English text is a courtesy translation. If the two versions differ, the{" "}
              <Link href={trYol} hrefLang="tr" className="font-semibold text-primary underline">Turkish version</Link> prevails.
            </p>
            {bolumler.map((b) => (
              <section key={b.baslik} className="mb-6">
                <h2 className="mb-2 text-lg font-semibold text-slate-800">{b.baslik}</h2>
                {b.metin.map((m, i) => (
                  <p key={i} className="mb-2 leading-relaxed text-slate-700">{m}</p>
                ))}
              </section>
            ))}
            {son && <p className="mt-8 text-sm text-slate-500">{son}</p>}
          </div>
        </div>
      </main>
      <footer className="bg-[#120C36] py-8 text-[15px] leading-6 text-[#D9DCEC]">
        <div className="mx-auto max-w-[1680px] px-5 lg:px-[72px]">
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6">
            {BAGLANTILAR.map(([ad, yol]) => (
              <Link key={yol} href={yol} className="inline-flex min-h-[44px] items-center hover:text-white">{ad}</Link>
            ))}
          </nav>
          <p className="mt-4 border-t border-white/15 pt-4 text-sm">
            {YASAL_AD} · <a href={`mailto:${EPOSTA}`} className="inline-flex min-h-[44px] items-center hover:text-white">{EPOSTA}</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export function StudentDataNotice() {
  return (
    <YasalSayfaEn
      trYol="/kvkk"
      enYol="/en/student-data-notice"
      baslik="Student Tracking — Personal Data Protection Notice"
      alt="Entry and exit notifications and photo delivery under Turkish Personal Data Protection Law No. 6698 (KVKK)"
      seoBaslik="Personal Data Notice – Student Tracking | Mika Teknoloji"
      seoAciklama="Student Tracking entry and exit notifications and photo delivery under Law No. 6698: data controller, data processed, purpose and your rights."
      bolumler={[
        { baslik: "Data controller", metin: [
          "The data controller for a student's personal data is the school where the student is enrolled. Mika Teknoloji (ESOFT Student Tracking) is the service provider that processes the data on behalf of the school (data processor)." ] },
        { baslik: "Data processed", metin: [
          "The student's first and last name, the date and time of entry to and exit from the school, the parent's phone number and, only with the parent's explicit consent, a photo taken at the moment of entry or exit." ] },
        { baslik: "Purpose of processing", metin: [
          "Informing the parent immediately of the student's entry to and exit from the school, ensuring student safety and tracking attendance." ] },
        { baslik: "Transfer", metin: [
          "Notifications are delivered only to the registered parent, through the WhatsApp Business Platform (Meta Platforms) or SMS infrastructure. The data is not shared with third parties for any other purpose and is not used for advertising or marketing." ] },
        { baslik: "Photos and retention period", metin: [
          "Photo delivery is optional and takes place only with the explicit consent the parent gives through WhatsApp. If consent is not given, the notification is sent without a photo.",
          "Photos are deleted automatically at the end of the period set by the school (30 days by default)." ] },
        { baslik: "Your rights", metin: [
          "Under Article 11 of the KVKK, you have the right to learn whether your data is processed, to request its correction or deletion, and to withdraw your consent at any time. To withdraw your consent, you can write \"iptal\" in the WhatsApp chat or apply to the school administration.",
          `You can send your requests to the school administration or to ${EPOSTA}.` ] },
      ]}
    />
  );
}

export function TermsEn() {
  return (
    <YasalSayfaEn
      trYol="/hizmet-sartlari"
      enYol="/en/terms"
      baslik="Terms of Service"
      alt="ESOFT / Mika Teknoloji software and notification services"
      seoBaslik="Terms of Service: Software and Notifications | Mika"
      seoAciklama="Terms of ESOFT / Mika Teknoloji software and notification services: scope of service, WhatsApp notification credits, rules of use and liability."
      bolumler={[
        { baslik: "Service", metin: [
          "Mika Teknoloji provides its corporate customers with time and attendance (PDKS), student tracking and access control software, together with SMS and WhatsApp notification services connected to this software." ] },
        { baslik: "WhatsApp notification credits", metin: [
          "Notification credits are purchased by credit or debit card from the organization's panel. Payments are taken through the PayTR secure payment infrastructure; card details are not seen or stored by Mika Teknoloji.",
          "Each WhatsApp notification sent uses one credit. Purchased credits are assigned to the relevant organization's account and cannot be transferred to another organization. An e-Archive invoice or e-Invoice is issued after purchase." ] },
        { baslik: "Use", metin: [
          "The organization sends notifications only to its own students, parents or staff, for information purposes. Unsolicited messages (spam) and marketing use are prohibited; in such a case the service may be suspended." ] },
        { baslik: "Liability", metin: [
          "Delivery of notifications depends on WhatsApp (Meta) and operator infrastructure. Mika Teknoloji cannot be held liable for delays or interruptions caused by this infrastructure." ] },
        { baslik: "Contact", metin: [ `For questions: ${EPOSTA}` ] },
      ]}
    />
  );
}

export function DataDeletionEn() {
  return (
    <YasalSayfaEn
      trYol="/veri-silme"
      enYol="/en/data-deletion"
      baslik="Data Deletion Instructions"
      alt="How you can request the deletion of your personal data"
      seoBaslik="Data Deletion Instructions | Mika Teknoloji"
      seoAciklama="How to request the deletion of your personal data: parent and student data, direct application and deletion of photos."
      bolumler={[
        { baslik: "Parent and student data", metin: [
          "Student and parent data is processed on behalf of the school. You can send your deletion request to the administration of the school where the student is enrolled; the school deletes the record and the related notification history from its panel.",
          "To withdraw your consent to WhatsApp photo delivery, simply write \"iptal\" in the relevant WhatsApp chat." ] },
        { baslik: "Direct application", metin: [
          `If you cannot reach the school, you can write to ${EPOSTA}, stating your name, your phone number and the school concerned. Your request is concluded together with the school within 30 days at the latest.` ] },
        { baslik: "Photos", metin: [
          "Entry and exit photos are deleted automatically at the end of the period set by the school (30 days by default)." ] },
      ]}
    />
  );
}

export function PrivacyEn() {
  return (
    <YasalSayfaEn
      trYol="/mobil-gizlilik-sozlesmesi.php"
      enYol="/en/privacy"
      baslik="Mobile App Privacy Policy"
      alt="Official privacy policy for apps on Google Play Store and iOS App Store"
      seoBaslik="Mobile App Privacy Policy | Mika Teknoloji"
      seoAciklama="Privacy policy for Mika Teknoloji mobile apps on Google Play and the App Store: data handled, purpose of use and your rights."
      son="Last updated: 1 December 2021. This privacy policy was prepared under Turkish Personal Data Protection Law No. 6698 (KVKK). © 2021-2025 Mika Teknoloji Kontrol Sistemleri. All rights reserved."
      bolumler={[
        { baslik: "Privacy policy and terms of use", metin: [
          "This document sets out the official privacy policy and terms of use for all mobile apps developed by MİKA TEKNOLOJİ.",
          "The privacy policy and terms of use stated here apply to all MİKA TEKNOLOJİ mobile apps published on Google Play Store and iOS App Store. By installing these apps on your mobile device, you are deemed to have accepted the privacy policy and terms of use in this text. If you do not accept these terms, do not install these apps on your mobile device.",
          "In our apps, entered data is stored on encrypted servers so that only you can see it, and it is not shared with third persons or organizations." ] },
        { baslik: "Phone permissions", metin: [
          "The shortcut call function in our app requires you to grant the necessary permissions. This permission is used only for shortcut calls to the customers registered in the app, and your customers' personal data is stored encrypted only in databases specific to you." ] },
        { baslik: "Internet permissions", metin: [
          "This permission is needed so that data can be sent from our app to encrypted servers, and users must grant it. These permissions are not used to transfer any information from your phone against your wishes. The internet access permission is used only to transfer the data and photos of the forms you fill in within the app." ] },
        { baslik: "Camera use", metin: [
          "In our mobile apps, the camera is used only for the photos you want to send from within the app. It is not used without the user's knowledge. Photos taken in the mobile app are stored in an encrypted environment belonging to the user and are accessible only to the user and the organization the user belongs to. Photos are not shared with third persons or organizations without the user's knowledge." ] },
        { baslik: "Location data", metin: [
          "This covers data about users' precise or approximate location. GPS data and location data derived from IP and port addresses are used when a user of the mobile PDKS app wishes to report an event at their current location, and only if the user gives permission." ] },
        { baslik: "Personal information", metin: [
          "Our apps do not collect any personal information about you and do not request any from you.",
          "Personal information about children is not knowingly or intentionally collected." ] },
        { baslik: "No warranty", metin: [
          "MİKA TEKNOLOJİ will always show due care and sensitivity in publishing high-quality, useful apps. Nevertheless, we make no commitment that the content of our apps will meet your expectations, be useful to you or contain definitively accurate information. We offer the apps as they are. For this reason, you cannot hold MİKA TEKNOLOJİ responsible for any negative situation arising from our apps.",
          "MİKA TEKNOLOJİ makes the necessary effort to take all possible measures regarding the security of these apps and fulfills its obligations under the Google Play Developer Program Policies. However, the internet and digital environments are not sufficiently secure. We therefore give no guarantee that we will provide you with a one hundred percent secure service." ] },
        { baslik: "Distribution and third parties", metin: [
          "Our apps are available only on Google Play Store and iOS App Store. If these apps appear in another Android or iOS store without our knowledge, MİKA TEKNOLOJİ cannot be held responsible for installations made from there.",
          "These apps may contain advertisements and links belonging to third parties. You accept that you cannot hold MİKA TEKNOLOJİ responsible for the nature, content or security of these third-party advertisements and links or for damages arising from them. You can learn how to adjust your settings for advertisements published by Google on the ad settings page." ] },
        { baslik: "Copyright", metin: [
          "All copyrights in the entire content of these apps, consisting of audio, written and visual elements and software, belong to MİKA TEKNOLOJİ. You accept that you will not copy, reproduce, republish, disassemble or re-present to the public any of our apps or their copyright-protected content." ] },
        { baslik: "Contact and changes", metin: [
          `You can send your comments and suggestions about the terms stated here to ${EPOSTA}.`,
          "MİKA TEKNOLOJİ may make changes to this Privacy Policy and Terms of Use text. Changes take effect immediately. We state the date of the change as the \"last updated\" date at the bottom." ] },
      ]}
    />
  );
}
