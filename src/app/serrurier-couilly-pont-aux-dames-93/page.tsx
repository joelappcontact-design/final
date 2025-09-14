import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Couilly-Pont-aux-Dames',
  department: '93',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Couilly-Pont-aux-Dames 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier couilly-pont-aux-dames-93', 'serrurier urgence couilly-pont-aux-dames-93', 'ouverture porte couilly-pont-aux-dames-93', 'serrurier 24h couilly-pont-aux-dames-93', 'dépannage serrure couilly-pont-aux-dames-93']
};

export default function Page() {
  return <CityPage 
    cityName="Couilly-Pont-aux-Dames"
    citySlug="couilly-pont-aux-dames-93"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Couilly-Pont-aux-Dames - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier couilly-pont-aux-dames-93", "serrurier urgence couilly-pont-aux-dames-93", "ouverture porte couilly-pont-aux-dames-93", "serrurier 24h couilly-pont-aux-dames-93", "dépannage serrure couilly-pont-aux-dames-93"]}
  />;
}

export async function generateMetadata() {
  return {
    title: `Serrurier d'urgence ${cityData.name} 24h/24 - Intervention rapide`,
    description: cityData.description,
    keywords: cityData.keywords.join(', '),
    openGraph: {
      title: `Serrurier d'urgence ${cityData.name} 24h/24`,
      description: cityData.description,
      type: 'website',
      locale: 'fr_FR',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}