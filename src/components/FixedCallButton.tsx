'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const FixedCallButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <motion.a
        href="tel:0756902112"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white border border-gray-200 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-200"
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl flex items-center justify-center">
            <Phone className="w-5 h-5 text-white" />
          </div>
          <div className="text-left">
            <div className="text-sm font-semibold text-gray-900">Appeler maintenant</div>
            <div className="text-xs text-gray-600">Ouverture à partir de 39€</div>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
};

export default FixedCallButton;