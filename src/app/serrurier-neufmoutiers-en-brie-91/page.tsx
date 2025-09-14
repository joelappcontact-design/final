import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Neufmoutiers-en-Brie',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Neufmoutiers-en-Brie 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier neufmoutiers-en-brie-91', 'serrurier urgence neufmoutiers-en-brie-91', 'ouverture porte neufmoutiers-en-brie-91', 'serrurier 24h neufmoutiers-en-brie-91', 'dépannage serrure neufmoutiers-en-brie-91']
};

export default function Page() {
  return <CityPage 
    cityName="Neufmoutiers-en-Brie"
    citySlug="neufmoutiers-en-brie-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Neufmoutiers-en-Brie - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier neufmoutiers-en-brie-91", "serrurier urgence neufmoutiers-en-brie-91", "ouverture porte neufmoutiers-en-brie-91", "serrurier 24h neufmoutiers-en-brie-91", "dépannage serrure neufmoutiers-en-brie-91"]}
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