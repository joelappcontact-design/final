import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Buchelay-Centre',
  department: '78',
  population: '2800',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Buchelay-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier buchelay-centre', 'serrurier urgence buchelay-centre', 'ouverture porte buchelay-centre', 'serrurier 24h buchelay-centre', 'dépannage serrure buchelay-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Buchelay-Centre"
    citySlug="buchelay-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Buchelay-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier buchelay-centre", "serrurier urgence buchelay-centre", "ouverture porte buchelay-centre", "serrurier 24h buchelay-centre", "dépannage serrure buchelay-centre"]}
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