import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Issy-les-Moulineaux Sud',
  department: '92',
  population: '34000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Issy-les-Moulineaux Sud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier issy-les-moulineaux-sud', 'serrurier urgence issy-les-moulineaux-sud', 'ouverture porte issy-les-moulineaux-sud', 'serrurier 24h issy-les-moulineaux-sud', 'dépannage serrure issy-les-moulineaux-sud']
};

export default function Page() {
  return <CityPage 
    cityName="Issy-les-Moulineaux Sud"
    citySlug="issy-les-moulineaux-sud"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Issy-les-Moulineaux Sud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier issy-les-moulineaux-sud", "serrurier urgence issy-les-moulineaux-sud", "ouverture porte issy-les-moulineaux-sud", "serrurier 24h issy-les-moulineaux-sud", "dépannage serrure issy-les-moulineaux-sud"]}
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