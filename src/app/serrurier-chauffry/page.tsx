import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Chauffry',
  department: '77',
  population: '600',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Chauffry 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chauffry', 'serrurier urgence chauffry', 'ouverture porte chauffry', 'serrurier 24h chauffry', 'dépannage serrure chauffry']
};

export default function Page() {
  return <CityPage 
    cityName="Chauffry"
    citySlug="chauffry"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Chauffry - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chauffry", "serrurier urgence chauffry", "ouverture porte chauffry", "serrurier 24h chauffry", "dépannage serrure chauffry"]}
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