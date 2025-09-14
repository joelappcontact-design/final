import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Illiers-le-Bois',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Illiers-le-Bois 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-illiers-le-bois', 'serrurier urgence saint-illiers-le-bois', 'ouverture porte saint-illiers-le-bois', 'serrurier 24h saint-illiers-le-bois', 'dépannage serrure saint-illiers-le-bois']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Illiers-le-Bois"
    citySlug="saint-illiers-le-bois"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Illiers-le-Bois - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-illiers-le-bois", "serrurier urgence saint-illiers-le-bois", "ouverture porte saint-illiers-le-bois", "serrurier 24h saint-illiers-le-bois", "dépannage serrure saint-illiers-le-bois"]}
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