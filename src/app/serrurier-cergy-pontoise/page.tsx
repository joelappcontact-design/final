import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Cergy-Pontoise',
  department: '95',
  population: '200000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Cergy-Pontoise 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier cergy-pontoise', 'serrurier urgence cergy-pontoise', 'ouverture porte cergy-pontoise', 'serrurier 24h cergy-pontoise', 'dépannage serrure cergy-pontoise']
};

export default function Page() {
  return <CityPage 
    cityName="Cergy-Pontoise"
    citySlug="cergy-pontoise"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Cergy-Pontoise - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier cergy-pontoise", "serrurier urgence cergy-pontoise", "ouverture porte cergy-pontoise", "serrurier 24h cergy-pontoise", "dépannage serrure cergy-pontoise"]}
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