import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Hilliers',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Hilliers 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-hilliers-91', 'serrurier urgence saint-hilliers-91', 'ouverture porte saint-hilliers-91', 'serrurier 24h saint-hilliers-91', 'dépannage serrure saint-hilliers-91']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Hilliers"
    citySlug="saint-hilliers-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Hilliers - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-hilliers-91", "serrurier urgence saint-hilliers-91", "ouverture porte saint-hilliers-91", "serrurier 24h saint-hilliers-91", "dépannage serrure saint-hilliers-91"]}
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