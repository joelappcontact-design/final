import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Cergy-Nord',
  department: '95',
  population: '62000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Cergy-Nord 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier cergy-nord', 'serrurier urgence cergy-nord', 'ouverture porte cergy-nord', 'serrurier 24h cergy-nord', 'dépannage serrure cergy-nord']
};

export default function Page() {
  return <CityPage 
    cityName="Cergy-Nord"
    citySlug="cergy-nord"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Cergy-Nord - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier cergy-nord", "serrurier urgence cergy-nord", "ouverture porte cergy-nord", "serrurier 24h cergy-nord", "dépannage serrure cergy-nord"]}
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