'use client';

import { Check, Star } from 'lucide-react';
import { PriceCard as PriceCardType } from '@/types';
import { formatPrice } from '@/lib/config';

interface PriceCardProps {
  price: PriceCardType;
  className?: string;
}

export default function PriceCard({ price, className = '' }: PriceCardProps) {
  return (
    <div className={`
      relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6
      hover:bg-white/15 hover:border-white/30 transition-all duration-300
      hover:scale-105 hover:shadow-xl
      ${price.popular ? 'ring-2 ring-yellow-400/50' : ''}
      ${className}
    `}>
      {price.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <Star size={16} className="fill-current" />
            Populaire
          </div>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{price.title}</h3>
        <div className="text-3xl font-bold text-yellow-400 mb-2">
          {formatPrice(price.price)}
        </div>
        <p className="text-white/80 text-sm">{price.description}</p>
      </div>
      
      <ul className="space-y-3 mb-6">
        {price.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-white/90">
            <Check size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="text-center">
        <div className="text-xs text-white/70 mb-2">
          {price.popular ? 'Prix clair - Pas de surprise' : 'Devis gratuit'}
        </div>
      </div>
    </div>
  );
}
