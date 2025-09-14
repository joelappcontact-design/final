import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Villeparisis',
  department: '77',
  population: '26000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Villeparisis 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier villeparisis', 'serrurier urgence villeparisis', 'ouverture porte villeparisis', 'serrurier 24h villeparisis', 'dépannage serrure villeparisis']
};

export default function Page() {
  return <CityPage 
    cityName="Villeparisis"
    citySlug="villeparisis"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Villeparisis - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier villeparisis", "serrurier urgence villeparisis", "ouverture porte villeparisis", "serrurier 24h villeparisis", "dépannage serrure villeparisis"]}
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