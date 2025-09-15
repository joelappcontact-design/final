'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqCategories = [
    {
      title: 'Intervention & Urgences',
      items: [
        {
          question: 'Quel est le délai d\'intervention ?',
          answer: 'Nous intervenons en moyenne en 30-45 minutes partout en Île-de-France. En cas d\'urgence, nous nous efforçons d\'arriver encore plus rapidement.'
        },
        {
          question: 'Êtes-vous disponibles 24h/24 ?',
          answer: 'Oui, notre service est disponible 24h/24, 7j/7, y compris les weekends et jours fériés. Nous comprenons que les urgences de serrurerie n\'attendent pas.'
        },
        {
          question: 'Que faire si ma clé est cassée dans la serrure ?',
          answer: 'Ne tentez pas de la retirer vous-même, vous risqueriez d\'endommager la serrure. Appelez-nous immédiatement, nous avons les outils spécialisés pour extraire la clé cassée sans abîmer la serrure.'
        }
      ]
    },
    {
      title: 'Tarifs & Devis',
      items: [
        {
          question: 'Quels sont vos tarifs ?',
          answer: 'Nos tarifs commencent à 39€ pour une ouverture de porte simple. Le prix final dépend du type d\'intervention, de l\'heure et de la complexité. Nous vous fournissons toujours un devis transparent avant intervention.'
        },
        {
          question: 'Le devis est-il gratuit ?',
          answer: 'Oui, le devis est entièrement gratuit et sans engagement. Nous vous expliquons clairement les tarifs avant de commencer toute intervention.'
        },
        {
          question: 'Quels modes de paiement acceptez-vous ?',
          answer: 'Nous acceptons les paiements en espèces, par carte bancaire, chèque et virement. Un reçu vous est systématiquement remis.'
        }
      ]
    },
    {
      title: 'Services & Garanties',
      items: [
        {
          question: 'Quels types de serrures réparez-vous ?',
          answer: 'Nous intervenons sur tous types de serrures : cylindres, serrures multipoints, serrures à code, serrures électroniques, coffres-forts, etc. Nous travaillons avec toutes les marques.'
        },
        {
          question: 'Offrez-vous une garantie ?',
          answer: 'Oui, nous offrons une garantie de 2 ans sur nos installations et réparations. Cette garantie couvre les défauts de matériel et de main d\'œuvre.'
        },
        {
          question: 'Êtes-vous assurés ?',
          answer: 'Oui, nous sommes entièrement assurés pour nos interventions. Votre habitation est protégée en cas de dommage accidentel pendant notre intervention.'
        }
      ]
    }
  ];

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = categoryIndex * 100 + itemIndex;
    setOpenItems(prev => 
      prev.includes(key) 
        ? prev.filter(item => item !== key)
        : [...prev, key]
    );
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-gray-600">
            Trouvez rapidement les réponses à vos questions
          </p>
        </motion.div>

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const key = categoryIndex * 100 + itemIndex;
                  const isOpen = openItems.includes(key);
                  
                  return (
                    <motion.div
                      key={itemIndex}
                      className="bg-white rounded-lg shadow-sm overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(categoryIndex, itemIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {item.question}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {isOpen ? (
                            <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          ) : (
                            <Plus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          )}
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Vous avez d'autres questions ?
            </h3>
            <p className="text-blue-100 mb-6">
              Notre équipe est là pour vous aider. Contactez-nous directement.
            </p>
            <motion.a
              href="tel:0756902112"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              <span>Appeler maintenant</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
