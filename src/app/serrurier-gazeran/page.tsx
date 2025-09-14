import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Gazeran',
  department: '78',
  population: '1500',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Gazeran 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier gazeran', 'serrurier urgence gazeran', 'ouverture porte gazeran', 'serrurier 24h gazeran', 'dépannage serrure gazeran']
};

export default function Page() {
  return <CityPage 
    cityName="Gazeran"
    citySlug="gazeran"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Gazeran - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier gazeran", "serrurier urgence gazeran", "ouverture porte gazeran", "serrurier 24h gazeran", "dépannage serrure gazeran"]}
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