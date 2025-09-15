'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, MessageCircle } from 'lucide-react';

const FixedCallButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-4 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mb-4 bg-white rounded-2xl p-6 shadow-2xl border border-gray-200 max-w-xs"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Besoin d'aide ?</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-3">
              <motion.a
                href="tel:0756902112"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center space-x-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Appeler maintenant</span>
              </motion.a>
              
              <motion.a
                href="https://wa.me/0756902112"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300"
      >
        <Phone className="w-8 h-8 text-gray-900" />
      </motion.button>
    </div>
  );
};

export default FixedCallButton;