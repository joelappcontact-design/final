'use client';

import { motion } from 'framer-motion';
import { Key, Wrench, Shield, Clock } from 'lucide-react';

const services = [
  {
    icon: Key,
    title: "Ouverture de porte",
    description: "Dépannage rapide 24h/24",
    price: "À partir de 39€"
  },
  {
    icon: Shield,
    title: "Changement de cylindre",
    description: "Sécurité renforcée",
    price: "Devis gratuit"
  },
  {
    icon: Wrench,
    title: "Réparation serrure",
    description: "Maintenance professionnelle",
    price: "Devis gratuit"
  },
  {
    icon: Clock,
    title: "Urgence 24h/24",
    description: "Service continu",
    price: "Intervention rapide"
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-zinc-50">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Des solutions complètes pour tous vos besoins de serrurerie
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-all duration-300 group"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                  {service.title}
                </h3>
                
                <p className="text-sm text-zinc-600 mb-3">
                  {service.description}
                </p>

                <div className="text-sm font-medium text-[#1e3a8a]">
                  {service.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
