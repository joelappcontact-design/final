import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Gif-sur-Yvette-Sud',
  department: '91',
  population: '21000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Gif-sur-Yvette-Sud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier gif-sur-yvette-sud', 'serrurier urgence gif-sur-yvette-sud', 'ouverture porte gif-sur-yvette-sud', 'serrurier 24h gif-sur-yvette-sud', 'dépannage serrure gif-sur-yvette-sud']
};

export default function Page() {
  return <CityPage 
    cityName="Gif-sur-Yvette-Sud"
    citySlug="gif-sur-yvette-sud"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Gif-sur-Yvette-Sud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier gif-sur-yvette-sud", "serrurier urgence gif-sur-yvette-sud", "ouverture porte gif-sur-yvette-sud", "serrurier 24h gif-sur-yvette-sud", "dépannage serrure gif-sur-yvette-sud"]}
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