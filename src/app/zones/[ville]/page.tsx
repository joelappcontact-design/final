import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CallCTA from '@/components/CallCTA';
import CityGrid from '@/components/CityGrid';
import { config } from '@/lib/config';

interface CityPageProps {
  params: {
    ville: string;
  };
}

// Génération des pages statiques
export async function generateStaticParams() {
  return config.cities.map((city) => ({
    ville: city.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''),
  }));
}

// Génération des métadonnées dynamiques
export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const cityName = config.cities.find(
    city => city.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') === params.ville
  );
  
  if (!cityName) {
    return {
      title: 'Ville non trouvée',
    };
  }

  return {
    title: `Serrurier d'urgence ${cityName} - Intervention 24h/24`,
    description: `Serrurier d'urgence ${cityName}. Intervention rapide en ${config.slaMinutes}, prix clairs et transparents. Artisans vérifiés et certifiés.`,
    keywords: [
      `serrurier ${cityName}`,
      `serrurier urgence ${cityName}`,
      `ouverture porte ${cityName}`,
      `changement cylindre ${cityName}`,
      `serrurier 24h ${cityName}`,
      `dépannage serrure ${cityName}`,
    ],
    openGraph: {
      title: `Serrurier d'urgence ${cityName} - Intervention 24h/24`,
      description: `Serrurier d'urgence ${cityName}. Intervention rapide en ${config.slaMinutes}, prix clairs et transparents.`,
    },
  };
}

export default function CityPage({ params }: CityPageProps) {
  const cityName = config.cities.find(
    city => city.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') === params.ville
  );
  
  if (!cityName) {
    notFound();
  }

  // Génération du contenu spécifique à la ville
  const cityContent = {
    name: cityName,
    description: `Serrurier d'urgence ${cityName} - Intervention 24h/24, 7j/7. Prix clairs et transparents, artisans vérifiés.`,
    estimatedTime: config.slaMinutes,
    zones: config.cities.filter(city => 
      city.toLowerCase().includes(cityName.toLowerCase()) || 
      cityName.toLowerCase().includes(city.toLowerCase())
    ).slice(0, 5),
    services: [
      'Ouverture de porte simple',
      'Ouverture de porte complexe',
      'Changement de cylindre',
      'Installation de porte sécurisée',
      'Conseils de sécurité'
    ],
    advantages: [
      'Intervention rapide en ' + config.slaMinutes,
      'Prix clairs et transparents',
      'Artisans certifiés et vérifiés',
      'Disponible 24h/24, 7j/7',
      'Frais de déplacement inclus'
    ]
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-lg">
            Serrurier d'urgence {cityName}
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto text-shadow">
            Intervention 24h/24, 7j/7 • Prix clairs et transparents • Artisans vérifiés
          </p>
          
          <CallCTA variant="primary" size="lg" showWhatsApp={true} />
        </div>
      </section>

      {/* Services disponibles */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 text-shadow">
            Nos services à {cityName}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cityContent.services.map((service, index) => (
              <div key={index} className="card text-center">
                <h3 className="text-xl font-bold text-white mb-3">{service}</h3>
                <p className="text-white/80 text-sm">
                  Service professionnel avec garantie
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12 text-shadow">
            Pourquoi choisir notre serrurier à {cityName} ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cityContent.advantages.map((advantage, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-900 font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-white/90 font-medium">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones proches */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 text-shadow">
            Zones proches de {cityName}
          </h2>
          
          <div className="text-center mb-8">
            <p className="text-white/80 text-lg">
              Nous intervenons également dans les communes environnantes
            </p>
          </div>
          
          <CityGrid maxItems={8} />
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12 text-shadow">
            Tarifs serrurier {cityName}
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Ouverture simple</h3>
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {config.pricing.simpleOpening / 100}€ TTC
                </div>
                <p className="text-white/80 text-sm">
                  Porte standard sans dégâts
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Ouverture complexe</h3>
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {config.pricing.complexOpening / 100}€ TTC
                </div>
                <p className="text-white/80 text-sm">
                  Porte sécurisée ou blindée
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Changement cylindre</h3>
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {config.pricing.cylinderChange / 100}€ TTC
                </div>
                <p className="text-white/80 text-sm">
                  Remplacement de cylindre
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Porte sécurisée</h3>
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {config.pricing.secureDoor / 100}€ TTC
                </div>
                <p className="text-white/80 text-sm">
                  Installation complète
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="/tarifs" 
                className="btn-secondary px-8 py-3 inline-flex items-center gap-2"
              >
                Voir tous les tarifs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 text-shadow">
              Urgence à {cityName} ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Appelez-nous maintenant, intervention en {config.slaMinutes}
            </p>
            <CallCTA variant="primary" size="lg" showWhatsApp={true} />
          </div>
        </div>
      </section>
    </div>
  );
}
