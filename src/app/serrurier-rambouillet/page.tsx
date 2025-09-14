import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Rambouillet',
  department: '92',
  population: '26000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Château'],
  description: 'Serrurier d\'urgence Rambouillet 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier rambouillet', 'serrurier urgence rambouillet', 'ouverture porte rambouillet', 'serrurier 24h rambouillet', 'dépannage serrure rambouillet']
};

export default function Page() {
  return <CityPage 
    cityName="Rambouillet"
    citySlug="rambouillet"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Château']}
    description="Rambouillet - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier rambouillet", "serrurier urgence rambouillet", "ouverture porte rambouillet", "serrurier 24h rambouillet", "dépannage serrure rambouillet"]}
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