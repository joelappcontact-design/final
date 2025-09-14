import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Châtillon',
  department: '92',
  population: '37000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Châtillon 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chatillon', 'serrurier urgence chatillon', 'ouverture porte chatillon', 'serrurier 24h chatillon', 'dépannage serrure chatillon']
};

export default function Page() {
  return <CityPage 
    cityName="Châtillon"
    citySlug="chatillon"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Châtillon - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chatillon", "serrurier urgence chatillon", "ouverture porte chatillon", "serrurier 24h chatillon", "dépannage serrure chatillon"]}
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