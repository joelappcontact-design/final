'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin, Clock, Shield, Award } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-10 h-10" />,
      title: 'Appel direct',
      description: 'Disponible 24h/24',
      action: '07 56 90 21 12',
      href: 'tel:0756902112',
      primary: true,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-500'
    },
    {
      icon: <MessageCircle className="w-10 h-10" />,
      title: 'WhatsApp',
      description: 'Réponse rapide',
      action: 'Envoyer un message',
      href: 'https://wa.me/0756902112',
      primary: false,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500'
    },
    {
      icon: <Mail className="w-10 h-10" />,
      title: 'Email',
      description: 'Réponse sous 2h',
      action: 'contact@serrurierfrancais.com',
      href: 'mailto:contact@serrurierfrancais.com',
      primary: false,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-500'
    }
  ];

  const zones = [
    'Paris', 'Boulogne-Billancourt', 'Nanterre', 'Asnières-sur-Seine',
    'Colombes', 'Courbevoie', 'Levallois-Perret', 'Neuilly-sur-Seine',
    'Puteaux', 'Suresnes', 'Clichy', 'Saint-Denis', 'Aubervilliers',
    'Pantin', 'Montreuil', 'Bagnolet', 'Les Lilas', 'Le Pré-Saint-Gervais'
  ];

  const guarantees = [
    {
      icon: <Shield className="w-8 h-8" />,
      text: 'Artisans certifiés'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      text: 'Intervention 30-45 min'
    },
    {
      icon: <Award className="w-8 h-8" />,
      text: 'Garantie 2 ans'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Contactez-nous
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Besoin d'une intervention ? Nous sommes là pour vous aider 24h/24
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className={`group bg-white rounded-3xl p-10 transition-all duration-500 border-2 ${
                method.primary 
                  ? 'border-yellow-400 shadow-2xl hover:shadow-3xl' 
                  : 'border-gray-200 hover:border-gray-300 shadow-xl hover:shadow-2xl'
              }`}
            >
              {/* Icon */}
              <div className={`w-24 h-24 ${method.bgColor} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {method.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {method.title}
              </h3>
              
              <p className="text-gray-600 mb-8 text-xl">
                {method.description}
              </p>

              <motion.a
                href={method.href}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`inline-flex items-center justify-center w-full px-8 py-5 rounded-xl font-bold text-xl transition-all duration-300 ${
                  method.primary
                    ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900 shadow-lg hover:shadow-xl'
                    : `bg-gradient-to-r ${method.color} text-white shadow-lg hover:shadow-xl`
                }`}
              >
                {method.action}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Nos Garanties
            </h3>
            <p className="text-xl text-gray-600">
              Un service de qualité avec des garanties solides
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center space-x-4 bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="text-blue-600">
                  {guarantee.icon}
                </div>
                <span className="text-xl font-semibold text-gray-900">
                  {guarantee.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Zones d'intervention */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h3 className="text-5xl font-bold text-gray-900 mb-8">
            Zones d'intervention
          </h3>
          <p className="text-xl text-gray-600 mb-12">
            Nous intervenons dans toute l'Île-de-France
          </p>
          
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {zones.map((zone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  viewport={{ once: true }}
                  className="bg-white hover:bg-blue-50 rounded-xl px-6 py-4 text-center transition-colors duration-300 border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md"
                >
                  <span className="text-gray-700 font-semibold text-lg">{zone}</span>
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
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-16 text-white">
            <h3 className="text-5xl md:text-6xl font-bold mb-8">
              🚨 URGENCE ?
            </h3>
            <p className="text-2xl text-red-100 mb-10 max-w-4xl mx-auto">
              Intervention en 30-45 minutes partout en Île-de-France
            </p>
            <motion.a
              href="tel:0756902112"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-5 rounded-2xl font-bold text-3xl transition-all duration-300 shadow-2xl hover:shadow-3xl"
            >
              <Phone className="w-10 h-10" />
              <span>07 56 90 21 12</span>
            </motion.a>
            <div className="mt-6 text-red-100 text-xl">
              Appel gratuit • Réponse immédiate
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;