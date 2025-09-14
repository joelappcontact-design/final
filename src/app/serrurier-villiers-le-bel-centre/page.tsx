import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Villiers-le-Bel-Centre',
  department: '95',
  population: '30000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Villiers-le-Bel-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier villiers-le-bel-centre', 'serrurier urgence villiers-le-bel-centre', 'ouverture porte villiers-le-bel-centre', 'serrurier 24h villiers-le-bel-centre', 'dépannage serrure villiers-le-bel-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Villiers-le-Bel-Centre"
    citySlug="villiers-le-bel-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Villiers-le-Bel-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier villiers-le-bel-centre", "serrurier urgence villiers-le-bel-centre", "ouverture porte villiers-le-bel-centre", "serrurier 24h villiers-le-bel-centre", "dépannage serrure villiers-le-bel-centre"]}
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