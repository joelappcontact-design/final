import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Grandchamp',
  department: '78',
  population: '300',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Grandchamp 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier grandchamp', 'serrurier urgence grandchamp', 'ouverture porte grandchamp', 'serrurier 24h grandchamp', 'dépannage serrure grandchamp']
};

export default function Page() {
  return <CityPage 
    cityName="Grandchamp"
    citySlug="grandchamp"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Grandchamp - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier grandchamp", "serrurier urgence grandchamp", "ouverture porte grandchamp", "serrurier 24h grandchamp", "dépannage serrure grandchamp"]}
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