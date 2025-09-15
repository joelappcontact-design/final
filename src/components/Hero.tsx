'use client';

import { useState, useEffect } from 'react';
import { Phone, Clock, Shield, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';
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

  const stats = [
    {
      icon: <Users className="w-12 h-12" />,
      number: '25 000+',
      label: 'Clients satisfaits'
    },
    {
      icon: <Award className="w-12 h-12" />,
      number: '15+',
      label: 'Années d\'expérience'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      number: '75+',
      label: 'Techniciens experts'
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      number: '50 000+',
      label: 'Interventions réussies'
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Header Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 mb-16"
        >
          <div className="flex items-center space-x-3">
            <Clock className="w-6 h-6 text-yellow-300" />
            <span className="text-lg font-semibold">30-45 min</span>
          </div>
          <div className="flex items-center space-x-3">
            <Shield className="w-6 h-6 text-yellow-300" />
            <span className="text-lg font-semibold">Certifié</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="text-blue-200">Serrurier d'urgence</span>
            <br />
            <span className="text-pink-400">Île-de-France</span>
            <br />
            <span className="text-white">24h/24</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-blue-100 mb-6 max-w-4xl mx-auto">
            Intervention rapide • Artisans vérifiés • Prix transparents
          </div>
          
          <div className="text-3xl md:text-4xl font-bold text-yellow-300">
            Arrivée en 30-45 min
          </div>
        </motion.div>

        {/* Price Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-blue-500/90 backdrop-blur-sm rounded-3xl px-12 py-8 shadow-2xl">
            <div className="text-white text-xl mb-3">À partir de</div>
            <div className="text-5xl md:text-6xl font-bold text-yellow-300">39€</div>
            <div className="text-white text-lg mt-3">Ouverture de porte simple</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
        >
          <motion.a
            href="tel:0756902112"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-2xl transition-all duration-300 flex items-center gap-4 shadow-2xl hover:shadow-3xl w-full sm:w-auto justify-center"
          >
            <Phone className="w-7 h-7" />
            <span>Appeler 07 56 90 21 12</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-semibold text-2xl transition-all duration-300 w-full sm:w-auto"
          >
            07 56 90 21 12
          </motion.button>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Des chiffres qui parlent
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Plus de 15 ans d'excellence au service de l'Île-de-France
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ y: -12 }}
                className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-yellow-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-lg font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-blue-800/50 backdrop-blur-sm rounded-3xl p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Intervention rapide</h3>
              <p className="text-blue-100 text-lg">En 30-45 min</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Artisans vérifiés</h3>
              <p className="text-blue-100 text-lg">Certifiés & assurés</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-purple-500 rounded-full flex items-center justify-center">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Disponible 24h/24</h3>
              <p className="text-blue-100 text-lg">7j/7, 365j/an</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;