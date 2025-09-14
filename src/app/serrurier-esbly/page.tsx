import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Esbly',
  department: '77',
  population: '6000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Esbly 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier esbly', 'serrurier urgence esbly', 'ouverture porte esbly', 'serrurier 24h esbly', 'dépannage serrure esbly']
};

export default function Page() {
  return <CityPage 
    cityName="Esbly"
    citySlug="esbly"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Esbly - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier esbly", "serrurier urgence esbly", "ouverture porte esbly", "serrurier 24h esbly", "dépannage serrure esbly"]}
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