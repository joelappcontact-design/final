import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Suresnes-Nord',
  department: '92',
  population: '49000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Suresnes-Nord 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier suresnes-nord', 'serrurier urgence suresnes-nord', 'ouverture porte suresnes-nord', 'serrurier 24h suresnes-nord', 'dépannage serrure suresnes-nord']
};

export default function Page() {
  return <CityPage 
    cityName="Suresnes-Nord"
    citySlug="suresnes-nord"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Suresnes-Nord - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier suresnes-nord", "serrurier urgence suresnes-nord", "ouverture porte suresnes-nord", "serrurier 24h suresnes-nord", "dépannage serrure suresnes-nord"]}
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