import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Longjumeau-Centre',
  department: '91',
  population: '22000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Longjumeau-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier longjumeau-centre', 'serrurier urgence longjumeau-centre', 'ouverture porte longjumeau-centre', 'serrurier 24h longjumeau-centre', 'dépannage serrure longjumeau-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Longjumeau-Centre"
    citySlug="longjumeau-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Longjumeau-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier longjumeau-centre", "serrurier urgence longjumeau-centre", "ouverture porte longjumeau-centre", "serrurier 24h longjumeau-centre", "dépannage serrure longjumeau-centre"]}
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