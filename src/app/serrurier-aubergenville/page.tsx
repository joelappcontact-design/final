import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Aubergenville',
  department: '78',
  population: '12000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Aubergenville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier aubergenville', 'serrurier urgence aubergenville', 'ouverture porte aubergenville', 'serrurier 24h aubergenville', 'dépannage serrure aubergenville']
};

export default function Page() {
  return <CityPage 
    cityName="Aubergenville"
    citySlug="aubergenville"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Aubergenville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier aubergenville", "serrurier urgence aubergenville", "ouverture porte aubergenville", "serrurier 24h aubergenville", "dépannage serrure aubergenville"]}
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