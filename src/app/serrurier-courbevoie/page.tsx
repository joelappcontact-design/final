import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Courbevoie',
  department: '92',
  population: '85000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la Défense', 'Quartier de la République', 'Quartier de la Gare'],
  description: 'Serrurier d\'urgence Courbevoie 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier courbevoie', 'serrurier urgence courbevoie', 'ouverture porte courbevoie', 'serrurier 24h courbevoie', 'dépannage serrure courbevoie']
};

export default function Page() {
  return <CityPage 
    cityName="Courbevoie"
    citySlug="courbevoie"
    zones={['Centre-ville', 'Quartier de la Défense', 'Quartier de la République', 'Quartier de la Gare']}
    description="Courbevoie - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier courbevoie", "serrurier urgence courbevoie", "ouverture porte courbevoie", "serrurier 24h courbevoie", "dépannage serrure courbevoie"]}
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