'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Appel direct',
      description: 'Disponible 24h/24',
      action: '07 56 90 21 12',
      href: 'tel:0756902112',
      primary: true
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'WhatsApp',
      description: 'Réponse rapide',
      action: 'Envoyer un message',
      href: 'https://wa.me/0756902112',
      primary: false
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      description: 'Réponse sous 2h',
      action: 'contact@serrurierfrancais.com',
      href: 'mailto:contact@serrurierfrancais.com',
      primary: false
    }
  ];

  const zones = [
    'Paris', 'Boulogne-Billancourt', 'Nanterre', 'Asnières-sur-Seine',
    'Colombes', 'Courbevoie', 'Levallois-Perret', 'Neuilly-sur-Seine',
    'Puteaux', 'Suresnes', 'Clichy', 'Saint-Denis', 'Aubervilliers',
    'Pantin', 'Montreuil', 'Bagnolet', 'Les Lilas', 'Le Pré-Saint-Gervais'
  ];

  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-thin text-black mb-6">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Besoin d'une intervention ? Nous sommes là pour vous aider 24h/24
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`group bg-white rounded-3xl p-8 transition-all duration-500 border ${
                method.primary 
                  ? 'border-blue-200 shadow-lg hover:shadow-xl' 
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
              }`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                method.primary 
                  ? 'bg-blue-600' 
                  : 'bg-gray-100 group-hover:bg-gray-200'
              } transition-colors duration-300`}>
                <div className={method.primary ? 'text-white' : 'text-gray-600'}>
                  {method.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-medium text-black mb-3">
                {method.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {method.description}
              </p>

              <motion.a
                href={method.href}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  method.primary
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
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
          className="text-center"
        >
          <h3 className="text-3xl font-thin text-black mb-8">
            Zones d'intervention
          </h3>
          <p className="text-gray-600 mb-12 text-lg">
            Nous intervenons dans toute l'Île-de-France
          </p>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {zones.map((zone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 hover:bg-gray-100 rounded-xl px-4 py-3 text-center transition-colors duration-300"
                >
                  <span className="text-gray-700 font-medium">{zone}</span>
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
          className="mt-20 text-center"
        >
          <div className="bg-black rounded-3xl p-12">
            <h3 className="text-3xl font-medium text-white mb-4">
              Urgence ?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Intervention en 30-45 minutes partout en Île-de-France
            </p>
            <motion.a
              href="tel:0756902112"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium text-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-6 h-6" />
              <span>07 56 90 21 12</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;