import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Denis-Nord',
  department: '93',
  population: '112000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Denis-Nord 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-denis-nord', 'serrurier urgence saint-denis-nord', 'ouverture porte saint-denis-nord', 'serrurier 24h saint-denis-nord', 'dépannage serrure saint-denis-nord']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Denis-Nord"
    citySlug="saint-denis-nord"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Denis-Nord - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-denis-nord", "serrurier urgence saint-denis-nord", "ouverture porte saint-denis-nord", "serrurier 24h saint-denis-nord", "dépannage serrure saint-denis-nord"]}
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