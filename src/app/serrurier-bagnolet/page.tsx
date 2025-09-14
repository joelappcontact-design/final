import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bagnolet',
  department: '93',
  population: '36000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bagnolet 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bagnolet', 'serrurier urgence bagnolet', 'ouverture porte bagnolet', 'serrurier 24h bagnolet', 'dépannage serrure bagnolet']
};

export default function Page() {
  return <CityPage 
    cityName="Bagnolet"
    citySlug="bagnolet"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bagnolet - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bagnolet", "serrurier urgence bagnolet", "ouverture porte bagnolet", "serrurier 24h bagnolet", "dépannage serrure bagnolet"]}
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