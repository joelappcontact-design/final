import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Rosny-sur-Seine',
  department: '78',
  population: '6000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Rosny-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier rosny-sur-seine', 'serrurier urgence rosny-sur-seine', 'ouverture porte rosny-sur-seine', 'serrurier 24h rosny-sur-seine', 'dépannage serrure rosny-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Rosny-sur-Seine"
    citySlug="rosny-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Rosny-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier rosny-sur-seine", "serrurier urgence rosny-sur-seine", "ouverture porte rosny-sur-seine", "serrurier 24h rosny-sur-seine", "dépannage serrure rosny-sur-seine"]}
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