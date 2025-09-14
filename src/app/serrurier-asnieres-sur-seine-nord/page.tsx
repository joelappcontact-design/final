import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Asnières-sur-Seine Nord',
  department: '92',
  population: '43500',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Asnières-sur-Seine Nord 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier asnieres-sur-seine-nord', 'serrurier urgence asnieres-sur-seine-nord', 'ouverture porte asnieres-sur-seine-nord', 'serrurier 24h asnieres-sur-seine-nord', 'dépannage serrure asnieres-sur-seine-nord']
};

export default function Page() {
  return <CityPage 
    cityName="Asnières-sur-Seine Nord"
    citySlug="asnieres-sur-seine-nord"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Asnières-sur-Seine Nord - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier asnieres-sur-seine-nord", "serrurier urgence asnieres-sur-seine-nord", "ouverture porte asnieres-sur-seine-nord", "serrurier 24h asnieres-sur-seine-nord", "dépannage serrure asnieres-sur-seine-nord"]}
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