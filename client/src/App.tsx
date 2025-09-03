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
import Home from "@/pages/Home";
import About from "@/pages/About";
import Solutions from "@/pages/Solutions";
import Products from "@/pages/Products";
import Contact from "@/pages/Contact";
import References from "@/pages/References";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import PDKSPage from "@/pages/PDKSPage";
import AccessControlPage from "@/pages/AccessControlPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/hakkimizda" component={About} />
      <Route path="/cozumler" component={Solutions} />
      <Route path="/urunler" component={Products} />
      <Route path="/cozumler/pdks" component={PDKSPage} />
      <Route path="/cozumler/access" component={AccessControlPage} />
      <Route path="/referanslar" component={References} />
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
