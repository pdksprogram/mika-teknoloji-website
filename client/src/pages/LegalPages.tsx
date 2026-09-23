// Yasal sayfalar (Deniz 23.09): Meta uygulama ayarları (Hizmet Şartları, Veri Silme URL'si) + WhatsApp
// kvkk_foto_onay şablonundaki aydınlatma bağlantısı + PayTR canlı mod. Dil PrivacyPolicy.tsx ile aynı.
// Metinler taslaktır; hukuki son kontrol Deniz/avukat onayındadır.
type Bolum = { baslik: string; metin: string[] };

function YasalSayfa({ baslik, alt, bolumler }: { baslik: string; alt: string; bolumler: Bolum[] }) {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="rounded-2xl border-t-4 border-primary bg-white p-8 shadow-lg">
          <h1 className="mb-2 text-3xl font-bold text-slate-800">{baslik}</h1>
          <p className="mb-8 text-sm text-slate-500">{alt}</p>
          {bolumler.map((b) => (
            <section key={b.baslik} className="mb-6">
              <h2 className="mb-2 text-lg font-semibold text-slate-800">{b.baslik}</h2>
              {b.metin.map((m, i) => (
                <p key={i} className="mb-2 leading-relaxed text-slate-700">{m}</p>
              ))}
            </section>
          ))}
          <p className="mt-10 text-xs text-slate-500">
            Mika Teknoloji — Ercan Toksoy · Perpa Ticaret Merkezi A Blok 4-5. Kat No:0158, Şişli / İstanbul · info@mikateknoloji.com
          </p>
        </div>
      </div>
    </div>
  );
}

export function KvkkAydinlatma() {
  return (
    <YasalSayfa
      baslik="Öğrenci Takip — Kişisel Verilerin Korunması Aydınlatma Metni"
      alt="6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında giriş-çıkış bildirimleri ve fotoğraf gönderimi"
      bolumler={[
        { baslik: "Veri sorumlusu", metin: [
          "Öğrenciye ait kişisel verilerin veri sorumlusu, öğrencinin kayıtlı olduğu okuldur. Mika Teknoloji (ESOFT Öğrenci Takip), okul adına verileri işleyen hizmet sağlayıcıdır (veri işleyen)." ] },
        { baslik: "İşlenen veriler", metin: [
          "Öğrencinin adı soyadı, okula giriş-çıkış tarih ve saati, velinin telefon numarası ve — yalnızca velinin açık rızası varsa — giriş-çıkış anında çekilen fotoğraf." ] },
        { baslik: "İşleme amacı", metin: [
          "Velinin, öğrencinin okula giriş ve çıkışından anında haberdar edilmesi; öğrenci güvenliğinin sağlanması ve devam durumunun takibi." ] },
        { baslik: "Aktarım", metin: [
          "Bildirimler WhatsApp Business Platformu (Meta Platforms) veya SMS altyapısı üzerinden yalnızca kayıtlı veliye iletilir. Veriler bu amaç dışında üçüncü kişilerle paylaşılmaz, reklam veya pazarlama için kullanılmaz." ] },
        { baslik: "Fotoğraflar ve saklama süresi", metin: [
          "Fotoğraf gönderimi isteğe bağlıdır ve yalnızca velinin WhatsApp üzerinden verdiği açık rıza ile yapılır. Rıza verilmezse bildirim fotoğrafsız gönderilir.",
          "Fotoğraflar okulun belirlediği süre (varsayılan 30 gün) sonunda otomatik olarak silinir." ] },
        { baslik: "Haklarınız", metin: [
          "KVKK'nın 11. maddesi uyarınca verilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini veya silinmesini isteme ve verdiğiniz rızayı her zaman geri alma hakkına sahipsiniz. Rızanızı geri almak için WhatsApp sohbetine \"iptal\" yazabilir veya okul idaresine başvurabilirsiniz.",
          "Başvurularınızı okul idaresine veya info@mikateknoloji.com adresine iletebilirsiniz." ] },
      ]}
    />
  );
}

export function HizmetSartlari() {
  return (
    <YasalSayfa
      baslik="Hizmet Şartları"
      alt="ESOFT / Mika Teknoloji yazılım ve bildirim hizmetleri"
      bolumler={[
        { baslik: "Hizmet", metin: [
          "Mika Teknoloji; personel devam kontrol (PDKS), öğrenci takip, geçiş kontrol yazılımları ile bu yazılımlara bağlı SMS ve WhatsApp bildirim hizmetlerini kurumsal müşterilerine sunar." ] },
        { baslik: "WhatsApp bildirim kontörü", metin: [
          "Bildirim kontörü, kurumun panelinden kredi veya banka kartıyla satın alınır. Ödemeler PayTR güvenli ödeme altyapısı üzerinden alınır; kart bilgileri Mika Teknoloji tarafından görülmez veya saklanmaz.",
          "Her gönderilen WhatsApp bildirimi bir kontör düşer. Satın alınan kontör ilgili kurum hesabına tanımlanır, başka bir kuruma devredilemez. Satın alma sonrasında e-Arşiv / e-Fatura kesilir." ] },
        { baslik: "Kullanım", metin: [
          "Kurum, bildirimleri yalnızca kendi öğrenci, veli veya personeline, bilgilendirme amacıyla gönderir. İstenmeyen ileti (spam) veya pazarlama amaçlı kullanım yasaktır; bu durumda hizmet askıya alınabilir." ] },
        { baslik: "Sorumluluk", metin: [
          "Bildirimlerin iletimi WhatsApp (Meta) ve operatör altyapısına bağlıdır. Bu altyapılardan kaynaklanan gecikme veya kesintilerden Mika Teknoloji sorumlu tutulamaz." ] },
        { baslik: "İletişim", metin: [ "Sorularınız için: info@mikateknoloji.com" ] },
      ]}
    />
  );
}

export function VeriSilme() {
  return (
    <YasalSayfa
      baslik="Veri Silme Talimatları"
      alt="Kişisel verilerinizin silinmesini nasıl talep edebilirsiniz"
      bolumler={[
        { baslik: "Veli ve öğrenci verileri", metin: [
          "Öğrenci ve veli verileri okul adına işlenir. Silme talebinizi öğrencinin kayıtlı olduğu okul idaresine iletebilirsiniz; okul, paneli üzerinden kaydı ve ilgili bildirim geçmişini siler.",
          "WhatsApp fotoğraf gönderim rızanızı geri almak için ilgili WhatsApp sohbetine \"iptal\" yazmanız yeterlidir." ] },
        { baslik: "Doğrudan başvuru", metin: [
          "Okula ulaşamıyorsanız info@mikateknoloji.com adresine; adınızı, telefon numaranızı ve ilgili okulu belirterek yazabilirsiniz. Talebiniz okulla birlikte en geç 30 gün içinde sonuçlandırılır." ] },
        { baslik: "Fotoğraflar", metin: [
          "Giriş-çıkış fotoğrafları okulun belirlediği süre (varsayılan 30 gün) sonunda otomatik olarak silinir." ] },
      ]}
    />
  );
}
