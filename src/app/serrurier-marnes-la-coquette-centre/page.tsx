import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Marnes-la-Coquette-Centre',
  department: '92',
  population: '1800',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Marnes-la-Coquette-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier marnes-la-coquette-centre', 'serrurier urgence marnes-la-coquette-centre', 'ouverture porte marnes-la-coquette-centre', 'serrurier 24h marnes-la-coquette-centre', 'dépannage serrure marnes-la-coquette-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Marnes-la-Coquette-Centre"
    citySlug="marnes-la-coquette-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Marnes-la-Coquette-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier marnes-la-coquette-centre", "serrurier urgence marnes-la-coquette-centre", "ouverture porte marnes-la-coquette-centre", "serrurier 24h marnes-la-coquette-centre", "dépannage serrure marnes-la-coquette-centre"]}
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