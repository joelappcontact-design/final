import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Houilles',
  department: '78',
  population: '32000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Houilles 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier houilles-78', 'serrurier urgence houilles-78', 'ouverture porte houilles-78', 'serrurier 24h houilles-78', 'dépannage serrure houilles-78']
};

export default function Page() {
  return <CityPage 
    cityName="Houilles"
    citySlug="houilles-78"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Houilles - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier houilles-78", "serrurier urgence houilles-78", "ouverture porte houilles-78", "serrurier 24h houilles-78", "dépannage serrure houilles-78"]}
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