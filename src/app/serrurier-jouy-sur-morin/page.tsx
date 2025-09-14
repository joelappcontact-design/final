import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Jouy-sur-Morin',
  department: '77',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Jouy-sur-Morin 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier jouy-sur-morin', 'serrurier urgence jouy-sur-morin', 'ouverture porte jouy-sur-morin', 'serrurier 24h jouy-sur-morin', 'dépannage serrure jouy-sur-morin']
};

export default function Page() {
  return <CityPage 
    cityName="Jouy-sur-Morin"
    citySlug="jouy-sur-morin"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Jouy-sur-Morin - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier jouy-sur-morin", "serrurier urgence jouy-sur-morin", "ouverture porte jouy-sur-morin", "serrurier 24h jouy-sur-morin", "dépannage serrure jouy-sur-morin"]}
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