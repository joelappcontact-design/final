import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Pierrefitte-sur-Seine Nord',
  department: '93',
  population: '15000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Pierrefitte-sur-Seine Nord 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier pierrefitte-sur-seine-nord', 'serrurier urgence pierrefitte-sur-seine-nord', 'ouverture porte pierrefitte-sur-seine-nord', 'serrurier 24h pierrefitte-sur-seine-nord', 'dépannage serrure pierrefitte-sur-seine-nord']
};

export default function Page() {
  return <CityPage 
    cityName="Pierrefitte-sur-Seine Nord"
    citySlug="pierrefitte-sur-seine-nord"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Pierrefitte-sur-Seine Nord - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier pierrefitte-sur-seine-nord", "serrurier urgence pierrefitte-sur-seine-nord", "ouverture porte pierrefitte-sur-seine-nord", "serrurier 24h pierrefitte-sur-seine-nord", "dépannage serrure pierrefitte-sur-seine-nord"]}
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