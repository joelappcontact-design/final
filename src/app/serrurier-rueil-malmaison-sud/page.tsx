import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Rueil-Malmaison-Sud',
  department: '92',
  population: '79000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Rueil-Malmaison-Sud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier rueil-malmaison-sud', 'serrurier urgence rueil-malmaison-sud', 'ouverture porte rueil-malmaison-sud', 'serrurier 24h rueil-malmaison-sud', 'dépannage serrure rueil-malmaison-sud']
};

export default function Page() {
  return <CityPage 
    cityName="Rueil-Malmaison-Sud"
    citySlug="rueil-malmaison-sud"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Rueil-Malmaison-Sud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier rueil-malmaison-sud", "serrurier urgence rueil-malmaison-sud", "ouverture porte rueil-malmaison-sud", "serrurier 24h rueil-malmaison-sud", "dépannage serrure rueil-malmaison-sud"]}
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