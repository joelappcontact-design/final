import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Rueil-Malmaison-Nord',
  department: '92',
  population: '79000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Rueil-Malmaison-Nord 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier rueil-malmaison-nord', 'serrurier urgence rueil-malmaison-nord', 'ouverture porte rueil-malmaison-nord', 'serrurier 24h rueil-malmaison-nord', 'dépannage serrure rueil-malmaison-nord']
};

export default function Page() {
  return <CityPage 
    cityName="Rueil-Malmaison-Nord"
    citySlug="rueil-malmaison-nord"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Rueil-Malmaison-Nord - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier rueil-malmaison-nord", "serrurier urgence rueil-malmaison-nord", "ouverture porte rueil-malmaison-nord", "serrurier 24h rueil-malmaison-nord", "dépannage serrure rueil-malmaison-nord"]}
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