import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Lambert',
  department: '78',
  population: '600',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Lambert 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-lambert', 'serrurier urgence saint-lambert', 'ouverture porte saint-lambert', 'serrurier 24h saint-lambert', 'dépannage serrure saint-lambert']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Lambert"
    citySlug="saint-lambert"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Lambert - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-lambert", "serrurier urgence saint-lambert", "ouverture porte saint-lambert", "serrurier 24h saint-lambert", "dépannage serrure saint-lambert"]}
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