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
     <section className="py-32 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
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
        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto mb-16">
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
                whileHover={{ scale: 1.05, y: -8 }}
                 className="glass text-center p-8 rounded-3xl hover:bg-blue-500/20 transition-all duration-500 shadow-apple"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-apple">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-white/80 text-lg">
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
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto mb-16">
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
                whileHover={{ scale: 1.05, y: -12 }}
                className="glass rounded-3xl shadow-apple-lg hover:shadow-apple-lg transition-all duration-500 overflow-hidden border border-white/20"
              >
                <div className="p-10">
                  <div className="flex justify-center mb-8">
                     <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center text-white shadow-apple">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-6">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/80 mb-8 text-lg">
                    {service.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-4">
                         <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                        <span className="text-white/90 text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                     <div className="text-4xl font-bold text-yellow-400 mb-6">
                      {service.price}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                       className="btn-apple w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 px-8 rounded-2xl font-semibold text-lg shadow-apple"
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
