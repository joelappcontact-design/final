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

  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 active:scale-95";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-red-500 via-white to-blue-600 text-gray-900 hover:from-red-600 hover:via-white hover:to-blue-700 shadow-lg hover:shadow-xl border-2 border-white/20",
    secondary: "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20",
    sticky: "bg-gradient-to-r from-red-500 via-white to-blue-600 text-gray-900 hover:from-red-600 hover:via-white hover:to-blue-700 shadow-2xl hover:shadow-3xl fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-auto md:min-w-[200px] border-2 border-white/30"
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
