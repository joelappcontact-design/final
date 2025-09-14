import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Boulogne-Billancourt Nord',
  department: '92',
  population: '60000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Boulogne-Billancourt Nord 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier boulogne-billancourt-nord', 'serrurier urgence boulogne-billancourt-nord', 'ouverture porte boulogne-billancourt-nord', 'serrurier 24h boulogne-billancourt-nord', 'dépannage serrure boulogne-billancourt-nord']
};

export default function Page() {
  return <CityPage 
    cityName="Boulogne-Billancourt Nord"
    citySlug="boulogne-billancourt-nord"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Boulogne-Billancourt Nord - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier boulogne-billancourt-nord", "serrurier urgence boulogne-billancourt-nord", "ouverture porte boulogne-billancourt-nord", "serrurier 24h boulogne-billancourt-nord", "dépannage serrure boulogne-billancourt-nord"]}
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