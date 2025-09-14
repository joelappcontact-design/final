import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Nanterre',
  department: '92',
  population: '97000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la Défense', 'Quartier de la Gare', 'Quartier de la République'],
  description: 'Serrurier d\'urgence Nanterre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier nanterre', 'serrurier urgence nanterre', 'ouverture porte nanterre', 'serrurier 24h nanterre', 'dépannage serrure nanterre']
};

export default function Page() {
  return <CityPage 
    cityName="Nanterre"
    citySlug="nanterre"
    zones={['Centre-ville', 'Quartier de la Défense', 'Quartier de la Gare', 'Quartier de la République']}
    description="Nanterre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier nanterre", "serrurier urgence nanterre", "ouverture porte nanterre", "serrurier 24h nanterre", "dépannage serrure nanterre"]}
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