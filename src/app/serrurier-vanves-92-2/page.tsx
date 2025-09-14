import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Vanves',
  department: '92',
  population: '28000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Vanves 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier vanves-92-2', 'serrurier urgence vanves-92-2', 'ouverture porte vanves-92-2', 'serrurier 24h vanves-92-2', 'dépannage serrure vanves-92-2']
};

export default function Page() {
  return <CityPage 
    cityName="Vanves"
    citySlug="vanves-92-2"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Vanves - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier vanves-92-2", "serrurier urgence vanves-92-2", "ouverture porte vanves-92-2", "serrurier 24h vanves-92-2", "dépannage serrure vanves-92-2"]}
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