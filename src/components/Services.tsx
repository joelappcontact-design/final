'use client';

import { motion } from 'framer-motion';
import { Key, Shield, Clock, Star, MapPin, Award } from 'lucide-react';

const services = [
  {
    icon: Key,
    title: 'Ouverture de porte',
    description: 'Intervention rapide 24h/24',
    price: 'À partir de 39€'
  },
  {
    icon: Shield,
    title: 'Changement de serrure',
    description: 'Sécurité renforcée',
    price: 'À partir de 89€'
  },
  {
    icon: Clock,
    title: 'Intervention d\'urgence',
    description: 'Arrivée en 30-45 min',
    price: 'Devis gratuit'
  }
];

const features = [
  {
    icon: Star,
    title: 'Artisans certifiés',
    description: 'Professionnels vérifiés et assurés'
  },
  {
    icon: MapPin,
    title: 'Toute l\'Île-de-France',
    description: 'Intervention dans tous les départements'
  },
  {
    icon: Award,
    title: 'Garantie satisfaction',
    description: 'Service de qualité garanti'
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-apple">
        <div className="text-center mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-headline text-gray-900 mb-12"
          >
            Nos services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body text-gray-600 max-w-2xl mx-auto"
          >
            Des solutions complètes pour tous vos besoins de serrurerie
          </motion.p>
        </div>

        {/* Services avec prix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <service.icon className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-title text-gray-900 mb-8">{service.title}</h3>
              <p className="text-body text-gray-600 mb-8">{service.description}</p>
              <div className="text-3xl font-black bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent">{service.price}</div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-title text-gray-900 mb-8">{feature.title}</h3>
              <p className="text-body text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;