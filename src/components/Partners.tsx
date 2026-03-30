'use client';

import { motion } from 'framer-motion';
import { Shield, Wrench } from 'lucide-react';

const insurancePartners = [
  'AXA', 'Groupama', 'MAIF', 'MACIF', 'Allianz', 'Generali',
  'Crédit Agricole', 'BNP Paribas', 'SMA', 'Matmut', 'GMF', 'Covéa', 'Swiss Life'
];

const technicalPartners = [
  'ABUS', 'Bricard', 'CISA', 'DOM', 'Fichet', 'Héraclès',
  'ISEO', 'JPM', 'Mottura', 'Vachette'
];

const Partners = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-apple">
        {/* Partenaires assurance */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-headline text-gray-900 mb-6">
              Partenaires assurance
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Nous travaillons avec les principales compagnies d'assurance pour vous offrir les meilleures garanties
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {insurancePartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span className="text-lg font-semibold text-gray-700">{partner}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Shield className="w-5 h-5" />
              <span className="text-sm">Tous nos artisans sont assurés et certifiés</span>
            </div>
          </div>
        </motion.div>

        {/* Partenaires techniques */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-headline text-gray-900 mb-6">
              Nos partenaires techniques
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Nous travaillons avec les meilleures marques de serrurerie pour garantir la qualité
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {technicalPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span className="text-sm font-medium text-gray-700">{partner}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Wrench className="w-5 h-5" />
              <span className="text-sm">Marques de confiance pour tous nos travaux</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;