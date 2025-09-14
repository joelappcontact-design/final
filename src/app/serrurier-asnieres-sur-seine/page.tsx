import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Asnières-sur-Seine',
  department: '92',
  population: '87000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la Gare', 'Quartier de la République', 'Quartier des Grésillons'],
  description: 'Serrurier d\'urgence Asnières-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier asnieres-sur-seine', 'serrurier urgence asnieres-sur-seine', 'ouverture porte asnieres-sur-seine', 'serrurier 24h asnieres-sur-seine', 'dépannage serrure asnieres-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Asnières-sur-Seine"
    citySlug="asnieres-sur-seine"
    zones={['Centre-ville', 'Quartier de la Gare', 'Quartier de la République', 'Quartier des Grésillons']}
    description="Asnières-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier asnieres-sur-seine", "serrurier urgence asnieres-sur-seine", "ouverture porte asnieres-sur-seine", "serrurier 24h asnieres-sur-seine", "dépannage serrure asnieres-sur-seine"]}
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