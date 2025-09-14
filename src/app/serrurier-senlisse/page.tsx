import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Senlisse',
  department: '78',
  population: '600',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Senlisse 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier senlisse', 'serrurier urgence senlisse', 'ouverture porte senlisse', 'serrurier 24h senlisse', 'dépannage serrure senlisse']
};

export default function Page() {
  return <CityPage 
    cityName="Senlisse"
    citySlug="senlisse"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Senlisse - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier senlisse", "serrurier urgence senlisse", "ouverture porte senlisse", "serrurier 24h senlisse", "dépannage serrure senlisse"]}
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