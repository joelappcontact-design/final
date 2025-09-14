import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Fontainebleau',
  department: '77',
  population: '15000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Fontainebleau 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier fontainebleau', 'serrurier urgence fontainebleau', 'ouverture porte fontainebleau', 'serrurier 24h fontainebleau', 'dépannage serrure fontainebleau']
};

export default function Page() {
  return <CityPage 
    cityName="Fontainebleau"
    citySlug="fontainebleau"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Fontainebleau - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier fontainebleau", "serrurier urgence fontainebleau", "ouverture porte fontainebleau", "serrurier 24h fontainebleau", "dépannage serrure fontainebleau"]}
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