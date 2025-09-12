'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { initializeTracking, saveGclid } from '@/lib/tracking';
import { config } from '@/lib/config';

export default function GoogleAnalytics() {
  useEffect(() => {
    // Initialise le tracking au chargement
    initializeTracking();
    
    // Sauvegarde le GCLID si présent
    saveGclid();
  }, []);

  // Ne pas charger GA4 si pas d'ID configuré
  if (!config.tracking.ga4MeasurementId) {
    return null;
  }

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${config.tracking.ga4MeasurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${config.tracking.ga4MeasurementId}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  );
}
