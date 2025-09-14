import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bobigny-Centre',
  department: '93',
  population: '55000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bobigny-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bobigny-centre', 'serrurier urgence bobigny-centre', 'ouverture porte bobigny-centre', 'serrurier 24h bobigny-centre', 'dépannage serrure bobigny-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Bobigny-Centre"
    citySlug="bobigny-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bobigny-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bobigny-centre", "serrurier urgence bobigny-centre", "ouverture porte bobigny-centre", "serrurier 24h bobigny-centre", "dépannage serrure bobigny-centre"]}
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