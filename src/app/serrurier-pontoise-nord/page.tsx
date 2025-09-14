import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Pontoise-Nord',
  department: '95',
  population: '30000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Pontoise-Nord 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier pontoise-nord', 'serrurier urgence pontoise-nord', 'ouverture porte pontoise-nord', 'serrurier 24h pontoise-nord', 'dépannage serrure pontoise-nord']
};

export default function Page() {
  return <CityPage 
    cityName="Pontoise-Nord"
    citySlug="pontoise-nord"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Pontoise-Nord - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier pontoise-nord", "serrurier urgence pontoise-nord", "ouverture porte pontoise-nord", "serrurier 24h pontoise-nord", "dépannage serrure pontoise-nord"]}
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