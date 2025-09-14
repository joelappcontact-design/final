import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Mareil-sur-Mauldre',
  department: '78',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Mareil-sur-Mauldre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier mareil-sur-mauldre', 'serrurier urgence mareil-sur-mauldre', 'ouverture porte mareil-sur-mauldre', 'serrurier 24h mareil-sur-mauldre', 'dépannage serrure mareil-sur-mauldre']
};

export default function Page() {
  return <CityPage 
    cityName="Mareil-sur-Mauldre"
    citySlug="mareil-sur-mauldre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Mareil-sur-Mauldre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier mareil-sur-mauldre", "serrurier urgence mareil-sur-mauldre", "ouverture porte mareil-sur-mauldre", "serrurier 24h mareil-sur-mauldre", "dépannage serrure mareil-sur-mauldre"]}
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