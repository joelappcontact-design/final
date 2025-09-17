'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Quels sont vos tarifs ?",
    answer: "Nos tarifs commencent à 39€ pour une ouverture de porte simple. Le prix exact dépend de la complexité de l'intervention. Nous vous donnons toujours un devis gratuit et transparent avant toute intervention."
  },
  {
    question: "Êtes-vous disponibles 24h/24 ?",
    answer: "Oui, nous intervenons 24h/24, 7j/7, y compris les week-ends et jours fériés. Notre équipe est toujours prête à vous dépanner en urgence."
  },
  {
    question: "Combien de temps faut-il pour une intervention ?",
    answer: "Nous nous engageons à arriver sur site en 30-45 minutes maximum après votre appel. L'intervention elle-même dure généralement entre 15 minutes et 1 heure selon la complexité."
  },
  {
    question: "Proposez-vous des garanties ?",
    answer: "Oui, toutes nos interventions sont garanties. Nous offrons une garantie de 2 ans sur les pièces installées et 6 mois sur la main d'œuvre."
  },
  {
    question: "Travaillez-vous avec les assurances ?",
    answer: "Absolument ! Nous sommes partenaires des principales compagnies d'assurance (MAIF, MACIF, AXA, etc.) et nous nous occupons de toutes les démarches administratives."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur nos services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="border-b border-zinc-100 last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 text-left flex items-center justify-between hover:bg-zinc-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-zinc-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`h-5 w-5 text-zinc-500 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pb-6 pr-8">
                  <p className="text-zinc-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
