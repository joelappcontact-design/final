import { Metadata } from 'next';
import { CheckCircle, Clock, Shield, Star, Phone } from 'lucide-react';
import CallCTA from '@/components/CallCTA';
import PriceCard from '@/components/PriceCard';
import { config, formatPrice } from '@/lib/config';
import { PriceCard as PriceCardType } from '@/types';

export const metadata: Metadata = {
  title: 'Tarifs serrurier d\'urgence - Prix clairs et transparents',
  description: `Tarifs serrurier d'urgence ${config.primaryCity}. Prix clairs et transparents pour ouverture de porte, changement de cylindre, installation de porte sécurisée.`,
  keywords: [
    'tarifs serrurier',
    'prix ouverture porte',
    'changement cylindre prix',
    'serrurier pas cher',
    'prix clair serrurier',
    'devis serrurier gratuit'
  ],
  openGraph: {
    title: 'Tarifs serrurier d\'urgence - Prix clairs et transparents',
    description: `Tarifs serrurier d'urgence ${config.primaryCity}. Prix clairs et transparents pour tous nos services.`,
  },
};

// Données complètes des tarifs
const allPricingData: PriceCardType[] = [
  {
    id: 'simple-opening',
    title: 'Ouverture simple',
    price: config.pricing.simpleOpening,
    description: 'Porte standard sans dégâts',
    features: [
      'Intervention rapide',
      'Aucun dégât garanti',
      'Prix clair affiché',
      'Facture automatique',
      'Garantie 30 jours'
    ],
    popular: true,
  },
  {
    id: 'complex-opening',
    title: 'Ouverture complexe',
    price: config.pricing.complexOpening,
    description: 'Porte sécurisée ou blindée',
    features: [
      'Techniques avancées',
      'Matériel spécialisé',
      'Prix clair affiché',
      'Garantie intervention',
      'Rapport détaillé'
    ],
  },
  {
    id: 'cylinder-change',
    title: 'Changement cylindre',
    price: config.pricing.cylinderChange,
    description: 'Remplacement de cylindre',
    features: [
      'Cylindre de qualité',
      'Installation incluse',
      'Prix clair affiché',
      'Clés fournies (3 exemplaires)',
      'Garantie 1 an'
    ],
  },
  {
    id: 'secure-door',
    title: 'Installation porte sécurisée',
    price: config.pricing.secureDoor,
    description: 'Pose de porte blindée',
    features: [
      'Porte blindée A2P3',
      'Installation complète',
      'Prix clair affiché',
      'Clés et serrures incluses',
      'Garantie 2 ans'
    ],
  },
];

export default function TarifsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-lg">
            Tarifs serrurier d'urgence {config.primaryCity}
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto text-shadow">
            Prix clairs et transparents - Pas de surprise, le prix affiché est le prix payé
          </p>
          
          <CallCTA variant="primary" size="lg" showWhatsApp={true} />
        </div>
      </section>

      {/* Avantages prix clairs */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Prix clairs</h3>
              <p className="text-white/80 text-sm">
                Aucune surprise, le prix affiché est le prix payé
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Intervention rapide</h3>
              <p className="text-white/80 text-sm">
                Arrivée en {config.slaMinutes} en moyenne
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Artisans vérifiés</h3>
              <p className="text-white/80 text-sm">
                Tous nos artisans sont certifiés et assurés
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs détaillés */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 text-shadow">
            Nos tarifs détaillés
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {allPricingData.map((price) => (
              <PriceCard key={price.id} price={price} />
            ))}
          </div>
        </div>
      </section>

      {/* Informations complémentaires */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 text-shadow">
              Informations importantes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CheckCircle size={24} className="text-yellow-400" />
                  Inclus dans nos tarifs
                </h3>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    Intervention d'urgence
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    {config.travelFeeIncluded ? 'Frais de déplacement' : 'Frais de déplacement selon distance'}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    Facture automatique
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    Garantie intervention
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Shield size={24} className="text-yellow-400" />
                  Modes de paiement
                </h3>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    Carte bancaire
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    Espèces
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    Virement bancaire
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    Chèque
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-yellow-400/20 border border-yellow-400/30 rounded-2xl">
              <p className="text-white text-center font-medium">
                <strong>Important :</strong> Nos tarifs sont fixes et transparents. 
                Aucun supplément ne sera demandé en fin d'intervention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-shadow">
            Besoin d'une intervention ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Appelez-nous maintenant pour une intervention d'urgence
          </p>
          <CallCTA variant="primary" size="lg" showWhatsApp={true} />
        </div>
      </section>
    </div>
  );
}
