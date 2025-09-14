import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Léger',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Léger 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-leger', 'serrurier urgence saint-leger', 'ouverture porte saint-leger', 'serrurier 24h saint-leger', 'dépannage serrure saint-leger']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Léger"
    citySlug="saint-leger"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Léger - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-leger", "serrurier urgence saint-leger", "ouverture porte saint-leger", "serrurier 24h saint-leger", "dépannage serrure saint-leger"]}
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