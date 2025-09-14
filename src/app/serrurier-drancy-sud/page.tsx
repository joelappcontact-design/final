import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Drancy Sud',
  department: '93',
  population: '36000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Drancy Sud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier drancy-sud', 'serrurier urgence drancy-sud', 'ouverture porte drancy-sud', 'serrurier 24h drancy-sud', 'dépannage serrure drancy-sud']
};

export default function Page() {
  return <CityPage 
    cityName="Drancy Sud"
    citySlug="drancy-sud"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Drancy Sud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier drancy-sud", "serrurier urgence drancy-sud", "ouverture porte drancy-sud", "serrurier 24h drancy-sud", "dépannage serrure drancy-sud"]}
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