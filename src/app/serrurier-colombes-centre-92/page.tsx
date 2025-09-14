import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Colombes-Centre',
  department: '92',
  population: '86000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Colombes-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier colombes-centre-92', 'serrurier urgence colombes-centre-92', 'ouverture porte colombes-centre-92', 'serrurier 24h colombes-centre-92', 'dépannage serrure colombes-centre-92']
};

export default function Page() {
  return <CityPage 
    cityName="Colombes-Centre"
    citySlug="colombes-centre-92"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Colombes-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier colombes-centre-92", "serrurier urgence colombes-centre-92", "ouverture porte colombes-centre-92", "serrurier 24h colombes-centre-92", "dépannage serrure colombes-centre-92"]}
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