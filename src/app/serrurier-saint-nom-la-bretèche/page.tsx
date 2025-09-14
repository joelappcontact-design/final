import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Nom-la-Bretèche',
  department: '78',
  population: '5000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Nom-la-Bretèche 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-nom-la-bretèche', 'serrurier urgence saint-nom-la-bretèche', 'ouverture porte saint-nom-la-bretèche', 'serrurier 24h saint-nom-la-bretèche', 'dépannage serrure saint-nom-la-bretèche']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Nom-la-Bretèche"
    citySlug="saint-nom-la-bretèche"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Nom-la-Bretèche - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-nom-la-bretèche", "serrurier urgence saint-nom-la-bretèche", "ouverture porte saint-nom-la-bretèche", "serrurier 24h saint-nom-la-bretèche", "dépannage serrure saint-nom-la-bretèche"]}
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