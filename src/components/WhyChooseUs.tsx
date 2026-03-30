'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Clock, Shield, Award, Users, Phone } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'Intervention rapide',
    description: 'Arrivée en 30-45 minutes',
    highlight: '24h/24'
  },
  {
    icon: Shield,
    title: 'Artisans certifiés',
    description: 'Professionnels vérifiés et assurés',
    highlight: '100% sécurisé'
  },
  {
    icon: Award,
    title: 'Prix transparents',
    description: 'Devis gratuit, pas de surprise',
    highlight: 'À partir de 39€'
  },
  {
    icon: Users,
    title: 'Service client',
    description: 'Accompagnement personnalisé',
    highlight: 'Disponible 24h/24'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-apple">
        <div className="text-center mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-headline text-gray-900 mb-12"
          >
            Pourquoi nous choisir ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body text-gray-600 max-w-2xl mx-auto"
          >
            Des professionnels de confiance pour tous vos besoins de serrurerie
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <reason.icon className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-title text-gray-900 mb-8">{reason.title}</h3>
              <p className="text-body text-gray-600 mb-8">{reason.description}</p>
              <div className="inline-block bg-gradient-to-r from-blue-900 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {reason.highlight}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA avec statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-3xl p-12 text-center text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="text-5xl font-black mb-4">24/7</div>
              <div className="text-blue-200 font-bold text-lg">Disponible</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-4">30min</div>
              <div className="text-blue-200 font-bold text-lg">Délai moyen</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-4">100%</div>
              <div className="text-blue-200 font-bold text-lg">Satisfaction</div>
            </div>
          </div>
          <a 
            href="tel:0756902112"
            className="inline-flex items-center space-x-3 bg-white text-blue-900 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Phone className="w-5 h-5" />
            <span>Appeler maintenant</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;