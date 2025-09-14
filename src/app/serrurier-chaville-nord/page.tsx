import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Chaville-Nord',
  department: '92',
  population: '20000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Chaville-Nord 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chaville-nord', 'serrurier urgence chaville-nord', 'ouverture porte chaville-nord', 'serrurier 24h chaville-nord', 'dépannage serrure chaville-nord']
};

export default function Page() {
  return <CityPage 
    cityName="Chaville-Nord"
    citySlug="chaville-nord"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Chaville-Nord - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chaville-nord", "serrurier urgence chaville-nord", "ouverture porte chaville-nord", "serrurier 24h chaville-nord", "dépannage serrure chaville-nord"]}
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