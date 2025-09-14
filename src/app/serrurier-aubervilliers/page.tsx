import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Aubervilliers',
  department: '93',
  population: '87000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Aubervilliers 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier aubervilliers', 'serrurier urgence aubervilliers', 'ouverture porte aubervilliers', 'serrurier 24h aubervilliers', 'dépannage serrure aubervilliers']
};

export default function Page() {
  return <CityPage 
    cityName="Aubervilliers"
    citySlug="aubervilliers"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Aubervilliers - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier aubervilliers", "serrurier urgence aubervilliers", "ouverture porte aubervilliers", "serrurier 24h aubervilliers", "dépannage serrure aubervilliers"]}
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