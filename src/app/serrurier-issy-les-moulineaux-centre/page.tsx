import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Issy-les-Moulineaux-Centre',
  department: '92',
  population: '68000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Issy-les-Moulineaux-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier issy-les-moulineaux-centre', 'serrurier urgence issy-les-moulineaux-centre', 'ouverture porte issy-les-moulineaux-centre', 'serrurier 24h issy-les-moulineaux-centre', 'dépannage serrure issy-les-moulineaux-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Issy-les-Moulineaux-Centre"
    citySlug="issy-les-moulineaux-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Issy-les-Moulineaux-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier issy-les-moulineaux-centre", "serrurier urgence issy-les-moulineaux-centre", "ouverture porte issy-les-moulineaux-centre", "serrurier 24h issy-les-moulineaux-centre", "dépannage serrure issy-les-moulineaux-centre"]}
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