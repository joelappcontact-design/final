import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Gif-sur-Yvette-Centre',
  department: '91',
  population: '21000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Gif-sur-Yvette-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier gif-sur-yvette-centre', 'serrurier urgence gif-sur-yvette-centre', 'ouverture porte gif-sur-yvette-centre', 'serrurier 24h gif-sur-yvette-centre', 'dépannage serrure gif-sur-yvette-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Gif-sur-Yvette-Centre"
    citySlug="gif-sur-yvette-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Gif-sur-Yvette-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier gif-sur-yvette-centre", "serrurier urgence gif-sur-yvette-centre", "ouverture porte gif-sur-yvette-centre", "serrurier 24h gif-sur-yvette-centre", "dépannage serrure gif-sur-yvette-centre"]}
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