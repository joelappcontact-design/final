'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8 text-blue-400" />,
      title: 'Appel direct',
      description: 'Disponible 24h/24',
      action: '07 56 90 21 12',
      href: 'tel:0756902112',
      primary: true
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-400" />,
      title: 'WhatsApp',
      description: 'Réponse rapide',
      action: 'Envoyer un message',
      href: 'https://wa.me/0756902112',
      primary: false
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-400" />,
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
    <section id="contact" className="py-32 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Contactez-nous
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto mb-8">
            Besoin d'une intervention ? Nous sommes là pour vous aider 24h/24
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -8 }}
              className={`glass rounded-3xl p-8 text-center hover:bg-blue-500/20 transition-all duration-500 shadow-apple ${
                method.primary ? 'ring-2 ring-blue-400/50' : ''
              }`}
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-apple">
                  {method.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">
                {method.title}
              </h3>
              
              <p className="text-white/80 mb-6 text-lg">
                {method.description}
              </p>

              <motion.a
                href={method.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`btn-apple inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl font-semibold text-lg shadow-apple ${
                  method.primary
                    ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white'
                    : 'glass text-white hover:bg-white/20'
                }`}
              >
                <span>{method.action}</span>
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Zones d'intervention */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            Zones d'intervention
          </h3>
          <p className="text-white/80 mb-12 text-lg">
            Nous intervenons dans toute l'Île-de-France
          </p>
          
          <div className="glass rounded-3xl p-8 shadow-apple">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {zones.map((zone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white/10 rounded-xl px-4 py-3 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <span className="text-white font-medium">{zone}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Urgence Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-3xl p-12 shadow-apple-lg border-2 border-yellow-400/30">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-12 h-12 text-yellow-400 mr-4" />
              <h3 className="text-3xl font-bold text-white">Urgence ?</h3>
            </div>
            <p className="text-white/80 text-xl mb-8">
              Intervention en 30-45 minutes partout en Île-de-France
            </p>
            <motion.a
              href="tel:0756902112"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-apple inline-flex items-center space-x-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-12 py-6 rounded-2xl font-bold text-2xl shadow-apple-lg animate-glow"
            >
              <Phone className="w-8 h-8" />
              <span>07 56 90 21 12</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;