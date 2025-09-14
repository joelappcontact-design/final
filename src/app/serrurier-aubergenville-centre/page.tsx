import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Aubergenville-Centre',
  department: '78',
  population: '12000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Aubergenville-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier aubergenville-centre', 'serrurier urgence aubergenville-centre', 'ouverture porte aubergenville-centre', 'serrurier 24h aubergenville-centre', 'dépannage serrure aubergenville-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Aubergenville-Centre"
    citySlug="aubergenville-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Aubergenville-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier aubergenville-centre", "serrurier urgence aubergenville-centre", "ouverture porte aubergenville-centre", "serrurier 24h aubergenville-centre", "dépannage serrure aubergenville-centre"]}
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