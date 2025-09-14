import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Illiers-la-Ville',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Illiers-la-Ville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-illiers-la-ville', 'serrurier urgence saint-illiers-la-ville', 'ouverture porte saint-illiers-la-ville', 'serrurier 24h saint-illiers-la-ville', 'dépannage serrure saint-illiers-la-ville']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Illiers-la-Ville"
    citySlug="saint-illiers-la-ville"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Illiers-la-Ville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-illiers-la-ville", "serrurier urgence saint-illiers-la-ville", "ouverture porte saint-illiers-la-ville", "serrurier 24h saint-illiers-la-ville", "dépannage serrure saint-illiers-la-ville"]}
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