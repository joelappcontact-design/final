import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Drancy',
  department: '93',
  population: '72000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Drancy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier drancy', 'serrurier urgence drancy', 'ouverture porte drancy', 'serrurier 24h drancy', 'dépannage serrure drancy']
};

export default function Page() {
  return <CityPage 
    cityName="Drancy"
    citySlug="drancy"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Drancy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier drancy", "serrurier urgence drancy", "ouverture porte drancy", "serrurier 24h drancy", "dépannage serrure drancy"]}
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