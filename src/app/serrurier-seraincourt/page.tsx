import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Seraincourt',
  department: '78',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Seraincourt 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier seraincourt', 'serrurier urgence seraincourt', 'ouverture porte seraincourt', 'serrurier 24h seraincourt', 'dépannage serrure seraincourt']
};

export default function Page() {
  return <CityPage 
    cityName="Seraincourt"
    citySlug="seraincourt"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Seraincourt - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier seraincourt", "serrurier urgence seraincourt", "ouverture porte seraincourt", "serrurier 24h seraincourt", "dépannage serrure seraincourt"]}
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