import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Politique des cookies - Serrurierfrancais.com',
  description: 'Information sur l\'utilisation des cookies sur notre site',
};

export default function Cookies() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique des cookies</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Qu'est-ce qu'un cookie ?</h2>
              <p className="text-gray-700 mb-4">
                Un cookie est un petit fichier texte stocké sur votre ordinateur, tablette ou smartphone lorsque vous visitez un site web. Les cookies permettent au site de reconnaître votre appareil et de mémoriser certaines informations sur vos préférences ou actions passées.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Types de cookies utilisés</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies nécessaires</h3>
                <p className="text-gray-700 mb-4">
                  Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés. Ils sont généralement définis en réponse à des actions que vous effectuez et qui équivalent à une demande de services.
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Cookies de session</li>
                  <li>Cookies de sécurité</li>
                  <li>Cookies de préférences de langue</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies analytiques</h3>
                <p className="text-gray-700 mb-4">
                  Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site en collectant et rapportant des informations de manière anonyme.
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Google Analytics</li>
                  <li>Statistiques de visite</li>
                  <li>Pages les plus consultées</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies marketing</h3>
                <p className="text-gray-700 mb-4">
                  Ces cookies sont utilisés pour suivre les visiteurs sur les sites web. L'intention est d'afficher des publicités qui sont pertinentes et engageantes pour l'utilisateur individuel.
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Cookies publicitaires</li>
                  <li>Cookies de réseaux sociaux</li>
                  <li>Cookies de ciblage</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Gestion de vos préférences</h2>
              <p className="text-gray-700 mb-4">
                Vous pouvez gérer vos préférences de cookies de plusieurs façons :
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Via notre bannière de cookies</h3>
                <p className="text-gray-700 mb-4">
                  Lors de votre première visite, une bannière vous permet de choisir quels types de cookies accepter. Vous pouvez modifier vos préférences à tout moment en cliquant sur le lien "Cookies" en bas de page.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Via votre navigateur</h3>
                <p className="text-gray-700 mb-4">
                  Vous pouvez configurer votre navigateur pour :
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Bloquer tous les cookies</li>
                  <li>Accepter uniquement les cookies de première partie</li>
                  <li>Supprimer les cookies existants</li>
                  <li>Être notifié avant l'installation de nouveaux cookies</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies tiers</h2>
              <p className="text-gray-700 mb-4">
                Notre site peut contenir des cookies provenant de services tiers :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Google Analytics :</strong> Analyse du trafic et du comportement des visiteurs</li>
                <li><strong>Google Ads :</strong> Publicités ciblées et mesure de performance</li>
                <li><strong>Réseaux sociaux :</strong> Boutons de partage et widgets</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Durée de conservation</h2>
              <p className="text-gray-700 mb-4">
                Les cookies ont différentes durées de vie :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Cookies de session :</strong> Supprimés à la fermeture du navigateur</li>
                <li><strong>Cookies persistants :</strong> Conservés de 30 jours à 2 ans maximum</li>
                <li><strong>Cookies analytiques :</strong> 26 mois maximum</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Conséquences du refus</h2>
              <p className="text-gray-700 mb-4">
                Si vous refusez les cookies :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Le site fonctionnera normalement pour les fonctions essentielles</li>
                <li>Certaines fonctionnalités peuvent être limitées</li>
                <li>Votre expérience utilisateur peut être dégradée</li>
                <li>Nous ne pourrons pas personnaliser le contenu</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact</h2>
              <p className="text-gray-700 mb-4">
                Pour toute question concernant notre utilisation des cookies, contactez-nous :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Email : contact@serrurierfrancais.com</li>
                <li>Téléphone : 07 56 90 21 12</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modifications</h2>
              <p className="text-gray-700 mb-4">
                Cette politique des cookies peut être modifiée à tout moment. Les modifications seront publiées sur cette page.
              </p>
              <p className="text-gray-700 mb-4">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
