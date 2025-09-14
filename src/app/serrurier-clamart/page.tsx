import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Clamart',
  department: '91',
  population: '54000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Clamart 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier clamart', 'serrurier urgence clamart', 'ouverture porte clamart', 'serrurier 24h clamart', 'dépannage serrure clamart']
};

export default function Page() {
  return <CityPage 
    cityName="Clamart"
    citySlug="clamart"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Clamart - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier clamart", "serrurier urgence clamart", "ouverture porte clamart", "serrurier 24h clamart", "dépannage serrure clamart"]}
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