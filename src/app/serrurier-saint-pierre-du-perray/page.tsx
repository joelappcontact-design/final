import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Pierre-du-Perray',
  department: '91',
  population: '7500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Pierre-du-Perray 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-pierre-du-perray', 'serrurier urgence saint-pierre-du-perray', 'ouverture porte saint-pierre-du-perray', 'serrurier 24h saint-pierre-du-perray', 'dépannage serrure saint-pierre-du-perray']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Pierre-du-Perray"
    citySlug="saint-pierre-du-perray"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Pierre-du-Perray - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-pierre-du-perray", "serrurier urgence saint-pierre-du-perray", "ouverture porte saint-pierre-du-perray", "serrurier 24h saint-pierre-du-perray", "dépannage serrure saint-pierre-du-perray"]}
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