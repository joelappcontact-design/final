import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Montmagny',
  department: '95',
  population: '15000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Montmagny 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier montmagny', 'serrurier urgence montmagny', 'ouverture porte montmagny', 'serrurier 24h montmagny', 'dépannage serrure montmagny']
};

export default function Page() {
  return <CityPage 
    cityName="Montmagny"
    citySlug="montmagny"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Montmagny - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier montmagny", "serrurier urgence montmagny", "ouverture porte montmagny", "serrurier 24h montmagny", "dépannage serrure montmagny"]}
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