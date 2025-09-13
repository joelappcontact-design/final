'use client';

import { useEffect, useState } from 'react';

interface LockAnimationProps {
  className?: string;
  size?: number;
}

export default function LockAnimation({ className = '', size = 200 }: LockAnimationProps) {
  const [animationPhase, setAnimationPhase] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const startAnimation = () => {
      setIsAnimating(true);
      setAnimationPhase(0);
      
      // Phase 1: Clé qui s'approche (0-2s)
      setTimeout(() => setAnimationPhase(1), 500);
      
      // Phase 2: Clé qui entre dans la serrure (2-4s)
      setTimeout(() => setAnimationPhase(2), 2000);
      
      // Phase 3: Clé qui se casse (4-5s)
      setTimeout(() => setAnimationPhase(3), 4000);
      
      // Phase 4: Retour à l'état initial (5-6s)
      setTimeout(() => {
        setAnimationPhase(0);
        setIsAnimating(false);
      }, 5000);
    };

    // Démarrer l'animation immédiatement
    startAnimation();
    
    // Répéter l'animation toutes les 8 secondes
    const interval = setInterval(startAnimation, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const keyX = animationPhase === 0 ? -50 : animationPhase === 1 ? 20 : animationPhase === 2 ? 0 : 0;
  const keyY = animationPhase === 0 ? 0 : animationPhase === 1 ? 0 : animationPhase === 2 ? 0 : 0;
  const keyRotation = animationPhase === 0 ? 0 : animationPhase === 1 ? 0 : animationPhase === 2 ? 0 : animationPhase === 3 ? 15 : 0;
  const keyScale = animationPhase === 3 ? 0.8 : 1;
  
  const lockShake = animationPhase === 3 ? 'animate-pulse' : '';
  const keyBreak = animationPhase === 3 ? 'opacity-50' : 'opacity-100';

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className="overflow-visible"
      >
        {/* Serrure */}
        <g className={`transition-all duration-500 ${lockShake}`}>
          {/* Corps de la serrure */}
          <rect
            x="80"
            y="60"
            width="40"
            height="80"
            rx="5"
            fill="url(#lockGradient)"
            stroke="#1e293b"
            strokeWidth="2"
          />
          
          {/* Trou de la serrure */}
          <circle
            cx="100"
            cy="100"
            r="15"
            fill="#0f172a"
            className="transition-all duration-300"
          />
          
          {/* Détails de la serrure */}
          <rect
            x="85"
            y="70"
            width="30"
            height="20"
            rx="3"
            fill="#475569"
          />
          
          {/* Goupilles de la serrure */}
          <g className="opacity-60">
            <circle cx="95" cy="95" r="2" fill="#64748b" />
            <circle cx="105" cy="95" r="2" fill="#64748b" />
            <circle cx="100" cy="90" r="2" fill="#64748b" />
            <circle cx="100" cy="110" r="2" fill="#64748b" />
          </g>
        </g>

        {/* Clé */}
        <g
          className={`transition-all duration-500 ${keyBreak}`}
          style={{
            transform: `translate(${keyX}px, ${keyY}px) rotate(${keyRotation}deg) scale(${keyScale})`,
            transformOrigin: 'center'
          }}
        >
          {/* Tige de la clé */}
          <rect
            x="20"
            y="95"
            width="60"
            height="8"
            rx="4"
            fill="url(#keyGradient)"
            stroke="#1e293b"
            strokeWidth="1"
          />
          
          {/* Anneau de la clé */}
          <circle
            cx="25"
            cy="99"
            r="8"
            fill="none"
            stroke="url(#keyGradient)"
            strokeWidth="3"
          />
          
          {/* Dents de la clé */}
          <g className="opacity-80">
            <rect x="75" y="90" width="4" height="18" rx="2" fill="#1e293b" />
            <rect x="70" y="88" width="4" height="22" rx="2" fill="#1e293b" />
            <rect x="65" y="92" width="4" height="14" rx="2" fill="#1e293b" />
            <rect x="60" y="89" width="4" height="20" rx="2" fill="#1e293b" />
          </g>
        </g>

        {/* Effet de casse (éclats) */}
        {animationPhase === 3 && (
          <g className="animate-pulse">
            <circle cx="90" cy="85" r="2" fill="#ef4444" className="animate-bounce" />
            <circle cx="110" cy="90" r="1.5" fill="#f97316" className="animate-bounce" style={{ animationDelay: '0.1s' }} />
            <circle cx="85" cy="95" r="1" fill="#eab308" className="animate-bounce" style={{ animationDelay: '0.2s' }} />
            <circle cx="115" cy="85" r="1.5" fill="#ef4444" className="animate-bounce" style={{ animationDelay: '0.3s' }} />
          </g>
        )}

        {/* Texte d'animation */}
        <text
          x="100"
          y="160"
          textAnchor="middle"
          className="text-sm font-bold fill-slate-700"
        >
          {animationPhase === 0 && "Clé qui s'approche..."}
          {animationPhase === 1 && "Clé qui entre..."}
          {animationPhase === 2 && "Clé qui tourne..."}
          {animationPhase === 3 && "Clé cassée !"}
        </text>

        {/* Définition des gradients */}
        <defs>
          <linearGradient id="lockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="50%" stopColor="#475569" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
          
          <linearGradient id="keyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
