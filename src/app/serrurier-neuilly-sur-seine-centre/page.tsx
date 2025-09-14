import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Neuilly-sur-Seine-Centre',
  department: '92',
  population: '62000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Neuilly-sur-Seine-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier neuilly-sur-seine-centre', 'serrurier urgence neuilly-sur-seine-centre', 'ouverture porte neuilly-sur-seine-centre', 'serrurier 24h neuilly-sur-seine-centre', 'dépannage serrure neuilly-sur-seine-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Neuilly-sur-Seine-Centre"
    citySlug="neuilly-sur-seine-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Neuilly-sur-Seine-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier neuilly-sur-seine-centre", "serrurier urgence neuilly-sur-seine-centre", "ouverture porte neuilly-sur-seine-centre", "serrurier 24h neuilly-sur-seine-centre", "dépannage serrure neuilly-sur-seine-centre"]}
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