import CityPage from '@/components/CityPage';

const cityData = {
  name: 'La Falaise',
  department: '78',
  population: '1500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence La Falaise 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier la-falaise', 'serrurier urgence la-falaise', 'ouverture porte la-falaise', 'serrurier 24h la-falaise', 'dépannage serrure la-falaise']
};

export default function Page() {
  return <CityPage 
    cityName="La Falaise"
    citySlug="la-falaise"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="La Falaise - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier la-falaise", "serrurier urgence la-falaise", "ouverture porte la-falaise", "serrurier 24h la-falaise", "dépannage serrure la-falaise"]}
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