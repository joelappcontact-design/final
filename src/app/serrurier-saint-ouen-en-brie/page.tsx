import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Ouen-en-Brie',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Ouen-en-Brie 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-ouen-en-brie', 'serrurier urgence saint-ouen-en-brie', 'ouverture porte saint-ouen-en-brie', 'serrurier 24h saint-ouen-en-brie', 'dépannage serrure saint-ouen-en-brie']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Ouen-en-Brie"
    citySlug="saint-ouen-en-brie"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Ouen-en-Brie - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-ouen-en-brie", "serrurier urgence saint-ouen-en-brie", "ouverture porte saint-ouen-en-brie", "serrurier 24h saint-ouen-en-brie", "dépannage serrure saint-ouen-en-brie"]}
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