import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Enghien-les-Bains',
  department: '95',
  population: '12000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Enghien-les-Bains 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier enghien-les-bains', 'serrurier urgence enghien-les-bains', 'ouverture porte enghien-les-bains', 'serrurier 24h enghien-les-bains', 'dépannage serrure enghien-les-bains']
};

export default function Page() {
  return <CityPage 
    cityName="Enghien-les-Bains"
    citySlug="enghien-les-bains"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Enghien-les-Bains - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier enghien-les-bains", "serrurier urgence enghien-les-bains", "ouverture porte enghien-les-bains", "serrurier 24h enghien-les-bains", "dépannage serrure enghien-les-bains"]}
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