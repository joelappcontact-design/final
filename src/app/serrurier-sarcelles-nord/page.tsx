import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Sarcelles-Nord',
  department: '95',
  population: '60000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Sarcelles-Nord 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier sarcelles-nord', 'serrurier urgence sarcelles-nord', 'ouverture porte sarcelles-nord', 'serrurier 24h sarcelles-nord', 'dépannage serrure sarcelles-nord']
};

export default function Page() {
  return <CityPage 
    cityName="Sarcelles-Nord"
    citySlug="sarcelles-nord"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Sarcelles-Nord - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier sarcelles-nord", "serrurier urgence sarcelles-nord", "ouverture porte sarcelles-nord", "serrurier 24h sarcelles-nord", "dépannage serrure sarcelles-nord"]}
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