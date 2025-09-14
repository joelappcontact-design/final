import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Isles-les-Meldeuses',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Isles-les-Meldeuses 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier isles-les-meldeuses', 'serrurier urgence isles-les-meldeuses', 'ouverture porte isles-les-meldeuses', 'serrurier 24h isles-les-meldeuses', 'dépannage serrure isles-les-meldeuses']
};

export default function Page() {
  return <CityPage 
    cityName="Isles-les-Meldeuses"
    citySlug="isles-les-meldeuses"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Isles-les-Meldeuses - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier isles-les-meldeuses", "serrurier urgence isles-les-meldeuses", "ouverture porte isles-les-meldeuses", "serrurier 24h isles-les-meldeuses", "dépannage serrure isles-les-meldeuses"]}
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