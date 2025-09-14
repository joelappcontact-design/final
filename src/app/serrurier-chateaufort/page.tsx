import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Châteaufort',
  department: '78',
  population: '1500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Châteaufort 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chateaufort', 'serrurier urgence chateaufort', 'ouverture porte chateaufort', 'serrurier 24h chateaufort', 'dépannage serrure chateaufort']
};

export default function Page() {
  return <CityPage 
    cityName="Châteaufort"
    citySlug="chateaufort"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Châteaufort - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chateaufort", "serrurier urgence chateaufort", "ouverture porte chateaufort", "serrurier 24h chateaufort", "dépannage serrure chateaufort"]}
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