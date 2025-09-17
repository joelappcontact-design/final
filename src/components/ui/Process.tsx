'use client';

import { motion } from 'framer-motion';
import { Phone, Clock, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: "1. Appel",
    description: "Contactez-nous par téléphone ou WhatsApp",
    detail: "Réponse immédiate, devis gratuit en 2 minutes"
  },
  {
    icon: Clock,
    title: "2. Intervention",
    description: "Arrivée sur site en 30-45 minutes",
    detail: "Technicien certifié avec tout le matériel nécessaire"
  },
  {
    icon: CheckCircle,
    title: "3. Résolution",
    description: "Problème résolu, facturation transparente",
    detail: "Garantie sur l'intervention, satisfaction garantie"
  }
];

export default function Process() {
  return (
    <section id="process" className="bg-zinc-50">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Un processus simple et efficace en 3 étapes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              {/* Ligne de connexion */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] transform translate-x-8"></div>
              )}
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-lg text-zinc-600 mb-3">
                  {step.description}
                </p>
                
                <p className="text-sm text-zinc-500">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
