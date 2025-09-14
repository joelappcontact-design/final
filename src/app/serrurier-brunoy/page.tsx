import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Brunoy',
  department: '91',
  population: '26000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Brunoy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier brunoy', 'serrurier urgence brunoy', 'ouverture porte brunoy', 'serrurier 24h brunoy', 'dépannage serrure brunoy']
};

export default function Page() {
  return <CityPage 
    cityName="Brunoy"
    citySlug="brunoy"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Brunoy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier brunoy", "serrurier urgence brunoy", "ouverture porte brunoy", "serrurier 24h brunoy", "dépannage serrure brunoy"]}
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