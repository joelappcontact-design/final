import CityPage from '@/components/CityPage';

const cityData = {
  name: 'La Courneuve-Centre',
  department: '93',
  population: '42000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence La Courneuve-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier la-courneuve-centre', 'serrurier urgence la-courneuve-centre', 'ouverture porte la-courneuve-centre', 'serrurier 24h la-courneuve-centre', 'dépannage serrure la-courneuve-centre']
};

export default function Page() {
  return <CityPage 
    cityName="La Courneuve-Centre"
    citySlug="la-courneuve-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="La Courneuve-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier la-courneuve-centre", "serrurier urgence la-courneuve-centre", "ouverture porte la-courneuve-centre", "serrurier 24h la-courneuve-centre", "dépannage serrure la-courneuve-centre"]}
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