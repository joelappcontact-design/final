import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Villennes-sur-Seine',
  department: '78',
  population: '5500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Villennes-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier villennes-sur-seine', 'serrurier urgence villennes-sur-seine', 'ouverture porte villennes-sur-seine', 'serrurier 24h villennes-sur-seine', 'dépannage serrure villennes-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Villennes-sur-Seine"
    citySlug="villennes-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Villennes-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier villennes-sur-seine", "serrurier urgence villennes-sur-seine", "ouverture porte villennes-sur-seine", "serrurier 24h villennes-sur-seine", "dépannage serrure villennes-sur-seine"]}
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