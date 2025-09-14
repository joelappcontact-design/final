import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Issy-les-Moulineaux Nord',
  department: '92',
  population: '34000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Issy-les-Moulineaux Nord 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier issy-les-moulineaux-nord', 'serrurier urgence issy-les-moulineaux-nord', 'ouverture porte issy-les-moulineaux-nord', 'serrurier 24h issy-les-moulineaux-nord', 'dépannage serrure issy-les-moulineaux-nord']
};

export default function Page() {
  return <CityPage 
    cityName="Issy-les-Moulineaux Nord"
    citySlug="issy-les-moulineaux-nord"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Issy-les-Moulineaux Nord - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier issy-les-moulineaux-nord", "serrurier urgence issy-les-moulineaux-nord", "ouverture porte issy-les-moulineaux-nord", "serrurier 24h issy-les-moulineaux-nord", "dépannage serrure issy-les-moulineaux-nord"]}
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