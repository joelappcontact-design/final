'use client';

import { motion } from 'framer-motion';
import { Users, Clock, Shield, CheckCircle } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    number: '25 000+',
    label: 'Clients satisfaits'
  },
  {
    icon: <Clock className="w-8 h-8 text-green-600" />,
    number: '15+',
    label: 'Années d\'expérience'
  },
  {
    icon: <Shield className="w-8 h-8 text-yellow-600" />,
    number: '75+',
    label: 'Techniciens experts'
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-red-600" />,
    number: '50 000+',
    label: 'Interventions réussies'
  }
];

const Stats = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-headline text-gray-900 mb-6">
            Des chiffres qui parlent
          </h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            Plus de 15 ans d'excellence au service de l'Île-de-France
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;