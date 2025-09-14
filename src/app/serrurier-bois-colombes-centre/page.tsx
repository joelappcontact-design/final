import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bois-Colombes-Centre',
  department: '92',
  population: '29000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bois-Colombes-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bois-colombes-centre', 'serrurier urgence bois-colombes-centre', 'ouverture porte bois-colombes-centre', 'serrurier 24h bois-colombes-centre', 'dépannage serrure bois-colombes-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Bois-Colombes-Centre"
    citySlug="bois-colombes-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bois-Colombes-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bois-colombes-centre", "serrurier urgence bois-colombes-centre", "ouverture porte bois-colombes-centre", "serrurier 24h bois-colombes-centre", "dépannage serrure bois-colombes-centre"]}
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