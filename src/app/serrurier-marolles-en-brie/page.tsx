import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Marolles-en-Brie',
  department: '94',
  population: '5000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Marolles-en-Brie 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier marolles-en-brie', 'serrurier urgence marolles-en-brie', 'ouverture porte marolles-en-brie', 'serrurier 24h marolles-en-brie', 'dépannage serrure marolles-en-brie']
};

export default function Page() {
  return <CityPage 
    cityName="Marolles-en-Brie"
    citySlug="marolles-en-brie"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Marolles-en-Brie - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier marolles-en-brie", "serrurier urgence marolles-en-brie", "ouverture porte marolles-en-brie", "serrurier 24h marolles-en-brie", "dépannage serrure marolles-en-brie"]}
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