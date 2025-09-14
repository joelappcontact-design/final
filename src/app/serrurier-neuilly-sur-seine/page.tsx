import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Neuilly-sur-Seine',
  department: '92',
  population: '59940',
  priority: 'critique',
  zones: ['Centre-ville', 'Quartier de la Folie', 'Quartier de la Défense', 'Quartier de la Porte Maillot'],
  description: 'Serrurier d\'urgence Neuilly-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier neuilly-sur-seine', 'serrurier urgence neuilly-sur-seine', 'ouverture porte neuilly-sur-seine', 'serrurier 24h neuilly-sur-seine', 'dépannage serrure neuilly-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Neuilly-sur-Seine"
    citySlug="neuilly-sur-seine"
    zones={['Centre-ville', 'Quartier de la Folie', 'Quartier de la Défense', 'Quartier de la Porte Maillot']}
    description="Neuilly-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier neuilly-sur-seine", "serrurier urgence neuilly-sur-seine", "ouverture porte neuilly-sur-seine", "serrurier 24h neuilly-sur-seine", "dépannage serrure neuilly-sur-seine"]}
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