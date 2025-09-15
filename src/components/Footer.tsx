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
     <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
             className="absolute w-2 h-2 bg-blue-400/5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-apple">
                <Key className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">
                  SERRURIER FRANÇAIS
                </span>
                <span className="text-xs text-blue-300">.com</span>
              </div>
            </div>
            <p className="text-white/80 mb-8 leading-relaxed text-lg">
              Votre serrurier d'urgence de confiance en Île-de-France. 
              Intervention rapide, artisans certifiés, service 24h/24.
            </p>
            
            {/* Trust Badges */}
            <div className="space-y-4">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-4">
                   <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                    <div className="text-white">
                      {badge.icon}
                    </div>
                  </div>
                  <span className="text-white/80 text-lg font-medium">{badge.text}</span>
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
            <h3 className="text-2xl font-bold mb-8 text-white">Contact</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-4 text-white/80 hover:text-white transition-colors duration-300 group"
                >
                   <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {item.icon}
                    </div>
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
            <h3 className="text-2xl font-bold mb-8 text-white">Services</h3>
            <div className="grid grid-cols-1 gap-3">
              {services.map((service, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white/80 hover:text-white transition-colors duration-300 text-lg hover:translate-x-2 transform transition-transform"
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
            <h3 className="text-2xl font-bold mb-8 text-white">Urgence ?</h3>
            <div className="space-y-6">
              <motion.a
                href="tel:0756902112"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                 className="btn-apple flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-apple-lg"
              >
                <Phone className="w-6 h-6" />
                <span>Appeler maintenant</span>
              </motion.a>
              
              <div className="text-center">
                 <div className="text-3xl font-bold text-yellow-400 mb-2">
                  07 56 90 21 12
                </div>
                <div className="text-white/60 text-lg">
                  Appel gratuit
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-white/60 text-lg">
              © {currentYear} SERRURIER FRANÇAIS.com - Tous droits réservés
            </div>
            
            <div className="flex space-x-8 text-lg">
              <a href="#mentions-legales" className="text-white/60 hover:text-white transition-colors duration-300">
                Mentions légales
              </a>
              <a href="#politique-confidentialite" className="text-white/60 hover:text-white transition-colors duration-300">
                Politique de confidentialité
              </a>
              <a href="#cookies" className="text-white/60 hover:text-white transition-colors duration-300">
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
