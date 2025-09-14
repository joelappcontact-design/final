import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Cachan',
  department: '94',
  population: '30000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Cachan 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier cachan', 'serrurier urgence cachan', 'ouverture porte cachan', 'serrurier 24h cachan', 'dépannage serrure cachan']
};

export default function Page() {
  return <CityPage 
    cityName="Cachan"
    citySlug="cachan"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Cachan - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier cachan", "serrurier urgence cachan", "ouverture porte cachan", "serrurier 24h cachan", "dépannage serrure cachan"]}
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