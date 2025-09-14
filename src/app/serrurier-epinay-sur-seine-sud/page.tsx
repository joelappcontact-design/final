import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Épinay-sur-Seine Sud',
  department: '93',
  population: '27500',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Épinay-sur-Seine Sud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier epinay-sur-seine-sud', 'serrurier urgence epinay-sur-seine-sud', 'ouverture porte epinay-sur-seine-sud', 'serrurier 24h epinay-sur-seine-sud', 'dépannage serrure epinay-sur-seine-sud']
};

export default function Page() {
  return <CityPage 
    cityName="Épinay-sur-Seine Sud"
    citySlug="epinay-sur-seine-sud"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Épinay-sur-Seine Sud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier epinay-sur-seine-sud", "serrurier urgence epinay-sur-seine-sud", "ouverture porte epinay-sur-seine-sud", "serrurier 24h epinay-sur-seine-sud", "dépannage serrure epinay-sur-seine-sud"]}
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