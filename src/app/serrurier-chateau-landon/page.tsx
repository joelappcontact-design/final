import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Château-Landon',
  department: '77',
  population: '3000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Château-Landon 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chateau-landon', 'serrurier urgence chateau-landon', 'ouverture porte chateau-landon', 'serrurier 24h chateau-landon', 'dépannage serrure chateau-landon']
};

export default function Page() {
  return <CityPage 
    cityName="Château-Landon"
    citySlug="chateau-landon"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Château-Landon - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chateau-landon", "serrurier urgence chateau-landon", "ouverture porte chateau-landon", "serrurier 24h chateau-landon", "dépannage serrure chateau-landon"]}
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