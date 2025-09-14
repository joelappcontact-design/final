import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Mars-Vieux-Maisons',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Mars-Vieux-Maisons 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-mars-vieux-maisons', 'serrurier urgence saint-mars-vieux-maisons', 'ouverture porte saint-mars-vieux-maisons', 'serrurier 24h saint-mars-vieux-maisons', 'dépannage serrure saint-mars-vieux-maisons']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Mars-Vieux-Maisons"
    citySlug="saint-mars-vieux-maisons"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Mars-Vieux-Maisons - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-mars-vieux-maisons", "serrurier urgence saint-mars-vieux-maisons", "ouverture porte saint-mars-vieux-maisons", "serrurier 24h saint-mars-vieux-maisons", "dépannage serrure saint-mars-vieux-maisons"]}
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