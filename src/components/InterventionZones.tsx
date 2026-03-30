'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

const zones = [
  'Paris', 'Meaux', 'Melun', 'Chelles', 'Champs-sur-Marne', 'Torcy',
  'Lagny-sur-Marne', 'Fontainebleau', 'Provins', 'Coulommiers',
  'Nogent-sur-Seine', 'Montereau-Fault-Yonne', 'Nemours', 'Brie-Comte-Robert',
  'Savigny-le-Temple', 'Combs-la-Ville', 'Villeparisis', 'Mitry-Mory',
  'Dammartin-en-Goële', 'Lizy-sur-Ourcq', 'La Ferté-sous-Jouarre',
  'Château-Landon', 'Moret-sur-Loing', 'Donnemarie-Dontilly'
];

const InterventionZones = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-headline text-gray-900 mb-6">
            Intervention dans toute l'Île-de-France
          </h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            Nous couvrons tous les départements d'Île-de-France
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {zones.map((zone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="text-center group cursor-pointer"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-200">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{zone}</h3>
              
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>Intervention en 30–45 min</span>
              </div>
              
              <div className="mt-4 text-sm text-blue-600 font-medium group-hover:text-blue-700">
                Cliquez pour voir les détails
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterventionZones;