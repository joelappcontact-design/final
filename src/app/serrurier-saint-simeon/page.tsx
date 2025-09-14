import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Siméon',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Siméon 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-simeon', 'serrurier urgence saint-simeon', 'ouverture porte saint-simeon', 'serrurier 24h saint-simeon', 'dépannage serrure saint-simeon']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Siméon"
    citySlug="saint-simeon"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Siméon - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-simeon", "serrurier urgence saint-simeon", "ouverture porte saint-simeon", "serrurier 24h saint-simeon", "dépannage serrure saint-simeon"]}
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