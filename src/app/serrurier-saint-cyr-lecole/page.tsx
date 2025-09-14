import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Cyr-l\'École',
  department: '78',
  population: '17000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Cyr-l\'École 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-cyr-lecole', 'serrurier urgence saint-cyr-lecole', 'ouverture porte saint-cyr-lecole', 'serrurier 24h saint-cyr-lecole', 'dépannage serrure saint-cyr-lecole']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Cyr-l\'École"
    citySlug="saint-cyr-lecole"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Cyr-l\'École - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-cyr-lecole", "serrurier urgence saint-cyr-lecole", "ouverture porte saint-cyr-lecole", "serrurier 24h saint-cyr-lecole", "dépannage serrure saint-cyr-lecole"]}
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