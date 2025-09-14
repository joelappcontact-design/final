import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Flins-Neuve-Église',
  department: '78',
  population: '200',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Flins-Neuve-Église 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier flins-neuve-eglise', 'serrurier urgence flins-neuve-eglise', 'ouverture porte flins-neuve-eglise', 'serrurier 24h flins-neuve-eglise', 'dépannage serrure flins-neuve-eglise']
};

export default function Page() {
  return <CityPage 
    cityName="Flins-Neuve-Église"
    citySlug="flins-neuve-eglise"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Flins-Neuve-Église - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier flins-neuve-eglise", "serrurier urgence flins-neuve-eglise", "ouverture porte flins-neuve-eglise", "serrurier 24h flins-neuve-eglise", "dépannage serrure flins-neuve-eglise"]}
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