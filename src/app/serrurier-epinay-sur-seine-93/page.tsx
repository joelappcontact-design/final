import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Épinay-sur-Seine',
  department: '93',
  population: '55000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Épinay-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier epinay-sur-seine-93', 'serrurier urgence epinay-sur-seine-93', 'ouverture porte epinay-sur-seine-93', 'serrurier 24h epinay-sur-seine-93', 'dépannage serrure epinay-sur-seine-93']
};

export default function Page() {
  return <CityPage 
    cityName="Épinay-sur-Seine"
    citySlug="epinay-sur-seine-93"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Épinay-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier epinay-sur-seine-93", "serrurier urgence epinay-sur-seine-93", "ouverture porte epinay-sur-seine-93", "serrurier 24h epinay-sur-seine-93", "dépannage serrure epinay-sur-seine-93"]}
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