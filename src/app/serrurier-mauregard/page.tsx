import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Mauregard',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Mauregard 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier mauregard', 'serrurier urgence mauregard', 'ouverture porte mauregard', 'serrurier 24h mauregard', 'dépannage serrure mauregard']
};

export default function Page() {
  return <CityPage 
    cityName="Mauregard"
    citySlug="mauregard"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Mauregard - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier mauregard", "serrurier urgence mauregard", "ouverture porte mauregard", "serrurier 24h mauregard", "dépannage serrure mauregard"]}
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