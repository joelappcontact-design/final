import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Choisy-le-Roi',
  department: '94',
  population: '46000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Choisy-le-Roi 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier choisy-le-roi', 'serrurier urgence choisy-le-roi', 'ouverture porte choisy-le-roi', 'serrurier 24h choisy-le-roi', 'dépannage serrure choisy-le-roi']
};

export default function Page() {
  return <CityPage 
    cityName="Choisy-le-Roi"
    citySlug="choisy-le-roi"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Choisy-le-Roi - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier choisy-le-roi", "serrurier urgence choisy-le-roi", "ouverture porte choisy-le-roi", "serrurier 24h choisy-le-roi", "dépannage serrure choisy-le-roi"]}
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