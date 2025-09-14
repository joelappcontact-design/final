import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Prunay-le-Temple',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Prunay-le-Temple 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier prunay-le-temple', 'serrurier urgence prunay-le-temple', 'ouverture porte prunay-le-temple', 'serrurier 24h prunay-le-temple', 'dépannage serrure prunay-le-temple']
};

export default function Page() {
  return <CityPage 
    cityName="Prunay-le-Temple"
    citySlug="prunay-le-temple"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Prunay-le-Temple - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier prunay-le-temple", "serrurier urgence prunay-le-temple", "ouverture porte prunay-le-temple", "serrurier 24h prunay-le-temple", "dépannage serrure prunay-le-temple"]}
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