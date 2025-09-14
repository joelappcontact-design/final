import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Fosses',
  department: '95',
  population: '10000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Fosses 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier fosses-95', 'serrurier urgence fosses-95', 'ouverture porte fosses-95', 'serrurier 24h fosses-95', 'dépannage serrure fosses-95']
};

export default function Page() {
  return <CityPage 
    cityName="Fosses"
    citySlug="fosses-95"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Fosses - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier fosses-95", "serrurier urgence fosses-95", "ouverture porte fosses-95", "serrurier 24h fosses-95", "dépannage serrure fosses-95"]}
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