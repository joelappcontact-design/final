import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Chatou',
  department: '78',
  population: '31000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Chatou 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chatou', 'serrurier urgence chatou', 'ouverture porte chatou', 'serrurier 24h chatou', 'dépannage serrure chatou']
};

export default function Page() {
  return <CityPage 
    cityName="Chatou"
    citySlug="chatou"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Chatou - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chatou", "serrurier urgence chatou", "ouverture porte chatou", "serrurier 24h chatou", "dépannage serrure chatou"]}
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