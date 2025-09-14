import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Denis-Centre',
  department: '93',
  population: '112000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Denis-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-denis-centre', 'serrurier urgence saint-denis-centre', 'ouverture porte saint-denis-centre', 'serrurier 24h saint-denis-centre', 'dépannage serrure saint-denis-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Denis-Centre"
    citySlug="saint-denis-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Denis-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-denis-centre", "serrurier urgence saint-denis-centre", "ouverture porte saint-denis-centre", "serrurier 24h saint-denis-centre", "dépannage serrure saint-denis-centre"]}
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