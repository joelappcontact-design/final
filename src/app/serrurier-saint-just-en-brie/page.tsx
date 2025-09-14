import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Just-en-Brie',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Just-en-Brie 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-just-en-brie', 'serrurier urgence saint-just-en-brie', 'ouverture porte saint-just-en-brie', 'serrurier 24h saint-just-en-brie', 'dépannage serrure saint-just-en-brie']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Just-en-Brie"
    citySlug="saint-just-en-brie"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Just-en-Brie - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-just-en-brie", "serrurier urgence saint-just-en-brie", "ouverture porte saint-just-en-brie", "serrurier 24h saint-just-en-brie", "dépannage serrure saint-just-en-brie"]}
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