import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Les Essarts-le-Roi',
  department: '78',
  population: '7000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Les Essarts-le-Roi 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier les-essarts-le-roi', 'serrurier urgence les-essarts-le-roi', 'ouverture porte les-essarts-le-roi', 'serrurier 24h les-essarts-le-roi', 'dépannage serrure les-essarts-le-roi']
};

export default function Page() {
  return <CityPage 
    cityName="Les Essarts-le-Roi"
    citySlug="les-essarts-le-roi"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Les Essarts-le-Roi - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier les-essarts-le-roi", "serrurier urgence les-essarts-le-roi", "ouverture porte les-essarts-le-roi", "serrurier 24h les-essarts-le-roi", "dépannage serrure les-essarts-le-roi"]}
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