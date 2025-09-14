import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Rueil-Malmaison Centre',
  department: '92',
  population: '39000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Rueil-Malmaison Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier rueil-malmaison-centre', 'serrurier urgence rueil-malmaison-centre', 'ouverture porte rueil-malmaison-centre', 'serrurier 24h rueil-malmaison-centre', 'dépannage serrure rueil-malmaison-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Rueil-Malmaison Centre"
    citySlug="rueil-malmaison-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Rueil-Malmaison Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier rueil-malmaison-centre", "serrurier urgence rueil-malmaison-centre", "ouverture porte rueil-malmaison-centre", "serrurier 24h rueil-malmaison-centre", "dépannage serrure rueil-malmaison-centre"]}
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