'use client';

import { motion } from 'framer-motion';
import { Phone, Key, Shield, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen bg-white flex items-center justify-center pt-48">
      <div className="container-apple">
        <div className="text-center max-w-4xl mx-auto">
          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-display text-gray-900 mb-8"
          >
            Serrurier d'urgence
            <br />
            <span className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-clip-text text-transparent">
              Île-de-France
            </span>
          </motion.h1>

          {/* Prix principal */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-headline text-gray-900 mb-8"
          >
            Ouverture de porte à partir de <span className="bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent">39€</span>
          </motion.h2>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-body text-gray-600 mb-24 max-w-2xl mx-auto"
          >
            Intervention rapide 24h/24 • Artisans certifiés • Prix transparents
          </motion.p>

          {/* Services simples */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Key className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-title text-gray-900 mb-6">Ouverture de porte</h3>
              <p className="text-body text-gray-600">Intervention rapide 24h/24</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-title text-gray-900 mb-6">Changement de serrure</h3>
              <p className="text-body text-gray-600">Sécurité renforcée</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-title text-gray-900 mb-6">Intervention d'urgence</h3>
              <p className="text-body text-gray-600">Arrivée en 30-45 min</p>
            </motion.div>
          </div>

          {/* CTA principal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center"
          >
            <a 
              href="tel:0756902112"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-900 to-blue-700 text-white px-12 py-6 rounded-2xl font-semibold text-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Phone className="w-6 h-6" />
              <span>Appeler 07 56 90 21 12</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;