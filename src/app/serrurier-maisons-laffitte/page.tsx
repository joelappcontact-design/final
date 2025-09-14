import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Maisons-Laffitte',
  department: '78',
  population: '23000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Maisons-Laffitte 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier maisons-laffitte', 'serrurier urgence maisons-laffitte', 'ouverture porte maisons-laffitte', 'serrurier 24h maisons-laffitte', 'dépannage serrure maisons-laffitte']
};

export default function Page() {
  return <CityPage 
    cityName="Maisons-Laffitte"
    citySlug="maisons-laffitte"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Maisons-Laffitte - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier maisons-laffitte", "serrurier urgence maisons-laffitte", "ouverture porte maisons-laffitte", "serrurier 24h maisons-laffitte", "dépannage serrure maisons-laffitte"]}
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