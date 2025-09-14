import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Lorrez-le-Bocage-Préaux',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Lorrez-le-Bocage-Préaux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier lorrez-le-bocage-preaux', 'serrurier urgence lorrez-le-bocage-preaux', 'ouverture porte lorrez-le-bocage-preaux', 'serrurier 24h lorrez-le-bocage-preaux', 'dépannage serrure lorrez-le-bocage-preaux']
};

export default function Page() {
  return <CityPage 
    cityName="Lorrez-le-Bocage-Préaux"
    citySlug="lorrez-le-bocage-preaux"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Lorrez-le-Bocage-Préaux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier lorrez-le-bocage-preaux", "serrurier urgence lorrez-le-bocage-preaux", "ouverture porte lorrez-le-bocage-preaux", "serrurier 24h lorrez-le-bocage-preaux", "dépannage serrure lorrez-le-bocage-preaux"]}
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