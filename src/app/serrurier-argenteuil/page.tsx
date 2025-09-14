import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Argenteuil',
  department: '95',
  population: '110000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Argenteuil 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier argenteuil', 'serrurier urgence argenteuil', 'ouverture porte argenteuil', 'serrurier 24h argenteuil', 'dépannage serrure argenteuil']
};

export default function Page() {
  return <CityPage 
    cityName="Argenteuil"
    citySlug="argenteuil"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Argenteuil - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier argenteuil", "serrurier urgence argenteuil", "ouverture porte argenteuil", "serrurier 24h argenteuil", "dépannage serrure argenteuil"]}
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