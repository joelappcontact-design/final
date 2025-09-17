'use client';

import React from 'react';
import { PhoneIcon } from '@heroicons/react/24/solid';

interface CallButtonProps {
  phoneNumber: string;
  className?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

export default function CallButton({ 
  phoneNumber, 
  className = '', 
  variant = 'primary',
  size = 'md',
  children 
}: CallButtonProps) {
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

  return (
    <a
      href={`tel:${phoneNumber}`}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      <PhoneIcon className="h-5 w-5" />
      {children || 'Appeler'}
    </a>
  );
}
