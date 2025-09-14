import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Chevreuse',
  department: '78',
  population: '6000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Chevreuse 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chevreuse', 'serrurier urgence chevreuse', 'ouverture porte chevreuse', 'serrurier 24h chevreuse', 'dépannage serrure chevreuse']
};

export default function Page() {
  return <CityPage 
    cityName="Chevreuse"
    citySlug="chevreuse"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Chevreuse - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chevreuse", "serrurier urgence chevreuse", "ouverture porte chevreuse", "serrurier 24h chevreuse", "dépannage serrure chevreuse"]}
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