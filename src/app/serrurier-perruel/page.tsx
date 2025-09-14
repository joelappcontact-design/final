import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Perruel',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Perruel 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier perruel', 'serrurier urgence perruel', 'ouverture porte perruel', 'serrurier 24h perruel', 'dépannage serrure perruel']
};

export default function Page() {
  return <CityPage 
    cityName="Perruel"
    citySlug="perruel"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Perruel - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier perruel", "serrurier urgence perruel", "ouverture porte perruel", "serrurier 24h perruel", "dépannage serrure perruel"]}
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