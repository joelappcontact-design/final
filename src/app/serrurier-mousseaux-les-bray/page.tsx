import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Mousseaux-lès-Bray',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Mousseaux-lès-Bray 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier mousseaux-les-bray', 'serrurier urgence mousseaux-les-bray', 'ouverture porte mousseaux-les-bray', 'serrurier 24h mousseaux-les-bray', 'dépannage serrure mousseaux-les-bray']
};

export default function Page() {
  return <CityPage 
    cityName="Mousseaux-lès-Bray"
    citySlug="mousseaux-les-bray"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Mousseaux-lès-Bray - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier mousseaux-les-bray", "serrurier urgence mousseaux-les-bray", "ouverture porte mousseaux-les-bray", "serrurier 24h mousseaux-les-bray", "dépannage serrure mousseaux-les-bray"]}
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