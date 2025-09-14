import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Nanterre',
  department: '92',
  population: '95000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Nanterre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier nanterre-92', 'serrurier urgence nanterre-92', 'ouverture porte nanterre-92', 'serrurier 24h nanterre-92', 'dépannage serrure nanterre-92']
};

export default function Page() {
  return <CityPage 
    cityName="Nanterre"
    citySlug="nanterre-92"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Nanterre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier nanterre-92", "serrurier urgence nanterre-92", "ouverture porte nanterre-92", "serrurier 24h nanterre-92", "dépannage serrure nanterre-92"]}
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