import { motion } from "framer-motion";
import { Shield, FileText, Eye, Lock } from "lucide-react";
// Removed problematic import

export default function PrivacyPolicy() {
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Corporate Header */}
        <motion.div 
          className="bg-white rounded-t-2xl shadow-lg border-b-4 border-primary p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <img 
                src="/attached_assets/mika_1756450206871.jpg" 
                alt="Mika Teknoloji Logo" 
                className="w-16 h-16 rounded-lg object-contain"
              />
              <div>
                <h2 className="text-2xl font-bold text-slate-800">Mika Teknoloji</h2>
                <p className="text-slate-600">Kontrol Sistemleri</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-primary" />
              <FileText className="h-8 w-8 text-slate-400" />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-800 mb-3">
              Mobil Uygulama Gizlilik Sözleşmesi
            </h1>
            <p className="text-slate-600 text-lg">
              Google Play Store ve iOS App Store Uygulamaları İçin Resmi Gizlilik Politikası
            </p>
            <div className="flex justify-center mt-4">
              <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white rounded-b-2xl shadow-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >

          {/* Corporate Overview */}
          <div className="border-l-4 border-primary pl-6 mb-8 bg-slate-50 py-4 rounded-r-lg">
            <div className="flex items-center mb-3">
              <Eye className="h-5 w-5 text-primary mr-2" />
              <h2 className="text-2xl font-bold text-slate-800">
                Gizlilik Politikası ve Kullanım Koşulları
              </h2>
            </div>
            <p className="text-slate-600 font-medium">
              Bu dokümant, MİKA TEKNOLOJİ tarafından geliştirilen tüm mobil uygulamalar için resmi gizlilik politikası ve kullanım koşullarını belirtmektedir.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-slate-800 mb-1">Güvenlik</h3>
              <p className="text-sm text-slate-600">Şifreli veri saklama</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <Lock className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-slate-800 mb-1">Gizlilik</h3>
              <p className="text-sm text-slate-600">Kişisel veri korunması</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <FileText className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-slate-800 mb-1">Şeffaflık</h3>
              <p className="text-sm text-slate-600">Açık politika belgesi</p>
            </div>
          </div>
            
          <div className="prose prose-slate max-w-none">
            <div className="space-y-8 text-slate-700 leading-relaxed text-justify">
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
            
            
            {/* Corporate Footer */}
            <div className="mt-12 bg-gradient-to-r from-slate-50 to-slate-100 p-8 rounded-xl border border-slate-200">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <img 
                    src="/attached_assets/mika_1756450206871.jpg" 
                    alt="Mika Teknoloji" 
                    className="w-12 h-12 rounded-lg object-contain"
                  />
                  <div>
                    <h4 className="font-bold text-slate-800">Mika Teknoloji Kontrol Sistemleri</h4>
                    <p className="text-slate-600 text-sm">© 2021-2025 Tüm hakları saklıdır.</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-slate-800 font-semibold mb-1">Son Güncelleme:</p>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <p className="text-slate-600 font-mono">01 Aralık 2021</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-300">
                <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
                  <span className="flex items-center">
                    <Shield className="h-4 w-4 mr-1" />
                    KVKK Uyumlu
                  </span>
                  <span className="flex items-center">
                    <FileText className="h-4 w-4 mr-1" />
                    GDPR Uyumlu
                  </span>
                  <span className="flex items-center">
                    <Lock className="h-4 w-4 mr-1" />
                    ISO 27001 Standartları
                  </span>
                </div>
                <p className="text-center text-xs text-slate-500 mt-4">
                  Bu gizlilik politikası uluslararası veri koruma standartlarına uygun olarak hazırlanmıştır.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}