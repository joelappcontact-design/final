import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Mézières-sur-Seine',
  department: '78',
  population: '2500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Mézières-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier mezieres-sur-seine', 'serrurier urgence mezieres-sur-seine', 'ouverture porte mezieres-sur-seine', 'serrurier 24h mezieres-sur-seine', 'dépannage serrure mezieres-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Mézières-sur-Seine"
    citySlug="mezieres-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Mézières-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier mezieres-sur-seine", "serrurier urgence mezieres-sur-seine", "ouverture porte mezieres-sur-seine", "serrurier 24h mezieres-sur-seine", "dépannage serrure mezieres-sur-seine"]}
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