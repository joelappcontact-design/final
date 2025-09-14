import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Juvisy-sur-Orge-Centre',
  department: '91',
  population: '15000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Juvisy-sur-Orge-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier juvisy-sur-orge-centre', 'serrurier urgence juvisy-sur-orge-centre', 'ouverture porte juvisy-sur-orge-centre', 'serrurier 24h juvisy-sur-orge-centre', 'dépannage serrure juvisy-sur-orge-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Juvisy-sur-Orge-Centre"
    citySlug="juvisy-sur-orge-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Juvisy-sur-Orge-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier juvisy-sur-orge-centre", "serrurier urgence juvisy-sur-orge-centre", "ouverture porte juvisy-sur-orge-centre", "serrurier 24h juvisy-sur-orge-centre", "dépannage serrure juvisy-sur-orge-centre"]}
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