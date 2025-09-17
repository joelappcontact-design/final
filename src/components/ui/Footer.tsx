'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-600 text-white">
      <div className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo et description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo-serrurier-francais.png" 
                alt="Serrurier Français" 
                className="h-12 w-auto"
              />
              <h3 className="text-2xl font-bold">serrurierfrancais.com</h3>
            </div>
            <p className="text-zinc-200 mb-6 max-w-md">
              Votre serrurier de confiance en Île-de-France. Intervention rapide, 
              artisans certifiés, tarifs transparents. Disponible 24h/24, 7j/7.
            </p>
            <div className="flex space-x-4">
              <a 
                href="tel:+33756902112"
                className="bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                07 56 90 21 12
              </a>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#60a5fa]" />
                <a href="tel:+33756902112" className="text-zinc-200 hover:text-white transition-colors">
                  07 56 90 21 12
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#60a5fa]" />
                <a href="mailto:contact@serrurierfrancais.com" className="text-zinc-200 hover:text-white transition-colors">
                  contact@serrurierfrancais.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#60a5fa]" />
                <span className="text-zinc-200">Île-de-France, France</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-[#60a5fa]" />
                <span className="text-zinc-200">24h/24, 7j/7</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <div className="space-y-3">
              <a href="#" className="block text-zinc-200 hover:text-white transition-colors">
                Ouverture de porte
              </a>
              <a href="#" className="block text-zinc-200 hover:text-white transition-colors">
                Changement de cylindre
              </a>
              <a href="#" className="block text-zinc-200 hover:text-white transition-colors">
                Réparation serrure
              </a>
              <a href="#" className="block text-zinc-200 hover:text-white transition-colors">
                Urgence 24h/24
              </a>
              <a href="#" className="block text-zinc-200 hover:text-white transition-colors">
                Devis gratuit
              </a>
            </div>
          </motion.div>
        </div>

        {/* Mentions légales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-zinc-600 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-zinc-300 text-sm">
              © 2025 serrurierfrancais.com. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-zinc-300 hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-zinc-300 hover:text-white transition-colors">
                CGU
              </a>
              <a href="#" className="text-zinc-300 hover:text-white transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
