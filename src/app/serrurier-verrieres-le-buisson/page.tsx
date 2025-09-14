import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Verrières-le-Buisson',
  department: '91',
  population: '15000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Verrières-le-Buisson 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier verrieres-le-buisson', 'serrurier urgence verrieres-le-buisson', 'ouverture porte verrieres-le-buisson', 'serrurier 24h verrieres-le-buisson', 'dépannage serrure verrieres-le-buisson']
};

export default function Page() {
  return <CityPage 
    cityName="Verrières-le-Buisson"
    citySlug="verrieres-le-buisson"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Verrières-le-Buisson - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier verrieres-le-buisson", "serrurier urgence verrieres-le-buisson", "ouverture porte verrieres-le-buisson", "serrurier 24h verrieres-le-buisson", "dépannage serrure verrieres-le-buisson"]}
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