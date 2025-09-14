import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Germain-de-la-Grange',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Germain-de-la-Grange 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-germain-de-la-grange', 'serrurier urgence saint-germain-de-la-grange', 'ouverture porte saint-germain-de-la-grange', 'serrurier 24h saint-germain-de-la-grange', 'dépannage serrure saint-germain-de-la-grange']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Germain-de-la-Grange"
    citySlug="saint-germain-de-la-grange"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Germain-de-la-Grange - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-germain-de-la-grange", "serrurier urgence saint-germain-de-la-grange", "ouverture porte saint-germain-de-la-grange", "serrurier 24h saint-germain-de-la-grange", "dépannage serrure saint-germain-de-la-grange"]}
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