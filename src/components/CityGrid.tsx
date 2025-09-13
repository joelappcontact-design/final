'use client';

import { MapPin, Clock } from 'lucide-react';
import { config } from '@/lib/config';
import { trackCityPageView } from '@/lib/tracking';
import Link from 'next/link';

interface CityGridProps {
  cities?: string[];
  maxItems?: number;
  className?: string;
}

export default function CityGrid({ 
  cities = config.cities, 
  maxItems = 12,
  className = '' 
}: CityGridProps) {
  const displayCities = cities.slice(0, maxItems);

  const handleCityClick = (city: string) => {
    trackCityPageView(city);
  };

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 ${className}`}>
      {displayCities.map((city, index) => {
        const slug = city.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
        
        return (
          <Link
            key={index}
            href={`/zones/${slug}`}
            onClick={() => handleCityClick(city)}
            className="
              group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3
              hover:bg-white/15 hover:border-white/30 transition-all duration-300
              hover:scale-105 hover:shadow-lg
            "
          >
            <div className="flex items-center gap-2 mb-1">
              <MapPin size={16} className="text-yellow-400" />
              <h3 className="font-medium text-black group-hover:text-yellow-600 transition-colors text-sm">
                {city}
              </h3>
            </div>
            
            <div className="flex items-center gap-1 text-black text-xs">
              <Clock size={12} />
              <span>Intervention en {config.slaMinutes}</span>
            </div>
            
            <div className="mt-2 text-gray-600 text-xs">
              Cliquez pour voir les détails
            </div>
          </Link>
        );
      })}
    </div>
  );
}
