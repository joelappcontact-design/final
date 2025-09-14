import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Issy-les-Moulineaux',
  department: '92',
  population: '68000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier des Épinettes', 'Quartier de la Ferme', 'Quartier de l\'Île Saint-Germain'],
  description: 'Serrurier d\'urgence Issy-les-Moulineaux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier issy-les-moulineaux', 'serrurier urgence issy-les-moulineaux', 'ouverture porte issy-les-moulineaux', 'serrurier 24h issy-les-moulineaux', 'dépannage serrure issy-les-moulineaux']
};

export default function Page() {
  return <CityPage 
    cityName="Issy-les-Moulineaux"
    citySlug="issy-les-moulineaux"
    zones={['Centre-ville', 'Quartier des Épinettes', 'Quartier de la Ferme', 'Quartier de l\'Île Saint-Germain']}
    description="Issy-les-Moulineaux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier issy-les-moulineaux", "serrurier urgence issy-les-moulineaux", "ouverture porte issy-les-moulineaux", "serrurier 24h issy-les-moulineaux", "dépannage serrure issy-les-moulineaux"]}
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