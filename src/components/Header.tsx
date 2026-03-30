'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Key } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-transparent backdrop-blur-xl border-b border-gray-200/50 shadow-sm' 
          : 'bg-transparent backdrop-blur-lg'
      }`}
    >
      <div className="container-apple">
        <div className="flex items-center justify-between h-20">
          {/* Logo avec dégradé */}
          <motion.a
            href="#accueil"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center">
              <Key className="w-5 h-5 text-white" />
            </div>
            <div className="text-2xl font-black bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-blue-400 transition-all duration-300">
              serrurierfrancais.com
            </div>
          </motion.a>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.a
            href="tel:0756902112"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Phone className="w-4 h-4" />
            <span>07 56 90 21 12</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors duration-200 text-gray-700 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50"
          >
            <div className="container-apple py-6">
              <nav className="flex flex-col space-y-4 mb-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
              <a
                href="tel:0756902112"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>07 56 90 21 12</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;