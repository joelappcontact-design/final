'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Partner {
  name: string;
  url: string;
  logo: string;
}

interface PartnersMarqueeProps {
  partners: Partner[];
  speed?: number; // ms per cycle
  pauseOnHover?: boolean;
  grayscale?: boolean;
  gap?: number; // px
  height?: number; // px
  reduceMotionFallback?: boolean;
}

export default function PartnersMarquee({
  partners,
  speed = 25000, // 25s par défaut
  pauseOnHover = false,
  grayscale = true,
  gap = 48,
  height = 48,
  reduceMotionFallback = true
}: PartnersMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Détecter la préférence de mouvement réduit
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Intersection Observer pour lancer l'animation uniquement quand visible
  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsPaused(false);
          } else {
            setIsPaused(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  // Si pas de partenaires, ne rien afficher
  if (!partners || partners.length === 0) {
    return null;
  }

  // Dupliquer les partenaires pour la boucle seamless
  const duplicatedPartners = [...partners, ...partners];

  // Si mouvement réduit activé, afficher en grille statique
  if (prefersReducedMotion && reduceMotionFallback) {
    return (
      <section 
        className="py-16 px-4"
        role="region"
        aria-label="Partenaires serrurerie"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 text-outline">
            Nos partenaires
          </h2>
          <div 
            className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center"
            style={{ gap: `${gap}px` }}
          >
            {partners.map((partner, index) => (
              <Link
                key={`${partner.name}-${index}`}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-4 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400/50"
                aria-label={`Visiter le site de ${partner.name}`}
              >
                <div 
                  className="flex items-center justify-center"
                  style={{ height: `${height}px` }}
                >
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name} – partenaire serrurerie`}
                    width={height * 2}
                    height={height * 2}
                    className={`transition-all duration-300 group-hover:scale-110 ${
                      grayscale ? 'grayscale group-hover:grayscale-0' : ''
                    }`}
                    onError={(e) => {
                      // Placeholder en cas d'erreur de chargement
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const placeholder = document.createElement('div');
                      placeholder.className = 'bg-gray-100 text-gray-600 text-sm font-medium px-3 py-2 rounded flex items-center justify-center';
                      placeholder.textContent = `Logo ${partner.name}`;
                      placeholder.style.height = `${height}px`;
                      placeholder.style.minWidth = '120px';
                      target.parentNode?.appendChild(placeholder);
                    }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="py-16 px-4"
      role="region"
      aria-label="Partenaires serrurerie"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 text-outline">
          Nos partenaires
        </h2>
        
        <div 
          ref={containerRef}
          className="relative overflow-hidden"
          style={{ height: `${height + 32}px` }}
          onMouseEnter={() => pauseOnHover && setIsPaused(true)}
          onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        >
          {/* Bouton de pause pour les lecteurs d'écran */}
          <button
            className="sr-only focus:not-sr-only absolute top-2 right-2 z-10 bg-white/90 text-gray-900 px-3 py-1 rounded text-sm font-medium transition-all duration-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? "Reprendre l'animation" : "Mettre en pause l'animation"}
          >
            {isPaused ? '▶️ Reprendre' : '⏸️ Pause'}
          </button>

          <div
            ref={trackRef}
            className="flex items-center absolute top-0 left-0"
            style={{
              gap: `${gap}px`,
              animation: isPaused || prefersReducedMotion 
                ? 'none' 
                : `marquee ${speed}ms linear infinite`,
              transform: isPaused || prefersReducedMotion 
                ? 'translateX(0)' 
                : undefined
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <Link
                key={`${partner.name}-${index}`}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-2 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400/50"
                style={{ 
                  minWidth: `${height * 2}px`,
                  height: `${height}px`
                }}
                aria-label={`Visiter le site de ${partner.name}`}
              >
                <div className="flex items-center justify-center w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name} – partenaire serrurerie`}
                    width={height * 2}
                    height={height * 2}
                    className={`transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 ${
                      grayscale ? 'grayscale group-hover:grayscale-0' : ''
                    }`}
                    onError={(e) => {
                      // Placeholder en cas d'erreur de chargement
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const placeholder = document.createElement('div');
                      placeholder.className = 'bg-gray-100 text-gray-600 text-sm font-medium px-3 py-2 rounded flex items-center justify-center';
                      placeholder.textContent = `Logo ${partner.name}`;
                      placeholder.style.height = `${height}px`;
                      placeholder.style.minWidth = '120px';
                      target.parentNode?.appendChild(placeholder);
                    }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
