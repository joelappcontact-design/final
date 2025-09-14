import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Conflans-Sainte-Honorine',
  department: '92',
  population: '35000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Conflans-Sainte-Honorine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier conflans-sainte-honorine', 'serrurier urgence conflans-sainte-honorine', 'ouverture porte conflans-sainte-honorine', 'serrurier 24h conflans-sainte-honorine', 'dépannage serrure conflans-sainte-honorine']
};

export default function Page() {
  return <CityPage 
    cityName="Conflans-Sainte-Honorine"
    citySlug="conflans-sainte-honorine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Conflans-Sainte-Honorine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier conflans-sainte-honorine", "serrurier urgence conflans-sainte-honorine", "ouverture porte conflans-sainte-honorine", "serrurier 24h conflans-sainte-honorine", "dépannage serrure conflans-sainte-honorine"]}
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