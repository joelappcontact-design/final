import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Orveau',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Orveau 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier orveau-91', 'serrurier urgence orveau-91', 'ouverture porte orveau-91', 'serrurier 24h orveau-91', 'dépannage serrure orveau-91']
};

export default function Page() {
  return <CityPage 
    cityName="Orveau"
    citySlug="orveau-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Orveau - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier orveau-91", "serrurier urgence orveau-91", "ouverture porte orveau-91", "serrurier 24h orveau-91", "dépannage serrure orveau-91"]}
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