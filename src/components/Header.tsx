'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock } from 'lucide-react';
import { config } from '@/lib/config';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-dark py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logo-serrurier-francais.png" 
              alt="Serrurier Français" 
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right">
              <div className="flex items-center space-x-2 text-white/90">
                <Phone size={16} />
                <span className="font-semibold">{config.phoneDisplay}</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-300 text-sm">
                <Clock size={14} />
                <span>Disponible 24h/24</span>
              </div>
            </div>
            <a
              href={`tel:${config.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Appeler
            </a>
          </div>

          {/* Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 glass rounded-2xl p-6 animate-slide-up">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-white/80 hover:text-white transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center space-x-2 text-white/90 mb-4">
                <Phone size={16} />
                <span className="font-semibold">{config.phoneDisplay}</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-300 text-sm mb-4">
                <Clock size={14} />
                <span>Disponible 24h/24</span>
              </div>
              <a
                href={`tel:${config.phone.replace(/\s/g, '')}`}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Appeler maintenant
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}