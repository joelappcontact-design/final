import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Malakoff',
  department: '92',
  population: '30000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Malakoff 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier malakoff-92', 'serrurier urgence malakoff-92', 'ouverture porte malakoff-92', 'serrurier 24h malakoff-92', 'dépannage serrure malakoff-92']
};

export default function Page() {
  return <CityPage 
    cityName="Malakoff"
    citySlug="malakoff-92"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Malakoff - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier malakoff-92", "serrurier urgence malakoff-92", "ouverture porte malakoff-92", "serrurier 24h malakoff-92", "dépannage serrure malakoff-92"]}
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