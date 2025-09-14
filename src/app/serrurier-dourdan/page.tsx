import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Dourdan',
  department: '91',
  population: '11000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Dourdan 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier dourdan', 'serrurier urgence dourdan', 'ouverture porte dourdan', 'serrurier 24h dourdan', 'dépannage serrure dourdan']
};

export default function Page() {
  return <CityPage 
    cityName="Dourdan"
    citySlug="dourdan"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Dourdan - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier dourdan", "serrurier urgence dourdan", "ouverture porte dourdan", "serrurier 24h dourdan", "dépannage serrure dourdan"]}
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