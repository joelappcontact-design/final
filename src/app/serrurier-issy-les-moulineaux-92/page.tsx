import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Issy-les-Moulineaux',
  department: '92',
  population: '68000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Issy-les-Moulineaux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier issy-les-moulineaux-92', 'serrurier urgence issy-les-moulineaux-92', 'ouverture porte issy-les-moulineaux-92', 'serrurier 24h issy-les-moulineaux-92', 'dépannage serrure issy-les-moulineaux-92']
};

export default function Page() {
  return <CityPage 
    cityName="Issy-les-Moulineaux"
    citySlug="issy-les-moulineaux-92"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Issy-les-Moulineaux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier issy-les-moulineaux-92", "serrurier urgence issy-les-moulineaux-92", "ouverture porte issy-les-moulineaux-92", "serrurier 24h issy-les-moulineaux-92", "dépannage serrure issy-les-moulineaux-92"]}
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