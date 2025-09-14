import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Fiacre',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Fiacre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-fiacre', 'serrurier urgence saint-fiacre', 'ouverture porte saint-fiacre', 'serrurier 24h saint-fiacre', 'dépannage serrure saint-fiacre']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Fiacre"
    citySlug="saint-fiacre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Fiacre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-fiacre", "serrurier urgence saint-fiacre", "ouverture porte saint-fiacre", "serrurier 24h saint-fiacre", "dépannage serrure saint-fiacre"]}
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