import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bondy',
  department: '93',
  population: '54000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bondy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bondy', 'serrurier urgence bondy', 'ouverture porte bondy', 'serrurier 24h bondy', 'dépannage serrure bondy']
};

export default function Page() {
  return <CityPage 
    cityName="Bondy"
    citySlug="bondy"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bondy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bondy", "serrurier urgence bondy", "ouverture porte bondy", "serrurier 24h bondy", "dépannage serrure bondy"]}
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