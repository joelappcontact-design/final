import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Pont-de-l\'Arche',
  department: '78',
  population: '4000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Pont-de-l\'Arche 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier pont-de-larche', 'serrurier urgence pont-de-larche', 'ouverture porte pont-de-larche', 'serrurier 24h pont-de-larche', 'dépannage serrure pont-de-larche']
};

export default function Page() {
  return <CityPage 
    cityName="Pont-de-l\'Arche"
    citySlug="pont-de-larche"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Pont-de-l\'Arche - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier pont-de-larche", "serrurier urgence pont-de-larche", "ouverture porte pont-de-larche", "serrurier 24h pont-de-larche", "dépannage serrure pont-de-larche"]}
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