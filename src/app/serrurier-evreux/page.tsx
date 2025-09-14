import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Évreux',
  department: '78',
  population: '50000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Évreux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier evreux', 'serrurier urgence evreux', 'ouverture porte evreux', 'serrurier 24h evreux', 'dépannage serrure evreux']
};

export default function Page() {
  return <CityPage 
    cityName="Évreux"
    citySlug="evreux"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Évreux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier evreux", "serrurier urgence evreux", "ouverture porte evreux", "serrurier 24h evreux", "dépannage serrure evreux"]}
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