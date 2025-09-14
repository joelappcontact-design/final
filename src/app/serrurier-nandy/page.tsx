import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Nandy',
  department: '77',
  population: '5800',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Nandy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier nandy', 'serrurier urgence nandy', 'ouverture porte nandy', 'serrurier 24h nandy', 'dépannage serrure nandy']
};

export default function Page() {
  return <CityPage 
    cityName="Nandy"
    citySlug="nandy"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Nandy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier nandy", "serrurier urgence nandy", "ouverture porte nandy", "serrurier 24h nandy", "dépannage serrure nandy"]}
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