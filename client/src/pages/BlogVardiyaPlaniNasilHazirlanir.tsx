import {
  BlogYaziSablonu,
  FazlaMesaiKutusu,
  IcLink,
  Liste,
  Paragraf,
  YaziBolumu,
  blogYazisi,
} from "@/components/BlogIcerik";

const YAZI = blogYazisi("/blog/vardiya-plani-nasil-hazirlanir");

export default function BlogVardiyaPlaniNasilHazirlanir() {
  return (
    <BlogYaziSablonu
      yazi={YAZI}
      giris="Vardiya planı, kimin hangi gün hangi saatlerde çalışacağını gösteren tablodur. İyi hazırlanmış bir plan iki işe yarar: ekip nerede ve ne zaman olacağını önceden bilir, ay sonunda da giriş-çıkış kayıtları bu plana göre değerlendirilir. Aşağıda haftalık planı hazırlarken izlenebilecek sırayı, Mika PDKS'teki karşılıklarıyla birlikte anlatıyoruz."
    >
      <YaziBolumu baslik="1. İhtiyacı saat saat çıkarın">
        <Paragraf>
          Plana isimlerle değil, saatlerle başlayın. İş yerinin açılış ve kapanış saatini yazın, günü dilimlere bölün ve her
          dilimde kaç kişiye ihtiyaç olduğunu not edin. Örneğin 10.00–22.00 arası açık bir mağazada sabah iki kişi yetebilir,
          akşamüstü yoğunluğunda üç kişi gerekebilir.
        </Paragraf>
        <Paragraf>
          Hafta içi ile hafta sonu farklıysa iki ayrı satır açın. Kampanya günü, sayım ya da teslimat günü gibi olağan dışı
          günleri de bu aşamada işaretleyin; plan yazıldıktan sonra fark edilen bir sayım günü bütün haftayı yeniden
          düzenletir.
        </Paragraf>
      </YaziBolumu>

      <YaziBolumu baslik="2. Vardiya kalıplarını tanımlayın">
        <Paragraf>
          İhtiyaç belli olunca bunu karşılayacak birkaç sabit kalıp belirleyin: sabah, akşam ve gerekiyorsa yoğun saatleri
          kapatan bir ara vardiya. Kalıp sayısı az olduğunda plan okunur kalır ve çalışanlar kendi saatini kolayca hatırlar.
        </Paragraf>
        <Paragraf>
          Mika PDKS'te bu kalıplar Çalışma Planları ekranında, bir çalışma grubunun altında vardiya olarak tanımlanır:
          başlangıç ve bitiş saati vardiyaya, molalar Mola Tanımları bölümüne yazılır; çalışanlar da bu çalışma grubuna
          bağlanır. Molayı tanıma doğru yazmak önemlidir; program çalışma süresini hesaplarken molayı buradan alıp düşer.
        </Paragraf>
      </YaziBolumu>

      <YaziBolumu baslik="3. Haftalık planı yazın">
        <Paragraf>
          Vardiya planı, onay ve kilit ekranları vardiya planı modülü açık firmalarda kullanılır. Planı yazan kişi genellikle
          ekibi yakından tanıyan kişidir; bir mağazada bu çoğunlukla mağaza müdürüdür. Haftalık plan tablosunda her çalışanın satırına günler boyunca vardiya kalıbı seçilir. Yazarken şu sırayı izlemek işi kolaylaştırır:
        </Paragraf>
        <Liste
          maddeler={[
            "Önce hafta tatillerini ve bilinen izinleri yerleştirin; boş kalan günler gerçek kapasitenizdir.",
            "Sonra en kalabalık dilimi doldurun, ardından sakin saatlere geçin.",
            "Akşam kapanışta kalan birine ertesi sabah açılış vermemeye çalışın; yorgunluk geç kalma ve hata olarak geri döner.",
            "Hafta bitince her çalışanın haftalık toplam saatine bakın; birinin planı fazla mesaiye taşıyorsa kalıbı ekipte dağıtın.",
          ]}
        />
        <FazlaMesaiKutusu metin="Bir çalışanın planlanan haftasının toplamını görmek için günlük giriş, çıkış ve mola sürelerini girin; haftalık sınırı aşan kısım ayrıca gösterilir." />
      </YaziBolumu>

      <YaziBolumu baslik="4. Planı ekiple paylaşın">
        <Paragraf>
          Mika PDKS'te plan girildiği anda çalışanlar kendi vardiyalarını Esoft Pdks mobil uygulamasında görmeye başlar; bunun
          için onayın ya da kilidin beklenmesi gerekmez. Bu nedenle planı gün gün değil, hafta tamamlandığında girmek
          karışıklığı azaltır: yarım kalmış bir taslağı gören çalışan yanlış güne hazırlanabilir.
        </Paragraf>
        <Paragraf>
          Telefon kullanmayan ya da panoya asılı bir liste isteyen ekipler için plan PDF olarak da alınabilir.
        </Paragraf>
      </YaziBolumu>

      <YaziBolumu baslik="5. Onaya gönderin">
        <Paragraf>
          Birden fazla şube ya da ekip varsa planların bir üst yetkili tarafından görülmesi işe yarar. Onaycı planı Onayla ve
          kilitle düğmesiyle onaylar; onaylanan plan kilitlenir, Toplu Düzenle kapanır. Kilit, onaydan sonra planın fark
          edilmeden değiştirilmesini önler.
        </Paragraf>
        <Paragraf>
          Onaydan sonra değişiklik gerekirse planı yazan Düzeltme İste ile neyin değişeceğini yazar; onaycı talebi onaylar ya
          da gerekçe yazarak reddeder. "Pazartesi akşamına bir kişi daha" gibi açık bir not, talebin çabuk sonuçlanmasını
          sağlar.
        </Paragraf>
      </YaziBolumu>

      <YaziBolumu baslik="6. Haftayı gerçekleşenle karşılaştırın">
        <Paragraf>
          Plan, hafta bitince işe yaramaya devam eder. Giriş-çıkış kayıtları vardiya planına göre değerlendirildiği için geç
          gelme, erken çıkma ve fazla mesai plana göre ortaya çıkar; ay sonunda aylık puantaj da bu eşleşmeden hesaplanır.
          Puantajın bu kısmını{" "}
          <IcLink href="/blog/puantaj-nasil-tutulur">puantaj nasıl tutulur yazımızda</IcLink> adım adım anlattık.
        </Paragraf>
        <Paragraf>
          İki çalışan kendi aralarında vardiya değiştirdiyse bunu planda da güncelleyin. Güncellenmeyen değişiklik,
          kayıtların yanlış vardiyayla eşleşmesine ve puantajda gereksiz düzeltmeye yol açar.
        </Paragraf>
      </YaziBolumu>

      <YaziBolumu baslik="Sık yapılan hatalar">
        <Liste
          maddeler={[
            "Planı ihtiyaca değil kişilere göre yazmak: yoğun saat boş kalır, sakin saatte fazla kişi bulunur.",
            "Çok sayıda vardiya kalıbı açmak: plan okunmaz hale gelir, hatalı seçim artar.",
            "Mola süresini tanıma yazmamak: çalışma süresi gerçekte olduğundan uzun hesaplanır.",
            "Yapılan değişiklikleri plana işlememek: kayıtlar eski plana göre değerlendirilir.",
            "Planı son gün paylaşmak: çalışan özel işini ayarlayamaz, son dakika değişiklik talepleri artar. Haftalık planı en az birkaç gün önceden yayımlamak bu talepleri azaltır.",
            "Aynı kişiye hep aynı zor vardiyayı vermek: kapanış ve hafta sonu nöbetlerini ekip içinde sırayla dağıtmak itirazları baştan keser.",
          ]}
        />
        <Paragraf>
          Vardiya ekranlarının ayrıntısı için <IcLink href="/vardiya-takip-programi">Vardiya Takip Programı</IcLink>{" "}
          sayfasına, telefonla giriş-çıkış için <IcLink href="/qr-pdks">QR Kodlu Personel Takibi</IcLink> sayfasına
          bakabilirsiniz.
        </Paragraf>
      </YaziBolumu>
    </BlogYaziSablonu>
  );
}
