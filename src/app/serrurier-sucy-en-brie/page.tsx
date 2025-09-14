import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Sucy-en-Brie',
  department: '94',
  population: '27000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Sucy-en-Brie 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier sucy-en-brie', 'serrurier urgence sucy-en-brie', 'ouverture porte sucy-en-brie', 'serrurier 24h sucy-en-brie', 'dépannage serrure sucy-en-brie']
};

export default function Page() {
  return <CityPage 
    cityName="Sucy-en-Brie"
    citySlug="sucy-en-brie"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Sucy-en-Brie - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier sucy-en-brie", "serrurier urgence sucy-en-brie", "ouverture porte sucy-en-brie", "serrurier 24h sucy-en-brie", "dépannage serrure sucy-en-brie"]}
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