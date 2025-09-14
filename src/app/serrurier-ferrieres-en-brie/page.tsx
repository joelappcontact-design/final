import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Ferrières-en-Brie',
  department: '77',
  population: '3000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Ferrières-en-Brie 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier ferrieres-en-brie', 'serrurier urgence ferrieres-en-brie', 'ouverture porte ferrieres-en-brie', 'serrurier 24h ferrieres-en-brie', 'dépannage serrure ferrieres-en-brie']
};

export default function Page() {
  return <CityPage 
    cityName="Ferrières-en-Brie"
    citySlug="ferrieres-en-brie"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Ferrières-en-Brie - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier ferrieres-en-brie", "serrurier urgence ferrieres-en-brie", "ouverture porte ferrieres-en-brie", "serrurier 24h ferrieres-en-brie", "dépannage serrure ferrieres-en-brie"]}
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