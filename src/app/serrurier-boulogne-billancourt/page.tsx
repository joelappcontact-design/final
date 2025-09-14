import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Boulogne-Billancourt',
  department: '92',
  population: '120071',
  priority: 'critique',
  zones: ['Centre-ville', 'Quartier des Princes', 'Quartier du Point du Jour', 'Quartier de la République'],
  description: 'Serrurier d\'urgence Boulogne-Billancourt 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier boulogne-billancourt', 'serrurier urgence boulogne-billancourt', 'ouverture porte boulogne-billancourt', 'serrurier 24h boulogne-billancourt', 'dépannage serrure boulogne-billancourt']
};

export default function Page() {
  return <CityPage 
    cityName="Boulogne-Billancourt"
    citySlug="boulogne-billancourt"
    zones={['Centre-ville', 'Quartier des Princes', 'Quartier du Point du Jour', 'Quartier de la République']}
    description="Boulogne-Billancourt - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier boulogne-billancourt", "serrurier urgence boulogne-billancourt", "ouverture porte boulogne-billancourt", "serrurier 24h boulogne-billancourt", "dépannage serrure boulogne-billancourt"]}
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