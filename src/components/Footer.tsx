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
    <footer id="contact" className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-20">
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
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-sm"></div>
              </div>
              <span className="text-xl font-medium">
                Serrurier Français
              </span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
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
            <h3 className="text-lg font-medium mb-6">Contact</h3>
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
            <h3 className="text-lg font-medium mb-6">Services</h3>
            <div className="grid grid-cols-1 gap-2">
              {services.map((service, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
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
            <h3 className="text-lg font-medium mb-6">Urgence ?</h3>
            <div className="space-y-4">
              <motion.a
                href="tel:0756902112"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-4 h-4" />
                <span>Appeler maintenant</span>
              </motion.a>
              
              <div className="text-center">
                <div className="text-2xl font-semibold text-white mb-1">
                  07 56 90 21 12
                </div>
                <div className="text-gray-400 text-sm">
                  Appel gratuit
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400">
              © {currentYear} Serrurier Français - Tous droits réservés
            </div>
            
            <div className="flex space-x-8">
              <a href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors duration-300">
                Mentions légales
              </a>
              <a href="/politique-confidentialite" className="text-gray-400 hover:text-white transition-colors duration-300">
                Politique de confidentialité
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-300">
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