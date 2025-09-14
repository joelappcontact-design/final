import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Donnemarie-Dontilly',
  department: '77',
  population: '2800',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Donnemarie-Dontilly 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier donnemarie-dontilly', 'serrurier urgence donnemarie-dontilly', 'ouverture porte donnemarie-dontilly', 'serrurier 24h donnemarie-dontilly', 'dépannage serrure donnemarie-dontilly']
};

export default function Page() {
  return <CityPage 
    cityName="Donnemarie-Dontilly"
    citySlug="donnemarie-dontilly"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Donnemarie-Dontilly - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier donnemarie-dontilly", "serrurier urgence donnemarie-dontilly", "ouverture porte donnemarie-dontilly", "serrurier 24h donnemarie-dontilly", "dépannage serrure donnemarie-dontilly"]}
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