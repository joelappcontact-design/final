'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PartnersBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const partners = [
    { name: 'Bricard', logo: '/assets/partners/bricard.svg' },
    { name: 'Fichet', logo: '/assets/partners/fichet.svg' },
    { name: 'Héraclès', logo: '/assets/partners/heracles.svg' },
    { name: 'Motura', logo: '/assets/partners/motura.svg' },
    { name: 'Vachette', logo: '/assets/partners/vachette.svg' },
    { name: 'ABUS', logo: '/assets/partners/abus.svg' },
    { name: 'CISA', logo: '/assets/partners/cisa.svg' },
    { name: 'ISEO', logo: '/assets/partners/iseo.svg' },
    { name: 'JPM', logo: '/assets/partners/jpm.svg' },
    { name: 'Dom-IX', logo: '/assets/partners/dom-ix.svg' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [partners.length]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Partenaires Matériel
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous travaillons avec les plus grandes marques de serrurerie pour vous garantir la qualité
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-8 items-center justify-center"
            animate={{
              x: -currentIndex * 200,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                whileHover={{ 
                  scale: 1.1,
                  filter: 'brightness(1.1) drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))'
                }}
                className="flex-shrink-0 w-48 h-24 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    {partner.name}
                  </div>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersBanner;
