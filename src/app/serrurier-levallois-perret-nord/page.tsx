import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Levallois-Perret Nord',
  department: '92',
  population: '34000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Levallois-Perret Nord 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier levallois-perret-nord', 'serrurier urgence levallois-perret-nord', 'ouverture porte levallois-perret-nord', 'serrurier 24h levallois-perret-nord', 'dépannage serrure levallois-perret-nord']
};

export default function Page() {
  return <CityPage 
    cityName="Levallois-Perret Nord"
    citySlug="levallois-perret-nord"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Levallois-Perret Nord - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier levallois-perret-nord", "serrurier urgence levallois-perret-nord", "ouverture porte levallois-perret-nord", "serrurier 24h levallois-perret-nord", "dépannage serrure levallois-perret-nord"]}
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