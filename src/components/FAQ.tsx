'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "En combien de temps intervenez-vous ?",
      answer: "Nous intervenons en moyenne en 30–45 min selon le trafic. En cas d'urgence, nous nous efforçons d'arriver encore plus rapidement."
    },
    {
      id: 2,
      question: "Quels sont vos tarifs ?",
      answer: "Nos tarifs sont fixes et transparents : Ouverture simple à partir de 39€, ouverture complexe 89€, changement de cylindre 49€. Aucun frais caché."
    },
    {
      id: 3,
      question: "Êtes-vous disponibles 24h/24 ?",
      answer: "Oui, nous intervenons 24h/24, 7j/7, y compris les weekends et jours fériés. Votre urgence est notre priorité."
    },
    {
      id: 4,
      question: "Vos artisans sont-ils certifiés ?",
      answer: "Absolument ! Tous nos artisans sont certifiés, assurés et passent des vérifications de sécurité rigoureuses."
    },
    {
      id: 5,
      question: "Que faire si ma porte est bloquée ?",
      answer: "Appelez-nous immédiatement ! Ne forcez pas la porte, cela pourrait l'endommager davantage. Nos experts sauront intervenir sans dégâts."
    },
    {
      id: 6,
      question: "Acceptez-vous les paiements par carte ?",
      answer: "Oui, nous acceptons tous les modes de paiement : espèces, carte bancaire, virement. La facture vous est envoyée automatiquement."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="glass-card">
            <button
              onClick={() => toggleItem(faq.id)}
              className="w-full text-left p-6 focus:outline-none"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-blue-400 transition-transform duration-200 ${
                      openItem === faq.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </button>
            {openItem === faq.id && (
              <div className="px-6 pb-6">
                <p className="text-blue-200 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}