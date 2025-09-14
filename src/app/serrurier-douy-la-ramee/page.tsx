import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Douy-la-Ramée',
  department: '77',
  population: '400',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Douy-la-Ramée 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier douy-la-ramee', 'serrurier urgence douy-la-ramee', 'ouverture porte douy-la-ramee', 'serrurier 24h douy-la-ramee', 'dépannage serrure douy-la-ramee']
};

export default function Page() {
  return <CityPage 
    cityName="Douy-la-Ramée"
    citySlug="douy-la-ramee"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Douy-la-Ramée - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier douy-la-ramee", "serrurier urgence douy-la-ramee", "ouverture porte douy-la-ramee", "serrurier 24h douy-la-ramee", "dépannage serrure douy-la-ramee"]}
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