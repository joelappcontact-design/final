import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Chevilly-Larue',
  department: '94',
  population: '20000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Chevilly-Larue 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chevilly-larue', 'serrurier urgence chevilly-larue', 'ouverture porte chevilly-larue', 'serrurier 24h chevilly-larue', 'dépannage serrure chevilly-larue']
};

export default function Page() {
  return <CityPage 
    cityName="Chevilly-Larue"
    citySlug="chevilly-larue"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Chevilly-Larue - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chevilly-larue", "serrurier urgence chevilly-larue", "ouverture porte chevilly-larue", "serrurier 24h chevilly-larue", "dépannage serrure chevilly-larue"]}
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