import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Colombes-Centre',
  department: '92',
  population: '86000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Colombes-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier colombes-centre', 'serrurier urgence colombes-centre', 'ouverture porte colombes-centre', 'serrurier 24h colombes-centre', 'dépannage serrure colombes-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Colombes-Centre"
    citySlug="colombes-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Colombes-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier colombes-centre", "serrurier urgence colombes-centre", "ouverture porte colombes-centre", "serrurier 24h colombes-centre", "dépannage serrure colombes-centre"]}
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