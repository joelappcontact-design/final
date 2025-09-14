import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Cloud',
  department: '92',
  population: '30000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Cloud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-cloud-92', 'serrurier urgence saint-cloud-92', 'ouverture porte saint-cloud-92', 'serrurier 24h saint-cloud-92', 'dépannage serrure saint-cloud-92']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Cloud"
    citySlug="saint-cloud-92"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Cloud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-cloud-92", "serrurier urgence saint-cloud-92", "ouverture porte saint-cloud-92", "serrurier 24h saint-cloud-92", "dépannage serrure saint-cloud-92"]}
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