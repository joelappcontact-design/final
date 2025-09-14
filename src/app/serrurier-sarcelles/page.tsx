import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Sarcelles',
  department: '95',
  population: '60000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Sarcelles 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier sarcelles', 'serrurier urgence sarcelles', 'ouverture porte sarcelles', 'serrurier 24h sarcelles', 'dépannage serrure sarcelles']
};

export default function Page() {
  return <CityPage 
    cityName="Sarcelles"
    citySlug="sarcelles"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Sarcelles - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier sarcelles", "serrurier urgence sarcelles", "ouverture porte sarcelles", "serrurier 24h sarcelles", "dépannage serrure sarcelles"]}
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