import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Denis',
  department: '93',
  population: '110000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Denis 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-denis-93-2', 'serrurier urgence saint-denis-93-2', 'ouverture porte saint-denis-93-2', 'serrurier 24h saint-denis-93-2', 'dépannage serrure saint-denis-93-2']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Denis"
    citySlug="saint-denis-93-2"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Denis - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-denis-93-2", "serrurier urgence saint-denis-93-2", "ouverture porte saint-denis-93-2", "serrurier 24h saint-denis-93-2", "dépannage serrure saint-denis-93-2"]}
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