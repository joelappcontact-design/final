import CityPage from '@/components/CityPage';

const cityData = {
  name: 'La Courneuve Sud',
  department: '93',
  population: '22500',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence La Courneuve Sud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier la-courneuve-sud', 'serrurier urgence la-courneuve-sud', 'ouverture porte la-courneuve-sud', 'serrurier 24h la-courneuve-sud', 'dépannage serrure la-courneuve-sud']
};

export default function Page() {
  return <CityPage 
    cityName="La Courneuve Sud"
    citySlug="la-courneuve-sud"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="La Courneuve Sud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier la-courneuve-sud", "serrurier urgence la-courneuve-sud", "ouverture porte la-courneuve-sud", "serrurier 24h la-courneuve-sud", "dépannage serrure la-courneuve-sud"]}
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