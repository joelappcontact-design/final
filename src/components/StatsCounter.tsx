'use client';

import { useState, useEffect } from 'react';

export default function StatsCounter() {
  const [counters, setCounters] = useState({
    clients: 0,
    experience: 0,
    technicians: 0,
    interventions: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Animer les compteurs
          const animateCounter = (key: keyof typeof counters, target: number, duration: number) => {
            const start = Date.now();
            const animate = () => {
              const elapsed = Date.now() - start;
              const progress = Math.min(elapsed / duration, 1);
              const current = Math.floor(progress * target);
              
              setCounters(prev => ({ ...prev, [key]: current }));
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            animate();
          };

          animateCounter('clients', 25000, 2000);
          animateCounter('experience', 15, 2000);
          animateCounter('technicians', 75, 2000);
          animateCounter('interventions', 50000, 2000);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [isVisible]);

  return (
    <section id="stats-section" className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              {counters.clients.toLocaleString()}+
            </div>
            <div className="text-blue-300 font-medium">
              Clients satisfaits
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              {counters.experience}+
            </div>
            <div className="text-blue-300 font-medium">
              Années d'expérience
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              {counters.technicians}+
            </div>
            <div className="text-blue-300 font-medium">
              Techniciens experts
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              {counters.interventions.toLocaleString()}+
            </div>
            <div className="text-blue-300 font-medium">
              Interventions réussies
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}