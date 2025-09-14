import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Fargeau-Ponthierry',
  department: '77',
  population: '13000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Fargeau-Ponthierry 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-fargeau-ponthierry', 'serrurier urgence saint-fargeau-ponthierry', 'ouverture porte saint-fargeau-ponthierry', 'serrurier 24h saint-fargeau-ponthierry', 'dépannage serrure saint-fargeau-ponthierry']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Fargeau-Ponthierry"
    citySlug="saint-fargeau-ponthierry"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Fargeau-Ponthierry - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-fargeau-ponthierry", "serrurier urgence saint-fargeau-ponthierry", "ouverture porte saint-fargeau-ponthierry", "serrurier 24h saint-fargeau-ponthierry", "dépannage serrure saint-fargeau-ponthierry"]}
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