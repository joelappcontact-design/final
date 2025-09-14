import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Port-Marly',
  department: '78',
  population: '5000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Port-Marly 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier port-marly', 'serrurier urgence port-marly', 'ouverture porte port-marly', 'serrurier 24h port-marly', 'dépannage serrure port-marly']
};

export default function Page() {
  return <CityPage 
    cityName="Port-Marly"
    citySlug="port-marly"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Port-Marly - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier port-marly", "serrurier urgence port-marly", "ouverture porte port-marly", "serrurier 24h port-marly", "dépannage serrure port-marly"]}
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