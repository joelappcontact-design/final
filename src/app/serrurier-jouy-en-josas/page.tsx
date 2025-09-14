import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Jouy-en-Josas',
  department: '78',
  population: '8000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Jouy-en-Josas 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier jouy-en-josas', 'serrurier urgence jouy-en-josas', 'ouverture porte jouy-en-josas', 'serrurier 24h jouy-en-josas', 'dépannage serrure jouy-en-josas']
};

export default function Page() {
  return <CityPage 
    cityName="Jouy-en-Josas"
    citySlug="jouy-en-josas"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Jouy-en-Josas - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier jouy-en-josas", "serrurier urgence jouy-en-josas", "ouverture porte jouy-en-josas", "serrurier 24h jouy-en-josas", "dépannage serrure jouy-en-josas"]}
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