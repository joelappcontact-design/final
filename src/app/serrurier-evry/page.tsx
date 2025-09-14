import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Évry',
  department: '91',
  population: '68000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Évry 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier evry', 'serrurier urgence evry', 'ouverture porte evry', 'serrurier 24h evry', 'dépannage serrure evry']
};

export default function Page() {
  return <CityPage 
    cityName="Évry"
    citySlug="evry"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Évry - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier evry", "serrurier urgence evry", "ouverture porte evry", "serrurier 24h evry", "dépannage serrure evry"]}
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