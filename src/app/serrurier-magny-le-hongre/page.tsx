import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Magny-le-Hongre',
  department: '77',
  population: '6000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Magny-le-Hongre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier magny-le-hongre', 'serrurier urgence magny-le-hongre', 'ouverture porte magny-le-hongre', 'serrurier 24h magny-le-hongre', 'dépannage serrure magny-le-hongre']
};

export default function Page() {
  return <CityPage 
    cityName="Magny-le-Hongre"
    citySlug="magny-le-hongre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Magny-le-Hongre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier magny-le-hongre", "serrurier urgence magny-le-hongre", "ouverture porte magny-le-hongre", "serrurier 24h magny-le-hongre", "dépannage serrure magny-le-hongre"]}
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