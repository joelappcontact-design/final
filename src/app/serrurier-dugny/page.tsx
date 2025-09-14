import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Dugny',
  department: '93',
  population: '11000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Dugny 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier dugny', 'serrurier urgence dugny', 'ouverture porte dugny', 'serrurier 24h dugny', 'dépannage serrure dugny']
};

export default function Page() {
  return <CityPage 
    cityName="Dugny"
    citySlug="dugny"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Dugny - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier dugny", "serrurier urgence dugny", "ouverture porte dugny", "serrurier 24h dugny", "dépannage serrure dugny"]}
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