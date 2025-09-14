import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Stains-Centre',
  department: '93',
  population: '37000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Stains-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier stains-centre', 'serrurier urgence stains-centre', 'ouverture porte stains-centre', 'serrurier 24h stains-centre', 'dépannage serrure stains-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Stains-Centre"
    citySlug="stains-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Stains-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier stains-centre", "serrurier urgence stains-centre", "ouverture porte stains-centre", "serrurier 24h stains-centre", "dépannage serrure stains-centre"]}
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