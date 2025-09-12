'use client';

import { Phone } from 'lucide-react';
import { config } from '@/lib/config';

interface CallButtonProps {
  variant?: 'primary' | 'secondary' | 'sticky';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export default function CallButton({ 
  variant = 'primary', 
  size = 'md', 
  className = '',
  children 
}: CallButtonProps) {
  const handleCallClick = () => {
    // Tracking GTM
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'call_click', {
        event_category: 'engagement',
        event_label: 'call_button',
        value: 1
      });
    }
    
    // Analytics
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'call_click',
        button_location: variant,
        button_size: size
      });
    }
  };

  const baseClasses = "inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400/50 active:scale-95 cursor-pointer";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-xl hover:shadow-2xl border-2 border-green-400/50 hover:scale-105 transform transition-all duration-300",
    secondary: "bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 hover:from-yellow-500 hover:to-amber-600 shadow-lg hover:shadow-xl border-2 border-yellow-300/50 hover:scale-105 transform transition-all duration-300",
    sticky: "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-2xl hover:shadow-3xl fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-auto md:min-w-[200px] border-2 border-green-400/50 hover:scale-105 transform transition-all duration-300"
  };

  const sizeClasses = {
    sm: "px-3 py-2 text-sm gap-2",
    md: "px-4 py-3 text-base gap-2",
    lg: "px-6 py-4 text-lg gap-3"
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5", 
    lg: "w-6 h-6"
  };

  return (
    <a
      href={config.urls.phone}
      onClick={handleCallClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      aria-label={`Appeler ${config.phoneDisplay}`}
    >
      <Phone className={iconSizes[size]} />
      {children || `Appeler ${config.phoneDisplay}`}
    </a>
  );
}
