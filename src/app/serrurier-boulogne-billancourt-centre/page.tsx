import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Boulogne-Billancourt-Centre',
  department: '92',
  population: '120000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Boulogne-Billancourt-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier boulogne-billancourt-centre', 'serrurier urgence boulogne-billancourt-centre', 'ouverture porte boulogne-billancourt-centre', 'serrurier 24h boulogne-billancourt-centre', 'dépannage serrure boulogne-billancourt-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Boulogne-Billancourt-Centre"
    citySlug="boulogne-billancourt-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Boulogne-Billancourt-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier boulogne-billancourt-centre", "serrurier urgence boulogne-billancourt-centre", "ouverture porte boulogne-billancourt-centre", "serrurier 24h boulogne-billancourt-centre", "dépannage serrure boulogne-billancourt-centre"]}
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