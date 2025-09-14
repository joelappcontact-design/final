import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Ouen-sur-Seine',
  department: '93',
  population: '50000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Ouen-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-ouen-sur-seine', 'serrurier urgence saint-ouen-sur-seine', 'ouverture porte saint-ouen-sur-seine', 'serrurier 24h saint-ouen-sur-seine', 'dépannage serrure saint-ouen-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Ouen-sur-Seine"
    citySlug="saint-ouen-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Ouen-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-ouen-sur-seine", "serrurier urgence saint-ouen-sur-seine", "ouverture porte saint-ouen-sur-seine", "serrurier 24h saint-ouen-sur-seine", "dépannage serrure saint-ouen-sur-seine"]}
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