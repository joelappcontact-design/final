import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Poigny-la-Forêt',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Poigny-la-Forêt 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier poigny-la-foret', 'serrurier urgence poigny-la-foret', 'ouverture porte poigny-la-foret', 'serrurier 24h poigny-la-foret', 'dépannage serrure poigny-la-foret']
};

export default function Page() {
  return <CityPage 
    cityName="Poigny-la-Forêt"
    citySlug="poigny-la-foret"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Poigny-la-Forêt - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier poigny-la-foret", "serrurier urgence poigny-la-foret", "ouverture porte poigny-la-foret", "serrurier 24h poigny-la-foret", "dépannage serrure poigny-la-foret"]}
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