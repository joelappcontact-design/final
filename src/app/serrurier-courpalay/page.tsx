import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Courpalay',
  department: '77',
  population: '400',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Courpalay 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier courpalay', 'serrurier urgence courpalay', 'ouverture porte courpalay', 'serrurier 24h courpalay', 'dépannage serrure courpalay']
};

export default function Page() {
  return <CityPage 
    cityName="Courpalay"
    citySlug="courpalay"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Courpalay - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier courpalay", "serrurier urgence courpalay", "ouverture porte courpalay", "serrurier 24h courpalay", "dépannage serrure courpalay"]}
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