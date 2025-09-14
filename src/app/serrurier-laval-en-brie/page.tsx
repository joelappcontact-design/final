import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Laval-en-Brie',
  department: '77',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Laval-en-Brie 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier laval-en-brie', 'serrurier urgence laval-en-brie', 'ouverture porte laval-en-brie', 'serrurier 24h laval-en-brie', 'dépannage serrure laval-en-brie']
};

export default function Page() {
  return <CityPage 
    cityName="Laval-en-Brie"
    citySlug="laval-en-brie"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Laval-en-Brie - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier laval-en-brie", "serrurier urgence laval-en-brie", "ouverture porte laval-en-brie", "serrurier 24h laval-en-brie", "dépannage serrure laval-en-brie"]}
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