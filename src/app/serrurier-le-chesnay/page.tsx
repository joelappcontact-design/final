import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Le Chesnay',
  department: '92',
  population: '30000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Le Chesnay 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier le-chesnay', 'serrurier urgence le-chesnay', 'ouverture porte le-chesnay', 'serrurier 24h le-chesnay', 'dépannage serrure le-chesnay']
};

export default function Page() {
  return <CityPage 
    cityName="Le Chesnay"
    citySlug="le-chesnay"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Le Chesnay - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier le-chesnay", "serrurier urgence le-chesnay", "ouverture porte le-chesnay", "serrurier 24h le-chesnay", "dépannage serrure le-chesnay"]}
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