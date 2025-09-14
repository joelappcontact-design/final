import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Rampillon',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Rampillon 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier rampillon', 'serrurier urgence rampillon', 'ouverture porte rampillon', 'serrurier 24h rampillon', 'dépannage serrure rampillon']
};

export default function Page() {
  return <CityPage 
    cityName="Rampillon"
    citySlug="rampillon"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Rampillon - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier rampillon", "serrurier urgence rampillon", "ouverture porte rampillon", "serrurier 24h rampillon", "dépannage serrure rampillon"]}
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