import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Colombes Nord',
  department: '92',
  population: '42500',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Colombes Nord 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier colombes-nord', 'serrurier urgence colombes-nord', 'ouverture porte colombes-nord', 'serrurier 24h colombes-nord', 'dépannage serrure colombes-nord']
};

export default function Page() {
  return <CityPage 
    cityName="Colombes Nord"
    citySlug="colombes-nord"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Colombes Nord - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier colombes-nord", "serrurier urgence colombes-nord", "ouverture porte colombes-nord", "serrurier 24h colombes-nord", "dépannage serrure colombes-nord"]}
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