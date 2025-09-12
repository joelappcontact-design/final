/**
 * Gestion du tracking GA4 et Google Ads
 * Inclut la gestion du Consent Mode v2
 */

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Types pour le consentement
export type ConsentType = 'ad_storage' | 'analytics_storage';

export interface ConsentState {
  ad_storage: 'granted' | 'denied';
  analytics_storage: 'granted' | 'denied';
}

// État du consentement par défaut
let consentState: ConsentState = {
  ad_storage: 'denied',
  analytics_storage: 'denied',
};

/**
 * Initialise Google Tag Manager et GA4
 */
export const initializeTracking = () => {
  if (typeof window === 'undefined') return;

  // Initialise dataLayer
  window.dataLayer = window.dataLayer || [];

  // Fonction gtag
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };

  // Configuration initiale avec Consent Mode v2
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500,
  });

  // Configuration GA4
  window.gtag('js', new Date());
  window.gtag('config', process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

/**
 * Met à jour le consentement
 */
export const updateConsent = (consent: Partial<ConsentState>) => {
  if (typeof window === 'undefined') return;

  consentState = { ...consentState, ...consent };

  window.gtag('consent', 'update', consentState);
};

/**
 * Track un événement de clic sur le téléphone
 */
export const trackPhoneClick = (source: string = 'website') => {
  if (typeof window === 'undefined') return;

  // Événement GA4
  window.gtag('event', 'call_click', {
    event_category: 'engagement',
    event_label: source,
    value: 1,
  });

  // Conversion Google Ads
  if (process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID) {
    window.gtag('event', 'conversion', {
      send_to: `${process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID}/${process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL}`,
      event_category: 'phone_call',
      event_label: source,
    });
  }
};

/**
 * Track un événement de clic WhatsApp
 */
export const trackWhatsAppClick = () => {
  if (typeof window === 'undefined') return;

  window.gtag('event', 'whatsapp_click', {
    event_category: 'engagement',
    event_label: 'whatsapp',
    value: 1,
  });
};

/**
 * Track la navigation vers une page de ville
 */
export const trackCityPageView = (city: string) => {
  if (typeof window === 'undefined') return;

  window.gtag('event', 'city_page_view', {
    event_category: 'navigation',
    event_label: city,
    value: 1,
  });
};

/**
 * Vérifie si GCLID est présent dans l'URL
 */
export const hasGclid = (): boolean => {
  if (typeof window === 'undefined') return false;
  return new URLSearchParams(window.location.search).has('gclid');
};

/**
 * Sauvegarde le GCLID dans localStorage
 */
export const saveGclid = () => {
  if (typeof window === 'undefined') return;
  
  const urlParams = new URLSearchParams(window.location.search);
  const gclid = urlParams.get('gclid');
  
  if (gclid) {
    localStorage.setItem('gclid', gclid);
    localStorage.setItem('gclid_timestamp', Date.now().toString());
  }
};

/**
 * Récupère le GCLID sauvegardé
 */
export const getSavedGclid = (): string | null => {
  if (typeof window === 'undefined') return null;
  
  const gclid = localStorage.getItem('gclid');
  const timestamp = localStorage.getItem('gclid_timestamp');
  
  // GCLID valide pendant 30 jours
  if (gclid && timestamp) {
    const age = Date.now() - parseInt(timestamp);
    if (age < 30 * 24 * 60 * 60 * 1000) {
      return gclid;
    }
  }
  
  return null;
};

/**
 * Obtient l'état actuel du consentement
 */
export const getConsentState = (): ConsentState => {
  return { ...consentState };
};
