import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Versailles',
  department: '92',
  population: '85000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Château'],
  description: 'Serrurier d\'urgence Versailles 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier versailles', 'serrurier urgence versailles', 'ouverture porte versailles', 'serrurier 24h versailles', 'dépannage serrure versailles']
};

export default function Page() {
  return <CityPage 
    cityName="Versailles"
    citySlug="versailles"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Château']}
    description="Versailles - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier versailles", "serrurier urgence versailles", "ouverture porte versailles", "serrurier 24h versailles", "dépannage serrure versailles"]}
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