import CityPage from '@/components/CityPage';

const cityData = {
  name: 'La Celle-Saint-Cloud',
  department: '78',
  population: '21000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence La Celle-Saint-Cloud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier la-celle-saint-cloud', 'serrurier urgence la-celle-saint-cloud', 'ouverture porte la-celle-saint-cloud', 'serrurier 24h la-celle-saint-cloud', 'dépannage serrure la-celle-saint-cloud']
};

export default function Page() {
  return <CityPage 
    cityName="La Celle-Saint-Cloud"
    citySlug="la-celle-saint-cloud"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="La Celle-Saint-Cloud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier la-celle-saint-cloud", "serrurier urgence la-celle-saint-cloud", "ouverture porte la-celle-saint-cloud", "serrurier 24h la-celle-saint-cloud", "dépannage serrure la-celle-saint-cloud"]}
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