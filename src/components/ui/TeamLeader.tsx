'use client';

import { motion } from 'framer-motion';
import { Award, Users, Clock, Shield } from 'lucide-react';

export default function TeamLeader() {
  return (
    <section id="apropos" className="bg-zinc-50">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6">À Propos de Nous</h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">Découvrez notre équipe et notre engagement pour un service d'excellence</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo et présentation */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <div className="relative mb-8">
                <div className="w-64 h-64 mx-auto lg:mx-0 bg-gradient-to-br from-[#1e3a8a] to-[#60a5fa] rounded-3xl flex items-center justify-center shadow-2xl">
                  <div className="w-60 h-60 bg-white rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-[#1e3a8a] to-[#60a5fa] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-12 w-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-900">Alexandre MARINO</h3>
                      <p className="text-lg text-[#1e3a8a] font-semibold">Chef d'Équipe</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] rounded-full flex items-center justify-center shadow-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Contenu */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-bold text-zinc-900 mb-4">Alexandre MARINO</h3>
                  <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                    À la tête de notre équipe de serruriers professionnels, Alexandre MARINO dirige avec expertise 
                    et passion l'ensemble de nos interventions en Île-de-France. Fort de plus de 15 ans d'expérience 
                    dans le domaine de la serrurerie, il coordonne une équipe de plus de 200 techniciens certifiés 
                    pour garantir un service d'excellence 24h/24.
                  </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm border border-zinc-100">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 mb-1">15+ ans d'expérience</h4>
                    <p className="text-sm text-zinc-600">Expertise reconnue dans le domaine</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm border border-zinc-100">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 mb-1">Équipe de 200+ techniciens</h4>
                    <p className="text-sm text-zinc-600">Professionnels certifiés</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm border border-zinc-100">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 mb-1">Disponible 24h/24</h4>
                    <p className="text-sm text-zinc-600">Coordination en temps réel</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm border border-zinc-100">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 mb-1">Garantie qualité</h4>
                    <p className="text-sm text-zinc-600">Interventions certifiées</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] rounded-2xl text-white">
                <blockquote className="text-lg italic leading-relaxed">
                  "Notre engagement est simple : offrir à chaque client une intervention rapide, 
                  professionnelle et transparente. Chaque technicien de notre équipe partage cette 
                  vision d'excellence qui fait notre réputation."
                </blockquote>
                <cite className="block mt-4 text-right font-semibold">— Alexandre MARINO</cite>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
