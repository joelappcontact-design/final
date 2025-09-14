import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Clichy Nord',
  department: '92',
  population: '31000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Clichy Nord 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier clichy-nord', 'serrurier urgence clichy-nord', 'ouverture porte clichy-nord', 'serrurier 24h clichy-nord', 'dépannage serrure clichy-nord']
};

export default function Page() {
  return <CityPage 
    cityName="Clichy Nord"
    citySlug="clichy-nord"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Clichy Nord - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier clichy-nord", "serrurier urgence clichy-nord", "ouverture porte clichy-nord", "serrurier 24h clichy-nord", "dépannage serrure clichy-nord"]}
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