import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Nanterre Nord',
  department: '92',
  population: '48500',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Nanterre Nord 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier nanterre-nord', 'serrurier urgence nanterre-nord', 'ouverture porte nanterre-nord', 'serrurier 24h nanterre-nord', 'dépannage serrure nanterre-nord']
};

export default function Page() {
  return <CityPage 
    cityName="Nanterre Nord"
    citySlug="nanterre-nord"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Nanterre Nord - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier nanterre-nord", "serrurier urgence nanterre-nord", "ouverture porte nanterre-nord", "serrurier 24h nanterre-nord", "dépannage serrure nanterre-nord"]}
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