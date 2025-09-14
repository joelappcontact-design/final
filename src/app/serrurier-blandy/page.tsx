import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Blandy',
  department: '77',
  population: '800',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Blandy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier blandy', 'serrurier urgence blandy', 'ouverture porte blandy', 'serrurier 24h blandy', 'dépannage serrure blandy']
};

export default function Page() {
  return <CityPage 
    cityName="Blandy"
    citySlug="blandy"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Blandy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier blandy", "serrurier urgence blandy", "ouverture porte blandy", "serrurier 24h blandy", "dépannage serrure blandy"]}
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