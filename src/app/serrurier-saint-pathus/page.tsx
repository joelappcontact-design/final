import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Pathus',
  department: '77',
  population: '6000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Pathus 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-pathus', 'serrurier urgence saint-pathus', 'ouverture porte saint-pathus', 'serrurier 24h saint-pathus', 'dépannage serrure saint-pathus']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Pathus"
    citySlug="saint-pathus"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Pathus - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-pathus", "serrurier urgence saint-pathus", "ouverture porte saint-pathus", "serrurier 24h saint-pathus", "dépannage serrure saint-pathus"]}
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