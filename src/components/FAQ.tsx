'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'En combien de temps intervenez-vous ?',
    answer: 'Nous intervenons en moyenne en 30–45 min selon le trafic. En cas d\'urgence, nous nous efforçons d\'arriver encore plus rapidement.'
  },
  {
    question: 'Quels sont vos tarifs ?',
    answer: 'Nos tarifs sont fixes et transparents : Ouverture simple à partir de 39€, ouverture complexe 89€, changement de cylindre 49€. Aucun frais caché.'
  },
  {
    question: 'Êtes-vous disponibles 24h/24 ?',
    answer: 'Oui, nous intervenons 24h/24, 7j/7, y compris les weekends et jours fériés. Votre urgence est notre priorité.'
  },
  {
    question: 'Vos artisans sont-ils certifiés ?',
    answer: 'Absolument ! Tous nos artisans sont certifiés, assurés et passent des vérifications de sécurité rigoureuses.'
  },
  {
    question: 'Que faire si ma porte est bloquée ?',
    answer: 'Appelez-nous immédiatement ! Ne forcez pas la porte, cela pourrait l\'endommager davantage. Nos experts sauront intervenir sans dégâts.'
  },
  {
    question: 'Acceptez-vous les paiements par carte ?',
    answer: 'Oui, nous acceptons tous les modes de paiement : espèces, carte bancaire, virement. La facture vous est envoyée automatiquement.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-headline text-gray-900 mb-6">
            Questions fréquentes
          </h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            Trouvez rapidement les réponses à vos questions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 rounded-2xl"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-blue-600" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8">
                      <p className="text-body text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;