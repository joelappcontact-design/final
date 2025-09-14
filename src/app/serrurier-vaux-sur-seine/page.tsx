import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Vaux-sur-Seine',
  department: '78',
  population: '4500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Vaux-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier vaux-sur-seine', 'serrurier urgence vaux-sur-seine', 'ouverture porte vaux-sur-seine', 'serrurier 24h vaux-sur-seine', 'dépannage serrure vaux-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Vaux-sur-Seine"
    citySlug="vaux-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Vaux-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier vaux-sur-seine", "serrurier urgence vaux-sur-seine", "ouverture porte vaux-sur-seine", "serrurier 24h vaux-sur-seine", "dépannage serrure vaux-sur-seine"]}
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