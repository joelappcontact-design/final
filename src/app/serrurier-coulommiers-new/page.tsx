import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Coulommiers',
  department: '77',
  population: '15000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Coulommiers 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier coulommiers-new', 'serrurier urgence coulommiers-new', 'ouverture porte coulommiers-new', 'serrurier 24h coulommiers-new', 'dépannage serrure coulommiers-new']
};

export default function Page() {
  return <CityPage 
    cityName="Coulommiers"
    citySlug="coulommiers-new"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Coulommiers - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier coulommiers-new", "serrurier urgence coulommiers-new", "ouverture porte coulommiers-new", "serrurier 24h coulommiers-new", "dépannage serrure coulommiers-new"]}
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