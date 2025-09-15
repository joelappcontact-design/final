'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Shield, Award, CheckCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      text: '07 56 90 21 12',
      href: 'tel:0756902112'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      text: 'contact@serrurierfrancais.com',
      href: 'mailto:contact@serrurierfrancais.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      text: 'Île-de-France',
      href: '#'
    },
    {
      icon: <Clock className="w-6 h-6" />,
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

  const guarantees = [
    {
      icon: <Shield className="w-6 h-6" />,
      text: 'Artisans certifiés'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: 'Intervention 30-45 min'
    },
    {
      icon: <Award className="w-6 h-6" />,
      text: 'Garantie 2 ans'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-900 rounded-sm"></div>
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <span className="text-2xl font-bold">
                SERRURIER FRANCAIS.COM
              </span>
            </div>
            <p className="text-gray-300 mb-10 leading-relaxed text-lg">
              Votre serrurier d'urgence de confiance en Île-de-France. 
              Intervention rapide, artisans certifiés, service 24h/24.
            </p>
            
            {/* Guarantees */}
            <div className="space-y-4">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-yellow-400">
                    {guarantee.icon}
                  </div>
                  <span className="text-gray-300 text-lg">{guarantee.text}</span>
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
            <h3 className="text-3xl font-bold mb-8">Contact</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  <div className="text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="text-xl">{item.text}</span>
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
            <h3 className="text-3xl font-bold mb-8">Services</h3>
            <div className="grid grid-cols-1 gap-4">
              {services.map((service, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-lg"
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
            <h3 className="text-3xl font-bold mb-8">Urgence ?</h3>
            <div className="space-y-8">
              <motion.a
                href="tel:0756902112"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center space-x-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-6 h-6" />
                <span>Appeler maintenant</span>
              </motion.a>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-3">
                  07 56 90 21 12
                </div>
                <div className="text-gray-300 text-xl">
                  Appel gratuit
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="text-gray-400 text-lg">
              © {currentYear} Serrurier Français - Tous droits réservés
            </div>
            
            <div className="flex space-x-10">
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