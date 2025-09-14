import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Civry-la-Forêt',
  department: '78',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Civry-la-Forêt 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier civry-la-foret', 'serrurier urgence civry-la-foret', 'ouverture porte civry-la-foret', 'serrurier 24h civry-la-foret', 'dépannage serrure civry-la-foret']
};

export default function Page() {
  return <CityPage 
    cityName="Civry-la-Forêt"
    citySlug="civry-la-foret"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Civry-la-Forêt - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier civry-la-foret", "serrurier urgence civry-la-foret", "ouverture porte civry-la-foret", "serrurier 24h civry-la-foret", "dépannage serrure civry-la-foret"]}
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