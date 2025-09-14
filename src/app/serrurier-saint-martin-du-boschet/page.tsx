import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Martin-du-Boschet',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Martin-du-Boschet 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-martin-du-boschet', 'serrurier urgence saint-martin-du-boschet', 'ouverture porte saint-martin-du-boschet', 'serrurier 24h saint-martin-du-boschet', 'dépannage serrure saint-martin-du-boschet']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Martin-du-Boschet"
    citySlug="saint-martin-du-boschet"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Martin-du-Boschet - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-martin-du-boschet", "serrurier urgence saint-martin-du-boschet", "ouverture porte saint-martin-du-boschet", "serrurier 24h saint-martin-du-boschet", "dépannage serrure saint-martin-du-boschet"]}
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