import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Guyancourt',
  department: '92',
  population: '30000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Guyancourt 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier guyancourt', 'serrurier urgence guyancourt', 'ouverture porte guyancourt', 'serrurier 24h guyancourt', 'dépannage serrure guyancourt']
};

export default function Page() {
  return <CityPage 
    cityName="Guyancourt"
    citySlug="guyancourt"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Guyancourt - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier guyancourt", "serrurier urgence guyancourt", "ouverture porte guyancourt", "serrurier 24h guyancourt", "dépannage serrure guyancourt"]}
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