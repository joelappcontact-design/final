'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function StickyCTA() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed bottom-6 left-6 right-6 z-50 md:hidden"
    >
      <motion.a
        href="tel:+33756902112"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center space-x-3 bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] text-white px-6 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
      >
        <Phone className="h-5 w-5" />
        <span>07 56 90 21 12</span>
      </motion.a>
    </motion.div>
  );
}
