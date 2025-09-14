import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Eaubonne',
  department: '95',
  population: '24000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Eaubonne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier eaubonne', 'serrurier urgence eaubonne', 'ouverture porte eaubonne', 'serrurier 24h eaubonne', 'dépannage serrure eaubonne']
};

export default function Page() {
  return <CityPage 
    cityName="Eaubonne"
    citySlug="eaubonne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Eaubonne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier eaubonne", "serrurier urgence eaubonne", "ouverture porte eaubonne", "serrurier 24h eaubonne", "dépannage serrure eaubonne"]}
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