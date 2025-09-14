import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Martin-la-Garenne',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Martin-la-Garenne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-martin-la-garenne', 'serrurier urgence saint-martin-la-garenne', 'ouverture porte saint-martin-la-garenne', 'serrurier 24h saint-martin-la-garenne', 'dépannage serrure saint-martin-la-garenne']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Martin-la-Garenne"
    citySlug="saint-martin-la-garenne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Martin-la-Garenne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-martin-la-garenne", "serrurier urgence saint-martin-la-garenne", "ouverture porte saint-martin-la-garenne", "serrurier 24h saint-martin-la-garenne", "dépannage serrure saint-martin-la-garenne"]}
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