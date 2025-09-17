import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Serrurier d\'urgence 24h/24',
  description: 'Politique de confidentialité de Serrurierfrancais.com - Protection des données personnelles et respect de la vie privée.',
  keywords: [
    'politique confidentialité',
    'protection données personnelles',
    'RGPD',
    'vie privée'
  ],
};

export default function ConfidentialitePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-black text-gray-100">
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500 rounded-full opacity-0 animate-particle"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 10}s`,
            }}
          />
        ))}
      </div>

      <Header />

      <main className="relative z-10 pt-20">
        <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-lg animate-fade-in-up">
              Politique de Confidentialité
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Protection de vos données personnelles et respect de votre vie privée
            </p>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-blue-950 to-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-8 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Collecte des données
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Nous collectons uniquement les données personnelles nécessaires à la fourniture de nos services :
                  </p>
                  <ul className="text-gray-300 space-y-2 ml-4">
                    <li>• Nom et prénom</li>
                    <li>• Numéro de téléphone</li>
                    <li>• Adresse d'intervention</li>
                    <li>• Email (optionnel)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Utilisation des données
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Vos données personnelles sont utilisées exclusivement pour :
                  </p>
                  <ul className="text-gray-300 space-y-2 ml-4">
                    <li>• Organiser et effectuer les interventions</li>
                    <li>• Vous contacter pour confirmer les rendez-vous</li>
                    <li>• Établir les devis et factures</li>
                    <li>• Améliorer la qualité de nos services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Conservation des données
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Vos données personnelles sont conservées pendant une durée maximale de 3 ans après la dernière intervention, 
                    conformément aux obligations légales et comptables.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Partage des données
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Nous ne vendons, ne louons, ni ne partageons vos données personnelles avec des tiers, 
                    sauf obligation légale ou avec votre consentement explicite.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Cookies et tracking
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Notre site utilise des cookies pour :
                  </p>
                  <ul className="text-gray-300 space-y-2 ml-4">
                    <li>• Améliorer l'expérience utilisateur</li>
                    <li>• Analyser le trafic du site (Google Analytics)</li>
                    <li>• Mesurer l'efficacité de nos campagnes publicitaires</li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Vos droits
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Conformément au RGPD, vous disposez des droits suivants :
                  </p>
                  <ul className="text-gray-300 space-y-2 ml-4">
                    <li>• Droit d'accès à vos données</li>
                    <li>• Droit de rectification</li>
                    <li>• Droit à l'effacement</li>
                    <li>• Droit à la portabilité</li>
                    <li>• Droit d'opposition</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Contact
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Pour exercer vos droits ou pour toute question concernant le traitement de vos données, 
                    contactez-nous à : <a href="mailto:contact@serrurierfrancais.com" className="text-blue-400 hover:underline">contact@serrurierfrancais.com</a>
                  </p>
                </div>

                <div className="pt-8 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">
                    Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
