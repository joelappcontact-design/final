'use client';

import { motion } from 'framer-motion';
import { Key, Phone, Mail, MapPin, Clock, Shield, CheckCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      text: '07 56 90 21 12',
      href: 'tel:0756902112'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      text: 'contact@serrurierfrancais.com',
      href: 'mailto:contact@serrurierfrancais.com'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: 'Île-de-France',
      href: '#'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: '24h/24 - 7j/7',
      href: '#'
    }
  ];

  const services = [
    'Ouverture de porte',
    'Changement de serrure',
    'Sécurisation',
    'Réparation serrure',
    'Installation coffre-fort',
    'Dépannage urgence'
  ];

  const trustBadges = [
    { icon: <Shield className="w-6 h-6" />, text: 'Assuré' },
    { icon: <CheckCircle className="w-6 h-6" />, text: 'Certifié' },
    { icon: <Clock className="w-6 h-6" />, text: 'Rapide' }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <Key className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                Serrurierfrancais.com
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Votre serrurier d'urgence de confiance en Île-de-France. 
              Intervention rapide, artisans certifiés, service 24h/24.
            </p>
            
            {/* Trust Badges */}
            <div className="space-y-3">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-primary-400">
                    {badge.icon}
                  </div>
                  <span className="text-gray-300">{badge.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <div className="text-primary-400">
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <div className="grid grid-cols-1 gap-2">
              {services.map((service, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {service}
                </a>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold mb-6">Urgence ?</h3>
            <div className="space-y-4">
              <motion.a
                href="tel:0756902112"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Appeler maintenant</span>
              </motion.a>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400 mb-1">
                  07 56 90 21 12
                </div>
                <div className="text-sm text-gray-400">
                  Appel gratuit
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Serrurierfrancais.com - Tous droits réservés
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#mentions-legales" className="text-gray-400 hover:text-white transition-colors duration-200">
                Mentions légales
              </a>
              <a href="#politique-confidentialite" className="text-gray-400 hover:text-white transition-colors duration-200">
                Politique de confidentialité
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
