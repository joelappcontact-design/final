import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Ouen-en-Brie',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Ouen-en-Brie 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-ouen-en-brie-91', 'serrurier urgence saint-ouen-en-brie-91', 'ouverture porte saint-ouen-en-brie-91', 'serrurier 24h saint-ouen-en-brie-91', 'dépannage serrure saint-ouen-en-brie-91']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Ouen-en-Brie"
    citySlug="saint-ouen-en-brie-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Ouen-en-Brie - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-ouen-en-brie-91", "serrurier urgence saint-ouen-en-brie-91", "ouverture porte saint-ouen-en-brie-91", "serrurier 24h saint-ouen-en-brie-91", "dépannage serrure saint-ouen-en-brie-91"]}
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