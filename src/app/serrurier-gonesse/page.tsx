import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Gonesse',
  department: '95',
  population: '25000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Gonesse 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier gonesse', 'serrurier urgence gonesse', 'ouverture porte gonesse', 'serrurier 24h gonesse', 'dépannage serrure gonesse']
};

export default function Page() {
  return <CityPage 
    cityName="Gonesse"
    citySlug="gonesse"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Gonesse - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier gonesse", "serrurier urgence gonesse", "ouverture porte gonesse", "serrurier 24h gonesse", "dépannage serrure gonesse"]}
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