import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Corbeil-Essonnes',
  department: '91',
  population: '52000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Corbeil-Essonnes 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier corbeil-essonnes', 'serrurier urgence corbeil-essonnes', 'ouverture porte corbeil-essonnes', 'serrurier 24h corbeil-essonnes', 'dépannage serrure corbeil-essonnes']
};

export default function Page() {
  return <CityPage 
    cityName="Corbeil-Essonnes"
    citySlug="corbeil-essonnes"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Corbeil-Essonnes - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier corbeil-essonnes", "serrurier urgence corbeil-essonnes", "ouverture porte corbeil-essonnes", "serrurier 24h corbeil-essonnes", "dépannage serrure corbeil-essonnes"]}
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