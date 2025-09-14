import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Brie-Comte-Robert',
  department: '77',
  population: '16000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Brie-Comte-Robert 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier brie-comte-robert', 'serrurier urgence brie-comte-robert', 'ouverture porte brie-comte-robert', 'serrurier 24h brie-comte-robert', 'dépannage serrure brie-comte-robert']
};

export default function Page() {
  return <CityPage 
    cityName="Brie-Comte-Robert"
    citySlug="brie-comte-robert"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Brie-Comte-Robert - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier brie-comte-robert", "serrurier urgence brie-comte-robert", "ouverture porte brie-comte-robert", "serrurier 24h brie-comte-robert", "dépannage serrure brie-comte-robert"]}
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