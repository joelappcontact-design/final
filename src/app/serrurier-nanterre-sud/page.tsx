import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Nanterre Sud',
  department: '92',
  population: '48500',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Nanterre Sud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier nanterre-sud', 'serrurier urgence nanterre-sud', 'ouverture porte nanterre-sud', 'serrurier 24h nanterre-sud', 'dépannage serrure nanterre-sud']
};

export default function Page() {
  return <CityPage 
    cityName="Nanterre Sud"
    citySlug="nanterre-sud"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Nanterre Sud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier nanterre-sud", "serrurier urgence nanterre-sud", "ouverture porte nanterre-sud", "serrurier 24h nanterre-sud", "dépannage serrure nanterre-sud"]}
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