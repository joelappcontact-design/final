import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Chilly-Mazarin',
  department: '91',
  population: '20000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Chilly-Mazarin 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chilly-mazarin', 'serrurier urgence chilly-mazarin', 'ouverture porte chilly-mazarin', 'serrurier 24h chilly-mazarin', 'dépannage serrure chilly-mazarin']
};

export default function Page() {
  return <CityPage 
    cityName="Chilly-Mazarin"
    citySlug="chilly-mazarin"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Chilly-Mazarin - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chilly-mazarin", "serrurier urgence chilly-mazarin", "ouverture porte chilly-mazarin", "serrurier 24h chilly-mazarin", "dépannage serrure chilly-mazarin"]}
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