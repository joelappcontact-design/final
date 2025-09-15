'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

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

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <span className="text-2xl font-bold">
                Serrurier Français
              </span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Votre serrurier d'urgence de confiance en Île-de-France. 
              Intervention rapide, artisans certifiés, service 24h/24.
            </p>
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
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                >
                  <div className="text-gray-500 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="text-lg">{item.text}</span>
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
            <div className="grid grid-cols-1 gap-3">
              {services.map((service, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
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
            <div className="space-y-6">
              <motion.a
                href="tel:0756902112"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                <span>Appeler maintenant</span>
              </motion.a>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  07 56 90 21 12
                </div>
                <div className="text-gray-400 text-lg">
                  Appel gratuit
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-lg">
              © {currentYear} Serrurier Français - Tous droits réservés
            </div>
            
            <div className="flex space-x-8">
              <a href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                Mentions légales
              </a>
              <a href="/politique-confidentialite" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                Politique de confidentialité
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">
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