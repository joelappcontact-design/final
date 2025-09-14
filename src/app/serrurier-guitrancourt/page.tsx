import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Guitrancourt',
  department: '78',
  population: '1500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Guitrancourt 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier guitrancourt', 'serrurier urgence guitrancourt', 'ouverture porte guitrancourt', 'serrurier 24h guitrancourt', 'dépannage serrure guitrancourt']
};

export default function Page() {
  return <CityPage 
    cityName="Guitrancourt"
    citySlug="guitrancourt"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Guitrancourt - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier guitrancourt", "serrurier urgence guitrancourt", "ouverture porte guitrancourt", "serrurier 24h guitrancourt", "dépannage serrure guitrancourt"]}
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