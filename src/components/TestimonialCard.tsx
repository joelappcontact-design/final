'use client';

import { Star, Quote } from 'lucide-react';
import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export default function TestimonialCard({ testimonial, className = '' }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <div className={`
      bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6
      hover:bg-white/15 hover:border-white/30 transition-all duration-300
      hover:scale-105 hover:shadow-lg
      ${className}
    `}>
      <div className="flex items-center gap-1 mb-4">
        {renderStars(testimonial.rating)}
      </div>
      
      <div className="relative mb-4">
        <Quote size={24} className="text-yellow-400/30 absolute -top-2 -left-2" />
        <p className="text-white/90 text-sm leading-relaxed pl-4">
          "{testimonial.comment}"
        </p>
      </div>
      
      <div className="border-t border-white/20 pt-4">
        <div className="font-semibold text-white text-sm">
          {testimonial.name}
        </div>
        <div className="text-white/70 text-xs">
          {testimonial.location} • {testimonial.date}
        </div>
      </div>
    </div>
  );
}
