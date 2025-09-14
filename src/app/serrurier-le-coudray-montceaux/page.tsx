import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Le Coudray-Montceaux',
  department: '91',
  population: '4000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Le Coudray-Montceaux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier le-coudray-montceaux', 'serrurier urgence le-coudray-montceaux', 'ouverture porte le-coudray-montceaux', 'serrurier 24h le-coudray-montceaux', 'dépannage serrure le-coudray-montceaux']
};

export default function Page() {
  return <CityPage 
    cityName="Le Coudray-Montceaux"
    citySlug="le-coudray-montceaux"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Le Coudray-Montceaux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier le-coudray-montceaux", "serrurier urgence le-coudray-montceaux", "ouverture porte le-coudray-montceaux", "serrurier 24h le-coudray-montceaux", "dépannage serrure le-coudray-montceaux"]}
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