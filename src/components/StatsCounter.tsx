'use client';

import { useState, useEffect } from 'react';

interface StatItem {
  id: string;
  number: number;
  suffix: string;
  label: string;
  icon?: React.ReactNode;
}

interface StatsCounterProps {
  stats: StatItem[];
  className?: string;
}

export default function StatsCounter({ stats, className = '' }: StatsCounterProps) {
  const [counters, setCounters] = useState<number[]>(new Array(stats.length).fill(0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startCounters();
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

  const startCounters = () => {
    stats.forEach((stat, index) => {
      const duration = 2000; // 2 seconds
      const increment = stat.number / (duration / 16); // 60fps
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          current = stat.number;
          clearInterval(timer);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, 16);
    });
  };

  return (
    <section id="stats-section" className={`py-20 px-4 bg-gradient-to-r from-blue-600 via-white to-red-600 ${className}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={stat.id} className="text-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                {stat.icon && (
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                )}
                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                  {counters[index].toLocaleString()}{stat.suffix}
                </div>
                <div className="text-lg text-slate-700 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
