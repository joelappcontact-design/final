import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Rosay',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Rosay 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier rosay', 'serrurier urgence rosay', 'ouverture porte rosay', 'serrurier 24h rosay', 'dépannage serrure rosay']
};

export default function Page() {
  return <CityPage 
    cityName="Rosay"
    citySlug="rosay"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Rosay - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier rosay", "serrurier urgence rosay", "ouverture porte rosay", "serrurier 24h rosay", "dépannage serrure rosay"]}
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