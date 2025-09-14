import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Evry-Grégy-sur-Yerre',
  department: '77',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Evry-Grégy-sur-Yerre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier evry-gregy-sur-yerre', 'serrurier urgence evry-gregy-sur-yerre', 'ouverture porte evry-gregy-sur-yerre', 'serrurier 24h evry-gregy-sur-yerre', 'dépannage serrure evry-gregy-sur-yerre']
};

export default function Page() {
  return <CityPage 
    cityName="Evry-Grégy-sur-Yerre"
    citySlug="evry-gregy-sur-yerre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Evry-Grégy-sur-Yerre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier evry-gregy-sur-yerre", "serrurier urgence evry-gregy-sur-yerre", "ouverture porte evry-gregy-sur-yerre", "serrurier 24h evry-gregy-sur-yerre", "dépannage serrure evry-gregy-sur-yerre"]}
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