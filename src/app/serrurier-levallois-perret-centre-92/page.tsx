import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Levallois-Perret-Centre',
  department: '92',
  population: '65000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Levallois-Perret-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier levallois-perret-centre-92', 'serrurier urgence levallois-perret-centre-92', 'ouverture porte levallois-perret-centre-92', 'serrurier 24h levallois-perret-centre-92', 'dépannage serrure levallois-perret-centre-92']
};

export default function Page() {
  return <CityPage 
    cityName="Levallois-Perret-Centre"
    citySlug="levallois-perret-centre-92"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Levallois-Perret-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier levallois-perret-centre-92", "serrurier urgence levallois-perret-centre-92", "ouverture porte levallois-perret-centre-92", "serrurier 24h levallois-perret-centre-92", "dépannage serrure levallois-perret-centre-92"]}
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