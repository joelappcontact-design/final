import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Buchelay',
  department: '78',
  population: '2800',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Buchelay 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier buchelay', 'serrurier urgence buchelay', 'ouverture porte buchelay', 'serrurier 24h buchelay', 'dépannage serrure buchelay']
};

export default function Page() {
  return <CityPage 
    cityName="Buchelay"
    citySlug="buchelay"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Buchelay - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier buchelay", "serrurier urgence buchelay", "ouverture porte buchelay", "serrurier 24h buchelay", "dépannage serrure buchelay"]}
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