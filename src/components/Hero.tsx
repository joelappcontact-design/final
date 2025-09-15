'use client';

import { useState, useEffect } from 'react';
import { Phone, Clock, Shield, Star, ChevronDown, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [currentCity, setCurrentCity] = useState('Paris');
  const cities = ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCity(prev => {
        const currentIndex = cities.indexOf(prev);
        return cities[(currentIndex + 1) % cities.length];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
       icon: <Clock className="w-6 h-6 text-blue-400" />,
      title: 'Intervention rapide',
      description: '30-45 minutes'
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: 'Artisans certifiés',
      description: 'Professionnels vérifiés'
    },
    {
      icon: <Star className="w-6 h-6 text-blue-400" />,
      title: 'Service 24h/24',
      description: 'Disponible tous les jours'
    }
  ];

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background Gradient */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
             className="absolute w-3 h-3 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -120, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        
        {/* Floating geometric elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
             className="absolute w-16 h-16 border border-blue-400/10 rounded-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Logo and Brand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
             <div className="glass rounded-3xl p-8 shadow-apple-lg">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-apple">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">SERRURIER FRANÇAIS</h2>
                <p className="text-blue-200 text-sm">.com</p>
              </div>
            </div>
          </motion.div>

          {/* Main Title */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white tracking-tight"
            >
              Serrurier d'urgence
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white/90"
            >
               à <span className="text-yellow-400 animate-pulse-slow font-bold">{currentCity}</span>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl sm:text-2xl lg:text-3xl text-white/80 max-w-4xl mx-auto font-light"
          >
            Intervention 24h/24 • Artisans vérifiés • 30-45 min
          </motion.p>

          {/* Price Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="inline-block"
          >
             <div className="glass rounded-full px-12 py-6 border-2 border-yellow-400/30 shadow-apple">
              <span className="text-3xl sm:text-4xl font-bold text-white">
                À partir de <span className="text-yellow-400">39€</span>
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a
              href="tel:0756902112"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
               className="btn-apple flex items-center space-x-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-apple-lg animate-glow"
            >
              <Phone className="w-7 h-7" />
              <span>Appeler maintenant</span>
              <Sparkles className="w-5 h-5" />
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass text-white px-12 py-6 rounded-2xl font-semibold text-xl hover:bg-white/20 transition-all duration-300 shadow-apple"
            >
              Voir le numéro
            </motion.button>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 + index * 0.2 }}
                whileHover={{ scale: 1.05, y: -8 }}
                 className="glass rounded-3xl p-8 text-center hover:bg-blue-500/20 transition-all duration-500 shadow-apple"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-apple">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-lg">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/60"
            >
              <ChevronDown className="w-8 h-8" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
