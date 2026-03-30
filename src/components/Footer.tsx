'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-apple">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              serrurierfrancais.com
            </h3>
            <p className="text-gray-400">Serrurier d'urgence en Île-de-France</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-t border-gray-800 pt-8"
          >
            <p className="text-gray-500 text-sm">© 2024 Serrurierfrancais.com - Tous droits réservés</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;