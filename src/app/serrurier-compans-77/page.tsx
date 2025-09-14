import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Compans',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Compans 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier compans-77', 'serrurier urgence compans-77', 'ouverture porte compans-77', 'serrurier 24h compans-77', 'dépannage serrure compans-77']
};

export default function Page() {
  return <CityPage 
    cityName="Compans"
    citySlug="compans-77"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Compans - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier compans-77", "serrurier urgence compans-77", "ouverture porte compans-77", "serrurier 24h compans-77", "dépannage serrure compans-77"]}
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