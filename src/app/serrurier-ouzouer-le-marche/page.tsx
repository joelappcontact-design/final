import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Ouzouer-le-Marché',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Ouzouer-le-Marché 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier ouzouer-le-marche', 'serrurier urgence ouzouer-le-marche', 'ouverture porte ouzouer-le-marche', 'serrurier 24h ouzouer-le-marche', 'dépannage serrure ouzouer-le-marche']
};

export default function Page() {
  return <CityPage 
    cityName="Ouzouer-le-Marché"
    citySlug="ouzouer-le-marche"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Ouzouer-le-Marché - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier ouzouer-le-marche", "serrurier urgence ouzouer-le-marche", "ouverture porte ouzouer-le-marche", "serrurier 24h ouzouer-le-marche", "dépannage serrure ouzouer-le-marche"]}
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