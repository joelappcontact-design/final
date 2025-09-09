'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import CallCTA from './CallCTA';
import { config } from '@/lib/config';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-40 transition-all duration-300
      ${isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
      }
    `}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center">
              <Phone size={24} className="text-gray-900" />
            </div>
            <span className={`
              font-bold text-xl transition-colors
              ${isScrolled ? 'text-gray-900' : 'text-white'}
            `}>
              {config.siteName}
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
              }`}
            >
              Accueil
            </Link>
            <Link 
              href="/tarifs" 
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
              }`}
            >
              Tarifs
            </Link>
            <Link 
              href="/faq" 
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
              }`}
            >
              FAQ
            </Link>
            <Link 
              href="/contact" 
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <CallCTA variant="primary" size="sm" />
          </div>

          {/* Menu Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/20">
            <nav className="flex flex-col gap-4">
              <Link 
                href="/" 
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="/tarifs" 
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Tarifs
              </Link>
              <Link 
                href="/faq" 
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="/contact" 
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-4">
                <CallCTA variant="primary" size="sm" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
