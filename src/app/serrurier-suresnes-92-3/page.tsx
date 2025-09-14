import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Suresnes',
  department: '92',
  population: '50000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Suresnes 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier suresnes-92-3', 'serrurier urgence suresnes-92-3', 'ouverture porte suresnes-92-3', 'serrurier 24h suresnes-92-3', 'dépannage serrure suresnes-92-3']
};

export default function Page() {
  return <CityPage 
    cityName="Suresnes"
    citySlug="suresnes-92-3"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Suresnes - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier suresnes-92-3", "serrurier urgence suresnes-92-3", "ouverture porte suresnes-92-3", "serrurier 24h suresnes-92-3", "dépannage serrure suresnes-92-3"]}
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