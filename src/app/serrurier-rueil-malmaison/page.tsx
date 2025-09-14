import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Rueil-Malmaison',
  department: '92',
  population: '78000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier de la Défense'],
  description: 'Serrurier d\'urgence Rueil-Malmaison 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier rueil-malmaison', 'serrurier urgence rueil-malmaison', 'ouverture porte rueil-malmaison', 'serrurier 24h rueil-malmaison', 'dépannage serrure rueil-malmaison']
};

export default function Page() {
  return <CityPage 
    cityName="Rueil-Malmaison"
    citySlug="rueil-malmaison"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier de la Défense']}
    description="Rueil-Malmaison - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier rueil-malmaison", "serrurier urgence rueil-malmaison", "ouverture porte rueil-malmaison", "serrurier 24h rueil-malmaison", "dépannage serrure rueil-malmaison"]}
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