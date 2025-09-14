import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Rouvray',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Rouvray 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier rouvray', 'serrurier urgence rouvray', 'ouverture porte rouvray', 'serrurier 24h rouvray', 'dépannage serrure rouvray']
};

export default function Page() {
  return <CityPage 
    cityName="Rouvray"
    citySlug="rouvray"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Rouvray - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier rouvray", "serrurier urgence rouvray", "ouverture porte rouvray", "serrurier 24h rouvray", "dépannage serrure rouvray"]}
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