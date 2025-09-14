import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Orgeval',
  department: '78',
  population: '6000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Orgeval 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier orgeval', 'serrurier urgence orgeval', 'ouverture porte orgeval', 'serrurier 24h orgeval', 'dépannage serrure orgeval']
};

export default function Page() {
  return <CityPage 
    cityName="Orgeval"
    citySlug="orgeval"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Orgeval - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier orgeval", "serrurier urgence orgeval", "ouverture porte orgeval", "serrurier 24h orgeval", "dépannage serrure orgeval"]}
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