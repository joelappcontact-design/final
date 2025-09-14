import CityPage from '@/components/CityPage';

const cityData = {
  name: 'La Défense',
  department: '92',
  population: '25000',
  priority: 'haute',
  zones: ['Centre d\'affaires', 'Quartier des affaires', 'Quartier commercial', 'Quartier des bureaux'],
  description: 'Serrurier d\'urgence La Défense 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier la-defense', 'serrurier urgence la-defense', 'ouverture porte la-defense', 'serrurier 24h la-defense', 'dépannage serrure la-defense']
};

export default function Page() {
  return <CityPage 
    cityName="La Défense"
    citySlug="la-defense"
    zones={['Centre d\'affaires', 'Quartier des affaires', 'Quartier commercial', 'Quartier des bureaux']}
    description="La Défense - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier la-defense", "serrurier urgence la-defense", "ouverture porte la-defense", "serrurier 24h la-defense", "dépannage serrure la-defense"]}
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