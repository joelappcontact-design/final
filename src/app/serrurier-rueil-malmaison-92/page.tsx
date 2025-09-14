import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Rueil-Malmaison',
  department: '92',
  population: '80000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Rueil-Malmaison 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier rueil-malmaison-92', 'serrurier urgence rueil-malmaison-92', 'ouverture porte rueil-malmaison-92', 'serrurier 24h rueil-malmaison-92', 'dépannage serrure rueil-malmaison-92']
};

export default function Page() {
  return <CityPage 
    cityName="Rueil-Malmaison"
    citySlug="rueil-malmaison-92"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Rueil-Malmaison - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier rueil-malmaison-92", "serrurier urgence rueil-malmaison-92", "ouverture porte rueil-malmaison-92", "serrurier 24h rueil-malmaison-92", "dépannage serrure rueil-malmaison-92"]}
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