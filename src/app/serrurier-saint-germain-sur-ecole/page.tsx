import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Germain-sur-École',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Germain-sur-École 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-germain-sur-ecole', 'serrurier urgence saint-germain-sur-ecole', 'ouverture porte saint-germain-sur-ecole', 'serrurier 24h saint-germain-sur-ecole', 'dépannage serrure saint-germain-sur-ecole']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Germain-sur-École"
    citySlug="saint-germain-sur-ecole"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Germain-sur-École - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-germain-sur-ecole", "serrurier urgence saint-germain-sur-ecole", "ouverture porte saint-germain-sur-ecole", "serrurier 24h saint-germain-sur-ecole", "dépannage serrure saint-germain-sur-ecole"]}
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