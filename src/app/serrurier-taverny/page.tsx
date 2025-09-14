import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Taverny',
  department: '95',
  population: '26000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Taverny 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier taverny', 'serrurier urgence taverny', 'ouverture porte taverny', 'serrurier 24h taverny', 'dépannage serrure taverny']
};

export default function Page() {
  return <CityPage 
    cityName="Taverny"
    citySlug="taverny"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Taverny - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier taverny", "serrurier urgence taverny", "ouverture porte taverny", "serrurier 24h taverny", "dépannage serrure taverny"]}
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