import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Pierre-Levée',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Pierre-Levée 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier pierre-levee', 'serrurier urgence pierre-levee', 'ouverture porte pierre-levee', 'serrurier 24h pierre-levee', 'dépannage serrure pierre-levee']
};

export default function Page() {
  return <CityPage 
    cityName="Pierre-Levée"
    citySlug="pierre-levee"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Pierre-Levée - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier pierre-levee", "serrurier urgence pierre-levee", "ouverture porte pierre-levee", "serrurier 24h pierre-levee", "dépannage serrure pierre-levee"]}
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