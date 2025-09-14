import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Marnes-la-Coquette',
  department: '92',
  population: '1800',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Marnes-la-Coquette 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier marnes-la-coquette', 'serrurier urgence marnes-la-coquette', 'ouverture porte marnes-la-coquette', 'serrurier 24h marnes-la-coquette', 'dépannage serrure marnes-la-coquette']
};

export default function Page() {
  return <CityPage 
    cityName="Marnes-la-Coquette"
    citySlug="marnes-la-coquette"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Marnes-la-Coquette - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier marnes-la-coquette", "serrurier urgence marnes-la-coquette", "ouverture porte marnes-la-coquette", "serrurier 24h marnes-la-coquette", "dépannage serrure marnes-la-coquette"]}
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