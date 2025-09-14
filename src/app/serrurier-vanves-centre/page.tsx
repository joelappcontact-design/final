import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Vanves-Centre',
  department: '92',
  population: '27000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Vanves-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier vanves-centre', 'serrurier urgence vanves-centre', 'ouverture porte vanves-centre', 'serrurier 24h vanves-centre', 'dépannage serrure vanves-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Vanves-Centre"
    citySlug="vanves-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Vanves-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier vanves-centre", "serrurier urgence vanves-centre", "ouverture porte vanves-centre", "serrurier 24h vanves-centre", "dépannage serrure vanves-centre"]}
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