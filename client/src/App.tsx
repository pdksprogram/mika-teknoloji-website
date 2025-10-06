import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import LoadingScreen from "@/components/LoadingScreen";
import { LanguageProvider } from "@/hooks/useLanguage";
import { initGA } from "@/lib/analytics";
import { useAnalytics } from "@/hooks/use-analytics";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Solutions from "@/pages/Solutions";
import Products from "@/pages/Products";
import Contact from "@/pages/Contact";
import References from "@/pages/References";
import Blog from "@/pages/Blog";
import BlogArticlePDKS from "@/pages/BlogArticlePDKS";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import PDKSPage from "@/pages/PDKSPage";
import AccessControlPage from "@/pages/AccessControlPage";
import FingerprintSystemPage from "@/pages/FingerprintSystemPage";
import FaceRecognitionSystemPage from "@/pages/FaceRecognitionSystemPage";
import CardAccessSystemPage from "@/pages/CardAccessSystemPage";
import QRAccessPage from "@/pages/QRAccessPage";
import TurnstileSystemsPage from "@/pages/TurnstileSystemsPage";
import ParkingAutomationPage from "@/pages/ParkingAutomationPage";
import AccessControlSystemPage from "@/pages/AccessControlSystemPage";
import QRPatrolPage from "@/pages/QRPatrolPage";
import ProductTurnikePage from "@/pages/ProductTurnikePage";
import BelTipeTurnikePage from "@/pages/BelTipeTurnikePage";
import BoyTipeTurnikePage from "@/pages/BoyTipeTurnikePage";
import EngelliTurnikePage from "@/pages/EngelliTurnikePage";
import MTSC324BVIPDetailPage from "@/pages/MTSC324BVIPDetailPage";
import MT230MVIPSlimDetailPage from "@/pages/MT230MVIPSlimDetailPage";
import MTT80YaprakDetailPage from "@/pages/MTT80YaprakDetailPage";
import HizliGecisPage from "@/pages/HizliGecisPage";
import MTT300HG20DetailPage from "@/pages/MTT300HG20DetailPage";
import MTT300HG40DetailPage from "@/pages/MTT300HG40DetailPage";
import MTT300SlimKisaDetailPage from "@/pages/MTT300SlimKisaDetailPage";
import MTT300HG20ChubbyDetailPage from "@/pages/MTT300HG20ChubbyDetailPage";
import MTT350HG60DetailPage from "@/pages/MTT350HG60DetailPage";
import MTT350HG60ChubbyDetailPage from "@/pages/MTT350HG60ChubbyDetailPage";
import MTT300HG120DetailPage from "@/pages/MTT300HG120DetailPage";
import MTT300HG120ChubbyDetailPage from "@/pages/MTT300HG120ChubbyDetailPage";
import MTT300SlimUzunDetailPage from "@/pages/MTT300SlimUzunDetailPage";
import MT250DetailPage from "@/pages/MT250DetailPage";
import T250EcoDetailPage from "@/pages/T250EcoDetailPage";
import T345DetailPage from "@/pages/T345DetailPage";
import JetonluT250DetailPage from "@/pages/JetonluT250DetailPage";
import MT2500DSingle3DetailPage from "@/pages/MT2500DSingle3DetailPage";
import MT2500KKristalDetailPage from "@/pages/MT2500KKristalDetailPage";
import MT1350YarimBoyDetailPage from "@/pages/MT1350YarimBoyDetailPage";
import PersonelTakipPage from "@/pages/PersonelTakipPage";
import QRPDKSPage from "./pages/QRPDKSPage";
import BariyerSistemleriPage from "@/pages/BariyerSistemleriPage";
import NotFound from "@/pages/not-found";

function Router() {
  // Track page views when routes change  
  useAnalytics();
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/hakkimizda" component={About} />
      <Route path="/cozumler" component={Solutions} />
      <Route path="/urunler" component={Products} />
      <Route path="/cozumler/pdks" component={PDKSPage} />
      <Route path="/access-control" component={AccessControlPage} />
      <Route path="/urunler/parmak-izi-tanima" component={FingerprintSystemPage} />
      <Route path="/urunler/yuz-tanima" component={FaceRecognitionSystemPage} />
      
      {/* SEO Landing Pages for Target Keywords */}
      <Route path="/personel-devam-kontrol-sistemi" component={PDKSPage} />
      <Route path="/parmak-izi-takip-sistemi" component={FingerprintSystemPage} />
      <Route path="/yuz-tanima-sistem" component={FaceRecognitionSystemPage} />
      <Route path="/pdks-programi" component={PDKSPage} />
      
      {/* Additional Landing Pages */}
      <Route path="/kartli-gecis-sistemi" component={CardAccessSystemPage} />
      <Route path="/qr-gecis" component={QRAccessPage} />
      <Route path="/turnike-sistemleri" component={TurnstileSystemsPage} />
      <Route path="/otopark-otomasyon" component={ParkingAutomationPage} />
      <Route path="/urunler/gecis-kontrol" component={AccessControlSystemPage} />
      <Route path="/qr-bekci" component={QRPatrolPage} />
      <Route path="/cozumler/bekci-kontrol" component={QRPatrolPage} />
      <Route path="/urunler/turnike" component={ProductTurnikePage} />
      <Route path="/urunler/bel-tipi-turnike" component={BelTipeTurnikePage} />
      <Route path="/urunler/boy-tipi-turnike" component={BoyTipeTurnikePage} />
      <Route path="/urunler/engelli-turnike" component={EngelliTurnikePage} />
      <Route path="/urunler/hizli-gecis-turnike" component={HizliGecisPage} />
      
      {/* Engelli Turnike Detay Sayfaları */}
      <Route path="/urunler/mt-sc324b-vip-turnike" component={MTSC324BVIPDetailPage} />
      <Route path="/urunler/mt-230mvip-slim-vip-turnike" component={MT230MVIPSlimDetailPage} />
      <Route path="/urunler/mt-t80-yaprak-turnike" component={MTT80YaprakDetailPage} />
      
      {/* Hızlı Geçiş Turnike Detay Sayfaları */}
      <Route path="/urunler/hizli-gecis-t300-hg20-detay" component={MTT300HG20DetailPage} />
      <Route path="/urunler/hizli-gecis-t300-hg20-chubby-detay" component={MTT300HG20ChubbyDetailPage} />
      <Route path="/urunler/hizli-gecis-t300-hg40-detay" component={MTT300HG40DetailPage} />
      <Route path="/urunler/hizli-gecis-t350-hg60-detay" component={MTT350HG60DetailPage} />
      <Route path="/urunler/hizli-gecis-t350-hg60-chubby-detay" component={MTT350HG60ChubbyDetailPage} />
      <Route path="/urunler/hizli-gecis-t300-hg120-detay" component={MTT300HG120DetailPage} />
      <Route path="/urunler/hizli-gecis-t300-hg120-chubby-detay" component={MTT300HG120ChubbyDetailPage} />
      <Route path="/urunler/hizli-gecis-t300-slim-kisa-detay" component={MTT300SlimKisaDetailPage} />
      <Route path="/urunler/hizli-gecis-t300-slim-uzun-detay" component={MTT300SlimUzunDetailPage} />
      <Route path="/urunler/mt-250-turnike" component={MT250DetailPage} />
      <Route path="/urunler/t250-eco-turnike" component={T250EcoDetailPage} />
      <Route path="/urunler/t345-turnike" component={T345DetailPage} />
      <Route path="/urunler/jetonlu-t250-turnike" component={JetonluT250DetailPage} />
      
      {/* Boy Tipi Turnike Detay Sayfaları */}
      <Route path="/urunler/mt2500d-single-3-kollu" component={MT2500DSingle3DetailPage} />
      <Route path="/urunler/mt2500k-kristal" component={MT2500KKristalDetailPage} />
      <Route path="/urunler/mt1350-yarim-boy" component={MT1350YarimBoyDetailPage} />
      <Route path="/urunler/bekci-tur-kontrol" component={QRPatrolPage} />
      <Route path="/urunler/personel-takip" component={PersonelTakipPage} />
      <Route path="/urunler/qr-pdks" component={QRPDKSPage} />
      <Route path="/urunler/bariyer-sistemleri" component={BariyerSistemleriPage} />
      
      <Route path="/referanslar" component={References} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/pdks-sistemleri-nedir-2025-rehberi" component={BlogArticlePDKS} />
      <Route path="/iletisim" component={Contact} />
      <Route path="/mobil-gizlilik-sozlesmesi" component={PrivacyPolicy} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Google Analytics when app loads
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
    
    // Simulate initial app loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
          ) : (
            <motion.div
              key="app"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen bg-white"
            >
              <Header />
              <main>
                <Router />
              </main>
            </motion.div>
          )}
        </AnimatePresence>
        <Toaster />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
