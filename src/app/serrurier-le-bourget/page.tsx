import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Le Bourget',
  department: '95',
  population: '15000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de l\'aéroport', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Le Bourget 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier le-bourget', 'serrurier urgence le-bourget', 'ouverture porte le-bourget', 'serrurier 24h le-bourget', 'dépannage serrure le-bourget']
};

export default function Page() {
  return <CityPage 
    cityName="Le Bourget"
    citySlug="le-bourget"
    zones={['Centre-ville', 'Quartier de l\'aéroport', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Le Bourget - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier le-bourget", "serrurier urgence le-bourget", "ouverture porte le-bourget", "serrurier 24h le-bourget", "dépannage serrure le-bourget"]}
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