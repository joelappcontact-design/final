import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Arbonne-la-Forêt',
  department: '77',
  population: '1200',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Arbonne-la-Forêt 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier arbonne-la-foret', 'serrurier urgence arbonne-la-foret', 'ouverture porte arbonne-la-foret', 'serrurier 24h arbonne-la-foret', 'dépannage serrure arbonne-la-foret']
};

export default function Page() {
  return <CityPage 
    cityName="Arbonne-la-Forêt"
    citySlug="arbonne-la-foret"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Arbonne-la-Forêt - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier arbonne-la-foret", "serrurier urgence arbonne-la-foret", "ouverture porte arbonne-la-foret", "serrurier 24h arbonne-la-foret", "dépannage serrure arbonne-la-foret"]}
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