'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { config, getCleanPhone } from '@/lib/config';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/tracking';
import { useState, useEffect } from 'react';

interface CallCTAProps {
  variant?: 'primary' | 'secondary' | 'sticky';
  size?: 'sm' | 'md' | 'lg';
  showWhatsApp?: boolean;
  className?: string;
}

export default function CallCTA({ 
  variant = 'primary', 
  size = 'md', 
  showWhatsApp = false,
  className = '' 
}: CallCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation d'apparition
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handlePhoneClick = () => {
    trackPhoneClick('cta_button');
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2 font-semibold rounded-2xl transition-all duration-300
    focus:outline-none focus:ring-4 focus:ring-yellow-400/50
    hover:scale-105 active:scale-95
    ${isVisible ? 'animate-fade-in' : 'opacity-0'}
  `;

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900
      hover:from-yellow-300 hover:to-yellow-400
      shadow-lg hover:shadow-xl
    `,
    secondary: `
      bg-white/20 backdrop-blur-sm text-white border border-white/30
      hover:bg-white/30 hover:border-white/50
    `,
    sticky: `
      bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900
      hover:from-yellow-300 hover:to-yellow-400
      shadow-2xl hover:shadow-3xl
      fixed bottom-4 left-4 right-4 z-50
      md:left-auto md:right-4 md:w-auto
    `
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href={config.urls.phone}
        onClick={handlePhoneClick}
        className={classes}
        aria-label={`Appeler ${config.siteName} au ${config.phone}`}
      >
        <Phone size={iconSizes[size]} />
        <span>Appeler maintenant</span>
      </a>
      
      {showWhatsApp && (
        <a
          href={config.urls.whatsapp}
          onClick={handleWhatsAppClick}
          className={`
            ${baseClasses}
            bg-green-500 text-white
            hover:bg-green-400
            ${sizeClasses[size]}
            ${variant === 'sticky' ? 'hidden md:flex' : ''}
          `}
          aria-label={`Contacter ${config.siteName} sur WhatsApp`}
        >
          <MessageCircle size={iconSizes[size]} />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      )}
    </div>
  );
}
