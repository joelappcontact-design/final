import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Noisy-le-Grand Nord',
  department: '93',
  population: '34000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Noisy-le-Grand Nord 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier noisy-le-grand-nord', 'serrurier urgence noisy-le-grand-nord', 'ouverture porte noisy-le-grand-nord', 'serrurier 24h noisy-le-grand-nord', 'dépannage serrure noisy-le-grand-nord']
};

export default function Page() {
  return <CityPage 
    cityName="Noisy-le-Grand Nord"
    citySlug="noisy-le-grand-nord"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Noisy-le-Grand Nord - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier noisy-le-grand-nord", "serrurier urgence noisy-le-grand-nord", "ouverture porte noisy-le-grand-nord", "serrurier 24h noisy-le-grand-nord", "dépannage serrure noisy-le-grand-nord"]}
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