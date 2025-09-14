import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Les Mureaux-Centre',
  department: '78',
  population: '32000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Les Mureaux-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier les-mureaux-centre', 'serrurier urgence les-mureaux-centre', 'ouverture porte les-mureaux-centre', 'serrurier 24h les-mureaux-centre', 'dépannage serrure les-mureaux-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Les Mureaux-Centre"
    citySlug="les-mureaux-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Les Mureaux-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier les-mureaux-centre", "serrurier urgence les-mureaux-centre", "ouverture porte les-mureaux-centre", "serrurier 24h les-mureaux-centre", "dépannage serrure les-mureaux-centre"]}
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