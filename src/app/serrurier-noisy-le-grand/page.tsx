import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Noisy-le-Grand',
  department: '93',
  population: '68000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Noisy-le-Grand 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier noisy-le-grand', 'serrurier urgence noisy-le-grand', 'ouverture porte noisy-le-grand', 'serrurier 24h noisy-le-grand', 'dépannage serrure noisy-le-grand']
};

export default function Page() {
  return <CityPage 
    cityName="Noisy-le-Grand"
    citySlug="noisy-le-grand"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Noisy-le-Grand - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier noisy-le-grand", "serrurier urgence noisy-le-grand", "ouverture porte noisy-le-grand", "serrurier 24h noisy-le-grand", "dépannage serrure noisy-le-grand"]}
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