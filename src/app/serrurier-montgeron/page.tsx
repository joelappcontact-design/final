import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Montgeron',
  department: '91',
  population: '23000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Montgeron 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier montgeron', 'serrurier urgence montgeron', 'ouverture porte montgeron', 'serrurier 24h montgeron', 'dépannage serrure montgeron']
};

export default function Page() {
  return <CityPage 
    cityName="Montgeron"
    citySlug="montgeron"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Montgeron - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier montgeron", "serrurier urgence montgeron", "ouverture porte montgeron", "serrurier 24h montgeron", "dépannage serrure montgeron"]}
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