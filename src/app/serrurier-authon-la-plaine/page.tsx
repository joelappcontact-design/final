import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Authon-la-Plaine',
  department: '91',
  population: '400',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Authon-la-Plaine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier authon-la-plaine', 'serrurier urgence authon-la-plaine', 'ouverture porte authon-la-plaine', 'serrurier 24h authon-la-plaine', 'dépannage serrure authon-la-plaine']
};

export default function Page() {
  return <CityPage 
    cityName="Authon-la-Plaine"
    citySlug="authon-la-plaine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Authon-la-Plaine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier authon-la-plaine", "serrurier urgence authon-la-plaine", "ouverture porte authon-la-plaine", "serrurier 24h authon-la-plaine", "dépannage serrure authon-la-plaine"]}
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