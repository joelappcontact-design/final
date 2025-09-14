import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Ouen-sur-Morin',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Ouen-sur-Morin 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-ouen-sur-morin', 'serrurier urgence saint-ouen-sur-morin', 'ouverture porte saint-ouen-sur-morin', 'serrurier 24h saint-ouen-sur-morin', 'dépannage serrure saint-ouen-sur-morin']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Ouen-sur-Morin"
    citySlug="saint-ouen-sur-morin"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Ouen-sur-Morin - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-ouen-sur-morin", "serrurier urgence saint-ouen-sur-morin", "ouverture porte saint-ouen-sur-morin", "serrurier 24h saint-ouen-sur-morin", "dépannage serrure saint-ouen-sur-morin"]}
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