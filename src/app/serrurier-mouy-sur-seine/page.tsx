import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Mouy-sur-Seine',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Mouy-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier mouy-sur-seine', 'serrurier urgence mouy-sur-seine', 'ouverture porte mouy-sur-seine', 'serrurier 24h mouy-sur-seine', 'dépannage serrure mouy-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Mouy-sur-Seine"
    citySlug="mouy-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Mouy-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier mouy-sur-seine", "serrurier urgence mouy-sur-seine", "ouverture porte mouy-sur-seine", "serrurier 24h mouy-sur-seine", "dépannage serrure mouy-sur-seine"]}
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