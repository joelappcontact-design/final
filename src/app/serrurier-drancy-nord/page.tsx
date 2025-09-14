import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Drancy Nord',
  department: '93',
  population: '36000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Drancy Nord 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier drancy-nord', 'serrurier urgence drancy-nord', 'ouverture porte drancy-nord', 'serrurier 24h drancy-nord', 'dépannage serrure drancy-nord']
};

export default function Page() {
  return <CityPage 
    cityName="Drancy Nord"
    citySlug="drancy-nord"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Drancy Nord - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier drancy-nord", "serrurier urgence drancy-nord", "ouverture porte drancy-nord", "serrurier 24h drancy-nord", "dépannage serrure drancy-nord"]}
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