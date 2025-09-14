import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Les Ulis-Centre',
  department: '91',
  population: '25000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Les Ulis-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier les-ulis-centre', 'serrurier urgence les-ulis-centre', 'ouverture porte les-ulis-centre', 'serrurier 24h les-ulis-centre', 'dépannage serrure les-ulis-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Les Ulis-Centre"
    citySlug="les-ulis-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Les Ulis-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier les-ulis-centre", "serrurier urgence les-ulis-centre", "ouverture porte les-ulis-centre", "serrurier 24h les-ulis-centre", "dépannage serrure les-ulis-centre"]}
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