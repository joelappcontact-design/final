import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Cormeilles-en-Parisis',
  department: '95',
  population: '23000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Cormeilles-en-Parisis 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier cormeilles-en-parisis', 'serrurier urgence cormeilles-en-parisis', 'ouverture porte cormeilles-en-parisis', 'serrurier 24h cormeilles-en-parisis', 'dépannage serrure cormeilles-en-parisis']
};

export default function Page() {
  return <CityPage 
    cityName="Cormeilles-en-Parisis"
    citySlug="cormeilles-en-parisis"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Cormeilles-en-Parisis - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier cormeilles-en-parisis", "serrurier urgence cormeilles-en-parisis", "ouverture porte cormeilles-en-parisis", "serrurier 24h cormeilles-en-parisis", "dépannage serrure cormeilles-en-parisis"]}
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