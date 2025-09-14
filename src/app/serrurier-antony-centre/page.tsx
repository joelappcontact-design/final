import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Antony-Centre',
  department: '91',
  population: '62000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Antony-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier antony-centre', 'serrurier urgence antony-centre', 'ouverture porte antony-centre', 'serrurier 24h antony-centre', 'dépannage serrure antony-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Antony-Centre"
    citySlug="antony-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Antony-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier antony-centre", "serrurier urgence antony-centre", "ouverture porte antony-centre", "serrurier 24h antony-centre", "dépannage serrure antony-centre"]}
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