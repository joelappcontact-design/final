import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Houdan',
  department: '78',
  population: '4000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Houdan 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier houdan', 'serrurier urgence houdan', 'ouverture porte houdan', 'serrurier 24h houdan', 'dépannage serrure houdan']
};

export default function Page() {
  return <CityPage 
    cityName="Houdan"
    citySlug="houdan"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Houdan - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier houdan", "serrurier urgence houdan", "ouverture porte houdan", "serrurier 24h houdan", "dépannage serrure houdan"]}
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