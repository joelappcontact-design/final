import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Sucy-en-Brie',
  department: '91',
  population: '26000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Sucy-en-Brie 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier sucy-en-brie-91', 'serrurier urgence sucy-en-brie-91', 'ouverture porte sucy-en-brie-91', 'serrurier 24h sucy-en-brie-91', 'dépannage serrure sucy-en-brie-91']
};

export default function Page() {
  return <CityPage 
    cityName="Sucy-en-Brie"
    citySlug="sucy-en-brie-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Sucy-en-Brie - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier sucy-en-brie-91", "serrurier urgence sucy-en-brie-91", "ouverture porte sucy-en-brie-91", "serrurier 24h sucy-en-brie-91", "dépannage serrure sucy-en-brie-91"]}
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