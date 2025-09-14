import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Malakoff-Centre',
  department: '92',
  population: '30000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Malakoff-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier malakoff-centre', 'serrurier urgence malakoff-centre', 'ouverture porte malakoff-centre', 'serrurier 24h malakoff-centre', 'dépannage serrure malakoff-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Malakoff-Centre"
    citySlug="malakoff-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Malakoff-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier malakoff-centre", "serrurier urgence malakoff-centre", "ouverture porte malakoff-centre", "serrurier 24h malakoff-centre", "dépannage serrure malakoff-centre"]}
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