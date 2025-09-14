import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bagneux',
  department: '91',
  population: '40000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bagneux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bagneux', 'serrurier urgence bagneux', 'ouverture porte bagneux', 'serrurier 24h bagneux', 'dépannage serrure bagneux']
};

export default function Page() {
  return <CityPage 
    cityName="Bagneux"
    citySlug="bagneux"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bagneux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bagneux", "serrurier urgence bagneux", "ouverture porte bagneux", "serrurier 24h bagneux", "dépannage serrure bagneux"]}
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