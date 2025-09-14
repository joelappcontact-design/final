import CityPage from '@/components/CityPage';

const cityData = {
  name: 'La Courneuve',
  department: '93',
  population: '45000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence La Courneuve 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier la-courneuve', 'serrurier urgence la-courneuve', 'ouverture porte la-courneuve', 'serrurier 24h la-courneuve', 'dépannage serrure la-courneuve']
};

export default function Page() {
  return <CityPage 
    cityName="La Courneuve"
    citySlug="la-courneuve"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="La Courneuve - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier la-courneuve", "serrurier urgence la-courneuve", "ouverture porte la-courneuve", "serrurier 24h la-courneuve", "dépannage serrure la-courneuve"]}
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