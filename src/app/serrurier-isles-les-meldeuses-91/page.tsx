import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Isles-les-Meldeuses',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Isles-les-Meldeuses 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier isles-les-meldeuses-91', 'serrurier urgence isles-les-meldeuses-91', 'ouverture porte isles-les-meldeuses-91', 'serrurier 24h isles-les-meldeuses-91', 'dépannage serrure isles-les-meldeuses-91']
};

export default function Page() {
  return <CityPage 
    cityName="Isles-les-Meldeuses"
    citySlug="isles-les-meldeuses-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Isles-les-Meldeuses - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier isles-les-meldeuses-91", "serrurier urgence isles-les-meldeuses-91", "ouverture porte isles-les-meldeuses-91", "serrurier 24h isles-les-meldeuses-91", "dépannage serrure isles-les-meldeuses-91"]}
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