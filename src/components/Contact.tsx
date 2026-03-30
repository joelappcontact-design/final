'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Star } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-apple">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-headline text-gray-900 mb-16"
          >
            Contactez-nous
          </motion.h2>

          {/* Informations de contact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-title text-gray-900 mb-8">Téléphone</h3>
              <p className="text-body text-gray-600 font-black text-xl">07 56 90 21 12</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-title text-gray-900 mb-8">Zone d'intervention</h3>
              <p className="text-body text-gray-600 font-black text-xl">Toute l'Île-de-France</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-title text-gray-900 mb-8">Disponibilité</h3>
              <p className="text-body text-gray-600 font-black text-xl">24h/24, 7j/7</p>
            </motion.div>
          </div>

          {/* CTA principal avec prix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-3xl p-12 text-white"
          >
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-12">
                <Star className="w-8 h-8 text-yellow-400 fill-current" />
                <Star className="w-8 h-8 text-yellow-400 fill-current" />
                <Star className="w-8 h-8 text-yellow-400 fill-current" />
                <Star className="w-8 h-8 text-yellow-400 fill-current" />
                <Star className="w-8 h-8 text-yellow-400 fill-current" />
              </div>
              <h3 className="text-headline text-white mb-8">
                Ouverture de porte à partir de <span className="text-yellow-300">39€</span>
              </h3>
              <p className="text-body text-blue-100 mb-12">
                Intervention rapide • Artisans certifiés • Prix transparents
              </p>
              <a 
                href="tel:0756902112"
                className="inline-flex items-center space-x-3 bg-white text-blue-900 px-12 py-6 rounded-2xl font-semibold text-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Phone className="w-6 h-6" />
                <span>Appeler 07 56 90 21 12</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;