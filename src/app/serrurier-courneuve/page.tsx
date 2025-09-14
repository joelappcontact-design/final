import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Courneuve',
  department: '93',
  population: '45000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Courneuve 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier courneuve', 'serrurier urgence courneuve', 'ouverture porte courneuve', 'serrurier 24h courneuve', 'dépannage serrure courneuve']
};

export default function Page() {
  return <CityPage 
    cityName="Courneuve"
    citySlug="courneuve"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Courneuve - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier courneuve", "serrurier urgence courneuve", "ouverture porte courneuve", "serrurier 24h courneuve", "dépannage serrure courneuve"]}
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