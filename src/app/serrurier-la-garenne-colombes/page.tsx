import CityPage from '@/components/CityPage';

const cityData = {
  name: 'La Garenne-Colombes',
  department: '92',
  population: '29000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence La Garenne-Colombes 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier la-garenne-colombes', 'serrurier urgence la-garenne-colombes', 'ouverture porte la-garenne-colombes', 'serrurier 24h la-garenne-colombes', 'dépannage serrure la-garenne-colombes']
};

export default function Page() {
  return <CityPage 
    cityName="La Garenne-Colombes"
    citySlug="la-garenne-colombes"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="La Garenne-Colombes - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier la-garenne-colombes", "serrurier urgence la-garenne-colombes", "ouverture porte la-garenne-colombes", "serrurier 24h la-garenne-colombes", "dépannage serrure la-garenne-colombes"]}
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