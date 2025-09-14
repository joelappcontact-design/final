import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bagnolet-Centre',
  department: '93',
  population: '38000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bagnolet-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bagnolet-centre', 'serrurier urgence bagnolet-centre', 'ouverture porte bagnolet-centre', 'serrurier 24h bagnolet-centre', 'dépannage serrure bagnolet-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Bagnolet-Centre"
    citySlug="bagnolet-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bagnolet-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bagnolet-centre", "serrurier urgence bagnolet-centre", "ouverture porte bagnolet-centre", "serrurier 24h bagnolet-centre", "dépannage serrure bagnolet-centre"]}
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