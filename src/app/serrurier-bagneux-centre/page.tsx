import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bagneux-Centre',
  department: '92',
  population: '40000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bagneux-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bagneux-centre', 'serrurier urgence bagneux-centre', 'ouverture porte bagneux-centre', 'serrurier 24h bagneux-centre', 'dépannage serrure bagneux-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Bagneux-Centre"
    citySlug="bagneux-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bagneux-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bagneux-centre", "serrurier urgence bagneux-centre", "ouverture porte bagneux-centre", "serrurier 24h bagneux-centre", "dépannage serrure bagneux-centre"]}
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