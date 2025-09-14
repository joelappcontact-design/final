import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Aubervilliers-Centre',
  department: '93',
  population: '87000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Aubervilliers-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier aubervilliers-centre', 'serrurier urgence aubervilliers-centre', 'ouverture porte aubervilliers-centre', 'serrurier 24h aubervilliers-centre', 'dépannage serrure aubervilliers-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Aubervilliers-Centre"
    citySlug="aubervilliers-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Aubervilliers-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier aubervilliers-centre", "serrurier urgence aubervilliers-centre", "ouverture porte aubervilliers-centre", "serrurier 24h aubervilliers-centre", "dépannage serrure aubervilliers-centre"]}
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