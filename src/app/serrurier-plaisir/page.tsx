import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Plaisir',
  department: '92',
  population: '32000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Plaisir 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier plaisir', 'serrurier urgence plaisir', 'ouverture porte plaisir', 'serrurier 24h plaisir', 'dépannage serrure plaisir']
};

export default function Page() {
  return <CityPage 
    cityName="Plaisir"
    citySlug="plaisir"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Plaisir - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier plaisir", "serrurier urgence plaisir", "ouverture porte plaisir", "serrurier 24h plaisir", "dépannage serrure plaisir"]}
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