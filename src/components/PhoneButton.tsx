'use client';

import React from 'react';
import { PhoneIcon } from '@heroicons/react/24/solid';

interface PhoneButtonProps {
  phoneNumber: string;
  isWhatsApp?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

export default function PhoneButton({ 
  phoneNumber, 
  isWhatsApp = false, 
  className = '',
  variant = 'secondary',
  size = 'md',
  children 
}: PhoneButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] text-white hover:from-[#1e40af] hover:to-[#3b82f6]',
    secondary: 'bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] text-white hover:from-[#1e40af] hover:to-[#3b82f6]',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const href = isWhatsApp ? `https://wa.me/${phoneNumber}` : `tel:${phoneNumber}`;
  const text = isWhatsApp ? 'WhatsApp' : 'Appeler';

  return (
    <a
      href={href}
      target={isWhatsApp ? "_blank" : "_self"}
      rel={isWhatsApp ? "noopener noreferrer" : ""}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      <PhoneIcon className="h-5 w-5" />
      {children || text}
    </a>
  );
}