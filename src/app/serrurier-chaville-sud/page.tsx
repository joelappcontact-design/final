import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Chaville-Sud',
  department: '92',
  population: '20000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Chaville-Sud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chaville-sud', 'serrurier urgence chaville-sud', 'ouverture porte chaville-sud', 'serrurier 24h chaville-sud', 'dépannage serrure chaville-sud']
};

export default function Page() {
  return <CityPage 
    cityName="Chaville-Sud"
    citySlug="chaville-sud"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Chaville-Sud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chaville-sud", "serrurier urgence chaville-sud", "ouverture porte chaville-sud", "serrurier 24h chaville-sud", "dépannage serrure chaville-sud"]}
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