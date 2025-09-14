import CityPage from '@/components/CityPage';

const cityData = {
  name: 'La Queue-en-Brie',
  department: '91',
  population: '12000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence La Queue-en-Brie 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier la-queue-en-brie', 'serrurier urgence la-queue-en-brie', 'ouverture porte la-queue-en-brie', 'serrurier 24h la-queue-en-brie', 'dépannage serrure la-queue-en-brie']
};

export default function Page() {
  return <CityPage 
    cityName="La Queue-en-Brie"
    citySlug="la-queue-en-brie"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="La Queue-en-Brie - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier la-queue-en-brie", "serrurier urgence la-queue-en-brie", "ouverture porte la-queue-en-brie", "serrurier 24h la-queue-en-brie", "dépannage serrure la-queue-en-brie"]}
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