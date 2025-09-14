import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Tournan-en-Brie',
  department: '77',
  population: '9000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Tournan-en-Brie 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier tournan-en-brie', 'serrurier urgence tournan-en-brie', 'ouverture porte tournan-en-brie', 'serrurier 24h tournan-en-brie', 'dépannage serrure tournan-en-brie']
};

export default function Page() {
  return <CityPage 
    cityName="Tournan-en-Brie"
    citySlug="tournan-en-brie"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Tournan-en-Brie - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier tournan-en-brie", "serrurier urgence tournan-en-brie", "ouverture porte tournan-en-brie", "serrurier 24h tournan-en-brie", "dépannage serrure tournan-en-brie"]}
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