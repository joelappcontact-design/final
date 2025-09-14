import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Reuil-en-Brie',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Reuil-en-Brie 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier reuil-en-brie', 'serrurier urgence reuil-en-brie', 'ouverture porte reuil-en-brie', 'serrurier 24h reuil-en-brie', 'dépannage serrure reuil-en-brie']
};

export default function Page() {
  return <CityPage 
    cityName="Reuil-en-Brie"
    citySlug="reuil-en-brie"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Reuil-en-Brie - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier reuil-en-brie", "serrurier urgence reuil-en-brie", "ouverture porte reuil-en-brie", "serrurier 24h reuil-en-brie", "dépannage serrure reuil-en-brie"]}
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