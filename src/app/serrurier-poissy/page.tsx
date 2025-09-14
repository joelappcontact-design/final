import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Poissy',
  department: '92',
  population: '38000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Poissy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier poissy', 'serrurier urgence poissy', 'ouverture porte poissy', 'serrurier 24h poissy', 'dépannage serrure poissy']
};

export default function Page() {
  return <CityPage 
    cityName="Poissy"
    citySlug="poissy"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Poissy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier poissy", "serrurier urgence poissy", "ouverture porte poissy", "serrurier 24h poissy", "dépannage serrure poissy"]}
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