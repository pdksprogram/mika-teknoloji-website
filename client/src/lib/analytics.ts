// Google Analytics integration for Mika Teknoloji website
// Define the gtag function globally
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Analytics
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (!measurementId) {
    console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    return;
  }

  // Add Google Analytics script to the head
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize gtag
  const script2 = document.createElement('script');
  script2.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}');
  `;
  document.head.appendChild(script2);
};

// Track page views - useful for single-page applications
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId) return;
  
  window.gtag('config', measurementId, {
    page_path: url
  });
};

// Track events
export const trackEvent = (
  action: string, 
  category?: string, 
  label?: string, 
  value?: number
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track product views for all Mika Teknoloji products
export const trackProductView = (productName: string, productCategory: string) => {
  trackEvent('view_item', 'ecommerce', productName);
  trackEvent('product_view', productCategory, productName);
};

// Track specific product category views
export const trackTurnikeView = (modelName: string) => {
  trackEvent('turnike_view', 'turnike_sistemleri', modelName);
};

export const trackPDKSView = (systemType: string) => {
  trackEvent('pdks_view', 'pdks_sistemleri', systemType);
};

export const trackFingerprintView = (systemType: string) => {
  trackEvent('parmak_izi_view', 'parmak_izi_sistemleri', systemType);
};

export const trackFaceRecognitionView = (systemType: string) => {
  trackEvent('yuz_tanima_view', 'yuz_tanima_sistemleri', systemType);
};

export const trackQRPatrolView = (featureType: string) => {
  trackEvent('qr_patrol_view', 'qr_patrol_sistemleri', featureType);
};

export const trackAccessControlView = (systemType: string) => {
  trackEvent('erisim_kontrol_view', 'erisim_kontrol_sistemleri', systemType);
};

export const trackCardReaderView = (readerType: string) => {
  trackEvent('kart_okuyucu_view', 'kart_okuyucu_sistemleri', readerType);
};

// Track phone call clicks
export const trackPhoneCall = (source: string = 'general') => {
  trackEvent('phone_call', 'contact', source);
};

// Track contact form submissions
export const trackContactForm = (formType: string) => {
  trackEvent('form_submit', 'contact', formType);
};

// Track email clicks
export const trackEmailClick = (source: string = 'general') => {
  trackEvent('email_click', 'contact', source);
};

// Track price inquiry requests
export const trackPriceInquiry = (productName: string, productCategory: string) => {
  trackEvent('price_inquiry', productCategory, productName);
};

// Track solution page views
export const trackSolutionView = (solutionName: string) => {
  trackEvent('solution_view', 'cozumler', solutionName);
};

// Track blog article views
export const trackBlogView = (articleTitle: string) => {
  trackEvent('blog_view', 'blog', articleTitle);
};