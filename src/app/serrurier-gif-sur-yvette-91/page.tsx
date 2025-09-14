import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Gif-sur-Yvette',
  department: '91',
  population: '22000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Gif-sur-Yvette 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier gif-sur-yvette-91', 'serrurier urgence gif-sur-yvette-91', 'ouverture porte gif-sur-yvette-91', 'serrurier 24h gif-sur-yvette-91', 'dépannage serrure gif-sur-yvette-91']
};

export default function Page() {
  return <CityPage 
    cityName="Gif-sur-Yvette"
    citySlug="gif-sur-yvette-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Gif-sur-Yvette - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier gif-sur-yvette-91", "serrurier urgence gif-sur-yvette-91", "ouverture porte gif-sur-yvette-91", "serrurier 24h gif-sur-yvette-91", "dépannage serrure gif-sur-yvette-91"]}
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