import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Suresnes',
  department: '92',
  population: '48000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier de la Défense'],
  description: 'Serrurier d\'urgence Suresnes 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier suresnes', 'serrurier urgence suresnes', 'ouverture porte suresnes', 'serrurier 24h suresnes', 'dépannage serrure suresnes']
};

export default function Page() {
  return <CityPage 
    cityName="Suresnes"
    citySlug="suresnes"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier de la Défense']}
    description="Suresnes - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier suresnes", "serrurier urgence suresnes", "ouverture porte suresnes", "serrurier 24h suresnes", "dépannage serrure suresnes"]}
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