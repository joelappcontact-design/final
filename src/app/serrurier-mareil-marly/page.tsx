import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Mareil-Marly',
  department: '78',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Mareil-Marly 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier mareil-marly', 'serrurier urgence mareil-marly', 'ouverture porte mareil-marly', 'serrurier 24h mareil-marly', 'dépannage serrure mareil-marly']
};

export default function Page() {
  return <CityPage 
    cityName="Mareil-Marly"
    citySlug="mareil-marly"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Mareil-Marly - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier mareil-marly", "serrurier urgence mareil-marly", "ouverture porte mareil-marly", "serrurier 24h mareil-marly", "dépannage serrure mareil-marly"]}
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