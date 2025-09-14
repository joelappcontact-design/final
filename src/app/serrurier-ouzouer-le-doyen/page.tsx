import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Ouzouer-le-Doyen',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Ouzouer-le-Doyen 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier ouzouer-le-doyen', 'serrurier urgence ouzouer-le-doyen', 'ouverture porte ouzouer-le-doyen', 'serrurier 24h ouzouer-le-doyen', 'dépannage serrure ouzouer-le-doyen']
};

export default function Page() {
  return <CityPage 
    cityName="Ouzouer-le-Doyen"
    citySlug="ouzouer-le-doyen"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Ouzouer-le-Doyen - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier ouzouer-le-doyen", "serrurier urgence ouzouer-le-doyen", "ouverture porte ouzouer-le-doyen", "serrurier 24h ouzouer-le-doyen", "dépannage serrure ouzouer-le-doyen"]}
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