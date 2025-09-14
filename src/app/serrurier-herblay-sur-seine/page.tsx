import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Herblay-sur-Seine',
  department: '95',
  population: '29000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Herblay-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier herblay-sur-seine', 'serrurier urgence herblay-sur-seine', 'ouverture porte herblay-sur-seine', 'serrurier 24h herblay-sur-seine', 'dépannage serrure herblay-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Herblay-sur-Seine"
    citySlug="herblay-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Herblay-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier herblay-sur-seine", "serrurier urgence herblay-sur-seine", "ouverture porte herblay-sur-seine", "serrurier 24h herblay-sur-seine", "dépannage serrure herblay-sur-seine"]}
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