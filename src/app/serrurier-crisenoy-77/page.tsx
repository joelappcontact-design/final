import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Crisenoy',
  department: '77',
  population: '700',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Crisenoy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier crisenoy-77', 'serrurier urgence crisenoy-77', 'ouverture porte crisenoy-77', 'serrurier 24h crisenoy-77', 'dépannage serrure crisenoy-77']
};

export default function Page() {
  return <CityPage 
    cityName="Crisenoy"
    citySlug="crisenoy-77"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Crisenoy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier crisenoy-77", "serrurier urgence crisenoy-77", "ouverture porte crisenoy-77", "serrurier 24h crisenoy-77", "dépannage serrure crisenoy-77"]}
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