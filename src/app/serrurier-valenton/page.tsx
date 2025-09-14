import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Valenton',
  department: '94',
  population: '13000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Valenton 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier valenton', 'serrurier urgence valenton', 'ouverture porte valenton', 'serrurier 24h valenton', 'dépannage serrure valenton']
};

export default function Page() {
  return <CityPage 
    cityName="Valenton"
    citySlug="valenton"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Valenton - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier valenton", "serrurier urgence valenton", "ouverture porte valenton", "serrurier 24h valenton", "dépannage serrure valenton"]}
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