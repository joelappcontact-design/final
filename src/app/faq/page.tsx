import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Questions Fréquentes | Serrurier d\'urgence 24h/24',
  description: 'Trouvez les réponses aux questions les plus fréquentes sur nos services de serrurerie d\'urgence. Intervention rapide, tarifs transparents, artisans certifiés.',
  keywords: [
    'faq serrurier',
    'questions fréquentes serrurier',
    'aide serrurier urgence',
    'tarifs serrurier',
    'intervention serrurier',
    'dépannage serrure'
  ],
};

export default function FAQPage() {
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

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-black text-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo-serrurier-francais.png" 
                alt="Serrurier Français" 
                className="h-12 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-white hover:text-blue-400 transition-colors">Accueil</a>
              <a href="/faq" className="text-blue-400 font-semibold">FAQ</a>
              <a href="/contact" className="text-white hover:text-blue-400 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-20">
        <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-lg animate-fade-in-up">
              Questions Fréquentes
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Trouvez les réponses à vos questions sur nos services de serrurerie d'urgence
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.id} className="glass-card">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">
                        {faq.question}
                      </h3>
                      <p className="text-blue-200 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 mt-12 shadow-inner">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Serrurierfrancais.com
              </span>
            </div>
            <p className="text-slate-300 mb-6">
              Serrurier d'urgence Île-de-France - Intervention 24h/24, 7j/7
            </p>
            <div className="text-blue-300 text-sm">
              © 2025 Serrurierfrancais.com. Tous droits réservés.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}