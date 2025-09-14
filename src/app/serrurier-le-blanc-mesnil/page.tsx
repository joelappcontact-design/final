import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Le Blanc-Mesnil',
  department: '93',
  population: '55000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Le Blanc-Mesnil 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier le-blanc-mesnil', 'serrurier urgence le-blanc-mesnil', 'ouverture porte le-blanc-mesnil', 'serrurier 24h le-blanc-mesnil', 'dépannage serrure le-blanc-mesnil']
};

export default function Page() {
  return <CityPage 
    cityName="Le Blanc-Mesnil"
    citySlug="le-blanc-mesnil"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Le Blanc-Mesnil - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier le-blanc-mesnil", "serrurier urgence le-blanc-mesnil", "ouverture porte le-blanc-mesnil", "serrurier 24h le-blanc-mesnil", "dépannage serrure le-blanc-mesnil"]}
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