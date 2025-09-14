import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Levallois-Perret Sud',
  department: '92',
  population: '34000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Levallois-Perret Sud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier levallois-perret-sud', 'serrurier urgence levallois-perret-sud', 'ouverture porte levallois-perret-sud', 'serrurier 24h levallois-perret-sud', 'dépannage serrure levallois-perret-sud']
};

export default function Page() {
  return <CityPage 
    cityName="Levallois-Perret Sud"
    citySlug="levallois-perret-sud"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Levallois-Perret Sud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier levallois-perret-sud", "serrurier urgence levallois-perret-sud", "ouverture porte levallois-perret-sud", "serrurier 24h levallois-perret-sud", "dépannage serrure levallois-perret-sud"]}
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