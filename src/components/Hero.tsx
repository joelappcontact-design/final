'use client';

import { useState, useEffect } from 'react';
import { Phone, ArrowRight, Shield, Clock, Star } from 'lucide-react';
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
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center">
          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-thin tracking-tight mb-4">
              Serrurier d'urgence
            </h1>
            <div className="text-2xl md:text-3xl font-light text-gray-300">
              à <span className="text-white font-medium">{currentCity}</span>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 font-light mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Intervention 24h/24 • Artisans vérifiés • 30-45 min
          </motion.p>

          {/* Price */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="inline-block bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-4">
              <span className="text-3xl md:text-4xl font-light text-white">
                À partir de <span className="font-semibold text-blue-400">39€</span>
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <motion.a
              href="tel:0756902112"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span>Appeler maintenant</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
            >
              Voir le numéro
            </motion.button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
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
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                  <div className="text-blue-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-lg">
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
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;