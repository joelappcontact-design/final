'use client';

import { motion } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Zones d\'intervention', href: '/zones' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-zinc-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/logo-serrurier-francais.png" 
              alt="Serrurier Français" 
              className="h-16 w-auto"
            />
                    <span className="text-lg font-bold hidden sm:block" style={{
                      background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>Serrurierfrancais.com</span>
          </div>
          
                  {/* Navigation Desktop */}
                  <nav className="hidden lg:flex items-center space-x-8">
                    {navItems.map((item) => (
                      item.href.startsWith('#') ? (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors duration-200"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      )
                    ))}
                  </nav>
          
          {/* CTA et Menu Mobile */}
          <div className="flex items-center space-x-4">
            {/* CTA Principal */}
            <motion.a
              href="tel:+33756902112"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Phone className="h-4 w-4" />
              <span>07 56 90 21 12</span>
            </motion.a>

            {/* Menu Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-zinc-100 bg-white"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <a
                href="tel:+33756902112"
                className="flex items-center space-x-2 bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] text-white px-4 py-3 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 mt-4"
              >
                <Phone className="h-4 w-4" />
                <span>07 56 90 21 12</span>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
