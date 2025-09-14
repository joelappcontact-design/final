import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Choisy-en-Brie',
  department: '77',
  population: '1500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Choisy-en-Brie 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier choisy-en-brie', 'serrurier urgence choisy-en-brie', 'ouverture porte choisy-en-brie', 'serrurier 24h choisy-en-brie', 'dépannage serrure choisy-en-brie']
};

export default function Page() {
  return <CityPage 
    cityName="Choisy-en-Brie"
    citySlug="choisy-en-brie"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Choisy-en-Brie - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier choisy-en-brie", "serrurier urgence choisy-en-brie", "ouverture porte choisy-en-brie", "serrurier 24h choisy-en-brie", "dépannage serrure choisy-en-brie"]}
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