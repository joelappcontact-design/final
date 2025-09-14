import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Roissy-en-Brie',
  department: '77',
  population: '23000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Roissy-en-Brie 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier roissy-en-brie', 'serrurier urgence roissy-en-brie', 'ouverture porte roissy-en-brie', 'serrurier 24h roissy-en-brie', 'dépannage serrure roissy-en-brie']
};

export default function Page() {
  return <CityPage 
    cityName="Roissy-en-Brie"
    citySlug="roissy-en-brie"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Roissy-en-Brie - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier roissy-en-brie", "serrurier urgence roissy-en-brie", "ouverture porte roissy-en-brie", "serrurier 24h roissy-en-brie", "dépannage serrure roissy-en-brie"]}
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