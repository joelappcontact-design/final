import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Chaumes-en-Brie',
  department: '77',
  population: '2500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Chaumes-en-Brie 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chaumes-en-brie', 'serrurier urgence chaumes-en-brie', 'ouverture porte chaumes-en-brie', 'serrurier 24h chaumes-en-brie', 'dépannage serrure chaumes-en-brie']
};

export default function Page() {
  return <CityPage 
    cityName="Chaumes-en-Brie"
    citySlug="chaumes-en-brie"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Chaumes-en-Brie - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chaumes-en-brie", "serrurier urgence chaumes-en-brie", "ouverture porte chaumes-en-brie", "serrurier 24h chaumes-en-brie", "dépannage serrure chaumes-en-brie"]}
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