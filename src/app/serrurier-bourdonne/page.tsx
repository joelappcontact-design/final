import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bourdonné',
  department: '78',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bourdonné 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bourdonne', 'serrurier urgence bourdonne', 'ouverture porte bourdonne', 'serrurier 24h bourdonne', 'dépannage serrure bourdonne']
};

export default function Page() {
  return <CityPage 
    cityName="Bourdonné"
    citySlug="bourdonne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bourdonné - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bourdonne", "serrurier urgence bourdonne", "ouverture porte bourdonne", "serrurier 24h bourdonne", "dépannage serrure bourdonne"]}
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