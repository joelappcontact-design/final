import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Asnières-sur-Seine Sud',
  department: '92',
  population: '43500',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Asnières-sur-Seine Sud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier asnieres-sur-seine-sud', 'serrurier urgence asnieres-sur-seine-sud', 'ouverture porte asnieres-sur-seine-sud', 'serrurier 24h asnieres-sur-seine-sud', 'dépannage serrure asnieres-sur-seine-sud']
};

export default function Page() {
  return <CityPage 
    cityName="Asnières-sur-Seine Sud"
    citySlug="asnieres-sur-seine-sud"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Asnières-sur-Seine Sud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier asnieres-sur-seine-sud", "serrurier urgence asnieres-sur-seine-sud", "ouverture porte asnieres-sur-seine-sud", "serrurier 24h asnieres-sur-seine-sud", "dépannage serrure asnieres-sur-seine-sud"]}
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