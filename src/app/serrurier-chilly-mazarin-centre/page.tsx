import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Chilly-Mazarin-Centre',
  department: '91',
  population: '20000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Chilly-Mazarin-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chilly-mazarin-centre', 'serrurier urgence chilly-mazarin-centre', 'ouverture porte chilly-mazarin-centre', 'serrurier 24h chilly-mazarin-centre', 'dépannage serrure chilly-mazarin-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Chilly-Mazarin-Centre"
    citySlug="chilly-mazarin-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Chilly-Mazarin-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chilly-mazarin-centre", "serrurier urgence chilly-mazarin-centre", "ouverture porte chilly-mazarin-centre", "serrurier 24h chilly-mazarin-centre", "dépannage serrure chilly-mazarin-centre"]}
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