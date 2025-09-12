'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import CallButton from './CallButton';
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
      bg-gradient-to-r from-blue-600 via-white to-red-600
      shadow-xl border-b-2 border-white/30 h-20
    `}>
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo à gauche */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo-serrurier-francais.png" 
              alt="Serrurierfrancais.com" 
              width={200} 
              height={100}
              className="h-20 w-auto brightness-0 invert logo-outline"
            />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="font-medium text-slate-900 hover:text-blue-600 transition-colors"
            >
              Accueil
            </Link>
            <Link 
              href="/faq" 
              className="font-medium text-slate-900 hover:text-blue-600 transition-colors"
            >
              FAQ
            </Link>
            <Link 
              href="/contact" 
              className="font-medium text-slate-900 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <CallButton variant="primary" size="sm" />
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

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-r from-blue-600 via-white to-red-600 shadow-lg border-t border-white/20">
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
