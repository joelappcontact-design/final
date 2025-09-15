'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Appel direct',
      description: 'Disponible 24h/24',
      action: '07 56 90 21 12',
      href: 'tel:0756902112',
      primary: true,
      color: 'bg-green-500'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'WhatsApp',
      description: 'Réponse rapide',
      action: 'Envoyer un message',
      href: 'https://wa.me/0756902112',
      primary: false,
      color: 'bg-green-600'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      description: 'Réponse sous 2h',
      action: 'contact@serrurierfrancais.com',
      href: 'mailto:contact@serrurierfrancais.com',
      primary: false,
      color: 'bg-blue-500'
    }
  ];

  const zones = [
    'Paris', 'Boulogne-Billancourt', 'Nanterre', 'Asnières-sur-Seine',
    'Colombes', 'Courbevoie', 'Levallois-Perret', 'Neuilly-sur-Seine',
    'Puteaux', 'Suresnes', 'Clichy', 'Saint-Denis', 'Aubervilliers',
    'Pantin', 'Montreuil', 'Bagnolet', 'Les Lilas', 'Le Pré-Saint-Gervais'
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Besoin d'une intervention ? Nous sommes là pour vous aider 24h/24
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`group bg-white rounded-3xl p-8 transition-all duration-500 border-2 ${
                method.primary 
                  ? 'border-yellow-400 shadow-2xl hover:shadow-3xl' 
                  : 'border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                method.primary 
                  ? 'bg-yellow-400' 
                  : method.color
              } group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {method.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {method.title}
              </h3>
              
              <p className="text-gray-600 mb-6 text-lg">
                {method.description}
              </p>

              <motion.a
                href={method.href}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`inline-flex items-center justify-center w-full px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  method.primary
                    ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900 shadow-lg hover:shadow-xl'
                    : `${method.color} hover:opacity-90 text-white shadow-lg hover:shadow-xl`
                }`}
              >
                {method.action}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Zones d'intervention */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Zones d'intervention
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Nous intervenons dans toute l'Île-de-France
          </p>
          
          <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {zones.map((zone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  viewport={{ once: true }}
                  className="bg-white hover:bg-blue-50 rounded-xl px-4 py-3 text-center transition-colors duration-300 border border-gray-200 hover:border-blue-300"
                >
                  <span className="text-gray-700 font-semibold">{zone}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Urgence Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              🚨 URGENCE ?
            </h3>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Intervention en 30-45 minutes partout en Île-de-France
            </p>
            <motion.a
              href="tel:0756902112"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-2xl font-bold text-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl"
            >
              <Phone className="w-8 h-8" />
              <span>07 56 90 21 12</span>
            </motion.a>
            <div className="mt-4 text-red-100 text-lg">
              Appel gratuit • Réponse immédiate
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;