import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Liverdy-en-Brie',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Liverdy-en-Brie 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier liverdy-en-brie', 'serrurier urgence liverdy-en-brie', 'ouverture porte liverdy-en-brie', 'serrurier 24h liverdy-en-brie', 'dépannage serrure liverdy-en-brie']
};

export default function Page() {
  return <CityPage 
    cityName="Liverdy-en-Brie"
    citySlug="liverdy-en-brie"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Liverdy-en-Brie - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier liverdy-en-brie", "serrurier urgence liverdy-en-brie", "ouverture porte liverdy-en-brie", "serrurier 24h liverdy-en-brie", "dépannage serrure liverdy-en-brie"]}
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