import { Metadata } from 'next';
import { config } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Mentions légales - Serrurier d\'urgence',
  description: 'Mentions légales et informations sur l\'entreprise de serrurerie d\'urgence.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-shadow">
            Mentions légales
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-4">1. Informations sur l'éditeur</h2>
            <p className="text-white/90 mb-6">
              Le présent site est édité par {config.siteName}, entreprise de serrurerie d'urgence.
            </p>
            
            <div className="bg-white/5 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Coordonnées de l'entreprise</h3>
              <ul className="text-white/90 space-y-2">
                <li><strong>Raison sociale :</strong> {config.siteName}</li>
                <li><strong>SIREN :</strong> {config.legal.siren}</li>
                <li><strong>Adresse :</strong> {config.legal.address}</li>
                <li><strong>Téléphone :</strong> {config.phone}</li>
                <li><strong>Email :</strong> {config.legal.email}</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">2. Directeur de publication</h2>
            <p className="text-white/90 mb-6">
              Le directeur de la publication est le représentant légal de {config.siteName}.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">3. Hébergement</h2>
            <p className="text-white/90 mb-6">
              Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">4. Propriété intellectuelle</h2>
            <p className="text-white/90 mb-6">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">5. Responsabilité</h2>
            <p className="text-white/90 mb-6">
              Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions. Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, à l'adresse {config.legal.email}, en décrivant le problème de la manière la plus précise possible.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">6. Liens hypertextes</h2>
            <p className="text-white/90 mb-6">
              Des liens hypertextes peuvent être présents sur le site. L'utilisateur est informé qu'en cliquant sur ces liens, il sortira du site {config.siteName}. Ce dernier n'a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait en aucun cas être responsable de leur contenu.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">7. Cookies</h2>
            <p className="text-white/90 mb-6">
              Le site {config.siteName} peut être amené à vous demander l'acceptation des cookies pour des besoins de statistiques et d'affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">8. Droit applicable</h2>
            <p className="text-white/90 mb-6">
              Tout litige en relation avec l'utilisation du site {config.siteName} est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">9. Contact</h2>
            <p className="text-white/90 mb-6">
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
            </p>
            <ul className="text-white/90 space-y-2">
              <li>Par téléphone : {config.phone}</li>
              <li>Par email : {config.legal.email}</li>
              <li>Par courrier : {config.legal.address}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
