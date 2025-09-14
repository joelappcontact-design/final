import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Gif-sur-Yvette-Nord',
  department: '91',
  population: '21000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Gif-sur-Yvette-Nord 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier gif-sur-yvette-nord', 'serrurier urgence gif-sur-yvette-nord', 'ouverture porte gif-sur-yvette-nord', 'serrurier 24h gif-sur-yvette-nord', 'dépannage serrure gif-sur-yvette-nord']
};

export default function Page() {
  return <CityPage 
    cityName="Gif-sur-Yvette-Nord"
    citySlug="gif-sur-yvette-nord"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Gif-sur-Yvette-Nord - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier gif-sur-yvette-nord", "serrurier urgence gif-sur-yvette-nord", "ouverture porte gif-sur-yvette-nord", "serrurier 24h gif-sur-yvette-nord", "dépannage serrure gif-sur-yvette-nord"]}
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