import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Cloud-Centre',
  department: '92',
  population: '30000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Cloud-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-cloud-centre', 'serrurier urgence saint-cloud-centre', 'ouverture porte saint-cloud-centre', 'serrurier 24h saint-cloud-centre', 'dépannage serrure saint-cloud-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Cloud-Centre"
    citySlug="saint-cloud-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Cloud-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-cloud-centre", "serrurier urgence saint-cloud-centre", "ouverture porte saint-cloud-centre", "serrurier 24h saint-cloud-centre", "dépannage serrure saint-cloud-centre"]}
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