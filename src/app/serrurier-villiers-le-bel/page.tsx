import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Villiers-le-Bel',
  department: '95',
  population: '28000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Villiers-le-Bel 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier villiers-le-bel', 'serrurier urgence villiers-le-bel', 'ouverture porte villiers-le-bel', 'serrurier 24h villiers-le-bel', 'dépannage serrure villiers-le-bel']
};

export default function Page() {
  return <CityPage 
    cityName="Villiers-le-Bel"
    citySlug="villiers-le-bel"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Villiers-le-Bel - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier villiers-le-bel", "serrurier urgence villiers-le-bel", "ouverture porte villiers-le-bel", "serrurier 24h villiers-le-bel", "dépannage serrure villiers-le-bel"]}
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