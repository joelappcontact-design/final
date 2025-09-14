import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Fleury-Mérogis',
  department: '91',
  population: '16000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Fleury-Mérogis 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier fleury-merogis', 'serrurier urgence fleury-merogis', 'ouverture porte fleury-merogis', 'serrurier 24h fleury-merogis', 'dépannage serrure fleury-merogis']
};

export default function Page() {
  return <CityPage 
    cityName="Fleury-Mérogis"
    citySlug="fleury-merogis"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Fleury-Mérogis - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier fleury-merogis", "serrurier urgence fleury-merogis", "ouverture porte fleury-merogis", "serrurier 24h fleury-merogis", "dépannage serrure fleury-merogis"]}
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