import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Stains Sud',
  department: '93',
  population: '19000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Stains Sud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier stains-sud', 'serrurier urgence stains-sud', 'ouverture porte stains-sud', 'serrurier 24h stains-sud', 'dépannage serrure stains-sud']
};

export default function Page() {
  return <CityPage 
    cityName="Stains Sud"
    citySlug="stains-sud"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Stains Sud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier stains-sud", "serrurier urgence stains-sud", "ouverture porte stains-sud", "serrurier 24h stains-sud", "dépannage serrure stains-sud"]}
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