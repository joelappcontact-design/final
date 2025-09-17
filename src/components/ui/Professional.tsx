'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Star, Award, Shield, Clock, Users } from 'lucide-react';

export default function Professional() {
  const certifications = [
    { name: 'Certification Qualibat', level: 'RGE' },
    { name: 'Assurance Professionnelle', level: '10M€' },
    { name: 'Formation Continue', level: 'Annuelle' },
    { name: 'Agrément Préfecture', level: 'Valide' },
  ];

  const stats = [
    { number: '15+', label: 'Années d\'expérience', icon: Award },
    { number: '5000+', label: 'Interventions réussies', icon: CheckCircle },
    { number: '98%', label: 'Clients satisfaits', icon: Star },
    { number: '30min', label: 'Temps d\'intervention moyen', icon: Clock },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Sécurité Garantie',
      description: 'Tous nos techniciens sont certifiés et assurés. Votre sécurité est notre priorité absolue.',
    },
    {
      icon: Clock,
      title: 'Réactivité',
      description: 'Intervention en 30-45 minutes maximum, 24h/24, 7j/7, y compris les jours fériés.',
    },
    {
      icon: Users,
      title: 'Équipe Qualifiée',
      description: 'Plus de 200 techniciens professionnels formés aux dernières techniques de serrurerie.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Engagement qualité avec garantie sur toutes nos interventions et pièces installées.',
    },
  ];

  return (
    <section className="bg-white">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6">Professionnalisme & Excellence</h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            Une entreprise de serrurerie reconnue pour son professionnalisme, 
            sa réactivité et son engagement qualité en Île-de-France
          </p>
        </motion.div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-zinc-50 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-zinc-900 mb-2">{stat.number}</div>
              <div className="text-sm text-zinc-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-zinc-900 text-center mb-8">Nos Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-zinc-50 to-zinc-100 p-6 rounded-2xl text-center border border-zinc-200">
                <div className="w-16 h-16 bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-zinc-900 mb-2">{cert.name}</h4>
                <p className="text-sm text-[#1e3a8a] font-medium">{cert.level}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Valeurs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-zinc-900 text-center mb-12">Nos Valeurs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex items-start space-x-4 p-6 bg-zinc-50 rounded-2xl hover:bg-zinc-100 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] rounded-xl flex items-center justify-center flex-shrink-0">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-zinc-900 mb-3">{value.title}</h4>
                  <p className="text-zinc-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Professionnel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Faites confiance à des professionnels</h3>
            <p className="text-lg mb-6 opacity-90">
              Rejoignez les milliers de clients qui nous font confiance pour leurs besoins de serrurerie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+33756902112"
                className="bg-white text-[#1e3a8a] px-8 py-3 rounded-xl font-semibold hover:bg-zinc-100 transition-colors duration-300"
              >
                07 56 90 21 12
              </a>
              <a
                href="https://wa.me/+33756902112"
                className="bg-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
