import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Garges-lès-Gonesse',
  department: '95',
  population: '42000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Garges-lès-Gonesse 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier garges-les-gonesse', 'serrurier urgence garges-les-gonesse', 'ouverture porte garges-les-gonesse', 'serrurier 24h garges-les-gonesse', 'dépannage serrure garges-les-gonesse']
};

export default function Page() {
  return <CityPage 
    cityName="Garges-lès-Gonesse"
    citySlug="garges-les-gonesse"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Garges-lès-Gonesse - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier garges-les-gonesse", "serrurier urgence garges-les-gonesse", "ouverture porte garges-les-gonesse", "serrurier 24h garges-les-gonesse", "dépannage serrure garges-les-gonesse"]}
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