import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Soisy-sur-Seine',
  department: '91',
  population: '7000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Soisy-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier soisy-sur-seine', 'serrurier urgence soisy-sur-seine', 'ouverture porte soisy-sur-seine', 'serrurier 24h soisy-sur-seine', 'dépannage serrure soisy-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Soisy-sur-Seine"
    citySlug="soisy-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Soisy-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier soisy-sur-seine", "serrurier urgence soisy-sur-seine", "ouverture porte soisy-sur-seine", "serrurier 24h soisy-sur-seine", "dépannage serrure soisy-sur-seine"]}
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