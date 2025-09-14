import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Épinay-sur-Seine Nord',
  department: '93',
  population: '27500',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Épinay-sur-Seine Nord 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier epinay-sur-seine-nord', 'serrurier urgence epinay-sur-seine-nord', 'ouverture porte epinay-sur-seine-nord', 'serrurier 24h epinay-sur-seine-nord', 'dépannage serrure epinay-sur-seine-nord']
};

export default function Page() {
  return <CityPage 
    cityName="Épinay-sur-Seine Nord"
    citySlug="epinay-sur-seine-nord"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Épinay-sur-Seine Nord - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier epinay-sur-seine-nord", "serrurier urgence epinay-sur-seine-nord", "ouverture porte epinay-sur-seine-nord", "serrurier 24h epinay-sur-seine-nord", "dépannage serrure epinay-sur-seine-nord"]}
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