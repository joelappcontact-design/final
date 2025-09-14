import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Arnoult-en-Yvelines',
  department: '78',
  population: '5000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Arnoult-en-Yvelines 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-arnoult-en-yvelines', 'serrurier urgence saint-arnoult-en-yvelines', 'ouverture porte saint-arnoult-en-yvelines', 'serrurier 24h saint-arnoult-en-yvelines', 'dépannage serrure saint-arnoult-en-yvelines']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Arnoult-en-Yvelines"
    citySlug="saint-arnoult-en-yvelines"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Arnoult-en-Yvelines - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-arnoult-en-yvelines", "serrurier urgence saint-arnoult-en-yvelines", "ouverture porte saint-arnoult-en-yvelines", "serrurier 24h saint-arnoult-en-yvelines", "dépannage serrure saint-arnoult-en-yvelines"]}
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