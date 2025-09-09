'use client';

import { useState, useEffect } from 'react';
import { X, Cookie, Settings } from 'lucide-react';
import { updateConsent, getConsentState, ConsentState } from '@/lib/tracking';

interface CookieBannerProps {
  className?: string;
}

export default function CookieBanner({ className = '' }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    ad_storage: 'denied',
    analytics_storage: 'denied',
  });

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà donné son consentement
    const savedConsent = localStorage.getItem('cookie-consent');
    if (!savedConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const newConsent: ConsentState = {
      ad_storage: 'granted',
      analytics_storage: 'granted',
    };
    
    updateConsent(newConsent);
    setConsent(newConsent);
    localStorage.setItem('cookie-consent', JSON.stringify(newConsent));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const newConsent: ConsentState = {
      ad_storage: 'denied',
      analytics_storage: 'denied',
    };
    
    updateConsent(newConsent);
    setConsent(newConsent);
    localStorage.setItem('cookie-consent', JSON.stringify(newConsent));
    setIsVisible(false);
  };

  const handleSaveSettings = () => {
    updateConsent(consent);
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
    setShowSettings(false);
  };

  const toggleConsent = (type: keyof ConsentState) => {
    setConsent(prev => ({
      ...prev,
      [type]: prev[type] === 'granted' ? 'denied' : 'granted'
    }));
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 ${className}`}>
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsVisible(false)}
      />
      
      {/* Banner */}
      <div className="relative bg-white/95 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-md w-full shadow-2xl">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Fermer"
        >
          <X size={20} />
        </button>

        {!showSettings ? (
          <>
            <div className="flex items-center gap-3 mb-4">
              <Cookie size={24} className="text-yellow-500" />
              <h3 className="text-lg font-semibold text-gray-900">
                Cookies et confidentialité
              </h3>
            </div>
            
            <p className="text-gray-700 text-sm mb-6">
              Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic. 
              Vos données sont protégées et ne sont jamais vendues à des tiers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAcceptAll}
                className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-4 py-2 rounded-xl font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all"
              >
                Accepter tout
              </button>
              <button
                onClick={handleRejectAll}
                className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-xl font-semibold hover:bg-gray-300 transition-all"
              >
                Refuser tout
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="flex-1 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-xl font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                <Settings size={16} />
                Paramètres
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-4">
              <Settings size={24} className="text-blue-500" />
              <h3 className="text-lg font-semibold text-gray-900">
                Paramètres des cookies
              </h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Cookies analytiques</h4>
                  <p className="text-sm text-gray-600">
                    Nous aident à comprendre comment vous utilisez notre site
                  </p>
                </div>
                <button
                  onClick={() => toggleConsent('analytics_storage')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    consent.analytics_storage === 'granted' ? 'bg-yellow-400' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      consent.analytics_storage === 'granted' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Cookies publicitaires</h4>
                  <p className="text-sm text-gray-600">
                    Utilisés pour personnaliser les publicités
                  </p>
                </div>
                <button
                  onClick={() => toggleConsent('ad_storage')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    consent.ad_storage === 'granted' ? 'bg-yellow-400' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      consent.ad_storage === 'granted' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => setShowSettings(false)}
                className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-xl font-semibold hover:bg-gray-300 transition-all"
              >
                Retour
              </button>
              <button
                onClick={handleSaveSettings}
                className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-4 py-2 rounded-xl font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all"
              >
                Sauvegarder
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
