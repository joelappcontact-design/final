import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Épinay-sur-Seine',
  department: '93',
  population: '55000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Épinay-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier epinay-sur-seine', 'serrurier urgence epinay-sur-seine', 'ouverture porte epinay-sur-seine', 'serrurier 24h epinay-sur-seine', 'dépannage serrure epinay-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Épinay-sur-Seine"
    citySlug="epinay-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Épinay-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier epinay-sur-seine", "serrurier urgence epinay-sur-seine", "ouverture porte epinay-sur-seine", "serrurier 24h epinay-sur-seine", "dépannage serrure epinay-sur-seine"]}
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