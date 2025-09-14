import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bonnières-sur-Seine',
  department: '78',
  population: '5000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bonnières-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bonnieres-sur-seine', 'serrurier urgence bonnieres-sur-seine', 'ouverture porte bonnieres-sur-seine', 'serrurier 24h bonnieres-sur-seine', 'dépannage serrure bonnieres-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Bonnières-sur-Seine"
    citySlug="bonnieres-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bonnières-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bonnieres-sur-seine", "serrurier urgence bonnieres-sur-seine", "ouverture porte bonnieres-sur-seine", "serrurier 24h bonnieres-sur-seine", "dépannage serrure bonnieres-sur-seine"]}
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