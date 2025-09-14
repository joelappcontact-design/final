import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Alfortville',
  department: '94',
  population: '45000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Alfortville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier alfortville', 'serrurier urgence alfortville', 'ouverture porte alfortville', 'serrurier 24h alfortville', 'dépannage serrure alfortville']
};

export default function Page() {
  return <CityPage 
    cityName="Alfortville"
    citySlug="alfortville"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Alfortville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier alfortville", "serrurier urgence alfortville", "ouverture porte alfortville", "serrurier 24h alfortville", "dépannage serrure alfortville"]}
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