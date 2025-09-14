import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Ermont',
  department: '95',
  population: '28000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Ermont 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier ermont', 'serrurier urgence ermont', 'ouverture porte ermont', 'serrurier 24h ermont', 'dépannage serrure ermont']
};

export default function Page() {
  return <CityPage 
    cityName="Ermont"
    citySlug="ermont"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Ermont - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier ermont", "serrurier urgence ermont", "ouverture porte ermont", "serrurier 24h ermont", "dépannage serrure ermont"]}
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