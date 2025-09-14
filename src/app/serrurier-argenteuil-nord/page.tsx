import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Argenteuil-Nord',
  department: '95',
  population: '110000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Argenteuil-Nord 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier argenteuil-nord', 'serrurier urgence argenteuil-nord', 'ouverture porte argenteuil-nord', 'serrurier 24h argenteuil-nord', 'dépannage serrure argenteuil-nord']
};

export default function Page() {
  return <CityPage 
    cityName="Argenteuil-Nord"
    citySlug="argenteuil-nord"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Argenteuil-Nord - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier argenteuil-nord", "serrurier urgence argenteuil-nord", "ouverture porte argenteuil-nord", "serrurier 24h argenteuil-nord", "dépannage serrure argenteuil-nord"]}
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