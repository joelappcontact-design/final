import { Metadata } from 'next';
import { config } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Politique de confidentialité - Serrurier d\'urgence',
  description: 'Politique de confidentialité et protection des données personnelles.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Politique de confidentialité
          </h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6">
              <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Collecte des données personnelles</h2>
            <p className="text-gray-700 mb-6">
              {config.siteName} collecte des données personnelles dans les cas suivants :
            </p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>• Lors de votre appel téléphonique (nom, numéro de téléphone, adresse)</li>
              <li>• Lors de l'utilisation du formulaire de contact (nom, email, téléphone, message)</li>
              <li>• Lors de la navigation sur le site (cookies, données de trafic)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Finalités du traitement</h2>
            <p className="text-gray-700 mb-6">
              Vos données personnelles sont utilisées pour :
            </p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>• Traiter vos demandes d'intervention</li>
              <li>• Vous contacter pour organiser l'intervention</li>
              <li>• Améliorer nos services</li>
              <li>• Respecter nos obligations légales</li>
              <li>• Analyser l'utilisation du site (cookies analytiques)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Base légale du traitement</h2>
            <p className="text-gray-700 mb-6">
              Le traitement de vos données personnelles est basé sur :
            </p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>• Votre consentement pour les cookies non essentiels</li>
              <li>• L'exécution du contrat pour les services de serrurerie</li>
              <li>• L'intérêt légitime pour l'amélioration de nos services</li>
              <li>• L'obligation légale pour la facturation et la comptabilité</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Durée de conservation</h2>
            <p className="text-gray-700 mb-6">
              Vos données personnelles sont conservées :
            </p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>• Données de contact : 3 ans après la dernière intervention</li>
              <li>• Données de facturation : 10 ans (obligation légale)</li>
              <li>• Cookies : 13 mois maximum</li>
              <li>• Données de navigation : 25 mois maximum</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Partage des données</h2>
            <p className="text-gray-700 mb-6">
              Vos données personnelles ne sont pas vendues à des tiers. Elles peuvent être partagées avec :
            </p>
            <ul className="text-gray-900/90 space-y-2 mb-6">
              <li>• Nos artisans pour l'intervention</li>
              <li>• Nos prestataires techniques (hébergement, email)</li>
              <li>• Les autorités compétentes si requis par la loi</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Vos droits</h2>
            <p className="text-gray-900/90 mb-6">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="text-gray-900/90 space-y-2 mb-6">
              <li>• <strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
              <li>• <strong>Droit de rectification :</strong> corriger vos données inexactes</li>
              <li>• <strong>Droit d'effacement :</strong> supprimer vos données</li>
              <li>• <strong>Droit à la portabilité :</strong> récupérer vos données</li>
              <li>• <strong>Droit d'opposition :</strong> vous opposer au traitement</li>
              <li>• <strong>Droit de limitation :</strong> limiter le traitement</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
            <p className="text-gray-900/90 mb-6">
              Notre site utilise des cookies pour améliorer votre expérience :
            </p>
            <ul className="text-gray-900/90 space-y-2 mb-6">
              <li>• <strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
              <li>• <strong>Cookies analytiques :</strong> pour analyser l'utilisation du site</li>
              <li>• <strong>Cookies publicitaires :</strong> pour personnaliser les publicités</li>
            </ul>
            <p className="text-gray-900/90 mb-6">
              Vous pouvez gérer vos préférences de cookies via notre bannière de consentement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Sécurité des données</h2>
            <p className="text-gray-900/90 mb-6">
              Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre :
            </p>
            <ul className="text-gray-900/90 space-y-2 mb-6">
              <li>• L'accès non autorisé</li>
              <li>• La divulgation non autorisée</li>
              <li>• La modification non autorisée</li>
              <li>• La destruction non autorisée</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Transferts internationaux</h2>
            <p className="text-gray-900/90 mb-6">
              Vos données personnelles sont traitées au sein de l'Union Européenne. En cas de transfert vers un pays tiers, nous nous assurons que des garanties appropriées sont en place.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact et réclamations</h2>
            <p className="text-gray-900/90 mb-6">
              Pour exercer vos droits ou pour toute question concernant cette politique de confidentialité :
            </p>
            <ul className="text-gray-900/90 space-y-2 mb-6">
              <li>• Email : {config.legal.email}</li>
              <li>• Téléphone : {config.phone}</li>
              <li>• Adresse : {config.legal.address}</li>
            </ul>
            <p className="text-gray-900/90 mb-6">
              Vous avez également le droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) si vous estimez que vos droits ne sont pas respectés.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modifications</h2>
            <p className="text-gray-900/90 mb-6">
              Cette politique de confidentialité peut être modifiée à tout moment. Les modifications importantes vous seront notifiées par email ou via un avis sur le site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
