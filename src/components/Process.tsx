'use client';

import { motion } from 'framer-motion';
import { Phone, Clock, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: <Phone className="w-8 h-8 text-blue-600" />,
    title: 'Appelez-nous',
    description: 'Expliquez votre situation et recevez un devis immédiat par téléphone'
  },
  {
    number: '2',
    icon: <Clock className="w-8 h-8 text-green-600" />,
    title: 'Intervention rapide',
    description: 'Un technicien expert se rend sur place en moins de 30 minutes'
  },
  {
    number: '3',
    icon: <CheckCircle className="w-8 h-8 text-yellow-600" />,
    title: 'Problème résolu',
    description: 'Ouverture sécurisée ou remplacement de serrure immédiat'
  }
];

const Process = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-headline text-gray-900 mb-6">
            Comment ça marche ?
          </h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            Un processus simple et efficace en 3 étapes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              {/* Numéro d'étape */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                {step.number}
              </div>
              
              <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-6 mt-4">
                {step.icon}
              </div>
              
              <h3 className="text-title text-gray-900 mb-4">{step.title}</h3>
              <p className="text-body text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;