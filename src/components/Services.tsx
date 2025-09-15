'use client';

import { motion } from 'framer-motion';
import { Key, Lock, Shield, Clock, CheckCircle, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Key className="w-12 h-12 text-primary-600" />,
      title: 'Ouverture de porte',
      description: 'Déblocage rapide et sécurisé de tous types de serrures',
      features: ['Serrure bloquée', 'Clé cassée', 'Urgence 24h/24'],
      price: 'À partir de 39€'
    },
    {
      icon: <Lock className="w-12 h-12 text-primary-600" />,
      title: 'Changement de serrure',
      description: 'Remplacement et installation de nouvelles serrures',
      features: ['Sécurité renforcée', 'Clés multiples', 'Garantie 2 ans'],
      price: 'À partir de 89€'
    },
    {
      icon: <Shield className="w-12 h-12 text-primary-600" />,
      title: 'Sécurisation',
      description: 'Renforcement de la sécurité de votre habitation',
      features: ['Diagnostic sécurité', 'Solutions sur mesure', 'Devis gratuit'],
      price: 'Sur devis'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Clock className="w-8 h-8 text-primary-600" />,
      title: 'Intervention rapide',
      description: 'Arrivée en 30-45 minutes partout en Île-de-France'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary-600" />,
      title: 'Artisans certifiés',
      description: 'Professionnels vérifiés et assurés'
    },
    {
      icon: <Star className="w-8 h-8 text-primary-600" />,
      title: 'Service 24h/24',
      description: 'Disponible tous les jours de l\'année'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Des professionnels à votre service pour tous vos besoins en serrurerie
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Des solutions complètes pour tous vos problèmes de serrurerie
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-4">
                      {service.price}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-primary-500 to-primary-700 text-white py-3 px-6 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Demander un devis
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
