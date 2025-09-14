import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Colombes',
  department: '92',
  population: '85000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la Gare', 'Quartier de la République', 'Quartier des Vallées'],
  description: 'Serrurier d\'urgence Colombes 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier colombes', 'serrurier urgence colombes', 'ouverture porte colombes', 'serrurier 24h colombes', 'dépannage serrure colombes']
};

export default function Page() {
  return <CityPage 
    cityName="Colombes"
    citySlug="colombes"
    zones={['Centre-ville', 'Quartier de la Gare', 'Quartier de la République', 'Quartier des Vallées']}
    description="Colombes - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier colombes", "serrurier urgence colombes", "ouverture porte colombes", "serrurier 24h colombes", "dépannage serrure colombes"]}
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