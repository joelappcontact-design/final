import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Drocourt',
  department: '78',
  population: '600',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Drocourt 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier drocourt', 'serrurier urgence drocourt', 'ouverture porte drocourt', 'serrurier 24h drocourt', 'dépannage serrure drocourt']
};

export default function Page() {
  return <CityPage 
    cityName="Drocourt"
    citySlug="drocourt"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Drocourt - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier drocourt", "serrurier urgence drocourt", "ouverture porte drocourt", "serrurier 24h drocourt", "dépannage serrure drocourt"]}
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