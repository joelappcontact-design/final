import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Pierrefitte-sur-Seine Sud',
  department: '93',
  population: '15000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Pierrefitte-sur-Seine Sud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier pierrefitte-sur-seine-sud', 'serrurier urgence pierrefitte-sur-seine-sud', 'ouverture porte pierrefitte-sur-seine-sud', 'serrurier 24h pierrefitte-sur-seine-sud', 'dépannage serrure pierrefitte-sur-seine-sud']
};

export default function Page() {
  return <CityPage 
    cityName="Pierrefitte-sur-Seine Sud"
    citySlug="pierrefitte-sur-seine-sud"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Pierrefitte-sur-Seine Sud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier pierrefitte-sur-seine-sud", "serrurier urgence pierrefitte-sur-seine-sud", "ouverture porte pierrefitte-sur-seine-sud", "serrurier 24h pierrefitte-sur-seine-sud", "dépannage serrure pierrefitte-sur-seine-sud"]}
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