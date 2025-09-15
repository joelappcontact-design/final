'use client';

import { motion } from 'framer-motion';
import { Key, Lock, Shield, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Key className="w-8 h-8" />,
      title: 'Ouverture de porte',
      description: 'Déblocage rapide et sécurisé de tous types de serrures',
      price: 'À partir de 39€',
      features: ['Serrure bloquée', 'Clé cassée', 'Urgence 24h/24']
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Changement de serrure',
      description: 'Remplacement et installation de nouvelles serrures',
      price: 'À partir de 89€',
      features: ['Sécurité renforcée', 'Clés multiples', 'Garantie 2 ans']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Sécurisation',
      description: 'Renforcement de la sécurité de votre habitation',
      price: 'Sur devis',
      features: ['Diagnostic sécurité', 'Solutions sur mesure', 'Devis gratuit']
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
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
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Des solutions complètes pour tous vos problèmes de serrurerie en Île-de-France
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-gray-50 hover:bg-white rounded-3xl p-8 transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-medium text-black mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="flex items-center justify-between">
                <div className="text-2xl font-semibold text-black">
                  {service.price}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                >
                  <span>En savoir plus</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-black rounded-3xl p-12">
            <h3 className="text-3xl font-medium text-white mb-4">
              Besoin d'une intervention ?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Appelez-nous maintenant pour une intervention rapide
            </p>
            <motion.a
              href="tel:0756902112"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>07 56 90 21 12</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;