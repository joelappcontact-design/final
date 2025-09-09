import { Metadata } from 'next';
import CityGrid from '@/components/CityGrid';
import CallCTA from '@/components/CallCTA';
import { config } from '@/lib/config';

export const metadata: Metadata = {
  title: `Zones d'intervention serrurier d'urgence ${config.primaryCity}`,
  description: `Zones d'intervention de notre serrurier d'urgence à ${config.primaryCity}. Intervention rapide dans toutes les communes de la région.`,
  keywords: [
    'zones intervention serrurier',
    'serrurier paris',
    'serrurier banlieue',
    'intervention serrurier',
    'serrurier urgence'
  ],
  openGraph: {
    title: `Zones d'intervention serrurier d'urgence ${config.primaryCity}`,
    description: `Zones d'intervention de notre serrurier d'urgence à ${config.primaryCity}.`,
  },
};

export default function ZonesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-lg">
            Zones d'intervention
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto text-shadow">
            Nous intervenons dans {config.primaryCity} et ses environs pour tous vos besoins de serrurerie d'urgence
          </p>
          
          <CallCTA variant="primary" size="lg" showWhatsApp={true} />
        </div>
      </section>

      {/* Zones principales */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 text-shadow">
            Toutes nos zones d'intervention
          </h2>
          
          <div className="text-center mb-8">
            <p className="text-white/80 text-lg">
              Temps moyen d'intervention {config.slaMinutes} selon trafic
            </p>
          </div>
          
          <CityGrid />
        </div>
      </section>

      {/* Informations complémentaires */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white text-center mb-8 text-shadow">
              Informations sur nos interventions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Délais d'intervention</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Intervention en {config.slaMinutes} en moyenne</li>
                  <li>• Artisans répartis dans toute la zone</li>
                  <li>• Optimisation des trajets en temps réel</li>
                  <li>• Mise à jour du délai par SMS</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Tarifs identiques</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Mêmes tarifs dans toutes les zones</li>
                  <li>• Frais de déplacement inclus</li>
                  <li>• Prix clairs et transparents</li>
                  <li>• Aucun supplément de zone</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 text-shadow">
            Besoin d'une intervention ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Appelez-nous maintenant, nous intervenons dans toute la région
          </p>
          <CallCTA variant="primary" size="lg" showWhatsApp={true} />
        </div>
      </section>
    </div>
  );
}
