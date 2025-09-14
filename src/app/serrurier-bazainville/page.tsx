import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bazainville',
  department: '78',
  population: '1500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bazainville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bazainville', 'serrurier urgence bazainville', 'ouverture porte bazainville', 'serrurier 24h bazainville', 'dépannage serrure bazainville']
};

export default function Page() {
  return <CityPage 
    cityName="Bazainville"
    citySlug="bazainville"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bazainville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bazainville", "serrurier urgence bazainville", "ouverture porte bazainville", "serrurier 24h bazainville", "dépannage serrure bazainville"]}
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