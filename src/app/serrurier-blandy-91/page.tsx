import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Blandy',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Blandy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier blandy-91', 'serrurier urgence blandy-91', 'ouverture porte blandy-91', 'serrurier 24h blandy-91', 'dépannage serrure blandy-91']
};

export default function Page() {
  return <CityPage 
    cityName="Blandy"
    citySlug="blandy-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Blandy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier blandy-91", "serrurier urgence blandy-91", "ouverture porte blandy-91", "serrurier 24h blandy-91", "dépannage serrure blandy-91"]}
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