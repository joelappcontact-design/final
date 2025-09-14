import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Sivry-Courtry',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Sivry-Courtry 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier sivry-courtry', 'serrurier urgence sivry-courtry', 'ouverture porte sivry-courtry', 'serrurier 24h sivry-courtry', 'dépannage serrure sivry-courtry']
};

export default function Page() {
  return <CityPage 
    cityName="Sivry-Courtry"
    citySlug="sivry-courtry"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Sivry-Courtry - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier sivry-courtry", "serrurier urgence sivry-courtry", "ouverture porte sivry-courtry", "serrurier 24h sivry-courtry", "dépannage serrure sivry-courtry"]}
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