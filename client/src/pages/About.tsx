import { Building, Users, Award, Globe, Timer, Smartphone, ArrowRight, Shield, Database, Wifi, Fingerprint, BarChart3, Network, Cpu, Gauge } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
// Removed problematic import
// Removed problematic import
// Removed problematic import
// Removed problematic import
// Removed problematic import

export default function About() {
  const stats = [
    { icon: Users, value: "10,000+", label: "Kurumsal Müşteri" },
    { icon: Building, value: "15+", label: "Yıllık Tecrübe" },
    { icon: Globe, value: "Türkiye", label: "Genelinde Hizmet" },
    { icon: Award, value: "#1", label: "Sektör Lideri" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Corporate Hero Section - Idenfit Style */}
        <section className="mb-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Quote Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <div className="text-6xl text-primary/20 font-serif absolute -top-6 -left-4">"</div>
                  <blockquote className="text-2xl md:text-3xl font-semibold text-slate-700 leading-relaxed mb-8 relative z-10">
                    <span className="text-primary">Hedefimiz</span>, Türkiye'nin en güvenilir teknoloji 
                    markalarından biri olup, <span className="text-primary">mobil PDKS</span> ve 
                    kontrol sistemleri sektöründe <span className="text-primary">inovatif, yenilikçi</span> ve 
                    lider kimliğimizle yeni başarılara imza atmak.
                  </blockquote>
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-1 bg-primary mr-4"></div>
                    <cite className="text-lg font-medium text-slate-600 not-italic">Mika Teknoloji Ekibi</cite>
                  </div>
                </div>
                
                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Button 
                    asChild 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    data-testid="contact-button"
                  >
                    <a href="/iletisim">
                      Hemen Başvur <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Advanced Tech Visual */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative flex justify-center items-center min-h-[500px] overflow-hidden" style={{ perspective: '1000px' }}>
                  
                  {/* Main Central Hub */}
                  <div className="relative z-20">
                    <motion.div 
                      className="w-40 h-40 bg-gradient-to-br from-primary/90 to-pink-600/90 rounded-full flex items-center justify-center shadow-2xl"
                      animate={{ 
                        rotate: 360,
                        rotateY: [0, 180, 360],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        rotateY: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                        scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                      }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <motion.div 
                        className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-inner"
                        animate={{
                          rotateX: [0, 15, -15, 0]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <motion.div
                          animate={{ rotateZ: [0, 360] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <Timer className="h-16 w-16 text-primary" />
                        </motion.div>
                      </motion.div>
                      {/* Orbiting dots */}
                      <motion.div 
                        className="absolute w-4 h-4 bg-yellow-400 rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        style={{ top: '-8px', left: '50%', transformOrigin: '50% 88px' }}
                      />
                      <motion.div 
                        className="absolute w-3 h-3 bg-blue-400 rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        style={{ bottom: '-6px', right: '20%', transformOrigin: '50% -76px' }}
                      />
                    </motion.div>
                  </div>

                  {/* Tech Ecosystem Elements */}
                  
                  {/* Database Cluster */}
                  <motion.div 
                    className="absolute top-12 left-8 z-15"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <div className="relative">
                      <motion.div 
                        className="w-20 h-20 bg-blue-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-blue-200"
                        animate={{
                          rotateY: [0, 15, -15, 0],
                          rotateX: [0, -10, 10, 0]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Database className="h-10 w-10 text-blue-600" />
                        </motion.div>
                      </motion.div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <div className="flex space-x-1">
                          <div className="w-1 h-6 bg-blue-400 rounded-full animate-pulse"></div>
                          <div className="w-1 h-4 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-1 h-8 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Security Shield */}
                  <motion.div 
                    className="absolute top-8 right-12 z-15"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <div className="relative">
                      <motion.div 
                        className="w-24 h-24 bg-red-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-red-200"
                        animate={{
                          rotateZ: [12, 25, -5, 12],
                          rotateY: [0, 20, -20, 0]
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <motion.div
                          animate={{ rotateX: [0, 10, -10, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <Shield className="h-12 w-12 text-red-600" />
                        </motion.div>
                      </motion.div>
                      <motion.div 
                        className="absolute inset-0 border-2 border-red-400 rounded-2xl"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <div className="absolute -top-2 right-2 flex space-x-1">
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Smart Device */}
                  <motion.div 
                    className="absolute bottom-12 right-16 z-25"
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  >
                    <div className="relative">
                      <motion.div 
                        className="w-24 h-40 bg-slate-900 rounded-xl shadow-2xl p-2 border-2 border-slate-700"
                        animate={{
                          rotateY: [0, -15, 15, 0],
                          rotateX: [0, 5, -5, 0]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        {/* Screen */}
                        <div className="w-full h-full bg-gradient-to-b from-slate-100 to-slate-200 rounded-lg relative overflow-hidden">
                          {/* Status bar */}
                          <div className="absolute top-1 left-2 right-2 h-2 bg-primary/30 rounded-full"></div>
                          
                          {/* App icons */}
                          <div className="absolute top-6 left-2 right-2 grid grid-cols-3 gap-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-sm flex items-center justify-center">
                              <Smartphone className="w-2 h-2 text-white" />
                            </div>
                            <div className="w-3 h-3 bg-green-500 rounded-sm flex items-center justify-center">
                              <Gauge className="w-2 h-2 text-white" />
                            </div>
                            <div className="w-3 h-3 bg-purple-500 rounded-sm flex items-center justify-center">
                              <BarChart3 className="w-2 h-2 text-white" />
                            </div>
                          </div>
                          
                          {/* Content lines */}
                          <div className="absolute bottom-6 left-2 right-2 space-y-1">
                            <motion.div 
                              className="h-1 bg-primary/60 rounded-full"
                              animate={{ width: ['60%', '80%', '60%'] }}
                              transition={{ duration: 3, repeat: Infinity }}
                            />
                            <div className="h-1 bg-slate-400 rounded-full w-3/4"></div>
                            <div className="h-1 bg-slate-300 rounded-full w-1/2"></div>
                          </div>
                          
                          {/* Fingerprint scanner */}
                          <div className="absolute bottom-1 right-1 w-4 h-4 bg-primary/20 rounded-full flex items-center justify-center">
                            <Fingerprint className="w-2 h-2 text-primary" />
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Signal waves */}
                      <motion.div 
                        className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Wifi className="w-6 h-6 text-green-500" />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Network Nodes */}
                  <motion.div 
                    className="absolute bottom-8 left-12 z-15"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                  >
                    <div className="relative">
                      <motion.div 
                        className="w-18 h-18 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-200"
                        animate={{
                          rotateX: [0, 360],
                          rotateY: [0, -180]
                        }}
                        transition={{ 
                          rotateX: { duration: 12, repeat: Infinity, ease: "linear" },
                          rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                        }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <Network className="h-8 w-8 text-purple-600" />
                      </motion.div>
                      {/* Connection lines */}
                      <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
                        <motion.line 
                          x1="50%" y1="50%" x2="200%" y2="10%"
                          stroke="rgba(168, 85, 247, 0.4)" 
                          strokeWidth="2"
                          strokeDasharray="4,4"
                          animate={{ strokeDashoffset: [0, 8] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.line 
                          x1="50%" y1="50%" x2="150%" y2="200%"
                          stroke="rgba(168, 85, 247, 0.4)" 
                          strokeWidth="2"
                          strokeDasharray="4,4"
                          animate={{ strokeDashoffset: [0, 8] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
                        />
                      </svg>
                      {/* Pulse effect */}
                      <motion.div 
                        className="absolute inset-0 border-2 border-purple-400 rounded-full"
                        animate={{ scale: [1, 2], opacity: [1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>

                  {/* CPU Processing Unit */}
                  <motion.div 
                    className="absolute top-20 right-8 z-10"
                    initial={{ opacity: 0, rotateZ: 45 }}
                    animate={{ opacity: 1, rotateZ: 0 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                  >
                    <div className="relative">
                      <motion.div 
                        className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-green-200"
                        animate={{
                          rotateZ: [0, 90, 180, 270, 360],
                          rotateX: [0, 20, -20, 0]
                        }}
                        transition={{ 
                          rotateZ: { duration: 10, repeat: Infinity, ease: "linear" },
                          rotateX: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                        }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Cpu className="h-8 w-8 text-green-600" />
                        </motion.div>
                      </motion.div>
                      {/* Processing indicators */}
                      <div className="absolute -inset-2 grid grid-cols-2 gap-1">
                        <motion.div 
                          className="w-1 h-1 bg-green-400 rounded-full"
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                        />
                        <motion.div 
                          className="w-1 h-1 bg-green-400 rounded-full"
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div 
                          className="w-1 h-1 bg-green-400 rounded-full"
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                        />
                        <motion.div 
                          className="w-1 h-1 bg-green-400 rounded-full"
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: 0.6 }}
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* 3D Floating Particles */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-primary/50 rounded-full shadow-lg"
                      style={{
                        left: `${15 + (i * 8) % 70}%`,
                        top: `${10 + (i * 12) % 80}%`,
                        transformStyle: 'preserve-3d'
                      }}
                      animate={{
                        y: [-15, 20, -15],
                        x: [-8, 8, -8],
                        z: [-50, 50, -50],
                        rotateX: [0, 360],
                        rotateY: [0, -360],
                        scale: [0.5, 1.2, 0.5],
                        opacity: [0.3, 0.9, 0.3],
                      }}
                      transition={{
                        duration: 4 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}

                  {/* 3D Background Gradient Orbs */}
                  <div className="absolute inset-0 overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
                    <motion.div 
                      className="absolute w-32 h-32 bg-gradient-to-br from-primary/15 to-pink-500/15 rounded-full blur-xl shadow-2xl"
                      style={{ top: '10%', left: '15%', transformStyle: 'preserve-3d' }}
                      animate={{ 
                        scale: [1, 1.3, 1], 
                        rotate: [0, 180, 360],
                        rotateX: [0, 45, -45, 0],
                        rotateY: [0, -90, 90, 0],
                        z: [-100, 100, -100]
                      }}
                      transition={{ 
                        duration: 12, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div 
                      className="absolute w-28 h-28 bg-gradient-to-br from-blue-500/12 to-purple-500/12 rounded-full blur-xl shadow-xl"
                      style={{ bottom: '20%', right: '20%', transformStyle: 'preserve-3d' }}
                      animate={{ 
                        scale: [1.2, 0.8, 1.2], 
                        rotate: [360, 180, 0],
                        rotateX: [0, -60, 60, 0],
                        rotateZ: [0, 270, -270, 0],
                        z: [50, -150, 50]
                      }}
                      transition={{ 
                        duration: 15, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div 
                      className="absolute w-20 h-20 bg-gradient-to-br from-green-500/8 to-cyan-500/8 rounded-full blur-lg"
                      style={{ top: '60%', left: '5%', transformStyle: 'preserve-3d' }}
                      animate={{ 
                        scale: [0.8, 1.5, 0.8], 
                        rotateY: [0, 360],
                        rotateZ: [0, -180, 0],
                        z: [-80, 120, -80]
                      }}
                      transition={{ 
                        duration: 18, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-slate-800">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 font-medium">{stat.label}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leadership Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Üst Düzey Yönetim
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-square md:aspect-auto">
                  <img 
                    src="/hakkimizda-1.png" 
                    alt="Gamze Deniz Toksoy - Yazılım Müdürü" 
                    className="w-full h-full object-cover"
                    data-testid="leadership-photo"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-slate-50 to-slate-100">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">
                        Gamze Deniz Toksoy
                      </h3>
                      <p className="text-lg font-semibold text-primary mb-4">
                        Mika Teknoloji
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-1">
                          Uzmanlık Alanı:
                        </h4>
                        <p className="text-slate-600">
                          Yazılım Mühendisi ve Full Web Stack Uzmanı
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-1">
                          Teknoloji Yetkinlikleri:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                            C++
                          </span>
                          <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                            Java
                          </span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            ASP.NET
                          </span>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            SQL
                          </span>
                          <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">
                            React
                          </span>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Company Hierarchy */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Arge Ve Üretim Müdürü
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="p-8 text-center bg-gradient-to-br from-slate-50 to-slate-100">
                <div className="mb-6">
                  <img 
                    src="/hakkimizda-2.png" 
                    alt="Şirket Hiyerarşisi" 
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                    data-testid="hierarchy-photo"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      Tolga Akal
                    </h3>
                    <div className="space-y-2 mb-4">
                      <p className="text-lg font-semibold text-primary">
                        Arge Ve Üretim Müdürü
                      </p>
                      <p className="text-slate-600">
                        Elektronik Mühendisi, Anakart Tasarımı ve Kontrol Sistemleri Uzmanı
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-1">
                          Geliştirdiği Ürünler:
                        </h4>
                        <ul className="text-slate-600 space-y-1">
                          <li>• Access Control Panel (Erişim Kontrol Paneli)</li>
                          <li>• Guard MX Bekçi Kontrol Sistemi</li>
                          <li>• Anakart Tasarımı ve PCB Geliştirme</li>
                        </ul>
                      </div>
                      
                      <p className="text-slate-600 italic pt-2">
                        "Elektronik mühendisliği bilgimle donanım tasarımından yazılım geliştirmeye 
                        kadar tüm kontrol sistemlerini tasarlıyor ve geliştiriyoruz."
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-slate-700 mb-2">
                        Teknik Departman
                      </h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Elektronik Tasarım</li>
                        <li>• Anakart Geliştirme</li>
                        <li>• Sistem Entegrasyonu</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-slate-700 mb-2">
                        Yazılım Departmanı  
                      </h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• PDKS Sistemleri</li>
                        <li>• Web Uygulamaları</li>
                        <li>• Mobil Çözümler</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Mobile Development Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Mobil Yazılım Uzmanı
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-square md:aspect-auto">
                  <img 
                    src="/hakkimizda-3.png" 
                    alt="Suphi Gezgin - Mobil Yazılım Uzmanı" 
                    className="w-full h-full object-cover"
                    data-testid="suphi-photo"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-blue-50 to-blue-100">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">
                        Suphi Gezgin
                      </h3>
                      <p className="text-lg font-semibold text-blue-600 mb-4">
                        Mobil Programlama Uzmanı
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-1">
                          Uzmanlık Alanı:
                        </h4>
                        <p className="text-slate-600">
                          ESoft PDKS Mobil Yazılım Mühendisi
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-1">
                          Mobil Teknolojileri:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            Android
                          </span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            iOS
                          </span>
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                            React Native
                          </span>
                          <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                            Flutter
                          </span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-1">
                          Mobil Uygulama Özellikleri:
                        </h4>
                        <ul className="text-slate-600 space-y-1 text-sm">
                          <li>• Offline Çalışma Desteği</li>
                          <li>• GPS Konum Takibi</li>
                          <li>• Push Notification</li>
                          <li>• Biyometrik Kimlik Doğrulama</li>
                          <li>• QR Code Tarama</li>
                          <li>• Real-time Senkronizasyon</li>
                        </ul>
                      </div>
                      
                      <div className="pt-2">
                        <p className="text-slate-600 italic">
                          "PDKS mobil uygulamalarında kullanıcı deneyimini en üst seviyede tutarak, 
                          her platformda kesintisiz çalışan çözümler geliştiriyorum."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Sales Manager Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Satış Müdürü
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-square md:aspect-auto">
                  <img 
                    src="/hakkimizda-3.png" 
                    alt="Yasin Atılgan - Satış Müdürü" 
                    className="w-full h-full object-cover"
                    data-testid="yasin-photo"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-green-50 to-green-100">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">
                        Yasin Atılgan
                      </h3>
                      <p className="text-lg font-semibold text-green-600 mb-4">
                        Satış Müdürü
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-1">
                          Uzmanlık Alanı:
                        </h4>
                        <p className="text-slate-600">
                          Kurumsal Satış ve Müşteri İlişkileri Yönetimi
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-1">
                          Satış Alanları:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            PDKS Sistemleri
                          </span>
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                            Erişim Kontrol
                          </span>
                          <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                            Guard MX
                          </span>
                          <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                            Turnike Sistemleri
                          </span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-1">
                          Hizmet Alanları:
                        </h4>
                        <ul className="text-slate-600 space-y-1 text-sm">
                          <li>• Kurumsal Çözüm Danışmanlığı</li>
                          <li>• Teknik Ürün Sunumları</li>
                          <li>• Proje Yönetimi ve Koordinasyon</li>
                          <li>• Müşteri Destek ve İlişki Yönetimi</li>
                          <li>• Satış Sonrası Teknik Destek</li>
                        </ul>
                      </div>
                      
                      <div className="pt-2">
                        <p className="text-slate-600 italic">
                          "Müşterilerimizin ihtiyaçlarını anlamak ve doğru teknoloji çözümlerini sunmak 
                          bizim en önemli önceliğimiz. Her projede uzun vadeli ortaklık hedefliyoruz."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-slate-800 mb-12">
            Uzman Ekibimiz
          </h2>
          <div className="max-w-5xl mx-auto">
            <img 
              src="/hakkimizda-1.png" 
              alt="Mika Teknoloji Ekibi" 
              className="w-full rounded-2xl shadow-2xl"
              data-testid="team-photo"
            />
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
            Kurumsal Hikayemiz
          </h2>
          
          <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
            <p>
              Mika Teknoloji Kontrol Sistemleri, 2008 yılında İstanbul'da kurulan ve PDKS (Personel Devam Kontrol Sistemi) 
              alanında uzmanlaşmış bir teknoloji şirketidir. Kuruluşumuzdan bu yana, kurumsal müşterilerimizin insan kaynakları 
              yönetim süreçlerini dijitalleştirmek ve operasyonel verimliliği artırmak amacıyla kapsamlı çözümler sunmaktayız.
            </p>
            
            <p>
              Türkiye genelinde 10.000'den fazla kurumsal müşteri portföyü ile iş gücü yönetimi ve erişim kontrol sistemleri 
              alanında güvenilir teknoloji ortağı konumundayız. Perpa Ticaret Merkezi A Blok'taki modern merkez ofisimizden 
              ülke çapındaki tüm müşterilerimize kesintisiz hizmet sağlamaktayız.
            </p>
            
            <p>
              Web tabanlı PDKS çözümlerimiz, QR teknolojili bekçi kontrol sistemlerimiz, turnike entegrasyonları ve 
              biyometrik erişim kontrol sistemlerimiz ile kurumların dijital dönüşüm projelerinde stratejik ortak rolü 
              üstlenmekteyiz. Mika Teknoloji olarak, ileri teknoloji altyapısını kurumsal ihtiyaçlarla buluşturarak 
              verimli ve güvenilir iş süreçleri geliştirmekteyiz.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-slate-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Misyonumuz
                </h3>
                <p className="text-slate-600">
                  Kurumsal müşterilerimize PDKS ve erişim kontrol sistemleri alanında en güncel teknoloji çözümlerini sunarak, 
                  insan kaynakları yönetiminde verimliliği artırmak ve operasyonel süreçleri optimize etmek.
                </p>
              </div>
              
              <div className="bg-primary/5 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Vizyonumuz
                </h3>
                <p className="text-slate-600">
                  İnsan kaynakları ve iş gücü yönetimi teknolojileri alanında Türkiye'nin lider yazılım şirketi olmak 
                  ve uluslararası pazarlarda tanınan güvenilir bir marka haline gelmek.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
