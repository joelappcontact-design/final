import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Gaillon-sur-Montcient',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Gaillon-sur-Montcient 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier gaillon-sur-montcient', 'serrurier urgence gaillon-sur-montcient', 'ouverture porte gaillon-sur-montcient', 'serrurier 24h gaillon-sur-montcient', 'dépannage serrure gaillon-sur-montcient']
};

export default function Page() {
  return <CityPage 
    cityName="Gaillon-sur-Montcient"
    citySlug="gaillon-sur-montcient"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Gaillon-sur-Montcient - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier gaillon-sur-montcient", "serrurier urgence gaillon-sur-montcient", "ouverture porte gaillon-sur-montcient", "serrurier 24h gaillon-sur-montcient", "dépannage serrure gaillon-sur-montcient"]}
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