import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Le Chesnay-Rocquencourt',
  department: '78',
  population: '30000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Le Chesnay-Rocquencourt 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier le-chesnay-rocquencourt', 'serrurier urgence le-chesnay-rocquencourt', 'ouverture porte le-chesnay-rocquencourt', 'serrurier 24h le-chesnay-rocquencourt', 'dépannage serrure le-chesnay-rocquencourt']
};

export default function Page() {
  return <CityPage 
    cityName="Le Chesnay-Rocquencourt"
    citySlug="le-chesnay-rocquencourt"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Le Chesnay-Rocquencourt - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier le-chesnay-rocquencourt", "serrurier urgence le-chesnay-rocquencourt", "ouverture porte le-chesnay-rocquencourt", "serrurier 24h le-chesnay-rocquencourt", "dépannage serrure le-chesnay-rocquencourt"]}
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