import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Éragny',
  department: '95',
  population: '18000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Éragny 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier eragny', 'serrurier urgence eragny', 'ouverture porte eragny', 'serrurier 24h eragny', 'dépannage serrure eragny']
};

export default function Page() {
  return <CityPage 
    cityName="Éragny"
    citySlug="eragny"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Éragny - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier eragny", "serrurier urgence eragny", "ouverture porte eragny", "serrurier 24h eragny", "dépannage serrure eragny"]}
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