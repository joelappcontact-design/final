import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Maur-des-Fossés',
  department: '94',
  population: '75000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Maur-des-Fossés 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-maur-des-fosses', 'serrurier urgence saint-maur-des-fosses', 'ouverture porte saint-maur-des-fosses', 'serrurier 24h saint-maur-des-fosses', 'dépannage serrure saint-maur-des-fosses']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Maur-des-Fossés"
    citySlug="saint-maur-des-fosses"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Maur-des-Fossés - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-maur-des-fosses", "serrurier urgence saint-maur-des-fosses", "ouverture porte saint-maur-des-fosses", "serrurier 24h saint-maur-des-fosses", "dépannage serrure saint-maur-des-fosses"]}
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