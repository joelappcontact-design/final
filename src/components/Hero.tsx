'use client';

import { useState, useEffect } from 'react';
import { Phone, ArrowRight, Clock, Shield, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [currentCity, setCurrentCity] = useState('Paris');
  const cities = ['Paris', 'Boulogne-Billancourt', 'Nanterre', 'Asnières-sur-Seine', 'Colombes', 'Courbevoie'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCity(prev => {
        const currentIndex = cities.indexOf(prev);
        return cities[(currentIndex + 1) % cities.length];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20 pb-16">
        <div className="text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
              </div>
              <span className="text-lg font-semibold">Serrurier Français</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              Serrurier d'urgence
            </h1>
            <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-yellow-300">
              à {currentCity}
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Intervention 24h/24 • Artisans vérifiés • 30-45 min
          </motion.p>

          {/* Price Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <div className="inline-block bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-2xl">
              <span className="text-2xl md:text-3xl font-bold text-gray-800">
                À partir de <span className="text-blue-600">39€</span>
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href="tel:0756902112"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-3xl w-full sm:w-auto justify-center"
            >
              <Phone className="w-6 h-6" />
              <span>Appeler maintenant</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-xl transition-all duration-300 w-full sm:w-auto"
            >
              Voir le numéro
            </motion.button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: 'Intervention rapide',
                description: '30-45 minutes'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Artisans certifiés',
                description: 'Professionnels vérifiés'
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: 'Service 24h/24',
                description: 'Disponible tous les jours'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center group hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-yellow-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-blue-100 text-lg">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;