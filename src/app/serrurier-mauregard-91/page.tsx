import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Mauregard',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Mauregard 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier mauregard-91', 'serrurier urgence mauregard-91', 'ouverture porte mauregard-91', 'serrurier 24h mauregard-91', 'dépannage serrure mauregard-91']
};

export default function Page() {
  return <CityPage 
    cityName="Mauregard"
    citySlug="mauregard-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Mauregard - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier mauregard-91", "serrurier urgence mauregard-91", "ouverture porte mauregard-91", "serrurier 24h mauregard-91", "dépannage serrure mauregard-91"]}
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