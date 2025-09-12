'use client';

import { Phone } from 'lucide-react';
import { config } from '@/lib/config';

interface PhoneButtonProps {
  phoneNumber?: string;
  displayText?: string;
  variant?: 'primary' | 'secondary' | 'inline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function PhoneButton({ 
  phoneNumber = config.phone,
  displayText = config.phoneDisplay,
  variant = 'inline',
  size = 'md',
  className = ''
}: PhoneButtonProps) {
  const handlePhoneClick = () => {
    // Tracking GTM
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'phone_number',
        value: 1
      });
    }
    
    // Analytics
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'phone_click',
        phone_number: phoneNumber,
        button_variant: variant
      });
    }
  };

  const baseClasses = "inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-400/50 active:scale-95";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl",
    secondary: "bg-white/90 text-slate-900 border-2 border-slate-300 hover:bg-white hover:border-blue-500",
    inline: "bg-transparent text-blue-600 hover:text-blue-800 underline hover:no-underline"
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-sm gap-1",
    md: "px-3 py-2 text-base gap-2",
    lg: "px-4 py-3 text-lg gap-2"
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4", 
    lg: "w-5 h-5"
  };

  return (
    <a
      href={`tel:${phoneNumber}`}
      onClick={handlePhoneClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      aria-label={`Appeler ${displayText}`}
    >
      <Phone className={iconSizes[size]} />
      {displayText}
    </a>
  );
}
