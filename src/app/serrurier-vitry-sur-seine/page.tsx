import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Vitry-sur-Seine',
  department: '94',
  population: '95000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Vitry-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier vitry-sur-seine', 'serrurier urgence vitry-sur-seine', 'ouverture porte vitry-sur-seine', 'serrurier 24h vitry-sur-seine', 'dépannage serrure vitry-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Vitry-sur-Seine"
    citySlug="vitry-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Vitry-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier vitry-sur-seine", "serrurier urgence vitry-sur-seine", "ouverture porte vitry-sur-seine", "serrurier 24h vitry-sur-seine", "dépannage serrure vitry-sur-seine"]}
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