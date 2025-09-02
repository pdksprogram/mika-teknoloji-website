import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <motion.div 
      className="min-h-screen bg-slate-50 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              Mobil Uygulama Gizlilik Sözleşmesi
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Gizlilik Politikası ve Kullanım Koşulları
            </h2>
            
            <div className="space-y-6 text-slate-600 leading-relaxed text-justify">
              <p>
                Burada belirtilen gizlilik politikası ve kullanım koşulları; MİKA TEKNOLOJİ'nin Google Play Store ve IOS App Store'da yayınlanan bütün mobil uygulamaları için geçerlidir. Bu uygulamaları mobil cihazınıza yükleyerek, bu metinde yer alan gizlilik politikasını ve kullanım koşullarını kabul etmiş sayılırsınız. Bu koşulları kabul etmiyorsanız bu uygulamaları mobil cihazınıza yüklemeyiniz.
              </p>
              
              <p>
                Uygulamalarımızda, Girilen Veriler şifreli sunucularda sadece sizlerin görebileceği şekilde depolanır ve 3. şahıs yada kurumlar ile paylaşılmaz.
              </p>
              
              <p>
                Telefon Kullanım İzinleri, Uygulamımızda bulunan kısayol arama işlemi için gerekli olan izinlerin tarafınızdan sağlanmış olması gerekir. Verilen bu izin sadece Uygulamadas kayıtlı olan müşterilerinizin kısayol aramlarında kullanılmaktadır ve müşterilerinize ait kişisel veriler sadece size özel veritabnlarında şifreli olarak saklanır.
              </p>
              
              <p>
                İnternet Kullanım İzinleri, Uygulamımızdan Verilerin Şifreli sunuculara gönderilebilmesi için gerekli olan izindir ve kullanıcıların bunu tanımlaması gerekir. Bu izinler telefonunuzdan isteğiniz dışında bir bilgiyi transfer etmek için kullanılmaz. Verilen internet erişim izni sadece uygulama içersinde dolduracağınız formlara ait veri ve fotoğraf transferi için kullanılmaktadır.
              </p>
              
              <div className="bg-slate-50 p-6 rounded-xl my-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  Kamera Kullanımı:
                </h3>
                <p>
                  Mobil Uygulamalarımızda kamera kullanımı sadece uygulama içersinden göndermek istediğiniz fotoğraflar için kullanılmaktadır. kullanıcı bilgisi dışında kullanımı söz konusu değildir. Mobil uygulamada çekilen fotoğraflar kullanıcıya ait şifreli ortamda saklanır ve sadece kendisinin ve bağlı olduğu kurumun erişimine açıktır. Fotoğraflar 3. şahıs yada kurumlar ile kullanıcı bilgisi dışında paylaşılmaz.
                </p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl my-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  Konum Verileri:
                </h3>
                <p>
                  Kullanıcıların hassas veya yaklaşık konumları ile ilgili verileri kapsar.
                  GPS verisi ile IP ve port adreslerinden çıkarılan konum verisi,kullanıcı mobil pdks uygulaması kullanırken bulunduğu konumda olay bildirmek istemesi durumunda ve kullanıcının izin vermesi halinde kullanılır.
                </p>
              </div>
              
              <p>
                Uygulamalarımız, size ait herhangi bir kişisel bilgiyi toplamaz ve sizden bu yönde bir talepte bulunmaz.
              </p>
              
              <p>
                Çocuklarla ilgili kişisel bilgiler bilerek veya kasıtlı olarak toplanmamaktadır.
              </p>
              
              <p>
                MİKA TEKNOLOJİ, kaliteli ve yararlı uygulamalar yayınlamak için her zaman gereken özeni ve duyarlılığı gösterecektir. Buna rağmen, uygulamalarımızda yer alan içeriklerin beklentilerinizi karşılayacağı, size yararlı olacağı veya kesin doğru bilgiler içereceğine dair hiçbir taahhütte bulunmamaktayız. Uygulamaları olduğu gibi sunmaktayız. Bu sebeple, uygulamalarımızdan kaynaklı yaşanacak herhangi bir olumsuz durum için MİKA TEKNOLOJİ'yi sorumlu tutamazsınız.
              </p>
              
              <p>
                MİKA TEKNOLOJİ, bu uygulamaların güvenliği konusunda alınabilecek tüm önlemleri almak için gereken ölçüde çaba sarf eder ve Google Play Geliştirici Programı Politikaları sözleşmesi kapsamındaki yükümlülüklerini yerine getirir. Bununla birlikte; internet ve dijital ortamlar yeterli düzeyde güvenli alanlar değildir. Bu yüzden size yüzde yüz güvenli bir hizmet sunacağımız konusunda herhangi bir garantide bulunmamaktayız.
              </p>
              
              <p>
                Uygulamalarımız sadece Google Play Store ve IOS App Store'da yer almaktadır. Bu uygulamaların bizim bilgimiz dışında başka bir android yada IOS mağazasında yer alması durumunda, buradan yapılacak yüklemelerden MİKA TEKNOLOJİ sorumlu tutulamaz.
              </p>
              
              <p>
                Bu uygulamalarda, üçüncü taraflara ait reklamlar ve linkler yer alabilir. Bu üçüncü taraflara ait reklamların ve linklerin niteliğinden, içeriğinden, güvenliğinden veya bunlardan kaynaklı oluşabilecek zararlardan MİKA TEKNOLOJİ' yi sorumlu tutamayacağınızı kabul etmektesiniz. Google tarafından yayınlanan reklamlara ilişkin ayarlarınızı nasıl düzenleyeceğinizi, reklam ayarları sayfasından öğrenebilirsiniz.
              </p>
              
              <p>
                Bu uygulamalarda yer alan sesli, yazılı ve görsel öğelerden ve yazılımlardan oluşan bütün içeriğe ilişkin her türlü telif hakkı MİKA TEKNOLOJİ' ye aittir. Herhangi bir uygulamamızı veya bu uygulamaların telif haklarıyla korunan içeriğini; kopyalama, çoğaltma, yeniden yayımlama, parçalarına ayırma, tekrar kamuya sunma vb. eylemlerde bulunmayacağınızı kabul etmektesiniz.
              </p>
              
              <p>
                Burada belirtilen koşullarla ilgili görüş ve önerilerinizi, <a href="mailto:info@mikateknoloji.com" className="text-primary hover:underline">info@mikateknoloji.com</a> mail adresinden bize iletebilirsiniz.
              </p>
              
              <p>
                MİKA TEKNOLOJİ; bu Gizlilik Politikası ve Kullanım Koşulları metninde değişiklik yapabilir. Yapılan değişiklikler anında yürürlüğe girecektir. Değişiklik yaptığımız tarihi, "son güncelleme tarihi" olarak en alt kısımda belirtiriz.
              </p>
            </div>
            
            <div className="mt-12 p-6 bg-primary/5 rounded-xl border-l-4 border-primary">
              <p className="text-slate-800 font-semibold mb-2">Son güncelleme tarihi:</p>
              <p className="text-slate-600">01.12.2021</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}