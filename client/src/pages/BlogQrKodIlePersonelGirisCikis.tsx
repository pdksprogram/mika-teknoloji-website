import {
  BlogYaziSablonu,
  FazlaMesaiKutusu,
  IcLink,
  Liste,
  Paragraf,
  YaziBolumu,
  blogYazisi,
} from "@/components/BlogIcerik";

const YAZI = blogYazisi("/blog/qr-kod-ile-personel-giris-cikis");

export default function BlogQrKodIlePersonelGirisCikis() {
  return (
    <BlogYaziSablonu
      yazi={YAZI}
      giris="QR kodla giriş-çıkışta kart okuyucu ya da parmak izi cihazının yerini çalışanın kendi telefonu alır. Kapıya bir cihaz kurmanın zor olduğu şantiye, şube ya da sahada çalışan ekiplerde sık tercih edilir. Bu yazıda Mika PDKS ve Esoft Pdks mobil uygulamasıyla QR giriş-çıkışın nasıl işlediğini ve kurulurken nelere dikkat etmek gerektiğini anlatıyoruz."
    >
      <YaziBolumu baslik="İki yol: kodu okutmak ya da kodu göstermek">
        <Paragraf>Telefonla giriş-çıkışın iki ayrı kurgusu vardır ve hangisinin seçileceği kapıda ne bulunduğuna bağlıdır.</Paragraf>
        <Liste
          maddeler={[
            "Kapıda basılı bir QR kod varsa: çalışan mobil uygulamayı açar, kameraya kodu gösterir ve okutma giriş ya da çıkış olarak kaydedilir. Kapıda elektrik ya da cihaz gerekmez; yalnız kodun asılı olması yeter.",
            "Kapıda bir QR okuyucu varsa: çalışan uygulamada QR Üret ekranını açar. Uygulama önce telefonun konumunu doğrular, sonra ekranda bir kod gösterir; çalışan bu kodu kapıdaki okuyucuya tutar. Kod 30 saniye sonra kapanır, gerekirse Yeni QR Üret ile yenisi alınır.",
          ]}
        />
        <Paragraf>
          Birinci yol kurulumu en hızlı olandır: bir kâğıt ve bir duvar yeter. İkinci yolda kod, telefonun konumu
          doğrulandıktan sonra üretilir ve ekranda kısa süre kalır; kapıda okuyucu bulunan iş yerleri için uygundur.
        </Paragraf>
      </YaziBolumu>

      <YaziBolumu baslik="Kurulum adımları">
        <Liste
          maddeler={[
            "Giriş noktasını seçin: Kodun ya da okuyucunun duracağı yeri çalışanların her gün geçtiği noktaya koyun; birden fazla giriş varsa her biri için nerede okutulacağını önceden belirleyin.",
            "Uygulamayı dağıtın: Her çalışan Esoft Pdks mobil uygulamasını telefonuna kurar ve kendi kullanıcısıyla giriş yapar.",
            "Konum iznini açtırın: Konum izni verilmezse uygulama uyarı gösterir; QR Üret ekranında kod, konum doğrulanmadan görünmez.",
            "Kodu doğru yere asın: Basılı kodu göz hizasına, doğrudan güneş ya da lamba yansıması almayan bir duvara koyun. Dış mekânda kodu lamine ettirin; ıslanan ya da solan kâğıt okutmayı yavaşlatır.",
            "Deneme okutması yapın: İlk gün birkaç çalışanla okutun ve kayıtların programdaki giriş-çıkış listesine düştüğünü kontrol edin.",
            "İlk haftayı izleyin: Eksik okutmaların hangi kişilerde ve hangi saatlerde yoğunlaştığına bakın; çoğu zaman sorun kodun yerinde ya da bir telefonun ayarındadır.",
          ]}
        />
      </YaziBolumu>

      <YaziBolumu baslik="Konum bilgisi ne zaman kaydedilir?">
        <Paragraf>
          Mobil uygulamadan yapılan her okutmaya konum bilgisi eklenir. Bu, sahada çalışan ekiplerde kaydın nereden atıldığını
          görmeyi sağlar. Konumun raporlarda görünmesini istemeyen iş yerleri için Konum Gizle ayarı vardır; açıldığında konum
          raporlarda gösterilmez.
        </Paragraf>
        <Paragraf>
          Konum kullanılacaksa bunu çalışanlara kurulum gününde açıkça söyleyin. Neyin, ne zaman kaydedildiğini bilen ekip
          uygulamayı daha rahat kullanır.
        </Paragraf>
      </YaziBolumu>

      <YaziBolumu baslik="Molalar ve görev çıkışları">
        <Paragraf>
          Uygulamada yalnız giriş ve çıkış yoktur. Kahve Molası, Yemek Molası ve Görev ayrı türler olarak kaydedilir. Böylece
          iş için dışarı çıkan bir çalışanın kaydı moladan ve işten çıkıştan ayrı görünür, molalar da kendi başlığı altında
          izlenir.
        </Paragraf>
      </YaziBolumu>

      <YaziBolumu baslik="Arka arkaya okutma ve yüz doğrulama">
        <Paragraf>
          Kapıda acele eden biri kodu iki kez okutabilir. Programda mükerrer kayıt süresi tanımlıysa, bu süre dolmadan yapılan
          ikinci okutma kabul edilmez; uygulama bir uyarı gösterir ve bir sonraki okutmaya ne kadar kaldığını yazar.
        </Paragraf>
        <Paragraf>
          Okutmayı kimin yaptığından emin olmak isteyen iş yerleri cihaz ayarında yüz doğrulamayı açabilir. Bu durumda QR ya
          da barkod okutulduktan sonra uygulama bir de yüz doğrulaması ister.
        </Paragraf>
      </YaziBolumu>

      <YaziBolumu baslik="Kayıtlar puantaja nasıl ulaşır?">
        <Paragraf>
          Telefonla atılan kayıt, kart ya da parmak izi cihazından gelen kayıttan farklı işlem görmez. Hepsi aynı
          giriş-çıkış listesine düşer, çalışanın vardiya planıyla eşleştirilir ve ay sonunda aylık puantajda hesaplanır.
          Eksik okutmalar Hareket Düzenleme adımında düzeltilir; sıralamanın tamamı{" "}
          <IcLink href="/blog/puantaj-nasil-tutulur">puantaj nasıl tutulur yazımızda</IcLink>.
        </Paragraf>
        <FazlaMesaiKutusu metin="QR ile kaydedilen bir haftanın giriş ve çıkış saatlerinden haftalık çalışma ve fazla mesai süresini hızlıca görmek için hesaplama aracını kullanabilirsiniz." />
      </YaziBolumu>

      <YaziBolumu baslik="Sahada sık karşılaşılan durumlar">
        <Liste
          maddeler={[
            "Telefonun konum servisi kapalı: Uygulama konumu alamadığını söyler. Ayarlardan konum açılınca okutma devam eder.",
            "QR kodun süresi doldu: Ekrandaki kod kapandıysa Yeni QR Üret ile yeni kod alınır.",
            "Çalışan çıkışta okutmayı unuttu: Eksik hareket ay sonunda Hareket Düzenleme adımında düzeltilir.",
            "Telefonu olmayan çalışan: Aynı iş yerinde kartlı ya da parmak izli bir cihaz da kullanılabilir; kayıtlar aynı listede birleşir.",
          ]}
        />
        <Paragraf>
          Özelliklerin tam listesi <IcLink href="/qr-pdks">QR Kodlu Personel Takibi</IcLink> sayfasında, QR okuyucu ürünü{" "}
          <IcLink href="/urunler/qr-pdks">QR Kod PDKS</IcLink> sayfasında yer alıyor.
        </Paragraf>
      </YaziBolumu>
    </BlogYaziSablonu>
  );
}
