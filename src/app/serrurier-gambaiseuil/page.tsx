import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Gambaiseuil',
  department: '78',
  population: '100',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Gambaiseuil 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier gambaiseuil', 'serrurier urgence gambaiseuil', 'ouverture porte gambaiseuil', 'serrurier 24h gambaiseuil', 'dépannage serrure gambaiseuil']
};

export default function Page() {
  return <CityPage 
    cityName="Gambaiseuil"
    citySlug="gambaiseuil"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Gambaiseuil - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier gambaiseuil", "serrurier urgence gambaiseuil", "ouverture porte gambaiseuil", "serrurier 24h gambaiseuil", "dépannage serrure gambaiseuil"]}
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