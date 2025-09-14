import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Pantin',
  department: '93',
  population: '60000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Pantin 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier pantin', 'serrurier urgence pantin', 'ouverture porte pantin', 'serrurier 24h pantin', 'dépannage serrure pantin']
};

export default function Page() {
  return <CityPage 
    cityName="Pantin"
    citySlug="pantin"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Pantin - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier pantin", "serrurier urgence pantin", "ouverture porte pantin", "serrurier 24h pantin", "dépannage serrure pantin"]}
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