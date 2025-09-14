import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Cergy',
  department: '95',
  population: '65000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Cergy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier cergy', 'serrurier urgence cergy', 'ouverture porte cergy', 'serrurier 24h cergy', 'dépannage serrure cergy']
};

export default function Page() {
  return <CityPage 
    cityName="Cergy"
    citySlug="cergy"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Cergy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier cergy", "serrurier urgence cergy", "ouverture porte cergy", "serrurier 24h cergy", "dépannage serrure cergy"]}
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