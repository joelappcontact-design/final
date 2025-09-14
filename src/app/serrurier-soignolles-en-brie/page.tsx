import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Soignolles-en-Brie',
  department: '78',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Soignolles-en-Brie 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier soignolles-en-brie', 'serrurier urgence soignolles-en-brie', 'ouverture porte soignolles-en-brie', 'serrurier 24h soignolles-en-brie', 'dépannage serrure soignolles-en-brie']
};

export default function Page() {
  return <CityPage 
    cityName="Soignolles-en-Brie"
    citySlug="soignolles-en-brie"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Soignolles-en-Brie - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier soignolles-en-brie", "serrurier urgence soignolles-en-brie", "ouverture porte soignolles-en-brie", "serrurier 24h soignolles-en-brie", "dépannage serrure soignolles-en-brie"]}
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