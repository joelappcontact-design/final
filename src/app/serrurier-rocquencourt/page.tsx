import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Rocquencourt',
  department: '78',
  population: '3000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Rocquencourt 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier rocquencourt', 'serrurier urgence rocquencourt', 'ouverture porte rocquencourt', 'serrurier 24h rocquencourt', 'dépannage serrure rocquencourt']
};

export default function Page() {
  return <CityPage 
    cityName="Rocquencourt"
    citySlug="rocquencourt"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Rocquencourt - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier rocquencourt", "serrurier urgence rocquencourt", "ouverture porte rocquencourt", "serrurier 24h rocquencourt", "dépannage serrure rocquencourt"]}
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