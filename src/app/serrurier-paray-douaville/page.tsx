import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Paray-Douaville',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Paray-Douaville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier paray-douaville', 'serrurier urgence paray-douaville', 'ouverture porte paray-douaville', 'serrurier 24h paray-douaville', 'dépannage serrure paray-douaville']
};

export default function Page() {
  return <CityPage 
    cityName="Paray-Douaville"
    citySlug="paray-douaville"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Paray-Douaville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier paray-douaville", "serrurier urgence paray-douaville", "ouverture porte paray-douaville", "serrurier 24h paray-douaville", "dépannage serrure paray-douaville"]}
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