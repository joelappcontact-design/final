import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Politique de confidentialité - Serrurierfrancais.com',
  description: 'Politique de confidentialité et protection des données personnelles',
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de confidentialité</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Collecte des données</h2>
              <p className="text-gray-700 mb-4">
                Nous collectons les données personnelles que vous nous communiquez volontairement lorsque vous :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Nous contactez par téléphone ou email</li>
                <li>Demandez un devis</li>
                <li>Naviguez sur notre site web</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Les données collectées incluent : nom, prénom, adresse, numéro de téléphone, adresse email, et informations relatives à votre demande de service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Finalités du traitement</h2>
              <p className="text-gray-700 mb-4">
                Vos données personnelles sont traitées pour :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Répondre à vos demandes de service</li>
                <li>Vous contacter pour planifier une intervention</li>
                <li>Établir des devis et factures</li>
                <li>Améliorer nos services</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Base légale</h2>
              <p className="text-gray-700 mb-4">
                Le traitement de vos données personnelles est basé sur :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>L'exécution du contrat de service</li>
                <li>Votre consentement pour les communications marketing</li>
                <li>L'intérêt légitime pour l'amélioration de nos services</li>
                <li>Le respect d'obligations légales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Conservation des données</h2>
              <p className="text-gray-700 mb-4">
                Vos données personnelles sont conservées :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Données clients : 3 ans après la fin de la relation contractuelle</li>
                <li>Données de facturation : 10 ans (obligation légale)</li>
                <li>Données de prospection : 3 ans après le dernier contact</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Vos droits</h2>
              <p className="text-gray-700 mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit d'effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d'opposition</li>
                <li>Droit de retrait du consentement</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Pour exercer ces droits, contactez-nous à : contact@serrurierfrancais.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Sécurité</h2>
              <p className="text-gray-700 mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération ou la destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
              <p className="text-gray-700 mb-4">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez gérer vos préférences de cookies via notre bannière de consentement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact</h2>
              <p className="text-gray-700 mb-4">
                Pour toute question relative à cette politique de confidentialité, contactez-nous :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Email : contact@serrurierfrancais.com</li>
                <li>Téléphone : 07 56 90 21 12</li>
                <li>Adresse : Île-de-France, France</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modifications</h2>
              <p className="text-gray-700 mb-4">
                Cette politique de confidentialité peut être modifiée à tout moment. Les modifications seront publiées sur cette page avec une date de mise à jour.
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
