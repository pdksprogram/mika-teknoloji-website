import {
  BlogYaziSablonu,
  FazlaMesaiKutusu,
  IcLink,
  Liste,
  Paragraf,
  YaziBolumu,
  blogYazisi,
} from "@/components/BlogIcerik";

const YAZI = blogYazisi("/blog/puantaj-nasil-tutulur");

export default function BlogPuantajNasilTutulur() {
  return (
    <BlogYaziSablonu
      yazi={YAZI}
      giris="Puantaj, bir çalışanın ay boyunca kaç gün işte olduğunu, hangi günlerin tatil ya da izin sayıldığını ve ne kadar fazla mesai yaptığını gösteren aylık tablodur. Bordro bu tablodan hazırlanır; puantajdaki bir yanlış maaşa aynen geçer. Bu yazıda puantajı kâğıtta tutmak yerine giriş-çıkış kayıtlarından hazırlamanın sırasını, Mika PDKS'teki adımlar üzerinden anlatıyoruz."
    >
      <YaziBolumu baslik="Elle tutulan puantaj neden zorlaşır?">
        <Paragraf>
          Kâğıtta ya da bir hesap tablosunda tutulan puantajda her gün için birinin "geldi mi, kaçta çıktı, izinli miydi"
          sorularını tek tek işlemesi gerekir. Çalışan sayısı arttıkça unutulan izinler, geç işlenen raporlar ve yanlış
          toplanan saatler birikir. Ay sonunda tabloyu kontrol etmek, neredeyse ayı yeniden yazmak kadar sürer.
        </Paragraf>
        <Paragraf>
          Kayıtlar bir okuyucudan geliyorsa iş değişir: saatleri program toplar, insana yalnız kontrol etmek ve eksikleri
          düzeltmek kalır. Aşağıdaki adımlar bu düzenin nasıl kurulacağını anlatıyor.
        </Paragraf>
      </YaziBolumu>

      <YaziBolumu baslik="Başlamadan önce: tanımları doğru yapın">
        <Paragraf>
          Ay sonunda çıkan rakamlar, ay başlamadan girilen tanımlar kadar doğrudur. Hesaba başlamadan şu dört başlığa
          bakın:
        </Paragraf>
        <Liste
          maddeler={[
            "Vardiya tanımı: Çalışma saatleri ve mola süresi burada belirlenir. Program molayı bu tanımdan alır ve çalışma süresinden çıkarır.",
            "Çalışma grubu ve fazla mesai kuralı: Fazla mesainin nasıl ayrılacağı çalışma grubunda seçilir. Haftalık 45 saat kuralını açarsanız haftada 45 saati geçen kısım fazla mesaiye yazılır.",
            "Resmi tatiller ve izin türleri: Resmi tatil günleri önceden işaretlenir, izin türleri tanımlanır.",
            "Avans ve kesintiler: Avans, taksitli kesinti ve ek kazançlar tanımlanırsa ay sonunda ilgili çalışanın satırına eklenir.",
          ]}
        />
      </YaziBolumu>

      <YaziBolumu baslik="1. Adım: Giriş-çıkış kayıtlarını aktarın">
        <Paragraf>
          İlk iş, cihazlarda biriken okutmaları programa almaktır. Kartlı okuyucu, parmak izi ya da yüz tanıma cihazlarındaki
          okutmalar programa aktarılır; aktarılan ve bekleyen kayıtlar Kayıt Aktarım Formu'nda görülür. Çalışanların
          telefondan <IcLink href="/qr-pdks">QR kodla</IcLink> yaptığı giriş-çıkışlar ise uygulamadan doğrudan sunucuya
          gönderilir ve aynı giriş-çıkış listesine işlenir.
        </Paragraf>
        <Paragraf>
          Bu aşamada elinizde yalnız ham kayıt vardır: kim, hangi gün, saat kaçta okuttu. Henüz hiçbir şey "geç
          kalma" ya da "fazla mesai" diye yorumlanmamıştır.
        </Paragraf>
      </YaziBolumu>

      <YaziBolumu baslik="2. Adım: Hareketleri düzenleyin">
        <Paragraf>
          Ham kayıtlar, çalışanın o günkü vardiyasıyla eşleştirilir. Hareket Düzenleme adımı, eksik ya da hatalı okutmaları
          bulup düzeltmek içindir. En sık görülen durum, çalışanın girişte okutup akşam çıkışta okutmayı unutmasıdır: o gün
          ÇIKIŞ YOK olarak görünür, satır açılıp çıkış saati girilir. Aynı dakika içinde iki kez okutulan kayıtları ise
          program bu adımda kendisi ayıklar.
        </Paragraf>
        <Paragraf>
          Düzeltmeyi ayın sonuna bırakmayın. Haftada bir eksik okutmalara bakmak, ay bittiğinde dört hafta geriye gidip
          çalışana "o gün kaçta çıktın?" diye sormaktan çok daha kolaydır. Vardiya planı güncel değilse eşleştirme de yanlış
          olur; planın nasıl kurulacağını{" "}
          <IcLink href="/blog/vardiya-plani-nasil-hazirlanir">vardiya planı yazımızda</IcLink> anlattık.
        </Paragraf>
      </YaziBolumu>

      <YaziBolumu baslik="3. Adım: Aylık puantajı hesaplayın">
        <Paragraf>
          Hareketler temizlendikten sonra Aylık Puantaj düğmesiyle ay hesaplanır. Ortaya çıkan tabloda her çalışanın
          satırında normal çalışma, hafta tatili, fazla mesai, ücretli ve ücretsiz izin, yıllık izin ve devamsızlık günleri
          ayrı ayrı görünür. Onaylanmış izin talepleri hesaba izin olarak girer; fazla mesai kendi sütununda durur.
        </Paragraf>
        <FazlaMesaiKutusu metin="Tek bir çalışanın tek haftasını elle sağlamak isterseniz her günün giriş, çıkış ve mola süresini girip haftalık toplamı görebilirsiniz." />
      </YaziBolumu>

      <YaziBolumu baslik="4. Adım: Kontrol edin ve ayı kilitleyin">
        <Paragraf>Bordroya göndermeden önce tabloya kısa bir kontrol turu atın:</Paragraf>
        <Liste
          maddeler={[
            "Devamsız görünen günler gerçekten devamsız mı, yoksa sonradan girilmesi gereken bir izin mi var?",
            "Fazla mesaisi diğerlerinden belirgin yüksek çıkan çalışanların hareketlerine tek tek bakın.",
            "Ay ortasında işe başlayan ya da ayrılan çalışanların gün sayılarını kontrol edin.",
          ]}
        />
        <Paragraf>
          Kontrol bittiğinde ayı kilitleyin. Kilitli bir ay, sonradan biri hesaplamayı yeniden başlatsa bile değişmez;
          böylece bordroya giden rakamlar sabit kalır. Kilidi vurmadan önce düzeltmeleri bitirin: kilitlenmemiş bir ayda
          hareketi düzeltip ayı yeniden hesaplatabilirsiniz.
        </Paragraf>
      </YaziBolumu>

      <YaziBolumu baslik="5. Adım: Bordroya aktarın">
        <Paragraf>
          Kilitlenen ayın puantajı Excel (.xlsx) dosyası olarak indirilir ve bordroyu hazırlayan kişiye ya da muhasebeye bu
          dosya gider. Çalışanlar da kendi aylık puantajlarını Esoft Pdks mobil uygulamasında görebilir; bir eksik varsa
          bunu kendileri fark eder.
        </Paragraf>
      </YaziBolumu>

      <YaziBolumu baslik="Sık yapılan hatalar">
        <Liste
          maddeler={[
            "İzni sonradan girip ayı yeniden hesaplatmamak: izin programa girilmeden hesaplanan ay, o günleri izin sütununda göstermez.",
            "Kilidi erken vurmak: kilitten sonra yapılan düzeltme o ayın hesabına girmez.",
            "Vardiya tanımını güncellememek: saatler ve mola tanımdan geldiği için eski bir tanım bütün ayı etkiler.",
            "Hareketleri ay sonuna yığmak: biriken eksik okutmaları hatırlamak her geçen gün zorlaşır.",
          ]}
        />
        <Paragraf>
          Puantaj ekranlarının tamamını ve hesaplanan alanları <IcLink href="/puantaj-programi">Puantaj Programı</IcLink>{" "}
          sayfasında, programın genelini <IcLink href="/pdks-programi">PDKS Programı</IcLink> sayfasında bulabilirsiniz.
        </Paragraf>
      </YaziBolumu>
    </BlogYaziSablonu>
  );
}
