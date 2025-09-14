import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Denis',
  department: '93',
  population: '111000',
  priority: 'critique',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Denis 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-denis', 'serrurier urgence saint-denis', 'ouverture porte saint-denis', 'serrurier 24h saint-denis', 'dépannage serrure saint-denis']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Denis"
    citySlug="saint-denis"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Denis - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-denis", "serrurier urgence saint-denis", "ouverture porte saint-denis", "serrurier 24h saint-denis", "dépannage serrure saint-denis"]}
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