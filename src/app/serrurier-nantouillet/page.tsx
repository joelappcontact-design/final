import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Nantouillet',
  department: '77',
  population: '2500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Nantouillet 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier nantouillet', 'serrurier urgence nantouillet', 'ouverture porte nantouillet', 'serrurier 24h nantouillet', 'dépannage serrure nantouillet']
};

export default function Page() {
  return <CityPage 
    cityName="Nantouillet"
    citySlug="nantouillet"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Nantouillet - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier nantouillet", "serrurier urgence nantouillet", "ouverture porte nantouillet", "serrurier 24h nantouillet", "dépannage serrure nantouillet"]}
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