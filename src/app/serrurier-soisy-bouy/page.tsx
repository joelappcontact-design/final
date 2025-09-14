import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Soisy-Bouy',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Soisy-Bouy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier soisy-bouy', 'serrurier urgence soisy-bouy', 'ouverture porte soisy-bouy', 'serrurier 24h soisy-bouy', 'dépannage serrure soisy-bouy']
};

export default function Page() {
  return <CityPage 
    cityName="Soisy-Bouy"
    citySlug="soisy-bouy"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Soisy-Bouy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier soisy-bouy", "serrurier urgence soisy-bouy", "ouverture porte soisy-bouy", "serrurier 24h soisy-bouy", "dépannage serrure soisy-bouy"]}
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