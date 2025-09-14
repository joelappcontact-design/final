import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Leu-la-Forêt',
  department: '95',
  population: '15000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Leu-la-Forêt 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-leu-la-foret', 'serrurier urgence saint-leu-la-foret', 'ouverture porte saint-leu-la-foret', 'serrurier 24h saint-leu-la-foret', 'dépannage serrure saint-leu-la-foret']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Leu-la-Forêt"
    citySlug="saint-leu-la-foret"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Leu-la-Forêt - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-leu-la-foret", "serrurier urgence saint-leu-la-foret", "ouverture porte saint-leu-la-foret", "serrurier 24h saint-leu-la-foret", "dépannage serrure saint-leu-la-foret"]}
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