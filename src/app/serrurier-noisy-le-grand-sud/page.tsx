import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Noisy-le-Grand Sud',
  department: '93',
  population: '34000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Noisy-le-Grand Sud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier noisy-le-grand-sud', 'serrurier urgence noisy-le-grand-sud', 'ouverture porte noisy-le-grand-sud', 'serrurier 24h noisy-le-grand-sud', 'dépannage serrure noisy-le-grand-sud']
};

export default function Page() {
  return <CityPage 
    cityName="Noisy-le-Grand Sud"
    citySlug="noisy-le-grand-sud"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Noisy-le-Grand Sud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier noisy-le-grand-sud", "serrurier urgence noisy-le-grand-sud", "ouverture porte noisy-le-grand-sud", "serrurier 24h noisy-le-grand-sud", "dépannage serrure noisy-le-grand-sud"]}
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