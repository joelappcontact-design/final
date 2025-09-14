import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Clamart-Centre',
  department: '92',
  population: '53000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Clamart-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier clamart-centre', 'serrurier urgence clamart-centre', 'ouverture porte clamart-centre', 'serrurier 24h clamart-centre', 'dépannage serrure clamart-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Clamart-Centre"
    citySlug="clamart-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Clamart-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier clamart-centre", "serrurier urgence clamart-centre", "ouverture porte clamart-centre", "serrurier 24h clamart-centre", "dépannage serrure clamart-centre"]}
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