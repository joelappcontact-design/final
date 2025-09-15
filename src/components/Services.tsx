'use client';

import { motion } from 'framer-motion';
import { Key, Lock, Shield, ArrowRight, Phone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Key className="w-10 h-10" />,
      title: 'Ouverture de porte',
      description: 'Déblocage rapide et sécurisé de tous types de serrures',
      price: 'À partir de 39€',
      features: ['Serrure bloquée', 'Clé cassée', 'Urgence 24h/24'],
      cta: 'Appeler pour ouverture'
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: 'Changement de serrure',
      description: 'Remplacement et installation de nouvelles serrures',
      price: 'À partir de 89€',
      features: ['Sécurité renforcée', 'Clés multiples', 'Garantie 2 ans'],
      cta: 'Demander un devis'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Sécurisation',
      description: 'Renforcement de la sécurité de votre habitation',
      price: 'Sur devis',
      features: ['Diagnostic sécurité', 'Solutions sur mesure', 'Devis gratuit'],
      cta: 'Appeler pour devis'
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
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
            Nos Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des solutions complètes pour tous vos problèmes de serrurerie en Île-de-France
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl p-8 transition-all duration-500 shadow-lg hover:shadow-2xl border border-gray-100"
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="space-y-4">
                <div className="text-3xl font-bold text-blue-600">
                  {service.price}
                </div>
                <motion.a
                  href="tel:0756902112"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl w-full"
                >
                  <Phone className="w-5 h-5" />
                  <span>{service.cta}</span>
                </motion.a>
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
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Besoin d'une intervention ?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Appelez-nous maintenant pour une intervention rapide en Île-de-France
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="tel:0756902112"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-3xl"
              >
                <Phone className="w-6 h-6" />
                <span>07 56 90 21 12</span>
              </motion.a>
              <div className="text-blue-100 text-lg">
                Appel gratuit • 24h/24
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;