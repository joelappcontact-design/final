import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Clichy',
  department: '92',
  population: '62000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier des Batignolles'],
  description: 'Serrurier d\'urgence Clichy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier clichy', 'serrurier urgence clichy', 'ouverture porte clichy', 'serrurier 24h clichy', 'dépannage serrure clichy']
};

export default function Page() {
  return <CityPage 
    cityName="Clichy"
    citySlug="clichy"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier des Batignolles']}
    description="Clichy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier clichy", "serrurier urgence clichy", "ouverture porte clichy", "serrurier 24h clichy", "dépannage serrure clichy"]}
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