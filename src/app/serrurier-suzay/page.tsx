import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Suzay',
  department: '78',
  population: '200',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Suzay 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier suzay', 'serrurier urgence suzay', 'ouverture porte suzay', 'serrurier 24h suzay', 'dépannage serrure suzay']
};

export default function Page() {
  return <CityPage 
    cityName="Suzay"
    citySlug="suzay"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Suzay - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier suzay", "serrurier urgence suzay", "ouverture porte suzay", "serrurier 24h suzay", "dépannage serrure suzay"]}
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