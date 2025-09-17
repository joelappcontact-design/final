'use client';

import { motion } from 'framer-motion';

const insurancePartners = [
  { name: "MAIF", logo: "/partners/maif.svg" },
  { name: "MACIF", logo: "/partners/macif.svg" },
  { name: "Groupama", logo: "/partners/groupama.svg" },
  { name: "AXA", logo: "/partners/axa.svg" },
  { name: "Allianz", logo: "/partners/allianz.svg" },
  { name: "Generali", logo: "/partners/generali.svg" },
  { name: "Matmut", logo: "/partners/matmut.svg" }
];

const materialPartners = [
  { name: "Fichet", logo: "/partners/fichet.svg" },
  { name: "Bricard", logo: "/partners/bricard.svg" },
  { name: "Vachette", logo: "/partners/vachette.svg" },
  { name: "JPM", logo: "/partners/jpm.svg" },
  { name: "Abus", logo: "/partners/abus.svg" },
  { name: "Héraclès", logo: "/partners/heracles.svg" },
  { name: "Pollux", logo: "/partners/pollux.svg" },
  { name: "Mul-T-Lock", logo: "/partners/multlock.svg" },
  { name: "Cisa", logo: "/partners/cisa.svg" },
  { name: "Dom", logo: "/partners/dom.svg" },
  { name: "Keso", logo: "/partners/keso.svg" },
  { name: "Iseo", logo: "/partners/iseo.svg" },
  { name: "Tesa", logo: "/partners/tesa.svg" }
];

export default function Partners() {
  return (
    <section id="zones" className="bg-white">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6">
            Zones d'Intervention
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Nous intervenons dans toute l'Île-de-France avec nos partenaires de confiance
          </p>
        </motion.div>

        {/* Partenaires Assurances */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-lg font-semibold text-zinc-700 mb-8 text-center">
            Partenaires Assurances
          </h3>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll hover:animate-pause">
              {/* Premier set */}
              {insurancePartners.map((partner, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center">
                  <div className="w-32 h-16 bg-zinc-100 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium text-zinc-600">{partner.name}</span>
                  </div>
                </div>
              ))}
              {/* Deuxième set pour continuité */}
              {insurancePartners.map((partner, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center">
                  <div className="w-32 h-16 bg-zinc-100 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium text-zinc-600">{partner.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Partenaires Matériel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-zinc-700 mb-8 text-center">
            Partenaires Matériel
          </h3>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-reverse hover:animate-pause">
              {/* Premier set */}
              {materialPartners.map((partner, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 mx-6 flex items-center justify-center">
                  <div className="w-24 h-12 bg-zinc-50 rounded-lg flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-medium text-zinc-500">{partner.name}</span>
                  </div>
                </div>
              ))}
              {/* Deuxième set pour continuité */}
              {materialPartners.map((partner, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 mx-6 flex items-center justify-center">
                  <div className="w-24 h-12 bg-zinc-50 rounded-lg flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-medium text-zinc-500">{partner.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
