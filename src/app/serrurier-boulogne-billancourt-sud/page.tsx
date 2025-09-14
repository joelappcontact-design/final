import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Boulogne-Billancourt Sud',
  department: '92',
  population: '60000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Boulogne-Billancourt Sud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier boulogne-billancourt-sud', 'serrurier urgence boulogne-billancourt-sud', 'ouverture porte boulogne-billancourt-sud', 'serrurier 24h boulogne-billancourt-sud', 'dépannage serrure boulogne-billancourt-sud']
};

export default function Page() {
  return <CityPage 
    cityName="Boulogne-Billancourt Sud"
    citySlug="boulogne-billancourt-sud"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Boulogne-Billancourt Sud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier boulogne-billancourt-sud", "serrurier urgence boulogne-billancourt-sud", "ouverture porte boulogne-billancourt-sud", "serrurier 24h boulogne-billancourt-sud", "dépannage serrure boulogne-billancourt-sud"]}
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