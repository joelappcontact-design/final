import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bullion',
  department: '78',
  population: '2000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bullion 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bullion', 'serrurier urgence bullion', 'ouverture porte bullion', 'serrurier 24h bullion', 'dépannage serrure bullion']
};

export default function Page() {
  return <CityPage 
    cityName="Bullion"
    citySlug="bullion"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bullion - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bullion", "serrurier urgence bullion", "ouverture porte bullion", "serrurier 24h bullion", "dépannage serrure bullion"]}
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