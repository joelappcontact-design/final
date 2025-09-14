import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Congis-sur-Thérouanne',
  department: '77',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Congis-sur-Thérouanne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier congis-sur-therouanne', 'serrurier urgence congis-sur-therouanne', 'ouverture porte congis-sur-therouanne', 'serrurier 24h congis-sur-therouanne', 'dépannage serrure congis-sur-therouanne']
};

export default function Page() {
  return <CityPage 
    cityName="Congis-sur-Thérouanne"
    citySlug="congis-sur-therouanne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Congis-sur-Thérouanne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier congis-sur-therouanne", "serrurier urgence congis-sur-therouanne", "ouverture porte congis-sur-therouanne", "serrurier 24h congis-sur-therouanne", "dépannage serrure congis-sur-therouanne"]}
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