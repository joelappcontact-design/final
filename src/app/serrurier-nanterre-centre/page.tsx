import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Nanterre-Centre',
  department: '92',
  population: '96000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Nanterre-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier nanterre-centre', 'serrurier urgence nanterre-centre', 'ouverture porte nanterre-centre', 'serrurier 24h nanterre-centre', 'dépannage serrure nanterre-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Nanterre-Centre"
    citySlug="nanterre-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Nanterre-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier nanterre-centre", "serrurier urgence nanterre-centre", "ouverture porte nanterre-centre", "serrurier 24h nanterre-centre", "dépannage serrure nanterre-centre"]}
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